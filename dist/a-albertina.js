/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "2020");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2020":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("7a87")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("6830");

// EXTERNAL MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("b3ad");

// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b7c92c1-vue-loader-template"}!C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./albertina-wc/src/App.vue?vue&type=template&id=79c97c55&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid d-flex h-100 flex-column",attrs:{"id":"albertina-app"}},[_c('link',{attrs:{"href":"https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sketchy/bootstrap.min.css","rel":"stylesheet","integrity":"sha384-2kOE+STGAkgemIkUbGtoZ8dJLqfvJ/xzRnimSkQN7viOfwRvWseF7lqcuNXmjwrL","crossorigin":"anonymous"}}),_c('nav',{staticClass:"navbar navbar-no-padding navbar-fluid navbar-expand-md navbar-light bg-light"},[_c('div',{staticClass:"container-fluid"},[_c('a',{staticClass:"navbar-brand",staticStyle:{"cursor":"pointer"},on:{"click":function($event){_vm.chosenRecipe = ''}}},[_c('span',{staticClass:"text-danger font-weight-bold"},[_vm._v("Lista")])]),_c('a',{staticClass:"navbar-brand",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.getRandomFrase()}}},[_c('img',{staticClass:"d-inline-block mr-3",staticStyle:{"height":"2.25rem"},attrs:{"src":_vm.imagemAlbertina}})]),_c('a',{staticClass:"navbar-brand font-weight-bold",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.getRandomRecipe()}}},[_c('span',{staticClass:"text-warning"},[_vm._v("Albertina")]),_vm._v(" "),_c('span',{staticClass:"text-success"},[_vm._v("Escolhe")])])])]),(Boolean(_vm.chosenRecipe) === false)?_c('div',{},[_c('div',{staticClass:"d-flex flex-wrap flex-row justify-content-center"},_vm._l((_vm.recipesData),function(recipe,i){return _c('div',{key:i,staticClass:"card my-1",staticStyle:{"cursor":"pointer","width":"11rem"},on:{"click":function($event){_vm.chosenRecipe = _vm.recipesData[i]}}},[_c('img',{staticClass:"card-img-top",staticStyle:{"height":"10rem"},attrs:{"src":recipe.image || _vm.imagemAlbertina,"alt":"Card image cap"}}),_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title text-center"},[_vm._v(_vm._s(recipe.name))]),_c('div',{staticClass:"d-flex"},[(recipe.totalTime)?_c('span',{staticClass:"btn",class:_vm.sortAppetizer(recipe.totalTime)},[_vm._v(_vm._s(recipe.totalTime))]):_vm._e(),(recipe.recipeCategory)?_c('span',{staticClass:"btn",class:_vm.sortAppetizer(recipe.recipeCategory)},[_vm._v(_vm._s(recipe.recipeCategory))]):_vm._e()])])])}),0)]):_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"d-flex mb-2"},[_c('div',{staticClass:"flex-grow-1 w-100"},[_c('h2',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.chosenRecipe.name))]),_c('p',{staticClass:"text-muted"},[(_vm.chosenRecipe.prepTime)?_c('span',[_vm._v(" Tempo de preparação: "+_vm._s(_vm.chosenRecipe.prepTime)+". ")]):_vm._e(),(_vm.chosenRecipe.cookTime)?_c('span',[_vm._v(" Tempo de cozinhar: "+_vm._s(_vm.chosenRecipe.cookTime)+". ")]):_vm._e(),(_vm.chosenRecipe.totalTime)?_c('span',[_vm._v(" Total: "+_vm._s(_vm.chosenRecipe.totalTime)+". ")]):_vm._e()]),_c('div',{staticClass:"d-flex flex-row"},[(_vm.chosenRecipe.recipeCategory)?_c('span',{staticClass:"btn",class:_vm.sortAppetizer(_vm.chosenRecipe.recipeCategory)},[_vm._v(_vm._s(_vm.chosenRecipe.recipeCategory))]):_vm._e(),(_vm.chosenRecipe.recipeCuisine)?_c('span',{staticClass:"btn",class:_vm.sortTipoDeCozinha(_vm.chosenRecipe.recipeCuisine)},[_vm._v(_vm._s(_vm.chosenRecipe.recipeCuisine))]):_vm._e()])]),(_vm.chosenRecipe.author.name)?_c('p',{staticClass:"align-self-center flex-shrink-1"},[_vm._v("por: "),_c('span',{staticClass:"h5 text-danger"},[_vm._v(_vm._s(_vm.chosenRecipe.author.name))])]):_vm._e()]),(_vm.chosenRecipe.recipeIngredient.length !== 0)?_c('div',[_c('h3',[_vm._v("Ingredientes "),_c('span',{staticClass:"text-muted"},[_vm._v("(total: "+_vm._s(_vm.chosenRecipe.recipeIngredient.length)+")")])]),_c('ul',_vm._l((_vm.chosenRecipe.recipeIngredient),function(ingredient,j){return _c('li',{key:'ing-'+j},[_vm._v(_vm._s(ingredient))])}),0)]):_vm._e(),(_vm.chosenRecipe.recipeInstructions.length !== 0)?_c('div',[_c('h3',[_vm._v("Preparação "),_c('span',{staticClass:"text-muted"},[_vm._v("("+_vm._s(_vm.chosenRecipe.recipeInstructions.length)+" passos)")])]),_c('ul',_vm._l((_vm.chosenRecipe.recipeInstructions),function(step,j){return _c('li',{key:'prep-'+j},[_vm._v(_vm._s(step.text))])}),0)]):_vm._e()]),(_vm.showModal)?_c('div',{on:{"click":_vm.closeModal}},[_c('transition',{attrs:{"name":"modal mb-2"}},[_c('div',{staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-body text-center"},[(Boolean(_vm.chosenSentence) !== false)?_c('p',[_c('span',{staticClass:"h3 font-weight-bold"},[_vm._v("\""+_vm._s(_vm.chosenSentence)+"\"")]),_c('br'),_vm._v(" - Albertina")]):_c('div',[_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo. "),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br')]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo. "),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br')]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")])])])])])])])])],1):_vm._e(),_c('div',{staticClass:"footer text-center my-3"},[_vm._v("Feito com ❤️ pelo joao | "),_c('a',{staticClass:"text-danger",staticStyle:{"cursor":"pointer"},on:{"click":function($event){_vm.showModal=true}}},[_vm._v("quem é a Albertina ?")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./albertina-wc/src/App.vue?vue&type=template&id=79c97c55&scoped=true&shadow

// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./albertina-wc/src/App.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const recipeData = [{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies e mais qualquer coisa que eu queira meter asqui","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":""},"prepTime":"10 mins","cookTime":"","totalTime":"10 mins","recipeCategory":"pronto, agora voau ","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pies","image":"","description":"isto \u00e9 uma descri\u00e7\u00e3o fant\u00e1stica. basicamente.","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},{"@context":"https:\/\/schema.org\/","@type":"Recipe","name":"Massa para pizzas","image":"https:\/\/cataas.com\/cat","description":"desta \u00e9 que eu n\u00e3o me vou safar basicamente","keywords":"","author":{"@type":"Person","name":"Albertina"},"prepTime":"","cookTime":"","totalTime":"","recipeCategory":"appetizer","recipeCuisine":"Portuguese","nutrition":{"@type":"NutritionInformation","calories":""},"recipeIngredient":["200g de farinha","1 pitada de sal","100g de gordura","Cerca de 7 colheres de ch\u00e1 de \u00e1gua fria"],"recipeInstructions":[{"@type":"HowToStep","text":"Peneira-se a farinha com o sal para 1 tigela grande."},{"@type":"HowToStep","text":"Corta-se a gordura em bocadinhos e junta-se \u00e0 farinha."},{"@type":"HowToStep","text":"Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, at\u00e9 ficar com o aspecto da areia."},{"@type":"HowToStep","text":"Junta-se a \u00e1gua e com 1 faca de ponta redonda, mistura-se bem at\u00e9 a massa come\u00e7ar a ficar pegajosa."},{"@type":"HowToStep","text":"Trabalha-se bem com a m\u00e3o, durante alguns segundos, at\u00e9 ficar uniforme e macia."},{"@type":"HowToStep","text":"Envolve-se em papel manteiga e deixa-se descansar no frigor\u00edfico durante cerca de 15 minutos, ou envolve-se em pel\u00edcula aderente e leva-se ao frigor\u00edfico durante 2 dias."},{"@type":"HowToStep","text":"Estende-se a massa sobre superf\u00edcie polvilhada e corta-se segundo a receita."},{"@type":"HowToStep","text":"Forno regulado no 6 ou no 7 (#traduzir)"}]},];
const frasesAlbertina = ["viva o pinto da costa", "isso é que é"]
/* harmony default export */ var Appvue_type_script_lang_js_shadow = ({
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
});

// CONCATENATED MODULE: ./albertina-wc/src/App.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var src_Appvue_type_script_lang_js_shadow = (Appvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./albertina-wc/src/App.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("4c42")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  src_Appvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "79c97c55",
  null
  ,true
)

/* harmony default export */ var Appshadow = (component.exports);
// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('a-albertina', vue_wc_wrapper(external_Vue_default.a, Appshadow))

/***/ }),

/***/ "4c42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_79c97c55_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d98d");
/* harmony import */ var _AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_79c97c55_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_79c97c55_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_79c97c55_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_79c97c55_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_AppData_Roaming_npm_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_79c97c55_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6830":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "7a87":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "b3ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: C:/Users/joao.nabais/AppData/Roaming/npm/node_modules/@vue/cli-service/node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "d98d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("efe0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("b3ad").default
module.exports.__inject__ = function (shadowRoot) {
  add("3d591d30", content, shadowRoot)
};

/***/ }),

/***/ "efe0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("6830");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nav-container[data-v-79c97c55]{border-width:0;-webkit-box-shadow:none;box-shadow:none;background-color:#f0f8ff}.navbar[data-v-79c97c55]{background-color:#9cf;border:0}.modal-mask[data-v-79c97c55]{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.modal-wrapper[data-v-79c97c55]{display:table-cell;vertical-align:middle}.modal-body[data-v-79c97c55]{max-height:85vh;overflow-y:auto}.modal-dialog[data-v-79c97c55]{min-width:50vw;max-width:90vw}", ""]);
// Exports
module.exports = exports;


/***/ })

/******/ });
//# sourceMappingURL=a-albertina.js.map