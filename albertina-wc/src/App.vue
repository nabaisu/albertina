<template>
<div id="albertina-app" class="container-fluid d-flex h-100 flex-column">
<link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sketchy/bootstrap.min.css" rel="stylesheet" integrity="sha384-2kOE+STGAkgemIkUbGtoZ8dJLqfvJ/xzRnimSkQN7viOfwRvWseF7lqcuNXmjwrL" crossorigin="anonymous">
    <nav
      class="navbar navbar-no-padding navbar-fluid navbar-expand-md navbar-light bg-light"
    >
      <div class="container-fluid">
        <a style="cursor: pointer;" @click="chosenRecipe = ''" class="navbar-brand">
          <span class="text-danger font-weight-bold">Lista</span>
        </a>
        <a style="cursor: pointer;" class="navbar-brand" @click="getRandomFrase()">
          <img
            :src="imagemAlbertina"
            style="height:2.25rem;"
            class="d-inline-block mr-3"
          />
        </a>
        <a style="cursor: pointer;" class="navbar-brand font-weight-bold" @click="getRandomRecipe()"><span class="text-warning">Albertina</span> <span class="text-success">Escolhe</span></a>
      </div>
    </nav>
    <div v-if="Boolean(chosenRecipe) === false" class="">
      <div class="d-flex flex-wrap flex-row justify-content-center">

      <div v-for="(recipe, i) in recipesData" :key="i" @click="chosenRecipe = recipesData[i]" class="card my-1" style="cursor:pointer; width:11rem;">
       
          <img class="card-img-top" :src="recipe.image || imagemAlbertina" style="height: 10rem;" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title text-center">{{recipe.name}}</h5>
            <div class="d-flex">
              <span v-if="recipe.totalTime" class="btn" :class="sortAppetizer(recipe.totalTime)">{{recipe.totalTime}}</span>
              <span v-if="recipe.recipeCategory" class="btn" :class="sortAppetizer(recipe.recipeCategory)">{{recipe.recipeCategory}}</span>              
            </div>
          </div>
        </div>
      
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="d-flex mb-2">
        <div class="flex-grow-1 w-100">
          <h2 class="font-weight-bold">{{chosenRecipe.name}}</h2>
          <p class="text-muted">
            <span v-if="chosenRecipe.prepTime"> Tempo de preparação: {{chosenRecipe.prepTime}}. </span>
            <span v-if="chosenRecipe.cookTime"> Tempo de cozinhar: {{chosenRecipe.cookTime}}. </span>
            <span v-if="chosenRecipe.totalTime"> Total: {{chosenRecipe.totalTime}}. </span>
          </p>
          <div class="d-flex flex-row">
            <span v-if="chosenRecipe.recipeCategory" class="btn" :class="sortAppetizer(chosenRecipe.recipeCategory)">{{chosenRecipe.recipeCategory}}</span>
            <span v-if="chosenRecipe.recipeCuisine" class="btn" :class="sortTipoDeCozinha(chosenRecipe.recipeCuisine)">{{chosenRecipe.recipeCuisine}}</span>
          </div>
        </div>
        <p v-if="chosenRecipe.author.name" class="align-self-center flex-shrink-1">por: <span class="h5 text-danger">{{chosenRecipe.author.name}}</span></p>
      </div>
      <div v-if="chosenRecipe.recipeIngredient.length !== 0">
      <h3>Ingredientes <span class="text-muted">(total: {{chosenRecipe.recipeIngredient.length}})</span></h3>
      <ul>
      <li v-for="(ingredient, j) in chosenRecipe.recipeIngredient" :key="'ing-'+j">{{ingredient}}</li>
      </ul>
      </div>
      <div v-if="chosenRecipe.recipeInstructions.length !== 0">
      <h3>Preparação <span class="text-muted">({{chosenRecipe.recipeInstructions.length}} passos)</span></h3>
      <ul>
      <li v-for="(step, j) in chosenRecipe.recipeInstructions" :key="'prep-'+j">{{step.text}}</li>
      </ul>
      </div>
    </div>
    <div v-if="showModal" @click="closeModal">
    <transition name="modal mb-2">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body text-center">
                <p v-if="Boolean(chosenSentence) !== false"><span class="h3 font-weight-bold">"{{chosenSentence}}"</span><br> - Albertina</p>
                <div v-else>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo. <br><br><br><br><br><br><br><br><br></p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo. <br><br><br><br><br><br><br><br><br></p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                  <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="footer text-center my-3">Feito com ❤️ pelo joao | <a class="text-danger" style="cursor:pointer;" @click="showModal=true">quem é a Albertina ?</a></div>
  </div>
</template>

<script>
const recipeData = [{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies e mais qualquer coisa que eu queira meter asqui","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":""},"prepTime":"10 mins","cookTime":"","totalTime":"10 mins","recipeCategory":"pronto, agora voau ","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},];
const frasesAlbertina = ["viva o pinto da costa", "isso é que é"]
export default {
  name: "app",
  type: "",
  data() {
    return {
      recipeData: {},
      chosenRecipe: "",
      imagemAlbertina: 'data:image/png;base64,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',
      showModal: false,
      chosenSentence: "",
    };
  },
  methods: {
    getRandomRecipe() {
      this.chosenRecipe = this.recipesData[Math.floor(Math.random() * this.recipesData.length)]
    },
    getRandomFrase() {
      this.chosenSentence = this.frasesAlbertina[Math.floor(Math.random() * this.frasesAlbertina.length)]            
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.chosenSentence = "";
      this.aboutAlbertina = "";
    },
    sortAppetizer(type) {
      switch (type) {
        case 'appetizer':
          return 'btn-success';
          break;
        case 'dinner':
          return 'btn-danger';
          default:
            return 'btn-warning'
      }
    },
    sortTipoDeCozinha(type) {
      switch (type) {
        case 'appetizer':
          return 'btn-success';
          break;
        case 'dinner':
          return 'btn-danger';
          default:
            return 'btn-warning'
      }
    },
  },
  created() {
    this.recipesData = recipeData;
    this.frasesAlbertina = frasesAlbertina;
  }
};
</script>

<style scoped>
.nav-container{
    border-width:0;
    box-shadow:none;
    background-color: aliceblue;
}
.navbar {
    background-color: #99ccff; 
    border: 0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-body {
    max-height: calc(100vh - 15vh);
    overflow-y: auto;
}
.modal-dialog {
  min-width: 50vw;
  max-width: 90vw;
}
</style>
