<template>
  <div id="albertina-app" class="container-fluid d-flex h-100 flex-column">
    <link
      href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sketchy/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-2kOE+STGAkgemIkUbGtoZ8dJLqfvJ/xzRnimSkQN7viOfwRvWseF7lqcuNXmjwrL"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-no-padding navbar-fluid navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a tabindex="0" aria-label="lista de receitas" style="cursor: pointer;" @click="chosenRecipe = ''" @keyup.enter="chosenRecipe = ''" class="navbar-brand">
          <span class="text-danger font-weight-bold">Lista</span>
        </a>
        <a tabindex="0" aria-label="página inicial" style="cursor: pointer;" class="navbar-brand" @click="getRandomFrase()" @keyup.enter="getRandomFrase()"><img alt="albertina logo" :src="imagemAlbertina" style="height:2.25rem;" class="d-inline-block mr-3" />
        </a>
        <a
          tabindex="0"
          aria-label="escolher uma receita ao calhas"
          style="cursor: pointer;"
          class="navbar-brand font-weight-bold"
          @click="getRandomRecipe()"
          @keyup.enter="getRandomRecipe()"
          
        >
          <span class="text-warning">Albertina </span>
          <span class="text-success">Escolhe</span>
        </a>
      </div>
    </nav>
    <div v-if="Boolean(chosenRecipe) === false" class>
      <input
        class="form-control w-2"
        placeholder="filtragem ..."
        v-model="searchRecipe"
        type="search"
      />
      <div class="d-flex flex-wrap flex-row justify-content-center">
        <div
          v-for="(recipe, i) in filteredRecipes"
          :key="i"
          @click="chosenRecipe = filteredRecipes[i]"
          @keyup.enter="chosenRecipe = filteredRecipes[i]"
          class="card my-1"
          style="cursor:pointer; width:11rem;"
           tabindex="0" :aria-label="recipe.name"
           role="button" aria-pressed="false"
        >
          <img
            class="card-img-top"
            :src="getImageThumbnail(recipe.image)"
            style="height: 10rem;"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title text-center">{{recipe.name}}</h5>
            <div class="d-flex">
              <span
                v-if="recipe.totalTime"
                class="btn"
                :class="sortAppetizer(recipe.totalTime)"
              >{{recipe.totalTime}}</span>
              <span
                v-if="recipe.recipeCategory"
                class="btn"
                :class="sortAppetizer(recipe.recipeCategory)"
              >{{recipe.recipeCategory}}</span>
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
            <span v-if="chosenRecipe.prepTime">Tempo de preparação: {{chosenRecipe.prepTime}}.</span>
            <span v-if="chosenRecipe.cookTime">Tempo de cozinhar: {{chosenRecipe.cookTime}}.</span>
            <span v-if="chosenRecipe.totalTime">Total: {{chosenRecipe.totalTime}}.</span>
          </p>
          <div class="d-flex flex-row">
            <span
              v-if="chosenRecipe.recipeCategory"
              class="btn"
              :class="sortAppetizer(chosenRecipe.recipeCategory)"
            >{{chosenRecipe.recipeCategory}}</span>
            <span
              v-if="chosenRecipe.recipeCuisine"
              class="btn"
              :class="sortTipoDeCozinha(chosenRecipe.recipeCuisine)"
            >{{chosenRecipe.recipeCuisine}}</span>
          </div>
        </div>
        <p v-if="chosenRecipe.author.name" class="align-self-center flex-shrink-1">
          por:
          <span class="h5 text-danger">{{chosenRecipe.author.name}}</span>
        </p>
      </div>
      <div v-if="chosenRecipe.recipeIngredient.length !== 0">
        <h3>
          Ingredientes
          <span class="text-muted">(total: {{chosenRecipe.recipeIngredient.length}})</span>
        </h3>
        <ul>
          <li
            v-for="(ingredient, j) in chosenRecipe.recipeIngredient"
            :key="'ing-'+j"
          >{{ingredient}}</li>
        </ul>
      </div>
      <div v-if="chosenRecipe.recipeInstructions.length !== 0">
        <h3>
          Preparação
          <span class="text-muted">({{chosenRecipe.recipeInstructions.length}} passos)</span>
        </h3>
        <ul>
          <li v-for="(step, j) in chosenRecipe.recipeInstructions" :key="'prep-'+j">{{step.text}}</li>
        </ul>
      </div>
    </div>
    <div v-if="showModal" @click="closeModal" @keyup="closeModal">
      <transition name="modal mb-2">
        <div class="modal-mask" ref="modal">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
            <button type="button" class="close" tabindex="1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                <div class="modal-body text-center">
                  <p v-if="Boolean(chosenSentence) !== false">
                    <span class="h3 font-weight-bold">"{{chosenSentence}}"</span>
                    <br />- Albertina
                  </p>
                  <div v-else>
                    <p>A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                    <p>
                      A Albertina é quem ajuda a minha família desde há muito tempo.
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                    <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                    <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                    <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                    <p>A Albertina é quem ajuda a minha família desde há muito tempo.</p>
                    <p>
                      A Albertina é quem ajuda a minha família desde há muito tempo.
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
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
    <div class="footer text-center my-3">
      Feito com ❤️ pelo <a href="https://nabaisu.com/?utm_source=albertina&utm_medium=footer-link&utm_campaign=albertina" target="_blank" class="text-success">joao</a> |
      <a
        target=""
        class="text-warning"
        style="cursor:pointer;"
        @click="showModal=true"
        @keyup.enter="showModal=true"
        tabindex="0"
      >quem é a Albertina ?</a> | 
      
      <a class="text-danger" target="_blank" href="https://www.buymeacoffee.com/nabais">Obrigado joao</a>
    </div>
    
  </div>
