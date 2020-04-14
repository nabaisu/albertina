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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
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

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
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

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4b44":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nav-container[data-v-fdde386c]{border-width:0;-webkit-box-shadow:none;box-shadow:none;background-color:#f0f8ff}.navbar[data-v-fdde386c]{background-color:#9cf;border:0}.modal-mask[data-v-fdde386c]{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:table;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.modal-wrapper[data-v-fdde386c]{display:table-cell;vertical-align:middle}.modal-body[data-v-fdde386c]{max-height:85vh;overflow-y:auto}.modal-dialog[data-v-fdde386c]{min-width:50vw;max-width:90vw}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isRegExp = __webpack_require__("44e7");
var getFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var setInternalState = __webpack_require__("69f3").set;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("f6fd")
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

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
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

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"29e97370-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=fdde386c&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid d-flex h-100 flex-column",attrs:{"id":"albertina-app"}},[_c('link',{attrs:{"href":"https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sketchy/bootstrap.min.css","rel":"stylesheet","integrity":"sha384-2kOE+STGAkgemIkUbGtoZ8dJLqfvJ/xzRnimSkQN7viOfwRvWseF7lqcuNXmjwrL","crossorigin":"anonymous"}}),_c('nav',{staticClass:"navbar navbar-no-padding navbar-fluid navbar-expand-md navbar-light bg-light"},[_c('div',{staticClass:"container-fluid"},[_c('a',{staticClass:"navbar-brand",staticStyle:{"cursor":"pointer"},attrs:{"tabindex":"0","aria-label":"lista de receitas"},on:{"click":function($event){_vm.chosenRecipe = ''},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.chosenRecipe = ''}}},[_c('span',{staticClass:"text-danger font-weight-bold"},[_vm._v("Lista")])]),_c('a',{staticClass:"navbar-brand",staticStyle:{"cursor":"pointer"},attrs:{"tabindex":"0","aria-label":"página inicial"},on:{"click":function($event){return _vm.getRandomFrase()},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.getRandomFrase()}}},[_c('img',{staticClass:"d-inline-block mr-3",staticStyle:{"height":"2.25rem"},attrs:{"alt":"albertina logo","src":_vm.imagemAlbertina}})]),_c('a',{staticClass:"navbar-brand font-weight-bold",staticStyle:{"cursor":"pointer"},attrs:{"tabindex":"0","aria-label":"escolher uma receita ao calhas"},on:{"click":function($event){return _vm.getRandomRecipe()},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.getRandomRecipe()}}},[_c('span',{staticClass:"text-warning"},[_vm._v("Albertina ")]),_c('span',{staticClass:"text-success"},[_vm._v("Escolhe")])])])]),(Boolean(_vm.chosenRecipe) === false)?_c('div',{},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchRecipe),expression:"searchRecipe"}],staticClass:"form-control w-2",attrs:{"placeholder":"filtragem ...","type":"search"},domProps:{"value":(_vm.searchRecipe)},on:{"input":function($event){if($event.target.composing){ return; }_vm.searchRecipe=$event.target.value}}}),_c('div',{staticClass:"d-flex flex-wrap flex-row justify-content-center"},_vm._l((_vm.filteredRecipes),function(recipe,i){return _c('div',{key:i,staticClass:"card my-1",staticStyle:{"cursor":"pointer","width":"11rem"},attrs:{"tabindex":"0","aria-label":recipe.name,"role":"button","aria-pressed":"false"},on:{"click":function($event){_vm.chosenRecipe = _vm.filteredRecipes[i]},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.chosenRecipe = _vm.filteredRecipes[i]}}},[_c('img',{staticClass:"card-img-top",staticStyle:{"height":"10rem"},attrs:{"src":_vm.getImageThumbnail(recipe.image),"alt":"Card image cap"}}),_c('div',{staticClass:"card-body"},[_c('h5',{staticClass:"card-title text-center"},[_vm._v(_vm._s(recipe.name))]),_c('div',{staticClass:"d-flex"},[(recipe.totalTime)?_c('span',{staticClass:"btn",class:_vm.sortAppetizer(recipe.totalTime)},[_vm._v(_vm._s(recipe.totalTime))]):_vm._e(),(recipe.recipeCategory)?_c('span',{staticClass:"btn",class:_vm.sortAppetizer(recipe.recipeCategory)},[_vm._v(_vm._s(recipe.recipeCategory))]):_vm._e()])])])}),0)]):_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"d-flex mb-2"},[_c('div',{staticClass:"flex-grow-1 w-100"},[_c('h2',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.chosenRecipe.name))]),_c('p',{staticClass:"text-muted"},[(_vm.chosenRecipe.prepTime)?_c('span',[_vm._v("Tempo de preparação: "+_vm._s(_vm.chosenRecipe.prepTime)+".")]):_vm._e(),(_vm.chosenRecipe.cookTime)?_c('span',[_vm._v("Tempo de cozinhar: "+_vm._s(_vm.chosenRecipe.cookTime)+".")]):_vm._e(),(_vm.chosenRecipe.totalTime)?_c('span',[_vm._v("Total: "+_vm._s(_vm.chosenRecipe.totalTime)+".")]):_vm._e()]),_c('div',{staticClass:"d-flex flex-row"},[(_vm.chosenRecipe.recipeCategory)?_c('span',{staticClass:"btn",class:_vm.sortAppetizer(_vm.chosenRecipe.recipeCategory)},[_vm._v(_vm._s(_vm.chosenRecipe.recipeCategory))]):_vm._e(),(_vm.chosenRecipe.recipeCuisine)?_c('span',{staticClass:"btn",class:_vm.sortTipoDeCozinha(_vm.chosenRecipe.recipeCuisine)},[_vm._v(_vm._s(_vm.chosenRecipe.recipeCuisine))]):_vm._e()])]),(_vm.chosenRecipe.author.name)?_c('p',{staticClass:"align-self-center flex-shrink-1"},[_vm._v(" por: "),_c('span',{staticClass:"h5 text-danger"},[_vm._v(_vm._s(_vm.chosenRecipe.author.name))])]):_vm._e()]),(_vm.chosenRecipe.recipeIngredient.length !== 0)?_c('div',[_c('h3',[_vm._v(" Ingredientes "),_c('span',{staticClass:"text-muted"},[_vm._v("(total: "+_vm._s(_vm.chosenRecipe.recipeIngredient.length)+")")])]),_c('ul',_vm._l((_vm.chosenRecipe.recipeIngredient),function(ingredient,j){return _c('li',{key:'ing-'+j},[_vm._v(_vm._s(ingredient))])}),0)]):_vm._e(),(_vm.chosenRecipe.recipeInstructions.length !== 0)?_c('div',[_c('h3',[_vm._v(" Preparação "),_c('span',{staticClass:"text-muted"},[_vm._v("("+_vm._s(_vm.chosenRecipe.recipeInstructions.length)+" passos)")])]),_c('ul',_vm._l((_vm.chosenRecipe.recipeInstructions),function(step,j){return _c('li',{key:'prep-'+j},[_vm._v(_vm._s(step.text))])}),0)]):_vm._e()]),(_vm.showModal)?_c('div',{on:{"click":_vm.closeModal,"keyup":_vm.closeModal}},[_c('transition',{attrs:{"name":"modal mb-2"}},[_c('div',{ref:"modal",staticClass:"modal-mask"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('button',{staticClass:"close",attrs:{"type":"button","tabindex":"1","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]),_c('div',{staticClass:"modal-body text-center"},[(Boolean(_vm.chosenSentence) !== false)?_c('p',[_c('span',{staticClass:"h3 font-weight-bold"},[_vm._v("\""+_vm._s(_vm.chosenSentence)+"\"")]),_c('br'),_vm._v("- Albertina ")]):_c('div',[_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v(" A Albertina é quem ajuda a minha família desde há muito tempo. "),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br')]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v(" A Albertina é quem ajuda a minha família desde há muito tempo. "),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br'),_c('br')]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")]),_c('p',[_vm._v("A Albertina é quem ajuda a minha família desde há muito tempo.")])])])])])])])])],1):_vm._e(),_c('div',{staticClass:"footer text-center my-3"},[_vm._v(" Feito com ❤️ pelo "),_c('a',{staticClass:"text-success",attrs:{"href":"https://nabaisu.com/?utm_source=albertina&utm_medium=footer-link&utm_campaign=albertina","target":"_blank"}},[_vm._v("joao")]),_vm._v(" | "),_c('a',{staticClass:"text-warning",staticStyle:{"cursor":"pointer"},attrs:{"target":"","tabindex":"0"},on:{"click":function($event){_vm.showModal=true},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.showModal=true}}},[_vm._v("quem é a Albertina ?")]),_vm._v(" | "),_c('a',{staticClass:"text-danger",attrs:{"target":"_blank","href":"https://www.buymeacoffee.com/nabais"}},[_vm._v("Obrigado joao")])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=fdde386c&scoped=true&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&shadow



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
var recipeData = [{
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
  "recipeIngredient": ["1 iogurte natural\r", "3 caixas (do iogurte) de farinha\r", "3 caixas (do iogurte) de açúcar\r", "1 caixa (do iogurte) de óleo\r", "3 ονοs \r", "1 colher de chá de fermento\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Batem-se as gemas com o açúcar, depois óleo, farinha e fermento e iogurte e for fim as claras en castelo.\r"
  }, {
    "@type": "HowToStep",
    "text": "forma de buraco, untada.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 abacate,\r", "1 sumo de 1 limão, \r", "6 conchas (de açucareiro) de açúcar e \r", "1 gota de leite,\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Bate tudo com varinha magica, põe no frigorifico e serve, em taça de sobremesa.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Tem-se o bacalhau demolhado e escamado e assa- se na grelha, ligeiramente untado, para não pegar.\r"
  }, {
    "@type": "HowToStep",
    "text": "Faz-se uma cebolada com cebola, bastante azeite, alho, salsa, louro, 2 piripiris, 2 colheres de chá de colorau e deixe se a cebola fritar bem, sem esturrar.\r"
  }, {
    "@type": "HowToStep",
    "text": "Mete-se o bacalhau nesta cebolada, com 0,5 dl de vinho branco.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deixa-se Ferver lentamente e depois apaga-se o lume e deixa-se ficar, quanto mais tempo, melhor.\r"
  }, {
    "@type": "HowToStep",
    "text": "Na altura de servir pode pôr-se uma colher de maionese por cima do bacalhau.\r"
  }, {
    "@type": "HowToStep",
    "text": "Acompanha batatas cozidas.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["250 g de margarina para folhados\r", "250 g de farinha\r", "1 pitada de sal\r", "1 ovo inteiro\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Põe-se a água a aquecer com um bocado de sal. Junta-se à farinha o ovo inteiro, 1 pitada de sal e a água, a pouco e pouco, amassando com a mão até ficar com consistência semelhante à massa tenra.\r"
  }, {
    "@type": "HowToStep",
    "text": "Põe-se farinha na tábua e amassa-se novamente, batendo com a massa. Põe-se farinha no rolo e estende-se por igual, em todas as direções, formando um rectângulo grande.\r"
  }, {
    "@type": "HowToStep",
    "text": "Parte-se a margarina en 6 bocados iguais.\r"
  }, {
    "@type": "HowToStep",
    "text": "Barra-se com um dos bocados a massa toda e dobra-se depois a massa em 3 no sentido do comprimento e depois no da largura.\r"
  }, {
    "@type": "HowToStep",
    "text": "Estende-se novamente com o rolo, barra-se outra vez e embrulha-se do mesmo modo.\r"
  }, {
    "@type": "HowToStep",
    "text": "E assim sucessivamente as 6 vezes.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["250 g de farinha \r", "30 g de fermento do padeiro\r", "1 dl de leite \r", "50 g de manteiga\r", "60 g de banha\r", "1 ovo inteiro\r", "1 colher de chá de sal fino\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Desmancha-se o fermento e mistura-se com todos os ingredientes, amassando bem.\r"
  }, {
    "@type": "HowToStep",
    "text": "Estende-se com o rolo e formam-se pequenas trouxas com chouriço dentro.\r"
  }, {
    "@type": "HowToStep",
    "text": "Pintam-se com ovo e deixam-se descansar meia hora, indo em seguida a correr em forno quente.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Coze-se bacalhau, hortaliça que se quiser (couves, etc), batatas e ovos. No fim de cozida a hortaliça tempera-se com azeite e vinagre. O bacalhau é lascado e os ovos às rodelas.\r"
  }, {
    "@type": "HowToStep",
    "text": "Frita-se bastante cebola às rodelas, en bas. tante azeite, e no fundo do tabuleiro põe-se uma camada de cebola com azeite.\r"
  }, {
    "@type": "HowToStep",
    "text": "Tem-se feito um creme com leite, farinha e gemas e vão-se alternando camadas de bacalhau, camadas de hortaliça, creme, cebola e assim sucessivamente. A última camada deve ser de creme\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao homo para cozer tudo mais um bocadinho e serve-se no mesmo tabuleiro.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Coze-se um ovo por pessoa faz-se um corte nos ovos e tira-se a gema com cuidado.\r"
  }, {
    "@type": "HowToStep",
    "text": "Entretanto, contam-se os tomates ao meio, pelam-se e pintam-se-lhe manchinhas com o molho, depois.\r"
  }, {
    "@type": "HowToStep",
    "text": "Faz-se um molho branco ao qual se juntam as gemas, bocadinhos de atum, pickles, feijão verde, azeitonas, sal e pimenta. Recheiam-se as claras com este creme, tapam-se com os tomates e põe-se numa travessa, atapetada de alface cortada miudinha.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 chávena de água,\r", "1 chávena de leite,\r", "1 colher de margarina, sal, pimenta\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "l casca de limão. \r"
  }, {
    "@type": "HowToStep",
    "text": "Deixa-se ferver.\r"
  }, {
    "@type": "HowToStep",
    "text": "Juntam-se 2 chávenas de farinha, todas de uma vez, e bate-se bem.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Corta-se o peixe em cru (garoupa ou peixe rijo) em bocados pequeninos. Tempera-se bem com vinho branco, alho, sal e pimenta.\r"
  }, {
    "@type": "HowToStep",
    "text": "À parte põe-se um pouco de azeite (para uma garoupa de 1kg, 1dl de azeite) numa caçarola, 1 dente de alho cortado ao meio e vai ao lume. Quando o alho estiver louro tira-se e deita-se polme de tomate ou tomate de conserva (1 colher de concentrado ou 2 tomates bem maduros). Deixa-se ferver e engrossar.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deita-se o peixe lá para dentro, tapa-se e deixa-se cozer\r"
  }, {
    "@type": "HowToStep",
    "text": "Quando estiver cozido, retira-se do lume deixa-se arrefecer e juntam-se 2 ou 3 ovos inteiros, batidos.\r"
  }, {
    "@type": "HowToStep",
    "text": "Põe-se numa forma em feitio de peixe, untado de banha e farinha e vai ao forno.\r"
  }, {
    "@type": "HowToStep",
    "text": "Cobre-se com molho maionese serve-se com salada russa.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 kg de batatas, \r", "250 g de fiambre, \r", "120 g de teifa, \r", "60g de farinha, \r", "6 ovos, sal, pimenta.\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Cozem-se as batatas com casca e depois passam-se. Junta-se a manteiga, mais ou meno derretida, sal, pimenta, as gemas, o fiambre picado, a farinha e, por último as claras em castelo.\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao forno e depois pode barrar-se com molho bechamel.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Corta-se a cebola às rodas fininhas e refoga-se até ficar loura.\r"
  }, {
    "@type": "HowToStep",
    "text": "Tem-se o bacalhau desfiado (não precisa ser demolhado) que se passe por água e deita-se no refogado para refogar também.\r"
  }, {
    "@type": "HowToStep",
    "text": "Fritam-se batatas aos palitos finos e, na hora de ir para a mesa, juntam-se os ovos.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Cortam-se os filetes grossos ou pescada as postas e deixam- se estar um bocado só temperados com sal.\r"
  }, {
    "@type": "HowToStep",
    "text": "Cobre-se e fundo de um pyrex com azeite, cebola às rodas fininhas, vinho branco e um dente de alho, se se quiser.\r"
  }, {
    "@type": "HowToStep",
    "text": "Na altura de pôr ao lume, tira-se o sal que possa estar a mais no peixe, cobre-se cada filete de pão ralado e 2 ou 3 ervilhinhas de manteiga.\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao forno e vai-se refogando com próprio molho, para o pão ralado não secar.\r"
  }, {
    "@type": "HowToStep",
    "text": "Serve-se com puré de batata\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Junta-se a 300 g de arroz crioulo (cozido em bastante água e passado depois for água fria) 3 colheres de sopa de azeite, sumo de 1 limão, sal, pimenta e bastante salsa picada (a colher bem cheia).\r"
  }, {
    "@type": "HowToStep",
    "text": "Cozem-se os polvos em pouca água, com cebola, cerca de 20 minutos (quando a cebola estiver cozida o polvo também está).\r"
  }, {
    "@type": "HowToStep",
    "text": "O polvo tem-se primeiro em água e depois tira-se-lhe a pele.\r"
  }, {
    "@type": "HowToStep",
    "text": "Guarda-se a coroa de tentáculos de um polvo pequeno (200 g) para guarnecer, depois de cozido. O resto (cerca de 500g) parte-se aos bocadinhos pequenos.\r"
  }, {
    "@type": "HowToStep",
    "text": "Faz-se uma maionese com 2 gemas e 2dl de óleo. Junta-se 1kg de berbigão e o polvo.\r"
  }, {
    "@type": "HowToStep",
    "text": "Põe-se no meio de um prato redondo, cobre-se com rodelas de ovo cozido (2) e depois com o arroz. Coloca-se o polvo, aberto, por cima e entre os tentáculos, umas gambas.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Faz-se um refogado com bastante cebola, óleo e margarina, sem queimar, mas bem louro. Junta-se 1kg de tomate, 1 colher de chá de caril, 1/2 copo de vinho de whisky e deixa-se apurar bem. Passa-se pelo passe-vite.\r"
  }, {
    "@type": "HowToStep",
    "text": "Junta-se 250g de natas e 1l de molho branco, grosso, e queijo ralado.\r"
  }, {
    "@type": "HowToStep",
    "text": "Lasca-se o bacalhau cozido e junta-se no molho.\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao forno a gratinar.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 Massa de tarte\r", "1 kg de cebola para uma tarte grande.\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Corta-se a cebola às rodelas fininhas, vai a fritar com margarina e óleo, em lume brando, pelo menos 1⁄2 hora, até a cebola ficar dourada, mas não queimada.\r"
  }, {
    "@type": "HowToStep",
    "text": "Misturam-se 2 ovos inteiros, batidos, 50 g queijo ralado, 125 g de natas e sal, pimenta e noz moscada q.b.\r"
  }, {
    "@type": "HowToStep",
    "text": "Sobre a massa de tarte meio cozida, deita-se o recheio e sobre este nozinhas de manteiga e queijo ralado e vai ao forno a gratinar.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Arranjam-se as lulas e cortam-se às rodas e cabeças.\r"
  }, {
    "@type": "HowToStep",
    "text": "Pica-se uma cebola bem picada e refoga-se com um pouco de azeite, até ficar lourinha.\r"
  }, {
    "@type": "HowToStep",
    "text": "Põem-se as lulas lá dentro (sem tempero), um pouco de salsa, tapa-se e deixa-se cozer. (Se for preciso, junta-se uma pinguinha de água).\r"
  }, {
    "@type": "HowToStep",
    "text": "À parte faz-se molho de tomate, temperado com caldo knorr de galinha, 1 colher de chá de açúcar e pimenta.\r"
  }, {
    "@type": "HowToStep",
    "text": "Noutro tacho faz-se molho branco, bastante grosso, temperado com sal, pimenta, savora, sumo de limão e junta-se o molho de tomate e as lulas. Rectificar o tempero. Vai ao forno e acompanha com arroz branco, seco, enfeitado com salsa picada.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Compram-se filetes tempera-se com sal, pimenta, limão e deixam-se ficar umas horas.\r"
  }, {
    "@type": "HowToStep",
    "text": "Arranjam-se alguns camarões.\r"
  }, {
    "@type": "HowToStep",
    "text": "Molho:\r"
  }, {
    "@type": "HowToStep",
    "text": "Refoga-se um bocado, numa porção boa de cebola. Junta-se tomate, 4 ou 5 maçãs (reinetas) descascadas e partidas, alho, uma folha de louro, um ramo de salsa e piripiri.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deixa-se apurar e depois junta-se 2 colheres de sobremesa de caril e deixa-se refogar mais um bocado. Passa-se pelo passe-vite ou bate-se com a varinha.\r"
  }, {
    "@type": "HowToStep",
    "text": "Faz-se um bocado de molho bechamel ralo e junta-se tudo, de modo a dar para tapar os filetes.\r"
  }, {
    "@type": "HowToStep",
    "text": "Os filetes são fritos em óleo, sem passar por nada. \r"
  }, {
    "@type": "HowToStep",
    "text": "Põem-se os filetes num pyrex, os camarões por cima e depois cobre-se com o molho e vai ao forno.\r"
  }, {
    "@type": "HowToStep",
    "text": "Acompanha com arroz branco, solto.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["3 colheres de sopa de cebola picada \r", "20 g de margarina,\r", "4 dl caldo de peixe\r", "6 folhas de gelatina\r", "500 g de atum \r", "125 g de natas\r", "1 pouco Cognac, vermute.\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Refoga-se ligeiramente a cebola, na margarina, junta-se o caldo, a gelatina derretida num copo de vinho branco ou vermute, e o atum.\r"
  }, {
    "@type": "HowToStep",
    "text": "Mistura-se tudo e bate-se com o triturador.\r"
  }, {
    "@type": "HowToStep",
    "text": "Junta-se 3 colheres de sopa de cognac ou Madeira, sal, pimenta e noz moscada.\r"
  }, {
    "@type": "HowToStep",
    "text": "Depois de frio, juntam-se 125g de natas batidas, mistura-se e vai para a frigorífico, em forma untada com óleo!\r"
  }, {
    "@type": "HowToStep",
    "text": "Desenforma-se e enfeita-se.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Coze-se a massa (búzios, cotovelos ou espirais), escorre-se e passa-se por água fria.\r"
  }, {
    "@type": "HowToStep",
    "text": "Cozem-se ervilhas.\r"
  }, {
    "@type": "HowToStep",
    "text": "Põe-se nam pyrex, alternadamente, massa, envilhas, atum lascado.\r"
  }, {
    "@type": "HowToStep",
    "text": "Pica-se uma cebola e frita-se levemente em margarina (2 colheres). Juntam-se 2 colheres de farinha, mexe-se e junta-se leite, fora do lume, aos poucos, para fazer uma espécie de bechamel. Mistura-se depois uma lata de sopa de cogumelos ou sopa de pacote, desfeita num copo de água. Vai ao lume a cozer.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deita-se por cima da massa no tabuleiro de pyrex.\r"
  }, {
    "@type": "HowToStep",
    "text": "Põe-se pão ralado por cima, com bocadinhos de margarina e vai ao forno.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 kg carne de porco\r", "0,5 kg de fiambre\r", "1 chávena e meia de leite \r", "2 ovos \r", "1 chavena de cream crackers ralados (12)\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Passam-se as carnes pela máquina (en cru), junta-se tudo, tempera-se com sal e pimenta e faz-se um rolo, apertando bem.\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao forno em tabuleiro untado, e põe-se por cima pão ralado e nozinhas de margarina.\r"
  }, {
    "@type": "HowToStep",
    "text": "Borrifa-se, de vez em quando com vermute seco.\r"
  }, {
    "@type": "HowToStep",
    "text": "Fica muito bem acompanhado do seguinte molho de mostarda: (link para o molho de mostarda)\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["4 ovos\r", "3/4 chávena de açúcar\r", "1 envelope de gelatina em pó (3 colheres de chá rasas)\r", "1,5 colher de chá de mostarda em pó\r", "1/4 colher de chá de sal \r", "1 chávena de água \r", "1/2 chávena de vinagre de cidra \r", "1/2 chávena de natas.\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "É feito em banho-maria.\r"
  }, {
    "@type": "HowToStep",
    "text": "Batem-se os ovos. Junta-se a água e o vinagre (se não houver de cidra, outro bastante forte) aos ovos e depois a mistura do pós (açúcar, gelatina, mostarda e sal) que lá devem estar misturados.\r"
  }, {
    "@type": "HowToStep",
    "text": "Continua-se a cozinhar (em banho-maria) até engrossar.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deixa-se arrefecer e juntam-se as natas batidas. Deita-se numa forma e vai para o frigorífico.\r"
  }, {
    "@type": "HowToStep",
    "text": "Desenforma para servir.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 frango, \r", "1 lata de 90 g de cogumelos e \r", "125 g de natas,\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Parte-se o frango em cru, tempera-se com sal e margarina (um bocado bom) e leva-se as lume baixinho, tapado.\r"
  }, {
    "@type": "HowToStep",
    "text": "Tira-se, depois de cozido, e junta-se os cogumelos e vai a ferver um bocadinho (não muito).\r"
  }, {
    "@type": "HowToStep",
    "text": "Quando estiver para ir para a mesa, juntam-se as natas e volta a ferver mais uns dois minutos.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["2 postas de bacalhau cozido\r", "1 colher de sopa de margarina\r", "1 cebola picada\r", "2 ovos cozidos \r", "1,5 colher de doce de mostarda savora\r", "0,5 kg de batatas fritas aos cubos\r", "1,5 colher de queijo ralado\r", "0,5 l de leite ou um pouco mais\r", "1 alho picado\r", "1 colher de chá de caril\r", "2 colheres de sopa de maizena\r", "150 g de natas\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Com o leite, 2 colheres de maizena e a margarina, faz-se um bechamel grosso.\r"
  }, {
    "@type": "HowToStep",
    "text": "Aloira-se muito a cebola em margarina e o alho.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deita-se para dentro o bacalhau às lascas e deixa-se refogar. Depois vai para dentro do bechamel, junta-se a mostanda, caril, as batatas fritas, o queiro e as natas e o ovo cozido aos bocadinhos.\r"
  }, {
    "@type": "HowToStep",
    "text": "Tempera-se de sal, pimenta e limão e vai ao forno num pyrex polvilhado com pão ralado.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["250 g de farinha\r", "125 g de margarina\r", "1 forminho de água \r", "1 ovo inteiro\r", "1 pitada de sal\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Amassa-se tudo pouco, tendem-se finas, formam-se as latinhas e conta-se uma tampa redonda para cima.\r"
  }, {
    "@type": "HowToStep",
    "text": "Põe-se o recheio que se quiser e vai ao forno.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 pão de forma dos grandes\r", "3 postas de bacalhau cozido\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "molho branco bem temperado (1/2 l de leite, 4 colh. farinha)\r"
  }, {
    "@type": "HowToStep",
    "text": "Parte-se o pão às fatias e molha-se bem no leite. Espreme-se entre as maos e forra-se bem num pyrex (fundo e lados)\r"
  }, {
    "@type": "HowToStep",
    "text": "Poe-se nas lume, a cozer em bastante azeite, uma porção boa de cebola picade e um pouco de alho. Depois de bem cozida, deita-se o bacalhau esfarelado grosso.\r"
  }, {
    "@type": "HowToStep",
    "text": "Ferve bem na cebola, deita-se un pouco de molho branco para ligar bem e tempera-se com bastante limão e pimenta.\r"
  }, {
    "@type": "HowToStep",
    "text": "Poe-se depois por cima do pão uma camada deste bacalhau, apertando bem para ligar à camada de baixo!\r"
  }, {
    "@type": "HowToStep",
    "text": "Tem-se um bocado de molho de tomate bem temperado e aperta-se tambem, fazendo buracos para deixar introduzir na camada anterior e ligar bem. Outra vez molho branco. E outra vez pão embebido em leite, bacalhau, tomate e molho branco, com que acaba.\r"
  }, {
    "@type": "HowToStep",
    "text": "Aperta-se bem e fazem-se buracos com garfo para o molho entrar e ligar bem.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deve-se esperar umas horas antes de ir para o forno\r"
  }, {
    "@type": "HowToStep",
    "text": "Na altura de ir para o forno, põe-se pão ralado.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Cozem-se batatas com bacalhau e passam-se pelo passe-vite. Deita-se um bocado de manteiga e leite para fazer uma papa, nem grossa nem fina e juntam-se umas gemas de ovo (4).\r"
  }, {
    "@type": "HowToStep",
    "text": "Põe-se num prato pyrex, à roda, deixando una cavidade no meio, que se enche com molho branco.\r"
  }, {
    "@type": "HowToStep",
    "text": "Batem-se as claras en castelo e põem-se à volta.\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao forno a alourar.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Corta-se a cabrito aos bocados, tempera-se com alho, sal, colorau, louro, pimenta e vinho branco. Deixa-se estar assim um bocado.\r"
  }, {
    "@type": "HowToStep",
    "text": "Se o cabrito não for tenro, deixa-se cozer, neste tempero, um bocadinho (não muito).\r"
  }, {
    "@type": "HowToStep",
    "text": "Poe-se depois no fundo de uma panela (pode ser de pressão, com a grelha) bastante cebola as rodas, uma camada de carne, por cima uma camada de batatas às rodas grossas, uma camada de cebola, e assim sucessivamente. Deita-se o resto do molho dentro, um bocadinho de azeite, um bocadinho de banha de porco e um bocadinho de margarina e um ramo de salsa.\r"
  }, {
    "@type": "HowToStep",
    "text": "Se houver pimentos, poem-se umas tirinhas e tomate en bocados ou passado. Não esquecer o jindungo! Poe-se no fundo, partido ou gotas.\r"
  }, {
    "@type": "HowToStep",
    "text": "Não leva água.\r"
  }, {
    "@type": "HowToStep",
    "text": "Se o cabrito for tenro, pode-se por tudo em cru.\r"
  }, {
    "@type": "HowToStep",
    "text": "Deixa-se ferver cerca de 10 minutos na panela de pressão e depois de apagado, mais um bocado. Se preciso, deixa-se apurar!\r"
  }, {
    "@type": "HowToStep",
    "text": "Não se mexe.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Arranja-se um franguinho bom, que se trita inteiro, dentro de um tacho com bastante azeite, até ficar bem lourinho.\r"
  }, {
    "@type": "HowToStep",
    "text": "Tira-se um bocado de azeite. Pica-se uma cebolinha, um dente de alho, uma folha de louro, um bocadinho de colorau, pimenta e jindungo e deixa-se refogar no azeite que ficou, tendo tirado primeiro o frango.\r"
  }, {
    "@type": "HowToStep",
    "text": "Quando está tudo apuradinho, corta-se uma cebola às rodas e deixa-se refogar até ficar morta. Junta-se então o frango, poe-se-lhe água que dê para cozer un chouriço inteiro e uma farinheira, batatas partidas ao meio e deixa de server, dando uma fervura ao frango e chourico, antes de meter as batatas.\r"
  }, {
    "@type": "HowToStep",
    "text": "Coze tapado.\r"
  }, {
    "@type": "HowToStep",
    "text": "Quando está quase pronto põe-se uma colher de sopa de vinagre e tapa-se outra vez.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Num pyrex, põe-se margarina a barrar e por cima cebola picada, previamente frita em azeite, rodelas de tomate sem pele nem grainhas e depois os filetes temperados com sal e pimenta.\r"
  }, {
    "@type": "HowToStep",
    "text": "Por cima dos filetes, nova camada de cebola, tomate, queijo ralado na altura (ou às lascas, pequenas) e natas a cobrir.\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao forno a cozer até alourar.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Alho francês alourado en margarina.\r"
  }, {
    "@type": "HowToStep",
    "text": "Espinafres cozidos e escorridos.\r"
  }, {
    "@type": "HowToStep",
    "text": "Por cima, creme feito com 0,5 l de leite, 1 pacote de natas, 3 ovos + 2 gemas.\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai ao forno a alourar.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["1 alho francês\r", "3 cenouras\r", "1/2 pimentão médio\r", "1/2 couve flor\r", "1 courgette pequena\r", "300 g de cogumelos\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Coze em água e sal cerca de 1 kg de cenouras. \r"
  }, {
    "@type": "HowToStep",
    "text": "Depois de cozidas, escorre-se a água e junta 1 caixa de natas e 2 colheres de manteiga.\r"
  }, {
    "@type": "HowToStep",
    "text": "Tritura com varinha mágica.\r"
  }, {
    "@type": "HowToStep",
    "text": "Adicione, peneirando e batendo, 2 colheres de sopa de farinha de trigo (não é preciso voltar ao lume).\r"
  }, {
    "@type": "HowToStep",
    "text": "molho de soja\r"
  }, {
    "@type": "HowToStep",
    "text": "Frite o alho francês em 1 chávena de azeite e adicione o sal.\r"
  }, {
    "@type": "HowToStep",
    "text": "No intervalo de 3 a 4 minutos!\r"
  }, {
    "@type": "HowToStep",
    "text": "Acrescente os outros vegetais sem deixar juntar água. No fim acrescente o molho de soja a gosto.\r"
  }, {
    "@type": "HowToStep",
    "text": "Farofa: 2 chávenas de farinha + 1 colher de margarina.\r"
  }, {
    "@type": "HowToStep",
    "text": "Disponha num pyrex o refogado de legumes, o puré cobrindo os legumes e depois a farofa\r"
  }, {
    "@type": "HowToStep",
    "text": "Vai no forno\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Tempera a carne picada com um pouco de chourico (facultativo), sal, pimenta, alho espremido, noz moscada e pão embebido en leite, 1 ovo e as claras (2) dos ovos que vai usar no fricassé. Mistura bem.\r"
  }, {
    "@type": "HowToStep",
    "text": "Tendem-se as bolas e envolvem-se en farinha.\r"
  }, {
    "@type": "HowToStep",
    "text": "Num tacho, põe-se cebola picada com azeite e refoga muito ligeiramente (tapado). \r"
  }, {
    "@type": "HowToStep",
    "text": "Junta 1/2 copo de vinho branco e depois água suficiente para cobrir as almondegas.\r"
  }, {
    "@type": "HowToStep",
    "text": "Quando estiver a ferver, colocam-se as almondegas e deixa-se cozer.\r"
  }, {
    "@type": "HowToStep",
    "text": "A parte, bate un pouco de caldo com gemas e sumo de limão.\r"
  }, {
    "@type": "HowToStep",
    "text": "Junta-se as almôndegas, no lume, a cozer.\r"
  }, {
    "@type": "HowToStep",
    "text": "Cobre com salsa picada.\r"
  }, {
    "@type": "HowToStep",
    "text": "Acompanha com arroz branco on puré de batata.\r"
  }],
  "aggregateRating": {},
  "video": {}
}, {
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
  "recipeIngredient": ["200g de farinha\r", "1 pitada de sal\r", "100g de gordura\r", "7 colheres de chá de água fria (cerca de)\r"],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Peneira-se a farinha com o sal para 1 tigela grande.\r"
  }, {
    "@type": "HowToStep",
    "text": "Corta-se a gordura em bocadinhos e junta-se à farinha.\r"
  }, {
    "@type": "HowToStep",
    "text": "Com as pontas dos dedos, mistura-se bem a farinha com a gordura, durante 2 - 3 minutos, até ficar com o aspecto da areia.\r"
  }, {
    "@type": "HowToStep",
    "text": "Junta-se a água e com 1 faca de ponta redonda, mistura-se bem até a massa começar a ficar pegajosa.\r"
  }, {
    "@type": "HowToStep",
    "text": "Trabalha-se bem com a mão, durante alguns segundos, até ficar uniforme e macia.\r"
  }, {
    "@type": "HowToStep",
    "text": "Envolve-se em papel manteiga e deixa-se descansar no frigorífico durante cerca de 15 minutos, ou envolve-se em película aderente e leva-se ao frigorífico durante 2 dias.\r"
  }, {
    "@type": "HowToStep",
    "text": "Estende-se a massa sobre superfície polvilhada e corta-se segundo a receita.\r"
  }, {
    "@type": "HowToStep",
    "text": "Forno regulado no 6 ou no 7 (?)\r"
  }],
  "aggregateRating": {},
  "video": {}
}];
var frasesAlbertina = ["viva o pinto da costa", "isso é que é"];
/* harmony default export */ var Appvue_type_script_lang_js_shadow = ({
  name: "app",
  type: "",

  data() {
    return {
      searchRecipe: "",
      recipeData: {},
      chosenRecipe: "",
      imagemAlbertina: "data:image/png;base64,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",
      showModal: false,
      chosenSentence: ""
    };
  },

  methods: {
    getRandomRecipe() {
      this.chosenRecipe = this.recipesData[Math.floor(Math.random() * this.recipesData.length)];
    },

    getImageThumbnail(image) {
      if (image.length === 0) {
        return this.imagemAlbertina;
      } else {
        return image[0];
      }
    },

    getRandomFrase() {
      this.chosenSentence = this.frasesAlbertina[Math.floor(Math.random() * this.frasesAlbertina.length)];
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
      var a = new RegExp(text, "g");
      var found = false;

      for (var keys in data) {
        // search recursively
        if (Array.isArray(data[keys]) || typeof data[keys] === "object") {
          found = this.checkIfCardHasSearch(data[keys], text);

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
      var search = this.searchRecipe.toLowerCase().trim();
      if (!search) return this.recipesData;
      var filteredRecipes = [];

      for (var obj = 0; obj < this.recipesData.length; obj++) {
        if (this.checkIfCardHasSearch(this.recipesData[obj], search)) {
          filteredRecipes.push(this.recipesData[obj]);
        }
      }

      return filteredRecipes;
    }

  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var src_Appvue_type_script_lang_js_shadow = (Appvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/App.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("bbc1")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  src_Appvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fdde386c",
  null
  ,true
)

/* harmony default export */ var Appshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('a-albertina', vue_wc_wrapper(external_Vue_default.a, Appshadow))

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "bbc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_fdde386c_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dbec");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_fdde386c_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_fdde386c_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_fdde386c_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_fdde386c_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_fdde386c_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbec":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4b44");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("02570555", content, shadowRoot)
};

/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "f6fd":
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

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
//# sourceMappingURL=a-albertina.js.map