</template>

<script>
const recipeData = [
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "BOLO DE IOGURTE\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Armanda"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 iogurte natural\r",
      "3 caixas (do iogurte) de farinha\r",
      "3 caixas (do iogurte) de açúcar\r",
      "1 caixa (do iogurte) de óleo\r",
      "3 ονοs \r",
      "1 colher de chá de fermento\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Batem-se as gemas com o açúcar, depois óleo, farinha e fermento e iogurte e for fim as claras en castelo.\r"
      },
      {
        "@type": "HowToStep",
        "text": "forma de buraco, untada.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "CREME DE ABACATE\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Teresa"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 abacate,\r",
      "1 sumo de 1 limão, \r",
      "6 conchas (de açucareiro) de açúcar e \r",
      "1 gota de leite,\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Bate tudo com varinha magica, põe no frigorifico e serve, em taça de sobremesa.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "BACALHAU À JOÃO DO PIPO\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Tem-se o bacalhau demolhado e escamado e assa- se na grelha, ligeiramente untado, para não pegar.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Faz-se uma cebolada com cebola, bastante azeite, alho, salsa, louro, 2 piripiris, 2 colheres de chá de colorau e deixe se a cebola fritar bem, sem esturrar.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Mete-se o bacalhau nesta cebolada, com 0,5 dl de vinho branco.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deixa-se Ferver lentamente e depois apaga-se o lume e deixa-se ficar, quanto mais tempo, melhor.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Na altura de servir pode pôr-se uma colher de maionese por cima do bacalhau.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Acompanha batatas cozidas.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "MASSA PARA FOLHADOS\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "250 g de margarina para folhados\r",
      "250 g de farinha\r",
      "1 pitada de sal\r",
      "1 ovo inteiro\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Põe-se a água a aquecer com um bocado de sal. Junta-se à farinha o ovo inteiro, 1 pitada de sal e a água, a pouco e pouco, amassando com a mão até ficar com consistência semelhante à massa tenra.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põe-se farinha na tábua e amassa-se novamente, batendo com a massa. Põe-se farinha no rolo e estende-se por igual, em todas as direções, formando um rectângulo grande.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Parte-se a margarina en 6 bocados iguais.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Barra-se com um dos bocados a massa toda e dobra-se depois a massa em 3 no sentido do comprimento e depois no da largura.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Estende-se novamente com o rolo, barra-se outra vez e embrulha-se do mesmo modo.\r"
      },
      {
        "@type": "HowToStep",
        "text": "E assim sucessivamente as 6 vezes.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "TROUXAS COM CHOURIÇO \r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "250 g de farinha \r",
      "30 g de fermento do padeiro\r",
      "1 dl de leite \r",
      "50 g de manteiga\r",
      "60 g de banha\r",
      "1 ovo inteiro\r",
      "1 colher de chá de sal fino\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Desmancha-se o fermento e mistura-se com todos os ingredientes, amassando bem.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Estende-se com o rolo e formam-se pequenas trouxas com chouriço dentro.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Pintam-se com ovo e deixam-se descansar meia hora, indo em seguida a correr em forno quente.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "BACALHAU COM CREME E HORTALIÇA\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Coze-se bacalhau, hortaliça que se quiser (couves, etc), batatas e ovos. No fim de cozida a hortaliça tempera-se com azeite e vinagre. O bacalhau é lascado e os ovos às rodelas.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Frita-se bastante cebola às rodelas, en bas. tante azeite, e no fundo do tabuleiro põe-se uma camada de cebola com azeite.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tem-se feito um creme com leite, farinha e gemas e vão-se alternando camadas de bacalhau, camadas de hortaliça, creme, cebola e assim sucessivamente. A última camada deve ser de creme\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao homo para cozer tudo mais um bocadinho e serve-se no mesmo tabuleiro.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "COGUMELOS DE CHITA\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Coze-se um ovo por pessoa faz-se um corte nos ovos e tira-se a gema com cuidado.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Entretanto, contam-se os tomates ao meio, pelam-se e pintam-se-lhe manchinhas com o molho, depois.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Faz-se um molho branco ao qual se juntam as gemas, bocadinhos de atum, pickles, feijão verde, azeitonas, sal e pimenta. Recheiam-se as claras com este creme, tapam-se com os tomates e põe-se numa travessa, atapetada de alface cortada miudinha.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "RISSÓIS\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 chávena de água,\r",
      "1 chávena de leite,\r",
      "1 colher de margarina, sal, pimenta\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "l casca de limão. \r"
      },
      {
        "@type": "HowToStep",
        "text": "Deixa-se ferver.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Juntam-se 2 chávenas de farinha, todas de uma vez, e bate-se bem.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "SALMÃO FINGIDO\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Eloysa"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Corta-se o peixe em cru (garoupa ou peixe rijo) em bocados pequeninos. Tempera-se bem com vinho branco, alho, sal e pimenta.\r"
      },
      {
        "@type": "HowToStep",
        "text": "À parte põe-se um pouco de azeite (para uma garoupa de 1kg, 1dl de azeite) numa caçarola, 1 dente de alho cortado ao meio e vai ao lume. Quando o alho estiver louro tira-se e deita-se polme de tomate ou tomate de conserva (1 colher de concentrado ou 2 tomates bem maduros). Deixa-se ferver e engrossar.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deita-se o peixe lá para dentro, tapa-se e deixa-se cozer\r"
      },
      {
        "@type": "HowToStep",
        "text": "Quando estiver cozido, retira-se do lume deixa-se arrefecer e juntam-se 2 ou 3 ovos inteiros, batidos.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põe-se numa forma em feitio de peixe, untado de banha e farinha e vai ao forno.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Cobre-se com molho maionese serve-se com salada russa.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "PASTELÃO DE FIAMBRE\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 kg de batatas, \r",
      "250 g de fiambre, \r",
      "120 g de teifa, \r",
      "60g de farinha, \r",
      "6 ovos, sal, pimenta.\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Cozem-se as batatas com casca e depois passam-se. Junta-se a manteiga, mais ou meno derretida, sal, pimenta, as gemas, o fiambre picado, a farinha e, por último as claras em castelo.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao forno e depois pode barrar-se com molho bechamel.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "BACALHAU DOURADO\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Corta-se a cebola às rodas fininhas e refoga-se até ficar loura.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tem-se o bacalhau desfiado (não precisa ser demolhado) que se passe por água e deita-se no refogado para refogar também.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Fritam-se batatas aos palitos finos e, na hora de ir para a mesa, juntam-se os ovos.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "FILETES NO FORNO\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "D. M. Luisa"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Cortam-se os filetes grossos ou pescada as postas e deixam- se estar um bocado só temperados com sal.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Cobre-se e fundo de um pyrex com azeite, cebola às rodas fininhas, vinho branco e um dente de alho, se se quiser.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Na altura de pôr ao lume, tira-se o sal que possa estar a mais no peixe, cobre-se cada filete de pão ralado e 2 ou 3 ervilhinhas de manteiga.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao forno e vai-se refogando com próprio molho, para o pão ralado não secar.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Serve-se com puré de batata\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "POLVO COM MAIONESE \r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "TV"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Junta-se a 300 g de arroz crioulo (cozido em bastante água e passado depois for água fria) 3 colheres de sopa de azeite, sumo de 1 limão, sal, pimenta e bastante salsa picada (a colher bem cheia).\r"
      },
      {
        "@type": "HowToStep",
        "text": "Cozem-se os polvos em pouca água, com cebola, cerca de 20 minutos (quando a cebola estiver cozida o polvo também está).\r"
      },
      {
        "@type": "HowToStep",
        "text": "O polvo tem-se primeiro em água e depois tira-se-lhe a pele.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Guarda-se a coroa de tentáculos de um polvo pequeno (200 g) para guarnecer, depois de cozido. O resto (cerca de 500g) parte-se aos bocadinhos pequenos.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Faz-se uma maionese com 2 gemas e 2dl de óleo. Junta-se 1kg de berbigão e o polvo.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põe-se no meio de um prato redondo, cobre-se com rodelas de ovo cozido (2) e depois com o arroz. Coloca-se o polvo, aberto, por cima e entre os tentáculos, umas gambas.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "BACALHAU COM WHISKY E CARIL\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Celeste"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Faz-se um refogado com bastante cebola, óleo e margarina, sem queimar, mas bem louro. Junta-se 1kg de tomate, 1 colher de chá de caril, 1/2 copo de vinho de whisky e deixa-se apurar bem. Passa-se pelo passe-vite.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Junta-se 250g de natas e 1l de molho branco, grosso, e queijo ralado.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Lasca-se o bacalhau cozido e junta-se no molho.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao forno a gratinar.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "TARTE DE CEBOLA\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Nêta"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 Massa de tarte\r",
      "1 kg de cebola para uma tarte grande.\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Corta-se a cebola às rodelas fininhas, vai a fritar com margarina e óleo, em lume brando, pelo menos 1⁄2 hora, até a cebola ficar dourada, mas não queimada.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Misturam-se 2 ovos inteiros, batidos, 50 g queijo ralado, 125 g de natas e sal, pimenta e noz moscada q.b.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Sobre a massa de tarte meio cozida, deita-se o recheio e sobre este nozinhas de manteiga e queijo ralado e vai ao forno a gratinar.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "LULAS NO FORNO\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Celeste"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Arranjam-se as lulas e cortam-se às rodas e cabeças.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Pica-se uma cebola bem picada e refoga-se com um pouco de azeite, até ficar lourinha.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põem-se as lulas lá dentro (sem tempero), um pouco de salsa, tapa-se e deixa-se cozer. (Se for preciso, junta-se uma pinguinha de água).\r"
      },
      {
        "@type": "HowToStep",
        "text": "À parte faz-se molho de tomate, temperado com caldo knorr de galinha, 1 colher de chá de açúcar e pimenta.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Noutro tacho faz-se molho branco, bastante grosso, temperado com sal, pimenta, savora, sumo de limão e junta-se o molho de tomate e as lulas. Rectificar o tempero. Vai ao forno e acompanha com arroz branco, seco, enfeitado com salsa picada.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "PESCADA COM CARIL \r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Celeste"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Compram-se filetes tempera-se com sal, pimenta, limão e deixam-se ficar umas horas.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Arranjam-se alguns camarões.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Molho:\r"
      },
      {
        "@type": "HowToStep",
        "text": "Refoga-se um bocado, numa porção boa de cebola. Junta-se tomate, 4 ou 5 maçãs (reinetas) descascadas e partidas, alho, uma folha de louro, um ramo de salsa e piripiri.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deixa-se apurar e depois junta-se 2 colheres de sobremesa de caril e deixa-se refogar mais um bocado. Passa-se pelo passe-vite ou bate-se com a varinha.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Faz-se um bocado de molho bechamel ralo e junta-se tudo, de modo a dar para tapar os filetes.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Os filetes são fritos em óleo, sem passar por nada. \r"
      },
      {
        "@type": "HowToStep",
        "text": "Põem-se os filetes num pyrex, os camarões por cima e depois cobre-se com o molho e vai ao forno.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Acompanha com arroz branco, solto.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "MOUSSE DE ATUM\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Nêta"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "3 colheres de sopa de cebola picada \r",
      "20 g de margarina,\r",
      "4 dl caldo de peixe\r",
      "6 folhas de gelatina\r",
      "500 g de atum \r",
      "125 g de natas\r",
      "1 pouco Cognac, vermute.\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Refoga-se ligeiramente a cebola, na margarina, junta-se o caldo, a gelatina derretida num copo de vinho branco ou vermute, e o atum.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Mistura-se tudo e bate-se com o triturador.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Junta-se 3 colheres de sopa de cognac ou Madeira, sal, pimenta e noz moscada.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Depois de frio, juntam-se 125g de natas batidas, mistura-se e vai para a frigorífico, em forma untada com óleo!\r"
      },
      {
        "@type": "HowToStep",
        "text": "Desenforma-se e enfeita-se.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "ATUM COM MASSA\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Nêta"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Coze-se a massa (búzios, cotovelos ou espirais), escorre-se e passa-se por água fria.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Cozem-se ervilhas.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põe-se nam pyrex, alternadamente, massa, envilhas, atum lascado.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Pica-se uma cebola e frita-se levemente em margarina (2 colheres). Juntam-se 2 colheres de farinha, mexe-se e junta-se leite, fora do lume, aos poucos, para fazer uma espécie de bechamel. Mistura-se depois uma lata de sopa de cogumelos ou sopa de pacote, desfeita num copo de água. Vai ao lume a cozer.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deita-se por cima da massa no tabuleiro de pyrex.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põe-se pão ralado por cima, com bocadinhos de margarina e vai ao forno.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "ROLO DE FIAMBRE\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Nêta"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 kg carne de porco\r",
      "0,5 kg de fiambre\r",
      "1 chávena e meia de leite \r",
      "2 ovos \r",
      "1 chavena de cream crackers ralados (12)\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Passam-se as carnes pela máquina (en cru), junta-se tudo, tempera-se com sal e pimenta e faz-se um rolo, apertando bem.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao forno em tabuleiro untado, e põe-se por cima pão ralado e nozinhas de margarina.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Borrifa-se, de vez em quando com vermute seco.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Fica muito bem acompanhado do seguinte molho de mostarda: (link para o molho de mostarda)\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "MOLHO DE MOSTARDA EM PUDIM \r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "4 ovos\r",
      "3/4 chávena de açúcar\r",
      "1 envelope de gelatina em pó (3 colheres de chá rasas)\r",
      "1,5 colher de chá de mostarda em pó\r",
      "1/4 colher de chá de sal \r",
      "1 chávena de água \r",
      "1/2 chávena de vinagre de cidra \r",
      "1/2 chávena de natas.\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "É feito em banho-maria.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Batem-se os ovos. Junta-se a água e o vinagre (se não houver de cidra, outro bastante forte) aos ovos e depois a mistura do pós (açúcar, gelatina, mostarda e sal) que lá devem estar misturados.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Continua-se a cozinhar (em banho-maria) até engrossar.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deixa-se arrefecer e juntam-se as natas batidas. Deita-se numa forma e vai para o frigorífico.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Desenforma para servir.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "FRANGO COM COGUMELOS\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Natividade"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 frango, \r",
      "1 lata de 90 g de cogumelos e \r",
      "125 g de natas,\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Parte-se o frango em cru, tempera-se com sal e margarina (um bocado bom) e leva-se as lume baixinho, tapado.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tira-se, depois de cozido, e junta-se os cogumelos e vai a ferver um bocadinho (não muito).\r"
      },
      {
        "@type": "HowToStep",
        "text": "Quando estiver para ir para a mesa, juntam-se as natas e volta a ferver mais uns dois minutos.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "BACALHAU COM NATAS E CARIL\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "2 postas de bacalhau cozido\r",
      "1 colher de sopa de margarina\r",
      "1 cebola picada\r",
      "2 ovos cozidos \r",
      "1,5 colher de doce de mostarda savora\r",
      "0,5 kg de batatas fritas aos cubos\r",
      "1,5 colher de queijo ralado\r",
      "0,5 l de leite ou um pouco mais\r",
      "1 alho picado\r",
      "1 colher de chá de caril\r",
      "2 colheres de sopa de maizena\r",
      "150 g de natas\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Com o leite, 2 colheres de maizena e a margarina, faz-se um bechamel grosso.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Aloira-se muito a cebola em margarina e o alho.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deita-se para dentro o bacalhau às lascas e deixa-se refogar. Depois vai para dentro do bechamel, junta-se a mostanda, caril, as batatas fritas, o queiro e as natas e o ovo cozido aos bocadinhos.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tempera-se de sal, pimenta e limão e vai ao forno num pyrex polvilhado com pão ralado.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "EMPADAS\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "250 g de farinha\r",
      "125 g de margarina\r",
      "1 forminho de água \r",
      "1 ovo inteiro\r",
      "1 pitada de sal\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Amassa-se tudo pouco, tendem-se finas, formam-se as latinhas e conta-se uma tampa redonda para cima.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põe-se o recheio que se quiser e vai ao forno.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "BACALHAU ESPIRITUAL\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 pão de forma dos grandes\r",
      "3 postas de bacalhau cozido\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "molho branco bem temperado (1/2 l de leite, 4 colh. farinha)\r"
      },
      {
        "@type": "HowToStep",
        "text": "Parte-se o pão às fatias e molha-se bem no leite. Espreme-se entre as maos e forra-se bem num pyrex (fundo e lados)\r"
      },
      {
        "@type": "HowToStep",
        "text": "Poe-se nas lume, a cozer em bastante azeite, uma porção boa de cebola picade e um pouco de alho. Depois de bem cozida, deita-se o bacalhau esfarelado grosso.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Ferve bem na cebola, deita-se un pouco de molho branco para ligar bem e tempera-se com bastante limão e pimenta.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Poe-se depois por cima do pão uma camada deste bacalhau, apertando bem para ligar à camada de baixo!\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tem-se um bocado de molho de tomate bem temperado e aperta-se tambem, fazendo buracos para deixar introduzir na camada anterior e ligar bem. Outra vez molho branco. E outra vez pão embebido em leite, bacalhau, tomate e molho branco, com que acaba.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Aperta-se bem e fazem-se buracos com garfo para o molho entrar e ligar bem.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deve-se esperar umas horas antes de ir para o forno\r"
      },
      {
        "@type": "HowToStep",
        "text": "Na altura de ir para o forno, põe-se pão ralado.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "COROA DE PADRE\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Cozem-se batatas com bacalhau e passam-se pelo passe-vite. Deita-se um bocado de manteiga e leite para fazer uma papa, nem grossa nem fina e juntam-se umas gemas de ovo (4).\r"
      },
      {
        "@type": "HowToStep",
        "text": "Põe-se num prato pyrex, à roda, deixando una cavidade no meio, que se enche com molho branco.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Batem-se as claras en castelo e põem-se à volta.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao forno a alourar.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "CALDEIRADA DE CABRITO \r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Laura"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Corta-se a cabrito aos bocados, tempera-se com alho, sal, colorau, louro, pimenta e vinho branco. Deixa-se estar assim um bocado.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Se o cabrito não for tenro, deixa-se cozer, neste tempero, um bocadinho (não muito).\r"
      },
      {
        "@type": "HowToStep",
        "text": "Poe-se depois no fundo de uma panela (pode ser de pressão, com a grelha) bastante cebola as rodas, uma camada de carne, por cima uma camada de batatas às rodas grossas, uma camada de cebola, e assim sucessivamente. Deita-se o resto do molho dentro, um bocadinho de azeite, um bocadinho de banha de porco e um bocadinho de margarina e um ramo de salsa.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Se houver pimentos, poem-se umas tirinhas e tomate en bocados ou passado. Não esquecer o jindungo! Poe-se no fundo, partido ou gotas.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Não leva água.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Se o cabrito for tenro, pode-se por tudo em cru.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Deixa-se ferver cerca de 10 minutos na panela de pressão e depois de apagado, mais um bocado. Se preciso, deixa-se apurar!\r"
      },
      {
        "@type": "HowToStep",
        "text": "Não se mexe.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "FRANGO FRITO\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Laura"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Arranja-se um franguinho bom, que se trita inteiro, dentro de um tacho com bastante azeite, até ficar bem lourinho.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tira-se um bocado de azeite. Pica-se uma cebolinha, um dente de alho, uma folha de louro, um bocadinho de colorau, pimenta e jindungo e deixa-se refogar no azeite que ficou, tendo tirado primeiro o frango.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Quando está tudo apuradinho, corta-se uma cebola às rodas e deixa-se refogar até ficar morta. Junta-se então o frango, poe-se-lhe água que dê para cozer un chouriço inteiro e uma farinheira, batatas partidas ao meio e deixa de server, dando uma fervura ao frango e chourico, antes de meter as batatas.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Coze tapado.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Quando está quase pronto põe-se uma colher de sopa de vinagre e tapa-se outra vez.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "FILETES DE ESPADA\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Num pyrex, põe-se margarina a barrar e por cima cebola picada, previamente frita em azeite, rodelas de tomate sem pele nem grainhas e depois os filetes temperados com sal e pimenta.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Por cima dos filetes, nova camada de cebola, tomate, queijo ralado na altura (ou às lascas, pequenas) e natas a cobrir.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao forno a cozer até alourar.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "QUICHE DE ESPINAFRES \r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Celeste"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Alho francês alourado en margarina.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Espinafres cozidos e escorridos.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Por cima, creme feito com 0,5 l de leite, 1 pacote de natas, 3 ovos + 2 gemas.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai ao forno a alourar.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "EMPADÃO DE CENOURA \r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "São"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "1 alho francês\r",
      "3 cenouras\r",
      "1/2 pimentão médio\r",
      "1/2 couve flor\r",
      "1 courgette pequena\r",
      "300 g de cogumelos\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Coze em água e sal cerca de 1 kg de cenouras. \r"
      },
      {
        "@type": "HowToStep",
        "text": "Depois de cozidas, escorre-se a água e junta 1 caixa de natas e 2 colheres de manteiga.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tritura com varinha mágica.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Adicione, peneirando e batendo, 2 colheres de sopa de farinha de trigo (não é preciso voltar ao lume).\r"
      },
      {
        "@type": "HowToStep",
        "text": "molho de soja\r"
      },
      {
        "@type": "HowToStep",
        "text": "Frite o alho francês em 1 chávena de azeite e adicione o sal.\r"
      },
      {
        "@type": "HowToStep",
        "text": "No intervalo de 3 a 4 minutos!\r"
      },
      {
        "@type": "HowToStep",
        "text": "Acrescente os outros vegetais sem deixar juntar água. No fim acrescente o molho de soja a gosto.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Farofa: 2 chávenas de farinha + 1 colher de margarina.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Disponha num pyrex o refogado de legumes, o puré cobrindo os legumes e depois a farofa\r"
      },
      {
        "@type": "HowToStep",
        "text": "Vai no forno\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "ALMÔNDEGAS DE FRICASSÉ\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Tempera a carne picada com um pouco de chourico (facultativo), sal, pimenta, alho espremido, noz moscada e pão embebido en leite, 1 ovo e as claras (2) dos ovos que vai usar no fricassé. Mistura bem.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Tendem-se as bolas e envolvem-se en farinha.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Num tacho, põe-se cebola picada com azeite e refoga muito ligeiramente (tapado). \r"
      },
      {
        "@type": "HowToStep",
        "text": "Junta 1/2 copo de vinho branco e depois água suficiente para cobrir as almondegas.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Quando estiver a ferver, colocam-se as almondegas e deixa-se cozer.\r"
      },
      {
        "@type": "HowToStep",
        "text": "A parte, bate un pouco de caldo com gemas e sumo de limão.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Junta-se as almôndegas, no lume, a cozer.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Cobre com salsa picada.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Acompanha com arroz branco on puré de batata.\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  },
  {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "MASSA PARA PIES\r",
    "image": [],
    "author": {
      "@type": "Person",
      "name": "Albertina"
    },
    "datePublished": "2020-04-14",
    "description": "",
    "prepTime": "",
    "cookTime": "",
    "totalTime": "",
    "keywords": "",
    "recipeYield": "",
    "recipeCategory": "",
    "recipeCuisine": "Portuguese",
    "nutrition": {},
    "recipeIngredient": [
      "200g de farinha\r",
      "1 pitada de sal\r",
      "100g de gordura\r",
      "7 colheres de chá de água fria (cerca de)\r"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Peneira-se a farinha com o sal para 1 tigela grande.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Corta-se a gordura em bocadinhos e junta-se à farinha.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, até ficar com o aspecto da areia.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Junta-se a água e com 1 faca de ponta redonda, mistura-se bem até a massa começar a ficar pegajosa.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Trabalha-se bem com a mão, durante alguns segundos, até ficar uniforme e macia.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Envolve-se em papel manteiga e deixa-se descansar no frigorífico durante cerca de 15 minutos, ou envolve-se em película aderente e leva-se ao frigorífico durante 2 dias.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Estende-se a massa sobre superfície polvilhada e corta-se segundo a receita.\r"
      },
      {
        "@type": "HowToStep",
        "text": "Forno regulado no 6 ou no 7 (?)\r"
      }
    ],
    "aggregateRating": {},
    "video": {}
  }
];
const frasesAlbertina = ["viva o pinto da costa", "isso é que é"];
export default {
  name: "app",
  type: "",
  data() {
    return {
      searchRecipe: "",
      recipeData: {},
      chosenRecipe: "",
      imagemAlbertina:
        "data:image/png;base64,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",
      showModal: false,
      chosenSentence: ""
    };
  },
  methods: {
    getRandomRecipe() {
      this.chosenRecipe = this.recipesData[
        Math.floor(Math.random() * this.recipesData.length)
      ];
    },
    getImageThumbnail(image){
      if(image.length === 0){
        return this.imagemAlbertina
        } else {
        return image[0]
      }

    },
    getRandomFrase() {
      this.chosenSentence = this.frasesAlbertina[
        Math.floor(Math.random() * this.frasesAlbertina.length)
      ];
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.chosenSentence = "";
      this.aboutAlbertina = "";
    },
    sortAppetizer(type) {
      switch (type) {
        case "appetizer":
          return "btn-success";
          break;
        case "dinner":
          return "btn-danger";
        default:
          return "btn-warning";
      }
    },
    sortTipoDeCozinha(type) {
      switch (type) {
        case "appetizer":
          return "btn-success";
          break;
        case "dinner":
          return "btn-danger";
        default:
          return "btn-warning";
      }
    },
    checkIfCardHasSearch(data, text) {
      let a = new RegExp(text, "g");
      let found = false;
      for (let keys in data) {
        // search recursively
        if (Array.isArray(data[keys]) || typeof(data[keys]) === "object"){
          found = this.checkIfCardHasSearch(data[keys], text)
          if (found) {
            return true;
          }
        } else {
          if (a.test(data[keys].toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    }
  },
  created() {
    this.recipesData = recipeData;
    this.frasesAlbertina = frasesAlbertina;
  },
  computed: {
    filteredRecipes() {
      const search = this.searchRecipe.toLowerCase().trim();
      if (!search) return this.recipesData;
      let filteredRecipes = [];
      for (let obj = 0; obj < this.recipesData.length; obj++) {
        if (this.checkIfCardHasSearch(this.recipesData[obj], search)) {
          filteredRecipes.push(this.recipesData[obj]);
        }
      }
      return filteredRecipes;
    }
  }
};
</script>

<style scoped>
.nav-container {
  border-width: 0;
  box-shadow: none;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
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
