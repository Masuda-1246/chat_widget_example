/*! chatux v1.3.0 Copyright (c) 2019-2022 Tom Misawa, riversun.org@gmail.com, https://github.com/riversun */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fak': 'kit',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab',
  'kit': 'fak'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var isUploadedIcon = prefix === 'fak';
  var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.15.4\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');

      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'comment-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f27a';
var svgPathData = 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faCommentAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });
var prefix = 'fas';
var iconName = 'times';
var width = 352;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [
    width,
    height,
    ligatures,
    unicode,
    svgPathData
  ]};

exports.faTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./node_modules/botui/build/botui-theme-default.css":
/*!**********************************************************!*\
  !*** ./node_modules/botui/build/botui-theme-default.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./botui-theme-default.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui-theme-default.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/botui/build/botui.min.css":
/*!************************************************!*\
  !*** ./node_modules/botui/build/botui.min.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./botui.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/botui/build/botui.min.js":
/*!***********************************************!*\
  !*** ./node_modules/botui/build/botui.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * botui 0.3.7
 * A JS library to build the UI for your bot
 * https://botui.org
 *
 * Copyright 2019, Moin Uddin
 * Released under the MIT license.
*/

!function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t.BotUI=e(t)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}("undefined"!=typeof window?window:this,function(t,e){"use strict";return function(e,n){function o(t,e,n,o){return"<a class='botui-message-content-link' target='"+(o?"blank":"")+"' href='"+n+"'>"+e+"</a>"}function i(t){return t.replace(b.image,"<img class='botui-message-content-image' src='$2' alt='$1' />").replace(b.icon,"<i class='botui-icon botui-message-content-icon fa fa-$1'></i>").replace(b.link,o)}function a(t,e){var n=document.createElement("script");n.type="text/javascript",n.src=t,e&&(n.onload=e),document.body.appendChild(n)}function s(t){x.action.addMessage&&m.message.human({delay:100,content:t}),x.action.show=!x.action.autoHide}function c(t){if(!t.loading&&!t.content)throw Error('BotUI: "content" is required in a non-loading message object.');t.type=t.type||"text",t.visible=!t.delay&&!t.loading,t.human&&m.opt.humanPhoto&&(t.humanPhoto=m.opt.humanPhoto),!t.human&&m.opt.botPhoto&&(t.botPhoto=m.opt.botPhoto),t.afterUpdate=!1;var e=x.messages.push(t)-1;return new Promise(function(n,o){setTimeout(function(){t.delay&&(t.visible=!0,t.loading&&(t.loading=!1)),n(e)},t.delay||0)})}function u(t){return"string"==typeof t&&(t={content:t}),t||{}}function r(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function l(t){if(!t.action&&!t.actionButton&&!t.actionText)throw Error('BotUI: "action" property is required.')}function h(t){return l(t),r({type:"text",cssClass:"",autoHide:!0,addMessage:!0},t),x.action.type=t.type,x.action.cssClass=t.cssClass,x.action.autoHide=t.autoHide,x.action.addMessage=t.addMessage,new Promise(function(e,n){v=e,setTimeout(function(){x.action.show=!0},t.delay||0)})}if(n=n||{},!e)throw Error("BotUI: Container id is required as first argument.");if(!document.getElementById(e))throw Error("BotUI: Element with id #"+e+" does not exist.");if(!t.Vue&&!n.vue)throw Error("BotUI: Vue is required but not found.");var f,d,v,p={debug:!1,fontawesome:!0,searchselect:!0},m={},b={icon:/!\(([^\)]+)\)/gim,image:/!\[(.*?)\]\((.*?)\)/gim,link:/\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim};t.Vue=t.Vue||n.vue;for(var g in p)n.hasOwnProperty(g)&&(p[g]=n[g]);t.Promise||"undefined"!=typeof Promise||n.promise||a("https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js");var y={template:"<div class=\"botui botui-container\" v-botui-container><div class=\"botui-messages-container\"><div v-for=\"msg in messages\" class=\"botui-message\" :class=\"msg.cssClass\" v-botui-scroll><div v-if=\"msg.visible\"><div v-if=\"!msg.human && msg.botPhoto\"><div v-if=\"!msg.loading\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.botPhoto\"></div></div><div v-if=\"msg.human && msg.humanPhoto\"><div v-if=\"!msg.loading\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.humanPhoto\"></div></div><div v-if=\"!msg.human && !msg.botPhoto\"><div v-if=\"msg.photo && !msg.loading\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div></div></div><transition :name=\"msg.human? \'slide-fade-l2r\':\'slide-fade-r2l\'\"><div v-if=\"msg.visible\"><div :class=\"[{human: msg.human, \'botui-message-content\': true}, msg.type]\"><span v-if=\"msg.type == \'text\'\" v-text=\"msg.content\" v-botui-markdown></span><span v-if=\"msg.type == \'html\'\" v-html=\"msg.content\"></span> <iframe v-if=\"msg.type == \'embed\'\" :src=\"msg.content\" frameborder=\"0\" allowfullscreen></iframe></div></div></transition><div v-if=\"msg.loading\"><div v-if=\"!msg.human && msg.botPhoto\"><div :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.botPhoto\"></div></div><div v-if=\"msg.human && msg.humanPhoto\"><div :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :src=\"msg.humanPhoto\"></div></div><div v-if=\"!msg.human && !msg.botPhoto\"><div v-if=\"msg.photo\" :class=\"[\'profil\', {human: msg.human, \'agent\': !msg.human}]\"> <img :class=\"[{human: msg.human, \'agent\': !msg.human}]\"></div></div></div><div v-if=\"msg.loading\" class=\"botui-message-content loading\"><i class=\"dot\"></i><i class=\"dot\"></i><i class=\"dot\"></i></div></div></div><div class=\"botui-actions-container\"><transition name=\"slide-fade\"><div v-if=\"action.show\" v-botui-scroll><form v-if=\"action.type == \'text\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\" action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button></form><form v-if=\"action.type == \'select\'\" class=\"botui-actions-select\" @submit.prevent=\"handle_action_select()\" :class=\"action.cssClass\"><i v-if=\"action.select.icon\" class=\"botui-icon botui-action-select-icon fa\" :class=\"\'fa-\' + action.select.icon\"></i><v-select v-if=\"action.select.searchselect && !action.select.multipleselect\" v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select><v-select v-else-if=\"action.select.searchselect && action.select.multipleselect\" multiple v-model=\"action.select.value\" :value=\"action.select.value\" :placeholder=\"action.select.placeholder\" class=\"botui-actions-text-searchselect\" :label=\"action.select.label\" :options=\"action.select.options\"></v-select> <select v-else v-model=\"action.select.value\" class=\"botui-actions-text-select\" :placeholder=\"action.select.placeholder\" :size=\"action.select.size\" :class=\"action.select.cssClass\" required v-focus><option v-for=\"option in action.select.options\" :class=\"action.select.optionClass\" v-bind:value=\"option.value\" :disabled=\"(option.value == \'\')?true:false\" :selected=\"(action.select.value == option.value)?\'selected\':\'\'\"> {{ option.text }}</option></select> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.select.button, \'botui-actions-select-submit\': !action.select.button}\"><i v-if=\"action.select.button && action.select.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.select.button.icon\"></i> <span>{{(action.select.button && action.select.button.label) || \'Ok\'}}</span></button></form><div v-if=\"action.type == \'button\'\" class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\"><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div><form v-if=\"action.type == \'buttontext\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\"action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-paper-plane\' +  action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button><div class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\" autofocus><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div></form></div></transition></div></div>",data:function(){return{action:{text:{size:30,placeholder:"Write here .."},button:{},show:!1,type:"text",autoHide:!0,addMessage:!0},messages:[]}},computed:{isMobile:function(){return t.innerWidth&&t.innerWidth<=768}},methods:{handle_action_button:function(t){for(var e=0;e<this.action.button.buttons.length;e++)if(this.action.button.buttons[e].value==t.value&&"function"==typeof this.action.button.buttons[e].event){if(this.action.button.buttons[e].event(t),this.action.button.buttons[e].actionStop)return!1;break}s(t.text);var n={type:"button",text:t.text,value:t.value};for(var o in t)t.hasOwnProperty(o)&&"type"!==o&&"text"!==o&&"value"!==o&&(n[o]=t[o]);v(n)},handle_action_text:function(){this.action.text.value&&(s(this.action.text.value),v({type:"text",value:this.action.text.value}),this.action.text.value="")},handle_action_select:function(){if(this.action.select.searchselect&&!this.action.select.multipleselect){if(!this.action.select.value.value)return;s(this.action.select.value[this.action.select.label]),v({type:"text",value:this.action.select.value.value,text:this.action.select.value.text,obj:this.action.select.value})}if(this.action.select.searchselect&&this.action.select.multipleselect){if(!this.action.select.value)return;for(var t=new Array,e=new Array,n=0;n<this.action.select.value.length;n++)t.push(this.action.select.value[n].value),e.push(this.action.select.value[n][this.action.select.label]);s(e.join(", ")),v({type:"text",value:t.join(", "),text:e.join(", "),obj:this.action.select.value})}else{if(!this.action.select.value)return;for(var n=0;n<this.action.select.options.length;n++)this.action.select.options[n].value==this.action.select.value&&(s(this.action.select.options[n].text),v({type:"text",value:this.action.select.value,text:this.action.select.options[n].text}))}}}};t.Vue.directive("botui-markdown",function(t,e){"false"!=e.value&&(t.innerHTML=i(t.textContent))}),t.Vue.directive("botui-scroll",{inserted:function(t){var e=document.querySelector(".botui-container");e.scrollTop=e.scrollHeight}}),t.Vue.directive("focus",{inserted:function(t){t.focus()}}),t.Vue.directive("botui-container",{inserted:function(t){d=t}}),f=new t.Vue({components:{"bot-ui":y}}).$mount("#"+e);var x=f.$children[0];return m.message={add:function(t){return c(u(t))},bot:function(t){return t=u(t),c(t)},human:function(t){return t=u(t),t.human=!0,c(t)},get:function(t){return Promise.resolve(x.messages[t])},remove:function(t){return x.messages.splice(t,1),Promise.resolve()},update:function(t,e){var n=x.messages[t];return n.content=e.content,n.visible=!e.loading,n.loading=!!e.loading,n.afterUpdate=!0,Promise.resolve(e.content)},removeAll:function(){return x.messages.splice(0,x.messages.length),Promise.resolve()}},m.opt={humanPhoto:null,botPhoto:null,setHumanPhoto:function(t){this.humanPhoto=t},setBotPhoto:function(t){this.botPhoto=t}},m.action={show:h,hide:function(){return x.action.show=!1,Promise.resolve()},text:function(t){return l(t),x.action.text=t.action,h(t)},button:function(t){return l(t),t.type="button",x.action.button.buttons=t.action,h(t)},select:function(t){if(l(t),t.type="select",t.action.label=t.action.label||"text",t.action.value=t.action.value||"",t.action.searchselect=void 0!==t.action.searchselect?t.action.searchselect:p.searchselect,t.action.multipleselect=t.action.multipleselect||!1,t.action.searchselect&&"string"==typeof t.action.value)if(t.action.multipleselect){var e=t.action.value.split(",");t.action.value=new Array;for(var n=0;n<t.action.options.length;n++)for(var o=0;o<e.length;o++)t.action.options[n].value==e[o]&&t.action.value.push(t.action.options[n])}else for(var n=0;n<t.action.options.length;n++)t.action.options[n].value==t.action.value&&(t.action.value=t.action.options[n]);return t.action.searchselect||t.action.options.unshift({value:"",text:t.action.placeholder}),x.action.button=t.action.button,x.action.select=t.action,h(t)},buttontext:function(t){return l(t),t.type="buttontext",x.action.button.buttons=t.actionButton,x.action.text=t.actionText,h(t)}},p.fontawesome&&a("https://use.fontawesome.com/ea731dcb6f.js"),p.searchselect&&a("https://unpkg.com/vue-select@2.4.0/dist/vue-select.js",function(){Vue.component("v-select",VueSelect.VueSelect)}),p.debug&&(m._botApp=f),m}});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui-theme-default.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui-theme-default.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
exports.push([module.i, "/*\n  Default theme for BotUI\n*/\n.botui-container {\n  font-size: 14px;\n  background-color: #fff;\n  font-family: \"Open Sans\", sans-serif; }\n\n.botui-messages-container {\n  padding: 10px 20px; }\n\n.botui-actions-container {\n  padding: 10px 20px; }\n\n.botui-message {\n  min-height: 30px; }\n\n.botui-message-content {\n  padding: 7px 13px;\n  border-radius: 15px;\n  color: #595a5a;\n  background-color: #ebebeb; }\n  .botui-message-content.human {\n    color: #f7f8f8;\n    background-color: #919292; }\n  .botui-message-content.text {\n    line-height: 1.3; }\n  .botui-message-content.loading {\n    background-color: rgba(206, 206, 206, 0.5);\n    line-height: 1.3;\n    text-align: center; }\n  .botui-message-content.embed {\n    padding: 5px;\n    border-radius: 5px; }\n\n.botui-message-content-link {\n  color: #919292; }\n\n.botui-actions-text-input {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 5px 7px;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: transparent;\n  color: #595a5a;\n  border-bottom: 1px solid #919292; }\n\n.botui-actions-text-submit {\n  color: #fff;\n  width: 30px;\n  padding: 5px;\n  height: 30px;\n  line-height: 1;\n  border-radius: 50%;\n  border: 1px solid #919292;\n  background: #777979; }\n\n.botui-actions-buttons-button {\n  border: 0;\n  color: #fff;\n  line-height: 1;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 7px 15px;\n  border-radius: 4px;\n  font-family: \"Open Sans\", sans-serif;\n  background: #777979;\n  box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.25); }\n\n.botui-actions-text-select {\n  border: 0;\n  outline: 0;\n  border-radius: 0;\n  padding: 5px 7px;\n  font-family: \"Open Sans\",sans-serif;\n  background-color: transparent;\n  color: #595a5a;\n  border-bottom: 1px solid #919292; }\n\n.botui-actions-text-searchselect {\n  border: 0;\n  outline: 0;\n  border-radius: 0;\n  padding: 5px 7px;\n  font-family: \"Open Sans\",sans-serif;\n  background-color: transparent;\n  color: #595a5a;\n  border-bottom: 1px solid #919292; }\n\n.botui-actions-text-searchselect .dropdown-toggle {\n  border: none !important; }\n\n.botui-actions-text-searchselect .selected-tag {\n  background-color: transparent !important;\n  border: 0 !important; }\n\n/*\n  Animation of messages\n  For details on how to change, see: https://vuejs.org/v2/guide/transitions.html\n*/\n.slide-fade-enter-active {\n  transition: all .3s ease; }\n\n.slide-fade-enter,\n.slide-fade-leave-to {\n  opacity: 0;\n  transform: translateX(-10px); }\n\n/*\n  Animation of loading dots\n*/\n.dot {\n  width: .5rem;\n  height: .5rem;\n  border-radius: .5rem;\n  display: inline-block;\n  background-color: #919292; }\n  .dot:nth-last-child(1) {\n    margin-left: .3rem;\n    animation: loading .6s .3s linear infinite; }\n  .dot:nth-last-child(2) {\n    margin-left: .3rem;\n    animation: loading .6s .2s linear infinite; }\n  .dot:nth-last-child(3) {\n    animation: loading .6s .1s linear infinite; }\n\n@keyframes loading {\n  0% {\n    transform: translate(0, 0);\n    background-color: #ababab; }\n  25% {\n    transform: translate(0, -3px); }\n  50% {\n    transform: translate(0, 0px);\n    background-color: #ababab; }\n  75% {\n    transform: translate(0, 3px); }\n  100% {\n    transform: translate(0, 0px); } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui.min.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/botui/build/botui.min.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\n * botui 0.3.7\n * A JS library to build the UI for your bot\n * https://botui.org\n *\n * Copyright 2019, Moin Uddin\n * Released under the MIT license.\n*/\n\na.botui-message-content-link:focus{outline:thin dotted}a.botui-message-content-link:focus:active,a.botui-message-content-link:focus:hover{outline:0}form.botui-actions-text{margin:0}button.botui-actions-buttons-button,input.botui-actions-text-input{margin:0;font-size:100%;line-height:normal;vertical-align:baseline}button.botui-actions-buttons-button::-moz-focus-inner,input.botui-actions-text-input::-moz-focus-inner{border:0;padding:0}button.botui-actions-buttons-button{cursor:pointer;-webkit-appearance:button}\n.botui-app-container{width:100%;height:100%;margin:0 auto}.botui-container{width:100%;height:100%;overflow-y:auto;overflow-x:hidden}.botui-message{margin:10px 0;min-height:20px}.botui-message:after{display:block;content:\"\";clear:both}.botui-message-content{width:auto;max-width:75%;display:inline-block}.botui-message-content.human{float:right}.botui-message-content iframe{width:100%}.botui-message-content-image{margin:5px 0;display:block;max-width:200px;max-height:200px}.botui-message-content-link{text-decoration:underline}.profil{position:relative;border-radius:50%}.profil.human{float:right;margin-left:5px}.profil.agent{float:left;margin-right:5px}.profil>img{border-radius:50%;width:26px;height:26px;border:0}.profil>img.agent{content:url(http://decodemoji.com/img/logos/blue_moji_hat.svg)}button.botui-actions-buttons-button{margin-top:10px;margin-bottom:10px}button.botui-actions-buttons-button:not(:last-child){margin-right:10px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.chatux-sp {\n    height: 100vh;\n}\n\n.chatux-btn-chat-pc {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n\n.chatux-btn-chat {\n    box-shadow: 2px 3px 6px rgba(0, 0, 0, .4);\n    border-radius: 50%;\n    text-align: center;\n    vertical-align: middle;\n    position: fixed;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n    transition: transform 0.2s linear, opacity 0.3s;\n    transform: scale(0.9);\n    opacity: 0;\n}\n\n.chatux-btn-chat:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc;\n    transform: scale(1.0);\n\n}\n\n.chatux-btn-on {\n    opacity: 1;\n}\n\n.chatux-scrn-on {\n    transition: transform 0.2s linear, opacity 0.3s;\n    transform: scale(1.0);\n    opacity: 1;\n}\n\n.chatux-scrn-off {\n    transition: transform 0.2s linear, opacity 0.3s;\n    transform: scale(0.0);\n    opacity: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/botui-theme-riversun.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/botui-theme-riversun.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
exports.push([module.i, "/*\n  Default theme for BotUI\n*/\n\n\n\n\n.botui-container {\n    font-size: 14px;\n    background-color: #d7e4de;\n    font-family: \"Open Sans\", sans-serif;\n}\n\n.botui-messages-container {\n    padding: 5px 10px;\n}\n\n.botui-actions-container {\n    padding: 5px 10px;\n}\n\n.botui-message {\n    min-height: 30px;\n}\n\n.botui-message-content {\n    padding: 7px 13px;\n    border-radius: 15px;\n    color: #314141;\n    background-color: #fff;\n}\n\n.botui-message-content.human {\n    color: #f8f8f8;\n    background-color: #36415d;\n}\n\n.botui-message-content.text {\n    line-height: 1.3;\n}\n\n.botui-message-content.loading {\n    background-color: rgba(255, 255, 255, 0.8);\n    line-height: 1.3;\n    text-align: center;\n}\n\n.botui-message-content.embed {\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.botui-message-content-link {\n    color: #919292;\n}\n\n.botui-actions-text-input {\n    border: 0;\n    outline: none;\n    border-radius: 0;\n    padding: 5px 7px;\n    font-family: \"Open Sans\", sans-serif;\n    background-color: transparent;\n    color: #595a5a;\n    width: 70%;\n    border-bottom: 1px solid #919292;\n}\n\n.botui-actions-text-submit {\n    color: #314141;\n    width: 40px;\n    padding: 5px;\n    height: 30px;\n    line-height: 1;\n    border-radius: 10%;\n    border: 1px solid #36415d;\n    background: #fff;\n}\n\n.botui-actions-buttons-button {\n    border: 0;\n    color: #36415d;\n    line-height: 1;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: 500;\n    padding: 7px 15px;\n    border-radius: 4px;\n    font-family: \"Open Sans\", sans-serif;\n    background: #ffffff;\n    border: 1px solid #36415d;\n    box-shadow: 2px 3px 4px 0 rgba(0, 0, 0, 0.25);\n}\n\n.botui-actions-text-select {\n    border: 0;\n    outline: 0;\n    border-radius: 0;\n    padding: 5px 7px;\n    font-family: \"Open Sans\", sans-serif;\n    background-color: transparent;\n    color: #595a5a;\n    border-bottom: 1px solid #919292;\n}\n\n.botui-actions-text-searchselect {\n    border: 0;\n    outline: 0;\n    border-radius: 0;\n    padding: 5px 7px;\n    font-family: \"Open Sans\", sans-serif;\n    background-color: transparent;\n    color: #595a5a;\n    border-bottom: 1px solid #919292;\n}\n\n.botui-actions-text-searchselect .dropdown-toggle {\n    border: none !important;\n}\n\n.botui-actions-text-searchselect .selected-tag {\n    background-color: transparent !important;\n    border: 0 !important;\n}\n\n/*\n  Animation of messages\n  For details on how to change, see: https://vuejs.org/v2/guide/transitions.html\n*/\n.slide-fade-enter-active {\n    transition: all .3s ease;\n}\n\n.slide-fade-enter,\n.slide-fade-leave-to {\n    opacity: 0;\n    transform: translateX(-10px);\n}\n\n.slide-fade-l2r-enter-active {\n    transition: all .3s ease;\n}\n\n.slide-fade-l2r-enter,\n.slide-fade-l2r-leave-to {\n    opacity: 0;\n    transform: translateX(10px);\n}\n\n.slide-fade-r2l-enter-active {\n    transition: all .3s ease;\n}\n\n.slide-fade-r2l-enter,\n.slide-fade-r2l-leave-to {\n    opacity: 0;\n    transform: translateX(-10px);\n}\n\n/*\n  Animation of loading dots\n*/\n.dot {\n    width: .5rem;\n    height: .5rem;\n    border-radius: .5rem;\n    display: inline-block;\n    background-color: #cccccc;\n}\n\n.dot:nth-last-child(1) {\n    margin-left: .3rem;\n    animation: loading .6s .3s linear infinite;\n}\n\n.dot:nth-last-child(2) {\n    margin-left: .3rem;\n    animation: loading .6s .2s linear infinite;\n}\n\n.dot:nth-last-child(3) {\n    animation: loading .6s .1s linear infinite;\n}\n\n@keyframes loading {\n    0% {\n        transform: translate(0, 0);\n        background-color: #ababab;\n    }\n    25% {\n        transform: translate(0, -3px);\n    }\n    50% {\n        transform: translate(0, 0px);\n        background-color: #ababab;\n    }\n    75% {\n        transform: translate(0, 3px);\n    }\n    100% {\n        transform: translate(0, 0px);\n    }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/jsframe.js/lib/jsframe.min.js":
/*!****************************************************!*\
  !*** ./node_modules/jsframe.js/lib/jsframe.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! jsframe v1.6.2 Copyright (c) 2007-2020 Tom Misawa */
!function(e,t){if(true)module.exports=t();else { var n, r; }}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function l(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],d=r[s]||0,u="".concat(s," ").concat(d);r[s]=d+1;var c=l(u),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==c?(i[c].references++,i[c].updater(m)):i.push({identifier:u,updater:y(m,t),references:1}),n.push(u)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,c=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,f=0;function y(e,t){var r,n,o;if(t.singleton){var a=f++;r=h||(h=d(t)),n=m.bind(null,r,a,!1),o=m.bind(null,r,a,!0)}else r=d(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=l(r[n]);i[o].references--}for(var a=s(e,t),d=0;d<r.length;d++){var u=l(r[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=a}}}},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var i,l,s;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},function(e,t,r){
/*! merge-deeply v2.1.0 Copyright (c) 2019-2020 riversun.org@gmail.com */
e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){var a=function(e){return e&&"object"===l(e)&&!Array.isArray(e)},i=r&&r.concatArray,d={};r&&r.assignToObject&&(d=r.assignToObject,r.assignToObject=null);var u,c,m,p=null;if(p=d===e?e:Object.assign(d,e),a(e)&&a(t))for(var h=0,f=Object.entries(t);h<f.length;h++){var y=o(f[h],2),b=y[0],g=y[1],v=e[b];i&&Array.isArray(g)&&Array.isArray(v)&&t!==e?p[b]=v.concat.apply(v,n(g)):a(g)&&Object.prototype.hasOwnProperty.call(e,b)?p[b]=s(v,g,r):Object.assign(p,(m=g,(c=b)in(u={})?Object.defineProperty(u,c,{value:m,enumerable:!0,configurable:!0,writable:!0}):u[c]=m,u))}return p}function d(e){var t=null,r=null,n=e.op;if(!n)throw Error('The initialization property "op" cannot be omitted. "merge","overwrite-merge","clone" can be specified.');var o="merge"===n,a="clone"===n,i="overwrite-merge"===n;if(o){if(t=e.object1,r=e.object2,!t||!r)throw Error("object1 or object2 is not specified.")}else if(i){if(t=e.object1,r=e.object2,!t||!r)throw Error("object1 or object2 is not specified.");if(0===Object.keys(r).length)return null}else{if(!a)throw Error('An invalid "op" property value "'.concat(n,'" has been specified.'));t=e.object1,r={}}var l,d=Object.create(Object.getPrototypeOf(t)),u=null,c=(l=t,Object.getPrototypeOf(l)!==Object.prototype);return o&&c||a?(s(t,t,{assignToObject:d,concatArray:e&&e.concatArray}),u=d):u={},s(a?u:t,r,{assignToObject:i?t:u,concatArray:e&&e.concatArray}),u}r.r(t),r.d(t,"default",(function(){return d}))}]).default},function(e,t){CALIGN={},CALIGN.LEFT_TOP="LEFT_TOP",CALIGN.HCENTER_TOP="CENTER_TOP",CALIGN.RIGHT_TOP="RIGHT_TOP",CALIGN.LEFT_VCENTER="LEFT_CENTER",CALIGN.HCENTER_VCENTER="CENTER_CENTER",CALIGN.CENTER=CALIGN.HCENTER_VCENTER,CALIGN.RIGHT_VCENTER="RIGHT_CENTER",CALIGN.LEFT_BOTTOM="LEFT_BOTTOM",CALIGN.HCENTER_BOTTOM="CENTER_BOTTOM",CALIGN.RIGHT_BOTTOM="RIGHT_BOTTOM",e.exports=CALIGN},function(e,t,r){var n=r(16);function o(){this.fps=30,this.durationMillis=200,this.targetFrame=null,this._crrAlpha=1,this._toAlpha=1,this._crrWidth=0,this._crrHeight=0,this._toWidth=0,this._toHeight=0,this._toX=0,this._toY=0,this.pinnedAnimationEnabled=!1,this._pinX=0,this._pinY=0,this._pinAnchor=null}o.prototype.set=function(e){var t=this;t.targetFrame=e,t.fromWidth(e.getWidth()),t.fromHeight(e.getHeight()),t.toWidth(e.getWidth()),t.toHeight(e.getHeight());var r=e.getPosition();return t.fromPosition(r.x,r.y,r.anchor),t},o.prototype.get=function(){return this.targetFrame},o.prototype.setDuration=function(e){return this.durationMillis=e,this},o.prototype.setFPS=function(e){return this.fps=e,this},o.prototype.fromPosition=function(e,t,r){var n=this;return n.pinnedAnimationEnabled=!0,n._pinX=e,n._pinY=t,n.toPosition(e,t),r&&(n._pinAnchor=r),n},o.prototype.fromWidth=function(e){return this._crrWidth=e,this},o.prototype.fromHeight=function(e){return this._crrHeight=e,this},o.prototype.toWidth=function(e){return this._toWidth=e,this},o.prototype.toHeight=function(e){return this._toHeight=e,this},o.prototype.fromAlpha=function(e){return this._crrAlpha=e,this},o.prototype.toAlpha=function(e){return this._toAlpha=e,this},o.prototype.ease=function(e){return this._ease=e,this},o.prototype.toPosition=function(e,t){return this._toX=e,this._toY=t,this},o.prototype.toX=function(e){return this._toX=e,this},o.prototype.toY=function(e){return this._toY=e,this},o.prototype.start=function(e,t){var r=this,o=r._crrWidth,a=r._crrHeight,i=r._pinX,l=r._pinY,s=r._crrAlpha;return new Promise((function(d,u){var c=parseInt(r.fps*(r.durationMillis/1e3));0==c&&(c=1);var m=(r._toWidth-o)/c,p=(r._toHeight-a)/c,h=(r._toX-i)/c,f=(r._toY-l)/c,y=(r._toAlpha-s)/c;r._ease&&(y/=1.24);var b=r.durationMillis/c,g=0;function v(){var e=new n;e.setIntervalMillis(b),e.setCallback((function(e){if(g==c){var n=r._toWidth,u=r._toHeight,b=i+h*g,v=l+f*g,C=r._toAlpha;r.pinnedAnimationEnabled&&r.targetFrame._setPositionInternally(b,v,r._pinAnchor,n,u),r.targetFrame.htmlElement.style&&(r.targetFrame.htmlElement.style.opacity=C),r.targetFrame.setSize(n,u,!0),r._crrWidth=n,r._crrHeight=u,r._pinX=b,r._pinY=v}if(g==c+1)return e.stopTimer(),r.targetFrame.htmlElement.style&&(r.targetFrame.htmlElement.style.opacity=r._toAlpha),void d(r);n=o+m*g,u=a+p*g,b=i+h*g,v=l+f*g,C=s+y*g;if(r.pinnedAnimationEnabled&&r.targetFrame._setPositionInternally(b,v,r._pinAnchor,n,u),r.targetFrame.htmlElement.style&&(r.targetFrame.htmlElement.style.opacity=C),r.targetFrame.setSize(n,u,!0),0==g){var B=r.targetFrame.parentCanvas;if(B)B.getWindow(r.targetFrame.id)&&r.targetFrame.show({requestFocus:t})}g++})),e.startTimer()}if(e){var C=new n;C.setIntervalMillis(e),C.setCallback((function(e){e.stopTimer(),v()})),C.startTimer()}else v()}))},e.exports=o},function(e,t,r){
/*! event-listener-helper(https://github.com/riversun/event-listener-helper) v1.0.2 Copyright (c) 2020 riversun.org@gmail.com */
e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function i(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),r.d(t,"default",(function(){return d}));var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.evTargetListenersMap=new Map,this.listenerNum=0}var t,r;return t=e,(r=[{key:"addEventListener",value:function(e,t,r,n){var o=this,a=null;if(n&&(a=this._cloneJson(n)),arguments.length>4)throw Error("Too many arguments. Number of arguments can be specified 4.");this._checkTypeOfOptions(a);var i=null;a&&a.listenerName&&(i=a.listenerName);var l=null;a&&a.once&&(delete a.once,a.callbackOnce=!0,l=function(n){r(n),o.removeEventListener(e,t,null,a)});var s={listenerName:null,success:!0};l?e.addEventListener(t,l,a):e.addEventListener(t,r,a);var d=this.evTargetListenersMap.get(e);d||(d=new Map,this.evTargetListenersMap.set(e,d));var u=d.get(t);if(u||(u=new Map,d.set(t,u)),null!==i){if(u.has(i))throw Error('The listenerName "'.concat(i,'" is already used for the specified event type ').concat(t));u.set(i,{listener:r,onceListener:l,options:a}),s.listenerName=i}else{var c="listener-".concat(this.listenerNum);a||(a={}),a.listenerName=c,u.set(c,{listener:r,onceListener:l,options:a}),s.listenerName=c,this.listenerNum+=1}return s}},{key:"removeEventListener",value:function(e,t,r,n){if(arguments.length<3)throw Error("Three or four arguments are required.");this._checkTypeOfOptions(n);var o=null;n&&n.listenerName&&(o=n.listenerName);var a={success:!1,message:"unknown error"},i=this.evTargetListenersMap.get(e);if(!i)return a.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have any listeners."),a;var l=i.get(t);if(!l)return a.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listeners.'),a;if(o){var s=l.get(o);if(!s)return a.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listener "').concat(o,'"'),a;l.delete(o),s.options&&s.options.callbackOnce?e.removeEventListener(t,s.onceListener,s.options):e.removeEventListener(t,s.listener,s.options),a.success=!0}else if(!o){if(!r)return a.message="options.listenerName is not found",a;var d="listener",u=r,c=this._searchKeyInValueContent(l,d,u);if(c){var m=l.get(c),p=m.onceListener,h=m.options;l.delete(c),p?e.removeEventListener(t,p,h):e.removeEventListener(t,r,h),a.success=!0}else a.success=!1,a.message="Specified listener could not be deleted from DOM element ".concat(e,"(id=").concat(e.id,").\n        Since the specified listener is not registered as an event listener,\n        it may have been registered outside of event-listener-helper.")}return a}},{key:"getEventListeners",value:function(e,t){return e?t?this._getEventListenersWith2Args(e,t):this._getEventListenersWith1Arg(e):[]}},{key:"_getEventListenersWith1Arg",value:function(e){var t=[],r=this.evTargetListenersMap.get(e);if(!r)return t;var n,i=a(r);try{for(i.s();!(n=i.n()).done;){var l,s=o(n.value,2),d=s[0],u=s[1],c=[],m=a(u.values());try{for(m.s();!(l=m.n()).done;){var p=l.value;c.push(this._getFrozenListenerDef(p))}}catch(e){m.e(e)}finally{m.f()}c.length>0&&t.push({eventType:d,listeners:c})}}catch(e){i.e(e)}finally{i.f()}return t}},{key:"_getEventListenersWith2Args",value:function(e,t){if(2!==arguments.length)throw Error("Only two arguments can be specified");var r=[],n=this.evTargetListenersMap.get(e);if(!n)return r;var o=n.get(t);if(!o)return r;var i,l=a(o.values());try{for(l.s();!(i=l.n()).done;){var s=i.value,d=this._getFrozenListenerDef(s);r.push(d)}}catch(e){l.e(e)}finally{l.f()}return r}},{key:"getEventListener",value:function(e,t,r){if(3!==arguments.length)throw Error("Only 3 arguments can be specified");var n=this.evTargetListenersMap.get(e);if(!n)return null;var o=n.get(t);if(!o)return null;var a=o.get(r),i=this._getFrozenListenerDef(a);return i}},{key:"hasEventListeners",value:function(e,t){if(2!==arguments.length)throw Error("Only two arguments can be specified");var r=this.evTargetListenersMap.get(e);if(!r)return!1;var n=r.get(t);return!(!n||0===n.size)}},{key:"hasEventListener",value:function(e,t,r){if(3!==arguments.length)throw Error("Only 3 arguments can be specified");var n=this.evTargetListenersMap.get(e);if(!n)return!1;var o=n.get(t);if(!o)return!1;var a=o.get(r);return!!a}},{key:"_getFrozenListenerDef",value:function(e){if(!e)return null;var t={},r=null,n=e.options;return n&&(r={},t.options=r,n.capture&&(r.capture=n.capture),n.callbackOnce&&(r.once=n.callbackOnce),n.listenerName&&(r.listenerName=n.listenerName)),t.listener=e.listener,Object.freeze(r),Object.freeze(t),t}},{key:"clearAllEventListeners",value:function(){var e,t=a(this.getAllEventTargets());try{for(t.s();!(e=t.n()).done;){var r=e.value;this.clearEventListeners(r)}}catch(e){t.e(e)}finally{t.f()}}},{key:"clearEventListeners",value:function(e,t){if(!e)throw Error("At least the EventTarget must be specified as an argument");var r=this.getEventListeners(e,t);if(t){if(t){var n,o=a(r);try{for(o.s();!(n=o.n()).done;){var i=n.value;this.removeEventListener(e,t,null,i.options)}}catch(e){o.e(e)}finally{o.f()}}}else{var l,s=a(r);try{for(s.s();!(l=s.n()).done;){var d,u=l.value,c=u.eventType,m=a(u.listeners);try{for(m.s();!(d=m.n()).done;){var p=d.value.options;this.removeEventListener(e,c,null,p)}}catch(e){m.e(e)}finally{m.f()}}}catch(e){s.e(e)}finally{s.f()}}}},{key:"clearEventListener",value:function(e,t,r){var n=this.getEventListener(e,t,r);n&&n.options&&this.removeEventListener(e,t,null,n.options)}},{key:"getAllEventTargets",value:function(){return Array.from(this.evTargetListenersMap.keys())}},{key:"searchEventListenersByName",value:function(e){var t,r=[],n=a(this.getAllEventTargets());try{for(n.s();!(t=n.n()).done;){var o,i=t.value,l=this.evTargetListenersMap.get(i),s=a(l.keys());try{for(s.s();!(o=s.n()).done;){var d=o.value,u=l.get(d),c=this._getFrozenListenerDef(u.get(e));c&&r.push(c)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){n.e(e)}finally{n.f()}return r}},{key:"_searchKeyInValueContent",value:function(e,t,r){var n,i=a(e);try{for(i.s();!(n=i.n()).done;){var l=o(n.value,2),s=l[0];if(l[1][t]===r)return s}}catch(e){i.e(e)}finally{i.f()}return null}},{key:"_checkTypeOfOptions",value:function(e){if("object"!==n(e)&&void 0!==e)throw"boolean"==typeof e?new Error("Type of boolean is not accepted as the fourth argument you specify.\n      If you want to enable useCapture, specify {capture: true} as the fourth parameter instead."):new Error("Type of ".concat(n(e)," is not accepted as the fourth argument you specify.\n      If you want to specify options, specify an object like {capture: true, listenerName:'my-listener-01'}."))}},{key:"_cloneJson",value:function(e){return JSON.parse(JSON.stringify(e))}}])&&s(t.prototype,r),e}()}]).default},function(e,t){e.exports=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.superConstructor=t,e.superClass=t.prototype}},function(e,t,r){var n=r(2),o=r(8),a=r(18),i=r(19);function l(){}function s(e,t){var r=t.querySelectorAll("img");t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e);for(var n=0;n<r.length;n++){var o=r[n];e!==o&&t.removeChild(o)}}l.prototype.buildChildMenuAppearance=function(e){return new i(e)},l.prototype.buildTextButtonAppearance=function(e){return e?n({op:"clone",object1:e,concatArray:!0}):new o},l.prototype.buildImageButtonAppearance=function(e){return e?n({op:"clone",object1:e}):new a},l.prototype.buildButton=function(e){return this.buildTextButton(e)},l.prototype.appendChildMenuTo=function(e,t){var r=document.createElement("div");r.classList.add("jsframe-child-menu"),r.innerHTML=e.childMenuHTML,r.style.position="absolute",r.style.pointerEvents="none",r.style.width=e.childMenuWidth+"px",r.style.display="none";var n=e.xOffset,o=parseInt(t.style.height,10)+e.yOffset+2;"LEFT"===e.childMenuAlign?r.style.left=n+"px":"RIGHT"===e.childMenuAlign?r.style.right=n+"px":"CENTER"===e.childMenuAlign&&(n=-e.childMenuWidth/2+parseInt(t.style.height,10)/2,r.style.left=n+"px"),r.style.top=o+"px",r.firstChild.style.pointerEvents="auto",t.appendChild(r)},l.prototype.buildTextButton=function(e){var t=e.size,r=t,n=t;null!=e.width&&(r=e.width),null!=e.height&&(n=e.height);var o=document.createElement("div"),a=e.borderWidth,i=e.borderRadius,l=e.borderColorDefault,d=e.borderColorFocused,u=e.borderColorHovered,c=e.borderColorPressed,m=e.borderStyleDefault,p=e.borderStyleFocused,h=e.borderStyleHovered,f=e.borderStylePressed,y=e.backgroundColorDefault,b=e.backgroundColorFocused,g=e.backgroundColorHovered,v=e.backgroundColorPressed,C=e.backgroundBoxShadow,B=e.fa,E=e.caption,w=e.imageDefault,x=e.imageFocused,A=e.imageHovered,F=e.imagePressed;w&&(w.style.pointerEvents="none"),x&&(x.style.pointerEvents="none"),A&&(A.style.pointerEvents="none"),F&&(F.style.pointerEvents="none");var T=e.captionColorDefault,I=e.captionColorFocused,_=e.captionColorHovered,S=e.captionColorPressed,D=e.captionShiftYpx,M=e.captionFontRatio;o._hasFrameFocus=!1,o._isMouseDown=!1,o.style.position="absolute",o.style.top="0px",o.style.left="0px",o.style.width=r+"px",o.style.height=n+"px",e.cursor?o.style.cursor=e.cursor:o.style.cursor="pointer",o.style.margin="0px",o.style.padding="0px",o.style.boxSizing="content-box",o.style.fontFamily="sans-serif",o.onmousedown=function(e){o._isMouseDown=!0,o._handleFocusDrawing("onmousedown")},o.onmouseout=function(e){o._isMouseDown=!1,o._handleFocusDrawing("onmouseout")},o.onmouseover=function(e){o._handleHoverDrawing()},o.onmouseup=function(e){o._isMouseDown=!1,o._handleFocusDrawing("onmouseup")},o._onTakeFocus=function(){o._hasFrameFocus=!0,o._handleFocusDrawing("_onTakeFocus")},o._onReleaseFocus=function(){o._hasFrameFocus=!1,o._handleFocusDrawing("_onReleaseFocus")},o._handleFocusDrawing=function(e){o._hasFrameFocus?o._isMouseDown?(o.style.borderColor=c,o.style.borderStyle=f,o.style.backgroundColor=v,o.style.color=S,F&&s(F,o)):(o.style.borderColor=d,o.style.borderStyle=p,o.style.backgroundColor=b,o.style.color=I,x&&s(x,o)):o._isMouseDown?(o.style.borderColor=c,o.style.borderStyle=f,o.style.backgroundColor=v,o.style.color=S,F&&s(F,o)):(o.style.borderColor=l,o.style.borderStyle=m,o.style.backgroundColor=y,o.style.color=T,w&&s(w,o))},o._handleHoverDrawing=function(){o._hasFrameFocus,u&&(o.style.borderColor=u),h&&(o.style.borderStyle=h),g&&(o.style.backgroundColor=g),_&&(o.style.color=_),A&&s(A,o)},o.style.padding="0px",o.style.textAlign="center",o.style.fontSize=n*M+"px",o.style.lineHeight=n+"px",o.style.borderWidth="1px",null!=a&&(o.style.borderWidth=a+"px"),null!=C&&(o.style.boxShadow=C),o.style.borderRadius=i+parseInt(o.style.borderWidth)+"px";if(w)s(w,o);else if(E){(k=document.createElement("span")).style.width="100%",k.style.marginTop=D+"px",k.style.display="inline-block",k.style.textAlign="center",k.style.fontFamily="sans-serif",k.appendChild(document.createTextNode(E)),o.appendChild(k)}else if(B){var k;(k=document.createElement("span")).style.pointerEvents="none",k.style.width="100%",k.style.marginTop=D+"px",k.style.display="inline-block",k.style.textAlign="center",k.style.fontFamily="sans-serif",k.innerHTML='<i class="'+B+'"></i>',o.appendChild(k)}else 0;return o._handleFocusDrawing(),o},e.exports=l},function(e,t){e.exports=function(){this.size=14,this.width=null,this.height=null,this.borderRadius=2,this.borderWidth=0,this.borderColorDefault="#aaaaaa",this.borderColorFocused=this.borderColorDefault,this.borderColorHovered=null,this.borderColorPressed=this.borderColorDefault,this.borderStyleDefault="solid",this.borderStyleFocused=this.borderStyleDefault,this.borderStyleHovered=null,this.borderStylePressed=this.borderStyleDefault,this.backgroundBoxShadow=null,this.backgroundColorDefault="transparent",this.backgroundColorFocused=this.backgroundColorDefault,this.backgroundColorHovered=null,this.backgroundColorPressed=this.backgroundColorDefault,this.caption=null,this.captionColorDefault="white",this.captionColorFocused=this.captionColorDefault,this.captionColorHovered=null,this.captionColorPressed=this.captionColorDefault,this.captionShiftYpx=0,this.captionFontRatio=1}},function(e,t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)}e.exports.objectAssign=function e(t){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];if(!a.length)return t;var l=a.shift();if(o(t)&&o(l))for(var s in l)o(l[s])?(t[s]||Object.assign(t,n({},s,{})),e(t[s],l[s])):Object.assign(t,n({},s,l[s]));return e.apply(void 0,[t].concat(a))}},function(e,t,r){e.exports={JSFrame:r(11)}},function(e,t,r){"use strict";r(12);var n=r(14),o=r(3),a=r(15),i=r(6),l=r(17),s=r(7),d=r(4),u=r(5),c={yosemite:r(21),redstone:r(24),popup:r(27),toast:r(30),material:r(31)},m={yosemite:r(34)},p={};function h(e,t,r,n,o,a,i,l){var s=this;if(s.movable=!0,s.id=e,s.property={},s.extra={},s.parentCanvas=null,s.htmlElement=null,s.pullUpDisabled=!1,l&&(s.pullUpDisabled=l.pullUpDisabled),s.htmlElement=document.createElement(p.CBEAN.HTML_ELEMENT),s.htmlElement.id=p.CBEAN.HTML_ELEMENT_ID_PREFIX+e,s.htmlElement.style.position="absolute",s.htmlElement.style.left=parseInt(t,10)+"px",s.htmlElement.style.top=parseInt(r,10)+"px",s.htmlElement.style.width=parseInt(n,10)+"px",s.htmlElement.style.height=parseInt(o,10)+"px",null!==a&&(s.htmlElement.style.zIndex=a),s.htmlElement.style.borderColor="#000000",s.htmlElement.style.fontSize="1px",s.htmlElement.parent=s,s.htmlElement.onmousedown=s.onmouseDown,"ontouchstart"in window){s.htmlElement.ontouchstart=function(e){s.onmouseDown.bind(this)(e)}}s.htmlElement.typeName=p.CBEAN.TYPE_NAME,s.htmlElement.usage="nothing",s.htmlElement.isRangeLimited=!1,s.htmlElement.argX=1,s.htmlElement.argY=1,s.externalAreaClickedListener=null,s.onMoveListener=null}function f(e,t,r,n,o,a){var i=this;i.enablePullUp=!0,i.currentObject=null,i.onTopObject=null,i.offsetX=0,i.offsetY=0,i.mouseDownSource=null,i.id=t,i.canvasElement=null,i.parentElement=e,i.beanList=new Array,i.beanIdName={},i.beanNameId={},i.eventData=new function(){this.x=0,this.y=0,this.screenX=0,this.screenY=0,this.deltaX=0,this.deltaY=0,this.isMoved=!1,this.targetTypeName=null,this.targetUsage=null,this.targetObject=null},i.baseZIndex=0,i.setBaseZIndex=function(e){i.baseZIndex=e},i.getBaseZIndex=function(){return i.baseZIndex},i.canvasElement=document.createElement(p.CANVAS.HTML_ELEMENT),i.canvasElement.style.zIndex=2e3,i.canvasElement.id=i.id,i.canvasElement.style.boxSizing="border-box",i.canvasElement.style.position="absolute",i.canvasElement.style.left=parseInt(r)+"px",i.canvasElement.style.top=parseInt(n)+"px",i.canvasElement.style.width=parseInt(o)+p.CANVAS.WIDTH_ADJUST_20180722+"px",i.canvasElement.style.height=parseInt(a)+p.CANVAS.HEIGHT_ADJUST_20180722+"px",i.canvasElement.style.backgroundColor="transparent",i.canvasElement.style.borderStyle="none",i.canvasElement.style.margin="0px",i.canvasElement.style.borderWidth="0px",i.canvasElement.style.borderColor="transparent",i.parentElement.appendChild(i.canvasElement)}function y(e,t,r,n,a,i,l,s){var d=this;y.superConstructor.call(this,e,t,r,n,a,i,l,s),d.anchor=o.LEFT_TOP,d.showTitleBar=s.showTitleBar,d.canvasNetHeight=null,d.canvasNetWidth=null,d.frameHeightAdjust=s.frameHeightAdjust,d.frameComponentMap={},d.canvas=null,d.myCanvasId=null,d.floatingButton=null,d.titleBarClassNameDefault="jsframe-titlebar-default",d.titleBarClassNameFocused="jsframe-titlebar-focused",d.titleBarHeight=s.titleBarHeight,d.titleBarCaption=s.titleBarCaption,d.titleBarCaptionLeftMargin=s.titleBarCaptionLeftMargin,d.titleBarCaptionFontSize=s.titleBarCaptionFontSize,d.titleBarCaptionFontWeight=s.titleBarCaptionFontWeight,d.titleBarBorderBottomDefault=s.titleBarBorderBottomDefault,d.titleBarBorderBottomFocused=s.titleBarBorderBottomFocused,d.titleBarCaptionTextShadow=s.titleBarCaptionTextShadow,d.titleBarCaptionTextAlign=s.titleBarCaptionTextAlign,d.titleAdjustWidth=2,d.windowId=e,d.exBorderWidth=0,d.myCanvasId=e+"_canvas";var u=document.createElement("img");if(u.src="",u.style.position="absolute",u.style.left="2px",u.style.top="2px",u.style.width="16px",u.style.height="16px",u.style.visibility="hidden",d.titleBar=document.createElement("div"),d.titleBar.className="jsframetitlebar",d.showTitleBar){if(d.titleBar.id=e+"_title",d.titleBar.style.position="absolute",d.titleBar.style.boxSizing="border-box",d.titleBar.style.top="0px",d.titleBar.style.left="0px",d.titleBar.style.width=n-d.titleAdjustWidth+p.CANVAS.WIDTH_ADJUST_20180722+"px",d.titleBar.style.userSelect="none",d.titleBarHeight){var c=0;d.titleBarBorderBottomDefault&&(c=0),d.titleBar.style.height=parseInt(d.titleBarHeight,10)+0+"px"}d.titleBarColorDefault&&(d.titleBar.style.background=d.titleBarColorDefault),d.titleBar.style.zIndex=0,d.titleBar.style.color=d.titleBarCaptionColorDefault,d.titleBar.style.fontSize=d.titleBarCaptionFontSize,d.titleBar.style.fontWeight=d.titleBarCaptionFontWeight,d.titleBar.style.textShadow=d.titleBarCaptionTextShadow,d.titleBar.style.textAlign=d.titleBarCaptionTextAlign,d.titleBar.style.lineHeight=d.titleBar.style.height,d.titleBar.style.borderBottom=d.titleBarBorderBottomDefault,d.titleBar.style.overflow="hidden";var m=document.createTextNode(""),h=document.createElement("span");h.id=d.id+"_titleBarText",null!=d.titleBarCaptionLeftMargin?(h.style.position="absolute",h.style.left=parseInt(d.titleBarCaptionLeftMargin,10)+"px"):(h.style.position="absolute",h.style.left="0px",h.style.right="0px"),h.style.top="0px",h.appendChild(m),d.titleBar.appendChild(h)}d.htmlElement.appendChild(d.titleBar);var b=parseInt(d.titleBarHeight,10)-c,g=parseInt(d.titleAdjustWidth,10);if(d.showTitleBar||(b=0,g=0,c=0),d.canvasNetWidth=n-g,d.canvasNetHeight=a-b-g-1-c+d.frameHeightAdjust,d.htmlElement.style.cursor="move",d.canvas=new f(d.htmlElement,d.myCanvasId,0,b,n-g,a-b-g),d.canvas.enablePullUp=!1,d.canvas.canvasElement.style.backgroundColor=p.CFRAME.CANVAS_ELEMENT_BGCOLOR,d.canvas.canvasElement.style.cursor="default",d.canvas.canvasElement.onmousedown=d.canvasMouseDown,"ontouchstart"in window){d.canvas.canvasElement.ontouchstart=function(e){var t=e.changedTouches[0];d.canvasMouseDown.bind(this)(t)}}d.canvas.canvasElement.parentCFrame=d;var C,B,E,w=parseInt(d.canvas.canvasElement.style.width,10),x=parseInt(d.canvas.canvasElement.style.height,10),A=s.resizeAreaWidth,F=s.resizeAreaHeight,T=s.resizeAreaOffset;s.resizeAreaVisible&&(C="rgba(255, 0, 0, 0.5)",B="rgba(0, 0, 255, 0.5)",E="rgba(0, 255, 0, 0.5)");var I=new v(d.myCanvasId+"_RD",w+T,x+T,A,F,0,"RD",C);I.htmlElement.style.cursor="se-resize",I.htmlElement.argX=0,I.htmlElement.argY=0;var _=new v(d.myCanvasId+"_DD",0,x+T,w+T,F,0,"DD",B);_.htmlElement.style.cursor="n-resize",_.htmlElement.argX=0,_.htmlElement.argY=0;var S=new v(d.myCanvasId+"_RR",w+T,0,A,x+T,0,"RR",E);for(var D in S.htmlElement.style.cursor="w-resize",S.htmlElement.argY=0,S.htmlElement.argX=0,d.canvas.addBean(I),d.canvas.addBean(_),d.canvas.addBean(S),d.removeMarkers=function(){d.canvas.removeBean(I.id),d.canvas.removeBean(_.id),d.canvas.removeBean(S.id),d.htmlElement.style.cursor="default"},d.removeMarkers2=function(){d.canvas.removeBean(I.id),d.canvas.removeBean(_.id),d.canvas.removeBean(S.id)},d.enableMarkers=function(e){e?(I.htmlElement.style.display="flex",_.htmlElement.style.display="flex",S.htmlElement.style.display="flex",I.htmlElement.style.cursor="se-resize",_.htmlElement.style.cursor="n-resize",S.htmlElement.style.cursor="w-resize"):(I.htmlElement.style.display="none",_.htmlElement.style.display="none",S.htmlElement.style.display="none")},s.frameComponents){var M=s.frameComponents[D];M.setFrame(d),"closeButton"==M.id&&(M.htmlElement.onclick=d.close),M.htmlElement.querySelector(".jsframe-child-menu")&&d.eventListenerHelper.addEventListener(M.htmlElement,"click",(function(e){var t=e.target.getAttribute("component-id");if(d.hideFrameComponentChildMenus({exceptFrameComponentId:t}),t){var r=d.getFrameComponentElement(t).querySelector(".jsframe-child-menu");r&&("table"==r.style.display?r.style.display="none":r.style.display="table")}}),{listenerName:"frame-component_child-menu-listener"}),d.addFrameComponent(M)}d.htmlElement.style.backgroundColor="transparent",d.htmlElement.oncontextmenu=this.contextMenu;d.caribValue=0,d.exBorderWidth&&(d.htmlElement.style.borderWidth=d.exBorderWidth+"px"),d.htmlElement.style.width=parseInt(d.htmlElement.style.width,10)-0+"px",d.htmlElement.style.height=parseInt(d.htmlElement.style.height,10)-0+1+"px",d.htmlElement.typeName="cwindow",d.htmlElement.overflow="auto",d.htmlElement.style.boxSizing="content-box",s.frameBorderStyle&&(d.htmlElement.style.borderStyle=s.frameBorderStyle),s.frameBoxShadow&&(d.htmlElement.style.boxShadow=s.frameBoxShadow),parseInt(s.frameBorderWidthDefault,10)>=0&&(d.htmlElement.style.borderWidth=s.frameBorderWidthDefault,d.htmlElement.style.borderColor=s.frameBorderColorDefault),parseInt(s.frameBorderRadius,10)>=0&&(d.htmlElement.style.borderRadius=s.frameBorderRadius),d.onCloseFrameListener=null}function b(e,t,r,o,a,i){var l=t,s=r,d=o,c=a,m=i.zindex,p=this;this.jsFrame=null,this.control=null,this.minFrameWidth=128,this.minWindowHeight=32,this.eventListenerHelper=new u,this.overrayTransparentScreenEnabled=!1,this.overrayTransparentScreenOnResize=!0,this.titleBarColorFocused=i.titleBarColorFocused,this.titleBarColorDefault=i.titleBarColorDefault,this.titleBarCaptionColorDefault=i.titleBarCaptionColorDefault,this.titleBarCaptionColorFocused=i.titleBarCaptionColorFocused,b.superConstructor.call(p,e,l,s,d,c,m,null,i),p.frameBorderColorDefault=i.frameBorderColorDefault,p.frameBorderColorFocused=i.frameBorderColorFocused,p.frameBorderWidthDefault=i.frameBorderWidthDefault,p.frameBorderWidthFocused=i.frameBorderWidthFocused,p.iframe=null,p.ifDelta=0,p.resizable=!0,p.onMouseMoveOnIframe=null,p.onMouseUpOnIframe=null,p._hasFocus=!1,p._hasFocusTime=0,p.htmlElement.typeName="cifwindow";var h="riversun_"+e;p.dframe=document.createElement("div"),p.iframe=document.createElement("iframe"),p.iframe.name=h,p.iframe.id=h,p.iframe.frameBorder="0",p.iframe.zIndex=-1,p.iframe.allowTransparency="true",p.iframe.width=p.canvasNetWidth-p.ifDelta+0,p.iframe.height=p.canvasNetHeight-p.ifDelta+0,p.showTitleBar=i.showTitleBar,p.getFrameInnerBorderRadius=i.getFrameInnerBorderRadius,p.frameBorderRadius=i.frameBorderRadius,p.adjustFrameBorderRadius(),p.useIframe=!1,p.canvas.canvasElement.appendChild(p.iframe),p.canvas.canvasElement.appendChild(p.dframe),this.setUseIframe=function(e){p.useIframe=e,p.iframe.style.visibility="hidden",p.iframe.style.position="absolute",p.iframe.style.left="0px",p.iframe.style.top="0px",p.iframe.style.width="100%",p.iframe.style.height="100%",p.dframe.style.visibility="hidden",p.dframe.style.position="absolute",p.dframe.style.left="0px",p.dframe.style.boxSizing="content-box",p.dframe.style.top="0px",p.dframe.style.width="100%",p.dframe.style.height="100%",p.dframe.style.backgroundColor="white",e?(p.iframe.style.visibility="visible",p.dframe.style.visibility="hidden"):(p.iframe.style.visibility="hidden",p.dframe.style.visibility="visible")},p.setUseIframe(i.useIframe),(p.overrayTransparentScreenEnabled||p.overrayTransparentScreenOnResize)&&(p.transparence=document.createElement("span"),p.transparence.style.position="absolute",p.transparence.style.left="0px",p.transparence.style.top="0px",p.transparence.style.width="0px",p.transparence.style.height="0px",p.transparence.style.zIndex=4,p.transparence.style.borderWidth="0px",p.transparence.style.borderColor="#ff00ee",p.transparence.style.borderStyle="none",p.transparence.style.cursor="default",p.transparence.style.pointerEvents="none",p.canvas.canvasElement.style.backgroundColor=i.frameBackgroundColor,p.canvas.canvasElement.appendChild(p.transparence)),p.eventEmitter=new n,p.appearance=i}function g(e,t,r,n,o,a){g.superConstructor.call(this,e,t,r,n,o,a);var i=this;document.addEventListener("click",(function(e){for(var t in i.beanList){i.beanList[t].onBodyClicked(e)}}))}function v(e,t,r,n,o,a,i,l){var s=this;v.superConstructor.call(this,e,t,r,n,o,a,i),s.htmlElement.typeName="cmarkerwindow",s.htmlElement.usage=i,s.htmlElement.isRangeLimited=!1,s.htmlElement.style.borderStyle="none",s.htmlElement.style.zIndex=1,l&&(s.htmlElement.style.background=l),s.getWindowType=function(){return"CMarkerWindow"}}function C(e){var t,r=this,n=null;(r.isWindowManagerFixed=!0,e&&0==e.fixed&&(r.isWindowManagerFixed=!1),e&&e.parentElement&&(n=e.parentElement),r.hAlign="left",r.vAlign="top",e&&e.horizontalAlign&&(r.hAlign=e.horizontalAlign),e&&e.verticalAlign&&(r.vAlign=e.verticalAlign),r.pullToRefresh=!1,e&&"boolean"==typeof e.pullToRefresh&&(r.pullToRefresh=e.pullToRefresh),r.touchActionManipulation=!0,e&&"boolean"==typeof e.touchActionManipulation&&(r.touchActionManipulation=e.touchActionManipulation),n)?r.isWindowManagerFixed?((t=document.createElement("div")).id="jsFrame_fixed_"+r.generateUUID(),t.setAttribute("style","position:fixed;"+r.hAlign+":0px;"+r.vAlign+":0px;margin:0px;padding:0px;"),n.appendChild(t)):((t=document.createElement("div")).id="jsFrame_absolute_"+r.generateUUID(),t.setAttribute("style","position:absolute;"+r.hAlign+":0px;"+r.vAlign+":0px;margin:0px;padding:0px;"),n.appendChild(t)):r.isWindowManagerFixed?((t=document.createElement("div")).id="jsFrame_fixed_"+r.generateUUID(),t.setAttribute("style","position:fixed;"+r.hAlign+":0px;"+r.vAlign+":0px;margin:0px;padding:0px;"),document.body.appendChild(t),n=t):((t=document.createElement("div")).id="jsFrame_absolute_"+r.generateUUID(),t.setAttribute("style","position:absolute;"+r.hAlign+":0px;"+r.vAlign+":0px;margin:0px;padding:0px;"),document.body.appendChild(t),n=t);if(document.addEventListener("mouseup",o),document.addEventListener("mousemove",a),"ontouchend"in window){document.addEventListener("touchend",(function(e){o.bind(this)(e)}))}if("ontouchmove"in window){r.touchActionManipulation&&r.doEnableTouchActionManipulation(),r.pullToRefresh||r.doDisablePullToRefresh();document.addEventListener("touchmove",(function(e){e.preventDefault(),a.bind(this)(e)}))}function o(e){r.windowManager.windowMouseUp(e)}function a(e){r.windowManager.windowMouseMove(e)}r.windowManager=new g(n,"windowManager_"+r.generateUUID(),0,0,0,0),r.domPartsBuilder=null}p.CBEAN={},p.CBEAN.HTML_ELEMENT="span",p.CBEAN.HTML_ELEMENT_ID_PREFIX="htmlElement_",p.CBEAN.TYPE_NAME="bean",h.prototype.getWindowType=function(){return"CBeanFrame"},h.prototype.setOnMoveListener=function(e){this.onMoveListener=e},h.prototype._onMove=function(e){this.onMoveListener&&this.onMoveListener(e)},h.prototype.setMovable=function(e){var t=this;return e?(t.htmlElement.argX=1,t.htmlElement.argY=1):(t.htmlElement.argX=0,t.htmlElement.argY=0),t.movable=e,t},h.prototype.setParentCanvas=function(e){return this.parentCanvas=e,this.htmlElement.parentCanvas=this.parentCanvas,this},h.prototype.setOnExternalAreaClickedListener=function(e){return this.externalAreaClickedListener=e,this},h.prototype.onBodyClicked=function(e){var t=this,r=e.pageX,n=e.pageY,o=parseInt(t.htmlElement.style.left),a=parseInt(t.htmlElement.style.top),i=parseInt(t.htmlElement.style.width),l=parseInt(t.htmlElement.style.height);o<r&&r<o+i&&a<n&&n<a+l||t.externalAreaClickedListener&&t.externalAreaClickedListener()},h.prototype.onmouseDown=function(e){var t=e;if("touchstart"===e.type){var r=e.changedTouches;if(1!==e.touches.length)return!0;t=r[0]}var n=this.parent;if(0==t.button||"touchstart"===e.type){if(n.pullUpDisabled)return!1;this.parentCanvas.currentObject=this,this.parentCanvas.pullUp(n.id)}else if(2==t.button)return!1;return this.parentCanvas.currentObject&&(this.parentCanvas.offsetX=t.pageX-parseInt(this.parentCanvas.currentObject.style.left,10),this.parentCanvas.offsetY=t.pageY-parseInt(this.parentCanvas.currentObject.style.top,10)),!1},p.CANVAS={},p.CANVAS.HTML_ELEMENT="div",p.CANVAS.WIDTH_ADJUST_20180722=2,p.CANVAS.HEIGHT_ADJUST_20180722=3,f.prototype.mouseMove=function(e){var t=this,r=e;if("touchmove"===e.type){var n=e.changedTouches;if(1!==e.touches.length)return!0;r=n[0]}if(t.currentObject){t.eventData.targetTypeName=t.currentObject.typeName,t.eventData.targetUsage=t.currentObject.usage,t.eventData.targetObject=t.currentObject;var o=r.pageX-t.offsetX,a=r.pageY-t.offsetY,i=(r.pageX,r.pageY,t.currentObject.style.left),l=t.currentObject.style.top,s=parseInt(o,10),d=parseInt(a,10),u=s+parseInt(t.currentObject.style.width,10),c=d+parseInt(t.currentObject.style.height,10),m=parseInt(t.canvasElement.style.width,10),p=parseInt(t.canvasElement.style.height,10),h=0,f=0;if(1==t.currentObject.isRangeLimited&&(s<=0||u>m||d<=0||c>p))h=0,f=0;else{h=parseInt(o,10)-parseInt(i,10),f=parseInt(a,10)-parseInt(l,10),t.currentObject.style.left=parseInt(t.currentObject.style.left)+h*t.currentObject.argX+"px",t.currentObject.style.top=parseInt(t.currentObject.style.top)+f*t.currentObject.argY+"px";var y=t.currentObject.parent;y&&y._onMove&&y._onMove()}return t.eventData.deltaX=h,t.eventData.deltaY=f,t.eventData}return null},f.prototype.mouseUp=function(e){this.currentObject=null,this.mouseDownSource=null},f.prototype.pullUp=function(e){var t=this,r=[],n=t.beanList;for(var o in n)r.push(n[o]);var a=n[e];t.enablePullUp&&t.pullUpSort(a,r,t.baseZIndex),t.onTopObject=a},f.prototype.pullUpSort=function(e,t,r){for(var n in e.htmlElement.style.zIndex=t.length+r,t.sort((function(e,t){return-parseInt(e.htmlElement.style.zIndex,10)+parseInt(t.htmlElement.style.zIndex,10)})),t)t[n].htmlElement.style.zIndex=t.length-1-n+r},f.prototype.removeBean=function(e){var t=this.beanList,r=t[e];this.canvasElement.removeChild(r.htmlElement),delete t[e]},f.prototype.addBean=function(e){var t=this,r=t.beanList,n=t.beanIdName,o=t.beanNameId;r[e.id]=e,e.property.name&&(o[e.property.name]=e.id,n[e.id]=e.property.name);var a=0;for(var i in r)a++;e.htmlElement.style.zIndex=a+t.baseZIndex,e.setParentCanvas(t),this.canvasElement.appendChild(e.htmlElement)},f.prototype.getParentElement=function(){return this.parentElement},p.CFRAME={},p.CFRAME.CANVAS_ELEMENT_BGCOLOR="transparent",p.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX="window__modal_window_background_",i(y,h),y.prototype.setTitleBarClassName=function(e,t){return e&&(this.titleBarClassNameDefault=e,this.titleBarClassNameFocused=e),t&&(this.titleBarClassNameFocused=t),this},y.prototype.addFrameComponent=function(e){return this.frameComponentMap[e.id]=e,this.canvas.canvasElement.appendChild(e.htmlElement),this},y.prototype.getFrameComponentElement=function(e){return this.frameComponentMap[e]?this.frameComponentMap[e].htmlElement:null},y.prototype.removeFrameComponentById=function(e){var t=this.frameComponentMap[e];this.canvas.canvasElement.removeChild(t.htmlElement),delete this.frameComponentMap[e]},y.prototype.showFrameComponent=function(e,t){var r=this.getFrameComponentElement(e);return r&&(r.style.display=t||"flex"),this},y.prototype.hideFrameComponent=function(e){var t=this.getFrameComponentElement(e);return t&&(t.style.display="none"),this},y.prototype.hideAllVisibleFrameComponents=function(){var e=this.frameComponentMap;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t].htmlElement;"none"===r.style.display&&(r._alreadyNone=!0),r.style.display="none"}},y.prototype.showAllVisibleFrameComponents=function(){var e=this.frameComponentMap;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t].htmlElement;r._alreadyNone?r._alreadyNone=null:r.style.display="flex"}},y.prototype.hideFrameComponentChildMenus=function(e){var t=this.frameComponentMap;for(var r in t)if(t.hasOwnProperty(r)){if(e&&e.exceptFrameComponentId&&r===e.exceptFrameComponentId)continue;var n=t[r];n.childMenu&&(n.childMenu.style.display="none")}},y.prototype.setTitle=function(e){var t=this;if(t.title=e,t.showTitleBar){var r=document.createTextNode(e);t.titleBar.firstChild.replaceChild(r,t.titleBar.firstChild.firstChild)}return t},y.prototype.resize=function(e,t,r,n){var o=this,a=parseInt(o.htmlElement.style.left,10),i=parseInt(o.htmlElement.style.top,10),l=parseInt(o.htmlElement.style.width,10),s=parseInt(o.htmlElement.style.height,10);o.htmlElement.style.left=parseInt(a+e,10)+"px",o.htmlElement.style.top=parseInt(i+t,10)+"px",o.htmlElement.style.width=parseInt(l+r,10)+"px",o.htmlElement.style.height=parseInt(s+n,10)+"px";var d=parseInt(o.canvas.canvasElement.style.width,10),u=parseInt(o.canvas.canvasElement.style.height,10);for(var c in o.canvas.canvasElement.style.width=d+r+"px",o.canvas.canvasElement.style.height=u+n+"px",o.showTitleBar&&(o.titleBar.style.width=d+r+"px"),o.canvas.beanList){var m=o.canvas.beanList[c];"cmarkerwindow"==m.htmlElement.typeName&&("RD"==m.htmlElement.usage?(m.htmlElement.style.left=parseInt(m.htmlElement.style.left,10)+r+"px",m.htmlElement.style.top=parseInt(m.htmlElement.style.top,10)+n+"px"):"DD"==m.htmlElement.usage?(m.htmlElement.style.width=parseInt(m.htmlElement.style.width,10)+r+"px",m.htmlElement.style.top=parseInt(m.htmlElement.style.top,10)+n+"px"):"RR"==m.htmlElement.usage&&(m.htmlElement.style.left=parseInt(m.htmlElement.style.left,10)+r+"px",m.htmlElement.style.height=parseInt(m.htmlElement.style.height,10)+n+"px"))}},y.prototype.canvasMouseDown=function(e){null==this.parentCFrame.parentCanvas.mouseDownSource&&(this.parentCFrame.parentCanvas.mouseDownSource="childcanvas")},y.prototype.mouseUp=function(e){this.canvas.mouseUp(e)},y.prototype.close=function(e){var t=this.parentObject.parentCanvas,r=this.parentObject,n=r.id;r.closeInternally(e,t,n)},y.prototype.closeFrame=function(e){var t=this.parentCanvas;this.closeInternally(e,t,this.windowId)},y.prototype.closeInternally=function(e,t,r){var n=this;t&&(t.removeBean(r),n.modalBackgroundWindowId&&(t.removeBean(n.modalBackgroundWindowId),n.modalBackgroundWindowId=null),n.onCloseFrameListener&&n.onCloseFrameListener(n))},y.prototype.setOnCloseFrameListener=function(e){this.onCloseFrameListener=e},y.prototype.contextMenu=function(){return!1},y.prototype.setTitleBarTextColor=function(e){this.titleBar.style.color=e},y.prototype.setPosition=function(e,t,r){var n=this.getWidth(),o=this.getHeight();return this._setPositionInternally(e,t,r,n,o),this},y.prototype._setPositionInternally=function(e,t,r,n,a){var i=this;r&&(i.anchor=r),r&&o.LEFT_TOP!=r?o.HCENTER_TOP==r?(i.htmlElement.style.left=-n/2+e+"px",i.htmlElement.style.top=t+"px"):o.RIGHT_TOP==r?(i.htmlElement.style.left=-n+e+"px",i.htmlElement.style.top=t+"px"):o.LEFT_VCENTER==r?(i.htmlElement.style.left=e+"px",i.htmlElement.style.top=-a/2+t+"px"):o.HCENTER_VCENTER==r?(i.htmlElement.style.left=-n/2+e+"px",i.htmlElement.style.top=-a/2+t+"px"):o.RIGHT_VCENTER==r?(i.htmlElement.style.left=-n+e+"px",i.htmlElement.style.top=-a/2+t+"px"):o.LEFT_BOTTOM==r?(i.htmlElement.style.left=e+"px",i.htmlElement.style.top=-a+t+"px"):o.HCENTER_BOTTOM==r?(i.htmlElement.style.left=-n/2+e+"px",i.htmlElement.style.top=-a+t+"px"):o.RIGHT_BOTTOM==r&&(i.htmlElement.style.left=-n+e+"px",i.htmlElement.style.top=-a+t+"px"):(i.htmlElement.style.left=e+"px",i.htmlElement.style.top=t+"px")},y.prototype.getPosition=function(){var e,t,r=this,n=r.getWidth(),a=r.getHeight(),i=r.anchor;return i&&o.LEFT_TOP!=i?o.HCENTER_TOP==i?(e=parseInt(r.htmlElement.style.left,10)+n/2,t=parseInt(r.htmlElement.style.top,10)):o.RIGHT_TOP==i?(e=parseInt(r.htmlElement.style.left,10)+n,t=parseInt(r.htmlElement.style.top,10)):o.LEFT_VCENTER==i?(e=parseInt(r.htmlElement.style.left,10),t=parseInt(r.htmlElement.style.top,10)+a/2):o.HCENTER_VCENTER==i?(e=parseInt(r.htmlElement.style.left,10)+n/2,t=parseInt(r.htmlElement.style.top,10)+a/2):o.RIGHT_VCENTER==i?(e=parseInt(r.htmlElement.style.left,10)+n,t=parseInt(r.htmlElement.style.top,10)+a/2):o.LEFT_BOTTOM==i?(e=parseInt(r.htmlElement.style.left,10),t=parseInt(r.htmlElement.style.top,10)+a):o.HCENTER_BOTTOM==i?(e=parseInt(r.htmlElement.style.left,10)+n/2,t=parseInt(r.htmlElement.style.top,10)+a):o.RIGHT_BOTTOM==i&&(e=parseInt(r.htmlElement.style.left,10)+n,t=parseInt(r.htmlElement.style.top,10)+a):(e=parseInt(r.htmlElement.style.left,10),t=parseInt(r.htmlElement.style.top,10)),{x:e,y:t,anchor:i}},y.prototype.getLeft=function(){return parseInt(this.htmlElement.style.left,10)},y.prototype.getTop=function(){return parseInt(this.htmlElement.style.top,10)},y.prototype.getWidth=function(){return parseInt(this.htmlElement.style.width,10)},y.prototype.getHeight=function(){return parseInt(this.htmlElement.style.height,10)},y.prototype.getSize=function(){return{width:this.getWidth(),height:this.getHeight()}},y.prototype.setSize=function(e,t,r){var n=!0;return r&&(n=!1),this.resize(0,0,e-this.getWidth(),t-this.getHeight(),n),this},y.prototype.getWindowId=function(){return this.windowId},y.prototype.getName=function(){return this.property.name},y.prototype.setName=function(e){this.property.name=e},i(b,y),b.prototype.getFrameView=function(){return this.dframe},b.prototype.getFrameAppearance=function(){return this.appearance},b.prototype.setHTML=function(e){this.dframe.innerHTML=e},b.prototype.setFrameInFrame=function(e){var t=this.dframe?this.dframe.firstChild:null;t&&(Date.now||(Date.now=function(){return(new Date).getTime()}),e?this.eventEmitter.only("resize","fif-listener",(function(){t.setAttribute(a.MATCH_PARENT_CHANGE_MARKER_ATTR,Date.now())})):(t.removeAttribute(a.MATCH_PARENT_CHANGE_MARKER_ATTR),this.eventEmitter.only("resize","fif-listener",(function(){}))))},b.prototype.$=function(e){return this.useIframe?this.iframe.contentWindow.document.querySelector(e):this.dframe.querySelector(e)},b.prototype.on=function(e,t,r){var n=this,o=n.getFrameComponentElement(e);o&&n.eventListenerHelper.addEventListener(o,t,(function(o){r(n,o,{type:"frameComponent",id:e,eventType:t})}),{listenerName:"frame-component-listener"}),"frame"!==e&&"window"!==e||("move"!==t||n.eventEmitter.hasListenerFuncs("move")||n.setOnMoveListener((function(e){n.eventEmitter.emit("move",n._getCurrentSizePos())})),n.eventEmitter.on(t,r));var a=n.$(e);if(a&&(n.eventListenerHelper.hasEventListener(a,t,"frame-dom-listener")&&n.eventListenerHelper.removeEventListener(a,t,null,{listenerName:"frame-dom-listener"}),n.eventListenerHelper.addEventListener(a,t,(function(o){r(n,o,{type:"dom",id:e,eventType:t})}),{listenerName:"frame-dom-listener"})),!a){var i=n.canvas.canvasElement.querySelector(e);i&&i.addEventListener(t,(function(o){r(n,o,{type:"dom",id:e,eventType:t})}))}},b.prototype.adjustFrameBorderRadius=function(){var e=this;if(parseInt(e.frameBorderRadius,10)>0){var t=e.getFrameInnerBorderRadius(e,e._hasFocus),r=t.frameAppearance,n=t.innerBorderRadius,o=parseInt(r.titleBarHeight,10);e.showTitleBar?(e.canvas.canvasElement.style.borderBottomRightRadius=n,e.canvas.canvasElement.style.borderBottomLeftRadius=n,e.iframe.style.borderBottomRightRadius=n,e.iframe.style.borderBottomLeftRadius=n,e.titleBar.style.borderTopLeftRadius=n,e.titleBar.style.borderTopRightRadius=n):(e.canvas.canvasElement.style.borderRadius=n,e.iframe.style.borderRadius=n),e.dframe&&(0===o&&(e.dframe.style.borderTopRightRadius||(e.dframe.style.borderTopRightRadius=n),e.dframe.style.borderTopLeftRadius||(e.dframe.style.borderTopLeftRadius=n)),e.dframe.style.borderBottomRightRadius=n,e.dframe.style.borderBottomLeftRadius=n)}},b.prototype.handleReleasingFocus=function(e){var t=this,r=t._hasFocus;for(var n in t._hasFocus=!1,t.titleBar.className=t.titleBarClassNameDefault,t.titleBarColorDefault&&(t.titleBar.style.background=t.titleBarColorDefault),t.titleBar.style.color=t.titleBarCaptionColorDefault,t.frameBorderColorDefault&&(t.htmlElement.style.borderColor=t.frameBorderColorDefault),t.frameBorderWidthDefault&&(t.htmlElement.style.borderWidth=t.frameBorderWidthDefault,t.adjustFrameBorderRadius()),"cifwindow"==t.htmlElement.typeName&&t.overrayTransparentScreenEnabled&&(t.transparence.style.width=parseInt(t.iframe.width,10)+"px",t.transparence.style.height=parseInt(t.iframe.height,10)+"px"),t.frameComponentMap){t.frameComponentMap[n].handleReleasingFocus()}return t.titleBarBorderBottomDefault&&(t.titleBar.style.borderBottom=t.titleBarBorderBottomDefault),r&&t.eventEmitter.emit("blur",{target:t}),t},b.prototype.handleTakingFocus=function(e){var t=this,r=t._hasFocus;for(var n in t._hasFocus=!0,t._hasFocus=Date.now(),t.overrayTransparentScreenEnabled&&(t.transparence.style.width="0px",t.transparence.style.height="0px"),t.titleBar.className=t.titleBarClassNameFocused,t.titleBarColorFocused&&(t.titleBar.style.background=t.titleBarColorFocused),t.titleBar.style.color=t.titleBarCaptionColorFocused,t.frameBorderColorFocused&&(t.htmlElement.style.borderColor=t.frameBorderColorFocused),t.frameBorderWidthFocused&&(t.htmlElement.style.borderWidth=t.frameBorderWidthFocused,t.adjustFrameBorderRadius()),t.titleBarBorderBottomFocused&&(t.titleBar.style.borderBottom=t.titleBarBorderBottomFocused),t.frameComponentMap){t.frameComponentMap[n].handleTakingFocus()}return r||t.eventEmitter.emit("focus",{target:t}),t},y.prototype.show=function(e){return this.htmlElement.style.display="flex",e&&0==e.requestFocus||this.requestFocus(),this},y.prototype.showModal=function(e){var t=this,r=new l;r.showTitleBar=!0,r.showCloseButton=!1,r.frameBorderRadius="0px",r.frameBorderStyle="none",r.frameBorderWidthDefault="0px",r.frameBorderWidthFocused="0px",r.frameBoxShadow=null,r.frameBackgroundColor="transparent",r.frameComponents=[],r.frameHeightAdjust=0,r.titleBarHeight="0px",r.titleBarBorderBottomFocused=null,r.titleBarCaptionLeftMargin="0px",r.onInitialize=function(){},r.pullUpDisabled=!0;var n=t.parentCanvas,o=p.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX+t.id,a=new b(o,0,0,1,1,r);a.setSize(window.innerWidth,window.innerHeight,!0),a.setResizable(!1),window.addEventListener("resize",(function(){a.setSize(window.innerWidth,window.innerHeight,!0)})),t.modalBackgroundWindowId=o,a.hide(),n.addWindow(a),a.setTitle("").getFrameView().innerHTML='<div class="jsframe-modal-window-background"></div>',a.getFrameView().style.backgroundColor="rgba(0,0,0,0.0)",a.show(),t.show(),e&&t.setOnCloseFrameListener(e)},y.prototype.getWindowManager=function(){return this.parentCanvas},b.prototype.hide=function(){return this.htmlElement.style.display="none",this},b.prototype.onmouseDown=function(e){document.body.ondrag=function(){return!1},this.decorator=y.prototype.onmouseDown,this.decorator(e);var t=this.parent,r=this.parentCanvas;for(var n in r.beanList){var o=r.beanList[n];n==t.getWindowId()||o.handleReleasingFocus()}t.handleTakingFocus()},b.prototype.mouseUp=function(e){(this.overrayTransparentScreenEnabled||this.overrayTransparentScreenOnResize)&&(this.parentCanvas.onTopObject==this?(this.transparence.style.width="0px",this.transparence.style.height="0px"):this.overrayTransparentScreenEnabled&&(this.transparence.style.width=parseInt(this.iframe.width)+"px",this.transparence.style.height=parseInt(this.iframe.height)+"px")),this.decorator=y.prototype.mouseUp,this.decorator(e),document.body.ondrag=null,document.body.onselectstart=null,this.transparence.style.pointerEvents="none"},b.prototype.setMinFrameSize=function(e,t){this.minFrameWidth=e,this.minWindowHeight=t},b.prototype.resize=function(e,t,r,n,o){if(!this.resizable&&o)return null;var a=this.getSize(),i=parseInt(this.htmlElement.style.left,10),l=parseInt(this.htmlElement.style.top,10),s=parseInt(this.htmlElement.style.width,10),d=parseInt(this.htmlElement.style.height,10);o&&s+r<this.minFrameWidth&r<0&&(this.htmlElement.style.width=s+"px",r=0),o&&d+n<this.minWindowHeight&n<0&&(this.htmlElement.style.height=d+"px",n=0),this.htmlElement.style.left=i+e+"px",this.htmlElement.style.top=l+t+"px",this.htmlElement.style.width=s+r+"px",this.htmlElement.style.height=d+n+"px";var u=parseInt(this.canvas.canvasElement.style.width,10),c=parseInt(this.canvas.canvasElement.style.height,10);for(var m in this.canvas.canvasElement.style.width=u+r+"px",this.canvas.canvasElement.style.height=c+n+"px",this.titleBar.style.width=u-this.ifDelta+r+0+"px",this.iframe.width=u-this.ifDelta+r+0+"px",this.iframe.height=c-this.ifDelta+n+this.frameHeightAdjust+"px",(this.overrayTransparentScreenEnabled||this.overrayTransparentScreenOnResize)&&(this.transparence.style.width=parseInt(this.iframe.width)+"px",this.transparence.style.height=parseInt(this.iframe.height)+"px"),this.frameComponentMap){this.frameComponentMap[m].updateAlign()}for(var p in this.canvas.beanList){var h=this.canvas.beanList[p];"cmarkerwindow"==h.htmlElement.typeName&&("RD"==h.htmlElement.usage?(h.htmlElement.style.left=parseInt(h.htmlElement.style.left)+r+"px",h.htmlElement.style.top=parseInt(h.htmlElement.style.top)+n+"px"):"DD"==h.htmlElement.usage?(h.htmlElement.style.width=parseInt(h.htmlElement.style.width)+r+"px",h.htmlElement.style.top=parseInt(h.htmlElement.style.top)+n+"px"):"RR"==h.htmlElement.usage&&(h.htmlElement.style.left=parseInt(h.htmlElement.style.left)+r+"px",h.htmlElement.style.height=parseInt(h.htmlElement.style.height)+n+"px"))}var f=this.getSize();a.width===f.width&&a.height===f.height||this.eventEmitter.emit("resize",this._getCurrentSizePos())},b.prototype._getCurrentSizePos=function(){var e=this.getSize();return{target:this,pos:this.getPosition(),size:e}},b.prototype.resizeDirect=function(e,t,r){if(!this.resizable&&r)return null;this.htmlElement.style.width=e+"px",this.htmlElement.style.height=t+"px";parseInt(this.canvas.canvasElement.style.width),parseInt(this.canvas.canvasElement.style.height);for(var n in this.canvas.canvasElement.style.width=e+"px",this.canvas.canvasElement.style.height=t-this.titleBar.style.height+"px",this.titleBar.style.width=e-this.ifDelta+"px",this.iframe.width=e-this.ifDelta+"px",this.iframe.height=t-this.ifDelta+this.frameHeightAdjust+"px",(this.overrayTransparentScreenEnabled||this.overrayTransparentScreenOnResize)&&(this.transparence.style.width=parseInt(this.iframe.width)+"px",this.transparence.style.height=parseInt(this.iframe.height)+"px"),this.frameComponentMap){this.frameComponentMap[n].updateAlign()}for(var o in this.canvas.beanList){var a=this.canvas.beanList[o];"cmarkerwindow"==a.htmlElement.typeName&&("RD"==a.htmlElement.usage?(a.htmlElement.style.left=e+"px",a.htmlElement.style.top=t+"px"):"DD"==a.htmlElement.usage?(a.htmlElement.style.width=e+"px",a.htmlElement.style.top=t+"px"):"RR"==a.htmlElement.usage&&(a.htmlElement.style.left=e+"px",a.htmlElement.style.height=t+"px"))}},b.prototype.requestFocus=function(){var e=this.parentCanvas.beanList;for(var t in e){var r=e[t];t==this.getWindowId()?r.handleTakingFocus():r.handleReleasingFocus()}this.parentCanvas.pullUp(this.id)},b.prototype.setUrl=function(e){var t=this;return new Promise((function(r,n){e?t.setUseIframe(!0):(t.setUseIframe(!1),r()),t.iframe.src=e,t.iframe.onload=function(){var e=function(e){var r=e.pageX,n=e.pageY;if("touchmove"===e.type){var o=e.changedTouches;if(1!==e.touches.length)return!0;r=o[0].pageX,n=o[0].pageY}var a=t.getLeft(),i=t.getTop(),l=document.createEvent("MouseEvents");l.initMouseEvent("mousemove",!0,!1,window,e.detail,e.screenX,e.screenY,r+a,n+i,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,null),t.parentCanvas.windowMouseMove(l),t.onMouseMoveOnIframe&&t.onMouseMoveOnIframe(l)};t.iframe.contentWindow.document.onmousemove=e,t.iframe.contentWindow.document.ontouchmove=e;var n=function(e){var r=e.pageX,n=e.pageY;if("touchend"===e.type){var o=e.changedTouches;r=o[0].pageX,n=o[0].pageY}var a=t.getLeft(),i=t.getTop(),l=document.createEvent("MouseEvents");l.initMouseEvent("mouseup",!0,!1,window,e.detail,e.screenX,e.screenY,r+a,n+i,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,null),t.parentCanvas.windowMouseUp(l),t.onMouseUpOnIframe&&t.onMouseUpOnIframe(l)};t.iframe.contentWindow.document.onmouseup=n,t.iframe.contentWindow.document.ontouchend=n,r(t,t.iframe.contentWindow.document)}}))},b.prototype.getIfDocument=function(){return this.iframe.contentWindow.document},b.prototype.setScrolling=function(e){this.iframe.scrolling=e},b.prototype.getScrolling=function(e){return this.iframe.scrolling},b.prototype.setResizable=function(e){return this.resizable=e,this.enableMarkers(e),this},b.prototype.setControl=function(e){e&&(e.frame=this,this.control=this.jsFrame.createWindowEventHelper(e),this.control.setupDefaultEvents())},i(g,f),g.prototype.getWindow=function(e){return this.beanList[e]},g.prototype.addWindow=function(e){var t=e.getWindowId(),r=e.getName();this.beanIdName[t]=r,this.beanNameId[r]=t,this.addBean(e)},g.prototype.containsWindowName=function(e){return!!this.beanNameId[e]},g.prototype.getWindowByName=function(e){var t=this.beanNameId[e];return t?this.getWindow(t):null},g.prototype.windowMouseMove=function(e){if(null==this.currentObject)return null;var t=!1,r=this.beanList;for(var n in r){var o=r[n],a=o.canvas.mouseMove(e);if(t|=null!=a,null!=a&&"cmarkerwindow"==a.targetTypeName){var i=a.targetObject;o.transparence.style.pointerEvents="auto","RD"==i.usage?o.resize(0,0,a.deltaX,a.deltaY,!0):"DD"==i.usage?o.resize(0,0,0,a.deltaY,!0):"RR"==i.usage&&o.resize(0,0,a.deltaX,0,!0)}}t||"childcanvas"==this.mouseDownSource||this.mouseMove(e)},g.prototype.windowMouseUp=function(e){this.mouseUp(e);var t=this.beanList;for(var r in t){t[r].mouseUp(e)}},g.prototype.removeBean=function(e){var t=this,r=t.beanList,n=r[e];if(null!=n){var o=n._hasFocus;t.canvasElement.removeChild(n.htmlElement),delete r[e];var a=t.beanIdName[e];a&&(delete t.beanIdName[e],delete t.beanNameId[a]);var i=0,l=null;if(o){for(var e in r){var s=r[e];i<=s._hasFocusTime&&!s.pullUpDisabled&&(i=s._hasFocusTime,l=s)}l&&l.requestFocus()}n.parentCanvas=null}},i(v,h),C.prototype.doEnableTouchActionManipulation=function(){var e=document.documentElement.getAttribute("style");e?e.endsWith(";")||(e+=";"):e="",-1===e.indexOf("touch-action")&&(e+="-ms-touch-action: manipulation;touch-action: manipulation;",document.documentElement.setAttribute("style",e))},C.prototype.doDisablePullToRefresh=function(){var e=document.body.getAttribute("style");e?e.endsWith(";")||(e+=";"):e="",-1===e.indexOf("overscroll-behavior-y")&&(e+="overscroll-behavior-y: contain;",document.body.setAttribute("style",e))},C.prototype.getDomPartsBuilder=function(){return this.domPartsBuilder||(this.domPartsBuilder=new s),this.domPartsBuilder},C.prototype.create=function(e){var t={};t.name=e.name;var r,n=e.title,o=e.left,a=e.top,i=e.width,l=e.height,s=e.appearance,d=e.preset,u=(e.presetParam,e.appearanceName),c=e.appearanceParam,m=e.style,p=e.minWidth,h=e.minHeight,f=e.html,y=e.resizable,b=e.movable,g=e.url,v=e.urlLoaded,C=e.presetParam;d?(r=this.getPresetWindow(d).getPresetWindow(C),s=this.createPresetStyle(r.appearanceName,{appearanceParam:r.appearanceParam})):u&&(s=this.createPresetStyle(u,{appearanceParam:c}));if(e.clientHeight){var B=parseInt(s.titleBarHeight||0)-s.frameHeightAdjust;l=e.clientHeight+B}var E=this.createFrame(o,a,i,l,s,t);if(n&&E.setTitle(n),f&&E.setHTML(f),g){var w=E.setUrl(g);v&&w.then(v)}if(0==y&&E.setResizable(!1),0==b&&E.setMovable(!1),p&&h&&(E.minFrameWidth=p),h&&(E.minWindowHeight=h,e.clientHeight&&(E.minWindowHeight=h+B)),m){var x=E.getFrameView();for(var A in m)m.hasOwnProperty(A)&&(x.style[A]=m[A])}return r&&r.setupPresetWindow(E),E},C.prototype.createFrame=function(e,t,r,n,o,a){o||(o=this.createFrameAppearance()),o.initialize(),e||(e=0),t||(t=0),r||(r=128),n||(n=128);var i=new b("window_"+this.generateUUID(),e,t,r,n,o);if(i.jsFrame=this,a&&a.name&&i.setName(a.name),i.hide(),this.windowManager.addWindow(i),o.getTitleBarStyle){var l=o.getTitleBarStyle();l&&i.setTitleBarClassName(l.titleBarClassNameDefault,l.titleBarClassNameFocused)}else o.titleBarClassNameDefault&&o.titleBarClassNameFocused?i.setTitleBarClassName(o.titleBarClassNameDefault,o.titleBarClassNameFocused):o.titleBarClassNameDefault&&i.setTitleBarClassName(o.titleBarClassNameDefault,o.titleBarClassNameDefault);return i},C.prototype.containsWindowName=function(e){return this.windowManager.containsWindowName(e)},C.prototype.getWindowByName=function(e){return this.windowManager.getWindowByName(e)},C.prototype.generateUUID=function(){var e=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:3&r|8).toString(16)}))},C.prototype.createFrameAppearance=function(){return new l},C.prototype.createAnimator=function(){return new d},C.prototype.createWindowEventHelper=function(e){return e||(e={}),e.verticalAlign=this.vAlign,e.horizontalAlign=this.hAlign,new a(e)},C.prototype.getPresetWindow=function(e,t){return m[e]?m[e]:null},C.prototype.createPresetStyle=function(e,t){var r=this.createFrameAppearance();if(t&&t.focusedFrameOnly&&(r.focusedFrameOnly=t.focusedFrameOnly),c[e]){var n=c[e],o=null;return t&&t.appearanceParam&&(o=t.appearanceParam),n.getStyle(r,o)}return r},C.prototype.showToast=function(e){if(e){var t=this,r=60,n=260,o=1e3,a=window.innerHeight-10-r/2,i=window.innerHeight-20-r/2,l="",s=!1,d={borderRadius:"10px",background:"rgba(0,0,0,0.8)"};e.style&&(d=e.style),e.height&&(r=e.height),e.width&&(n=e.width),e.duration&&(o=e.duration),e.align&&("top"==e.align?(a=10+r/2,i=20+r/2):"center"==e.align&&(a=window.innerHeight/2,i=window.innerHeight/2)),e.html&&(l=e.html),e.text&&(l=e.text),s=1==e.closeButton;var u=t.createPresetStyle("toast");d.borderRadius&&(u.frameBorderRadius=d.borderRadius),e.closeButtonColor&&(u.captionClor=e.closeButtonColor);var c=t.create({name:"toast_"+t.generateUUID(),width:n,height:r,movable:!1,resizable:!1,appearance:u,style:d,html:'<div id="my_element" style="box-sizing:border-box;display: flex;justify-content: center;align-items: center;padding:10px;font-size:16px;color:darkgray;height:'+r+'px">'+l+"</div>"});s||c.hideFrameComponent("closeButton");var m=window.innerWidth/2;"right"==t.hAlign&&(m=-m),"bottom"==t.vAlign&&(a-=window.innerHeight,i-=window.innerHeight),t.createAnimator().set(c).setDuration(300).fromPosition(m,a,"CENTER_CENTER").toPosition(m,i,"CENTER_CENTER").toAlpha(1).fromAlpha(0).start(0,!1).then((function(e){return e.setDuration(300).fromPosition(m,i,"CENTER_CENTER").toPosition(m,a,"CENTER_CENTER").fromAlpha(1).toAlpha(.5).start(o,!1)})).then((function(e){e.get().closeFrame()}))}},Object.freeze(p),e.exports=C},function(e,t,r){var n=r(0),o=r(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(1)(!1)).push([e.i,".jsframe-titlebar-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-titlebar-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-modal-window-background {\n    background: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    widdth: 100%\n}",""]),e.exports=t},function(e,t,r){
/*! event-emitter(https://github.com/riversun/event-emitter) v1.2.1 Copyright (c) 2020 riversun.org@gmail.com */
e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}r.r(t),r.d(t,"default",(function(){return s})),r.d(t,"EventListenerList",(function(){return d})),r.d(t,"EventListenerMap",(function(){return u}));var s=function(){function e(t){if(a(this,e),this.onListeners=new Map,this.onlyListeners=new Map,t){var r,o=n(t);try{for(o.s();!(r=o.n()).done;){var i=r.value,l=new d;this.onListeners.set(i,l)}}catch(e){o.e(e)}finally{o.f()}}this.childEventEmitters=[]}return l(e,[{key:"on",value:function(e,t){var r=this.onListeners.get(e);r||(r=new d,this.onListeners.set(e,r)),r.addListenerFunc(t)}},{key:"only",value:function(e,t,r){var n=this.onlyListeners.get(e);n||(n=new u,this.onlyListeners.set(e,n)),n.putListenerFunc(t,r)}},{key:"pipe",value:function(e){this.childEventEmitters.push(e)}},{key:"emit",value:function(e,t){var r=this.onListeners.get(e);r&&(t.eventType=e,r.callListenerFunc(t));var o=this.onlyListeners.get(e);o&&o.callListenerFunc(t);var a,i=n(this.childEventEmitters);try{for(i.s();!(a=i.n()).done;)a.value.emit(e,t)}catch(e){i.e(e)}finally{i.f()}}},{key:"hasListenerFuncs",value:function(e){if(this.onListeners.has(e)){var t=this.onListeners.get(e);if(t&&t.hasListenerFunc())return!0}var r,o=n(this.childEventEmitters);try{for(o.s();!(r=o.n()).done;)if(r.value.hasListenerFuncs(e))return!0}catch(e){o.e(e)}finally{o.f()}return!1}},{key:"clearAll",value:function(){var e,t=n(this.onListeners.values());try{for(t.s();!(e=t.n()).done;)e.value.clearAll()}catch(e){t.e(e)}finally{t.f()}this.onListeners.clear();var r,o=n(this.onlyListeners.values());try{for(o.s();!(r=o.n()).done;)r.value.clearAll()}catch(e){o.e(e)}finally{o.f()}this.onlyListeners.clear(),this.childEventEmitters=[]}}]),e}(),d=function(){function e(){a(this,e),this.listenerFuncs=[]}return l(e,[{key:"clearAll",value:function(){this.listenerFuncs=[]}},{key:"hasListenerFunc",value:function(){return this.listenerFuncs.length>0}},{key:"addListenerFunc",value:function(e){this.listenerFuncs.push(e)}},{key:"callListenerFunc",value:function(e){var t,r=n(this.listenerFuncs);try{for(r.s();!(t=r.n()).done;)(0,t.value)(e)}catch(e){r.e(e)}finally{r.f()}}}]),e}(),u=function(){function e(){a(this,e),this.listenerFuncMap=new Map}return l(e,[{key:"clearAll",value:function(){this.listenerFuncMap.clear()}},{key:"hasListenerFunc",value:function(e){return this.listenerFuncMap.has(e)}},{key:"putListenerFunc",value:function(e,t){this.listenerFuncMap.set(e,t)}},{key:"callListenerFunc",value:function(e){var t,r=n(this.listenerFuncMap.values());try{for(r.s();!(t=r.n()).done;)(0,t.value)(e)}catch(e){r.e(e)}finally{r.f()}}}]),e}()}]).default},function(e,t,r){"use strict";var n=r(4),o=r(3),a=r(2),i=r(5);function l(e){this.eventListenerHelper=new i,this.windowMode="default",this.styleDisplay="flex",this.horizontalAlign="left",this.verticalAlign="top",this.keyListener=null,this.minimizeButton=null,this.maximizeButton=null,this.demaximizeButton=null,this.deminimizeButton=null,this.opts=e,this.isWindowManagerFixed=e.frame.jsFrame.isWindowManagerFixed,e.styleDisplay&&(this.styleDisplay=e.styleDisplay),e.minimizeButton&&(this.minimizeButton=e.minimizeButton),e.deminimizeButton&&(this.deminimizeButton=e.deminimizeButton),e.maximizeButton&&(this.maximizeButton=e.maximizeButton),e.demaximizeButton&&(this.demaximizeButton=e.demaximizeButton),e.hideButton&&(this.hideButton=e.hideButton),e.hideButtons&&(this.hideButtons=e.hideButtons),this.maximizeParam=e.maximizeParam,this.demaximizeParam=e.demaximizeParam,this.minimizeParam=e.minimizeParam,this.deminimizeParam=e.deminimizeParam,this.hideParam=e.hideParam,this.dehideParam=e.dehideParam,e.horizontalAlign&&(this.horizontalAlign=e.horizontalAlign),e.verticalAlign&&(this.verticalAlign=e.verticalAlign),this.animationEnabled=!1,this.animationDuration=100,this.frame=e.frame,this.hideFrameBorder=!0,this.hideTitleBar=!0,this.restoreKey=null,this.restoreDuration=null,this.restoreCallback=null,this.statsStore={},e.animation&&(this.animationEnabled=e.animation),e.animationDuration&&(this.animationDuration=e.animationDuration),this.eventListeners={},this.resizeListener=this.handleOnResize.bind(this),this.maximizeParam&&this.maximizeParam.matchParent&&(this.resizeListener=this.handleOnVirtualResize.bind(this))}l.MATCH_PARENT_CHANGE_MARKER_ATTR="__jsframe-mp-marker",l.prototype.on=function(e,t){this.eventListeners[e]=t},l.prototype.doMaximize=function(e){var t=this;if("hid"===t.windowMode)throw Error("[JSrame] It is not possible to change directly from the hid state to the maximized state");if("maximized"!==t.windowMode&&"maximizing"!==t.windowMode){t.windowMode="maximizing";var r=t.frame;if(e&&e.matchParent){var n=r.getWindowManager().getParentElement();if(!t.matchParentResizeObserver){var o=new MutationObserver((function(){t.resizeListener()}));o.observe(n,{attributeFilter:[l.MATCH_PARENT_CHANGE_MARKER_ATTR],attributes:!0}),t.matchParentResizeObserver=o}}else t.eventListenerHelper.hasEventListener(window,"resize","window-resize-listener")||t.eventListenerHelper.addEventListener(window,"resize",t.resizeListener,{listenerName:"window-resize-listener"});t.saveCurrentWindowStats("maximize_mode"),t.hideTitleBar=!!e&&e.fullScreen,t.hideTitleBar?r.hideAllVisibleFrameComponents():(t.maximizeButton&&r.hideFrameComponent(t.maximizeButton),t.demaximizeButton&&r.showFrameComponent(t.demaximizeButton,t.styleDisplay)),r.setMovable(!1),r.setResizable(!1),e&&e.restoreKey&&(t.restoreKey=e.restoreKey),e&&e.restoreDuration&&(t.restoreDuration=e.restoreDuration),e&&e.restoreCallback&&(t.restoreCallback=e.restoreCallback),t.renderMaximizedMode({animation:t.animationEnabled,callback:e&&e.callback?e.callback:null,duration:e&&e.duration?e.duration:null,matchParent:!(!e||!e.matchParent)&&e.matchParent})}},l.prototype.renderMaximizedMode=function(e){var t=this,r=t.frame,n=t.loadWindowStats("maximize_mode"),o=0,a=0,i=0,l=0;t.hideTitleBar&&(o=0,a=-n.titleBarHeight);var s=window.innerWidth,d=window.innerHeight;if(e.matchParent){var u=r.getWindowManager().getParentElement();s=u.clientWidth,d=u.clientHeight}t.hideFrameBorder?(i=s,l=d+(t.hideTitleBar?n.titleBarHeight:0)):(i=s-2*n.frameBorderWidthDefault,l=d-2*n.frameBorderWidthDefault+(t.hideTitleBar?n.titleBarHeight:0)),"right"==t.horizontalAlign&&(o=-i),"bottom"==t.verticalAlign&&(a=-l);var c=function(n){var s=n&&n.disableCallback;r.setPosition(o,a),t.hideFrameBorder&&(r.frameBorderWidthDefault=0,r.frameBorderWidthFocused=0,r.htmlElement.style.borderWidth="0px"),r.setSize(i,l,!0),s||(t.hideTitleBar&&(t.restoreKey&&(t.keyListener=function(e){e.code===t.restoreKey&&t.doCommand("restore")}),window.addEventListener("keydown",t.keyListener),r.iframe&&r.iframe.contentWindow.addEventListener("keydown",t.keyListener)),t.windowMode="maximized",e&&e.callback&&e.callback(t.frame,{eventType:"maximized"}),t.eventListeners.maximized&&t.eventListeners.maximized(t.frame,{eventType:"maximized"}))};e&&e.animation?t.animateFrame({frame:r,from:n,to:{left:o,top:a,width:i,height:l},duration:e.duration?e.duration:t.animationDuration,callback:c}):e&&"handleOnResize"===e.caller?c({disableCallback:!0}):c()},l.prototype.getWindowMode=function(){return this.windowMode},l.prototype.doDemaximize=function(e){var t=this,r=t.frame;if("hid"===t.windowMode)throw Error("[JSFrame] demaximize(=recovery from maximized) cannot be performed in hid state.");t.hasWindowStats("maximize_mode")&&(t.hideTitleBar||(t.maximizeButton&&r.showFrameComponent(t.maximizeButton,t.styleDisplay),t.demaximizeButton&&r.hideFrameComponent(t.demaximizeButton)),t.restoreWindow({restorePosition:!0,restoreMode:"maximize_mode",animation:t.animationEnabled,callback:e&&e.callback?e.callback:null,forceShowFrameComponents:t.animationEnabled&&t.hideTitleBar,duration:e&&e.duration?e.duration:null,eventType:"demaximized"}))},l.prototype.handleOnResize=function(){this.renderMaximizedMode({caller:"handleOnResize"})},l.prototype.handleOnVirtualResize=function(){this.renderMaximizedMode({caller:"handleOnResize",matchParent:!0})},l.prototype.doMinimize=function(e){var t=this;if("minimized"!==t.windowMode&&"minimizing"!==t.windowMode){t.windowMode="minimizing";var r=t.frame;t.saveCurrentWindowStats("minimize_mode"),r.setResizable(!1),t.renderMinimizedMode({animation:t.animationEnabled,callback:e&&e.callback?e.callback:null,duration:e&&e.duration?e.duration:null,toWidth:e&&e.toWidth?e.toWidth:null})}},l.prototype.renderMinimizedMode=function(e){var t=this,r=t.frame,n=t.loadWindowStats("minimize_mode"),o=t.getCurrentWindowStats(),a=t.getCurrentWindowStats();a.height=n.titleBarHeight,e&&e.toWidth&&(a.width=e.toWidth);var i=function(){r.setSize(a.width,a.height,!0),t.windowMode="minimized",t.minimizeButton&&r.hideFrameComponent(t.minimizeButton),t.deminimizeButton&&r.showFrameComponent(t.deminimizeButton,t.styleDisplay),e.callback&&e.callback(t.frame,{eventType:"minimized"}),t.eventListeners.minimized&&t.eventListeners.minimized(t.frame,{eventType:"minimized"})};e&&e.animation?t.animateFrame({toAlpha:1,duration:e.duration?e.duration:t.animationDuration,frame:r,from:o,to:a,callback:i}):i()},l.prototype.doDeminimize=function(e){var t=this,r=t.frame;t.hasWindowStats("minimize_mode")&&(t.minimizeButton&&r.showFrameComponent(t.minimizeButton,t.styleDisplay),t.deminimizeButton&&r.hideFrameComponent(t.deminimizeButton),t.restoreWindow({restorePosition:!1,restoreMode:"minimize_mode",animation:t.animationEnabled,duration:e&&e.duration?e.duration:null,callback:e&&e.callback?e.callback:null,eventType:"deminimized"}))},l.prototype.doHide=function(e){var t=this;if("hid"!==t.windowMode&&"hiding"!==t.windowMode){t.windowMode="hiding";var r=t.frame;t.saveCurrentWindowStats("hide_mode"),r.setResizable(!1);var n={animation:t.animationEnabled};e&&a({op:"overwrite-merge",object1:n,object2:e}),t.renderHideMode(n)}},l.prototype.renderHideMode=function(e){var t=this,r=t.frame,n=t.loadWindowStats("hide_mode"),a=t.getCurrentWindowStats(),i={x:0,y:0},l=e.toElement;e.offset&&(i=e.offset);var s=0,d=0,u=e&&e.align?e.align:"LEFT_TOP";if(u&&o.LEFT_TOP!=u){if(o.HCENTER_TOP==u)s=a.left+a.width/2,d=a.top;else if(o.RIGHT_TOP==u)s=a.left+a.width,d=a.top;else if(o.LEFT_VCENTER==u)s=a.left,d=a.top+a.height/2;else if(o.HCENTER_VCENTER==u)s=a.left+a.width/2,d=a.top+a.height/2;else if(o.RIGHT_VCENTER==u)s=a.left+a.width,d=a.top+a.height/2;else if(o.LEFT_BOTTOM==u)s=a.left,d=a.top+a.height;else if(o.HCENTER_BOTTOM==u)s=a.left+a.width/2,d=a.top+a.height;else if(o.RIGHT_BOTTOM==u)s=a.left+a.width,d=a.top+a.height;else if("ABSOLUTE"==u)if(l){var c=l.getBoundingClientRect();t.isWindowManagerFixed?(s=c.left,d=c.top):(s=c.left+window.pageXOffset,d=c.top+window.pageYOffset)}else s=i.x,d=i.y}else s=a.left,d=a.top;var m={left:s,top:d,width:0,height:n.titleBarHeight},p=function(){r.setSize(m.width,m.height,!0),t.windowMode="hid",e&&e.callback&&e.callback(t.frame,{eventType:"hid"}),t.eventListeners.hid&&t.eventListeners.hid(t.frame,{eventType:"hid"})};r.hideAllVisibleFrameComponents(),e&&e.animation?t.animateFrame({fromAlpha:e.silent?0:1,toAlpha:0,ease:!0,duration:e.duration?e.duration:t.animationDuration,frame:r,from:a,to:m,callback:p}):p()},l.prototype.doDehide=function(e){this.frame;this.hasWindowStats("hide_mode")&&this.restoreWindow({duration:e&&e.duration?e.duration:null,restorePosition:!0,restoreMode:"hide_mode",animation:this.animationEnabled,forceShowFrameComponents:!0,callback:e&&e.callback?e.callback:null,eventType:"dehided"})},l.prototype.loadWindowStats=function(e){return this.statsStore[e]},l.prototype.saveCurrentWindowStats=function(e){var t=this,r=t.getCurrentWindowStats();if(t.hasWindowStats(e)){var n=t.loadWindowStats(e),o=!t.windowStatsEquals(r,n);return o&&(t.statsStore[e]=r),o}return t.statsStore[e]=r,!0},l.prototype.windowStatsEquals=function(e,t){return!(!e||!t)&&JSON.stringify(e)===JSON.stringify(t)},l.prototype.clearWindowStats=function(e){this.statsStore[e]=null},l.prototype.hasWindowStats=function(e){return this.statsStore[e]},l.prototype.getCurrentWindowStats=function(){var e=this.frame,t=parseInt(e.titleBar.style.height,10),r=e.frameBorderWidthDefault,n=e.frameBorderWidthFocused;return{left:e.getLeft(),top:e.getTop(),width:e.getWidth(),height:e.getHeight(),titleBarHeight:t,frameBorderWidthDefault:r,frameBorderWidthFocused:n,resizable:e.resizable,movable:e.movable}},l.prototype.restoreWindow=function(e){var t=this,r=t.frame,n=t.loadWindowStats(e.restoreMode),o=t.getCurrentWindowStats();r.frameBorderWidthDefault=n.frameBorderWidthDefault,r.frameBorderWidthFocused=n.frameBorderWidthFocused,r.htmlElement.style.borderWidth=r.frameBorderWidthFocused;var a=function(){e&&0==e.restorePosition&&(n.left=o.left,n.top=o.top),r.setPosition(n.left,n.top);r.setSize(n.width,n.height,!0),r.setResizable(n.resizable),r.setMovable(n.movable),t.clearWindowStats(e.restoreMode),t.keyListener&&(window.removeEventListener("keydown",t.keyListener),r.iframe&&r.iframe.contentWindow.removeEventListener("keydown",t.keyListener),t.keyListener=null),t.windowMode="default",e&&e.forceShowFrameComponents&&r.showAllVisibleFrameComponents(),r.show();var a="restored";e&&e.eventType&&(a=e.eventType),e&&e.callback&&e.callback(t.frame,{eventType:a}),t.eventListeners[a]&&t.eventListeners[a](t.frame,{eventType:a})};e&&e.animation?t.animateFrame({duration:e.duration?e.duration:t.animationDuration,frame:r,fromAlpha:0,toAlpha:1,from:o,to:n,callback:a}):a(),t.eventListenerHelper.removeEventListener(window,"resize",t.resizeListener),t.matchParentResizeObserver&&(t.matchParentResizeObserver.disconnect(),t.matchParentResizeObserver=null)},l.prototype.animateFrame=function(e){var t=isNaN(e.fromAlpha)?1:e.fromAlpha,r=e.from,o=e.to;(new n).set(e.frame).setDuration(e.duration?e.duration:this.animationDuration).fromPosition(r.left,r.top,"LEFT_TOP").toPosition(o.left,o.top,"LEFT_TOP").fromWidth(r.width).fromHeight(r.height).toWidth(o.width).toHeight(o.height).fromAlpha(t).toAlpha(0==e.toAlpha?0:1).ease(e.ease).start(0,!1).then((function(t){e.callback()}))},l.prototype.doCommand=function(e,t){var r=this;"maximize"===e&&r._defaultFunctionMaximize(r.frame),"demaximize"===e&&r._defaultFunctionDemaximize(r.frame),"restore"===e&&r._defaultFunctionRestoreFromFullscreen(r.frame),"minimize"===e&&r._defaultFunctionMinimize(r.frame),"deminimize"===e&&r._defaultFunctionDeminimize(r.frame),"hide"===e&&r._defaultFunctionHide(r.frame),"dehide"===e&&r._defaultFunctionDehide(r.frame)},l.prototype._defaultFunctionMaximize=function(e,t){var r=this.opts,n={fullScreen:!0===r.maximizeWithoutTitleBar,restoreKey:r.restoreKey?r.restoreKey:"Escape",restoreDuration:r.restoreDuration};this.maximizeParam&&a({op:"overwrite-merge",object1:n,object2:this.maximizeParam}),e.control.doMaximize(n)},l.prototype._defaultFunctionDemaximize=function(e,t){e.control.doDemaximize({})},l.prototype._defaultFunctionRestoreFromFullscreen=function(e,t){e.control.doDemaximize({duration:this.restoreDuration?this.restoreDuration:null,callback:this.restoreCallback?this.restoreCallback:null})},l.prototype._defaultFunctionMinimize=function(e,t){e.control.doMinimize(this.minimizeParam)},l.prototype._defaultFunctionDeminimize=function(e,t){e.control.doDeminimize(this.deminimizeParam)},l.prototype._defaultFunctionHide=function(e,t){var r={align:"CENTER_BOTTOM"};this.hideParam&&(r=this.hideParam),e.control.doHide(r)},l.prototype._defaultFunctionDehide=function(e,t){e.control.doDehide(this.dehideParam)},l.prototype.setupDefaultEvents=function(){var e=this;if(e.maximizeButton&&e.frame.on(e.maximizeButton,"click",e._defaultFunctionMaximize.bind(e)),e.demaximizeButton&&e.frame.on(e.demaximizeButton,"click",e._defaultFunctionDemaximize.bind(e)),e.minimizeButton&&e.frame.on(e.minimizeButton,"click",e._defaultFunctionMinimize.bind(e)),e.deminimizeButton&&e.frame.on(e.deminimizeButton,"click",e._defaultFunctionDeminimize.bind(e)),e.hideButton&&e.frame.on(e.hideButton,"click",e._defaultFunctionHide.bind(e)),e.hideButtons)for(var t in e.hideButtons){var r=e.hideButtons[t];r&&e.frame.on(r,"click",e._defaultFunctionHide.bind(e))}},e.exports=l},function(e,t){var r=function(){function e(){var e=this;e._timerId=null,e._isRunning=!1,e._timerInterval=0,e._internalCallback=function(){e._timerMethod&&e._timerMethod(e);e._isRunning&&(clearTimeout(e._timerId),e._timerId=setTimeout(e._internalCallback,e._timerInterval))},e._timerMethod=null}return e.prototype.setCallback=function(e){return this._timerMethod=e,this},e.prototype.setIntervalMillis=function(e){return this._timerInterval=e,this},e.prototype.stopTimer=function(){return this._isRunning=!1,this},e.prototype.startTimer=function(){var e=this;return e._timerInterval>0&&(e._timerId=setTimeout(e._internalCallback,e._timerInterval),e._isRunning=!0),e},e}();e.exports=r},function(e,t,r){var n=r(7),o=r(20);function a(){var e=this;this.showTitleBar=!0,this.showCloseButton=!0,this.titleBarCaption="",this.titleBarCaptionFontSize="12px",this.titleBarCaptionFontWeight="bold",this.titleBarHeight="24px",this.useIframe=!1,this.useFrame=!0,this.titleBarClassNameDefault=null,this.titleBarClassNameFocused=null,this.setUseIFrame=function(t){return e.useIframe=t,e.useFrame=!t,e},this.titleBarCaptionLeftMargin="5px",this.titleBarColorDefault=null,this.titleBarColorFocused=null,this.titleBarCaptionColorDefault="",this.titleBarCaptionColorFocused="",this.titleBarCaptionTextShadow="0 1px 0 rgba(255,255,255,.7)",this.titleBarCaptionTextAlign="center",this.titleBarBorderBottomDefault="1px solid rgba(0,0,0,0.2)",this.titleBarBorderBottomFocused=null,this.frameBorderRadius="6px",this.frameBorderWidthDefault="1px",this.frameBorderWidthFocused=this.frameBorderWidthDefault,this.frameBorderColorDefault="rgba(1, 1, 1, 0.2)",this.frameBorderColorFocused=this.frameBorderColorDefault,this.frameBorderStyle="solid",this.frameBoxShadow="2px 3px 16px rgba(0,0,0,.6)",this.frameBackgroundColor="transparent",this._partsBuilder=null,this.frameComponents=[],this.frameHeightAdjust=1,this.resizeAreaWidth=20,this.resizeAreaHeight=20,this.resizeAreaOffset=0,this.resizeAreaVisible=!1,this.getFrameInnerBorderRadius=function(t,r){return t?r?{frameAppearance:e,innerBorderRadius:parseInt(t.frameBorderRadius,10)-parseInt(t.frameBorderWidthFocused,10)+"px"}:{frameAppearance:e,innerBorderRadius:parseInt(t.frameBorderRadius,10)-parseInt(t.frameBorderWidthDefault,10)+"px"}:null},this.onInitialize=function(){if(e.showCloseButton){var t=e.getPartsBuilder(),r=t.buildTextButtonAppearance();r.size=14,r.captionShiftYpx=0,r.captionFontRatio=1,r.borderRadius=2,r.backgroundColorPressed="transparent",r.backgroundColorDefault="transparent",r.caption="✖",r.captionColorDefault="gray",r.captionColorFocused="gray",r.captionColorHovered="silver",r.captionColorPressed="black",r.borderWidth=0,r.borderColorDefault="#aaaaaa",r.borderStyle="solid";var n=t.buildTextButton(r);e.addFrameComponent("closeButton",n,-10,-18,"RIGHT_TOP")}},this.onTitleBarStyleInitialize=function(){}}a.prototype.getPartsBuilder=function(){return null===this._partsBuilder&&(this._partsBuilder=new n),this._partsBuilder},a.prototype.initialize=function(){this.onInitialize()},a.prototype.addFrameComponent=function(e,t,r,n,a,i){var l=new o(e,t,r,n,a,i);return t._onTakeFocus&&t._onReleaseFocus&&l.setFocusCallback(t._onTakeFocus,t._onReleaseFocus),this.frameComponents.push(l),l},e.exports=a},function(e,t,r){function n(){this.imageDefault=null,this.imageHovered=null,this.imagePressed=null,this.imageFocused=null,this.imageStore={}}r(6)(n,r(8)),n.prototype._setImage=function(e,t,r){var n=this.imageStore[e];if(n)return n;var o=document.createElement("img");if(o.src=e,t&&r){var a="margin:0px;padding:0px;width:"+t+"px;height:"+r+"px";o.setAttribute("style",a)}return this.imageStore[e]=o,o},n.prototype.setSrc=function(e){var t=this;e.default&&(t.imageDefault=t._setImage(e.default,e.width,e.height)),e.hovered&&(t.imageHovered=t._setImage(e.hovered,e.width,e.height)),e.pressed&&(t.imagePressed=t._setImage(e.pressed,e.width,e.height)),e.focused&&(t.imageFocused=t._setImage(e.focused,e.width,e.height))},e.exports=n},function(e,t){e.exports=function(e){this.childMenuHTML="",this.childMenuWidth=0,this.childMenuAlign="LEFT",this.yOffset=0,this.xOffset=0}},function(e,t){function r(e,t,r,n,o,a){var i=this;i.id=e,i.x=r,i.y=n,i.frame=null,i._focusTakingCallabck=null,i._focusReleasingCallabck=null,i.frameComponentAlign=o||CALIGN.LEFT_TOP,i.htmlElement=t,i.htmlElement.style.zIndex=50,i.htmlElement.setAttribute("component-id",e),a&&a.childMenu?i.childMenu=a.childMenu:t.querySelector(".jsframe-child-menu")&&(i.childMenu=t.querySelector(".jsframe-child-menu"))}r.prototype.setFocusCallback=function(e,t){this._focusTakingCallabck=e,this._focusReleasingCallabck=t},r.prototype.setFrame=function(e){this.frame=e,this.htmlElement.parentObject=e,this.updateAlign()},r.prototype.updateAlign=function(){var e=this,t=e.frameComponentAlign,r=e.frame,n=e.htmlElement.style;n.userSelect="none";var o=e.x,a=e.y,i=r.getWidth(),l=r.getHeight(),s=n.width,d=n.height;CALIGN.LEFT_TOP==t?(n.left=o+"px",n.top=a+"px"):CALIGN.HCENTER_TOP==t?(n.left=parseInt(i)/2-parseInt(s)/2+o+"px",n.top=a+"px"):CALIGN.RIGHT_TOP==t?(n.left=parseInt(i)-parseInt(s)+o+"px",n.top=a+"px"):CALIGN.LEFT_VCENTER==t?(n.left=o+"px",n.top=parseInt(l)/2-parseInt(d)/2+a+"px"):CALIGN.HCENTER_VCENTER==t?(n.left=parseInt(i)/2-parseInt(s)/2+o+"px",n.top=parseInt(l)/2-parseInt(d)/2+a+"px"):CALIGN.RIGHT_VCENTER==t?(n.left=parseInt(i)-parseInt(s)+o+"px",n.top=parseInt(l)/2-parseInt(d)/2+a+"px"):CALIGN.LEFT_BOTTOM==t?(n.left=o+"px",n.top=parseInt(l)-parseInt(d)+a+"px"):CALIGN.HCENTER_BOTTOM==t?(n.left=parseInt(i)/2-parseInt(s)/2+o+"px",n.top=parseInt(l)-parseInt(d)+a+"px"):CALIGN.RIGHT_BOTTOM==t&&(n.left=parseInt(i)-parseInt(s)+o+"px",n.top=parseInt(l)-parseInt(d)+a+"px")},r.prototype.handleTakingFocus=function(){this._focusTakingCallabck&&this._focusTakingCallabck()},r.prototype.handleReleasingFocus=function(){this._focusReleasingCallabck&&this._focusReleasingCallabck()},e.exports=r},function(e,t,r){r(22);var n=r(9);e.exports.getStyle=function(e,t){var r={titleBar:{greenButton:"maximize"}},o=r;return t&&n.objectAssign(r,t),e.showTitleBar=!0,e.showCloseButton=!0,e.titleBarCaptionFontSize="11px",e.titleBarCaptionFontWeight="normal",e.titleBarCaptionLeftMargin=null,e.titleBarCaptionColorDefault="#4d494d",e.titleBarCaptionColorFocused="#4d494d",e.titleBarHeight="26px",e.titleBarColorDefault=null,e.titleBarColorFocused=null,e.titleBarBorderBottomDefault="1px solid #b1aeb1",e.titleBarBorderBottomFocused=e.titleBarBorderBottomDefault,e.frameBorderRadius="6px",e.frameBorderWidthDefault="1px",e.frameBorderWidthFocused="1px",e.frameBorderColorDefault="#acacac",e.frameBorderColorFocused="#acacac",e.frameBorderStyle="solid",e.frameBoxShadow="0px 0px 20px rgba(0, 0, 0, 0.3)",e.frameBackgroundColor="transparent",e.frameComponents=new Array,e.getTitleBarStyle=function(){return e.focusedFrameOnly?{titleBarClassNameDefault:"jsframe-preset-style-yosemite-focused",titleBarClassNameFocused:"jsframe-preset-style-yosemite-focused"}:{titleBarClassNameDefault:"jsframe-preset-style-yosemite-default",titleBarClassNameFocused:"jsframe-preset-style-yosemite-focused"}},e.onInitialize=function(){var t=e.getPartsBuilder(),r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWElEQVQoU2NkIBIwEqmOAa6wgZWlH6Sp4fefQjCNxkdRyMjAUPCf4f8CkEJGBsaE/wwME2AaUaxuYGWeD1IAUgjS0PD7byLMaaQrBLmJKKuJ9gyhYCI6HAGlFDALf9s7eQAAAABJRU5ErkJggg==",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVElEQVQoU2NkIBIwoqvjixFoAIl9WvIBTMMAhkLeGP79IMnPSz46kq8QZN1/hv/2IBMYGRgMQPR/BoYLED7jQZAzwFYTrRDZLdRxI7KJRAcPrvAHAATYKgvLH0fAAAAAAElFTkSuQmCC";"fullscreen"===o.titleBar.greenButton&&(n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZElEQVQoU2NkIBIwEqmOAUWhQIKAwL8///czMDAYwAz4tOQjWA1cIUjRhwUfPqArxlDIF8N/nomF0RFdMTaF/xkYGC6gK/605KMhitV8MfwghSCAohhkAy6FKIphniIvePCFKQDzGzsLS+7n2AAAAABJRU5ErkJggg==");var a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=",i="margin:0px;padding:0px;width:10px;height:10px",l=document.createElement("img");l.src=n,l.setAttribute("style",i);var s=document.createElement("img");s.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiUlEQVQoU2NkwAIEogQMPiz7cAFZihGbQt4Y/v0MjIwLPy/+sAAmj1MhIwODw39GxkSYYrwKQabBFGNVyBfL1///P6MBzFrmf4yFjCCH/2X63w93C+P/C58WfypEdzvYRN5YgQTG///ng61iYDjweclHR6wKkRUTVAhTzPD/fzxeE2FWYQtskBwAKwQ7tVjAL4MAAAAASUVORK5CYII=",s.setAttribute("style",i);var d=document.createElement("img");d.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkIBIwEqmOgUYKa7w4Ghj+M9hjdQYjw8GWbT8awFYTrZAYD9HIM8RYDQBsEAwLkq4IAgAAAABJRU5ErkJggg==",d.setAttribute("style",i);var u=document.createElement("img");u.src=r,u.setAttribute("style",i);var c=document.createElement("img");c.src=a,c.setAttribute("style","margin:0px;padding:0px;width:6px;height:6px");var m=t.buildImageButtonAppearance();m.imageDefault=c,m.imageHovered=u,m.imagePressed=u,m.imageFocused=c,m.size=10,m.borderRadius=5,m.borderWidth=1,m.borderColorDefault="#c6c6c6",m.borderColorFocused="#d3524e",m.borderColorHovered=m.borderColorFocused,m.borderColorPressed="#e64842",m.borderStyleDefault="solid",m.borderStyleFocused=m.borderStyleDefault,m.borderStyleHovered=m.borderStyleDefault,m.borderStylePressed=m.borderStyleDefault,m.backgroundColorDefault="#d0d0d0",m.backgroundColorFocused="#fc615c",m.backgroundColorHovered=m.backgroundColorFocused,m.backgroundColorPressed=m.backgroundColorDefault,m.setSrc({default:a,focused:a,hovered:r,pressed:r});var p=t.buildButton(m),h=8,f=-19,y="LEFT_TOP";e.addFrameComponent(o.closeButtonName||"closeButton",p,h,f,y);var b=t.buildImageButtonAppearance(m);b.borderColorDefault="#c6c6c6",b.borderColorFocused="#e6b347",b.borderColorHovered=b.borderColorFocused,b.borderColorPressed="#e1a12d",b.backgroundColorDefault="#d0d0d0",b.backgroundColorFocused="#fdbe40",b.backgroundColorHovered=b.backgroundColorFocused,b.backgroundColorPressed=b.backgroundColorDefault,b.imageDefault=c,b.imageHovered=d,b.imagePressed=d,b.imageFocused=c;var g=t.buildButton(b),v=t.buildButton(b);v.style.display="none";h=28,f=-19,y="LEFT_TOP";e.addFrameComponent("minimizeButton",g,h,f,y),e.addFrameComponent("deminimizeButton",v,h,f,y);var C=t.buildImageButtonAppearance(m);C.borderColorDefault="#c6c6c6",C.borderColorFocused="#67b657",C.borderColorHovered=C.borderColorFocused,C.borderColorPressed="#00af38",C.backgroundColorDefault="#d0d0d0",C.backgroundColorFocused="#34ca49",C.backgroundColorHovered=C.backgroundColorFocused,C.backgroundColorPressed=C.backgroundColorDefault,C.imageDefault=c,C.imageHovered=l,C.imagePressed=l,C.imageFocused=c;var B=t.buildButton(C),E=t.buildImageButtonAppearance(m);E.borderColorDefault="#c6c6c6",E.borderColorFocused="#67b657",E.borderColorHovered=E.borderColorFocused,E.borderColorPressed="#00af38",E.backgroundColorDefault="#d0d0d0",E.backgroundColorFocused="#34ca49",E.backgroundColorHovered=E.backgroundColorFocused,E.backgroundColorPressed=E.backgroundColorDefault,E.imageDefault=c,E.imageHovered=s,E.imagePressed=s,E.imageFocused=c;var w=t.buildButton(E);w.style.display="none";h=48,f=-19,y="LEFT_TOP";e.addFrameComponent("dezoomButton",w,h,f,y),e.addFrameComponent("zoomButton",B,h,f,y)},e}},function(e,t,r){var n=r(0),o=r(23);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(1)(!1)).push([e.i,".jsframe-preset-style-yosemite-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-yosemite-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n",""]),e.exports=t},function(e,t,r){r(25),e.exports.getStyle=function(e){return e.showTitleBar=!0,e.showCloseButton=!0,e.titleBarCaptionFontSize="12px",e.titleBarCaptionFontWeight="normal",e.titleBarCaptionLeftMargin="10px",e.titleBarCaptionColorDefault="#9b9a9b",e.titleBarCaptionColorFocused="#4d494d",e.titleBarHeight="30px",e.titleBarColorDefault=null,e.titleBarColorFocused=null,e.titleBarBorderBottomDefault="solid 1px #aaaaaa",e.titleBarBorderBottomFocused="solid 1px #1883d7",e.frameBorderRadius="0px",e.frameBorderWidthDefault="1px",e.frameBorderWidthFocused="1px",e.frameBorderColorDefault="#aaaaaa",e.frameBorderColorFocused="#1883d7",e.frameBorderStyle="solid",e.frameBoxShadow=null,e.frameBackgroundColor="transparent",e.frameComponents=new Array,e.frameHeightAdjust=0,e.getTitleBarStyle=function(){return e.focusedFrameOnly?{titleBarClassNameDefault:"jsframe-preset-style-redstone-focused",titleBarClassNameFocused:"jsframe-preset-style-redstone-focused"}:{titleBarClassNameDefault:"jsframe-preset-style-redstone-default",titleBarClassNameFocused:"jsframe-preset-style-redstone-focused"}},e.onInitialize=function(){var t=e.getPartsBuilder(),r=t.buildTextButtonAppearance();r.width=45,r.height=28,r.borderRadius=0,r.borderWidth=0,r.borderColorDefault="#c6c6c6",r.borderColorFocused="#fc615c",r.borderColorHovered=r.borderColorFocused,r.borderColorPressed="#e64842",r.borderStyleDefault="solid",r.borderStyleFocused=r.borderStyleDefault,r.borderStyleHovered=r.borderStyleDefault,r.borderStylePressed=r.borderStyleDefault,r.backgroundColorDefault="white",r.backgroundColorFocused="white",r.backgroundColorHovered="#e81123",r.backgroundColorPressed="#f1707a",r.caption="╳",r.captionColorDefault="#9b9a9b",r.captionColorFocused="black",r.captionColorHovered="white",r.captionColorPressed="white",r.captionShiftYpx=1,r.captionFontRatio=.6;var n=t.buildTextButton(r),o=0,a=-parseInt(e.titleBarHeight),i="RIGHT_TOP";e.addFrameComponent("closeButton",n,o,a,i);var l=t.buildTextButtonAppearance();l.width=45,l.height=28,l.borderRadius=0,l.borderWidth=0,l.borderColorDefault="#c6c6c6",l.borderColorFocused="#fc615c",l.borderColorHovered=l.borderColorFocused,l.borderColorPressed="#e64842",l.borderStyleDefault="solid",l.borderStyleFocused=l.borderStyleDefault,l.borderStyleHovered=l.borderStyleDefault,l.borderStylePressed=l.borderStyleDefault,l.backgroundColorDefault="white",l.backgroundColorFocused="white",l.backgroundColorHovered="#e5e5e5",l.backgroundColorPressed="#cccccc",l.caption="☐",l.captionColorDefault="#9b9a9b",l.captionColorFocused="black",l.captionColorHovered="black",l.captionColorPressed="black",l.captionShiftYpx=1,l.captionFontRatio=.55;var s=t.buildTextButton(l);o=-46,a=-parseInt(e.titleBarHeight),i="RIGHT_TOP";e.addFrameComponent("maximizeButton",s,o,a,i);var d=t.buildTextButtonAppearance();d.width=45,d.height=28,d.borderRadius=0,d.borderWidth=0,d.borderColorDefault="#c6c6c6",d.borderColorFocused="#fc615c",d.borderColorHovered=d.borderColorFocused,d.borderColorPressed="#e64842",d.borderStyleDefault="solid",d.borderStyleFocused=d.borderStyleDefault,d.borderStyleHovered=d.borderStyleDefault,d.borderStylePressed=d.borderStyleDefault,d.backgroundColorDefault="white",d.backgroundColorFocused="white",d.backgroundColorHovered="#e5e5e5",d.backgroundColorPressed="#cccccc",d.caption="＿",d.captionColorDefault="#9b9a9b",d.captionColorFocused="black",d.captionColorHovered="black",d.captionColorPressed="black",d.captionShiftYpx=-2,d.captionFontRatio=.3;var u=t.buildTextButton(d);o=-92,a=-parseInt(e.titleBarHeight),i="RIGHT_TOP";e.addFrameComponent("minimizeButton",u,o,a,i);var c=t.buildTextButtonAppearance();c.width=45,c.height=28,c.borderRadius=0,c.borderWidth=0,c.borderColorDefault="#c6c6c6",c.borderColorFocused="#fc615c",c.borderColorHovered=c.borderColorFocused,c.borderColorPressed="#e64842",c.borderStyleDefault="solid",c.borderStyleFocused=c.borderStyleDefault,c.borderStyleHovered=c.borderStyleDefault,c.borderStylePressed=c.borderStyleDefault,c.backgroundColorDefault="white",c.backgroundColorFocused="white",c.backgroundColorHovered="#e5e5e5",c.backgroundColorPressed="#cccccc",c.caption="▣",c.captionColorDefault="#9b9a9b",c.captionColorFocused="black",c.captionColorHovered="black",c.captionColorPressed="black",c.captionShiftYpx=1,c.captionFontRatio=.6;var m=t.buildTextButton(c);o=-92,a=-parseInt(e.titleBarHeight),i="RIGHT_TOP";m.style.display="none",e.addFrameComponent("deminimizeButton",m,o,a,i);var p=t.buildTextButtonAppearance();p.width=45,p.height=28,p.borderRadius=0,p.borderWidth=0,p.borderColorDefault="#c6c6c6",p.borderColorFocused="#fc615c",p.borderColorHovered=p.borderColorFocused,p.borderColorPressed="#e64842",p.borderStyleDefault="solid",p.borderStyleFocused=p.borderStyleDefault,p.borderStyleHovered=p.borderStyleDefault,p.borderStylePressed=p.borderStyleDefault,p.backgroundColorDefault="white",p.backgroundColorFocused="white",p.backgroundColorHovered="#e5e5e5",p.backgroundColorPressed="#cccccc",p.caption="❏",p.captionColorDefault="#9b9a9b",p.captionColorFocused="black",p.captionColorHovered="black",p.captionColorPressed="black",p.captionShiftYpx=1,p.captionFontRatio=.55;var h=t.buildTextButton(p);o=-46,a=-parseInt(e.titleBarHeight),i="RIGHT_TOP";h.style.display="none",e.addFrameComponent("restoreButton",h,o,a,i)},e}},function(e,t,r){var n=r(0),o=r(26);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(1)(!1)).push([e.i,".jsframe-preset-style-redstone-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-redstone-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n",""]),e.exports=t},function(e,t,r){r(28),e.exports.getStyle=function(e){return e.showTitleBar=!1,e.showCloseButton=!0,e.titleBarCaptionFontSize="12px",e.titleBarCaptionFontWeight="normal",e.titleBarCaptionLeftMargin="10px",e.titleBarCaptionColorDefault="#4d494d",e.titleBarCaptionColorFocused="#4d494d",e.titleBarHeight="5px",e.titleBarColorDefault="white",e.titleBarColorFocused="white",e.titleBarBorderBottomDefault=null,e.titleBarBorderBottomFocused=null,e.frameBorderRadius="6px",e.frameBorderWidthDefault="1px",e.frameBorderWidthFocused="1px",e.frameBorderColorDefault="#aaaaaa",e.frameBorderColorFocused="#aaaaaa",e.frameBorderStyle="solid",e.frameBoxShadow="2px 2px 5px  rgba(0, 0, 0, 0.5)",e.frameBackgroundColor="white",e.frameComponents=new Array,e.frameHeightAdjust=2,e.getTitleBarStyle=function(){return e.focusedFrameOnly?{titleBarClassNameDefault:"jsframe-preset-style-popup-focused",titleBarClassNameFocused:"jsframe-preset-style-popup-focused"}:{titleBarClassNameDefault:"jsframe-preset-style-popup-default",titleBarClassNameFocused:"jsframe-preset-style-popup-focused"}},e.onInitialize=function(){var t=e.getPartsBuilder(),r=t.buildTextButtonAppearance();r.width=20,r.height=20,r.borderRadius=10,r.borderWidth=1,r.borderColorDefault="#cccccc",r.borderColorFocused="#cccccc",r.borderColorHovered="#dddddd",r.borderColorPressed="#eeeeee",r.borderStyleDefault="solid",r.borderStyleFocused=r.borderStyleDefault,r.borderStyleHovered=r.borderStyleDefault,r.borderStylePressed=r.borderStyleDefault,r.backgroundColorDefault="white",r.backgroundColorFocused="white",r.backgroundColorHovered="#eeeeee",r.backgroundColorPressed="#dddddd",r.backgroundBoxShadow="2px 2px 5px  rgba(0, 0, 0, 0.5)",r.caption="✖",r.captionColorDefault="black",r.captionColorFocused="black",r.captionColorHovered="white",r.captionColorPressed="white",r.captionShiftYpx=1,r.captionFontRatio=.6;var n=t.buildTextButton(r),o=-6-parseInt(e.titleBarHeight);e.addFrameComponent("closeButton",n,10,o,"RIGHT_TOP")},e}},function(e,t,r){var n=r(0),o=r(29);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(1)(!1)).push([e.i,".jsframe-preset-style-popup-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-popup-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n",""]),e.exports=t},function(e,t){e.exports.getStyle=function(e){return e.showTitleBar=!1,e.showCloseButton=!0,e.titleBarCaptionFontSize="0px",e.titleBarCaptionFontWeight="normal",e.titleBarCaptionLeftMargin="0px",e.titleBarCaptionColorDefault="transparent",e.titleBarCaptionColorFocused="transparent",e.titleBarHeight="0px",e.titleBarColorDefault="transparent",e.titleBarColorFocused="transparent",e.titleBarBorderBottomDefault=null,e.titleBarBorderBottomFocused=null,e.frameBorderRadius="10px",e.frameBorderWidthDefault="0px",e.frameBorderWidthFocused="0px",e.frameBorderColorDefault="transparent",e.frameBorderColorFocused="transparent",e.frameBorderStyle="solid",e.frameBoxShadow="2px 2px 15px  rgba(0, 0, 0, 0.5)",e.frameBackgroundColor="transparent",e.frameComponents=[],e.frameHeightAdjust=1,e.captionClor="darkgray",e.pullUpDisabled=!1,e.getTitleBarStyle=function(){return e.focusedFrameOnly,{titleBarClassNameDefault:" ",titleBarClassNameFocused:" "}},e.onInitialize=function(){var t=e.getPartsBuilder(),r=t.buildTextButtonAppearance();r.width=20,r.height=20,r.borderRadius=10,r.borderWidth=0,r.borderColorDefault="#cccccc",r.borderColorFocused="#cccccc",r.borderColorHovered="#dddddd",r.borderColorPressed="#eeeeee",r.borderStyleDefault="solid",r.borderStyleFocused=r.borderStyleDefault,r.borderStyleHovered=r.borderStyleDefault,r.borderStylePressed=r.borderStyleDefault,r.backgroundColorDefault="transparent",r.backgroundColorFocused="transparent",r.backgroundColorHovered="transparent",r.backgroundColorPressed="transparent",r.backgroundBoxShadow=null,r.caption="✖",r.captionColorDefault=e.captionClor,r.captionColorFocused=e.captionClor,r.captionColorHovered=e.captionClor,r.captionColorPressed=e.captionClor,r.captionShiftYpx=1,r.captionFontRatio=.6;var n=t.buildTextButton(r);e.addFrameComponent("closeButton",n,-6,3,"RIGHT_TOP")},e}},function(e,t,r){r(32);var n=r(9);function o(e,t,r){var n,o=e.getPartsBuilder(),i=0;for(var l in n=r?t.titleBar.buttonsOnLeft:t.titleBar.buttons){var s=n[l],d=o.buildTextButtonAppearance();d.fa=s.fa,d.width=t.titleBar.buttonWidth,d.height=t.titleBar.buttonHeight,d.borderRadius=0,d.borderWidth=0,d.borderColorDefault="#c6c6c6",d.borderColorFocused="#fc615c",d.borderColorHovered=d.borderColorFocused,d.borderColorPressed="#e64842",d.borderStyleDefault="solid",d.borderStyleFocused=d.borderStyleDefault,d.borderStyleHovered=d.borderStyleDefault,d.borderStylePressed=d.borderStyleDefault,d.backgroundColorDefault="transparent",d.backgroundColorFocused="transparent",d.backgroundColorHovered="transparent",d.backgroundColorPressed="transparent";var u=a(t.titleBar.buttonColor);d.captionColorDefault=t.titleBar.buttonColor,d.captionColorFocused=t.titleBar.buttonColor,d.captionColorHovered=u.hovered,d.captionColorPressed=u.pressed,d.captionShiftYpx=0,d.captionFontRatio=1;var c=o.buildTextButton(d);s.visible?c.style.display="flex":(r?i-=t.titleBar.buttonWidth:i+=t.titleBar.buttonWidth,c.style.display="none");var m,p,h=parseInt(e.titleBarHeight),f=i,y=-h+(h-d.height)/2;m=r?"LEFT_TOP":"RIGHT_TOP",s.childMenuHTML&&((p=document.createElement("div")).id=s.name+"_child_menu",p.innerHTML=s.childMenuHTML,p.style.position="absolute",p.style.width=(s.childMenuWidth?s.childMenuWidth:200)+"px",p.style.top=parseInt(c.style.top,10)+parseInt(c.style.height,10)/2+h/2+"px",p.style.left=c.style.left,p.style.display="none",c.appendChild(p)),e.addFrameComponent(s.name,c,f,y,m,{childMenu:p}),i+=r?t.titleBar.buttonWidth:-t.titleBar.buttonWidth}}function a(e){var t=document.createElement("canvas");t.height=1,t.width=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var n=r.getImageData(0,0,1,1).data,o=n[0],a=n[1],i=n[2],l=n[3]/255,s=.85*l;return{src:"rgb("+o+","+a+","+i+","+s+")",hovered:"rgb("+o+","+a+","+i+","+s+")",pressed:"rgb("+o+","+a+","+i+","+.75*l+")"}}e.exports.getStyle=function(e,t){var r={border:{color:"transparent",width:0,radius:6},control:{maximizeWithoutTitleBar:!1,restoreKey:"Escape"},titleBar:{color:"white",background:"black",leftMargin:20,height:30,fontSize:12,buttonWidth:36,buttonHeight:16,buttonColor:"white",buttons:[{fa:"fas fa-times",name:"closeButton",visible:!0},{fa:"far fa-window-maximize",name:"maximizeButton",visible:!0},{fa:"far fa-window-restore",name:"restoreButton",visible:!1},{fa:"far fa-window-minimize",name:"minimizeButton",visible:!0},{fa:"fas fa-caret-up",name:"deminimizeButton",visible:!1}],buttonsOnLeft:[]}},a=r;return t&&n.objectAssign(r,t),e.showTitleBar=!0,e.showCloseButton=!0,e.titleBarCaptionFontSize=a.titleBar.fontSize+"px",e.titleBarCaptionFontWeight="normal",e.titleBarCaptionLeftMargin=a.titleBar.leftMargin+"px",e.titleBarCaptionColorDefault=a.titleBar.color,e.titleBarCaptionColorFocused=a.titleBar.color,e.titleBarCaptionTextShadow=null,e.titleBarCaptionTextAlign="left",e.titleBarHeight=a.titleBar.height+"px",e.titleBarColorDefault=a.titleBar.background,e.titleBarColorFocused=a.titleBar.background,e.titleBarBorderBottomDefault="solid 0px #aaaaaa",e.titleBarBorderBottomFocused="solid 0px #1883d7",e.frameBorderRadius=a.border.radius+"px",e.frameBorderWidthDefault=a.border.width+"px",e.frameBorderWidthFocused=a.border.width+"px",e.frameBorderColorDefault=a.border.color,e.frameBorderColorFocused=a.border.color,e.frameBorderStyle="solid",e.frameBoxShadow=a.border.shadow,e.frameBackgroundColor="transparent",e.frameComponents=new Array,e.frameHeightAdjust=0,e.getTitleBarStyle=function(){return e.focusedFrameOnly,{titleBarClassNameDefault:" ",titleBarClassNameFocused:" "}},e.onInitialize=function(){o(e,a,!1),o(e,a,!0)},e}},function(e,t,r){var n=r(0),o=r(33);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},function(e,t,r){(t=r(1)(!1)).push([e.i,".jsframe-preset-style-material-default {\n    background: black;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-material-focused {\n    background: black;\n    border-top-left-radius: 36px;\n    border-top-right-radius: 36px;\n}\n",""]),e.exports=t},function(e,t,r){var n=r(2);e.exports.getPresetWindow=function(e){var t={appearanceName:"yosemite",appearanceParam:{}},r={};e&&(r=e);var o="fullscreen"===r.maximizeButtonBehavior,a="minimize"===r.minimizeButtonBehavior?"minimizeButton":null,i="hide"===r.minimizeButtonBehavior?"minimizeButton":null,l="hide"===r.closeButtonBehavior?"custom-close-button":null,s=r.control,d=l,u=r.closeButtonName;return o&&(t.appearanceParam.titleBar={greenButton:"fullscreen"}),t.appearanceParam.closeButtonName=d||u||"closeButton",t.setupPresetWindow=function(e){var t={maximizeButton:"zoomButton",maximizeParam:{fullScreen:o,restoreKey:"Escape"},demaximizeButton:"dezoomButton",deminimizeButton:"deminimizeButton",minimizeButton:a,hideButtons:[i,l],hideParam:{align:"CENTER_CENTER",duration:300},dehideParam:{duration:300},styleDisplay:"inline",animation:!0,animationDuration:100};s&&n({op:"overwrite-merge",object1:t,object2:s}),e.setControl(t)},t}}])}));

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue/dist/vue.min.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue.js v2.0.5
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e,10);return t||0===t?t:e}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Er.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return Pr.call(e)===Rr}function d(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function p(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){return e==t||!(!l(e)||!l(t))&&JSON.stringify(e)===JSON.stringify(t)}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function y(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function _(e){if(!Fr.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function b(e){return/native code/.test(e.toString())}function $(e){Qr.target&&Xr.push(Qr.target),Qr.target=e}function w(){Qr.target=Xr.pop()}function C(){ei.length=0,ti={},ni=ri=!1}function x(){for(ri=!0,ei.sort(function(e,t){return e.id-t.id}),ii=0;ii<ei.length;ii++){var e=ei[ii],t=e.id;ti[t]=null,e.run()}Zr&&Br.devtools&&Zr.emit("flush"),C()}function k(e){var t=e.id;if(null==ti[t]){if(ti[t]=!0,ri){for(var n=ei.length-1;n>=0&&ei[n].id>e.id;)n--;ei.splice(Math.max(n,ii)+1,0,e)}else ei.push(e);ni||(ni=!0,Gr(x))}}function A(e){si.clear(),O(e,si)}function O(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)O(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)O(e[r[n]],t)}}function T(e,t){e.__proto__=t}function S(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];y(e,o,t[o])}}function E(e){if(l(e)){var t;return i(e,"__ob__")&&e.__ob__ instanceof di?t=e.__ob__:fi.shouldConvert&&!Br._isServer&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(t=new di(e)),t}}function j(e,t,n,r){var i=new Qr,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=E(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return Qr.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&D(t)),t},set:function(t){var r=a?a.call(e):n;t!==r&&(s?s.call(e,t):n=t,c=E(t),i.notify())}})}}function L(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return void(e[t]=n);var r=e.__ob__;if(!(e._isVue||r&&r.vmCount))return r?(j(r.value,t,n),r.dep.notify(),n):void(e[t]=n)}function N(e,t){var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function D(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&D(t)}function M(e){e._watchers=[],P(e),R(e),I(e),F(e),H(e)}function P(e){var t=e.$options.props;if(t){var n=e.$options.propsData||{},r=e.$options._propKeys=Object.keys(t),i=!e.$parent;fi.shouldConvert=i;for(var o=function(i){var o=r[i];j(e,o,De(o,t,n,e))},a=0;a<r.length;a++)o(a);fi.shouldConvert=!0}}function R(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||V(e,n[o]);E(t),t.__ob__&&t.__ob__.vmCount++}function I(e){var t=e.$options.computed;if(t)for(var n in t){var r=t[n];"function"==typeof r?(pi.get=B(r,e),pi.set=p):(pi.get=r.get?r.cache!==!1?B(r.get,e):s(r.get,e):p,pi.set=r.set?s(r.set,e):p),Object.defineProperty(e,n,pi)}}function B(e,t){var n=new ai(t,e,p,{lazy:!0});return function(){return n.dirty&&n.evaluate(),Qr.target&&n.depend(),n.value}}function F(e){var t=e.$options.methods;if(t)for(var n in t)e[n]=null==t[n]?p:s(t[n],e)}function H(e){var t=e.$options.watch;if(t)for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)U(e,n,r[i]);else U(e,n,r)}}function U(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function z(e){var t={};t.get=function(){return this._data},Object.defineProperty(e.prototype,"$data",t),e.prototype.$set=L,e.prototype.$delete=N,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new ai(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function V(e,t){g(t)||Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(n){e._data[t]=n}})}function J(e){var t=new vi(e.tag,e.data,e.children,e.text,e.elm,e.ns,e.context,e.componentOptions);return t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function q(e){for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=J(e[n]);return t}function K(e,t,n,r){r+=t;var i=e.__injected||(e.__injected={});if(!i[r]){i[r]=!0;var o=e[t];o?e[t]=function(){o.apply(this,arguments),n.apply(this,arguments)}:e[t]=n}}function W(e,t,n,r,i){var o,a,s,c,u,l;for(o in e)if(a=e[o],s=t[o],a)if(s){if(a!==s)if(Array.isArray(s)){s.length=a.length;for(var f=0;f<s.length;f++)s[f]=a[f];e[o]=s}else s.fn=a,e[o]=s}else l="!"===o.charAt(0),u=l?o.slice(1):o,Array.isArray(a)?n(u,a.invoker=Z(a),l):(a.invoker||(c=a,a=e[o]={},a.fn=c,a.invoker=G(a)),n(u,a.invoker,l));else;for(o in t)e[o]||(u="!"===o.charAt(0)?o.slice(1):o,r(u,t[o].invoker))}function Z(e){return function(t){for(var n=arguments,r=1===arguments.length,i=0;i<e.length;i++)r?e[i](t):e[i].apply(null,n)}}function G(e){return function(t){var n=1===arguments.length;n?e.fn(t):e.fn.apply(null,arguments)}}function Y(e,t,n){if(o(e))return[Q(e)];if(Array.isArray(e)){for(var r=[],i=0,a=e.length;i<a;i++){var s=e[i],c=r[r.length-1];Array.isArray(s)?r.push.apply(r,Y(s,t,(n||"")+"_"+i)):o(s)?c&&c.text?c.text+=String(s):""!==s&&r.push(Q(s)):s instanceof vi&&(s.text&&c&&c.text?c.text+=s.text:(t&&X(s,t),s.tag&&null==s.key&&null!=n&&(s.key="__vlist"+n+"_"+i+"__"),r.push(s)))}return r}}function Q(e){return new vi(void 0,void 0,void 0,String(e))}function X(e,t){if(e.tag&&!e.ns&&(e.ns=t,e.children))for(var n=0,r=e.children.length;n<r;n++)X(e.children[n],t)}function ee(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function te(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ne(e){e.prototype._mount=function(e,t){var n=this;return n.$el=e,n.$options.render||(n.$options.render=hi),re(n,"beforeMount"),n._watcher=new ai(n,function(){n._update(n._render(),t)},p),t=!1,null==n.$vnode&&(n._isMounted=!0,re(n,"mounted")),n},e.prototype._update=function(e,t){var n=this;n._isMounted&&re(n,"beforeUpdate");var r=n.$el,i=mi;mi=n;var o=n._vnode;n._vnode=e,o?n.$el=n.__patch__(o,e):n.$el=n.__patch__(n.$el,e,t),mi=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el),n._isMounted&&re(n,"updated")},e.prototype._updateFromParent=function(e,t,n,r){var i=this,o=!(!i.$options._renderChildren&&!r);if(i.$options._parentVnode=n,i.$options._renderChildren=r,e&&i.$options.props){fi.shouldConvert=!1;for(var a=i.$options._propKeys||[],s=0;s<a.length;s++){var c=a[s];i[c]=De(c,i.$options.props,e,i)}fi.shouldConvert=!0,i.$options.propsData=e}if(t){var u=i.$options._parentListeners;i.$options._parentListeners=t,i._updateListeners(t,u)}o&&(i.$slots=be(r,i._renderContext),i.$forceUpdate())},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){re(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,re(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function re(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)n[r].call(e);e.$emit("hook:"+t)}function ie(e,t,n,r,i){if(e&&(l(e)&&(e=Ae.extend(e)),"function"==typeof e)){if(ke(e),!e.cid)if(e.resolved)e=e.resolved;else if(e=fe(e,function(){n.$forceUpdate()}),!e)return;t=t||{};var o=de(t,e);if(e.options.functional)return oe(e,o,t,n,r);var a=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),ve(t);var s=e.options.name||i,c=new vi("vue-component-"+e.cid+(s?"-"+s:""),t,void 0,void 0,void 0,void 0,n,{Ctor:e,propsData:o,listeners:a,tag:i,children:r});return c}}function oe(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var c in a)o[c]=De(c,a,t);var u=e.options.render.call(null,s(me,{_self:Object.create(r)}),{props:o,data:n,parent:r,children:Y(i),slots:function(){return be(i,r)}});return u instanceof vi&&(u.functionalContext=r,n.slot&&((u.data||(u.data={})).slot=n.slot)),u}function ae(e,t){var n=e.componentOptions,r={_isComponent:!0,parent:t,propsData:n.propsData,_componentTag:n.tag,_parentVnode:e,_parentListeners:n.listeners,_renderChildren:n.children},i=e.data.inlineTemplate;return i&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new n.Ctor(r)}function se(e,t){if(!e.child||e.child._isDestroyed){var n=e.child=ae(e,mi);n.$mount(t?e.elm:void 0,t)}}function ce(e,t){var n=t.componentOptions,r=t.child=e.child;r._updateFromParent(n.propsData,n.listeners,t,n.children)}function ue(e){e.child._isMounted||(e.child._isMounted=!0,re(e.child,"mounted")),e.data.keepAlive&&(e.child._inactive=!1,re(e.child,"activated"))}function le(e){e.child._isDestroyed||(e.data.keepAlive?(e.child._inactive=!0,re(e.child,"deactivated")):e.child.$destroy())}function fe(e,t){if(!e.requested){e.requested=!0;var n=e.pendingCallbacks=[t],r=!0,i=function(t){if(l(t)&&(t=Ae.extend(t)),e.resolved=t,!r)for(var i=0,o=n.length;i<o;i++)n[i](t)},o=function(e){},a=e(i,o);return a&&"function"==typeof a.then&&!e.resolved&&a.then(i,o),r=!1,e.resolved}e.pendingCallbacks.push(t)}function de(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Mr(s);pe(r,o,s,c,!0)||pe(r,i,s,c)||pe(r,a,s,c)}return r}}function pe(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function ve(e){e.hook||(e.hook={});for(var t=0;t<yi.length;t++){var n=yi[t],r=e.hook[n],i=gi[n];e.hook[n]=r?he(i,r):i}}function he(e,t){return function(n,r){e(n,r),t(n,r)}}function me(e,t,n){return t&&(Array.isArray(t)||"object"!=typeof t)&&(n=t,t=void 0),ge(this._self,e,t,n)}function ge(e,t,n,r){if(!n||!n.__ob__){if(!t)return hi();if("string"==typeof t){var i,o=Br.getTagNamespace(t);if(Br.isReservedTag(t))return new vi(t,n,Y(r,o),void 0,void 0,o,e);if(i=Ne(e.$options,"components",t))return ie(i,n,e,r,t);var a="foreignObject"===t?"xhtml":o;return new vi(t,n,Y(r,a),void 0,void 0,o,e)}return ie(t,n,e,r)}}function ye(e){e.$vnode=null,e._vnode=null,e._staticTrees=null,e._renderContext=e.$options._parentVnode&&e.$options._parentVnode.context,e.$slots=be(e.$options._renderChildren,e._renderContext),e.$createElement=s(me,e),e.$options.el&&e.$mount(e.$options.el)}function _e(n){function r(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&i(e[r],t+"_"+r,n);else i(e,t,n)}function i(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}n.prototype.$nextTick=function(e){Gr(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=q(e.$slots[o]);r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){if(Br.errorHandler)Br.errorHandler.call(null,t,e);else{if(Br._isServer)throw t;console.error(t)}a=e._vnode}return a instanceof vi||(a=hi()),a.parent=i,a},n.prototype._h=me,n.prototype._s=e,n.prototype._n=t,n.prototype._e=hi,n.prototype._q=h,n.prototype._i=m,n.prototype._m=function(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?q(n):J(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),r(n,"__static__"+e,!1),n)},n.prototype._o=function(e,t,n){return r(e,"__once__"+t+(n?"_"+n:""),!0),e};var o=function(e){return e};n.prototype._f=function(e){return Ne(this.$options,"filters",e,!0)||o},n.prototype._l=function(e,t){var n,r,i,o,a;if(Array.isArray(e))for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n},n.prototype._t=function(e,t){var n=this.$slots[e];return n||t},n.prototype._b=function(e,t,n){if(t)if(l(t)){Array.isArray(t)&&(t=d(t));for(var r in t)if("class"===r||"style"===r)e[r]=t[r];else{var i=n||Br.mustUseProp(r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});i[r]=t[r]}}else;return e},n.prototype._k=function(e){return Br.keyCodes[e]}}function be(e,t){var n={};if(!e)return n;for(var r,i,o=Y(e)||[],a=[],s=0,c=o.length;s<c;s++)if(i=o[s],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var u=n[r]||(n[r]=[]);"template"===i.tag?u.push.apply(u,i.children):u.push(i)}else a.push(i);return a.length&&(1!==a.length||" "!==a[0].text&&!a[0].isComment)&&(n.default=a),n}function $e(e){e._events=Object.create(null);var t=e.$options._parentListeners,n=s(e.$on,e),r=s(e.$off,e);e._updateListeners=function(t,i){W(t,i||{},n,r,e)},t&&e._updateListeners(t)}function we(e){e.prototype.$on=function(e,t){var n=this;return(n._events[e]||(n._events[e]=[])).push(t),n},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;var r=n._events[e];if(!r)return n;if(1===arguments.length)return n._events[e]=null,n;for(var i,o=r.length;o--;)if(i=r[o],i===t||i.fn===t){r.splice(o,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function Ce(e){e.prototype._init=function(e){var t=this;t._uid=_i++,t._isVue=!0,e&&e._isComponent?xe(t,e):t.$options=Le(ke(t.constructor),e||{},t),t._renderProxy=t,t._self=t,te(t),$e(t),re(t,"beforeCreate"),M(t),re(t,"created"),ye(t)}}function xe(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function ke(e){var t=e.options;if(e.super){var n=e.super.options,r=e.superOptions,i=e.extendOptions;n!==r&&(e.superOptions=n,i.render=t.render,i.staticRenderFns=t.staticRenderFns,t=e.options=Le(n,i),t.name&&(t.components[t.name]=e))}return t}function Ae(e){this._init(e)}function Oe(e,t){var n,r,o;for(n in t)r=e[n],o=t[n],i(e,n)?l(r)&&l(o)&&Oe(r,o):L(e,n,o);return e}function Te(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function Se(e,t){var n=Object.create(e||null);return t?u(n,t):n}function Ee(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=Lr(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Lr(a),o[i]=f(r)?r:{type:r};e.props=o}}function je(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function Le(e,t,n){function r(r){var i=wi[r]||Ci;l[r]=i(e[r],t[r],n,r)}Ee(t),je(t);var o=t.extends;if(o&&(e="function"==typeof o?Le(e,o.options,n):Le(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof Ae&&(c=c.options),e=Le(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function Ne(e,t,n,r){if("string"==typeof n){var i=e[t],o=i[n]||i[Lr(n)]||i[Nr(Lr(n))];return o}}function De(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(Re(o.type)&&(a&&!i(o,"default")?s=!1:""!==s&&s!==Mr(e)||(s=!0)),void 0===s){s=Me(r,o,e);var c=fi.shouldConvert;fi.shouldConvert=!0,E(s),fi.shouldConvert=c}return s}function Me(e,t,n){if(i(t,"default")){var r=t.default;return l(r),e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e[n]?e[n]:"function"==typeof r&&t.type!==Function?r.call(e):r}}function Pe(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function Re(e){if(!Array.isArray(e))return"Boolean"===Pe(e);for(var t=0,n=e.length;t<n;t++)if("Boolean"===Pe(e[t]))return!0;return!1}function Ie(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),e.installed=!0,this}}}function Be(e){e.mixin=function(t){e.options=Le(e.options,t)}}function Fe(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=0===n.cid;if(r&&e._Ctor)return e._Ctor;var i=e.name||n.options.name,o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Le(n.options,e),o.super=n,o.extend=n.extend,Br._assetTypes.forEach(function(e){o[e]=n[e]}),i&&(o.options.components[i]=o),o.superOptions=n.options,o.extendOptions=e,r&&(e._Ctor=o),o}}function He(e){Br._assetTypes.forEach(function(t){e[t]=function(n,r){return r?("component"===t&&f(r)&&(r.name=r.name||n,r=e.extend(r)),"directive"===t&&"function"==typeof r&&(r={bind:r,update:r}),this.options[t+"s"][n]=r,r):this.options[t+"s"][n]}})}function Ue(e){var t={};t.get=function(){return Br},Object.defineProperty(e,"config",t),e.util=xi,e.set=L,e.delete=N,e.nextTick=Gr,e.options=Object.create(null),Br._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),u(e.options.components,Ai),Ie(e),Be(e),Fe(e),He(e)}function ze(e){for(var t=e.data,n=e,r=e;r.child;)r=r.child._vnode,r.data&&(t=Ve(r.data,t));for(;n=n.parent;)n.data&&(t=Ve(t,n.data));return Je(t)}function Ve(e,t){return{staticClass:qe(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function Je(e){var t=e.class,n=e.staticClass;return n||t?qe(n,Ke(t)):""}function qe(e,t){return e?t?e+" "+t:e:t||""}function Ke(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=Ke(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function We(e){return Fi(e)?"svg":"math"===e?"math":void 0}function Ze(e){if(!Ur)return!0;if(Ui(e))return!1;if(e=e.toLowerCase(),null!=zi[e])return zi[e];var t=document.createElement(e);return e.indexOf("-")>-1?zi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:zi[e]=/HTMLUnknownElement/.test(t.toString())}function Ge(e){if("string"==typeof e){if(e=document.querySelector(e),!e)return document.createElement("div")}return e}function Ye(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&"multiple"in t.data.attrs&&n.setAttribute("multiple","multiple"),n)}function Qe(e,t){return document.createElementNS(Mi[e],t)}function Xe(e){return document.createTextNode(e)}function et(e){return document.createComment(e)}function tt(e,t,n){e.insertBefore(t,n)}function nt(e,t){e.removeChild(t)}function rt(e,t){e.appendChild(t)}function it(e){return e.parentNode}function ot(e){return e.nextSibling}function at(e){return e.tagName}function st(e,t){e.textContent=t}function ct(e){return e.childNodes}function ut(e,t,n){e.setAttribute(t,n)}function lt(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.child||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].push(o):a[n]=[o]:a[n]=o}}function ft(e){return null==e}function dt(e){return null!=e}function pt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function vt(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,dt(i)&&(o[i]=r);return o}function ht(e){function t(e){return new vi(C.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0===--n.listeners&&r(e)}return n.listeners=t,n}function r(e){var t=C.parentNode(e);t&&C.removeChild(t,e)}function i(e,t,n){var r,i=e.data;if(e.isRootInsert=!n,dt(i)&&(dt(r=i.hook)&&dt(r=r.init)&&r(e),dt(r=e.child)))return u(e,t),e.elm;var o=e.children,s=e.tag;return dt(s)?(e.elm=e.ns?C.createElementNS(e.ns,s):C.createElement(s,e),l(e),a(e,o,t),dt(i)&&c(e,t)):e.isComment?e.elm=C.createComment(e.text):e.elm=C.createTextNode(e.text),e.elm}function a(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)C.appendChild(e.elm,i(t[r],n,!0));else o(e.text)&&C.appendChild(e.elm,C.createTextNode(e.text))}function s(e){for(;e.child;)e=e.child._vnode;return dt(e.tag)}function c(e,t){for(var n=0;n<$.create.length;++n)$.create[n](qi,e);_=e.data.hook,dt(_)&&(_.create&&_.create(qi,e),_.insert&&t.push(e))}function u(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.child.$el,s(e)?(c(e,t),l(e)):(lt(e),t.push(e))}function l(e){var t;dt(t=e.context)&&dt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,""),dt(t=mi)&&t!==e.context&&dt(t=t.$options._scopeId)&&C.setAttribute(e.elm,t,"")}function f(e,t,n,r,o,a){for(;r<=o;++r)C.insertBefore(e,i(n[r],a),t)}function d(e){var t,n,r=e.data;if(dt(r))for(dt(t=r.hook)&&dt(t=t.destroy)&&t(e),t=0;t<$.destroy.length;++t)$.destroy[t](e);if(dt(t=e.children))for(n=0;n<e.children.length;++n)d(e.children[n])}function p(e,t,n,r){for(;n<=r;++n){var i=t[n];dt(i)&&(dt(i.tag)?(v(i),d(i)):C.removeChild(e,i.elm))}}function v(e,t){if(t||dt(e.data)){var i=$.remove.length+1;for(t?t.listeners+=i:t=n(e.elm,i),dt(_=e.child)&&dt(_=_._vnode)&&dt(_.data)&&v(_,t),_=0;_<$.remove.length;++_)$.remove[_](e,t);dt(_=e.data.hook)&&dt(_=_.remove)?_(e,t):t()}else r(e.elm)}function h(e,t,n,r,o){for(var a,s,c,u,l=0,d=0,v=t.length-1,h=t[0],g=t[v],y=n.length-1,_=n[0],b=n[y],$=!o;l<=v&&d<=y;)ft(h)?h=t[++l]:ft(g)?g=t[--v]:pt(h,_)?(m(h,_,r),h=t[++l],_=n[++d]):pt(g,b)?(m(g,b,r),g=t[--v],b=n[--y]):pt(h,b)?(m(h,b,r),$&&C.insertBefore(e,h.elm,C.nextSibling(g.elm)),h=t[++l],b=n[--y]):pt(g,_)?(m(g,_,r),$&&C.insertBefore(e,g.elm,h.elm),g=t[--v],_=n[++d]):(ft(a)&&(a=vt(t,l,v)),s=dt(_.key)?a[_.key]:null,ft(s)?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(c=t[s],c.tag!==_.tag?(C.insertBefore(e,i(_,r),h.elm),_=n[++d]):(m(c,_,r),t[s]=void 0,$&&C.insertBefore(e,_.elm,h.elm),_=n[++d])));l>v?(u=ft(n[y+1])?null:n[y+1].elm,f(e,u,n,d,y,r)):d>y&&p(e,t,l,v)}function m(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return void(t.elm=e.elm);var i,o=t.data,a=dt(o);a&&dt(i=o.hook)&&dt(i=i.prepatch)&&i(e,t);var c=t.elm=e.elm,u=e.children,l=t.children;if(a&&s(t)){for(i=0;i<$.update.length;++i)$.update[i](e,t);dt(i=o.hook)&&dt(i=i.update)&&i(e,t)}ft(t.text)?dt(u)&&dt(l)?u!==l&&h(c,u,l,n,r):dt(l)?(dt(e.text)&&C.setTextContent(c,""),f(c,null,l,0,l.length-1,n)):dt(u)?p(c,u,0,u.length-1):dt(e.text)&&C.setTextContent(c,""):e.text!==t.text&&C.setTextContent(c,t.text),a&&dt(i=o.hook)&&dt(i=i.postpatch)&&i(e,t)}}function g(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function y(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(dt(i)&&(dt(_=i.hook)&&dt(_=_.init)&&_(t,!0),dt(_=t.child)))return u(t,n),!0;if(dt(r)){if(dt(o)){var s=C.childNodes(e);if(s.length){var l=!0;if(s.length!==o.length)l=!1;else for(var f=0;f<o.length;f++)if(!y(s[f],o[f],n)){l=!1;break}if(!l)return!1}else a(t,o,n)}dt(i)&&c(t,n)}return!0}var _,b,$={},w=e.modules,C=e.nodeOps;for(_=0;_<Ki.length;++_)for($[Ki[_]]=[],b=0;b<w.length;++b)void 0!==w[b][Ki[_]]&&$[Ki[_]].push(w[b][Ki[_]]);return function(e,n,r,o){if(!n)return void(e&&d(e));var a,c,u=!1,l=[];if(e){var f=dt(e.nodeType);if(!f&&pt(e,n))m(e,n,l,o);else{if(f){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&y(e,n,l))return g(n,l,!0),e;e=t(e)}if(a=e.elm,c=C.parentNode(a),i(n,l),n.parent&&(n.parent.elm=n.elm,s(n)))for(var v=0;v<$.create.length;++v)$.create[v](qi,n.parent);null!==c?(C.insertBefore(c,n.elm,C.nextSibling(a)),p(c,[e],0,0)):dt(e.tag)&&d(e)}}else u=!0,i(n,l);return g(n,l,u),n.elm}}function mt(e,t){if(e.data.directives||t.data.directives){var n,r,i,o=e===qi,a=gt(e.data.directives,e.context),s=gt(t.data.directives,t.context),c=[],u=[];for(n in s)r=a[n],i=s[n],r?(i.oldValue=r.value,_t(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(_t(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var l=function(){c.forEach(function(n){_t(n,"inserted",t,e)})};o?K(t.data.hook||(t.data.hook={}),"insert",l,"dir-insert"):l()}if(u.length&&K(t.data.hook||(t.data.hook={}),"postpatch",function(){u.forEach(function(n){_t(n,"componentUpdated",t,e)})},"dir-postpatch"),!o)for(n in a)s[n]||_t(a[n],"unbind",e)}}function gt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=Zi),n[yt(i)]=i,i.def=Ne(t.$options,"directives",i.name,!0);return n}function yt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function _t(e,t,n,r){var i=e.def&&e.def[t];i&&i(n.elm,e,n,r)}function bt(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=u({},s));for(n in s)r=s[n],i=a[n],i!==r&&$t(o,n,r);for(n in a)null==s[n]&&(Li(n)?o.removeAttributeNS(ji,Ni(n)):Si(n)||o.removeAttribute(n))}}function $t(e,t,n){Ei(t)?Di(n)?e.removeAttribute(t):e.setAttribute(t,t):Si(t)?e.setAttribute(t,Di(n)||"false"===n?"false":"true"):Li(t)?Di(n)?e.removeAttributeNS(ji,Ni(t)):e.setAttributeNS(ji,t,n):Di(n)?e.removeAttribute(t):e.setAttribute(t,n)}function wt(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=ze(t),a=n._transitionClasses;a&&(o=qe(o,Ke(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function Ct(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{},i=t.elm._v_add||(t.elm._v_add=function(e,n,r){t.elm.addEventListener(e,n,r)}),o=t.elm._v_remove||(t.elm._v_remove=function(e,n){t.elm.removeEventListener(e,n)});W(n,r,i,o,t.context)}}function xt(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if("textContent"!==n&&"innerHTML"!==n||!t.children||(t.children.length=0),r=a[n],"value"===n){i._value=r;var s=null==r?"":String(r);i.value===s||i.composing||(i.value=s)}else i[n]=r}}function kt(e,t){if(e.data&&e.data.style||t.data.style){var n,r,i=t.elm,o=e.data.style||{},a=t.data.style||{};if("string"==typeof a)return void(i.style.cssText=a);var s=a.__ob__;Array.isArray(a)&&(a=t.data.style=d(a)),s&&(a=t.data.style=u({},a));for(r in o)null==a[r]&&no(i,r,"");for(r in a)n=a[r],n!==o[r]&&no(i,r,null==n?"":n)}}function At(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+e.getAttribute("class")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Ot(e,t){if(t&&t.trim())if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+e.getAttribute("class")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Tt(e){vo(function(){vo(e)})}function St(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),At(e,t)}function Et(e,t){e._transitionClasses&&r(e._transitionClasses,t),Ot(e,t)}function jt(e,t,n){var r=Lt(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===so?lo:po,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Lt(e,t){var n,r=window.getComputedStyle(e),i=r[uo+"Delay"].split(", "),o=r[uo+"Duration"].split(", "),a=Nt(i,o),s=r[fo+"Delay"].split(", "),c=r[fo+"Duration"].split(", "),u=Nt(s,c),l=0,f=0;t===so?a>0&&(n=so,l=a,f=o.length):t===co?u>0&&(n=co,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?so:co:null,f=n?n===so?o.length:c.length:0);var d=n===so&&ho.test(r[uo+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:d}}function Nt(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Dt(t)+Dt(e[n])}))}function Dt(e){return 1e3*Number(e.slice(0,-1))}function Mt(e){var t=e.elm;t._leaveCb&&(t._leaveCb.cancelled=!0,t._leaveCb());var n=Rt(e.data.transition);if(n&&!t._enterCb&&1===t.nodeType){var r=n.css,i=n.type,o=n.enterClass,a=n.enterActiveClass,s=n.appearClass,c=n.appearActiveClass,u=n.beforeEnter,l=n.enter,f=n.afterEnter,d=n.enterCancelled,p=n.beforeAppear,v=n.appear,h=n.afterAppear,m=n.appearCancelled,g=mi.$vnode,y=g&&g.parent?g.parent.context:mi,_=!y._isMounted||!e.isRootInsert;if(!_||v||""===v){var b=_?s:o,$=_?c:a,w=_?p||u:u,C=_&&"function"==typeof v?v:l,x=_?h||f:f,k=_?m||d:d,A=r!==!1&&!Jr,O=C&&(C._length||C.length)>1,T=t._enterCb=It(function(){A&&Et(t,$),T.cancelled?(A&&Et(t,b),k&&k(t)):x&&x(t),t._enterCb=null});e.data.show||K(e.data.hook||(e.data.hook={}),"insert",function(){var n=t.parentNode,r=n&&n._pending&&n._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),C&&C(t,T)},"transition-insert"),w&&w(t),A&&(St(t,b),St(t,$),Tt(function(){Et(t,b),T.cancelled||O||jt(t,i,T)})),e.data.show&&C&&C(t,T),A||O||T()}}}function Pt(e,t){function n(){m.cancelled||(e.data.show||((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),u&&u(r),v&&(St(r,s),St(r,c),Tt(function(){Et(r,s),m.cancelled||h||jt(r,a,m)})),l&&l(r,m),v||h||m())}var r=e.elm;r._enterCb&&(r._enterCb.cancelled=!0,r._enterCb());var i=Rt(e.data.transition);if(!i)return t();if(!r._leaveCb&&1===r.nodeType){var o=i.css,a=i.type,s=i.leaveClass,c=i.leaveActiveClass,u=i.beforeLeave,l=i.leave,f=i.afterLeave,d=i.leaveCancelled,p=i.delayLeave,v=o!==!1&&!Jr,h=l&&(l._length||l.length)>1,m=r._leaveCb=It(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),v&&Et(r,c),m.cancelled?(v&&Et(r,s),d&&d(r)):(t(),f&&f(r)),r._leaveCb=null});p?p(n):n()}}function Rt(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,mo(e.name||"v")),u(t,e),t}return"string"==typeof e?mo(e):void 0}}function It(e){var t=!1;return function(){t||(t=!0,e())}}function Bt(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,Ht(a))>-1,a.selected!==o&&(a.selected=o);else if(h(Ht(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Ft(e,t){for(var n=0,r=t.length;n<r;n++)if(h(Ht(t[n]),e))return!1;return!0}function Ht(e){return"_value"in e?e._value:e.value}function Ut(e){e.target.composing=!0}function zt(e){e.target.composing=!1,Vt(e.target,"input")}function Vt(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Jt(e){return!e.child||e.data&&e.data.transition?e:Jt(e.child._vnode)}function qt(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?qt(ee(t.children)):e}function Kt(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;
for(var o in i)t[Lr(o)]=i[o].fn;return t}function Wt(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function Zt(e){for(;e=e.parent;)if(e.data.transition)return!0}function Gt(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Yt(e){e.data.newPos=e.elm.getBoundingClientRect()}function Qt(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function Xt(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function en(e){return Eo.innerHTML=e,Eo.textContent}function tn(e,t){return t&&(e=e.replace(ba,"\n")),e.replace(ya,"<").replace(_a,">").replace($a,"&").replace(wa,'"')}function nn(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(Ro);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(Io))&&(o=e.match(Do));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;u&&("p"===s&&Bi(n)&&o("",s),Ii(n)&&s===n&&o("",n));for(var i=l(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),d=0;d<a;d++){var p=e.attrs[d];zo&&p[0].indexOf('""')===-1&&(""===p[3]&&delete p[3],""===p[4]&&delete p[4],""===p[5]&&delete p[5]);var v=p[3]||p[4]||p[5]||"";f[d]={name:p[1],value:tn(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,attrs:f}),s=n,r=""),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r,i){var o;if(null==r&&(r=f),null==i&&(i=f),n){var a=n.toLowerCase();for(o=c.length-1;o>=0&&c[o].tag.toLowerCase()!==a;o--);}else o=0;if(o>=0){for(var u=c.length-1;u>=o;u--)t.end&&t.end(c[u].tag,r,i);c.length=o,s=o&&c[o-1].tag}else"br"===n.toLowerCase()?t.start&&t.start(n,[],!0,r,i):"p"===n.toLowerCase()&&(t.start&&t.start(n,[],!1,r,i),t.end&&t.end(n,r,i))}for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Ir,f=0;e;){if(a=e,s&&ma(s,t.sfc,c)){var d=s.toLowerCase(),p=ga[d]||(ga[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=0,h=e.replace(p,function(e,n,r){return v=r.length,"script"!==d&&"style"!==d&&"noscript"!==d&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,o("</"+d+">",d,f-v,f)}else{var m=e.indexOf("<");if(0===m){if(Ho.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(Uo.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(Fo);if(_){n(_[0].length);continue}var b=e.match(Bo);if(b){var $=f;n(b[0].length),o(b[0],b[1],$,f);continue}var w=r();if(w){i(w);continue}}var C=void 0,x=void 0,k=void 0;if(m>0){for(x=e.slice(m);!(Bo.test(x)||Ro.test(x)||Ho.test(x)||Uo.test(x)||(k=x.indexOf("<",1),k<0));)m+=k,x=e.slice(m);C=e.substring(0,m),n(m)}m<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===a&&t.chars){t.chars(e);break}}o()}function rn(e){function t(){(a||(a=[])).push(e.slice(d,i).trim()),d=i+1}var n,r,i,o,a,s=!1,c=!1,u=0,l=0,f=0,d=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!s);else if(c)34===n&&92!==r&&(c=!c);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||u||l||f)switch(n){case 34:c=!0;break;case 39:s=!0;break;case 40:f++;break;case 41:f--;break;case 91:l++;break;case 93:l--;break;case 123:u++;break;case 125:u--}else void 0===o?(d=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==d&&t(),a)for(i=0;i<a.length;i++)o=on(o,a[i]);return o}function on(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function an(e,t){var n=t?ka(t):Ca;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=rn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function sn(e){console.error("[Vue parser]: "+e)}function cn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function un(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function ln(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function fn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function dn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function pn(e,t,n){var r=vn(e,":"+t)||vn(e,"v-bind:"+t);if(null!=r)return r;if(n!==!1){var i=vn(e,t);if(null!=i)return JSON.stringify(i)}}function vn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function hn(e,t){Vo=t.warn||sn,Jo=t.getTagNamespace||Ir,qo=t.mustUseProp||Ir,Ko=t.isPreTag||Ir,Wo=cn(t.modules,"preTransformNode"),Zo=cn(t.modules,"transformNode"),Go=cn(t.modules,"postTransformNode"),Yo=t.delimiters;var n,r,i=[],o=t.preserveWhitespace!==!1,a=!1,s=!1;return nn(e,{expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,o,c){function u(e){}var l=r&&r.ns||Jo(e);t.isIE&&"svg"===l&&(o=Ln(o));var f={type:1,tag:e,attrsList:o,attrsMap:Sn(o,t.isIE),parent:r,children:[]};l&&(f.ns=l),jn(f)&&(f.forbidden=!0);for(var d=0;d<Wo.length;d++)Wo[d](f,t);if(a||(mn(f),f.pre&&(a=!0)),Ko(f.tag)&&(s=!0),a)gn(f);else{bn(f),$n(f),Cn(f),yn(f),f.plain=!f.key&&!o.length,_n(f),xn(f),kn(f);for(var p=0;p<Zo.length;p++)Zo[p](f,t);An(f)}n?i.length||n.if&&f.else&&(u(f),n.elseBlock=f):(n=f,u(n)),r&&!f.forbidden&&(f.else?wn(f,r):(r.children.push(f),f.parent=r)),c||(r=f,i.push(f));for(var v=0;v<Go.length;v++)Go[v](f,t)},end:function(){var e=i[i.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&e.children.pop(),i.length-=1,r=i[i.length-1],e.pre&&(a=!1),Ko(e.tag)&&(s=!1)},chars:function(e){if(r&&(e=s||e.trim()?Da(e):o&&r.children.length?" ":"")){var t;!a&&" "!==e&&(t=an(e,Yo))?r.children.push({type:2,expression:t,text:e}):(e=e.replace(Na,""),r.children.push({type:3,text:e}))}}}),n}function mn(e){null!=vn(e,"v-pre")&&(e.pre=!0)}function gn(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function yn(e){var t=pn(e,"key");t&&(e.key=t)}function _n(e){var t=pn(e,"ref");t&&(e.ref=t,e.refInFor=On(e))}function bn(e){var t;if(t=vn(e,"v-for")){var n=t.match(Oa);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Ta);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function $n(e){var t=vn(e,"v-if");t&&(e.if=t),null!=vn(e,"v-else")&&(e.else=!0)}function wn(e,t){var n=En(t.children);n&&n.if&&(n.elseBlock=e)}function Cn(e){var t=vn(e,"v-once");null!=t&&(e.once=!0)}function xn(e){if("slot"===e.tag)e.slotName=pn(e,"name");else{var t=pn(e,"slot");t&&(e.slotTarget=t)}}function kn(e){var t;(t=pn(e,"is"))&&(e.component=t),null!=vn(e,"inline-template")&&(e.inlineTemplate=!0)}function An(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Aa.test(r))if(e.hasBindings=!0,s=Tn(r),s&&(r=r.replace(La,"")),Sa.test(r))r=r.replace(Sa,""),s&&s.prop&&(c=!0,r=Lr(r),"innerHtml"===r&&(r="innerHTML")),c||qo(r)?un(e,r,o):ln(e,r,o);else if(Ea.test(r))r=r.replace(Ea,""),dn(e,r,o,s);else{r=r.replace(Aa,"");var l=r.match(ja);l&&(a=l[1])&&(r=r.slice(0,-(a.length+1))),fn(e,r,i,o,a,s)}else ln(e,r,JSON.stringify(o))}function On(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Tn(e){var t=e.match(La);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Sn(e,t){for(var n={},r=0,i=e.length;r<i;r++)n[e[r].name]=e[r].value;return n}function En(e){for(var t=e.length;t--;)if(e[t].tag)return e[t]}function jn(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Ln(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ma.test(r.name)||(r.name=r.name.replace(Pa,""),t.push(r))}return t}function Nn(e,t){e&&(Qo=Ra(t.staticKeys||""),Xo=t.isReservedTag||function(){return!1},Mn(e),Pn(e,!1))}function Dn(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Mn(e){if(e.static=Rn(e),1===e.type)for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Mn(r),r.static||(e.static=!1)}}function Pn(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static)return void(e.staticRoot=!0);if(e.children)for(var n=0,r=e.children.length;n<r;n++)Pn(e.children[n],t||!!e.for)}}function Rn(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Sr(e.tag)||!Xo(e.tag)||In(e)||!Object.keys(e).every(Qo))))}function In(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function Bn(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+Fn(e[r])+",";return n.slice(0,-1)+"}"}function Fn(e){if(e){if(Array.isArray(e))return"["+e.map(Fn).join(",")+"]";if(e.modifiers){var t="",n=[];for(var r in e.modifiers)Fa[r]?t+=Fa[r]:n.push(r);n.length&&(t=Hn(n)+t);var i=Ia.test(e.value)?e.value+"($event)":e.value;return"function($event){"+t+i+"}"}return Ia.test(e.value)?e.value:"function($event){"+e.value+"}"}return"function(){}"}function Hn(e){var t=1===e.length?Un(e[0]):Array.prototype.concat.apply([],e.map(Un));return Array.isArray(t)?"if("+t.map(function(e){return"$event.keyCode!=="+e}).join("&&")+")return;":"if($event.keyCode!=="+t+")return;"}function Un(e){return parseInt(e,10)||Ba[e]||"_k("+JSON.stringify(e)+")"}function zn(e,t){e.wrapData=function(e){return"_b("+e+","+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Vn(e,t){var n=ia,r=ia=[],i=oa;oa=0,aa=t,ea=t.warn||sn,ta=cn(t.modules,"transformCode"),na=cn(t.modules,"genData"),ra=t.directives||{};var o=e?Jn(e):'_h("div")';return ia=n,oa=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Jn(e){if(e.staticRoot&&!e.staticProcessed)return qn(e);if(e.once&&!e.onceProcessed)return Kn(e);if(e.for&&!e.forProcessed)return Gn(e);if(e.if&&!e.ifProcessed)return Wn(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return nr(e);var t;if(e.component)t=rr(e.component,e);else{var n=e.plain?void 0:Yn(e),r=e.inlineTemplate?null:Xn(e);t="_h('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<ta.length;i++)t=ta[i](e,t);return t}return Xn(e)||"void 0"}function qn(e){return e.staticProcessed=!0,ia.push("with(this){return "+Jn(e)+"}"),"_m("+(ia.length-1)+(e.staticInFor?",true":"")+")"}function Kn(e){if(e.onceProcessed=!0,e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Jn(e)+","+oa++ +(t?","+t:"")+")":Jn(e)}return qn(e)}function Wn(e){var t=e.if;return e.ifProcessed=!0,"("+t+")?"+Jn(e)+":"+Zn(e)}function Zn(e){return e.elseBlock?Jn(e.elseBlock):"_e()"}function Gn(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Jn(e)+"})"}function Yn(e){var t="{",n=Qn(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.component&&(t+='tag:"'+e.tag+'",'),e.slotTarget&&(t+="slot:"+e.slotTarget+",");for(var r=0;r<na.length;r++)t+=na[r](e);if(e.attrs&&(t+="attrs:{"+ir(e.attrs)+"},"),e.props&&(t+="domProps:{"+ir(e.props)+"},"),e.events&&(t+=Bn(e.events)+","),e.nativeEvents&&(t+=Bn(e.nativeEvents,!0)+","),e.inlineTemplate){var i=e.children[0];if(1===i.type){var o=Vn(i,aa);t+="inlineTemplate:{render:function(){"+o.render+"},staticRenderFns:["+o.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function Qn(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=ra[i.name]||Ha[i.name];c&&(o=!!c(e,i,ea)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function Xn(e){if(e.children.length)return"["+e.children.map(er).join(",")+"]"}function er(e){return 1===e.type?Jn(e):tr(e)}function tr(e){return 2===e.type?e.expression:JSON.stringify(e.text)}function nr(e){var t=e.slotName||'"default"',n=Xn(e);return"_t("+t+(n?","+n:"")+")"}function rr(e,t){var n=t.inlineTemplate?null:Xn(t);return"_h("+e+","+Yn(t)+(n?","+n:"")+")"}function ir(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+r.value+","}return t.slice(0,-1)}function or(e,t){var n=hn(e.trim(),t);Nn(n,t);var r=Vn(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function ar(e,t){var n=(t.warn||sn,vn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=pn(e,"class",!1);r&&(e.classBinding=r)}function sr(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function cr(e){var t=pn(e,"style",!1);t&&(e.styleBinding=t)}function ur(e){return e.styleBinding?"style:("+e.styleBinding+"),":""}function lr(e){if(ca=e,sa=ca.length,la=fa=da=0,e.indexOf("[")<0)return{exp:e,idx:null};for(;!dr();)ua=fr(),pr(ua)?hr(ua):91===ua&&vr(ua);return{exp:e.substring(0,fa),idx:e.substring(fa+1,da)}}function fr(){return ca.charCodeAt(++la)}function dr(){return la>=sa}function pr(e){return 34===e||39===e}function vr(e){var t=1;for(fa=la;!dr();)if(e=fr(),pr(e))hr(e);else if(91===e&&t++,93===e&&t--,0===t){da=la;break}}function hr(e){for(var t=e;!dr()&&(e=fr(),e!==t););}function mr(e,t,n){pa=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;return"select"===o?br(e,r,i):"input"===o&&"checkbox"===a?gr(e,r,i):"input"===o&&"radio"===a?yr(e,r,i):_r(e,r,i),!0}function gr(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null",o=pn(e,"true-value")||"true",a=pn(e,"false-value")||"false";un(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1:_q("+t+","+o+")"),dn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function yr(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null";i=r?"_n("+i+")":i,un(e,"checked","_q("+t+","+i+")"),dn(e,"change",$r(t,i),null,!0)}function _r(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=o||Vr&&"range"===r?"change":"input",u=!o&&"range"!==r,l="input"===e.tag||"textarea"===e.tag,f=l?"$event.target.value"+(s?".trim()":""):"$event";f=a||"number"===r?"_n("+f+")":f;var d=$r(t,f);l&&u&&(d="if($event.target.composing)return;"+d),un(e,"value",l?"_s("+t+")":"("+t+")"),dn(e,c,d,null,!0)}function br(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})"+(null==e.attrsMap.multiple?"[0]":""),o=$r(t,i);dn(e,"change",o,null,!0)}function $r(e,t){var n=lr(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function wr(e,t){t.value&&un(e,"textContent","_s("+t.value+")")}function Cr(e,t){t.value&&un(e,"innerHTML","_s("+t.value+")")}function xr(e,t){return t=t?u(u({},Ka),t):Ka,or(e,t)}function kr(e,t,n){var r=(t&&t.warn||$i,t&&t.delimiters?String(t.delimiters)+e:e);if(qa[r])return qa[r];var i={},o=xr(e,t);i.render=Ar(o.render);var a=o.staticRenderFns.length;i.staticRenderFns=new Array(a);for(var s=0;s<a;s++)i.staticRenderFns[s]=Ar(o.staticRenderFns[s]);return qa[r]=i}function Ar(e){try{return new Function(e)}catch(e){return p}}function Or(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Tr,Sr=n("slot,component",!0),Er=Object.prototype.hasOwnProperty,jr=/-(\w)/g,Lr=a(function(e){return e.replace(jr,function(e,t){return t?t.toUpperCase():""})}),Nr=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Dr=/([^-])([A-Z])/g,Mr=a(function(e){return e.replace(Dr,"$1-$2").replace(Dr,"$1-$2").toLowerCase()}),Pr=Object.prototype.toString,Rr="[object Object]",Ir=function(){return!1},Br={optionMergeStrategies:Object.create(null),silent:!1,devtools:!1,errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:Ir,isUnknownElement:Ir,getTagNamespace:p,mustUseProp:Ir,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100,_isServer:!1},Fr=/[^\w.$]/,Hr="__proto__"in{},Ur="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),zr=Ur&&window.navigator.userAgent.toLowerCase(),Vr=zr&&/msie|trident/.test(zr),Jr=zr&&zr.indexOf("msie 9.0")>0,qr=zr&&zr.indexOf("edge/")>0,Kr=zr&&zr.indexOf("android")>0,Wr=zr&&/iphone|ipad|ipod|ios/.test(zr),Zr=Ur&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Gr=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&b(Promise)){var i=Promise.resolve();t=function(){i.then(e),Wr&&setTimeout(p)}}else if("undefined"==typeof MutationObserver||!b(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var o=1,a=new MutationObserver(e),s=document.createTextNode(String(o));a.observe(s,{characterData:!0}),t=function(){o=(o+1)%2,s.data=String(o)}}return function(e,i){var o=i?function(){e.call(i)}:e;n.push(o),r||(r=!0,t())}}();Tr="undefined"!=typeof Set&&b(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return void 0!==this.set[e]},e.prototype.add=function(e){this.set[e]=1},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Yr=0,Qr=function(){this.id=Yr++,this.subs=[]};Qr.prototype.addSub=function(e){this.subs.push(e)},Qr.prototype.removeSub=function(e){r(this.subs,e)},Qr.prototype.depend=function(){Qr.target&&Qr.target.addDep(this)},Qr.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},Qr.target=null;var Xr=[],ei=[],ti={},ni=!1,ri=!1,ii=0,oi=0,ai=function(e,t,n,r){void 0===r&&(r={}),this.vm=e,e._watchers.push(this),this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.expression=t.toString(),this.cb=n,this.id=++oi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Tr,this.newDepIds=new Tr,"function"==typeof t?this.getter=t:(this.getter=_(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};ai.prototype.get=function(){$(this);var e=this.getter.call(this.vm,this.vm);return this.deep&&A(e),w(),this.cleanupDeps(),e},ai.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ai.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},ai.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():k(this)},ai.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){if(!Br.errorHandler)throw e;Br.errorHandler.call(null,e,this.vm)}else this.cb.call(this.vm,e,t)}}},ai.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ai.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},ai.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var si=new Tr,ci=Array.prototype,ui=Object.create(ci);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=ci[e];y(ui,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var li=Object.getOwnPropertyNames(ui),fi={shouldConvert:!0,isSettingProps:!1},di=function(e){if(this.value=e,this.dep=new Qr,this.vmCount=0,y(e,"__ob__",this),Array.isArray(e)){var t=Hr?T:S;t(e,ui,li),this.observeArray(e)}else this.walk(e)};di.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)j(e,t[n],e[t[n]])},di.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)E(e[t])};var pi={enumerable:!0,configurable:!0,get:p,set:p},vi=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=o,this.context=a,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=s,this.child=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},hi=function(){var e=new vi;return e.text="",e.isComment=!0,e},mi=null,gi={init:se,prepatch:ce,insert:ue,destroy:le},yi=Object.keys(gi),_i=0;Ce(Ae),z(Ae),we(Ae),ne(Ae),_e(Ae);var bi,$i=p,wi=Br.optionMergeStrategies;wi.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?Oe(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return Oe(t.call(this),e.call(this))}:t:e},Br._lifecycleHooks.forEach(function(e){wi[e]=Te}),Br._assetTypes.forEach(function(e){wi[e+"s"]=Se}),wi.watch=function(e,t){if(!t)return e;if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},wi.props=wi.methods=wi.computed=function(e,t){if(!t)return e;if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var Ci=function(e,t){return void 0===t?e:t},xi=Object.freeze({defineReactive:j,_toString:e,toNumber:t,makeMap:n,isBuiltInTag:Sr,remove:r,hasOwn:i,isPrimitive:o,cached:a,camelize:Lr,capitalize:Nr,hyphenate:Mr,bind:s,toArray:c,extend:u,isObject:l,isPlainObject:f,toObject:d,noop:p,no:Ir,genStaticKeys:v,looseEqual:h,looseIndexOf:m,isReserved:g,def:y,parsePath:_,hasProto:Hr,inBrowser:Ur,UA:zr,isIE:Vr,isIE9:Jr,isEdge:qr,isAndroid:Kr,isIOS:Wr,devtools:Zr,nextTick:Gr,get _Set(){return Tr},mergeOptions:Le,resolveAsset:Ne,warn:$i,formatComponentName:bi,validateProp:De}),ki={name:"keep-alive",abstract:!0,created:function(){this.cache=Object.create(null)},render:function(){var e=ee(this.$slots.default);if(e&&e.componentOptions){var t=e.componentOptions,n=null==e.key?t.Ctor.cid+"::"+t.tag:e.key;this.cache[n]?e.child=this.cache[n].child:this.cache[n]=e,e.data.keepAlive=!0}return e},destroyed:function(){var e=this;for(var t in this.cache){var n=e.cache[t];re(n.child,"deactivated"),n.child.$destroy()}}},Ai={KeepAlive:ki};Ue(Ae),Object.defineProperty(Ae.prototype,"$isServer",{get:function(){return Br._isServer}}),Ae.version="2.0.5";var Oi,Ti=n("value,selected,checked,muted"),Si=n("contenteditable,draggable,spellcheck"),Ei=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ji="http://www.w3.org/1999/xlink",Li=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ni=function(e){return Li(e)?e.slice(6,e.length):""},Di=function(e){return null==e||e===!1},Mi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML",xhtml:"http://www.w3.org/1999/xhtm"},Pi=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),Ri=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr",!0),Ii=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source",!0),Bi=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track",!0),Fi=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Hi=function(e){return"pre"===e},Ui=function(e){return Pi(e)||Fi(e)},zi=Object.create(null),Vi=Object.freeze({createElement:Ye,createElementNS:Qe,createTextNode:Xe,createComment:et,insertBefore:tt,removeChild:nt,appendChild:rt,parentNode:it,nextSibling:ot,tagName:at,setTextContent:st,childNodes:ct,setAttribute:ut}),Ji={create:function(e,t){lt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(lt(e,!0),lt(t))},destroy:function(e){lt(e,!0)}},qi=new vi("",{},[]),Ki=["create","update","remove","destroy"],Wi={create:mt,update:mt,destroy:function(e){mt(e,qi)}},Zi=Object.create(null),Gi=[Ji,Wi],Yi={create:bt,update:bt},Qi={create:wt,update:wt},Xi={create:Ct,update:Ct},eo={create:xt,update:xt},to=/^--/,no=function(e,t,n){to.test(t)?e.style.setProperty(t,n):e.style[io(t)]=n},ro=["Webkit","Moz","ms"],io=a(function(e){if(Oi=Oi||document.createElement("div"),e=Lr(e),"filter"!==e&&e in Oi.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ro.length;n++){var r=ro[n]+t;if(r in Oi.style)return r}}),oo={create:kt,update:kt},ao=Ur&&!Jr,so="transition",co="animation",uo="transition",lo="transitionend",fo="animation",po="animationend";ao&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(uo="WebkitTransition",lo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(fo="WebkitAnimation",po="webkitAnimationEnd"));var vo=Ur&&window.requestAnimationFrame||setTimeout,ho=/\b(transform|all)(,|$)/,mo=a(function(e){return{enterClass:e+"-enter",leaveClass:e+"-leave",appearClass:e+"-enter",enterActiveClass:e+"-enter-active",leaveActiveClass:e+"-leave-active",appearActiveClass:e+"-enter-active"}}),go=Ur?{create:function(e,t){t.data.show||Mt(t)},remove:function(e,t){e.data.show?t():Pt(e,t)}}:{},yo=[Yi,Qi,Xi,eo,oo,go],_o=yo.concat(Gi),bo=ht({nodeOps:Vi,modules:_o});Jr&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Vt(e,"input")});var $o={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Bt(e,t,n.context)};r(),(Vr||qr)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type||t.modifiers.lazy||(Kr||(e.addEventListener("compositionstart",Ut),e.addEventListener("compositionend",zt)),Jr&&(e.vmodel=!0))},componentUpdated:function(e,t,n){if("select"===n.tag){Bt(e,t,n.context);var r=e.multiple?t.value.some(function(t){return Ft(t,e.options)}):t.value!==t.oldValue&&Ft(t.value,e.options);r&&Vt(e,"change")}}},wo={bind:function(e,t,n){var r=t.value;n=Jt(n);var i=n.data&&n.data.transition;r&&i&&!Jr&&Mt(n);var o="none"===e.style.display?"":e.style.display;e.style.display=r?o:"none",e.__vOriginalDisplay=o},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=Jt(n);var o=n.data&&n.data.transition;o&&!Jr?r?(Mt(n),e.style.display=e.__vOriginalDisplay):Pt(n,function(){e.style.display="none"}):e.style.display=r?e.__vOriginalDisplay:"none"}}},Co={model:$o,show:wo},xo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String},ko={name:"transition",props:xo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(Zt(this.$vnode))return i;var o=qt(i);if(!o)return i;if(this._leaving)return Wt(e,i);var a=o.key=null==o.key||o.isStatic?"__v"+(o.tag+this._uid)+"__":o.key,s=(o.data||(o.data={})).transition=Kt(this),c=this._vnode,l=qt(c);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),l&&l.data&&l.key!==a){var f=l.data.transition=u({},s);if("out-in"===r)return this._leaving=!0,K(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()},a),Wt(e,i);if("in-out"===r){var d,p=function(){d()};K(s,"afterEnter",p,a),K(s,"enterCancelled",p,a),K(f,"delayLeave",function(e){d=e},a)}}return i}}},Ao=u({tag:String,moveClass:String},xo);delete Ao.mode;var Oo={props:Ao,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Kt(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||this.name+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(Gt),e.forEach(Yt),e.forEach(Qt);document.body.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;St(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(lo,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(lo,e),n._moveCb=null,Et(n,t))})}})}},methods:{hasMove:function(e,t){if(!ao)return!1;if(null!=this._hasMove)return this._hasMove;St(e,t);var n=Lt(e);return Et(e,t),this._hasMove=n.hasTransform}}},To={Transition:ko,TransitionGroup:Oo};Ae.config.isUnknownElement=Ze,Ae.config.isReservedTag=Ui,Ae.config.getTagNamespace=We,Ae.config.mustUseProp=Ti,u(Ae.options.directives,Co),u(Ae.options.components,To),Ae.prototype.__patch__=Br._isServer?p:bo,Ae.prototype.$mount=function(e,t){return e=e&&!Br._isServer?Ge(e):void 0,this._mount(e,t)},setTimeout(function(){Br.devtools&&Zr&&Zr.emit("init",Ae)},0);var So=!!Ur&&Xt("\n","&#10;"),Eo=document.createElement("div"),jo=/([^\s"'<>\/=]+)/,Lo=/(?:=)/,No=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Do=new RegExp("^\\s*"+jo.source+"(?:\\s*("+Lo.source+")\\s*(?:"+No.join("|")+"))?"),Mo="[a-zA-Z_][\\w\\-\\.]*",Po="((?:"+Mo+"\\:)?"+Mo+")",Ro=new RegExp("^<"+Po),Io=/^\s*(\/?)>/,Bo=new RegExp("^<\\/"+Po+"[^>]*>"),Fo=/^<!DOCTYPE [^>]+>/i,Ho=/^<!--/,Uo=/^<!\[/,zo=!1;"x".replace(/x(.)?/g,function(e,t){zo=""===t});var Vo,Jo,qo,Ko,Wo,Zo,Go,Yo,Qo,Xo,ea,ta,na,ra,ia,oa,aa,sa,ca,ua,la,fa,da,pa,va=n("script,style",!0),ha=function(e){return"lang"===e.name&&"html"!==e.value},ma=function(e,t,n){return!!va(e)||!(!t||"template"!==e||1!==n.length||!n[0].attrs.some(ha))},ga={},ya=/&lt;/g,_a=/&gt;/g,ba=/&#10;/g,$a=/&amp;/g,wa=/&quot;/g,Ca=/\{\{((?:.|\n)+?)\}\}/g,xa=/[-.*+?^${}()|[\]\/\\]/g,ka=a(function(e){var t=e[0].replace(xa,"\\$&"),n=e[1].replace(xa,"\\$&");
return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Aa=/^v-|^@|^:/,Oa=/(.*?)\s+(?:in|of)\s+(.*)/,Ta=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/,Sa=/^:|^v-bind:/,Ea=/^@|^v-on:/,ja=/:(.*)$/,La=/\.[^.]+/g,Na=/\u2028|\u2029/g,Da=a(en),Ma=/^xmlns:NS\d+/,Pa=/^NS\d+:/,Ra=a(Dn),Ia=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Ba={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Fa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:"if($event.target !== $event.currentTarget)return;"},Ha={bind:zn,cloak:p},Ua=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),{staticKeys:["staticClass"],transformNode:ar,genData:sr}),za={transformNode:cr,genData:ur},Va=[Ua,za],Ja={model:mr,text:wr,html:Cr},qa=Object.create(null),Ka={isIE:Vr,expectHTML:!0,modules:Va,staticKeys:v(Va),directives:Ja,isReservedTag:Ui,isUnaryTag:Ri,mustUseProp:Ti,getTagNamespace:We,isPreTag:Hi},Wa=a(function(e){var t=Ge(e);return t&&t.innerHTML}),Za=Ae.prototype.$mount;return Ae.prototype.$mount=function(e,t){if(e=e&&Ge(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Wa(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Or(e));if(r){var i=kr(r,{warn:$i,shouldDecodeNewlines:So,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Za.call(this,e,t)},Ae.compile=kr,Ae});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./src/ajax-client.js":
/*!****************************!*\
  !*** ./src/ajax-client.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxClient; });
/* harmony import */ var _chat_ux_def__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-ux-def */ "./src/chat-ux-def.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * AjaxClient
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */

var AjaxClient = /*#__PURE__*/function () {
  function AjaxClient() {
    _classCallCheck(this, AjaxClient);
  }
  _createClass(AjaxClient, [{
    key: "ajax",
    value: function ajax(options) {
      var url = this._createUrl(options);
      var method = options.type;
      var dataType = options.dataType;
      var data = options.data;
      var headers = options.headers;
      var postBody = null;
      if (method === 'POST') {
        postBody = JSON.stringify(data);
        if (dataType === 'jsonp') {
          //POST and jsonp specified
          throw new Error("type:'POST' and 'dataType:jsonp' are specified together.\n                'POST' and 'jsonp' can not be specified together");
        }
      }
      if (headers && dataType === 'jsonp') {
        //http-headers and jsonp specified
        throw new Error("'headers' and 'dataType:jsonp' can not be specified together.\n           Http headers cannot be sent when using jsonp.");
      }
      var reqParam = {
        url: url,
        method: method,
        body: postBody
      };
      if (headers) {
        reqParam.headers = headers;
      }
      if (dataType === 'json') {
        return this._handleJson(reqParam);
      } else if (dataType === 'jsonp') {
        return this._handleJsonp(reqParam);
      } else {
        throw new Error("dataType must be 'json' or 'jsonp'");
      }
    }
  }, {
    key: "_handleJson",
    value: function _handleJson(reqParam) {
      var asyncResult = new AjaxResult();
      var fetchParam = {
        method: reqParam.method,
        mode: 'cors',
        cache: 'no-cache'
        //credentials:null,// 'include',
        //referrer: 'no-referrer',
      };

      //populate credentials
      if (reqParam.credentials) {
        fetchParam.credentials = reqParam.credentials;
      }

      //populate headers
      if (reqParam.headers) {
        fetchParam.headers = reqParam.headers;
      } else {
        fetchParam.headers = {
          'Content-Type': 'application/json; charset=utf-8'
        };
      }

      //populate body
      if (reqParam.body) {
        fetchParam.body = reqParam.body;
      }

      //execute fetch
      fetch(reqParam.url, fetchParam).then(function (response) {
        if (!response.ok) {
          var errorObj = response.statusText;
          asyncResult._fail(errorObj);
          return;
        }
        return response.json();
      }).then(function (json) {
        asyncResult._success(json);
      })["catch"](function (err) {
        var errorObj = err;
        asyncResult._fail(errorObj);
      });
      return asyncResult;
    }
  }, {
    key: "_handleJsonp",
    value: function _handleJsonp(reqParam) {
      var asyncResult = new AjaxResult();
      var scriptEle = document.createElement('script');
      var callbackFuncName = "chatux_".concat(this._createUUID());
      scriptEle.src = "".concat(reqParam.url, "&callback=").concat(callbackFuncName);
      scriptEle.addEventListener('error', function (errorObj) {
        asyncResult._fail(errorObj);
      });

      //global object
      window[callbackFuncName] = function (res) {
        delete window[callbackFuncName];
        asyncResult._success(res);
      };
      var parentEle = document.getElementsByTagName('head') ? document.getElementsByTagName('head')[0] : document.body;
      parentEle.appendChild(scriptEle);
      return asyncResult;
    }
  }, {
    key: "_createUrl",
    value: function _createUrl(options) {
      if (options.type === 'POST') {
        //POST
        return options.url;
      } else {
        //GET
        var url = options.url;
        if (options.data) {
          url = url + '?';
          for (var _i = 0, _Object$keys = Object.keys(options.data); _i < _Object$keys.length; _i++) {
            var paramKey = _Object$keys[_i];
            var paramVal = options.data[paramKey];
            var _finalParamVal = _chat_ux_def__WEBPACK_IMPORTED_MODULE_0__["SANITIZE_USER_INPUT_FOR_SENDING_VIA_HTTP_METHOD"] ? encodeURIComponent(paramVal) : paramVal;
            url += "".concat(paramKey, "=").concat(_finalParamVal, "&");
          }
          url = url.substring(0, url.length - 1);
        }
        return url;
      }
    }
  }, {
    key: "_createUUID",
    value: function _createUUID() {
      var dateTime = new Date().getTime();
      var uuid = 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dateTime + Math.random() * 16) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid;
    }
  }]);
  return AjaxClient;
}();

var AjaxResult = /*#__PURE__*/function () {
  function AjaxResult() {
    _classCallCheck(this, AjaxResult);
    this._successFunc = function () {};
    this._failFunc = function () {};
  }
  _createClass(AjaxResult, [{
    key: "done",
    value: function done(callbackFunc) {
      this._successFunc = callbackFunc;
      return this;
    }
  }, {
    key: "fail",
    value: function fail(callbackFunc) {
      this._failFunc = callbackFunc;
      return this;
    }
  }, {
    key: "_success",
    value: function _success(response) {
      if (this._successFunc) {
        this._successFunc(response);
      }
    }
  }, {
    key: "_fail",
    value: function _fail(response) {
      if (this._failFunc) {
        this._failFunc(response);
      }
    }
  }]);
  return AjaxResult;
}();

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/botui-theme-riversun.css":
/*!**************************************!*\
  !*** ./src/botui-theme-riversun.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./botui-theme-riversun.css */ "./node_modules/css-loader/dist/cjs.js!./src/botui-theme-riversun.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/chat-client.js":
/*!****************************!*\
  !*** ./src/chat-client.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatClient; });
/* harmony import */ var _ajax_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax-client.js */ "./src/ajax-client.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * ChatClient
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */
var ChatClient = /*#__PURE__*/function () {
  function ChatClient(opts) {
    _classCallCheck(this, ChatClient);
    this.endpoint = opts.endpoint;
    this.method = 'GET';
    if (opts.method) {
      this.method = opts.method;
    }
    this.dataType = 'json';
    if (opts.dataType) {
      this.dataType = opts.dataType;
    }
    this.errorResponse = {
      output: [{
        type: 'text',
        value: 'An error occurred.'
      }]
    };
    if (opts.errorResponse) {
      this.errorResponse = opts.errorResponse;
    }
    if (opts.headers) {
      this.headers = opts.headers;
    }
    if (opts.params) {
      this.params = opts.params;
    }
  }
  _createClass(ChatClient, [{
    key: "sendMsgToChatServer",
    value: function sendMsgToChatServer(callbackFunc) {
      var _this = this;
      var ac = new _ajax_client_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      var params;
      if (this.params) {
        params = this.params;
      } else {
        params = {};
      }
      ac.ajax({
        type: this.method,
        url: this.endpoint,
        dataType: this.dataType,
        data: params,
        headers: this.headers
      }).done(function (response) {
        callbackFunc(response);
      }).fail(function (err) {
        var errorResponse = _this.errorResponse;
        callbackFunc(errorResponse);
      });
    }
  }]);
  return ChatClient;
}();


/***/ }),

/***/ "./src/chat-frame.js":
/*!***************************!*\
  !*** ./src/chat-frame.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatFrame; });
/* harmony import */ var jsframe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsframe.js */ "./node_modules/jsframe.js/lib/jsframe.min.js");
/* harmony import */ var jsframe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsframe_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chat_ux_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-ux-util.js */ "./src/chat-ux-util.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * To show chatWindow/chatArea and start/end button for chat interface
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */
var ChatFrame = /*#__PURE__*/function () {
  function ChatFrame(opts) {
    _classCallCheck(this, ChatFrame);
    this.ICON_CROSSMARK = '<i class="fas fa-times"></i>';
    this.ICON_COMMENT = '<i class="fas fa-comment-alt"></i>';

    //Setup initial parameters[begin]
    if (!opts) {
      opts = {};
    }
    this.renderMode = this.isMobileDevice() ? 'mobile' : 'pc';
    if (opts.renderMode) {
      if (opts.renderMode === 'auto') {
        //set render mode as-is.
      } else {
        //force setting specified mode
        this.renderMode = opts.renderMode;
      }
    }
    this.windowParam = {};
    if (opts.window) {
      this.windowParam = opts.window;
    }

    //Setup initial parameters[end]
    this.jsFrame = new jsframe_js__WEBPACK_IMPORTED_MODULE_0__["JSFrame"]({
      horizontalAlign: 'right',
      verticalAlign: 'bottom'
    });
    this.frameParam = {
      right: 20,
      bottom: 20,
      size: 60,
      fontSize: 25
    };
    if (opts.wakeupButton) {
      this.frameParam = opts.wakeupButton;
    }
    this.windowSizeParam = {
      width: 360,
      height: 600,
      minHeight: 300,
      minWidth: 200,
      titleHeight: 40
    };
    if (this.windowParam.size) {
      this.windowSizeParam = this.windowParam.size;
    }
    this.appearanceParam = {
      border: {
        shadow: '2px 2px 10px  rgba(0, 0, 0, 0.5)',
        width: 0,
        radius: 6
      },
      titleBar: {
        color: 'white',
        background: '#47d45e',
        leftMargin: this.windowParam.infoUrl ? 40 : 10,
        height: this.windowSizeParam.titleHeight,
        fontSize: 14,
        buttonWidth: 36,
        buttonHeight: 16,
        buttonColor: 'white',
        buttons: [{
          fa: 'fas fa-times',
          name: 'hideButton',
          visible: true
        }],
        buttonsOnLeft: [{
          fa: 'fas fa-comment-alt',
          name: 'info',
          visible: this.windowParam.infoUrl ? true : false
        }]
      }
    };
    if (this.windowParam.appearance) {
      this.appearanceParam = this.windowParam.appearance;
    }
    this.FRAME_NAME = 'chat_window';
    this.BUTTON_STATE_OPEN = 'open_chat_window';
    this.BUTTON_STATE_TRANSITION = 'transition';
    this.BUTTON_STATE_CLOSE = 'close_chat_window';
    this.BUTTON_ID = 'chat_wakeup';

    //If true, chat button will disappear when opening the chat window
    //If false,chat button will be shown as a toggle button(OPEN/CLOSE)
    this.buttonOffWhenOpenFrame = false;
    this.buttonState = null;
    this.buttonVanishPoint = {};
    this.frame = null;
    this.showChatBtn = null;
    this.chatAreaEle = null;

    //Empty implementation for default
    this.onChatFrameCreate = function () {};
    this.onChatFramePause = function () {};
    this.onChatFrameResume = function () {};
    this.holderId = '';
  }

  /**
   * Build chat start button
   */
  _createClass(ChatFrame, [{
    key: "buildChatButton",
    value: function buildChatButton() {
      var p = this.frameParam;
      var btnRight = p.right;
      var btnBottom = p.bottom;
      var btnSize = p.size;
      var btnFontSize = p.fontSize;
      var showChatBtn = document.createElement('div');
      this.showChatBtn = showChatBtn;
      showChatBtn.id = this.BUTTON_ID;
      if (this.renderMode === 'mobile') {
        showChatBtn.className = 'chatux-btn-chat';
      } else {
        showChatBtn.className = 'chatux-btn-chat chatux-btn-chat-pc';
      }
      showChatBtn.onclick = this.toggleChatButtonState.bind(this);
      var style = showChatBtn.style;
      style.right = btnRight + 'px';
      style.bottom = btnBottom + 'px';
      style.width = btnSize + 'px';
      style.height = style.width;
      style.lineHeight = style.width;
      style.fontSize = btnFontSize + 'px';
      document.body.appendChild(showChatBtn);

      //first call for chat button initialization
      this.toggleChatButtonState();
    }

    /**
     * Toggle chat button state
     */
  }, {
    key: "toggleChatButtonState",
    value: function toggleChatButtonState() {
      var _this = this;
      var showChatBtn = document.querySelector("#".concat(this.BUTTON_ID));
      if (!this.buttonState) {
        //- buttonState not already set
        showChatBtn.innerHTML = this.ICON_COMMENT;
        this.buttonState = this.BUTTON_STATE_OPEN;
      } else if (this.buttonState === this.BUTTON_STATE_OPEN) {
        // - current buttonState is OPEN

        //- Set this state so that trouble does not occur even if the user hits buttons repeatedly
        this.buttonState = this.BUTTON_STATE_TRANSITION;
        this.show(function () {
          if (_this.buttonOffWhenOpenFrame && _this.renderMode === 'pc') {
            _this.setChatButtonVisible(false);
          } else {
            showChatBtn.innerHTML = _this.ICON_CROSSMARK;
          }
          _this.buttonState = _this.BUTTON_STATE_CLOSE;
        });
      } else if (this.buttonState === this.BUTTON_STATE_TRANSITION) {
        //- Maybe chat button is pressed during the transition
        //Do nothing
      } else {
        this.buttonState = this.BUTTON_STATE_TRANSITION;
        this.hide(function () {
          if (_this.buttonOffWhenOpenFrame && _this.renderMode === 'pc') {
            _this.setChatButtonVisible(true);
          } else {
            showChatBtn.innerHTML = _this.ICON_COMMENT;
          }
          _this.buttonState = _this.BUTTON_STATE_OPEN;
        });
      }
    }

    /**
     * Show Chat UI
     * @param callback
     */
  }, {
    key: "show",
    value: function show(_callback) {
      var _this2 = this;
      if (this.renderMode === 'mobile') {
        // on mobile device
        if (this.chatAreaEle) {
          this.chatAreaEle.classList.replace('chatux-scrn-off', 'chatux-scrn-on');
        }
        if (_callback) {
          _callback();
        }
        this.onChatFrameResume();
      } else {
        //on PC
        var frame = this.jsFrame.getWindowByName(this.FRAME_NAME);

        //Open minimized window
        frame.control.doDehide({
          callback: function callback(_frame, info) {
            if (_callback) {
              _callback();
            }
            _this2.onChatFrameResume(_frame);
          }
        });
      }
    }

    /**
     * Hide Chat-UI
     * @param callback
     */
  }, {
    key: "hide",
    value: function hide(_callback2) {
      var _this3 = this;
      if (this.renderMode === 'mobile') {
        // on mobile device
        if (this.chatAreaEle) {
          this.chatAreaEle.classList.replace('chatux-scrn-on', 'chatux-scrn-off');
        }
        if (_callback2) {
          _callback2();
        }
        this.onChatFramePause();
      } else {
        //on PC
        var frame = this.jsFrame.getWindowByName(this.FRAME_NAME);

        //Open minimized window

        frame.control.doHide({
          offset: this.buttonVanishPoint,
          align: 'ABSOLUTE',
          callback: function callback(_frame, info) {
            if (_callback2) {
              _callback2();
            }
            _this3.onChatFramePause(_frame);
          }
        });
      }
    }

    /**
     * Makes chat button visible or invisible.
     * @param isVisible
     */
  }, {
    key: "setChatButtonVisible",
    value: function setChatButtonVisible(isVisible) {
      var chatButton = document.querySelector("#".concat(this.BUTTON_ID));
      if (isVisible) {
        chatButton.classList.add('chatux-btn-on');
      } else {
        chatButton.classList.remove('chatux-btn-on');
      }
    }

    /**
     * Build chat area for mobile devices
     */
  }, {
    key: "buildChatArea",
    value: function buildChatArea() {
      this.chatAreaEle = document.createElement('div');
      document.body.appendChild(this.chatAreaEle);
      this.initializeChatArea();
    }
  }, {
    key: "initializeChatArea",
    value: function initializeChatArea() {
      this.chatAreaEle.style.position = 'fixed';
      this.chatAreaEle.style.left = '0px';
      this.chatAreaEle.style.top = '0px';
      this.chatAreaEle.style.bottom = '0px';
      this.chatAreaEle.style.right = '0px';
      this.chatAreaEle.style.backgroundColor = 'transparent';
      this.chatAreaEle.style.display = 'flex';
      this.chatAreaEle.classList.add('chatux-scrn-off');
      this.chatAreaEle.innerHTML = this.getBotUiInnterHtml();
    }

    /**
     * Returns innterHTML for BotUI
     * @returns {string}
     */
  }, {
    key: "getBotUiInnterHtml",
    value: function getBotUiInnterHtml() {
      return "<div class=\"botui-app-container\" id=\"".concat(this.holderId, "\"><bot-ui></bot-ui></div>");
    }

    /**
     *  Build chat window for PC
     */
  }, {
    key: "buildChatWindow",
    value: function buildChatWindow() {
      var _this4 = this;
      var param = this.frameParam;
      var size = this.windowSizeParam;
      var frmWidth = size.width;
      var frmHeight = size.height;
      var frmHeightMin = size.minHeight;
      var frmWidthMin = size.minWidth;
      var frmTitleHeight = size.titleHeight;
      var frmLeft = -(param.right + frmWidth);
      var frmTop = -(param.bottom + param.size + frmHeight);

      /**
       * Coordinate(left,top) where the window is minimzied
       * @type {{x: number, y: number}}
       */
      this.buttonVanishPoint = {
        x: frmLeft + frmWidth,
        y: frmTop + frmHeight - frmTitleHeight
      };

      //Create chat window
      this.frame = this.jsFrame.create({
        name: this.FRAME_NAME,
        title: this.windowParam.title,
        left: frmLeft,
        top: frmTop,
        width: frmWidth,
        height: frmHeight,
        minWidth: frmWidthMin,
        minHeight: frmHeightMin,
        appearanceName: 'material',
        appearanceParam: this.appearanceParam,
        style: {
          backgroundColor: 'rgba(255,255,255,1.0)',
          overflow: 'auto'
        },
        html: '' // 'Chat UI Here'
        //url: // Chat URL here
      });

      //Enable helper to act on window's common operations(maximization/minimization and something)
      this.frame.setControl({
        animation: true,
        animationDuration: 200
      });

      //Set click event when the close button is clicked
      this.frame.on('hideButton', 'click', function (_frame, evt) {
        _this4.toggleChatButtonState();
      });
      this.frame.on('info', 'click', function (_frame, evt) {
        if (_this4.windowParam.infoUrl) {
          window.open(_this4.windowParam.infoUrl, '_blank');
        }
      });

      //Minimize the window first to memory the  initial window position and size.
      this.frame.control.doHide({
        silent: true,
        //means invisible action
        duration: 0,
        align: 'ABSOLUTE',
        //need to set the offset point where window is minimized
        offset: this.buttonVanishPoint,
        callback: function callback(_frame, info) {
          _this4.onChatFrameCreate(_frame);
        }
      });
    }

    /**
     * Build Chat UI and related components like wakeup button
     * @param holderEleId
     */
  }, {
    key: "build",
    value: function build(holderEleId, isAutoOpen) {
      this.holderId = holderEleId;
      if (this.renderMode === 'mobile') {
        // on mobile device
        this.buildChatArea();
        this.buildChatButton();
        this.onChatFrameCreate();
      } else {
        //on PC
        this.buildChatWindow();
        this.frame.setHTML(this.getBotUiInnterHtml());
        this.buildChatButton();
      }
      this.setChatButtonVisible(true);
    }
  }, {
    key: "clear",
    value: function clear() {
      if (document.body.contains(this.chatAreaEle)) {
        document.body.removeChild(this.chatAreaEle);
      }
      if (document.body.contains(this.showChatBtn)) {
        document.body.removeChild(this.showChatBtn);
      }
      if (this.frame) {
        //close the window
        this.frame.closeFrame();
      }
    }

    /**
     * Returns true when app is running on mobile devices
     * @returns {boolean}
     */
  }, {
    key: "isMobileDevice",
    value: function isMobileDevice() {
      return Object(_chat_ux_util_js__WEBPACK_IMPORTED_MODULE_1__["isMobileDevice"])();
    }
  }]);
  return ChatFrame;
}();


/***/ }),

/***/ "./src/chat-ui.js":
/*!************************!*\
  !*** ./src/chat-ui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatUI; });
/* harmony import */ var _chat_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-client.js */ "./src/chat-client.js");
/* harmony import */ var _node_modules_botui_build_botui_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/botui/build/botui.min.js */ "./node_modules/botui/build/botui.min.js");
/* harmony import */ var _node_modules_botui_build_botui_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_botui_build_botui_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanitizer */ "./src/sanitizer.js");
/* harmony import */ var _chat_ux_def__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-ux-def */ "./src/chat-ux-def.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





/**
 * Chat user interface powered by BotUI (forked ver. on https://github.com/riversun/botui)
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */
var ChatUI = /*#__PURE__*/function () {
  function ChatUI(opts) {
    _classCallCheck(this, ChatUI);
    this.opts = opts;
    this.isStarted = false;
    this.botui = null;
    this.botInfo = opts.botInfo;
    if (!this.botInfo.widget) {
      this.botInfo.widget = {
        sendLabel: 'SEND',
        placeHolder: 'Please input text.'
      };
    }
  }
  _createClass(ChatUI, [{
    key: "initialize",
    value: function initialize() {
      if (!this.botui) {
        this.botui = new _node_modules_botui_build_botui_min_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.opts.holderId, {
          vue: this.opts.vue
        });
        if (this.opts) {
          if (this.opts.api) {
            this.chatClient = new _chat_client_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.opts.api);
          } else {
            this.chatClient = new _chat_client_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
          }
          if (this.botInfo.botPhoto) {
            this.botui.opt.setBotPhoto(this.botInfo.botPhoto);
          }
          if (this.botInfo.humanPhoto) {
            this.botui.opt.setHumanPhoto(this.botInfo.humanPhoto);
          }
        }
      }
    }
  }, {
    key: "startChatbot",
    value: function startChatbot(wakeupInput) {
      if (this.isStarted) {
        //pass if started
        return;
      }
      this.isStarted = true;
      if (wakeupInput) {
        this.handleUserInput({
          value: wakeupInput
        });
      } else {
        this.showInputPrompt();
      }
    }
  }, {
    key: "showInputPrompt",
    value: function showInputPrompt() {
      var self = this;
      self.botui.action.text({
        addMessage: !_chat_ux_def__WEBPACK_IMPORTED_MODULE_3__["SANITIZE_USER_INPUT_FOR_DISPLAY"],
        action: {
          button: {
            //icon:'paper-plane',
            label: this.botInfo.widget.sendLabel
          },
          placeholder: this.botInfo.widget.placeHolder
        }
      }).then(function (res) {
        var text = _chat_ux_def__WEBPACK_IMPORTED_MODULE_3__["SANITIZE_USER_INPUT_FOR_DISPLAY"] ? Object(_sanitizer__WEBPACK_IMPORTED_MODULE_2__["default"])(res.value) : res.value;
        self.botui.message.add({
          delay: 1,
          photo: true,
          human: true,
          // show it as right aligned to UI
          content: text
        });
        var _handleUserInput = self.handleUserInput.bind(self);
        _handleUserInput(res);
      });
    }

    /**
     * To handle user input text
     * @param userInput
     */
  }, {
    key: "handleUserInput",
    value: function handleUserInput(userInput) {
      var _this = this;
      if (!this.botui) {
        return;
      }

      //A loading icon is displayed before the display of the user input box is finished
      //Just put wait to prevent it.
      var delayMs4LoadingIcon = 500;
      if (this.opts.methods) {
        if (this.opts.methods.onUserInput) {
          var consumed = this.opts.methods.onUserInput(userInput.value);
          if (consumed) {
            return;
          }
        }
      }
      setTimeout(function () {
        //Show loading icon
        _this.botui.message.add({
          photo: true,
          loading: true
        }).then(function (loadingIconMsgIdx) {
          if (_this.opts.methods && _this.opts.methods.onServerProcess) {
            var serverResponse = _this.opts.methods.onServerProcess(userInput.value);
            _this.handleChatServerResponse(serverResponse, loadingIconMsgIdx);
          } else {
            if (!_this.chatClient.params) {
              _this.chatClient.params = {};
            }
            _this.chatClient.params.text = _this.opts.api.escapeUserInput ? Object(_sanitizer__WEBPACK_IMPORTED_MODULE_2__["default"])(userInput.value) : userInput.value;

            //You can intercept request headers/params before sending a request to server
            if (_this.opts.methods && _this.opts.methods.onPrepareRequest) {
              _this.opts.methods.onPrepareRequest(_this.chatClient);
            }

            //Finish showing loading icon
            _this.chatClient.sendMsgToChatServer(function (serverResponse) {
              //Handling response from ChatServer
              _this.handleChatServerResponse(serverResponse, loadingIconMsgIdx);

              //You can intercept request headers/params after sending a request to server
              if (_this.opts.methods && _this.opts.methods.onFinishRequest) {
                _this.opts.methods.onFinishRequest(_this.chatClient);
              }
            });
          }
        });
      }, delayMs4LoadingIcon);
    }

    /**
     * Handling response from ChatServer
     * @param serverResponse
     * @param loadingIconMsgIdx
     */
  }, {
    key: "handleChatServerResponse",
    value: function handleChatServerResponse(serverResponse, loadingIconMsgIdx) {
      var _this2 = this;
      var self = this;
      if (!this.botui) {
        return;
      }
      if (this.opts.methods) {
        if (this.opts.methods.onServerResponse) {
          serverResponse = this.opts.methods.onServerResponse(serverResponse);
        }
      }
      var msgInterval = this.opts.msgInterval ? this.opts.msgInterval : 100;
      var out = serverResponse.output;
      var isUserInputConsumed = false;
      var delayMs = 0;
      var _loop = function _loop() {
        var message = out[outIdx];
        var resType = message.type;
        delayMs += msgInterval;
        if (message.delayMs) {
          delayMs += message.delayMs;
        }
        if (resType == 'text') {
          if (outIdx == 0) {
            //In the case of the first message,
            // remove the loading icon and show message
            _this2.botui.message.update(loadingIconMsgIdx, {
              loading: false,
              photo: true,
              content: message.value
            });
          } else {
            _this2.botui.message.add({
              delay: delayMs,
              photo: true,
              content: message.value
            });
          }
        } else if (resType == 'image') {
          var type = null;
          var contentValue = '![image](' + message.value + ')';
          _this2.handleContent(outIdx, loadingIconMsgIdx, type, contentValue, delayMs);
        } else if (resType == 'youtube') {
          var _type = 'embed';
          var youtubeId = message.value;
          var _contentValue = "<iframe src=\"https://www.youtube.com/embed/".concat(youtubeId, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
          _this2.handleContent(outIdx, loadingIconMsgIdx, _type, _contentValue, delayMs);
        } else if (resType == 'embed') {
          var _type2 = 'embed';
          var _contentValue2 = message.value;
          _this2.handleContent(outIdx, loadingIconMsgIdx, _type2, _contentValue2, delayMs);
        } else if (resType == 'html') {
          var _type3 = 'html';
          var _contentValue3 = message.value;
          _this2.handleContent(outIdx, loadingIconMsgIdx, _type3, _contentValue3, delayMs);
        } else if (resType == 'window' && _this2.opts.parent && _this2.opts.parent.getRenderMode() === 'pc') {
          var _delayMs = delayMs;
          if (!_delayMs) {
            _delayMs = 1;
          }
          if (_this2.opts.parent) {
            var func = function func(callback) {
              setTimeout(function () {
                _this2.opts.parent.createWindowFromServerMessage(message);
                if (callback) {
                  callback();
                }
              }, _delayMs);
            };
            if (outIdx == 0) {
              //In the case of the first message,
              // remove the loading icon and show message
              _this2.botui.message.remove(loadingIconMsgIdx).then(function () {
                func();
              });
            } else {
              func();
            }
          }
        } else if (resType == 'window' && _this2.opts.parent && _this2.opts.parent.getRenderMode() === 'mobile') {
          var _type4 = 'html';
          var _contentValue4 = null;
          var title = null;
          if (message.url || message.mobileUrl) {
            if (message.url) {
              //url
              title = "".concat(message.url);
              _contentValue4 = "<a href=\"".concat(message.url, "\" target=\"_blank\">").concat(title, "</a>");
            }
            if (message.mobileUrl) {
              //mobileUrl
              title = "".concat(message.mobileUrl);
              _contentValue4 = "<a href=\"".concat(message.mobileUrl, "\" target=\"_blank\">").concat(title, "</a>");
            }
            if (message.title) {
              title = message.title;
            }
            _this2.handleContent(outIdx, loadingIconMsgIdx, _type4, _contentValue4, delayMs);
          } else {
            //html
            _contentValue4 = message.html ? message.html : 'No data';
            _this2.handleContent(outIdx, loadingIconMsgIdx, _type4, _contentValue4, delayMs);
          }
        } else if (resType == 'option') {
          var opts = message.options;
          var aboutOption = '';
          if (aboutOption.length > 0) {
            if (outIdx == 0) {
              _this2.botui.message.update(loadingIconMsgIdx, {
                loading: false,
                delay: delayMs,
                photo: true,
                content: aboutOption
              });
            } else {
              _this2.botui.message.add({
                delay: delayMs,
                photo: true,
                content: aboutOption
              });
            }
          }
          var optActions = new Array();
          for (var optIdx in opts) {
            var opt = opts[optIdx];
            var label = opt.label;
            var text = opt.value;
            optActions.push({
              text: label,
              value: text
            });
          }
          isUserInputConsumed = true;
          if (outIdx == 0) {
            //In the case of the first message,
            // remove the loading icon and show message
            _this2.botui.message.remove(loadingIconMsgIdx).then(function () {
              return _this2.botui.action.button({
                autoHide: true,
                //true:Automatically hide when pushing the button
                delay: delayMs,
                action: optActions
              });
            }).then(
            //Handling of pushing of action button
            _this2.handleUserInput.bind(_this2));
          } else {
            //Show action buttons
            _this2.botui.action.button({
              autoHide: true,
              //true:Automatically hide when pushing the button
              delay: delayMs,
              action: optActions
            }).then(
            //Handling of pushing of action button
            _this2.handleUserInput.bind(_this2));
          }
        }
      };
      for (var outIdx in out) {
        _loop();
      }

      //If the user input has not been consumed due to an action button press or the like,
      // display user input box
      if (!isUserInputConsumed) {
        setTimeout(function () {
          self.showInputPrompt();
        }, delayMs + msgInterval);
      }
    }
  }, {
    key: "handleContent",
    value: function handleContent(outIdx, loadingIconMsgIdx, type, contentValue, delayMs) {
      if (outIdx == 0) {
        //In the case of the first message,
        // remove the loading icon and show message
        this.botui.message.update(loadingIconMsgIdx, {
          type: type,
          loading: false,
          photo: true,
          content: contentValue
        });
      } else {
        this.botui.message.add({
          type: type,
          delay: delayMs,
          photo: true,
          content: contentValue
        });
      }
    }
  }]);
  return ChatUI;
}();


/***/ }),

/***/ "./src/chat-ux-def.js":
/*!****************************!*\
  !*** ./src/chat-ux-def.js ***!
  \****************************/
/*! exports provided: SANITIZE_USER_INPUT_FOR_DISPLAY, SANITIZE_USER_INPUT_FOR_SENDING_VIA_HTTP_METHOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANITIZE_USER_INPUT_FOR_DISPLAY", function() { return SANITIZE_USER_INPUT_FOR_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SANITIZE_USER_INPUT_FOR_SENDING_VIA_HTTP_METHOD", function() { return SANITIZE_USER_INPUT_FOR_SENDING_VIA_HTTP_METHOD; });
// Flag indicating whether or not userInputText should be sanitized
// when displayed on the chat screen (append as DOM element).
var SANITIZE_USER_INPUT_FOR_DISPLAY = true;

// Flag indicating whether or not EncodeURIComponent should be performed
// for userInputText in order to avoid mixing "&" in the query string
// with "&" in userInputText when sending values via GET
var SANITIZE_USER_INPUT_FOR_SENDING_VIA_HTTP_METHOD = true;

/***/ }),

/***/ "./src/chat-ux-util.js":
/*!*****************************!*\
  !*** ./src/chat-ux-util.js ***!
  \*****************************/
/*! exports provided: isMobileDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
/**
 * Returns true when app is running on mobile devices
 * @returns {boolean}
 */
function isMobileDevice() {
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0 || userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0) {
    //is smartphone
    return true;
  } else if (userAgent.indexOf('iPad') > 0 || userAgent.indexOf('Android') > 0) {
    //is tablet
    return true;
  } else {
    //is pc
    return false;
  }
}

/***/ }),

/***/ "./src/chat-ux.js":
/*!************************!*\
  !*** ./src/chat-ux.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatUx; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCommentAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsframe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsframe.js */ "./node_modules/jsframe.js/lib/jsframe.min.js");
/* harmony import */ var jsframe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsframe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.min.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chat_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-ui.js */ "./src/chat-ui.js");
/* harmony import */ var _chat_frame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-frame.js */ "./src/chat-frame.js");
/* harmony import */ var _chat_ux_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-ux-util.js */ "./src/chat-ux-util.js");
/* harmony import */ var _node_modules_botui_build_botui_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node_modules/botui/build/botui.min.css */ "./node_modules/botui/build/botui.min.css");
/* harmony import */ var _node_modules_botui_build_botui_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_botui_build_botui_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_botui_build_botui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node_modules/botui/build/botui-theme-default.css */ "./node_modules/botui/build/botui-theme-default.css");
/* harmony import */ var _node_modules_botui_build_botui_theme_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_botui_build_botui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _botui_theme_riversun_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./botui-theme-riversun.css */ "./src/botui-theme-riversun.css");
/* harmony import */ var _botui_theme_riversun_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_botui_theme_riversun_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.css */ "./src/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




// Add specific icons from font awesome
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_1__["faTimes"], _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_2__["faCommentAlt"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["dom"].watch();









/**
 * Easy to create Chat UI
 *
 * MIT License
 *
 * @author Tom Misawa (riversun.org@gmail.com,https://github.com/riversun)
 */
var ChatUx = /*#__PURE__*/function () {
  function ChatUx(opts) {
    _classCallCheck(this, ChatUx);
    if (opts) {
      this.init(opts);
    }

    //flag for opening chat automatically
    this.autoOpen = false;
  }
  _createClass(ChatUx, [{
    key: "init",
    value: function init(opts) {
      var _this = this;
      this.holderEleId = 'my-chat-bot';
      this.ui = null;
      this.chatFrame = null;
      var botInfo = opts.bot;
      if (!botInfo) {
        botInfo = {};
      }
      var paramWin = opts.window;
      if (!paramWin) {
        paramWin = {};
      }
      var paramWakeupButton = opts.wakeupButton;
      var methods = opts.methods;
      if (!methods) {
        methods = {};
      }

      // if (!botInfo.botPhoto) {
      //     botInfo.botPhoto = png_icon_operator;
      // }

      this.ui = new _chat_ui_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        holderId: this.holderEleId,
        botInfo: botInfo,
        vue: vue__WEBPACK_IMPORTED_MODULE_4___default.a,
        api: opts.api,
        methods: methods,
        parent: this
      });
      this.chatFrame = new _chat_frame_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        renderMode: opts.renderMode,
        window: paramWin,
        wakeupButton: paramWakeupButton
      });
      this.chatFrame.buttonOffWhenOpenFrame = opts.buttonOffWhenOpenFrame;
      this.chatFrame.onChatFrameCreate = function (frame) {
        _this.ui.initialize();
        if (opts.open || _this.autoOpen) {
          _this.chatFrame.toggleChatButtonState();
        }
        if (methods.onChatWindowCreate) {
          methods.onChatWindowCreate(frame);
        }
      };
      this.chatFrame.onChatFrameResume = function (frame) {
        if (botInfo.wakeupText) {
          _this.ui.startChatbot(botInfo.wakeupText);
        } else {
          _this.ui.startChatbot();
        }
        if (methods.onChatWindowResume) {
          methods.onChatWindowResume(frame);
        }
      };
      this.chatFrame.onChatFramePause = function (frame) {
        if (methods.onChatWindowPause) {
          methods.onChatWindowPause(frame);
        }
      };
    }
  }, {
    key: "getRenderMode",
    value: function getRenderMode() {
      return this.chatFrame.renderMode;
    }
  }, {
    key: "createWindowFromServerMessage",
    value: function createWindowFromServerMessage(message) {
      var _this2 = this;
      //get jsFrame instance
      var jsFrameForChatWindow = this.chatFrame.jsFrame;
      if (!this.jsFrame) {
        this.jsFrame = new jsframe_js__WEBPACK_IMPORTED_MODULE_3__["JSFrame"]({
          horizontalAlign: 'left',
          verticalAlign: 'top',
          fixed: false
        });
      }

      //override jsframe mouse intercepter for supporting multiple jsframe
      document.onmouseup = function (e) {
        jsFrameForChatWindow.windowManager.windowMouseUp(e);
        _this2.jsFrame.windowManager.windowMouseUp(e);
      };
      document.onmousemove = function (e) {
        jsFrameForChatWindow.windowManager.windowMouseMove(e);
        _this2.jsFrame.windowManager.windowMouseMove(e);
      };

      //get chat window instance
      var chatWin = this.chatFrame.frame;
      var chatWinStyle = this.chatFrame.appearanceParam;
      chatWinStyle.titleBar.leftMargin = '10px';
      chatWinStyle.titleBar.buttonsOnLeft[0].visible = false;
      var chatWinPos = chatWin.getPosition();

      //prepare detailed window
      var browserWidth = window.innerWidth;
      var dtWinWidth = message.width ? message.width : 400;
      var dtWinHeight = message.height ? message.height : 400;
      var dtWinLeft = message.left ? message.left : 32;
      var dtWinYOffset = message.addYOffset;
      var dtWinTop = message.top ? message.top + (dtWinYOffset ? parseInt(window.pageYOffset) : 0) : 32 + (dtWinYOffset ? parseInt(window.pageYOffset) : 0);
      var dtWinBackgroundColor = message.backgroundColor ? message.backgroundColor : 'rgba(255,255,255,1.0)';
      var dtWinOverflow = message.overflow ? message.overflow : 'auto';
      var detailWin = this.jsFrame.create({
        name: 'new',
        title: message.title ? message.title : '',
        left: dtWinLeft,
        top: dtWinTop,
        width: dtWinWidth,
        height: dtWinHeight,
        minWidth: 100,
        minHeight: 100,
        appearanceName: 'material',
        appearanceParam: chatWinStyle,
        style: {
          backgroundColor: dtWinBackgroundColor,
          overflow: dtWinOverflow
        },
        url: message.url,
        html: message.html
      });

      //set cross mark click handler
      detailWin.on('hideButton', 'click', function (_frame, evt) {
        detailWin.closeFrame();
      });
      detailWin.show();
    }
  }, {
    key: "start",
    value: function start(openFlag) {
      if (openFlag) {
        this.autoOpen = openFlag;
      }
      this.chatFrame.build(this.holderEleId);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.chatFrame.clear();
    }
  }, {
    key: "isMobileDevice",
    value: function isMobileDevice() {
      return Object(_chat_ux_util_js__WEBPACK_IMPORTED_MODULE_7__["isMobileDevice"])();
    }
  }]);
  return ChatUx;
}();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ChatUx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_ux_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-ux.js */ "./src/chat-ux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatUx", function() { return _chat_ux_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/sanitizer.js":
/*!**************************!*\
  !*** ./src/sanitizer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sanitize; });
/**
 * Sanitize text (= escape HTML tags)
 *
 * There are two possible approaches to sanitization: simply escaping HTML,
 * or allowing HTML to be displayed and using DOMPurify to prevent dangerous HTML.
 * Since there are doubts about whether allowing HTML for user input is necessary
 * for chat in the first place,
 * I will adopt simple escaping as a sanitization method this time.
 * @param text
 * @returns {String}
 */
function sanitize(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/`/g, '&#x60;');
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL2luZGV4LmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFDb21tZW50QWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm90dWkvYnVpbGQvYm90dWktdGhlbWUtZGVmYXVsdC5jc3M/N2NjNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm90dWkvYnVpbGQvYm90dWkubWluLmNzcz81ZjMxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib3R1aS9idWlsZC9ib3R1aS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JvdHVpL2J1aWxkL2JvdHVpLXRoZW1lLWRlZmF1bHQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ib3R1aS9idWlsZC9ib3R1aS5taW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovLy8uL3NyYy9ib3R1aS10aGVtZS1yaXZlcnN1bi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNmcmFtZS5qcy9saWIvanNmcmFtZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWpheC1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5jc3M/YTY3MiIsIndlYnBhY2s6Ly8vLi9zcmMvYm90dWktdGhlbWUtcml2ZXJzdW4uY3NzPzc4NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQtY2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jaGF0LWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGF0LXVpLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGF0LXV4LWRlZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC11eC11dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGF0LXV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FuaXRpemVyLmpzIl0sIm5hbWVzIjpbIkFqYXhDbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImFqYXgiLCJvcHRpb25zIiwidXJsIiwiX2NyZWF0ZVVybCIsIm1ldGhvZCIsInR5cGUiLCJkYXRhVHlwZSIsImRhdGEiLCJoZWFkZXJzIiwicG9zdEJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiRXJyb3IiLCJyZXFQYXJhbSIsImJvZHkiLCJfaGFuZGxlSnNvbiIsIl9oYW5kbGVKc29ucCIsImFzeW5jUmVzdWx0IiwiQWpheFJlc3VsdCIsImZldGNoUGFyYW0iLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJlcnJvck9iaiIsInN0YXR1c1RleHQiLCJfZmFpbCIsImpzb24iLCJfc3VjY2VzcyIsImVyciIsInNjcmlwdEVsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNhbGxiYWNrRnVuY05hbWUiLCJjb25jYXQiLCJfY3JlYXRlVVVJRCIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJyZXMiLCJwYXJlbnRFbGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwiX2kiLCJfT2JqZWN0JGtleXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGFyYW1LZXkiLCJwYXJhbVZhbCIsIl9maW5hbFBhcmFtVmFsIiwiU0FOSVRJWkVfVVNFUl9JTlBVVF9GT1JfU0VORElOR19WSUFfSFRUUF9NRVRIT0QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdWJzdHJpbmciLCJkYXRlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidXVpZCIsInJlcGxhY2UiLCJjIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsIl9zdWNjZXNzRnVuYyIsIl9mYWlsRnVuYyIsImRvbmUiLCJjYWxsYmFja0Z1bmMiLCJmYWlsIiwiQ2hhdENsaWVudCIsIm9wdHMiLCJlbmRwb2ludCIsImVycm9yUmVzcG9uc2UiLCJvdXRwdXQiLCJwYXJhbXMiLCJzZW5kTXNnVG9DaGF0U2VydmVyIiwiX3RoaXMiLCJhYyIsIkNoYXRGcmFtZSIsIklDT05fQ1JPU1NNQVJLIiwiSUNPTl9DT01NRU5UIiwicmVuZGVyTW9kZSIsImlzTW9iaWxlRGV2aWNlIiwid2luZG93UGFyYW0iLCJqc0ZyYW1lIiwiSlNGcmFtZSIsImhvcml6b250YWxBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJmcmFtZVBhcmFtIiwicmlnaHQiLCJib3R0b20iLCJzaXplIiwiZm9udFNpemUiLCJ3YWtldXBCdXR0b24iLCJ3aW5kb3dTaXplUGFyYW0iLCJ3aWR0aCIsImhlaWdodCIsIm1pbkhlaWdodCIsIm1pbldpZHRoIiwidGl0bGVIZWlnaHQiLCJhcHBlYXJhbmNlUGFyYW0iLCJib3JkZXIiLCJzaGFkb3ciLCJyYWRpdXMiLCJ0aXRsZUJhciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImxlZnRNYXJnaW4iLCJpbmZvVXJsIiwiYnV0dG9uV2lkdGgiLCJidXR0b25IZWlnaHQiLCJidXR0b25Db2xvciIsImJ1dHRvbnMiLCJmYSIsIm5hbWUiLCJ2aXNpYmxlIiwiYnV0dG9uc09uTGVmdCIsImFwcGVhcmFuY2UiLCJGUkFNRV9OQU1FIiwiQlVUVE9OX1NUQVRFX09QRU4iLCJCVVRUT05fU1RBVEVfVFJBTlNJVElPTiIsIkJVVFRPTl9TVEFURV9DTE9TRSIsIkJVVFRPTl9JRCIsImJ1dHRvbk9mZldoZW5PcGVuRnJhbWUiLCJidXR0b25TdGF0ZSIsImJ1dHRvblZhbmlzaFBvaW50IiwiZnJhbWUiLCJzaG93Q2hhdEJ0biIsImNoYXRBcmVhRWxlIiwib25DaGF0RnJhbWVDcmVhdGUiLCJvbkNoYXRGcmFtZVBhdXNlIiwib25DaGF0RnJhbWVSZXN1bWUiLCJob2xkZXJJZCIsImJ1aWxkQ2hhdEJ1dHRvbiIsInAiLCJidG5SaWdodCIsImJ0bkJvdHRvbSIsImJ0blNpemUiLCJidG5Gb250U2l6ZSIsImlkIiwiY2xhc3NOYW1lIiwib25jbGljayIsInRvZ2dsZUNoYXRCdXR0b25TdGF0ZSIsImJpbmQiLCJzdHlsZSIsImxpbmVIZWlnaHQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwic2hvdyIsInNldENoYXRCdXR0b25WaXNpYmxlIiwiaGlkZSIsImNhbGxiYWNrIiwiX3RoaXMyIiwiY2xhc3NMaXN0IiwiZ2V0V2luZG93QnlOYW1lIiwiY29udHJvbCIsImRvRGVoaWRlIiwiX2ZyYW1lIiwiaW5mbyIsIl90aGlzMyIsImRvSGlkZSIsIm9mZnNldCIsImFsaWduIiwiaXNWaXNpYmxlIiwiY2hhdEJ1dHRvbiIsImFkZCIsInJlbW92ZSIsImJ1aWxkQ2hhdEFyZWEiLCJpbml0aWFsaXplQ2hhdEFyZWEiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiZ2V0Qm90VWlJbm50ZXJIdG1sIiwiYnVpbGRDaGF0V2luZG93IiwiX3RoaXM0IiwicGFyYW0iLCJmcm1XaWR0aCIsImZybUhlaWdodCIsImZybUhlaWdodE1pbiIsImZybVdpZHRoTWluIiwiZnJtVGl0bGVIZWlnaHQiLCJmcm1MZWZ0IiwiZnJtVG9wIiwieCIsInkiLCJjcmVhdGUiLCJ0aXRsZSIsImFwcGVhcmFuY2VOYW1lIiwib3ZlcmZsb3ciLCJodG1sIiwic2V0Q29udHJvbCIsImFuaW1hdGlvbiIsImFuaW1hdGlvbkR1cmF0aW9uIiwib24iLCJldnQiLCJvcGVuIiwic2lsZW50IiwiZHVyYXRpb24iLCJidWlsZCIsImhvbGRlckVsZUlkIiwiaXNBdXRvT3BlbiIsInNldEhUTUwiLCJjbGVhciIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJjbG9zZUZyYW1lIiwiQ2hhdFVJIiwiaXNTdGFydGVkIiwiYm90dWkiLCJib3RJbmZvIiwid2lkZ2V0Iiwic2VuZExhYmVsIiwicGxhY2VIb2xkZXIiLCJpbml0aWFsaXplIiwiQm90VUkiLCJ2dWUiLCJhcGkiLCJjaGF0Q2xpZW50IiwiYm90UGhvdG8iLCJvcHQiLCJzZXRCb3RQaG90byIsImh1bWFuUGhvdG8iLCJzZXRIdW1hblBob3RvIiwic3RhcnRDaGF0Ym90Iiwid2FrZXVwSW5wdXQiLCJoYW5kbGVVc2VySW5wdXQiLCJzaG93SW5wdXRQcm9tcHQiLCJzZWxmIiwiYWN0aW9uIiwidGV4dCIsImFkZE1lc3NhZ2UiLCJTQU5JVElaRV9VU0VSX0lOUFVUX0ZPUl9ESVNQTEFZIiwiYnV0dG9uIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInNhbml0aXplIiwibWVzc2FnZSIsImRlbGF5IiwicGhvdG8iLCJodW1hbiIsImNvbnRlbnQiLCJfaGFuZGxlVXNlcklucHV0IiwidXNlcklucHV0IiwiZGVsYXlNczRMb2FkaW5nSWNvbiIsIm1ldGhvZHMiLCJvblVzZXJJbnB1dCIsImNvbnN1bWVkIiwic2V0VGltZW91dCIsImxvYWRpbmciLCJsb2FkaW5nSWNvbk1zZ0lkeCIsIm9uU2VydmVyUHJvY2VzcyIsInNlcnZlclJlc3BvbnNlIiwiaGFuZGxlQ2hhdFNlcnZlclJlc3BvbnNlIiwiZXNjYXBlVXNlcklucHV0Iiwib25QcmVwYXJlUmVxdWVzdCIsIm9uRmluaXNoUmVxdWVzdCIsIm9uU2VydmVyUmVzcG9uc2UiLCJtc2dJbnRlcnZhbCIsIm91dCIsImlzVXNlcklucHV0Q29uc3VtZWQiLCJkZWxheU1zIiwiX2xvb3AiLCJvdXRJZHgiLCJyZXNUeXBlIiwidXBkYXRlIiwiY29udGVudFZhbHVlIiwiaGFuZGxlQ29udGVudCIsInlvdXR1YmVJZCIsInBhcmVudCIsImdldFJlbmRlck1vZGUiLCJfZGVsYXlNcyIsImZ1bmMiLCJjcmVhdGVXaW5kb3dGcm9tU2VydmVyTWVzc2FnZSIsIm1vYmlsZVVybCIsImFib3V0T3B0aW9uIiwib3B0QWN0aW9ucyIsIkFycmF5Iiwib3B0SWR4IiwicHVzaCIsImF1dG9IaWRlIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwiaW5kZXhPZiIsImxpYnJhcnkiLCJmYVRpbWVzIiwiZmFDb21tZW50QWx0IiwiZG9tIiwid2F0Y2giLCJDaGF0VXgiLCJpbml0IiwiYXV0b09wZW4iLCJ1aSIsImNoYXRGcmFtZSIsImJvdCIsInBhcmFtV2luIiwicGFyYW1XYWtldXBCdXR0b24iLCJWdWUiLCJvbkNoYXRXaW5kb3dDcmVhdGUiLCJ3YWtldXBUZXh0Iiwib25DaGF0V2luZG93UmVzdW1lIiwib25DaGF0V2luZG93UGF1c2UiLCJqc0ZyYW1lRm9yQ2hhdFdpbmRvdyIsImZpeGVkIiwib25tb3VzZXVwIiwiZSIsIndpbmRvd01hbmFnZXIiLCJ3aW5kb3dNb3VzZVVwIiwib25tb3VzZW1vdmUiLCJ3aW5kb3dNb3VzZU1vdmUiLCJjaGF0V2luIiwiY2hhdFdpblN0eWxlIiwiY2hhdFdpblBvcyIsImdldFBvc2l0aW9uIiwiYnJvd3NlcldpZHRoIiwiaW5uZXJXaWR0aCIsImR0V2luV2lkdGgiLCJkdFdpbkhlaWdodCIsImR0V2luTGVmdCIsImR0V2luWU9mZnNldCIsImFkZFlPZmZzZXQiLCJkdFdpblRvcCIsInBhcnNlSW50IiwicGFnZVlPZmZzZXQiLCJkdFdpbkJhY2tncm91bmRDb2xvciIsImR0V2luT3ZlcmZsb3ciLCJkZXRhaWxXaW4iLCJzdGFydCIsIm9wZW5GbGFnIiwiZGlzcG9zZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBb0I7QUFDL0IsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQXFHOztBQUVyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0FBRUEsNkJBQTZCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHFCQUFxQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFD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Q0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUssSUFBSTtBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0Esa0JBQWtCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNqQyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FB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QUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFdUc7Ozs7Ozs7Ozs7Ozs7O0FDbDRFMUY7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7OztBQzVCQSxVQUFVLG1CQUFPLENBQUMseUlBQThEO0FBQ2hGLDBCQUEwQixtQkFBTyxDQUFDLHlKQUEwRDs7QUFFNUY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SUFBOEQ7QUFDaEYsMEJBQTBCLG1CQUFPLENBQUMscUlBQWdEOztBQUVsRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGFBQWEsS0FBcUMsQ0FBQyxpQ0FBTyxFQUFFLG1DQUFDLFdBQVcsb0JBQW9CO0FBQUEsb0dBQUMsQ0FBQyxTQUFZLENBQUMsc0RBQXNELGFBQWEscUJBQXFCLG9CQUFvQixpR0FBaUcsY0FBYyw2TEFBNkwsZ0JBQWdCLHVDQUF1Qyw4RUFBOEUsY0FBYyxzQ0FBc0Msb0JBQW9CLG1DQUFtQyxjQUFjLHVHQUF1Ryx1TEFBdUwsMkJBQTJCLGlDQUFpQyxzQkFBc0IsdURBQXVELGFBQWEsRUFBRSxjQUFjLDhCQUE4QixVQUFVLFFBQVEsZ0JBQWdCLGdEQUFnRCxjQUFjLGtHQUFrRyxjQUFjLGVBQWUsa0RBQWtELDhJQUE4SSwwQkFBMEIsaUJBQWlCLGFBQWEsRUFBRSxVQUFVLHNFQUFzRSw0RkFBNEYsdUVBQXVFLGFBQWEsd0NBQXdDLEtBQUssSUFBSSxnR0FBZ0csbUJBQW1CLGdEQUFnRCxzSEFBc0gsT0FBTyw0VEFBNFQsd0NBQXdDLHdJQUF3SSx3Q0FBd0MsdUpBQXVKLHdDQUF3QyxxQkFBcUIsd0NBQXdDLHVJQUF1SSxrREFBa0QsbVlBQW1ZLHdDQUF3QyxrSEFBa0gsd0NBQXdDLHVJQUF1SSx3Q0FBd0MscUJBQXFCLHdDQUF3QyxrMUJBQWsxQiwyR0FBMkcsd0tBQXdLLDREQUE0RCwyMENBQTIwQyxlQUFlLHFEQUFxRCxpSEFBaUgsOEtBQThLLGdFQUFnRSx3WkFBd1osYUFBYSw2a0JBQTZrQiwyR0FBMkcsb0xBQW9MLDREQUE0RCx3WEFBd1gsYUFBYSx1RUFBdUUsT0FBTyxRQUFRLE1BQU0sb0NBQW9DLFVBQVUsK0NBQStDLGNBQWMsV0FBVyxvQkFBb0Isd0NBQXdDLFVBQVUsaUNBQWlDLFlBQVksb0NBQW9DLDZHQUE2Ryw0RkFBNEYsTUFBTSxVQUFVLE9BQU8seUNBQXlDLHFGQUFxRixLQUFLLCtCQUErQixzREFBc0QseUNBQXlDLDZCQUE2QixpQ0FBaUMsd0VBQXdFLDBDQUEwQyx5REFBeUQsaUhBQWlILEVBQUUsdUVBQXVFLG9DQUFvQyxvQ0FBb0Msa0NBQWtDLDRHQUE0RyxtQkFBbUIsOEVBQThFLEVBQUUsS0FBSyxvQ0FBb0MsWUFBWSxvQ0FBb0MsNkdBQTZHLG1GQUFtRixPQUFPLCtDQUErQyxpREFBaUQsa0NBQWtDLHFCQUFxQixpREFBaUQsNEJBQTRCLDJCQUEyQixxQkFBcUIsV0FBVyxxQ0FBcUMscUJBQXFCLEtBQUssZUFBZSxZQUFZLFlBQVksZ0JBQWdCLHFCQUFxQixrQkFBa0IsZ0JBQWdCLGVBQWUsaUJBQWlCLG1CQUFtQixtQkFBbUIsOEJBQThCLGlCQUFpQixzQ0FBc0Msb0JBQW9CLGdEQUFnRCxzQkFBc0Isb0JBQW9CLGtIQUFrSCxzQkFBc0IsaUVBQWlFLFFBQVEsd0RBQXdELGtCQUFrQix5QkFBeUIsaUJBQWlCLFdBQVcsdUJBQXVCLDBDQUEwQyxrQkFBa0Isd0NBQXdDLG9CQUFvQixrRUFBa0Usb0JBQW9CLGlVQUFpVSxnQ0FBZ0MseUJBQXlCLFlBQVksMEJBQTBCLGdCQUFnQixXQUFXLDhFQUE4RSxpQkFBaUIsMEJBQTBCLG9GQUFvRix3REFBd0QsbUNBQW1DLGdFQUFnRSx3QkFBd0Isd0dBQXdHLG9KQUFvSiw4Q0FBOEMsNEJBQTRCOzs7Ozs7Ozs7Ozs7QUNUeDBaO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkZBQXNDO0FBQ2hGO0FBQ0EsY0FBYyxRQUFTLGtFQUFrRTtBQUN6RjtBQUNBLGNBQWMsUUFBUyx3REFBd0Qsb0JBQW9CLDJCQUEyQiwyQ0FBMkMsRUFBRSwrQkFBK0IsdUJBQXVCLEVBQUUsOEJBQThCLHVCQUF1QixFQUFFLG9CQUFvQixxQkFBcUIsRUFBRSw0QkFBNEIsc0JBQXNCLHdCQUF3QixtQkFBbUIsOEJBQThCLEVBQUUsa0NBQWtDLHFCQUFxQixnQ0FBZ0MsRUFBRSxpQ0FBaUMsdUJBQXVCLEVBQUUsb0NBQW9DLGlEQUFpRCx1QkFBdUIseUJBQXlCLEVBQUUsa0NBQWtDLG1CQUFtQix5QkFBeUIsRUFBRSxpQ0FBaUMsbUJBQW1CLEVBQUUsK0JBQStCLGNBQWMsa0JBQWtCLHFCQUFxQixxQkFBcUIsMkNBQTJDLGtDQUFrQyxtQkFBbUIscUNBQXFDLEVBQUUsZ0NBQWdDLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixtQkFBbUIsdUJBQXVCLDhCQUE4Qix3QkFBd0IsRUFBRSxtQ0FBbUMsY0FBYyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixvQkFBb0IscUJBQXFCLHNCQUFzQix1QkFBdUIsMkNBQTJDLHdCQUF3QixrREFBa0QsRUFBRSxnQ0FBZ0MsY0FBYyxlQUFlLHFCQUFxQixxQkFBcUIsMENBQTBDLGtDQUFrQyxtQkFBbUIscUNBQXFDLEVBQUUsc0NBQXNDLGNBQWMsZUFBZSxxQkFBcUIscUJBQXFCLDBDQUEwQyxrQ0FBa0MsbUJBQW1CLHFDQUFxQyxFQUFFLHVEQUF1RCw0QkFBNEIsRUFBRSxvREFBb0QsNkNBQTZDLHlCQUF5QixFQUFFLGlKQUFpSiw2QkFBNkIsRUFBRSw4Q0FBOEMsZUFBZSxpQ0FBaUMsRUFBRSwrQ0FBK0MsaUJBQWlCLGtCQUFrQix5QkFBeUIsMEJBQTBCLDhCQUE4QixFQUFFLDRCQUE0Qix5QkFBeUIsaURBQWlELEVBQUUsNEJBQTRCLHlCQUF5QixpREFBaUQsRUFBRSw0QkFBNEIsaURBQWlELEVBQUUsd0JBQXdCLFFBQVEsaUNBQWlDLGdDQUFnQyxFQUFFLFNBQVMsb0NBQW9DLEVBQUUsU0FBUyxtQ0FBbUMsZ0NBQWdDLEVBQUUsU0FBUyxtQ0FBbUMsRUFBRSxVQUFVLG1DQUFtQyxFQUFFLEVBQUU7QUFDL3dHO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkZBQXNDO0FBQ2hGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsMk1BQTJNLG9CQUFvQixtRkFBbUYsVUFBVSx3QkFBd0IsU0FBUyxtRUFBbUUsU0FBUyxlQUFlLG1CQUFtQix3QkFBd0IsdUdBQXVHLFNBQVMsVUFBVSxvQ0FBb0MsZUFBZSwwQkFBMEIsdUJBQXVCLFdBQVcsWUFBWSxjQUFjLGlCQUFpQixXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQixlQUFlLGNBQWMsZ0JBQWdCLHFCQUFxQixjQUFjLGFBQWEsV0FBVyx1QkFBdUIsV0FBVyxjQUFjLHFCQUFxQiw2QkFBNkIsWUFBWSw4QkFBOEIsV0FBVyw2QkFBNkIsYUFBYSxjQUFjLGdCQUFnQixpQkFBaUIsNEJBQTRCLDBCQUEwQixRQUFRLGtCQUFrQixrQkFBa0IsY0FBYyxZQUFZLGdCQUFnQixjQUFjLFdBQVcsaUJBQWlCLFlBQVksa0JBQWtCLFdBQVcsWUFBWSxTQUFTLGtCQUFrQiwrREFBK0Qsb0NBQW9DLGdCQUFnQixtQkFBbUIscURBQXFELGtCQUFrQjtBQUNsbkQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyxpQkFBaUIsb0JBQW9CLEdBQUcseUJBQXlCLHVOQUF1TixHQUFHLHNCQUFzQixnREFBZ0QseUJBQXlCLHlCQUF5Qiw2QkFBNkIsc0JBQXNCLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLHNEQUFzRCw0QkFBNEIsaUJBQWlCLEdBQUcsNEJBQTRCLGtCQUFrQixnQ0FBZ0MsNEJBQTRCLDRCQUE0QixLQUFLLG9CQUFvQixpQkFBaUIsR0FBRyxxQkFBcUIsc0RBQXNELDRCQUE0QixpQkFBaUIsR0FBRyxzQkFBc0Isc0RBQXNELDRCQUE0QixpQkFBaUIsR0FBRztBQUMzakM7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQSxjQUFjLFFBQVMsa0VBQWtFO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLGdFQUFnRSxzQkFBc0IsZ0NBQWdDLDZDQUE2QyxHQUFHLCtCQUErQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsb0JBQW9CLHVCQUF1QixHQUFHLDRCQUE0Qix3QkFBd0IsMEJBQTBCLHFCQUFxQiw2QkFBNkIsR0FBRyxrQ0FBa0MscUJBQXFCLGdDQUFnQyxHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxvQ0FBb0MsaURBQWlELHVCQUF1Qix5QkFBeUIsR0FBRyxrQ0FBa0MsbUJBQW1CLHlCQUF5QixHQUFHLGlDQUFpQyxxQkFBcUIsR0FBRywrQkFBK0IsZ0JBQWdCLG9CQUFvQix1QkFBdUIsdUJBQXVCLDZDQUE2QyxvQ0FBb0MscUJBQXFCLGlCQUFpQix1Q0FBdUMsR0FBRyxnQ0FBZ0MscUJBQXFCLGtCQUFrQixtQkFBbUIsbUJBQW1CLHFCQUFxQix5QkFBeUIsZ0NBQWdDLHVCQUF1QixHQUFHLG1DQUFtQyxnQkFBZ0IscUJBQXFCLHFCQUFxQixzQkFBc0Isc0JBQXNCLHVCQUF1Qix3QkFBd0IseUJBQXlCLDZDQUE2QywwQkFBMEIsZ0NBQWdDLG9EQUFvRCxHQUFHLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsNkNBQTZDLG9DQUFvQyxxQkFBcUIsdUNBQXVDLEdBQUcsc0NBQXNDLGdCQUFnQixpQkFBaUIsdUJBQXVCLHVCQUF1Qiw2Q0FBNkMsb0NBQW9DLHFCQUFxQix1Q0FBdUMsR0FBRyx1REFBdUQsOEJBQThCLEdBQUcsb0RBQW9ELCtDQUErQywyQkFBMkIsR0FBRyxpSkFBaUosK0JBQStCLEdBQUcsOENBQThDLGlCQUFpQixtQ0FBbUMsR0FBRyxrQ0FBa0MsK0JBQStCLEdBQUcsc0RBQXNELGlCQUFpQixrQ0FBa0MsR0FBRyxrQ0FBa0MsK0JBQStCLEdBQUcsc0RBQXNELGlCQUFpQixtQ0FBbUMsR0FBRywrQ0FBK0MsbUJBQW1CLG9CQUFvQiwyQkFBMkIsNEJBQTRCLGdDQUFnQyxHQUFHLDRCQUE0Qix5QkFBeUIsaURBQWlELEdBQUcsNEJBQTRCLHlCQUF5QixpREFBaUQsR0FBRyw0QkFBNEIsaURBQWlELEdBQUcsd0JBQXdCLFVBQVUscUNBQXFDLG9DQUFvQyxPQUFPLFdBQVcsd0NBQXdDLE9BQU8sV0FBVyx1Q0FBdUMsb0NBQW9DLE9BQU8sV0FBVyx1Q0FBdUMsT0FBTyxZQUFZLHVDQUF1QyxPQUFPLEdBQUc7QUFDcjRIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQzdGQTtBQUNBLGVBQWUsR0FBRyxJQUFpRCxvQkFBb0IsS0FBSyxhQUFpSSxDQUFDLG9CQUFvQixtQkFBbUIsU0FBUyxjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsdUNBQXVDLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELGtCQUFrQixrQkFBa0IsYUFBYSxtQkFBbUIsK0VBQStFLGNBQWMsU0FBUyxtQkFBbUIsa0JBQWtCLGdDQUFnQyx1RUFBdUUseUJBQXlCLFNBQVMsT0FBTyxPQUFPLGFBQWEsUUFBUSxjQUFjLGlCQUFpQixXQUFXLDRCQUE0QixJQUFJLE1BQU0sU0FBUyxnQkFBZ0IsWUFBWSxVQUFVLFdBQVcsS0FBSyw0RUFBNEUsU0FBUyxjQUFjLG9DQUFvQyxtREFBbUQseUNBQXlDLFlBQVksU0FBUyxjQUFjLHlEQUF5RCxxQkFBcUIsV0FBVyxlQUFlLHVDQUF1Qyx1QkFBdUIsMkNBQTJDLEtBQUssMEJBQTBCLGlJQUFpSSxpQkFBaUIsU0FBUyw0QkFBNEIsMkNBQTJDLEVBQUUsb0JBQW9CLCtDQUErQyxrQkFBa0IsU0FBUyw0Q0FBNEMsS0FBSyxnREFBZ0QsNEVBQTRFLGtCQUFrQixvQ0FBb0MscUhBQXFILGtIQUFrSCxLQUFLLEtBQUssYUFBYSw2QkFBNkIsMkNBQTJDLGVBQWUsZ0JBQWdCLFVBQVUsZ0JBQWdCLFVBQVUsMERBQTBELDRDQUE0QyxhQUFhLGdDQUFnQyw0QkFBNEIsS0FBSyx3QkFBd0IsTUFBTSxzRUFBc0UsT0FBTyxVQUFVLHdCQUF3QixRQUFRLDhEQUE4RCxtQkFBbUIsbUJBQW1CLGlFQUFpRSxZQUFZLFdBQVcsS0FBSyxjQUFjLGtCQUFrQixxQkFBcUIsV0FBVyxLQUFLLGNBQWMsb0RBQW9ELE9BQU8saUJBQWlCLGFBQWEsc0JBQXNCLFNBQVMsNkJBQTZCLDZCQUE2QixvQkFBb0Isc0JBQXNCLGVBQWUsK0JBQStCLDZHQUE2RyxjQUFjLHdFQUF3RSxnRUFBZ0UsR0FBRywyQ0FBMkMsVUFBVSxxQkFBcUIsTUFBTSxxQ0FBcUMsY0FBYyxLQUFLLFlBQVkscUJBQXFCLHNDQUFzQyxTQUFTLGlCQUFpQixjQUFjLEtBQUssaUJBQWlCLG1CQUFtQixZQUFZLFdBQVcsS0FBSyxzQkFBc0IsaUZBQWlGLElBQUk7QUFDOWpKO0FBQ0Esc0JBQXNCLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxrQkFBa0Isa0JBQWtCLGVBQWUsaUJBQWlCLGFBQWEsY0FBYyxtQkFBbUIsZ0NBQWdDLGlCQUFpQixpRkFBaUYsc0JBQXNCLDRKQUE0SixHQUFHLGdCQUFnQixtQkFBbUIsNkJBQTZCLG1CQUFtQiw2REFBNkQsNEJBQTRCLElBQUksaUNBQWlDLDJEQUEyRCxPQUFPLFNBQVMsU0FBUyxRQUFRLElBQUksOEJBQThCLFFBQVEsY0FBYyxVQUFVLDBCQUEwQixpS0FBaUssR0FBRyxnQkFBZ0IsTUFBTSxvQ0FBb0Msb0RBQW9ELGdMQUFnTCxnQkFBZ0Isb0NBQW9DLDJCQUEyQixJQUFJLGNBQWMsU0FBUyxjQUFjLGlGQUFpRixnQkFBZ0IsYUFBYSxvR0FBb0csS0FBSyxrQkFBa0Isa0JBQWtCLDZDQUE2Qyx5QkFBeUIsZ0VBQWdFLGlCQUFpQiwyRUFBMkUsV0FBVyxLQUFLLHFDQUFxQyx3S0FBd0ssNkJBQTZCLGtEQUFrRCxhQUFhLFNBQVMsY0FBYyx5QkFBeUIsNkhBQTZILHdEQUF3RCxNQUFNLHNGQUFzRixXQUFXLHNGQUFzRix5Q0FBeUMsS0FBSyx3RkFBd0YsaUJBQWlCLDJHQUEyRyx1QkFBdUIsOENBQThDLFdBQVcsWUFBWSxrREFBa0QsSUFBSSxtQ0FBbUMsU0FBUyxHQUFHLFdBQVcsZUFBZSxTQUFTLHNXQUFzVyxpQkFBaUIsWUFBWSxhQUFhLHFRQUFxUSw0QkFBNEIsV0FBVyx3SEFBd0gsc0JBQXNCLDBDQUEwQyw0QkFBNEIsd0JBQXdCLHFDQUFxQyxrQ0FBa0MsZ0NBQWdDLHVCQUF1QiwwQ0FBMEMsV0FBVywrRkFBK0YsbUNBQW1DLDZCQUE2QixvQ0FBb0MsOEJBQThCLGlDQUFpQyw0QkFBNEIsa0NBQWtDLDZCQUE2QixtQ0FBbUMsNkJBQTZCLGlDQUFpQyw0QkFBNEIsOEJBQThCLHlCQUF5QixzQ0FBc0Msb0NBQW9DLDZCQUE2Qix3QkFBd0IsNkJBQTZCLHdCQUF3QixpQ0FBaUMsMEVBQTBFLGtDQUFrQyw2Q0FBNkMsWUFBWSw0RkFBNEYsbUJBQW1CLDZCQUE2QixhQUFhLFlBQVksa0RBQWtELFNBQVMsNERBQTRELGlQQUFpUCwrSEFBK0gsd0NBQXdDLHlNQUF5TSxpQ0FBaUMsd0RBQXdELGVBQWUsRUFBRSxJQUFJLGtCQUFrQixNQUFNLFlBQVksa0RBQWtELGtCQUFrQixrQkFBa0IsU0FBUyxHQUFHLGFBQWE7QUFDMy9OO0FBQ0Esc0JBQXNCLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxrQkFBa0Isa0JBQWtCLGVBQWUsaUJBQWlCLGFBQWEsY0FBYyxpRkFBaUYsZ0JBQWdCLGFBQWEsb0dBQW9HLEtBQUssZ0JBQWdCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLDZEQUE2RCw0QkFBNEIsSUFBSSxpQ0FBaUMsMkRBQTJELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSw4QkFBOEIsUUFBUSxjQUFjLFVBQVUsMEJBQTBCLGlLQUFpSyxHQUFHLGNBQWMseURBQXlELCtCQUErQix1QkFBdUIsT0FBTyxpQkFBaUIsb0JBQW9CLFFBQVEsRUFBRSxzQkFBc0IsZUFBZSxRQUFRLE1BQU0sNkpBQTZKLGtCQUFrQixPQUFPLGFBQWEsdUJBQXVCLGNBQWMsZUFBZSxrQkFBa0IsZUFBZSxTQUFTLGNBQWMsSUFBSSw4QkFBOEIsUUFBUSxnQkFBZ0IsZ0JBQWdCLE1BQU0sb0NBQW9DLG9EQUFvRCxnTEFBZ0wsZ0JBQWdCLG9DQUFvQywyQkFBMkIsSUFBSSxjQUFjLFNBQVMsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLG1DQUFtQyxTQUFTLEdBQUcsaUJBQWlCLGFBQWEsZUFBZSw4RUFBOEUsOERBQThELFFBQVEsZ0JBQWdCLCtDQUErQyxrQkFBa0IsMkhBQTJILDRCQUE0QixXQUFXLHNDQUFzQyxXQUFXLDBEQUEwRCx1Q0FBdUMsRUFBRSxPQUFPLDhCQUE4QixzREFBc0QsdUNBQXVDLGtEQUFrRCxlQUFlLHVDQUF1QyxvSEFBb0gsU0FBUyxvQ0FBb0MsbUJBQW1CLEtBQUssMkNBQTJDLFFBQVEsNEJBQTRCLG9DQUFvQyx1Q0FBdUMsVUFBVSxFQUFFLGtEQUFrRCwyRUFBMkUsNEJBQTRCLFdBQVcsc0NBQXNDLE9BQU8sbUNBQW1DLG9DQUFvQyxzR0FBc0csZUFBZSxtSEFBbUgsTUFBTSxlQUFlLGlJQUFpSSwySkFBMkosWUFBWSw2REFBNkQsNERBQTRELE1BQU0sNENBQTRDLHFGQUFxRixnUkFBZ1IsVUFBVSxFQUFFLDRDQUE0Qyx3RkFBd0YsRUFBRSxtREFBbUQsNENBQTRDLGVBQWUsYUFBYSxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsd0RBQXdELElBQUksVUFBVSxnQkFBZ0IsRUFBRSxjQUFjLHVDQUF1QyxTQUFTLE9BQU8sUUFBUSxNQUFNLG9CQUFvQix3QkFBd0IsR0FBRyxTQUFTLE9BQU8sUUFBUSxNQUFNLFVBQVUsRUFBRSxzREFBc0QsMkVBQTJFLDRDQUE0QyxlQUFlLGVBQWUsZUFBZSxzQkFBc0IsSUFBSSxVQUFVLGdCQUFnQixFQUFFLDhDQUE4QyxXQUFXLFNBQVMsT0FBTyxRQUFRLE1BQU0sVUFBVSxFQUFFLDZDQUE2Qyx5RUFBeUUsdUNBQXVDLGtCQUFrQixlQUFlLGtCQUFrQiwrQ0FBK0MsVUFBVSxFQUFFLDRDQUE0QywyRUFBMkUsdUNBQXVDLGVBQWUsZUFBZSx5QkFBeUIsRUFBRSw2Q0FBNkMseUVBQXlFLHVDQUF1QyxlQUFlLGVBQWUsZUFBZSxlQUFlLFdBQVcsRUFBRSw4Q0FBOEMsa0JBQWtCLFFBQVEsb0JBQW9CLGVBQWUsa01BQWtNLEVBQUUsOENBQThDLHFDQUFxQyxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsY0FBYyw2QkFBNkIsU0FBUyxPQUFPLFFBQVEsUUFBUSxFQUFFLDhDQUE4QywrRUFBK0Usa0NBQWtDLE1BQU0sTUFBTSxhQUFhLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxjQUFjLDhDQUE4QyxTQUFTLE9BQU8sUUFBUSxRQUFRLEtBQUssYUFBYSxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsK0NBQStDLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxzQkFBc0Isc0NBQXNDLFNBQVMsT0FBTyxRQUFRLFFBQVEsU0FBUyxPQUFPLFFBQVEsU0FBUyxFQUFFLCtDQUErQyxtQ0FBbUMsNERBQTRELEVBQUUsMENBQTBDLHFEQUFxRCxFQUFFLG1EQUFtRCwwQ0FBMEMsSUFBSSxVQUFVLGdCQUFnQixFQUFFLGlFQUFpRSxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsZ0VBQWdFLGNBQWMsU0FBUyxPQUFPLFFBQVEsUUFBUSxTQUFTLE9BQU8sUUFBUSxNQUFNLFVBQVUsRUFBRSxxREFBcUQsYUFBYSxJQUFJLFVBQVUsZ0JBQWdCLEVBQUUsMEJBQTBCLHlCQUF5QixTQUFTLE9BQU8sUUFBUSxNQUFNLGFBQWEsRUFBRSw0Q0FBNEMseUxBQXlMLGNBQWMsMExBQTBMLDZDQUE2QyxNQUFNLEVBQUUsbUNBQW1DLHNDQUFzQyx1QkFBdUIsR0FBRyxXQUFXLGVBQWUsd0JBQXdCLGNBQWMsbUhBQW1ILGlCQUFpQixrQ0FBa0MsY0FBYyxnQkFBZ0IsZ0NBQWdDLDZEQUE2RCxZQUFZLFdBQVcsS0FBSyxXQUFXLHlCQUF5QixpREFBaUQsZ0JBQWdCLG1EQUFtRCxZQUFZLG9DQUFvQyxRQUFRLG9EQUFvRCxZQUFZLHFCQUFxQixRQUFRLHFDQUFxQywrQkFBK0IsNkNBQTZDLG9DQUFvQyxzTEFBc0wsMERBQTBELGlSQUFpUix5Q0FBeUMscUJBQXFCLHdEQUF3RCx3ZEFBd2Qsd0lBQXdJLDZJQUE2SSxpVkFBaVYsdURBQXVELDBCQUEwQixzREFBc0QsMkJBQTJCLHdCQUF3Qix5QkFBeUIscURBQXFELDJCQUEyQiwwREFBMEQsOEJBQThCLDZEQUE2RCxtQ0FBbUMsdWJBQXViLGtDQUFrQyxxSUFBcUksK1BBQStQLFlBQVksV0FBVyxvT0FBb08sV0FBVyxNQUFNLDJQQUEyUCxPQUFPLGlDQUFpQyxhQUFhLGVBQWUscUJBQXFCLCswQkFBKzBCLGVBQWUsOEVBQThFLGdCQUFnQixhQUFhLHFHQUFxRyxrQkFBa0IseUNBQXlDLGtEQUFrRCxXQUFXLGNBQWMsc0VBQXNFLHFDQUFxQyxrREFBa0QsSUFBSSx3QkFBd0Isc0JBQXNCLGdCQUFnQixnRUFBZ0UsS0FBSyxxQ0FBcUMsVUFBVSxzQ0FBc0MsaUJBQWlCLFdBQVcsZUFBZSxpQkFBaUIsYUFBYSxNQUFNLGtFQUFrRSxxRUFBcUUsSUFBSSxlQUFlLE1BQU0sNEJBQTRCLFdBQVcsb0NBQW9DLFdBQVcsNG5CQUE0bkIsdUNBQXVDLDZCQUE2QiwwTUFBME0sd0JBQXdCLFdBQVcsMkxBQTJMLGdCQUFnQiw0QkFBNEIsa0tBQWtLLDRDQUE0QyxlQUFlLDRCQUE0QixvQkFBb0IscXNCQUFxc0IsNEJBQTRCLFdBQVcsMk1BQTJNLGdzQkFBZ3NCLG9DQUFvQyxvUEFBb1AscVNBQXFTLFFBQVEsa0dBQWtHLHlnQkFBeWdCLG1FQUFtRSx1UkFBdVIsc0NBQXNDLHdFQUF3RSxtYUFBbWEsZ0RBQWdELDBCQUEwQixpQ0FBaUMsc0NBQXNDLDZLQUE2SyxrR0FBa0cscURBQXFELGlGQUFpRixxREFBcUQsZ0ZBQWdGLHFEQUFxRCxvTEFBb0wsbUhBQW1ILDZCQUE2Qiw4RUFBOEUsNkJBQTZCLDJVQUEyVSxvQkFBb0IsMkJBQTJCLGlNQUFpTSw0Q0FBNEMsbUNBQW1DLHlCQUF5QixLQUFLLHlFQUF5RSw4RUFBOEUsR0FBRyxtREFBbUQseUJBQXlCLCtGQUErRiwydkJBQTJ2Qix3QkFBd0Isc0NBQXNDLGswQkFBazBCLG9CQUFvQix3akJBQXdqQixvbEJBQW9sQixvc0JBQW9zQix3QkFBd0IsMENBQTBDLFdBQVcsK0NBQStDLHlCQUF5QixnQ0FBZ0MsR0FBRyw0QkFBNEIsV0FBVyw4UUFBOFEsdUJBQXVCLGNBQWMsb0JBQW9CLHNsQkFBc2xCLGlCQUFpQixpQkFBaUIsV0FBVyxZQUFZLDBJQUEwSSxpQkFBaUIsaUJBQWlCLFdBQVcsWUFBWSwySkFBMkosaUJBQWlCLGlCQUFpQixXQUFXLFlBQVksMEpBQTBKLGlCQUFpQixpQkFBaUIsV0FBVyxZQUFZLHFDQUFxQywwR0FBMEcsa0RBQWtELGdCQUFnQixHQUFHLDJCQUEyQiwyR0FBMkcsbURBQW1ELG1DQUFtQyxHQUFHLGNBQWMsaUNBQWlDLGNBQWMsbUNBQW1DLDBGQUEwRixVQUFVLHlJQUF5SSxtQkFBbUIsMkNBQTJDLHNCQUFzQixpQ0FBaUMsNENBQTRDLG9DQUFvQyxXQUFXLCtHQUErRyx5Q0FBeUMsZ0ZBQWdGLDBEQUEwRCwrQ0FBK0MsdUNBQXVDLHFMQUFxTCx1RkFBdUYscUNBQXFDLFFBQVEsMEJBQTBCLHVCQUF1QixpQ0FBaUMsT0FBTyxrQkFBa0IsdUNBQXVDLDZCQUE2QixvRUFBb0UsNkJBQTZCLGdPQUFnTyxZQUFZLGtJQUFrSSxlQUFlLHlCQUF5Qix1QkFBdUIsaUNBQWlDLE9BQU8sb0JBQW9CLDJJQUEySSxtVkFBbVYscUVBQXFFLEtBQUssc1BBQXNQLDZCQUE2QiwwQkFBMEIsNkRBQTZELFlBQVksaUNBQWlDLGtEQUFrRCxnQ0FBZ0MsNkJBQTZCLDRCQUE0QixXQUFXLCtEQUErRCx3Q0FBd0MseUVBQXlFLHVGQUF1RixrREFBa0Qsb0NBQW9DLDJCQUEyQiwwREFBMEQsaUNBQWlDLHNEQUFzRCw2RUFBNkUsUUFBUSxtQkFBbUIsNkdBQTZHLHlDQUF5QywwQkFBMEIsWUFBWSxrTEFBa0wsc0hBQXNILDJDQUEyQyxnR0FBZ0csa0RBQWtELDRFQUE0RSxrREFBa0QsZ0NBQWdDLHNGQUFzRiw4Q0FBOEMsdUNBQXVDLDJDQUEyQyw0Q0FBNEMsdUNBQXVDLHdDQUF3QyxzREFBc0QsNkJBQTZCLHVDQUF1Qyx1QkFBdUIsc0VBQXNFLHNEQUFzRCw2QkFBNkIsdUNBQXVDLHVCQUF1QiwyREFBMkQsc0RBQXNELDZCQUE2Qix1Q0FBdUMsc0VBQXNFLFdBQVcsaURBQWlELGtDQUFrQyxXQUFXLDZCQUE2QixpQ0FBaUMsdUVBQXVFLFNBQVMsc0NBQXNDLDZLQUE2Syw4TEFBOEwseUdBQXlHLDJLQUEySywyQkFBMkIsdWlCQUF1aUIseUNBQXlDLHFIQUFxSCxpQ0FBaUMsdUJBQXVCLCtCQUErQixnRUFBZ0UseUJBQXlCLG9DQUFvQyx3QkFBd0Isd0NBQXdDLDZDQUE2QyxXQUFXLDJLQUEySyxpREFBaUQsNEJBQTRCLG9DQUFvQyxTQUFTLDhDQUE4Qyw0QkFBNEIseUNBQXlDLHlDQUF5QyxtREFBbUQsd0RBQXdELFdBQVcsNHlCQUE0eUIsb0NBQW9DLHlEQUF5RCx3NkJBQXc2QixrQkFBa0IsZ0NBQWdDLGdEQUFnRCwrQkFBK0IsK0NBQStDLGlDQUFpQyxpREFBaUQsa0NBQWtDLGtEQUFrRCxnQ0FBZ0MsT0FBTywrQ0FBK0MscUNBQXFDLFNBQVMsOEVBQThFLG9DQUFvQyxxQkFBcUIsZ0NBQWdDLDBCQUEwQixpQ0FBaUMscUJBQXFCLDRDQUE0QyxtQkFBbUIsMkNBQTJDLHVCQUF1QixpQ0FBaUMsd0JBQXdCLHlDQUF5Qyw4Q0FBOEMsbUNBQW1DLDJCQUEyQiwrREFBK0QsNkRBQTZELHFIQUFxSCxLQUFLLDJCQUEyQix1R0FBdUcsZ0NBQWdDLDJDQUEyQywyREFBMkQsT0FBTyx1Q0FBdUMsRUFBRSxHQUFHLHdDQUF3QyxvSEFBb0gsbURBQW1ELDJCQUEyQixhQUFhLDZIQUE2SCxrQ0FBa0MsMERBQTBELE9BQU8sNEJBQTRCLEVBQUUsR0FBRyxrQ0FBa0MsT0FBTyw4Q0FBOEMscUNBQXFDLE9BQU8sNEJBQTRCLEVBQUUsSUFBSSxnREFBZ0QsV0FBVyx1Q0FBdUMsMkhBQTJILHltQkFBeW1CLDhDQUE4Qyx5QkFBeUIsaW5CQUFpbkIsOENBQThDLG1JQUFtSSxTQUFTLElBQUksMkNBQTJDLHlCQUF5Qix5b0JBQXlvQiwyQ0FBMkMsdUNBQXVDLFNBQVMsSUFBSSw4QkFBOEIsNEZBQTRGLG1DQUFtQyxtQkFBbUIsd1hBQXdYLHFCQUFxQiwyRkFBMkYsbUhBQW1ILG1EQUFtRCxnUUFBZ1EseUNBQXlDLHlCQUF5Qiw2QkFBNkIsa0RBQWtELHFDQUFxQyxnQ0FBZ0MsU0FBUywwREFBMEQsc0NBQXNDLHlCQUF5QixvQkFBb0IsNkNBQTZDLHNCQUFzQixpQ0FBaUMscWdCQUFxZ0IsMkNBQTJDLDRDQUE0Qyx3Q0FBd0Msa0NBQWtDLG1NQUFtTSwyU0FBMlMsK0dBQStHLGlmQUFpZix3Q0FBd0MsbUNBQW1DLDhCQUE4QixvaEJBQW9oQixxQkFBcUIsbUdBQW1HLDJDQUEyQyxxQkFBcUIsT0FBTywyQ0FBMkMsMENBQTBDLGtDQUFrQyx5RUFBeUUsaUdBQWlHLDhmQUE4Zix3Q0FBd0MsbUNBQW1DLDhCQUE4QixrVUFBa1UscUNBQXFDLGlDQUFpQyxnQkFBZ0IsV0FBVyxxRUFBcUUsa0NBQWtDLGdDQUFnQyxXQUFXLGtDQUFrQyx3RkFBd0Ysa0JBQWtCLHdCQUF3Qix5QkFBeUIsdUJBQXVCLGlDQUFpQywwQkFBMEIscUVBQXFFLHlOQUF5Tiw0RkFBNEYsa0JBQWtCLHdCQUF3Qix3QkFBd0IsdUJBQXVCLDBCQUEwQixxRUFBcUUsaU5BQWlOLCtIQUErSCxHQUFHLHNDQUFzQywwQ0FBMEMsc0NBQXNDLHdCQUF3QixzQ0FBc0MsNkJBQTZCLHNDQUFzQyxtREFBbUQsb0NBQW9DLHlHQUF5RywwQ0FBMEMsd0JBQXdCLG1DQUFtQyxvQ0FBb0MsMERBQTBELDRDQUE0QywyQkFBMkIseUNBQXlDLHlCQUF5QixnQ0FBZ0MseUNBQXlDLHdDQUF3Qyx5QkFBeUIsZ0JBQWdCLG1DQUFtQywwREFBMEQscUJBQXFCLGlMQUFpTCwwREFBMEQsdUNBQXVDLGdCQUFnQixvQkFBb0IsZ0JBQWdCLGlCQUFpQixvQ0FBb0MsK0JBQStCLFlBQVksa0JBQWtCLHVEQUF1RCxzQkFBc0IsbURBQW1ELGVBQWUsTUFBTSxnQkFBZ0IsV0FBVywrREFBK0Qsb0JBQW9CLHFCQUFxQiwrREFBK0QscURBQXFELGVBQWUsVUFBVSw0RUFBNEUsMkJBQTJCLG9EQUFvRCwrQ0FBK0MsMENBQTBDLGVBQWUsVUFBVSxxRkFBcUYseUNBQXlDLDJDQUEyQywrRUFBK0UsZ0NBQWdDLFNBQVMsY0FBYyxxUEFBcVAsMkZBQTJGLGtDQUFrQyxtQ0FBbUMsa0JBQWtCLEdBQUcsbUJBQW1CLHdEQUF3RCxtQkFBbUIsb0NBQW9DLHVDQUF1QyxrQkFBa0IsYUFBYSxpSkFBaUosdUJBQXVCLHNEQUFzRCxtQ0FBbUMsK0NBQStDLDJGQUEyRixxREFBcUQsNEdBQTRHLDJCQUEyQixpRkFBaUYsb1BBQW9QLFNBQVMsNENBQTRDLGdEQUFnRCx5Q0FBeUMsNkNBQTZDLHFDQUFxQyxpQkFBaUIsMEVBQTBFLGdDQUFnQyx3REFBd0QsR0FBRyw4Q0FBOEMsYUFBYSx1Q0FBdUMsYUFBYSxpREFBaUQsZUFBZSxxRUFBcUUsMkNBQTJDLHNCQUFzQiw2Q0FBNkMsbUNBQW1DLHdFQUF3RSxrQkFBa0IsbUVBQW1FLFNBQVMsbUNBQW1DLE1BQU0saUdBQWlHLGtEQUFrRCxzUUFBc1EsbUNBQW1DLDRHQUE0RyxnQkFBZ0IscUpBQXFKLGNBQWMsd0JBQXdCLG9CQUFvQixhQUFhLGVBQWUsZUFBZSw2QkFBNkIsRUFBRSx1Q0FBdUMsMEJBQTBCLCtQQUErUCxpSUFBaUkscUJBQXFCLHFCQUFxQixJQUFJLDhCQUE4QixpQkFBaUIsbUJBQW1CLCtEQUErRCxPQUFPLDRCQUE0QixPQUFPLHVCQUF1QixpQkFBaUIsbURBQW1ELHNIQUFzSCxpRUFBaUUsOERBQThELHlEQUF5RCxrQ0FBa0MsbUNBQW1DLEdBQUcsK0JBQStCLHdMQUF3TCxpRUFBaUUsOERBQThELHlEQUF5RCxrQ0FBa0MsbUNBQW1DLEdBQUcsc0NBQXNDLHFDQUFxQyxtQkFBbUIscUJBQXFCLG1CQUFtQjtBQUNuNXhEO0FBQ0Esc0JBQXNCLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxrQkFBa0Isa0JBQWtCLGVBQWUsaUJBQWlCLGFBQWEsY0FBYyx5REFBeUQsc0NBQXNDLE1BQU0sb0NBQW9DLG9EQUFvRCxnTEFBZ0wsTUFBTSx1QkFBdUIsT0FBTyxpQkFBaUIsb0JBQW9CLFFBQVEsRUFBRSxzQkFBc0IsZUFBZSxRQUFRLE1BQU0sNkpBQTZKLGtCQUFrQixPQUFPLGFBQWEsdUJBQXVCLGNBQWMsZUFBZSxrQkFBa0IsZUFBZSxTQUFTLGNBQWMsSUFBSSw4QkFBOEIsUUFBUSxnQkFBZ0IsZ0JBQWdCLG9DQUFvQywyQkFBMkIsSUFBSSxjQUFjLFNBQVMsZ0JBQWdCLDhFQUE4RSxnQkFBZ0IsWUFBWSxXQUFXLEtBQUssV0FBVywrR0FBK0csa0JBQWtCLHVDQUF1QyxtQ0FBbUMsU0FBUyx5Q0FBeUMsU0FBUyx3Q0FBd0MsU0FBUyxHQUFHLGlCQUFpQixjQUFjLG9FQUFvRSxhQUFhLElBQUksVUFBVSxnQkFBZ0IsRUFBRSxzQkFBc0IsMkJBQTJCLFNBQVMsT0FBTyxRQUFRLE9BQU8sMkJBQTJCLGFBQWEsNkJBQTZCLDhCQUE4Qiw2REFBNkQsRUFBRSxpQ0FBaUMsZ0NBQWdDLGlFQUFpRSxFQUFFLDZCQUE2QixpQ0FBaUMsRUFBRSwrQkFBK0IsOEJBQThCLHlDQUF5QyxnQ0FBZ0MseUJBQXlCLG1DQUFtQyxJQUFJLFVBQVUsZ0JBQWdCLG1CQUFtQixTQUFTLE9BQU8sUUFBUSxRQUFRLEVBQUUseUNBQXlDLDRCQUE0Qiw4QkFBOEIsbUNBQW1DLG1DQUFtQyxJQUFJLFVBQVUsZ0JBQWdCLHlDQUF5QyxTQUFTLE9BQU8sUUFBUSxNQUFNLFVBQVUsRUFBRSxnQ0FBZ0MscUNBQXFDLElBQUksVUFBVSxnQkFBZ0Isb0JBQW9CLFNBQVMsT0FBTyxRQUFRLE1BQU0seUJBQXlCLHVDQUF1QyxJQUFJLFVBQVUsZ0JBQWdCLG9CQUFvQixTQUFTLE9BQU8sUUFBUSxNQUFNLHVEQUF1RCxLQUFLLGdCQUFnQixhQUFhLGdDQUFnQyxhQUFhLGdDQUFnQyx1QkFBdUIsRUFBRSx1Q0FBdUMsb0NBQW9DLEVBQUUsd0NBQXdDLDRCQUE0QixFQUFFLHlDQUF5Qyw4QkFBOEIsSUFBSSxVQUFVLGdCQUFnQixnQkFBZ0IsU0FBUyxPQUFPLFFBQVEsUUFBUSxLQUFLLGdCQUFnQixhQUFhLHVDQUF1QyxhQUFhLGdDQUFnQyw4QkFBOEIsRUFBRSx3Q0FBd0Msb0NBQW9DLEVBQUUsMENBQTBDLCtCQUErQixFQUFFLHlDQUF5Qyx5Q0FBeUMsSUFBSSxVQUFVLGdCQUFnQixnQkFBZ0IsU0FBUyxPQUFPLFFBQVEsUUFBUSxLQUFLLEdBQUcsV0FBVyxpQkFBaUIsYUFBYSxnQ0FBZ0MsY0FBYywrdENBQSt0QywwSUFBMEksb0tBQW9LLHFGQUFxRix5QkFBeUIsb0NBQW9DLFdBQVcsZ0lBQWdJLDREQUE0RCwwQkFBMEIsY0FBYyxxQkFBcUIsOENBQThDLGlDQUFpQyx1Q0FBdUMsbUJBQW1CLEdBQUcsYUFBYSxrRUFBa0UsaUNBQWlDLGdLQUFnSyxzQ0FBc0MsRUFBRSxtZUFBbWUsNEpBQTRKLEdBQUcsNkNBQTZDLDBFQUEwRSwwQ0FBMEMsNkNBQTZDLGtCQUFrQiw4Q0FBOEMsaUNBQWlDLDJPQUEyTyxrQkFBa0IsMkJBQTJCLHNOQUFzTiw4Q0FBOEMsMkxBQTJMLHNCQUFzQixrRUFBa0Usc0JBQXNCLElBQUksK0JBQStCLG1CQUFtQiw4QkFBOEIsK0RBQStELG9DQUFvQyxtQkFBbUIsTUFBTSxzQ0FBc0MsdUJBQXVCLHNDQUFzQyxxQkFBcUIsd0hBQXdILDRNQUE0TSw4T0FBOE8sR0FBRyx1Q0FBdUMsMEJBQTBCLHdCQUF3QixFQUFFLDhDQUE4QywwQkFBMEIsdUNBQXVDLEVBQUUsb0NBQW9DLFdBQVcsNERBQTRELDBCQUEwQixjQUFjLG9GQUFvRiwrSUFBK0ksR0FBRyw2Q0FBNkMsa0hBQWtILDREQUE0RCxpQkFBaUIsNk5BQTZOLHNCQUFzQixrRUFBa0Usc0JBQXNCLEdBQUcsK0JBQStCLDRGQUE0RixNQUFNLHNDQUFzQyxxQkFBcUIsMExBQTBMLGtMQUFrTCxHQUFHLGdDQUFnQyxXQUFXLGtEQUFrRCxzQkFBc0IsY0FBYyx5REFBeUQsT0FBTyw4QkFBOEIsTUFBTSx5Q0FBeUMsdUJBQXVCLHdDQUF3QyxxRkFBcUYsUUFBUSxlQUFlLHVCQUF1Qiw0Q0FBNEMscUJBQXFCLCtDQUErQyxnREFBZ0Qsc0RBQXNELG1FQUFtRSwrREFBK0QsbURBQW1ELGdFQUFnRSw0REFBNEQsNEJBQTRCLGdDQUFnQyxtR0FBbUcsaUJBQWlCLHNCQUFzQixPQUFPLDZDQUE2QyxjQUFjLHFGQUFxRixnQkFBZ0Isc0RBQXNELGdCQUFnQixHQUFHLGlFQUFpRSwySEFBMkgsTUFBTSxrQ0FBa0MsV0FBVyxzREFBc0QseU1BQXlNLEVBQUUseUNBQXlDLDBCQUEwQixnREFBZ0QsdUNBQXVDLHdCQUF3Qix1REFBdUQsZ0NBQWdDLDRCQUE0Qiw2Q0FBNkMsdURBQXVELDBDQUEwQyx3QkFBd0Isd0NBQXdDLDBCQUEwQiw4Q0FBOEMsZ0hBQWdILE9BQU8sc0xBQXNMLHVDQUF1QyxvRkFBb0Ysa0tBQWtLLGlCQUFpQixpRkFBaUYsNFhBQTRYLGlCQUFpQixtRUFBbUUsWUFBWSxvREFBb0QsWUFBWSxHQUFHLCtCQUErQix3R0FBd0csMkxBQTJMLHNDQUFzQyx1REFBdUQsdVRBQXVULGFBQWEsR0FBRyxxQ0FBcUMsV0FBVyxvWEFBb1gsb0RBQW9ELG1CQUFtQiwySEFBMkgsdUJBQXVCLDBEQUEwRCwwQkFBMEIsc0RBQXNELHlCQUF5QixFQUFFLGlFQUFpRSx3QkFBd0IsZ0hBQWdILEVBQUUsb0RBQW9ELHlDQUF5QyxzREFBc0QsNkNBQTZDLGdEQUFnRCxPQUFPLHVCQUF1Qix1REFBdUQsa0RBQWtELHFDQUFxQywyQ0FBMkMsV0FBVywrZUFBK2UsdUJBQXVCLHlEQUF5RCxhQUFhLGVBQWUsaUJBQWlCLGFBQWEsV0FBVyxrRkFBa0Ysa0NBQWtDLHFHQUFxRyxxQkFBcUIsMkNBQTJDLGdDQUFnQywyQ0FBMkMsa0NBQWtDLGtDQUFrQywrQkFBK0IsbUNBQW1DLFdBQVcsMkdBQTJHLEdBQUcsR0FBRyxZQUFZLGlCQUFpQixtQkFBbUIsYUFBYSxXQUFXLGlUQUFpVCxxQ0FBcUMsMjZCQUEyNkIsWUFBWSxpSEFBaUgsRUFBRSxpSEFBaUgsTUFBTSw4QkFBOEIsc0JBQXNCLDBEQUEwRCw0VkFBNFYsMkJBQTJCLDBEQUEwRCw2Q0FBNkMsdUNBQXVDLGdGQUFnRixtQ0FBbUMsb0JBQW9CLHFEQUFxRCx5QkFBeUIsOEhBQThILGFBQWEsaUJBQWlCLGFBQWEsK0dBQStHLG1EQUFtRCx5QkFBeUIsY0FBYyxvQ0FBb0MsaUJBQWlCLGtCQUFrQixZQUFZLGNBQWMsZ0JBQWdCLDBCQUEwQiw4QkFBOEIsZ0NBQWdDLFdBQVcsZ1JBQWdSLGFBQWEsZUFBZSxzQkFBc0Isc0dBQXNHLGVBQWUsd0JBQXdCLFdBQVcsbVdBQW1XLDJDQUEyQywyREFBMkQsa0NBQWtDLGdFQUFnRSxvQ0FBb0MsbUVBQW1FLG9CQUFvQixvRUFBb0UsMHdCQUEwd0IsMENBQTBDLHVEQUF1RCw2Q0FBNkMsNkRBQTZELGFBQWEsaUJBQWlCLE1BQU0sV0FBVyxpQ0FBaUMsT0FBTyxVQUFVLHdCQUF3QixLQUFLLHl3QkFBeXdCLDJCQUEyQixrSUFBa0ksRUFBRSxtSUFBbUksMkJBQTJCLDRDQUE0QywrTkFBK04scU1BQXFNLDBEQUEwRCw4TkFBOE4sc0JBQXNCLDJLQUEySyxZQUFZLFdBQVcsNkNBQTZDLGtDQUFrQyxvQ0FBb0Msc0JBQXNCLHVTQUF1UyxvQ0FBb0Msc0JBQXNCLG1MQUFtTCxvQ0FBb0Msa0NBQWtDLG9DQUFvQywyQ0FBMkMsWUFBWSxVQUFVLGFBQWEscUNBQXFDLHFrQkFBcWtCLHdDQUF3QyxFQUFFLDhDQUE4Qyw4REFBOEQsc0NBQXNDLHFYQUFxWCwwQ0FBMEMsdUJBQXVCLHdCQUF3Qiw4RkFBOEYsc0NBQXNDLHFYQUFxWCx5REFBeUQscVhBQXFYLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHNGQUFzRixJQUFJLGlCQUFpQixtQkFBbUIsK0RBQStELE9BQU8sNEJBQTRCLE9BQU8sdUJBQXVCLGlCQUFpQixnRUFBZ0Usc0hBQXNILGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRyw0Q0FBNEMsd0xBQXdMLGlFQUFpRSw4REFBOEQseURBQXlELGtDQUFrQyxtQ0FBbUMsR0FBRyxxQkFBcUIsaUJBQWlCLHFDQUFxQyxtdUJBQW11QiwyQkFBMkIsa0lBQWtJLEVBQUUsbUlBQW1JLDJCQUEyQiwwREFBMEQsb3BCQUFvcEIsMkVBQTJFLDJDQUEyQyxvQ0FBb0MscXBCQUFxcEIsMkJBQTJCLGtEQUFrRCw4Q0FBOEMsb0NBQW9DLHFwQkFBcXBCLDJCQUEyQixrREFBa0QsOENBQThDLG9DQUFvQyxvcEJBQW9wQiwyQkFBMkIsa0RBQWtELHVFQUF1RSxvQ0FBb0MscXBCQUFxcEIsMkJBQTJCLGtEQUFrRCxvRUFBb0UsSUFBSSxpQkFBaUIsbUJBQW1CLCtEQUErRCxPQUFPLDRCQUE0QixPQUFPLHVCQUF1QixpQkFBaUIsZ0VBQWdFLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcsNENBQTRDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcscUJBQXFCLGlCQUFpQixxQ0FBcUMsaXVCQUFpdUIsMkJBQTJCLDRIQUE0SCxFQUFFLDZIQUE2SCwyQkFBMkIsMERBQTBELGdzQkFBZ3NCLDJEQUEyRCxzREFBc0QsSUFBSSxpQkFBaUIsbUJBQW1CLCtEQUErRCxPQUFPLDRCQUE0QixPQUFPLHVCQUF1QixpQkFBaUIsNkRBQTZELHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcseUNBQXlDLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcscUJBQXFCLGVBQWUsK0JBQStCLHl5QkFBeXlCLDJCQUEyQiwyREFBMkQsMkJBQTJCLDBEQUEwRCwrc0JBQStzQiwyQkFBMkIsc0RBQXNELElBQUksaUJBQWlCLE1BQU0sV0FBVyxrQkFBa0IsZ0NBQWdDLDhEQUE4RCwyQ0FBMkMseWlCQUF5aUIsZ0NBQWdDLG1NQUFtTSwyQkFBMkIsZ0hBQWdILDZEQUE2RCw2WUFBNlksWUFBWSx1REFBdUQsY0FBYyx1Q0FBdUMscUJBQXFCLHlCQUF5QixrQ0FBa0MsMkVBQTJFLE9BQU8sc0hBQXNILGlDQUFpQyxPQUFPLFFBQVEscUNBQXFDLFVBQVUsK0NBQStDLFdBQVcsa0lBQWtJLGdEQUFnRCxFQUFFLDZEQUE2RCxFQUFFLDJEQUEyRCxFQUFFLDZEQUE2RCxFQUFFLHdEQUF3RCxvQkFBb0IsS0FBSyxtK0JBQW0rQiwyQkFBMkIsMkRBQTJELDJCQUEyQixvQkFBb0IsSUFBSSxpQkFBaUIsbUJBQW1CLCtEQUErRCxPQUFPLDRCQUE0QixPQUFPLHVCQUF1QixpQkFBaUIsZ0VBQWdFLHdCQUF3QixrQ0FBa0MsbUNBQW1DLEdBQUcsNENBQTRDLHdCQUF3QixtQ0FBbUMsb0NBQW9DLEdBQUcscUJBQXFCLGlCQUFpQixXQUFXLHNDQUFzQyxPQUFPLDZDQUE2QyxNQUFNLFNBQVMsc1FBQXNRLHVDQUF1Qyx5QkFBeUIsd0ZBQXdGLE9BQU8sMkNBQTJDLGlDQUFpQyxtSEFBbUgsbUNBQW1DLGNBQWMsYUFBYSwyREFBMkQsTUFBTSx5Q0FBeUMsa0JBQWtCLElBQUksR0FBRyxHOzs7Ozs7Ozs7OztBQ1B4eDVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogRm9udCBBd2Vzb21lIEZyZWUgNS4xNS40IGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxuICovXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBfV0lORE9XID0ge307XG52YXIgX0RPQ1VNRU5UID0ge307XG52YXIgX01VVEFUSU9OX09CU0VSVkVSID0gbnVsbDtcbnZhciBfUEVSRk9STUFOQ0UgPSB7XG4gIG1hcms6IG5vb3AsXG4gIG1lYXN1cmU6IG5vb3Bcbn07XG5cbnRyeSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgX1dJTkRPVyA9IHdpbmRvdztcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIF9ET0NVTUVOVCA9IGRvY3VtZW50O1xuICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnKSBfTVVUQVRJT05fT0JTRVJWRVIgPSBNdXRhdGlvbk9ic2VydmVyO1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJykgX1BFUkZPUk1BTkNFID0gcGVyZm9ybWFuY2U7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgX3JlZiA9IF9XSU5ET1cubmF2aWdhdG9yIHx8IHt9LFxuICAgIF9yZWYkdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQsXG4gICAgdXNlckFnZW50ID0gX3JlZiR1c2VyQWdlbnQgPT09IHZvaWQgMCA/ICcnIDogX3JlZiR1c2VyQWdlbnQ7XG5cbnZhciBXSU5ET1cgPSBfV0lORE9XO1xudmFyIERPQ1VNRU5UID0gX0RPQ1VNRU5UO1xudmFyIE1VVEFUSU9OX09CU0VSVkVSID0gX01VVEFUSU9OX09CU0VSVkVSO1xudmFyIFBFUkZPUk1BTkNFID0gX1BFUkZPUk1BTkNFO1xudmFyIElTX0JST1dTRVIgPSAhIVdJTkRPVy5kb2N1bWVudDtcbnZhciBJU19ET00gPSAhIURPQ1VNRU5ULmRvY3VtZW50RWxlbWVudCAmJiAhIURPQ1VNRU5ULmhlYWQgJiYgdHlwZW9mIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG52YXIgSVNfSUUgPSB+dXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSB8fCB+dXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQvJyk7XG5cbnZhciBOQU1FU1BBQ0VfSURFTlRJRklFUiA9ICdfX19GT05UX0FXRVNPTUVfX18nO1xudmFyIFVOSVRTX0lOX0dSSUQgPSAxNjtcbnZhciBERUZBVUxUX0ZBTUlMWV9QUkVGSVggPSAnZmEnO1xudmFyIERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MgPSAnc3ZnLWlubGluZS0tZmEnO1xudmFyIERBVEFfRkFfSTJTVkcgPSAnZGF0YS1mYS1pMnN2Zyc7XG52YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVCA9ICdkYXRhLWZhLXBzZXVkby1lbGVtZW50JztcbnZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UX1BFTkRJTkcgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudC1wZW5kaW5nJztcbnZhciBEQVRBX1BSRUZJWCA9ICdkYXRhLXByZWZpeCc7XG52YXIgREFUQV9JQ09OID0gJ2RhdGEtaWNvbic7XG52YXIgSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTID0gJ2ZvbnRhd2Vzb21lLWkyc3ZnJztcbnZhciBNVVRBVElPTl9BUFBST0FDSF9BU1lOQyA9ICdhc3luYyc7XG52YXIgVEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMgPSBbJ0hUTUwnLCAnSEVBRCcsICdTVFlMRScsICdTQ1JJUFQnXTtcbnZhciBQUk9EVUNUSU9OID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KCk7XG52YXIgUFJFRklYX1RPX1NUWUxFID0ge1xuICAnZmFzJzogJ3NvbGlkJyxcbiAgJ2Zhcic6ICdyZWd1bGFyJyxcbiAgJ2ZhbCc6ICdsaWdodCcsXG4gICdmYWQnOiAnZHVvdG9uZScsXG4gICdmYWInOiAnYnJhbmRzJyxcbiAgJ2Zhayc6ICdraXQnLFxuICAnZmEnOiAnc29saWQnXG59O1xudmFyIFNUWUxFX1RPX1BSRUZJWCA9IHtcbiAgJ3NvbGlkJzogJ2ZhcycsXG4gICdyZWd1bGFyJzogJ2ZhcicsXG4gICdsaWdodCc6ICdmYWwnLFxuICAnZHVvdG9uZSc6ICdmYWQnLFxuICAnYnJhbmRzJzogJ2ZhYicsXG4gICdraXQnOiAnZmFrJ1xufTtcbnZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xudmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCBBd2Vzb21lIChbNSBdKikoU29saWR8UmVndWxhcnxMaWdodHxEdW90b25lfEJyYW5kc3xGcmVlfFByb3xLaXQpLiovaTsgLy8gVE9ETzogZG8gd2UgbmVlZCB0byBoYW5kbGUgZm9udC13ZWlnaHQgZm9yIGtpdCBTVkcgcHNldWRvLWVsZW1lbnRzP1xuXG52YXIgRk9OVF9XRUlHSFRfVE9fUFJFRklYID0ge1xuICAnOTAwJzogJ2ZhcycsXG4gICc0MDAnOiAnZmFyJyxcbiAgJ25vcm1hbCc6ICdmYXInLFxuICAnMzAwJzogJ2ZhbCdcbn07XG52YXIgb25lVG9UZW4gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdO1xudmFyIG9uZVRvVHdlbnR5ID0gb25lVG9UZW4uY29uY2F0KFsxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF0pO1xudmFyIEFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04gPSBbJ2NsYXNzJywgJ2RhdGEtcHJlZml4JywgJ2RhdGEtaWNvbicsICdkYXRhLWZhLXRyYW5zZm9ybScsICdkYXRhLWZhLW1hc2snXTtcbnZhciBEVU9UT05FX0NMQVNTRVMgPSB7XG4gIEdST1VQOiAnZ3JvdXAnLFxuICBTV0FQX09QQUNJVFk6ICdzd2FwLW9wYWNpdHknLFxuICBQUklNQVJZOiAncHJpbWFyeScsXG4gIFNFQ09OREFSWTogJ3NlY29uZGFyeSdcbn07XG52YXIgUkVTRVJWRURfQ0xBU1NFUyA9IFsneHMnLCAnc20nLCAnbGcnLCAnZncnLCAndWwnLCAnbGknLCAnYm9yZGVyJywgJ3B1bGwtbGVmdCcsICdwdWxsLXJpZ2h0JywgJ3NwaW4nLCAncHVsc2UnLCAncm90YXRlLTkwJywgJ3JvdGF0ZS0xODAnLCAncm90YXRlLTI3MCcsICdmbGlwLWhvcml6b250YWwnLCAnZmxpcC12ZXJ0aWNhbCcsICdmbGlwLWJvdGgnLCAnc3RhY2snLCAnc3RhY2stMXgnLCAnc3RhY2stMngnLCAnaW52ZXJzZScsICdsYXllcnMnLCAnbGF5ZXJzLXRleHQnLCAnbGF5ZXJzLWNvdW50ZXInLCBEVU9UT05FX0NMQVNTRVMuR1JPVVAsIERVT1RPTkVfQ0xBU1NFUy5TV0FQX09QQUNJVFksIERVT1RPTkVfQ0xBU1NFUy5QUklNQVJZLCBEVU9UT05FX0NMQVNTRVMuU0VDT05EQVJZXS5jb25jYXQob25lVG9UZW4ubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChuLCBcInhcIik7XG59KSkuY29uY2F0KG9uZVRvVHdlbnR5Lm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gXCJ3LVwiLmNvbmNhdChuKTtcbn0pKTtcblxudmFyIGluaXRpYWwgPSBXSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgfHwge307XG5cbmZ1bmN0aW9uIGdldEF0dHJDb25maWcoYXR0cikge1xuICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFsnICsgYXR0ciArICddJyk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICAvLyBHZXR0aW5nIGFuIGVtcHR5IHN0cmluZyB3aWxsIG9jY3VyIGlmIHRoZSBhdHRyaWJ1dGUgaXMgc2V0IG9uIHRoZSBIVE1MIHRhZyBidXQgd2l0aG91dCBhIHZhbHVlXG4gIC8vIFdlJ2xsIGFzc3VtZSB0aGF0IHRoaXMgaXMgYW4gaW5kaWNhdGlvbiB0aGF0IGl0IHNob3VsZCBiZSB0b2dnbGVkIHRvIHRydWVcbiAgLy8gRm9yIGV4YW1wbGUgPHNjcmlwdCBkYXRhLXNlYXJjaC1wc2V1ZG8tZWxlbWVudHMgc3JjPVwiLi4uXCI+PC9zY3JpcHQ+XG4gIGlmICh2YWwgPT09ICcnKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodmFsID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdmFsO1xufVxuXG5pZiAoRE9DVU1FTlQgJiYgdHlwZW9mIERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgdmFyIGF0dHJzID0gW1snZGF0YS1mYW1pbHktcHJlZml4JywgJ2ZhbWlseVByZWZpeCddLCBbJ2RhdGEtcmVwbGFjZW1lbnQtY2xhc3MnLCAncmVwbGFjZW1lbnRDbGFzcyddLCBbJ2RhdGEtYXV0by1yZXBsYWNlLXN2ZycsICdhdXRvUmVwbGFjZVN2ZyddLCBbJ2RhdGEtYXV0by1hZGQtY3NzJywgJ2F1dG9BZGRDc3MnXSwgWydkYXRhLWF1dG8tYTExeScsICdhdXRvQTExeSddLCBbJ2RhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cycsICdzZWFyY2hQc2V1ZG9FbGVtZW50cyddLCBbJ2RhdGEtb2JzZXJ2ZS1tdXRhdGlvbnMnLCAnb2JzZXJ2ZU11dGF0aW9ucyddLCBbJ2RhdGEtbXV0YXRlLWFwcHJvYWNoJywgJ211dGF0ZUFwcHJvYWNoJ10sIFsnZGF0YS1rZWVwLW9yaWdpbmFsLXNvdXJjZScsICdrZWVwT3JpZ2luYWxTb3VyY2UnXSwgWydkYXRhLW1lYXN1cmUtcGVyZm9ybWFuY2UnLCAnbWVhc3VyZVBlcmZvcm1hbmNlJ10sIFsnZGF0YS1zaG93LW1pc3NpbmctaWNvbnMnLCAnc2hvd01pc3NpbmdJY29ucyddXTtcbiAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICBhdHRyID0gX3JlZjJbMF0sXG4gICAgICAgIGtleSA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIHZhbCA9IGNvZXJjZShnZXRBdHRyQ29uZmlnKGF0dHIpKTtcblxuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIGluaXRpYWxba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGZhbWlseVByZWZpeDogREVGQVVMVF9GQU1JTFlfUFJFRklYLFxuICByZXBsYWNlbWVudENsYXNzOiBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTLFxuICBhdXRvUmVwbGFjZVN2ZzogdHJ1ZSxcbiAgYXV0b0FkZENzczogdHJ1ZSxcbiAgYXV0b0ExMXk6IHRydWUsXG4gIHNlYXJjaFBzZXVkb0VsZW1lbnRzOiBmYWxzZSxcbiAgb2JzZXJ2ZU11dGF0aW9uczogdHJ1ZSxcbiAgbXV0YXRlQXBwcm9hY2g6ICdhc3luYycsXG4gIGtlZXBPcmlnaW5hbFNvdXJjZTogdHJ1ZSxcbiAgbWVhc3VyZVBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgc2hvd01pc3NpbmdJY29uczogdHJ1ZVxufTtcblxudmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfZGVmYXVsdCwgaW5pdGlhbCk7XG5cbmlmICghX2NvbmZpZy5hdXRvUmVwbGFjZVN2ZykgX2NvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG5cbnZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkKHt9LCBfY29uZmlnKTtcblxuV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnID0gY29uZmlnO1xuXG52YXIgdyA9IFdJTkRPVyB8fCB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0pIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnN0eWxlcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcyA9IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcykgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMgPSBbXTtcbnZhciBuYW1lc3BhY2UgPSB3W05BTUVTUEFDRV9JREVOVElGSUVSXTtcblxudmFyIGZ1bmN0aW9ucyA9IFtdO1xuXG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgRE9DVU1FTlQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbiAgbG9hZGVkID0gMTtcbiAgZnVuY3Rpb25zLm1hcChmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfSk7XG59O1xuXG52YXIgbG9hZGVkID0gZmFsc2U7XG5cbmlmIChJU19ET00pIHtcbiAgbG9hZGVkID0gKERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCA/IC9ebG9hZGVkfF5jLyA6IC9ebG9hZGVkfF5pfF5jLykudGVzdChET0NVTUVOVC5yZWFkeVN0YXRlKTtcbiAgaWYgKCFsb2FkZWQpIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBsaXN0ZW5lcik7XG59XG5cbmZ1bmN0aW9uIGRvbXJlYWR5IChmbikge1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICBsb2FkZWQgPyBzZXRUaW1lb3V0KGZuLCAwKSA6IGZ1bmN0aW9ucy5wdXNoKGZuKTtcbn1cblxudmFyIFBFTkRJTkcgPSAncGVuZGluZyc7XG52YXIgU0VUVExFRCA9ICdzZXR0bGVkJztcbnZhciBGVUxGSUxMRUQgPSAnZnVsZmlsbGVkJztcbnZhciBSRUpFQ1RFRCA9ICdyZWplY3RlZCc7XG5cbnZhciBOT09QID0gZnVuY3Rpb24gTk9PUCgpIHt9O1xuXG52YXIgaXNOb2RlID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MuZW1pdCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBhc3luY1NldFRpbWVyID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyBzZXRUaW1lb3V0IDogc2V0SW1tZWRpYXRlO1xudmFyIGFzeW5jUXVldWUgPSBbXTtcbnZhciBhc3luY1RpbWVyO1xuXG5mdW5jdGlvbiBhc3luY0ZsdXNoKCkge1xuICAvLyBydW4gcHJvbWlzZSBjYWxsYmFja3NcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3luY1F1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgYXN5bmNRdWV1ZVtpXVswXShhc3luY1F1ZXVlW2ldWzFdKTtcbiAgfSAvLyByZXNldCBhc3luYyBhc3luY1F1ZXVlXG5cblxuICBhc3luY1F1ZXVlID0gW107XG4gIGFzeW5jVGltZXIgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYXN5bmNDYWxsKGNhbGxiYWNrLCBhcmcpIHtcbiAgYXN5bmNRdWV1ZS5wdXNoKFtjYWxsYmFjaywgYXJnXSk7XG5cbiAgaWYgKCFhc3luY1RpbWVyKSB7XG4gICAgYXN5bmNUaW1lciA9IHRydWU7XG4gICAgYXN5bmNTZXRUaW1lcihhc3luY0ZsdXNoLCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VSZXNvbHZlcihyZXNvbHZlciwgcHJvbWlzZSkge1xuICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmVzb2x2ZXIocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVqZWN0UHJvbWlzZShlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VDYWxsYmFjayhzdWJzY3JpYmVyKSB7XG4gIHZhciBvd25lciA9IHN1YnNjcmliZXIub3duZXI7XG4gIHZhciBzZXR0bGVkID0gb3duZXIuX3N0YXRlO1xuICB2YXIgdmFsdWUgPSBvd25lci5fZGF0YTtcbiAgdmFyIGNhbGxiYWNrID0gc3Vic2NyaWJlcltzZXR0bGVkXTtcbiAgdmFyIHByb21pc2UgPSBzdWJzY3JpYmVyLnRoZW47XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldHRsZWQgPSBGVUxGSUxMRUQ7XG5cbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaGFuZGxlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUpKSB7XG4gICAgaWYgKHNldHRsZWQgPT09IEZVTEZJTExFRCkge1xuICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkge1xuICB2YXIgcmVzb2x2ZWQ7XG5cbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAvLyB0aGVuIHNob3VsZCBiZSByZXRyaWV2ZWQgb25seSBvbmNlXG4gICAgICB2YXIgdGhlbiA9IHZhbHVlLnRoZW47XG5cbiAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdmFsKSB7XG4gICAgICAgICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UgPT09IHZhbHVlIHx8ICFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHByb21pc2UuX3N0YXRlID0gU0VUVExFRDtcbiAgICBwcm9taXNlLl9kYXRhID0gdmFsdWU7XG4gICAgYXN5bmNDYWxsKHB1Ymxpc2hGdWxmaWxsbWVudCwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IFNFVFRMRUQ7XG4gICAgcHJvbWlzZS5fZGF0YSA9IHJlYXNvbjtcbiAgICBhc3luY0NhbGwocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG4gIHByb21pc2UuX3RoZW4gPSBwcm9taXNlLl90aGVuLmZvckVhY2goaW52b2tlQ2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoRnVsZmlsbG1lbnQocHJvbWlzZSkge1xuICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcbiAgcHVibGlzaChwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gIHByb21pc2UuX3N0YXRlID0gUkVKRUNURUQ7XG4gIHB1Ymxpc2gocHJvbWlzZSk7XG5cbiAgaWYgKCFwcm9taXNlLl9oYW5kbGVkICYmIGlzTm9kZSkge1xuICAgIGdsb2JhbC5wcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHByb21pc2UuX2RhdGEsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5vdGlmeVJlamVjdGlvbkhhbmRsZWQocHJvbWlzZSkge1xuICBnbG9iYWwucHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG59XG4vKipcbiAqIEBjbGFzc1xuICovXG5cblxuZnVuY3Rpb24gUChyZXNvbHZlcikge1xuICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSByZXNvbHZlciAnICsgcmVzb2x2ZXIgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodGhpcyBpbnN0YW5jZW9mIFAgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGNvbnN0cnVjdCBcXCdQcm9taXNlXFwnOiBQbGVhc2UgdXNlIHRoZSBcXCduZXdcXCcgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHRoaXMuX3RoZW4gPSBbXTtcbiAgaW52b2tlUmVzb2x2ZXIocmVzb2x2ZXIsIHRoaXMpO1xufVxuXG5QLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFAsXG4gIF9zdGF0ZTogUEVORElORyxcbiAgX3RoZW46IG51bGwsXG4gIF9kYXRhOiB1bmRlZmluZWQsXG4gIF9oYW5kbGVkOiBmYWxzZSxcbiAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgIHZhciBzdWJzY3JpYmVyID0ge1xuICAgICAgb3duZXI6IHRoaXMsXG4gICAgICB0aGVuOiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihOT09QKSxcbiAgICAgIGZ1bGZpbGxlZDogb25GdWxmaWxsbWVudCxcbiAgICAgIHJlamVjdGVkOiBvblJlamVjdGlvblxuICAgIH07XG5cbiAgICBpZiAoKG9uUmVqZWN0aW9uIHx8IG9uRnVsZmlsbG1lbnQpICYmICF0aGlzLl9oYW5kbGVkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBSRUpFQ1RFRCAmJiBpc05vZGUpIHtcbiAgICAgICAgYXN5bmNDYWxsKG5vdGlmeVJlamVjdGlvbkhhbmRsZWQsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gRlVMRklMTEVEIHx8IHRoaXMuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgLy8gYWxyZWFkeSByZXNvbHZlZCwgY2FsbCBjYWxsYmFjayBhc3luY1xuICAgICAgYXN5bmNDYWxsKGludm9rZUNhbGxiYWNrLCBzdWJzY3JpYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3Vic2NyaWJlXG4gICAgICB0aGlzLl90aGVuLnB1c2goc3Vic2NyaWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnNjcmliZXIudGhlbjtcbiAgfSxcbiAgY2F0Y2g6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICB9XG59O1xuXG5QLmFsbCA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLmFsbCgpLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZW1haW5pbmcgPSAwO1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoaW5kZXgpIHtcbiAgICAgIHJlbWFpbmluZysrO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghIC0tcmVtYWluaW5nKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgcHJvbWlzZTsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmVyKGkpLCByZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0c1tpXSA9IHByb21pc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZW1haW5pbmcpIHtcbiAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfVxuICB9KTtcbn07XG5cblAucmFjZSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLnJhY2UoKS4nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHByb21pc2U7IGkgPCBwcm9taXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvbWlzZSA9IHByb21pc2VzW2ldO1xuXG4gICAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShwcm9taXNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuUC5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IFApIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5QLnJlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG52YXIgcGlja2VkID0gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgPyBQcm9taXNlIDogUDtcblxudmFyIGQgPSBVTklUU19JTl9HUklEO1xudmFyIG1lYW5pbmdsZXNzVHJhbnNmb3JtID0ge1xuICBzaXplOiAxNixcbiAgeDogMCxcbiAgeTogMCxcbiAgcm90YXRlOiAwLFxuICBmbGlwWDogZmFsc2UsXG4gIGZsaXBZOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gaXNSZXNlcnZlZChuYW1lKSB7XG4gIHJldHVybiB+UkVTRVJWRURfQ0xBU1NFUy5pbmRleE9mKG5hbWUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0Q3NzKGNzcykge1xuICBpZiAoIWNzcyB8fCAhSVNfRE9NKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgdmFyIGhlYWRDaGlsZHJlbiA9IERPQ1VNRU5ULmhlYWQuY2hpbGROb2RlcztcbiAgdmFyIGJlZm9yZUNoaWxkID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gaGVhZENoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgdmFyIGNoaWxkID0gaGVhZENoaWxkcmVuW2ldO1xuICAgIHZhciB0YWdOYW1lID0gKGNoaWxkLnRhZ05hbWUgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBpZiAoWydTVFlMRScsICdMSU5LJ10uaW5kZXhPZih0YWdOYW1lKSA+IC0xKSB7XG4gICAgICBiZWZvcmVDaGlsZCA9IGNoaWxkO1xuICAgIH1cbiAgfVxuXG4gIERPQ1VNRU5ULmhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBiZWZvcmVDaGlsZCk7XG4gIHJldHVybiBjc3M7XG59XG52YXIgaWRQb29sID0gJzAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbmZ1bmN0aW9uIG5leHRVbmlxdWVJZCgpIHtcbiAgdmFyIHNpemUgPSAxMjtcbiAgdmFyIGlkID0gJyc7XG5cbiAgd2hpbGUgKHNpemUtLSA+IDApIHtcbiAgICBpZCArPSBpZFBvb2xbTWF0aC5yYW5kb20oKSAqIDYyIHwgMF07XG4gIH1cblxuICByZXR1cm4gaWQ7XG59XG5mdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICB2YXIgYXJyYXkgPSBbXTtcblxuICBmb3IgKHZhciBpID0gKG9iaiB8fCBbXSkubGVuZ3RoID4+PiAwOyBpLS07KSB7XG4gICAgYXJyYXlbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjbGFzc0FycmF5KG5vZGUpIHtcbiAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuIHRvQXJyYXkobm9kZS5jbGFzc0xpc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0SWNvbk5hbWUoZmFtaWx5UHJlZml4LCBjbHMpIHtcbiAgdmFyIHBhcnRzID0gY2xzLnNwbGl0KCctJyk7XG4gIHZhciBwcmVmaXggPSBwYXJ0c1swXTtcbiAgdmFyIGljb25OYW1lID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gIGlmIChwcmVmaXggPT09IGZhbWlseVByZWZpeCAmJiBpY29uTmFtZSAhPT0gJycgJiYgIWlzUmVzZXJ2ZWQoaWNvbk5hbWUpKSB7XG4gICAgcmV0dXJuIGljb25OYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBodG1sRXNjYXBlKHN0cikge1xuICByZXR1cm4gXCJcIi5jb25jYXQoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5mdW5jdGlvbiBqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cmlidXRlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChhdHRyaWJ1dGVOYW1lLCBcIj1cXFwiXCIpLmNvbmNhdChodG1sRXNjYXBlKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pLCBcIlxcXCIgXCIpO1xuICB9LCAnJykudHJpbSgpO1xufVxuZnVuY3Rpb24gam9pblN0eWxlcyhzdHlsZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlTmFtZSkge1xuICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChzdHlsZU5hbWUsIFwiOiBcIikuY29uY2F0KHN0eWxlc1tzdHlsZU5hbWVdLCBcIjtcIik7XG4gIH0sICcnKTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHRyYW5zZm9ybS5zaXplICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5zaXplIHx8IHRyYW5zZm9ybS54ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS54IHx8IHRyYW5zZm9ybS55ICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS55IHx8IHRyYW5zZm9ybS5yb3RhdGUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnJvdGF0ZSB8fCB0cmFuc2Zvcm0uZmxpcFggfHwgdHJhbnNmb3JtLmZsaXBZO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtRm9yU3ZnKF9yZWYpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgaWNvbldpZHRoID0gX3JlZi5pY29uV2lkdGg7XG4gIHZhciBvdXRlciA9IHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChjb250YWluZXJXaWR0aCAvIDIsIFwiIDI1NilcIilcbiAgfTtcbiAgdmFyIGlubmVyVHJhbnNsYXRlID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54ICogMzIsIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS55ICogMzIsIFwiKSBcIik7XG4gIHZhciBpbm5lclNjYWxlID0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gIHZhciBpbm5lclJvdGF0ZSA9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcIiAwIDApXCIpO1xuICB2YXIgaW5uZXIgPSB7XG4gICAgdHJhbnNmb3JtOiBcIlwiLmNvbmNhdChpbm5lclRyYW5zbGF0ZSwgXCIgXCIpLmNvbmNhdChpbm5lclNjYWxlLCBcIiBcIikuY29uY2F0KGlubmVyUm90YXRlKVxuICB9O1xuICB2YXIgcGF0aCA9IHtcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiLmNvbmNhdChpY29uV2lkdGggLyAyICogLTEsIFwiIC0yNTYpXCIpXG4gIH07XG4gIHJldHVybiB7XG4gICAgb3V0ZXI6IG91dGVyLFxuICAgIGlubmVyOiBpbm5lcixcbiAgICBwYXRoOiBwYXRoXG4gIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JDc3MoX3JlZjIpIHtcbiAgdmFyIHRyYW5zZm9ybSA9IF9yZWYyLnRyYW5zZm9ybSxcbiAgICAgIF9yZWYyJHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICB3aWR0aCA9IF9yZWYyJHdpZHRoID09PSB2b2lkIDAgPyBVTklUU19JTl9HUklEIDogX3JlZjIkd2lkdGgsXG4gICAgICBfcmVmMiRoZWlnaHQgPSBfcmVmMi5oZWlnaHQsXG4gICAgICBoZWlnaHQgPSBfcmVmMiRoZWlnaHQgPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiRoZWlnaHQsXG4gICAgICBfcmVmMiRzdGFydENlbnRlcmVkID0gX3JlZjIuc3RhcnRDZW50ZXJlZCxcbiAgICAgIHN0YXJ0Q2VudGVyZWQgPSBfcmVmMiRzdGFydENlbnRlcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN0YXJ0Q2VudGVyZWQ7XG4gIHZhciB2YWwgPSAnJztcblxuICBpZiAoc3RhcnRDZW50ZXJlZCAmJiBJU19JRSkge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkIC0gd2lkdGggLyAyLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCAtIGhlaWdodCAvIDIsIFwiZW0pIFwiKTtcbiAgfSBlbHNlIGlmIChzdGFydENlbnRlcmVkKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKGNhbGMoLTUwJSArIFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQsIFwiZW0pLCBjYWxjKC01MCUgKyBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkpIFwiKTtcbiAgfSBlbHNlIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQsIFwiZW0pIFwiKTtcbiAgfVxuXG4gIHZhbCArPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkICogKHRyYW5zZm9ybS5mbGlwWSA/IC0xIDogMSksIFwiKSBcIik7XG4gIHZhbCArPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCJkZWcpIFwiKTtcbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIEFMTF9TUEFDRSA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmZ1bmN0aW9uIGZpbGxCbGFjayhhYnN0cmFjdCkge1xuICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgaWYgKGFic3RyYWN0LmF0dHJpYnV0ZXMgJiYgKGFic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCB8fCBmb3JjZSkpIHtcbiAgICBhYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgPSAnYmxhY2snO1xuICB9XG5cbiAgcmV0dXJuIGFic3RyYWN0O1xufVxuXG5mdW5jdGlvbiBkZUdyb3VwKGFic3RyYWN0KSB7XG4gIGlmIChhYnN0cmFjdC50YWcgPT09ICdnJykge1xuICAgIHJldHVybiBhYnN0cmFjdC5jaGlsZHJlbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2Fic3RyYWN0XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlSWNvbk1hc2tpbmcgKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgIGV4cGxpY2l0TWFza0lkID0gX3JlZi5tYXNrSWQsXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybTtcbiAgdmFyIG1haW5XaWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICBtYWluUGF0aCA9IG1haW4uaWNvbjtcbiAgdmFyIG1hc2tXaWR0aCA9IG1hc2sud2lkdGgsXG4gICAgICBtYXNrUGF0aCA9IG1hc2suaWNvbjtcbiAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBjb250YWluZXJXaWR0aDogbWFza1dpZHRoLFxuICAgIGljb25XaWR0aDogbWFpbldpZHRoXG4gIH0pO1xuICB2YXIgbWFza1JlY3QgPSB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgQUxMX1NQQUNFLCB7XG4gICAgICBmaWxsOiAnd2hpdGUnXG4gICAgfSlcbiAgfTtcbiAgdmFyIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbiA9IG1haW5QYXRoLmNoaWxkcmVuID8ge1xuICAgIGNoaWxkcmVuOiBtYWluUGF0aC5jaGlsZHJlbi5tYXAoZmlsbEJsYWNrKVxuICB9IDoge307XG4gIHZhciBtYXNrSW5uZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5pbm5lciksXG4gICAgY2hpbGRyZW46IFtmaWxsQmxhY2soX29iamVjdFNwcmVhZCh7XG4gICAgICB0YWc6IG1haW5QYXRoLnRhZyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIG1haW5QYXRoLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgpXG4gICAgfSwgbWFza0lubmVyR3JvdXBDaGlsZHJlbk1peGluKSldXG4gIH07XG4gIHZhciBtYXNrT3V0ZXJHcm91cCA9IHtcbiAgICB0YWc6ICdnJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5vdXRlciksXG4gICAgY2hpbGRyZW46IFttYXNrSW5uZXJHcm91cF1cbiAgfTtcbiAgdmFyIG1hc2tJZCA9IFwibWFzay1cIi5jb25jYXQoZXhwbGljaXRNYXNrSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICB2YXIgY2xpcElkID0gXCJjbGlwLVwiLmNvbmNhdChleHBsaWNpdE1hc2tJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gIHZhciBtYXNrVGFnID0ge1xuICAgIHRhZzogJ21hc2snLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFMTF9TUEFDRSwge1xuICAgICAgaWQ6IG1hc2tJZCxcbiAgICAgIG1hc2tVbml0czogJ3VzZXJTcGFjZU9uVXNlJyxcbiAgICAgIG1hc2tDb250ZW50VW5pdHM6ICd1c2VyU3BhY2VPblVzZSdcbiAgICB9KSxcbiAgICBjaGlsZHJlbjogW21hc2tSZWN0LCBtYXNrT3V0ZXJHcm91cF1cbiAgfTtcbiAgdmFyIGRlZnMgPSB7XG4gICAgdGFnOiAnZGVmcycsXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICB0YWc6ICdjbGlwUGF0aCcsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGlkOiBjbGlwSWRcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogZGVHcm91cChtYXNrUGF0aClcbiAgICB9LCBtYXNrVGFnXVxuICB9O1xuICBjaGlsZHJlbi5wdXNoKGRlZnMsIHtcbiAgICB0YWc6ICdyZWN0JyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgJ2NsaXAtcGF0aCc6IFwidXJsKCNcIi5jb25jYXQoY2xpcElkLCBcIilcIiksXG4gICAgICBtYXNrOiBcInVybCgjXCIuY29uY2F0KG1hc2tJZCwgXCIpXCIpXG4gICAgfSwgQUxMX1NQQUNFKVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlSWNvblN0YW5kYXJkIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgc3R5bGVzID0gX3JlZi5zdHlsZXM7XG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSkge1xuICAgIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoOiBtYWluLndpZHRoLFxuICAgICAgaWNvbldpZHRoOiBtYWluLndpZHRoXG4gICAgfSk7XG4gICAgY2hpbGRyZW4ucHVzaCh7XG4gICAgICB0YWc6ICdnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLm91dGVyKSxcbiAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMuaW5uZXIpLFxuICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICB0YWc6IG1haW4uaWNvbi50YWcsXG4gICAgICAgICAgY2hpbGRyZW46IG1haW4uaWNvbi5jaGlsZHJlbixcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBtYWluLmljb24uYXR0cmlidXRlcywgdHJhbnMucGF0aClcbiAgICAgICAgfV1cbiAgICAgIH1dXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGRyZW4ucHVzaChtYWluLmljb24pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBhc0ljb24gKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pICYmIG1haW4uZm91bmQgJiYgIW1hc2suZm91bmQpIHtcbiAgICB2YXIgd2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBtYWluLmhlaWdodDtcbiAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgeDogd2lkdGggLyBoZWlnaHQgLyAyLFxuICAgICAgeTogMC41XG4gICAgfTtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gam9pblN0eWxlcyhfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZXMsIHtcbiAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogXCJcIi5jb25jYXQob2Zmc2V0LnggKyB0cmFuc2Zvcm0ueCAvIDE2LCBcImVtIFwiKS5jb25jYXQob2Zmc2V0LnkgKyB0cmFuc2Zvcm0ueSAvIDE2LCBcImVtXCIpXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIFt7XG4gICAgdGFnOiAnc3ZnJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9XTtcbn1cblxuZnVuY3Rpb24gYXNTeW1ib2wgKF9yZWYpIHtcbiAgdmFyIHByZWZpeCA9IF9yZWYucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBfcmVmLmljb25OYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN5bWJvbCA9IF9yZWYuc3ltYm9sO1xuICB2YXIgaWQgPSBzeW1ib2wgPT09IHRydWUgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLVwiKS5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiBzeW1ib2w7XG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgc3R5bGU6ICdkaXNwbGF5OiBub25lOydcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnc3ltYm9sJyxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dXG4gIH1dO1xufVxuXG5mdW5jdGlvbiBtYWtlSW5saW5lU3ZnQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBfcGFyYW1zJGljb25zID0gcGFyYW1zLmljb25zLFxuICAgICAgbWFpbiA9IF9wYXJhbXMkaWNvbnMubWFpbixcbiAgICAgIG1hc2sgPSBfcGFyYW1zJGljb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBwYXJhbXMucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBwYXJhbXMuaWNvbk5hbWUsXG4gICAgICB0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgbWFza0lkID0gcGFyYW1zLm1hc2tJZCxcbiAgICAgIHRpdGxlSWQgPSBwYXJhbXMudGl0bGVJZCxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGU7XG5cbiAgdmFyIF9yZWYgPSBtYXNrLmZvdW5kID8gbWFzayA6IG1haW4sXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgaXNVcGxvYWRlZEljb24gPSBwcmVmaXggPT09ICdmYWsnO1xuICB2YXIgd2lkdGhDbGFzcyA9IGlzVXBsb2FkZWRJY29uID8gJycgOiBcImZhLXctXCIuY29uY2F0KE1hdGguY2VpbCh3aWR0aCAvIGhlaWdodCAqIDE2KSk7XG4gIHZhciBhdHRyQ2xhc3MgPSBbY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIGljb25OYW1lID8gXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiAnJywgd2lkdGhDbGFzc10uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGV4dHJhLmNsYXNzZXMuaW5kZXhPZihjKSA9PT0gLTE7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjICE9PSAnJyB8fCAhIWM7XG4gIH0pLmNvbmNhdChleHRyYS5jbGFzc2VzKS5qb2luKCcgJyk7XG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB7XG4gICAgICAnZGF0YS1wcmVmaXgnOiBwcmVmaXgsXG4gICAgICAnZGF0YS1pY29uJzogaWNvbk5hbWUsXG4gICAgICAnY2xhc3MnOiBhdHRyQ2xhc3MsXG4gICAgICAncm9sZSc6IGV4dHJhLmF0dHJpYnV0ZXMucm9sZSB8fCAnaW1nJyxcbiAgICAgICd4bWxucyc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgICAndmlld0JveCc6IFwiMCAwIFwiLmNvbmNhdCh3aWR0aCwgXCIgXCIpLmNvbmNhdChoZWlnaHQpXG4gICAgfSlcbiAgfTtcbiAgdmFyIHVwbG9hZGVkSWNvbldpZHRoU3R5bGUgPSBpc1VwbG9hZGVkSWNvbiAmJiAhfmV4dHJhLmNsYXNzZXMuaW5kZXhPZignZmEtZncnKSA/IHtcbiAgICB3aWR0aDogXCJcIi5jb25jYXQod2lkdGggLyBoZWlnaHQgKiAxNiAqIDAuMDYyNSwgXCJlbVwiKVxuICB9IDoge307XG5cbiAgaWYgKHdhdGNoYWJsZSkge1xuICAgIGNvbnRlbnQuYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgaWYgKHRpdGxlKSBjb250ZW50LmNoaWxkcmVuLnB1c2goe1xuICAgIHRhZzogJ3RpdGxlJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBpZDogY29udGVudC5hdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSB8fCBcInRpdGxlLVwiLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgfSk7XG5cbiAgdmFyIGFyZ3MgPSBfb2JqZWN0U3ByZWFkKHt9LCBjb250ZW50LCB7XG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIG1haW46IG1haW4sXG4gICAgbWFzazogbWFzayxcbiAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICBzdHlsZXM6IF9vYmplY3RTcHJlYWQoe30sIHVwbG9hZGVkSWNvbldpZHRoU3R5bGUsIGV4dHJhLnN0eWxlcylcbiAgfSk7XG5cbiAgdmFyIF9yZWYyID0gbWFzay5mb3VuZCAmJiBtYWluLmZvdW5kID8gbWFrZUljb25NYXNraW5nKGFyZ3MpIDogbWFrZUljb25TdGFuZGFyZChhcmdzKSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcztcblxuICBhcmdzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIGFyZ3MuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cbiAgaWYgKHN5bWJvbCkge1xuICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXNJY29uKGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgd2lkdGggPSBwYXJhbXMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBwYXJhbXMuaGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZTIgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkd2F0Y2hhYmxlMjtcblxuICB2YXIgYXR0cmlidXRlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHRpdGxlID8ge1xuICAgICd0aXRsZSc6IHRpdGxlXG4gIH0gOiB7fSwge1xuICAgICdjbGFzcyc6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gIH0pO1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBhdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuc3R5bGVzKTtcblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICBzdHlsZXNbJ3RyYW5zZm9ybSddID0gdHJhbnNmb3JtRm9yQ3NzKHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgc3RhcnRDZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgfSk7XG4gICAgc3R5bGVzWyctd2Via2l0LXRyYW5zZm9ybSddID0gc3R5bGVzWyd0cmFuc2Zvcm0nXTtcbiAgfVxuXG4gIHZhciBzdHlsZVN0cmluZyA9IGpvaW5TdHlsZXMoc3R5bGVzKTtcblxuICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgfVxuXG4gIHZhciB2YWwgPSBbXTtcbiAgdmFsLnB1c2goe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgY2hpbGRyZW46IFtjb250ZW50XVxuICB9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdzci1vbmx5J1xuICAgICAgfSxcbiAgICAgIGNoaWxkcmVuOiBbdGl0bGVdXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuZnVuY3Rpb24gbWFrZUxheWVyc0NvdW50ZXJBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmE7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAndGl0bGUnOiB0aXRsZVxuICB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxudmFyIG5vb3AkMSA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIHAgPSBjb25maWcubWVhc3VyZVBlcmZvcm1hbmNlICYmIFBFUkZPUk1BTkNFICYmIFBFUkZPUk1BTkNFLm1hcmsgJiYgUEVSRk9STUFOQ0UubWVhc3VyZSA/IFBFUkZPUk1BTkNFIDoge1xuICBtYXJrOiBub29wJDEsXG4gIG1lYXN1cmU6IG5vb3AkMVxufTtcbnZhciBwcmVhbWJsZSA9IFwiRkEgXFxcIjUuMTUuNFxcXCJcIjtcblxudmFyIGJlZ2luID0gZnVuY3Rpb24gYmVnaW4obmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZW5kKG5hbWUpO1xuICB9O1xufTtcblxudmFyIGVuZCA9IGZ1bmN0aW9uIGVuZChuYW1lKSB7XG4gIHAubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgcC5tZWFzdXJlKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBiZWdpbnNcIiksIFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGVuZHNcIikpO1xufTtcblxudmFyIHBlcmYgPSB7XG4gIGJlZ2luOiBiZWdpbixcbiAgZW5kOiBlbmRcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgaGVscGVyIHRvIGJpbmQgYSBmdW5jdGlvbiBrbm93biB0byBoYXZlIDQgYXJndW1lbnRzXG4gKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gKi9cblxudmFyIGJpbmRJbnRlcm5hbDQgPSBmdW5jdGlvbiBiaW5kSW50ZXJuYWw0KGZ1bmMsIHRoaXNDb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICB9O1xufTtcblxuLyoqXG4gKiAjIFJlZHVjZVxuICpcbiAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHN1YmplY3QgICAgICBUaGUgb2JqZWN0IHRvIHJlZHVjZSBvdmVyLlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSAge21peGVkfSAgICBpbml0aWFsVmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoZSByZWR1Y2VyLCBkZWZhdWx0cyB0byBzdWJqZWN0WzBdLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHRoaXNDb250ZXh0ICBUaGUgY29udGV4dCBmb3IgdGhlIHJlZHVjZXIuXG4gKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gKi9cblxuXG52YXIgcmVkdWNlID0gZnVuY3Rpb24gZmFzdFJlZHVjZU9iamVjdChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHN1YmplY3QpLFxuICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGgsXG4gICAgICBpdGVyYXRvciA9IHRoaXNDb250ZXh0ICE9PSB1bmRlZmluZWQgPyBiaW5kSW50ZXJuYWw0KGZuLCB0aGlzQ29udGV4dCkgOiBmbixcbiAgICAgIGksXG4gICAgICBrZXksXG4gICAgICByZXN1bHQ7XG5cbiAgaWYgKGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IDE7XG4gICAgcmVzdWx0ID0gc3ViamVjdFtrZXlzWzBdXTtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiB0b0hleCh1bmljb2RlKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHVuaWNvZGUubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaGV4ID0gdW5pY29kZS5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDE2KTtcbiAgICByZXN1bHQgKz0gKCcwMDAnICsgaGV4KS5zbGljZSgtNCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBkZWZpbmVJY29ucyhwcmVmaXgsIGljb25zKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRza2lwSG9va3MgPSBwYXJhbXMuc2tpcEhvb2tzLFxuICAgICAgc2tpcEhvb2tzID0gX3BhcmFtcyRza2lwSG9va3MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwSG9va3M7XG4gIHZhciBub3JtYWxpemVkID0gT2JqZWN0LmtleXMoaWNvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpY29uTmFtZSkge1xuICAgIHZhciBpY29uID0gaWNvbnNbaWNvbk5hbWVdO1xuICAgIHZhciBleHBhbmRlZCA9ICEhaWNvbi5pY29uO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICBhY2NbaWNvbi5pY29uTmFtZV0gPSBpY29uLmljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICBpZiAodHlwZW9mIG5hbWVzcGFjZS5ob29rcy5hZGRQYWNrID09PSAnZnVuY3Rpb24nICYmICFza2lwSG9va3MpIHtcbiAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZWQpO1xuICB9IGVsc2Uge1xuICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9vYmplY3RTcHJlYWQoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSwgbm9ybWFsaXplZCk7XG4gIH1cbiAgLyoqXG4gICAqIEZvbnQgQXdlc29tZSA0IHVzZWQgdGhlIHByZWZpeCBvZiBgZmFgIGZvciBhbGwgaWNvbnMuIFdpdGggdGhlIGludHJvZHVjdGlvblxuICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAqIGZvciBgZmFzYCBzbyB3ZSdsbCBlYXN5IHRoZSB1cGdyYWRlIHByb2Nlc3MgZm9yIG91ciB1c2VycyBieSBhdXRvbWF0aWNhbGx5IGRlZmluaW5nXG4gICAqIHRoaXMgYXMgd2VsbC5cbiAgICovXG5cblxuICBpZiAocHJlZml4ID09PSAnZmFzJykge1xuICAgIGRlZmluZUljb25zKCdmYScsIGljb25zKTtcbiAgfVxufVxuXG52YXIgc3R5bGVzID0gbmFtZXNwYWNlLnN0eWxlcyxcbiAgICBzaGltcyA9IG5hbWVzcGFjZS5zaGltcztcbnZhciBfYnlVbmljb2RlID0ge307XG52YXIgX2J5TGlnYXR1cmUgPSB7fTtcbnZhciBfYnlPbGROYW1lID0ge307XG52YXIgYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgdmFyIGxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cChyZWR1Y2VyKSB7XG4gICAgcmV0dXJuIHJlZHVjZShzdHlsZXMsIGZ1bmN0aW9uIChvLCBzdHlsZSwgcHJlZml4KSB7XG4gICAgICBvW3ByZWZpeF0gPSByZWR1Y2Uoc3R5bGUsIHJlZHVjZXIsIHt9KTtcbiAgICAgIHJldHVybiBvO1xuICAgIH0sIHt9KTtcbiAgfTtcblxuICBfYnlVbmljb2RlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgaWYgKGljb25bM10pIHtcbiAgICAgIGFjY1tpY29uWzNdXSA9IGljb25OYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0pO1xuICBfYnlMaWdhdHVyZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIHZhciBsaWdhdHVyZXMgPSBpY29uWzJdO1xuICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcbiAgICBsaWdhdHVyZXMuZm9yRWFjaChmdW5jdGlvbiAobGlnYXR1cmUpIHtcbiAgICAgIGFjY1tsaWdhdHVyZV0gPSBpY29uTmFtZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgdmFyIGhhc1JlZ3VsYXIgPSAnZmFyJyBpbiBzdHlsZXM7XG4gIF9ieU9sZE5hbWUgPSByZWR1Y2Uoc2hpbXMsIGZ1bmN0aW9uIChhY2MsIHNoaW0pIHtcbiAgICB2YXIgb2xkTmFtZSA9IHNoaW1bMF07XG4gICAgdmFyIHByZWZpeCA9IHNoaW1bMV07XG4gICAgdmFyIGljb25OYW1lID0gc2hpbVsyXTtcblxuICAgIGlmIChwcmVmaXggPT09ICdmYXInICYmICFoYXNSZWd1bGFyKSB7XG4gICAgICBwcmVmaXggPSAnZmFzJztcbiAgICB9XG5cbiAgICBhY2Nbb2xkTmFtZV0gPSB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgIH07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbmJ1aWxkKCk7XG5mdW5jdGlvbiBieVVuaWNvZGUocHJlZml4LCB1bmljb2RlKSB7XG4gIHJldHVybiAoX2J5VW5pY29kZVtwcmVmaXhdIHx8IHt9KVt1bmljb2RlXTtcbn1cbmZ1bmN0aW9uIGJ5TGlnYXR1cmUocHJlZml4LCBsaWdhdHVyZSkge1xuICByZXR1cm4gKF9ieUxpZ2F0dXJlW3ByZWZpeF0gfHwge30pW2xpZ2F0dXJlXTtcbn1cbmZ1bmN0aW9uIGJ5T2xkTmFtZShuYW1lKSB7XG4gIHJldHVybiBfYnlPbGROYW1lW25hbWVdIHx8IHtcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgaWNvbk5hbWU6IG51bGxcbiAgfTtcbn1cblxudmFyIHN0eWxlcyQxID0gbmFtZXNwYWNlLnN0eWxlcztcbnZhciBlbXB0eUNhbm9uaWNhbEljb24gPSBmdW5jdGlvbiBlbXB0eUNhbm9uaWNhbEljb24oKSB7XG4gIHJldHVybiB7XG4gICAgcHJlZml4OiBudWxsLFxuICAgIGljb25OYW1lOiBudWxsLFxuICAgIHJlc3Q6IFtdXG4gIH07XG59O1xuZnVuY3Rpb24gZ2V0Q2Fub25pY2FsSWNvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgdmFyIGljb25OYW1lID0gZ2V0SWNvbk5hbWUoY29uZmlnLmZhbWlseVByZWZpeCwgY2xzKTtcblxuICAgIGlmIChzdHlsZXMkMVtjbHNdKSB7XG4gICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmF1dG9GZXRjaFN2ZyAmJiBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEUpLmluZGV4T2YoY2xzKSA+IC0xKSB7XG4gICAgICBhY2MucHJlZml4ID0gY2xzO1xuICAgIH0gZWxzZSBpZiAoaWNvbk5hbWUpIHtcbiAgICAgIHZhciBzaGltID0gYWNjLnByZWZpeCA9PT0gJ2ZhJyA/IGJ5T2xkTmFtZShpY29uTmFtZSkgOiB7fTtcbiAgICAgIGFjYy5pY29uTmFtZSA9IHNoaW0uaWNvbk5hbWUgfHwgaWNvbk5hbWU7XG4gICAgICBhY2MucHJlZml4ID0gc2hpbS5wcmVmaXggfHwgYWNjLnByZWZpeDtcbiAgICB9IGVsc2UgaWYgKGNscyAhPT0gY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MgJiYgY2xzLmluZGV4T2YoJ2ZhLXctJykgIT09IDApIHtcbiAgICAgIGFjYy5yZXN0LnB1c2goY2xzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBlbXB0eUNhbm9uaWNhbEljb24oKSk7XG59XG5mdW5jdGlvbiBpY29uRnJvbU1hcHBpbmcobWFwcGluZywgcHJlZml4LCBpY29uTmFtZSkge1xuICBpZiAobWFwcGluZyAmJiBtYXBwaW5nW3ByZWZpeF0gJiYgbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIGljb246IG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvSHRtbChhYnN0cmFjdE5vZGVzKSB7XG4gIHZhciB0YWcgPSBhYnN0cmFjdE5vZGVzLnRhZyxcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9IGFic3RyYWN0Tm9kZXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPT09IHZvaWQgMCA/IHt9IDogX2Fic3RyYWN0Tm9kZXMkYXR0cmliLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID0gYWJzdHJhY3ROb2Rlcy5jaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuID0gX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID09PSB2b2lkIDAgPyBbXSA6IF9hYnN0cmFjdE5vZGVzJGNoaWxkcjtcblxuICBpZiAodHlwZW9mIGFic3RyYWN0Tm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGh0bWxFc2NhcGUoYWJzdHJhY3ROb2Rlcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiPFwiLmNvbmNhdCh0YWcsIFwiIFwiKS5jb25jYXQoam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcyksIFwiPlwiKS5jb25jYXQoY2hpbGRyZW4ubWFwKHRvSHRtbCkuam9pbignJyksIFwiPC9cIikuY29uY2F0KHRhZywgXCI+XCIpO1xuICB9XG59XG5cbnZhciBub29wJDIgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIGlzV2F0Y2hlZChub2RlKSB7XG4gIHZhciBpMnN2ZyA9IG5vZGUuZ2V0QXR0cmlidXRlID8gbm9kZS5nZXRBdHRyaWJ1dGUoREFUQV9GQV9JMlNWRykgOiBudWxsO1xuICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlO1xuICB9XG5cbiAgdmFyIG11dGF0b3IgPSBtdXRhdG9yc1tjb25maWcuYXV0b1JlcGxhY2VTdmddO1xuICByZXR1cm4gbXV0YXRvciB8fCBtdXRhdG9ycy5yZXBsYWNlO1xufVxuXG52YXIgbXV0YXRvcnMgPSB7XG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdO1xuICAgIHZhciBuZXdPdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICBub2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTCArIChjb25maWcua2VlcE9yaWdpbmFsU291cmNlICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnc3ZnJyA/IFwiPCEtLSBcIi5jb25jYXQobm9kZS5vdXRlckhUTUwsIFwiIEZvbnQgQXdlc29tZSBmb250YXdlc29tZS5jb20gLS0+XCIpIDogJycpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTDtcbiAgICB9XG4gIH0sXG4gIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdOyAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICBpZiAofmNsYXNzQXJyYXkobm9kZSkuaW5kZXhPZihjb25maWcucmVwbGFjZW1lbnRDbGFzcykpIHtcbiAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi0uKlwiKSk7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuc3R5bGU7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuaWQ7XG4gICAgdmFyIHNwbGl0Q2xhc3NlcyA9IGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3Muc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICBpZiAoY2xzID09PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyB8fCBjbHMubWF0Y2goZm9yU3ZnKSkge1xuICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnRvTm9kZS5wdXNoKGNscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgdG9Ob2RlOiBbXSxcbiAgICAgIHRvU3ZnOiBbXVxuICAgIH0pO1xuICAgIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3MgPSBzcGxpdENsYXNzZXMudG9Tdmcuam9pbignICcpO1xuICAgIHZhciBuZXdJbm5lckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICBub2RlLmlubmVySFRNTCA9IG5ld0lubmVySFRNTDtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGVyZm9ybU9wZXJhdGlvblN5bmMob3ApIHtcbiAgb3AoKTtcbn1cblxuZnVuY3Rpb24gcGVyZm9ybShtdXRhdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDI7XG5cbiAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyYW1lID0gcGVyZm9ybU9wZXJhdGlvblN5bmM7XG5cbiAgICBpZiAoY29uZmlnLm11dGF0ZUFwcHJvYWNoID09PSBNVVRBVElPTl9BUFBST0FDSF9BU1lOQykge1xuICAgICAgZnJhbWUgPSBXSU5ET1cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuICAgIH1cblxuICAgIGZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtdXRhdG9yID0gZ2V0TXV0YXRvcigpO1xuICAgICAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdtdXRhdGUnKTtcbiAgICAgIG11dGF0aW9ucy5tYXAobXV0YXRvcik7XG4gICAgICBtYXJrKCk7XG4gICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgfSk7XG4gIH1cbn1cbnZhciBkaXNhYmxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKCkge1xuICBkaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmFibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbnZhciBtbyA9IG51bGw7XG5mdW5jdGlvbiBvYnNlcnZlKG9wdGlvbnMpIHtcbiAgaWYgKCFNVVRBVElPTl9PQlNFUlZFUikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY29uZmlnLm9ic2VydmVNdXRhdGlvbnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJlZUNhbGxiYWNrID0gb3B0aW9ucy50cmVlQ2FsbGJhY2ssXG4gICAgICBub2RlQ2FsbGJhY2sgPSBvcHRpb25zLm5vZGVDYWxsYmFjayxcbiAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sgPSBvcHRpb25zLnBzZXVkb0VsZW1lbnRzQ2FsbGJhY2ssXG4gICAgICBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPSBvcHRpb25zLm9ic2VydmVNdXRhdGlvbnNSb290LFxuICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX29wdGlvbnMkb2JzZXJ2ZU11dGF0O1xuICBtbyA9IG5ldyBNVVRBVElPTl9PQlNFUlZFUihmdW5jdGlvbiAob2JqZWN0cykge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRvQXJyYXkob2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzLmxlbmd0aCA+IDAgJiYgIWlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzWzBdKSkge1xuICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUgJiYgY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIGlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC50YXJnZXQpICYmIH5BVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OLmluZGV4T2YobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICB2YXIgX2dldENhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobXV0YXRpb25SZWNvcmQudGFyZ2V0KSksXG4gICAgICAgICAgICAgIHByZWZpeCA9IF9nZXRDYW5vbmljYWxJY29uLnByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBfZ2V0Q2Fub25pY2FsSWNvbi5pY29uTmFtZTtcblxuICAgICAgICAgIGlmIChwcmVmaXgpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4JywgcHJlZml4KTtcbiAgICAgICAgICBpZiAoaWNvbk5hbWUpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsIGljb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbW8ub2JzZXJ2ZShvYnNlcnZlTXV0YXRpb25zUm9vdCwge1xuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIGlmICghbW8pIHJldHVybjtcbiAgbW8uZGlzY29ubmVjdCgpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVBhcnNlciAobm9kZSkge1xuICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgdmFyIHZhbCA9IFtdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHZhbCA9IHN0eWxlLnNwbGl0KCc7JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgICB2YXIgc3R5bGVzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBwcm9wID0gc3R5bGVzWzBdO1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzLnNsaWNlKDEpO1xuXG4gICAgICBpZiAocHJvcCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFjY1twcm9wXSA9IHZhbHVlLmpvaW4oJzonKS50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gY2xhc3NQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gIHZhciBleGlzdGluZ0ljb25OYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICB2YXIgaW5uZXJUZXh0ID0gbm9kZS5pbm5lclRleHQgIT09IHVuZGVmaW5lZCA/IG5vZGUuaW5uZXJUZXh0LnRyaW0oKSA6ICcnO1xuICB2YXIgdmFsID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG5vZGUpKTtcblxuICBpZiAoZXhpc3RpbmdQcmVmaXggJiYgZXhpc3RpbmdJY29uTmFtZSkge1xuICAgIHZhbC5wcmVmaXggPSBleGlzdGluZ1ByZWZpeDtcbiAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICB9XG5cbiAgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieUxpZ2F0dXJlKHZhbC5wcmVmaXgsIG5vZGUuaW5uZXJUZXh0KTtcbiAgfSBlbHNlIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPT09IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieVVuaWNvZGUodmFsLnByZWZpeCwgdG9IZXgobm9kZS5pbm5lclRleHQpKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBwYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZykge1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgZmxpcFk6IGZhbHNlLFxuICAgIHJvdGF0ZTogMFxuICB9O1xuXG4gIGlmICghdHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbikge1xuICAgICAgdmFyIHBhcnRzID0gbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG4gICAgICB2YXIgZmlyc3QgPSBwYXJ0c1swXTtcbiAgICAgIHZhciByZXN0ID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICAgIGFjYy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAndicpIHtcbiAgICAgICAgYWNjLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgcmVzdCA9IHBhcnNlRmxvYXQocmVzdCk7XG5cbiAgICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgICAgIGNhc2UgJ2dyb3cnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nocmluayc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgIGFjYy5yb3RhdGUgPSBhY2Mucm90YXRlICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0cmFuc2Zvcm0pO1xuICB9XG59O1xuZnVuY3Rpb24gdHJhbnNmb3JtUGFyc2VyIChub2RlKSB7XG4gIHJldHVybiBwYXJzZVRyYW5zZm9ybVN0cmluZyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10cmFuc2Zvcm0nKSk7XG59XG5cbmZ1bmN0aW9uIHN5bWJvbFBhcnNlciAobm9kZSkge1xuICB2YXIgc3ltYm9sID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtc3ltYm9sJyk7XG4gIHJldHVybiBzeW1ib2wgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbCA9PT0gJycgPyB0cnVlIDogc3ltYm9sO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSB0b0FycmF5KG5vZGUuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHIpIHtcbiAgICBpZiAoYWNjLm5hbWUgIT09ICdjbGFzcycgJiYgYWNjLm5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICB2YXIgdGl0bGVJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLXRpdGxlLWlkJyk7XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgZXh0cmFBdHRyaWJ1dGVzWydhcmlhLWxhYmVsbGVkYnknXSA9IFwiXCIuY29uY2F0KGNvbmZpZy5yZXBsYWNlbWVudENsYXNzLCBcIi10aXRsZS1cIikuY29uY2F0KHRpdGxlSWQgfHwgbmV4dFVuaXF1ZUlkKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICBleHRyYUF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXh0cmFBdHRyaWJ1dGVzO1xufVxuXG5mdW5jdGlvbiBtYXNrUGFyc2VyIChub2RlKSB7XG4gIHZhciBtYXNrID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtbWFzaycpO1xuXG4gIGlmICghbWFzaykge1xuICAgIHJldHVybiBlbXB0eUNhbm9uaWNhbEljb24oKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0Q2Fub25pY2FsSWNvbihtYXNrLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaS50cmltKCk7XG4gICAgfSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJsYW5rTWV0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBpY29uTmFtZTogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0aXRsZUlkOiBudWxsLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgIHN5bWJvbDogZmFsc2UsXG4gICAgbWFzazogbnVsbCxcbiAgICBtYXNrSWQ6IG51bGwsXG4gICAgZXh0cmE6IHtcbiAgICAgIGNsYXNzZXM6IFtdLFxuICAgICAgc3R5bGVzOiB7fSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VNZXRhKG5vZGUpIHtcbiAgdmFyIF9jbGFzc1BhcnNlciA9IGNsYXNzUGFyc2VyKG5vZGUpLFxuICAgICAgaWNvbk5hbWUgPSBfY2xhc3NQYXJzZXIuaWNvbk5hbWUsXG4gICAgICBwcmVmaXggPSBfY2xhc3NQYXJzZXIucHJlZml4LFxuICAgICAgZXh0cmFDbGFzc2VzID0gX2NsYXNzUGFyc2VyLnJlc3Q7XG5cbiAgdmFyIGV4dHJhU3R5bGVzID0gc3R5bGVQYXJzZXIobm9kZSk7XG4gIHZhciB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm1QYXJzZXIobm9kZSk7XG4gIHZhciBzeW1ib2wgPSBzeW1ib2xQYXJzZXIobm9kZSk7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzUGFyc2VyKG5vZGUpO1xuICB2YXIgbWFzayA9IG1hc2tQYXJzZXIobm9kZSk7XG4gIHJldHVybiB7XG4gICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgIHRpdGxlOiBub2RlLmdldEF0dHJpYnV0ZSgndGl0bGUnKSxcbiAgICB0aXRsZUlkOiBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10aXRsZS1pZCcpLFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgbWFza0lkOiBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrLWlkJyksXG4gICAgZXh0cmE6IHtcbiAgICAgIGNsYXNzZXM6IGV4dHJhQ2xhc3NlcyxcbiAgICAgIHN0eWxlczogZXh0cmFTdHlsZXMsXG4gICAgICBhdHRyaWJ1dGVzOiBleHRyYUF0dHJpYnV0ZXNcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1pc3NpbmdJY29uKGVycm9yKSB7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nSWNvbic7XG4gIHRoaXMubWVzc2FnZSA9IGVycm9yIHx8ICdJY29uIHVuYXZhaWxhYmxlJztcbiAgdGhpcy5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xufVxuTWlzc2luZ0ljb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ0ljb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0ljb247XG5cbnZhciBGSUxMID0ge1xuICBmaWxsOiAnY3VycmVudENvbG9yJ1xufTtcbnZhciBBTklNQVRJT05fQkFTRSA9IHtcbiAgYXR0cmlidXRlVHlwZTogJ1hNTCcsXG4gIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gIGR1cjogJzJzJ1xufTtcbnZhciBSSU5HID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIGQ6ICdNMTU2LjUsNDQ3LjdsLTEyLjYsMjkuNWMtMTguNy05LjUtMzUuOS0yMS4yLTUxLjUtMzQuOWwyMi43LTIyLjdDMTI3LjYsNDMwLjUsMTQxLjUsNDQwLDE1Ni41LDQ0Ny43eiBNNDAuNiwyNzJIOC41IGMxLjQsMjEuMiw1LjQsNDEuNywxMS43LDYxLjFMNTAsMzIxLjJDNDUuMSwzMDUuNSw0MS44LDI4OSw0MC42LDI3MnogTTQwLjYsMjQwYzEuNC0xOC44LDUuMi0zNywxMS4xLTU0LjFsLTI5LjUtMTIuNiBDMTQuNywxOTQuMywxMCwyMTYuNyw4LjUsMjQwSDQwLjZ6IE02NC4zLDE1Ni41YzcuOC0xNC45LDE3LjItMjguOCwyOC4xLTQxLjVMNjkuNyw5Mi4zYy0xMy43LDE1LjYtMjUuNSwzMi44LTM0LjksNTEuNSBMNjQuMywxNTYuNXogTTM5Nyw0MTkuNmMtMTMuOSwxMi0yOS40LDIyLjMtNDYuMSwzMC40bDExLjksMjkuOGMyMC43LTkuOSwzOS44LTIyLjYsNTYuOS0zNy42TDM5Nyw0MTkuNnogTTExNSw5Mi40IGMxMy45LTEyLDI5LjQtMjIuMyw0Ni4xLTMwLjRsLTExLjktMjkuOGMtMjAuNyw5LjktMzkuOCwyMi42LTU2LjgsMzcuNkwxMTUsOTIuNHogTTQ0Ny43LDM1NS41Yy03LjgsMTQuOS0xNy4yLDI4LjgtMjguMSw0MS41IGwyMi43LDIyLjdjMTMuNy0xNS42LDI1LjUtMzIuOSwzNC45LTUxLjVMNDQ3LjcsMzU1LjV6IE00NzEuNCwyNzJjLTEuNCwxOC44LTUuMiwzNy0xMS4xLDU0LjFsMjkuNSwxMi42IGM3LjUtMjEuMSwxMi4yLTQzLjUsMTMuNi02Ni44SDQ3MS40eiBNMzIxLjIsNDYyYy0xNS43LDUtMzIuMiw4LjItNDkuMiw5LjR2MzIuMWMyMS4yLTEuNCw0MS43LTUuNCw2MS4xLTExLjdMMzIxLjIsNDYyeiBNMjQwLDQ3MS40Yy0xOC44LTEuNC0zNy01LjItNTQuMS0xMS4xbC0xMi42LDI5LjVjMjEuMSw3LjUsNDMuNSwxMi4yLDY2LjgsMTMuNlY0NzEuNHogTTQ2MiwxOTAuOGM1LDE1LjcsOC4yLDMyLjIsOS40LDQ5LjJoMzIuMSBjLTEuNC0yMS4yLTUuNC00MS43LTExLjctNjEuMUw0NjIsMTkwLjh6IE05Mi40LDM5N2MtMTItMTMuOS0yMi4zLTI5LjQtMzAuNC00Ni4xbC0yOS44LDExLjljOS45LDIwLjcsMjIuNiwzOS44LDM3LjYsNTYuOSBMOTIuNCwzOTd6IE0yNzIsNDAuNmMxOC44LDEuNCwzNi45LDUuMiw1NC4xLDExLjFsMTIuNi0yOS41QzMxNy43LDE0LjcsMjk1LjMsMTAsMjcyLDguNVY0MC42eiBNMTkwLjgsNTAgYzE1LjctNSwzMi4yLTguMiw0OS4yLTkuNFY4LjVjLTIxLjIsMS40LTQxLjcsNS40LTYxLjEsMTEuN0wxOTAuOCw1MHogTTQ0Mi4zLDkyLjNMNDE5LjYsMTE1YzEyLDEzLjksMjIuMywyOS40LDMwLjUsNDYuMSBsMjkuOC0xMS45QzQ3MCwxMjguNSw0NTcuMywxMDkuNCw0NDIuMyw5Mi4zeiBNMzk3LDkyLjRsMjIuNy0yMi43Yy0xNS42LTEzLjctMzIuOC0yNS41LTUxLjUtMzQuOWwtMTIuNiwyOS41IEMzNzAuNCw3Mi4xLDM4NC40LDgxLjUsMzk3LDkyLjR6J1xuICB9KVxufTtcblxudmFyIE9QQUNJVFlfQU5JTUFURSA9IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gIGF0dHJpYnV0ZU5hbWU6ICdvcGFjaXR5J1xufSk7XG5cbnZhciBET1QgPSB7XG4gIHRhZzogJ2NpcmNsZScsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBjeDogJzI1NicsXG4gICAgY3k6ICczNjQnLFxuICAgIHI6ICcyOCdcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICB2YWx1ZXM6ICcyODsxNDsyODsyODsxNDsyODsnXG4gICAgfSlcbiAgfSwge1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzE7MTswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIFFVRVNUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcxJyxcbiAgICBkOiAnTTI2My43LDMxMmgtMTZjLTYuNiwwLTEyLTUuNC0xMi0xMmMwLTcxLDc3LjQtNjMuOSw3Ny40LTEwNy44YzAtMjAtMTcuOC00MC4yLTU3LjQtNDAuMmMtMjkuMSwwLTQ0LjMsOS42LTU5LjIsMjguNyBjLTMuOSw1LTExLjEsNi0xNi4yLDIuNGwtMTMuMS05LjJjLTUuNi0zLjktNi45LTExLjgtMi42LTE3LjJjMjEuMi0yNy4yLDQ2LjQtNDQuNyw5MS4yLTQ0LjdjNTIuMywwLDk3LjQsMjkuOCw5Ny40LDgwLjIgYzAsNjcuNi03Ny40LDYzLjUtNzcuNCwxMDcuOEMyNzUuNywzMDYuNiwyNzAuMywzMTIsMjYzLjcsMzEyeidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzA7MDswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIEVYQ0xBTUFUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcwJyxcbiAgICBkOiAnTTIzMi41LDEzNC41bDcsMTY4YzAuMyw2LjQsNS42LDExLjUsMTIsMTEuNWg5YzYuNCwwLDExLjctNS4xLDEyLTExLjVsNy0xNjhjMC4zLTYuOC01LjItMTIuNS0xMi0xMi41aC0yMyBDMjM3LjcsMTIyLDIzMi4yLDEyNy43LDIzMi41LDEzNC41eidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMDswOzE7MTswOzA7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIG1pc3NpbmcgPSB7XG4gIHRhZzogJ2cnLFxuICBjaGlsZHJlbjogW1JJTkcsIERPVCwgUVVFU1RJT04sIEVYQ0xBTUFUSU9OXVxufTtcblxudmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcbmZ1bmN0aW9uIGFzRm91bmRJY29uKGljb24pIHtcbiAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgdmFyIGhlaWdodCA9IGljb25bMV07XG5cbiAgdmFyIF9pY29uJHNsaWNlID0gaWNvbi5zbGljZSg0KSxcbiAgICAgIF9pY29uJHNsaWNlMiA9IF9zbGljZWRUb0FycmF5KF9pY29uJHNsaWNlLCAxKSxcbiAgICAgIHZlY3RvckRhdGEgPSBfaWNvbiRzbGljZTJbMF07XG5cbiAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZlY3RvckRhdGEpKSB7XG4gICAgZWxlbWVudCA9IHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuR1JPVVApXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWSksXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMV1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdwYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGQ6IHZlY3RvckRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3VuZDogdHJ1ZSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaWNvbjogZWxlbWVudFxuICB9O1xufVxuZnVuY3Rpb24gZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHZhbCA9IHtcbiAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICAgIGljb246IG1pc3NpbmdcbiAgICB9O1xuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXMkMltwcmVmaXhdICYmIHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICB2YXIgaWNvbiA9IHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdO1xuICAgICAgcmV0dXJuIHJlc29sdmUoYXNGb3VuZEljb24oaWNvbikpO1xuICAgIH1cblxuICAgIGlmIChpY29uTmFtZSAmJiBwcmVmaXggJiYgIWNvbmZpZy5zaG93TWlzc2luZ0ljb25zKSB7XG4gICAgICByZWplY3QobmV3IE1pc3NpbmdJY29uKFwiSWNvbiBpcyBtaXNzaW5nIGZvciBwcmVmaXggXCIuY29uY2F0KHByZWZpeCwgXCIgd2l0aCBpY29uIG5hbWUgXCIpLmNvbmNhdChpY29uTmFtZSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBzdHlsZXMkMyA9IG5hbWVzcGFjZS5zdHlsZXM7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbihub2RlLCBub2RlTWV0YSkge1xuICB2YXIgaWNvbk5hbWUgPSBub2RlTWV0YS5pY29uTmFtZSxcbiAgICAgIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0aXRsZUlkID0gbm9kZU1ldGEudGl0bGVJZCxcbiAgICAgIHByZWZpeCA9IG5vZGVNZXRhLnByZWZpeCxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgIG1hc2sgPSBub2RlTWV0YS5tYXNrLFxuICAgICAgbWFza0lkID0gbm9kZU1ldGEubWFza0lkLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBmaW5kSWNvbihtYXNrLmljb25OYW1lLCBtYXNrLnByZWZpeCldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIHRpdGxlSWQ6IHRpdGxlSWQsXG4gICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICB9KV0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciB0aXRsZSA9IG5vZGVNZXRhLnRpdGxlLFxuICAgICAgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgdmFyIHdpZHRoID0gbnVsbDtcbiAgdmFyIGhlaWdodCA9IG51bGw7XG5cbiAgaWYgKElTX0lFKSB7XG4gICAgdmFyIGNvbXB1dGVkRm9udFNpemUgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG5vZGUpLmZvbnRTaXplLCAxMCk7XG4gICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgd2lkdGggPSBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggLyBjb21wdXRlZEZvbnRTaXplO1xuICAgIGhlaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgLyBjb21wdXRlZEZvbnRTaXplO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hdXRvQTExeSAmJiAhdGl0bGUpIHtcbiAgICBleHRyYS5hdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICB9XG5cbiAgcmV0dXJuIHBpY2tlZC5yZXNvbHZlKFtub2RlLCBtYWtlTGF5ZXJzVGV4dEFic3RyYWN0KHtcbiAgICBjb250ZW50OiBub2RlLmlubmVySFRNTCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGV4dHJhOiBleHRyYSxcbiAgICB3YXRjaGFibGU6IHRydWVcbiAgfSldKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNdXRhdGlvbihub2RlKSB7XG4gIHZhciBub2RlTWV0YSA9IHBhcnNlTWV0YShub2RlKTtcblxuICBpZiAofm5vZGVNZXRhLmV4dHJhLmNsYXNzZXMuaW5kZXhPZihMQVlFUlNfVEVYVF9DTEFTU05BTUUpKSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlTGF5ZXJzVGV4dChub2RlLCBub2RlTWV0YSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdlbmVyYXRlU3ZnUmVwbGFjZW1lbnRNdXRhdGlvbihub2RlLCBub2RlTWV0YSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25UcmVlKHJvb3QpIHtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICB2YXIgaHRtbENsYXNzTGlzdCA9IERPQ1VNRU5ULmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3Q7XG5cbiAgdmFyIGhjbEFkZCA9IGZ1bmN0aW9uIGhjbEFkZChzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5hZGQoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICB9O1xuXG4gIHZhciBoY2xSZW1vdmUgPSBmdW5jdGlvbiBoY2xSZW1vdmUoc3VmZml4KSB7XG4gICAgcmV0dXJuIGh0bWxDbGFzc0xpc3QucmVtb3ZlKFwiXCIuY29uY2F0KEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUywgXCItXCIpLmNvbmNhdChzdWZmaXgpKTtcbiAgfTtcblxuICB2YXIgcHJlZml4ZXMgPSBjb25maWcuYXV0b0ZldGNoU3ZnID8gT2JqZWN0LmtleXMoUFJFRklYX1RPX1NUWUxFKSA6IE9iamVjdC5rZXlzKHN0eWxlcyQzKTtcbiAgdmFyIHByZWZpeGVzRG9tUXVlcnkgPSBbXCIuXCIuY29uY2F0KExBWUVSU19URVhUX0NMQVNTTkFNRSwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIildLmNvbmNhdChwcmVmaXhlcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gXCIuXCIuY29uY2F0KHAsIFwiOm5vdChbXCIpLmNvbmNhdChEQVRBX0ZBX0kyU1ZHLCBcIl0pXCIpO1xuICB9KSkuam9pbignLCAnKTtcblxuICBpZiAocHJlZml4ZXNEb21RdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlcyA9IFtdO1xuXG4gIHRyeSB7XG4gICAgY2FuZGlkYXRlcyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKHByZWZpeGVzRG9tUXVlcnkpKTtcbiAgfSBjYXRjaCAoZSkgey8vIG5vb3BcbiAgfVxuXG4gIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICBoY2xBZGQoJ3BlbmRpbmcnKTtcbiAgICBoY2xSZW1vdmUoJ2NvbXBsZXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdvblRyZWUnKTtcbiAgdmFyIG11dGF0aW9ucyA9IGNhbmRpZGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG11dGF0aW9uID0gZ2VuZXJhdGVNdXRhdGlvbihub2RlKTtcblxuICAgICAgaWYgKG11dGF0aW9uKSB7XG4gICAgICAgIGFjYy5wdXNoKG11dGF0aW9uKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNaXNzaW5nSWNvbikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBwaWNrZWQuYWxsKG11dGF0aW9ucykudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRNdXRhdGlvbnMpIHtcbiAgICAgIHBlcmZvcm0ocmVzb2x2ZWRNdXRhdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGNsQWRkKCdhY3RpdmUnKTtcbiAgICAgICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgICAgICBoY2xSZW1vdmUoJ3BlbmRpbmcnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgbWFyaygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICBtYXJrKCk7XG4gICAgICByZWplY3QoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBvbk5vZGUobm9kZSkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGdlbmVyYXRlTXV0YXRpb24obm9kZSkudGhlbihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgIHBlcmZvcm0oW211dGF0aW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCBwb3NpdGlvbikge1xuICB2YXIgcGVuZGluZ0F0dHJpYnV0ZSA9IFwiXCIuY29uY2F0KERBVEFfRkFfUFNFVURPX0VMRU1FTlRfUEVORElORykuY29uY2F0KHBvc2l0aW9uLnJlcGxhY2UoJzonLCAnLScpKTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlKSAhPT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBub2RlIGlzIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkobm9kZS5jaGlsZHJlbik7XG4gICAgdmFyIGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYy5nZXRBdHRyaWJ1dGUoREFUQV9GQV9QU0VVRE9fRUxFTUVOVCkgPT09IHBvc2l0aW9uO1xuICAgIH0pWzBdO1xuICAgIHZhciBzdHlsZXMgPSBXSU5ET1cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwb3NpdGlvbik7XG4gICAgdmFyIGZvbnRGYW1pbHkgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKS5tYXRjaChGT05UX0ZBTUlMWV9QQVRURVJOKTtcbiAgICB2YXIgZm9udFdlaWdodCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXdlaWdodCcpO1xuICAgIHZhciBjb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCAmJiAhZm9udEZhbWlseSkge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgLy8gdGhhdCBwcm9iYWJseSBtZWFucyB0aGF0IGEgY2xhc3MgbmFtZSB0aGF0IHdhcyBwcmV2aW91c2x5IHByZXNlbnQgdG8gbWFrZSB0aGUgaWNvbiBoYXMgYmVlblxuICAgICAgLy8gcmVtb3ZlZC4gU28gd2Ugbm93IHNob3VsZCBkZWxldGUgdGhlIGljb24uXG4gICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSBlbHNlIGlmIChmb250RmFtaWx5ICYmIGNvbnRlbnQgIT09ICdub25lJyAmJiBjb250ZW50ICE9PSAnJykge1xuICAgICAgdmFyIF9jb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcblxuICAgICAgdmFyIHByZWZpeCA9IH5bJ1NvbGlkJywgJ1JlZ3VsYXInLCAnTGlnaHQnLCAnRHVvdG9uZScsICdCcmFuZHMnLCAnS2l0J10uaW5kZXhPZihmb250RmFtaWx5WzJdKSA/IFNUWUxFX1RPX1BSRUZJWFtmb250RmFtaWx5WzJdLnRvTG93ZXJDYXNlKCldIDogRk9OVF9XRUlHSFRfVE9fUFJFRklYW2ZvbnRXZWlnaHRdO1xuICAgICAgdmFyIGhleFZhbHVlID0gdG9IZXgoX2NvbnRlbnQubGVuZ3RoID09PSAzID8gX2NvbnRlbnQuc3Vic3RyKDEsIDEpIDogX2NvbnRlbnQpO1xuICAgICAgdmFyIGljb25OYW1lID0gYnlVbmljb2RlKHByZWZpeCwgaGV4VmFsdWUpO1xuICAgICAgdmFyIGljb25JZGVudGlmaWVyID0gaWNvbk5hbWU7IC8vIE9ubHkgY29udmVydCB0aGUgcHNldWRvIGVsZW1lbnQgaW4gdGhpcyA6YmVmb3JlLzphZnRlciBwb3NpdGlvbiBpbnRvIGFuIGljb24gaWYgd2UgaGF2ZW4ndFxuICAgICAgLy8gYWxyZWFkeSBkb25lIHNvIHdpdGggdGhlIHNhbWUgcHJlZml4IGFuZCBpY29uTmFtZVxuXG4gICAgICBpZiAoaWNvbk5hbWUgJiYgKCFhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9QUkVGSVgpICE9PSBwcmVmaXggfHwgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQuZ2V0QXR0cmlidXRlKERBVEFfSUNPTikgIT09IGljb25JZGVudGlmaWVyKSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlLCBpY29uSWRlbnRpZmllcik7XG5cbiAgICAgICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KSB7XG4gICAgICAgICAgLy8gRGVsZXRlIHRoZSBvbGQgb25lLCBzaW5jZSB3ZSdyZSByZXBsYWNpbmcgaXQgd2l0aCBhIG5ldyBvbmVcbiAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtZXRhID0gYmxhbmtNZXRhKCk7XG4gICAgICAgIHZhciBleHRyYSA9IG1ldGEuZXh0cmE7XG4gICAgICAgIGV4dHJhLmF0dHJpYnV0ZXNbREFUQV9GQV9QU0VVRE9fRUxFTUVOVF0gPSBwb3NpdGlvbjtcbiAgICAgICAgZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkudGhlbihmdW5jdGlvbiAobWFpbikge1xuICAgICAgICAgIHZhciBhYnN0cmFjdCA9IG1ha2VJbmxpbmVTdmdBYnN0cmFjdChfb2JqZWN0U3ByZWFkKHt9LCBtZXRhLCB7XG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICAgICAgICBtYXNrOiBlbXB0eUNhbm9uaWNhbEljb24oKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgaWNvbk5hbWU6IGljb25JZGVudGlmaWVyLFxuICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICAgICAgd2F0Y2hhYmxlOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XG5cbiAgICAgICAgICBpZiAocG9zaXRpb24gPT09ICc6YmVmb3JlJykge1xuICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgbm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtZW50Lm91dGVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShwZW5kaW5nQXR0cmlidXRlKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKG5vZGUpIHtcbiAgcmV0dXJuIHBpY2tlZC5hbGwoW3JlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOmJlZm9yZScpLCByZXBsYWNlRm9yUG9zaXRpb24obm9kZSwgJzphZnRlcicpXSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NhYmxlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuaGVhZCAmJiAhflRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTLmluZGV4T2Yobm9kZS50YWdOYW1lLnRvVXBwZXJDYXNlKCkpICYmICFub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSAmJiAoIW5vZGUucGFyZW50Tm9kZSB8fCBub2RlLnBhcmVudE5vZGUudGFnTmFtZSAhPT0gJ3N2ZycpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hQc2V1ZG9FbGVtZW50cyAocm9vdCkge1xuICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIG9wZXJhdGlvbnMgPSB0b0FycmF5KHJvb3QucXVlcnlTZWxlY3RvckFsbCgnKicpKS5maWx0ZXIocHJvY2Vzc2FibGUpLm1hcChyZXBsYWNlKTtcbiAgICB2YXIgZW5kID0gcGVyZi5iZWdpbignc2VhcmNoUHNldWRvRWxlbWVudHMnKTtcbiAgICBkaXNhYmxlT2JzZXJ2YXRpb24oKTtcbiAgICBwaWNrZWQuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgZW5kKCk7XG4gICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGVuZCgpO1xuICAgICAgZW5hYmxlT2JzZXJ2YXRpb24oKTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIGJhc2VTdHlsZXMgPSBcInN2Zzpub3QoOnJvb3QpLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAxZW07XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWxnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4yMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMSB7XFxuICB3aWR0aDogMC4wNjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTIge1xcbiAgd2lkdGg6IDAuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTMge1xcbiAgd2lkdGg6IDAuMTg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy00IHtcXG4gIHdpZHRoOiAwLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTUge1xcbiAgd2lkdGg6IDAuMzEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy02IHtcXG4gIHdpZHRoOiAwLjM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy03IHtcXG4gIHdpZHRoOiAwLjQzNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOCB7XFxuICB3aWR0aDogMC41ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTkge1xcbiAgd2lkdGg6IDAuNTYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMCB7XFxuICB3aWR0aDogMC42MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTEge1xcbiAgd2lkdGg6IDAuNjg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMiB7XFxuICB3aWR0aDogMC43NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMyB7XFxuICB3aWR0aDogMC44MTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE0IHtcXG4gIHdpZHRoOiAwLjg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xNSB7XFxuICB3aWR0aDogMC45Mzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE2IHtcXG4gIHdpZHRoOiAxZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE3IHtcXG4gIHdpZHRoOiAxLjA2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTgge1xcbiAgd2lkdGg6IDEuMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE5IHtcXG4gIHdpZHRoOiAxLjE4NzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMjAge1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtbGVmdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtYm9yZGVyIHtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1saSB7XFxuICB3aWR0aDogMmVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtZncge1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuXFxuLmZhLWxheWVycyBzdmcuc3ZnLWlubGluZS0tZmEge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uZmEtbGF5ZXJzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuLmZhLWxheWVycyBzdmcuc3ZnLWlubGluZS0tZmEge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIsIC5mYS1sYXllcnMtdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtdGV4dCB7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjUzYTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWF4LXdpZHRoOiA1ZW07XFxuICBtaW4td2lkdGg6IDEuNWVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogYXV0bztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtYm90dG9tLWxlZnQge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcblxcbi5mYS1sYXllcnMtdG9wLXJpZ2h0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtbGVmdCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG59XFxuXFxuLmZhLWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4zMzMzMzMzMzMzZW07XFxuICBsaW5lLWhlaWdodDogMC43NWVtO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjA2NjdlbTtcXG59XFxuXFxuLmZhLXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xcbn1cXG5cXG4uZmEtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xcbn1cXG5cXG4uZmEtMXgge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5mYS0yeCB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmZhLTN4IHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uZmEtNHgge1xcbiAgZm9udC1zaXplOiA0ZW07XFxufVxcblxcbi5mYS01eCB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuLmZhLTZ4IHtcXG4gIGZvbnQtc2l6ZTogNmVtO1xcbn1cXG5cXG4uZmEtN3gge1xcbiAgZm9udC1zaXplOiA3ZW07XFxufVxcblxcbi5mYS04eCB7XFxuICBmb250LXNpemU6IDhlbTtcXG59XFxuXFxuLmZhLTl4IHtcXG4gIGZvbnQtc2l6ZTogOWVtO1xcbn1cXG5cXG4uZmEtMTB4IHtcXG4gIGZvbnQtc2l6ZTogMTBlbTtcXG59XFxuXFxuLmZhLWZ3IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcblxcbi5mYS11bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMi41ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5mYS11bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZhLWxpIHtcXG4gIGxlZnQ6IC0yZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMmVtO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5mYS1ib3JkZXIge1xcbiAgYm9yZGVyOiBzb2xpZCAwLjA4ZW0gI2VlZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xcbiAgcGFkZGluZzogMC4yZW0gMC4yNWVtIDAuMTVlbTtcXG59XFxuXFxuLmZhLXB1bGwtbGVmdCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmZhLXB1bGwtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uZmEuZmEtcHVsbC1sZWZ0LFxcbi5mYXMuZmEtcHVsbC1sZWZ0LFxcbi5mYXIuZmEtcHVsbC1sZWZ0LFxcbi5mYWwuZmEtcHVsbC1sZWZ0LFxcbi5mYWIuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxufVxcbi5mYS5mYS1wdWxsLXJpZ2h0LFxcbi5mYXMuZmEtcHVsbC1yaWdodCxcXG4uZmFyLmZhLXB1bGwtcmlnaHQsXFxuLmZhbC5mYS1wdWxsLXJpZ2h0LFxcbi5mYWIuZmEtcHVsbC1yaWdodCB7XFxuICBtYXJnaW4tbGVmdDogMC4zZW07XFxufVxcblxcbi5mYS1zcGluIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuXFxuLmZhLXB1bHNlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYS1zcGluIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuLmZhLXJvdGF0ZS05MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmZhLXJvdGF0ZS0xODAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLmZhLXJvdGF0ZS0yNzAge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuXFxuLmZhLWZsaXAtaG9yaXpvbnRhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MCwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG5cXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbn1cXG5cXG4uZmEtZmxpcC1ib3RoLCAuZmEtZmxpcC1ob3Jpem9udGFsLmZhLWZsaXAtdmVydGljYWwge1xcbiAgLW1zLWZpbHRlcjogXFxcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTIsIG1pcnJvcj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbn1cXG5cXG46cm9vdCAuZmEtcm90YXRlLTkwLFxcbjpyb290IC5mYS1yb3RhdGUtMTgwLFxcbjpyb290IC5mYS1yb3RhdGUtMjcwLFxcbjpyb290IC5mYS1mbGlwLWhvcml6b250YWwsXFxuOnJvb3QgLmZhLWZsaXAtdmVydGljYWwsXFxuOnJvb3QgLmZhLWZsaXAtYm90aCB7XFxuICAtd2Via2l0LWZpbHRlcjogbm9uZTtcXG4gICAgICAgICAgZmlsdGVyOiBub25lO1xcbn1cXG5cXG4uZmEtc3RhY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMi41ZW07XFxufVxcblxcbi5mYS1zdGFjay0xeCxcXG4uZmEtc3RhY2stMngge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMXgge1xcbiAgaGVpZ2h0OiAxZW07XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3RhY2stMngge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMi41ZW07XFxufVxcblxcbi5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3Itb25seSB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxufVxcblxcbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XFxuICBjbGlwOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBwb3NpdGlvbjogc3RhdGljO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSAuZmEtcHJpbWFyeSB7XFxuICBmaWxsOiB2YXIoLS1mYS1wcmltYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpO1xcbiAgb3BhY2l0eTogMTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXByaW1hcnktb3BhY2l0eSwgMSk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSAuZmEtc2Vjb25kYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXNlY29uZGFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1wcmltYXJ5IHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1zZWNvbmRhcnkge1xcbiAgb3BhY2l0eTogMTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXByaW1hcnktb3BhY2l0eSwgMSk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSBtYXNrIC5mYS1wcmltYXJ5LFxcbi5zdmctaW5saW5lLS1mYSBtYXNrIC5mYS1zZWNvbmRhcnkge1xcbiAgZmlsbDogYmxhY2s7XFxufVxcblxcbi5mYWQuZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XCI7XG5cbmZ1bmN0aW9uIGNzcyAoKSB7XG4gIHZhciBkZnAgPSBERUZBVUxUX0ZBTUlMWV9QUkVGSVg7XG4gIHZhciBkcmMgPSBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTO1xuICB2YXIgZnAgPSBjb25maWcuZmFtaWx5UHJlZml4O1xuICB2YXIgcmMgPSBjb25maWcucmVwbGFjZW1lbnRDbGFzcztcbiAgdmFyIHMgPSBiYXNlU3R5bGVzO1xuXG4gIGlmIChmcCAhPT0gZGZwIHx8IHJjICE9PSBkcmMpIHtcbiAgICB2YXIgZFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZGZwLCBcIlxcXFwtXCIpLCAnZycpO1xuICAgIHZhciBjdXN0b21Qcm9wUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLS1cIi5jb25jYXQoZGZwLCBcIlxcXFwtXCIpLCAnZycpO1xuICAgIHZhciByUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkcmMpLCAnZycpO1xuICAgIHMgPSBzLnJlcGxhY2UoZFBhdHQsIFwiLlwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKGN1c3RvbVByb3BQYXR0LCBcIi0tXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoclBhdHQsIFwiLlwiLmNvbmNhdChyYykpO1xuICB9XG5cbiAgcmV0dXJuIHM7XG59XG5cbnZhciBMaWJyYXJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTGlicmFyeSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlicmFyeSk7XG5cbiAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTGlicmFyeSwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZGVmaW5pdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRpdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UodGhpcy5fcHVsbERlZmluaXRpb25zLCB7fSk7XG4gICAgICBPYmplY3Qua2V5cyhhZGRpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfdGhpcy5kZWZpbml0aW9uc1trZXldID0gX29iamVjdFNwcmVhZCh7fSwgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSB8fCB7fSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBkZWZpbmVJY29ucyhrZXksIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgYnVpbGQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX3B1bGxEZWZpbml0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVsbERlZmluaXRpb25zKGFkZGl0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgdmFyIG5vcm1hbGl6ZWQgPSBkZWZpbml0aW9uLnByZWZpeCAmJiBkZWZpbml0aW9uLmljb25OYW1lICYmIGRlZmluaXRpb24uaWNvbiA/IHtcbiAgICAgICAgMDogZGVmaW5pdGlvblxuICAgICAgfSA6IGRlZmluaXRpb247XG4gICAgICBPYmplY3Qua2V5cyhub3JtYWxpemVkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX25vcm1hbGl6ZWQka2V5ID0gbm9ybWFsaXplZFtrZXldLFxuICAgICAgICAgICAgcHJlZml4ID0gX25vcm1hbGl6ZWQka2V5LnByZWZpeCxcbiAgICAgICAgICAgIGljb25OYW1lID0gX25vcm1hbGl6ZWQka2V5Lmljb25OYW1lLFxuICAgICAgICAgICAgaWNvbiA9IF9ub3JtYWxpemVkJGtleS5pY29uO1xuICAgICAgICBpZiAoIWFkZGl0aW9uc1twcmVmaXhdKSBhZGRpdGlvbnNbcHJlZml4XSA9IHt9O1xuICAgICAgICBhZGRpdGlvbnNbcHJlZml4XVtpY29uTmFtZV0gPSBpY29uO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWRkaXRpb25zO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMaWJyYXJ5O1xufSgpO1xuXG5mdW5jdGlvbiBlbnN1cmVDc3MoKSB7XG4gIGlmIChjb25maWcuYXV0b0FkZENzcyAmJiAhX2Nzc0luc2VydGVkKSB7XG4gICAgaW5zZXJ0Q3NzKGNzcygpKTtcblxuICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBpT2JqZWN0KHZhbCwgYWJzdHJhY3RDcmVhdG9yKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdhYnN0cmFjdCcsIHtcbiAgICBnZXQ6IGFic3RyYWN0Q3JlYXRvclxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2h0bWwnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsLmFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ25vZGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIUlTX0RPTSkgcmV0dXJuO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHZhbC5odG1sO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBmaW5kSWNvbkRlZmluaXRpb24oaWNvbkxvb2t1cCkge1xuICB2YXIgX2ljb25Mb29rdXAkcHJlZml4ID0gaWNvbkxvb2t1cC5wcmVmaXgsXG4gICAgICBwcmVmaXggPSBfaWNvbkxvb2t1cCRwcmVmaXggPT09IHZvaWQgMCA/ICdmYScgOiBfaWNvbkxvb2t1cCRwcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IGljb25Mb29rdXAuaWNvbk5hbWU7XG4gIGlmICghaWNvbk5hbWUpIHJldHVybjtcbiAgcmV0dXJuIGljb25Gcm9tTWFwcGluZyhsaWJyYXJ5LmRlZmluaXRpb25zLCBwcmVmaXgsIGljb25OYW1lKSB8fCBpY29uRnJvbU1hcHBpbmcobmFtZXNwYWNlLnN0eWxlcywgcHJlZml4LCBpY29uTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJY29ucyhuZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAobWF5YmVJY29uRGVmaW5pdGlvbikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBpY29uRGVmaW5pdGlvbiA9IChtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KS5pY29uID8gbWF5YmVJY29uRGVmaW5pdGlvbiA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXliZUljb25EZWZpbml0aW9uIHx8IHt9KTtcbiAgICB2YXIgbWFzayA9IHBhcmFtcy5tYXNrO1xuXG4gICAgaWYgKG1hc2spIHtcbiAgICAgIG1hc2sgPSAobWFzayB8fCB7fSkuaWNvbiA/IG1hc2sgOiBmaW5kSWNvbkRlZmluaXRpb24obWFzayB8fCB7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoaWNvbkRlZmluaXRpb24sIF9vYmplY3RTcHJlYWQoe30sIHBhcmFtcywge1xuICAgICAgbWFzazogbWFza1xuICAgIH0pKTtcbiAgfTtcbn1cblxudmFyIGxpYnJhcnkgPSBuZXcgTGlicmFyeSgpO1xudmFyIG5vQXV0byA9IGZ1bmN0aW9uIG5vQXV0bygpIHtcbiAgY29uZmlnLmF1dG9SZXBsYWNlU3ZnID0gZmFsc2U7XG4gIGNvbmZpZy5vYnNlcnZlTXV0YXRpb25zID0gZmFsc2U7XG4gIGRpc2Nvbm5lY3QoKTtcbn07XG52YXIgX2Nzc0luc2VydGVkID0gZmFsc2U7XG52YXIgZG9tID0ge1xuICBpMnN2ZzogZnVuY3Rpb24gaTJzdmcoKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAoSVNfRE9NKSB7XG4gICAgICBlbnN1cmVDc3MoKTtcbiAgICAgIHZhciBfcGFyYW1zJG5vZGUgPSBwYXJhbXMubm9kZSxcbiAgICAgICAgICBub2RlID0gX3BhcmFtcyRub2RlID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkbm9kZSxcbiAgICAgICAgICBfcGFyYW1zJGNhbGxiYWNrID0gcGFyYW1zLmNhbGxiYWNrLFxuICAgICAgICAgIGNhbGxiYWNrID0gX3BhcmFtcyRjYWxsYmFjayA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfcGFyYW1zJGNhbGxiYWNrO1xuXG4gICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgIHNlYXJjaFBzZXVkb0VsZW1lbnRzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb25UcmVlKG5vZGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBpY2tlZC5yZWplY3QoJ09wZXJhdGlvbiByZXF1aXJlcyBhIERPTSBvZiBzb21lIGtpbmQuJyk7XG4gICAgfVxuICB9LFxuICBjc3M6IGNzcyxcbiAgaW5zZXJ0Q3NzOiBmdW5jdGlvbiBpbnNlcnRDc3MkJDEoKSB7XG4gICAgaWYgKCFfY3NzSW5zZXJ0ZWQpIHtcbiAgICAgIGluc2VydENzcyhjc3MoKSk7XG5cbiAgICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gICAgfVxuICB9LFxuICB3YXRjaDogZnVuY3Rpb24gd2F0Y2goKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IHBhcmFtcy5hdXRvUmVwbGFjZVN2Z1Jvb3QsXG4gICAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290ID0gcGFyYW1zLm9ic2VydmVNdXRhdGlvbnNSb290O1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSB0cnVlO1xuICAgIGRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIGF1dG9SZXBsYWNlKHtcbiAgICAgICAgYXV0b1JlcGxhY2VTdmdSb290OiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZSh7XG4gICAgICAgIHRyZWVDYWxsYmFjazogb25UcmVlLFxuICAgICAgICBub2RlQ2FsbGJhY2s6IG9uTm9kZSxcbiAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjazogc2VhcmNoUHNldWRvRWxlbWVudHMsXG4gICAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290OiBvYnNlcnZlTXV0YXRpb25zUm9vdFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgcGFyc2UgPSB7XG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gdHJhbnNmb3JtKHRyYW5zZm9ybVN0cmluZykge1xuICAgIHJldHVybiBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpO1xuICB9XG59O1xudmFyIGljb24gPSByZXNvbHZlSWNvbnMoZnVuY3Rpb24gKGljb25EZWZpbml0aW9uKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0gPSBwYXJhbXMudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3BhcmFtcyR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0sXG4gICAgICBfcGFyYW1zJHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICBzeW1ib2wgPSBfcGFyYW1zJHN5bWJvbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHN5bWJvbCxcbiAgICAgIF9wYXJhbXMkbWFzayA9IHBhcmFtcy5tYXNrLFxuICAgICAgbWFzayA9IF9wYXJhbXMkbWFzayA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkbWFzayxcbiAgICAgIF9wYXJhbXMkbWFza0lkID0gcGFyYW1zLm1hc2tJZCxcbiAgICAgIG1hc2tJZCA9IF9wYXJhbXMkbWFza0lkID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrSWQsXG4gICAgICBfcGFyYW1zJHRpdGxlID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZSxcbiAgICAgIF9wYXJhbXMkdGl0bGVJZCA9IHBhcmFtcy50aXRsZUlkLFxuICAgICAgdGl0bGVJZCA9IF9wYXJhbXMkdGl0bGVJZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGVJZCxcbiAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gIGlmICghaWNvbkRlZmluaXRpb24pIHJldHVybjtcbiAgdmFyIHByZWZpeCA9IGljb25EZWZpbml0aW9uLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkRlZmluaXRpb24uaWNvbk5hbWUsXG4gICAgICBpY29uID0gaWNvbkRlZmluaXRpb24uaWNvbjtcbiAgcmV0dXJuIGFwaU9iamVjdChfb2JqZWN0U3ByZWFkKHtcbiAgICB0eXBlOiAnaWNvbidcbiAgfSwgaWNvbkRlZmluaXRpb24pLCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9BMTF5KSB7XG4gICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdCh0aXRsZUlkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2ZvY3VzYWJsZSddID0gJ2ZhbHNlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHtcbiAgICAgIGljb25zOiB7XG4gICAgICAgIG1haW46IGFzRm91bmRJY29uKGljb24pLFxuICAgICAgICBtYXNrOiBtYXNrID8gYXNGb3VuZEljb24obWFzay5pY29uKSA6IHtcbiAgICAgICAgICBmb3VuZDogZmFsc2UsXG4gICAgICAgICAgd2lkdGg6IG51bGwsXG4gICAgICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgICAgIGljb246IHt9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIHRyYW5zZm9ybTogX29iamVjdFNwcmVhZCh7fSwgbWVhbmluZ2xlc3NUcmFuc2Zvcm0sIHRyYW5zZm9ybSksXG4gICAgICBzeW1ib2w6IHN5bWJvbCxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgdGl0bGVJZDogdGl0bGVJZCxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBjbGFzc2VzXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG52YXIgdGV4dCA9IGZ1bmN0aW9uIHRleHQoY29udGVudCkge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdHJhbnNmb3JtMiA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybTIgPT09IHZvaWQgMCA/IG1lYW5pbmdsZXNzVHJhbnNmb3JtIDogX3BhcmFtcyR0cmFuc2Zvcm0yLFxuICAgICAgX3BhcmFtcyR0aXRsZTIgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUyID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZTIsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMyID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzMiA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMyLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzMiA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlczIgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzMixcbiAgICAgIF9wYXJhbXMkc3R5bGVzMiA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlczIgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXMyO1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29udGVudDogY29udGVudFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgcmV0dXJuIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIHRyYW5zZm9ybTogX29iamVjdFNwcmVhZCh7fSwgbWVhbmluZ2xlc3NUcmFuc2Zvcm0sIHRyYW5zZm9ybSksXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBleHRyYToge1xuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgY2xhc3NlczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVycy10ZXh0XCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG52YXIgY291bnRlciA9IGZ1bmN0aW9uIGNvdW50ZXIoY29udGVudCkge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkdGl0bGUzID0gcGFyYW1zLnRpdGxlLFxuICAgICAgdGl0bGUgPSBfcGFyYW1zJHRpdGxlMyA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUzLFxuICAgICAgX3BhcmFtcyRjbGFzc2VzMyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzMyxcbiAgICAgIF9wYXJhbXMkYXR0cmlidXRlczMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlczMsXG4gICAgICBfcGFyYW1zJHN0eWxlczMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzMztcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ2NvdW50ZXInLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHJldHVybiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQudG9TdHJpbmcoKSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzLWNvdW50ZXJcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbnZhciBsYXllciA9IGZ1bmN0aW9uIGxheWVyKGFzc2VtYmxlcikge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkY2xhc3NlczQgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXM0ID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczQ7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICdsYXllcidcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuICAgIHZhciBjaGlsZHJlbiA9IFtdO1xuICAgIGFzc2VtYmxlcihmdW5jdGlvbiAoYXJncykge1xuICAgICAgQXJyYXkuaXNBcnJheShhcmdzKSA/IGFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGEuYWJzdHJhY3QpO1xuICAgICAgfSkgOiBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChhcmdzLmFic3RyYWN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3tcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogW1wiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLWxheWVyc1wiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSkuam9pbignICcpXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgfV07XG4gIH0pO1xufTtcbnZhciBhcGkgPSB7XG4gIG5vQXV0bzogbm9BdXRvLFxuICBjb25maWc6IGNvbmZpZyxcbiAgZG9tOiBkb20sXG4gIGxpYnJhcnk6IGxpYnJhcnksXG4gIHBhcnNlOiBwYXJzZSxcbiAgZmluZEljb25EZWZpbml0aW9uOiBmaW5kSWNvbkRlZmluaXRpb24sXG4gIGljb246IGljb24sXG4gIHRleHQ6IHRleHQsXG4gIGNvdW50ZXI6IGNvdW50ZXIsXG4gIGxheWVyOiBsYXllcixcbiAgdG9IdG1sOiB0b0h0bWxcbn07XG5cbnZhciBhdXRvUmVwbGFjZSA9IGZ1bmN0aW9uIGF1dG9SZXBsYWNlKCkge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9IHBhcmFtcy5hdXRvUmVwbGFjZVN2Z1Jvb3QsXG4gICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRhdXRvUmVwbGFjZVN2O1xuICBpZiAoKE9iamVjdC5rZXlzKG5hbWVzcGFjZS5zdHlsZXMpLmxlbmd0aCA+IDAgfHwgY29uZmlnLmF1dG9GZXRjaFN2ZykgJiYgSVNfRE9NICYmIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZykgYXBpLmRvbS5pMnN2Zyh7XG4gICAgbm9kZTogYXV0b1JlcGxhY2VTdmdSb290XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgaWNvbiwgbm9BdXRvLCBjb25maWcsIHRvSHRtbCwgbGF5ZXIsIHRleHQsIGNvdW50ZXIsIGxpYnJhcnksIGRvbSwgcGFyc2UsIGZpbmRJY29uRGVmaW5pdGlvbiB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwcmVmaXggPSAnZmFzJztcbnZhciBpY29uTmFtZSA9ICdjb21tZW50LWFsdCc7XG52YXIgd2lkdGggPSA1MTI7XG52YXIgaGVpZ2h0ID0gNTEyO1xudmFyIGxpZ2F0dXJlcyA9IFtdO1xudmFyIHVuaWNvZGUgPSAnZjI3YSc7XG52YXIgc3ZnUGF0aERhdGEgPSAnTTQ0OCAwSDY0QzI4LjcgMCAwIDI4LjcgMCA2NHYyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRoOTZ2ODRjMCA5LjggMTEuMiAxNS41IDE5LjEgOS43TDMwNCA0MTZoMTQ0YzM1LjMgMCA2NC0yOC43IDY0LTY0VjY0YzAtMzUuMy0yOC43LTY0LTY0LTY0eic7XG5cbmV4cG9ydHMuZGVmaW5pdGlvbiA9IHtcbiAgcHJlZml4OiBwcmVmaXgsXG4gIGljb25OYW1lOiBpY29uTmFtZSxcbiAgaWNvbjogW1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsaWdhdHVyZXMsXG4gICAgdW5pY29kZSxcbiAgICBzdmdQYXRoRGF0YVxuICBdfTtcblxuZXhwb3J0cy5mYUNvbW1lbnRBbHQgPSBleHBvcnRzLmRlZmluaXRpb247XG5leHBvcnRzLnByZWZpeCA9IHByZWZpeDtcbmV4cG9ydHMuaWNvbk5hbWUgPSBpY29uTmFtZTtcbmV4cG9ydHMud2lkdGggPSB3aWR0aDtcbmV4cG9ydHMuaGVpZ2h0ID0gaGVpZ2h0O1xuZXhwb3J0cy5saWdhdHVyZXMgPSBsaWdhdHVyZXM7XG5leHBvcnRzLnVuaWNvZGUgPSB1bmljb2RlO1xuZXhwb3J0cy5zdmdQYXRoRGF0YSA9IHN2Z1BhdGhEYXRhOyIsIid1c2Ugc3RyaWN0Jztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcHJlZml4ID0gJ2Zhcyc7XG52YXIgaWNvbk5hbWUgPSAndGltZXMnO1xudmFyIHdpZHRoID0gMzUyO1xudmFyIGhlaWdodCA9IDUxMjtcbnZhciBsaWdhdHVyZXMgPSBbXTtcbnZhciB1bmljb2RlID0gJ2YwMGQnO1xudmFyIHN2Z1BhdGhEYXRhID0gJ00yNDIuNzIgMjU2bDEwMC4wNy0xMDAuMDdjMTIuMjgtMTIuMjggMTIuMjgtMzIuMTkgMC00NC40OGwtMjIuMjQtMjIuMjRjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMMTc2IDE4OS4yOCA3NS45MyA4OS4yMWMtMTIuMjgtMTIuMjgtMzIuMTktMTIuMjgtNDQuNDggMEw5LjIxIDExMS40NWMtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OEwxMDkuMjggMjU2IDkuMjEgMzU2LjA3Yy0xMi4yOCAxMi4yOC0xMi4yOCAzMi4xOSAwIDQ0LjQ4bDIyLjI0IDIyLjI0YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMEwxNzYgMzIyLjcybDEwMC4wNyAxMDAuMDdjMTIuMjggMTIuMjggMzIuMiAxMi4yOCA0NC40OCAwbDIyLjI0LTIyLjI0YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhMMjQyLjcyIDI1NnonO1xuXG5leHBvcnRzLmRlZmluaXRpb24gPSB7XG4gIHByZWZpeDogcHJlZml4LFxuICBpY29uTmFtZTogaWNvbk5hbWUsXG4gIGljb246IFtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbGlnYXR1cmVzLFxuICAgIHVuaWNvZGUsXG4gICAgc3ZnUGF0aERhdGFcbiAgXX07XG5cbmV4cG9ydHMuZmFUaW1lcyA9IGV4cG9ydHMuZGVmaW5pdGlvbjtcbmV4cG9ydHMucHJlZml4ID0gcHJlZml4O1xuZXhwb3J0cy5pY29uTmFtZSA9IGljb25OYW1lO1xuZXhwb3J0cy53aWR0aCA9IHdpZHRoO1xuZXhwb3J0cy5oZWlnaHQgPSBoZWlnaHQ7XG5leHBvcnRzLmxpZ2F0dXJlcyA9IGxpZ2F0dXJlcztcbmV4cG9ydHMudW5pY29kZSA9IHVuaWNvZGU7XG5leHBvcnRzLnN2Z1BhdGhEYXRhID0gc3ZnUGF0aERhdGE7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib3R1aS10aGVtZS1kZWZhdWx0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib3R1aS5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvKlxuICogYm90dWkgMC4zLjdcbiAqIEEgSlMgbGlicmFyeSB0byBidWlsZCB0aGUgVUkgZm9yIHlvdXIgYm90XG4gKiBodHRwczovL2JvdHVpLm9yZ1xuICpcbiAqIENvcHlyaWdodCAyMDE5LCBNb2luIFVkZGluXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4qL1xuXG4hZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHQuQm90VUk9ZSh0KX0pOnQuQm90VUk9ZSh0KX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihlLG4pe2Z1bmN0aW9uIG8odCxlLG4sbyl7cmV0dXJuXCI8YSBjbGFzcz0nYm90dWktbWVzc2FnZS1jb250ZW50LWxpbmsnIHRhcmdldD0nXCIrKG8/XCJibGFua1wiOlwiXCIpK1wiJyBocmVmPSdcIituK1wiJz5cIitlK1wiPC9hPlwifWZ1bmN0aW9uIGkodCl7cmV0dXJuIHQucmVwbGFjZShiLmltYWdlLFwiPGltZyBjbGFzcz0nYm90dWktbWVzc2FnZS1jb250ZW50LWltYWdlJyBzcmM9JyQyJyBhbHQ9JyQxJyAvPlwiKS5yZXBsYWNlKGIuaWNvbixcIjxpIGNsYXNzPSdib3R1aS1pY29uIGJvdHVpLW1lc3NhZ2UtY29udGVudC1pY29uIGZhIGZhLSQxJz48L2k+XCIpLnJlcGxhY2UoYi5saW5rLG8pfWZ1bmN0aW9uIGEodCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO24udHlwZT1cInRleHQvamF2YXNjcmlwdFwiLG4uc3JjPXQsZSYmKG4ub25sb2FkPWUpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobil9ZnVuY3Rpb24gcyh0KXt4LmFjdGlvbi5hZGRNZXNzYWdlJiZtLm1lc3NhZ2UuaHVtYW4oe2RlbGF5OjEwMCxjb250ZW50OnR9KSx4LmFjdGlvbi5zaG93PSF4LmFjdGlvbi5hdXRvSGlkZX1mdW5jdGlvbiBjKHQpe2lmKCF0LmxvYWRpbmcmJiF0LmNvbnRlbnQpdGhyb3cgRXJyb3IoJ0JvdFVJOiBcImNvbnRlbnRcIiBpcyByZXF1aXJlZCBpbiBhIG5vbi1sb2FkaW5nIG1lc3NhZ2Ugb2JqZWN0LicpO3QudHlwZT10LnR5cGV8fFwidGV4dFwiLHQudmlzaWJsZT0hdC5kZWxheSYmIXQubG9hZGluZyx0Lmh1bWFuJiZtLm9wdC5odW1hblBob3RvJiYodC5odW1hblBob3RvPW0ub3B0Lmh1bWFuUGhvdG8pLCF0Lmh1bWFuJiZtLm9wdC5ib3RQaG90byYmKHQuYm90UGhvdG89bS5vcHQuYm90UGhvdG8pLHQuYWZ0ZXJVcGRhdGU9ITE7dmFyIGU9eC5tZXNzYWdlcy5wdXNoKHQpLTE7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sbyl7c2V0VGltZW91dChmdW5jdGlvbigpe3QuZGVsYXkmJih0LnZpc2libGU9ITAsdC5sb2FkaW5nJiYodC5sb2FkaW5nPSExKSksbihlKX0sdC5kZWxheXx8MCl9KX1mdW5jdGlvbiB1KHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD17Y29udGVudDp0fSksdHx8e319ZnVuY3Rpb24gcih0LGUpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfWZ1bmN0aW9uIGwodCl7aWYoIXQuYWN0aW9uJiYhdC5hY3Rpb25CdXR0b24mJiF0LmFjdGlvblRleHQpdGhyb3cgRXJyb3IoJ0JvdFVJOiBcImFjdGlvblwiIHByb3BlcnR5IGlzIHJlcXVpcmVkLicpfWZ1bmN0aW9uIGgodCl7cmV0dXJuIGwodCkscih7dHlwZTpcInRleHRcIixjc3NDbGFzczpcIlwiLGF1dG9IaWRlOiEwLGFkZE1lc3NhZ2U6ITB9LHQpLHguYWN0aW9uLnR5cGU9dC50eXBlLHguYWN0aW9uLmNzc0NsYXNzPXQuY3NzQ2xhc3MseC5hY3Rpb24uYXV0b0hpZGU9dC5hdXRvSGlkZSx4LmFjdGlvbi5hZGRNZXNzYWdlPXQuYWRkTWVzc2FnZSxuZXcgUHJvbWlzZShmdW5jdGlvbihlLG4pe3Y9ZSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eC5hY3Rpb24uc2hvdz0hMH0sdC5kZWxheXx8MCl9KX1pZihuPW58fHt9LCFlKXRocm93IEVycm9yKFwiQm90VUk6IENvbnRhaW5lciBpZCBpcyByZXF1aXJlZCBhcyBmaXJzdCBhcmd1bWVudC5cIik7aWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpKXRocm93IEVycm9yKFwiQm90VUk6IEVsZW1lbnQgd2l0aCBpZCAjXCIrZStcIiBkb2VzIG5vdCBleGlzdC5cIik7aWYoIXQuVnVlJiYhbi52dWUpdGhyb3cgRXJyb3IoXCJCb3RVSTogVnVlIGlzIHJlcXVpcmVkIGJ1dCBub3QgZm91bmQuXCIpO3ZhciBmLGQsdixwPXtkZWJ1ZzohMSxmb250YXdlc29tZTohMCxzZWFyY2hzZWxlY3Q6ITB9LG09e30sYj17aWNvbjovIVxcKChbXlxcKV0rKVxcKS9naW0saW1hZ2U6LyFcXFsoLio/KVxcXVxcKCguKj8pXFwpL2dpbSxsaW5rOi9cXFsoW15cXFtdKylcXF1cXCgoW15cXCldKylcXCkoXFxePykvZ2ltfTt0LlZ1ZT10LlZ1ZXx8bi52dWU7Zm9yKHZhciBnIGluIHApbi5oYXNPd25Qcm9wZXJ0eShnKSYmKHBbZ109bltnXSk7dC5Qcm9taXNlfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZXx8bi5wcm9taXNlfHxhKFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2VzNi1wcm9taXNlLzQuMS4wL2VzNi1wcm9taXNlLm1pbi5qc1wiKTt2YXIgeT17dGVtcGxhdGU6XCI8ZGl2IGNsYXNzPVxcXCJib3R1aSBib3R1aS1jb250YWluZXJcXFwiIHYtYm90dWktY29udGFpbmVyPjxkaXYgY2xhc3M9XFxcImJvdHVpLW1lc3NhZ2VzLWNvbnRhaW5lclxcXCI+PGRpdiB2LWZvcj1cXFwibXNnIGluIG1lc3NhZ2VzXFxcIiBjbGFzcz1cXFwiYm90dWktbWVzc2FnZVxcXCIgOmNsYXNzPVxcXCJtc2cuY3NzQ2xhc3NcXFwiIHYtYm90dWktc2Nyb2xsPjxkaXYgdi1pZj1cXFwibXNnLnZpc2libGVcXFwiPjxkaXYgdi1pZj1cXFwiIW1zZy5odW1hbiAmJiBtc2cuYm90UGhvdG9cXFwiPjxkaXYgdi1pZj1cXFwiIW1zZy5sb2FkaW5nXFxcIiA6Y2xhc3M9XFxcIltcXCdwcm9maWxcXCcsIHtodW1hbjogbXNnLmh1bWFuLCBcXCdhZ2VudFxcJzogIW1zZy5odW1hbn1dXFxcIj4gPGltZyA6c3JjPVxcXCJtc2cuYm90UGhvdG9cXFwiPjwvZGl2PjwvZGl2PjxkaXYgdi1pZj1cXFwibXNnLmh1bWFuICYmIG1zZy5odW1hblBob3RvXFxcIj48ZGl2IHYtaWY9XFxcIiFtc2cubG9hZGluZ1xcXCIgOmNsYXNzPVxcXCJbXFwncHJvZmlsXFwnLCB7aHVtYW46IG1zZy5odW1hbiwgXFwnYWdlbnRcXCc6ICFtc2cuaHVtYW59XVxcXCI+IDxpbWcgOnNyYz1cXFwibXNnLmh1bWFuUGhvdG9cXFwiPjwvZGl2PjwvZGl2PjxkaXYgdi1pZj1cXFwiIW1zZy5odW1hbiAmJiAhbXNnLmJvdFBob3RvXFxcIj48ZGl2IHYtaWY9XFxcIm1zZy5waG90byAmJiAhbXNnLmxvYWRpbmdcXFwiIDpjbGFzcz1cXFwiW1xcJ3Byb2ZpbFxcJywge2h1bWFuOiBtc2cuaHVtYW4sIFxcJ2FnZW50XFwnOiAhbXNnLmh1bWFufV1cXFwiPiA8aW1nIDpjbGFzcz1cXFwiW3todW1hbjogbXNnLmh1bWFuLCBcXCdhZ2VudFxcJzogIW1zZy5odW1hbn1dXFxcIj48L2Rpdj48L2Rpdj48L2Rpdj48dHJhbnNpdGlvbiA6bmFtZT1cXFwibXNnLmh1bWFuPyBcXCdzbGlkZS1mYWRlLWwyclxcJzpcXCdzbGlkZS1mYWRlLXIybFxcJ1xcXCI+PGRpdiB2LWlmPVxcXCJtc2cudmlzaWJsZVxcXCI+PGRpdiA6Y2xhc3M9XFxcIlt7aHVtYW46IG1zZy5odW1hbiwgXFwnYm90dWktbWVzc2FnZS1jb250ZW50XFwnOiB0cnVlfSwgbXNnLnR5cGVdXFxcIj48c3BhbiB2LWlmPVxcXCJtc2cudHlwZSA9PSBcXCd0ZXh0XFwnXFxcIiB2LXRleHQ9XFxcIm1zZy5jb250ZW50XFxcIiB2LWJvdHVpLW1hcmtkb3duPjwvc3Bhbj48c3BhbiB2LWlmPVxcXCJtc2cudHlwZSA9PSBcXCdodG1sXFwnXFxcIiB2LWh0bWw9XFxcIm1zZy5jb250ZW50XFxcIj48L3NwYW4+IDxpZnJhbWUgdi1pZj1cXFwibXNnLnR5cGUgPT0gXFwnZW1iZWRcXCdcXFwiIDpzcmM9XFxcIm1zZy5jb250ZW50XFxcIiBmcmFtZWJvcmRlcj1cXFwiMFxcXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjwvZGl2PjwvZGl2PjwvdHJhbnNpdGlvbj48ZGl2IHYtaWY9XFxcIm1zZy5sb2FkaW5nXFxcIj48ZGl2IHYtaWY9XFxcIiFtc2cuaHVtYW4gJiYgbXNnLmJvdFBob3RvXFxcIj48ZGl2IDpjbGFzcz1cXFwiW1xcJ3Byb2ZpbFxcJywge2h1bWFuOiBtc2cuaHVtYW4sIFxcJ2FnZW50XFwnOiAhbXNnLmh1bWFufV1cXFwiPiA8aW1nIDpzcmM9XFxcIm1zZy5ib3RQaG90b1xcXCI+PC9kaXY+PC9kaXY+PGRpdiB2LWlmPVxcXCJtc2cuaHVtYW4gJiYgbXNnLmh1bWFuUGhvdG9cXFwiPjxkaXYgOmNsYXNzPVxcXCJbXFwncHJvZmlsXFwnLCB7aHVtYW46IG1zZy5odW1hbiwgXFwnYWdlbnRcXCc6ICFtc2cuaHVtYW59XVxcXCI+IDxpbWcgOnNyYz1cXFwibXNnLmh1bWFuUGhvdG9cXFwiPjwvZGl2PjwvZGl2PjxkaXYgdi1pZj1cXFwiIW1zZy5odW1hbiAmJiAhbXNnLmJvdFBob3RvXFxcIj48ZGl2IHYtaWY9XFxcIm1zZy5waG90b1xcXCIgOmNsYXNzPVxcXCJbXFwncHJvZmlsXFwnLCB7aHVtYW46IG1zZy5odW1hbiwgXFwnYWdlbnRcXCc6ICFtc2cuaHVtYW59XVxcXCI+IDxpbWcgOmNsYXNzPVxcXCJbe2h1bWFuOiBtc2cuaHVtYW4sIFxcJ2FnZW50XFwnOiAhbXNnLmh1bWFufV1cXFwiPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgdi1pZj1cXFwibXNnLmxvYWRpbmdcXFwiIGNsYXNzPVxcXCJib3R1aS1tZXNzYWdlLWNvbnRlbnQgbG9hZGluZ1xcXCI+PGkgY2xhc3M9XFxcImRvdFxcXCI+PC9pPjxpIGNsYXNzPVxcXCJkb3RcXFwiPjwvaT48aSBjbGFzcz1cXFwiZG90XFxcIj48L2k+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cXFwiYm90dWktYWN0aW9ucy1jb250YWluZXJcXFwiPjx0cmFuc2l0aW9uIG5hbWU9XFxcInNsaWRlLWZhZGVcXFwiPjxkaXYgdi1pZj1cXFwiYWN0aW9uLnNob3dcXFwiIHYtYm90dWktc2Nyb2xsPjxmb3JtIHYtaWY9XFxcImFjdGlvbi50eXBlID09IFxcJ3RleHRcXCdcXFwiIGNsYXNzPVxcXCJib3R1aS1hY3Rpb25zLXRleHRcXFwiIEBzdWJtaXQucHJldmVudD1cXFwiaGFuZGxlX2FjdGlvbl90ZXh0KClcXFwiIDpjbGFzcz1cXFwiYWN0aW9uLmNzc0NsYXNzXFxcIj48aSB2LWlmPVxcXCJhY3Rpb24udGV4dC5pY29uXFxcIiBjbGFzcz1cXFwiYm90dWktaWNvbiBib3R1aS1hY3Rpb24tdGV4dC1pY29uIGZhXFxcIiA6Y2xhc3M9XFxcIlxcJ2ZhLVxcJyArIGFjdGlvbi50ZXh0Lmljb25cXFwiPjwvaT4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHJlZj1cXFwiaW5wdXRcXFwiIDp0eXBlPVxcXCJhY3Rpb24udGV4dC5zdWJfdHlwZVxcXCIgdi1tb2RlbD1cXFwiYWN0aW9uLnRleHQudmFsdWVcXFwiIGNsYXNzPVxcXCJib3R1aS1hY3Rpb25zLXRleHQtaW5wdXRcXFwiIDpwbGFjZWhvbGRlcj1cXFwiYWN0aW9uLnRleHQucGxhY2Vob2xkZXJcXFwiIDpzaXplPVxcXCJhY3Rpb24udGV4dC5zaXplXFxcIiA6dmFsdWU9XFxcIiBhY3Rpb24udGV4dC52YWx1ZVxcXCIgOmNsYXNzPVxcXCJhY3Rpb24udGV4dC5jc3NDbGFzc1xcXCIgcmVxdWlyZWQgdi1mb2N1cy8+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiA6Y2xhc3M9XFxcIntcXCdib3R1aS1hY3Rpb25zLWJ1dHRvbnMtYnV0dG9uXFwnOiAhIWFjdGlvbi50ZXh0LmJ1dHRvbiwgXFwnYm90dWktYWN0aW9ucy10ZXh0LXN1Ym1pdFxcJzogIWFjdGlvbi50ZXh0LmJ1dHRvbn1cXFwiPjxpIHYtaWY9XFxcImFjdGlvbi50ZXh0LmJ1dHRvbiAmJiBhY3Rpb24udGV4dC5idXR0b24uaWNvblxcXCIgY2xhc3M9XFxcImJvdHVpLWljb24gYm90dWktYWN0aW9uLWJ1dHRvbi1pY29uIGZhXFxcIiA6Y2xhc3M9XFxcIlxcJ2ZhLVxcJyArIGFjdGlvbi50ZXh0LmJ1dHRvbi5pY29uXFxcIj48L2k+IDxzcGFuPnt7KGFjdGlvbi50ZXh0LmJ1dHRvbiAmJiBhY3Rpb24udGV4dC5idXR0b24ubGFiZWwpIHx8IFxcJ0dvXFwnfX08L3NwYW4+PC9idXR0b24+PC9mb3JtPjxmb3JtIHYtaWY9XFxcImFjdGlvbi50eXBlID09IFxcJ3NlbGVjdFxcJ1xcXCIgY2xhc3M9XFxcImJvdHVpLWFjdGlvbnMtc2VsZWN0XFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImhhbmRsZV9hY3Rpb25fc2VsZWN0KClcXFwiIDpjbGFzcz1cXFwiYWN0aW9uLmNzc0NsYXNzXFxcIj48aSB2LWlmPVxcXCJhY3Rpb24uc2VsZWN0Lmljb25cXFwiIGNsYXNzPVxcXCJib3R1aS1pY29uIGJvdHVpLWFjdGlvbi1zZWxlY3QtaWNvbiBmYVxcXCIgOmNsYXNzPVxcXCJcXCdmYS1cXCcgKyBhY3Rpb24uc2VsZWN0Lmljb25cXFwiPjwvaT48di1zZWxlY3Qgdi1pZj1cXFwiYWN0aW9uLnNlbGVjdC5zZWFyY2hzZWxlY3QgJiYgIWFjdGlvbi5zZWxlY3QubXVsdGlwbGVzZWxlY3RcXFwiIHYtbW9kZWw9XFxcImFjdGlvbi5zZWxlY3QudmFsdWVcXFwiIDp2YWx1ZT1cXFwiYWN0aW9uLnNlbGVjdC52YWx1ZVxcXCIgOnBsYWNlaG9sZGVyPVxcXCJhY3Rpb24uc2VsZWN0LnBsYWNlaG9sZGVyXFxcIiBjbGFzcz1cXFwiYm90dWktYWN0aW9ucy10ZXh0LXNlYXJjaHNlbGVjdFxcXCIgOmxhYmVsPVxcXCJhY3Rpb24uc2VsZWN0LmxhYmVsXFxcIiA6b3B0aW9ucz1cXFwiYWN0aW9uLnNlbGVjdC5vcHRpb25zXFxcIj48L3Ytc2VsZWN0Pjx2LXNlbGVjdCB2LWVsc2UtaWY9XFxcImFjdGlvbi5zZWxlY3Quc2VhcmNoc2VsZWN0ICYmIGFjdGlvbi5zZWxlY3QubXVsdGlwbGVzZWxlY3RcXFwiIG11bHRpcGxlIHYtbW9kZWw9XFxcImFjdGlvbi5zZWxlY3QudmFsdWVcXFwiIDp2YWx1ZT1cXFwiYWN0aW9uLnNlbGVjdC52YWx1ZVxcXCIgOnBsYWNlaG9sZGVyPVxcXCJhY3Rpb24uc2VsZWN0LnBsYWNlaG9sZGVyXFxcIiBjbGFzcz1cXFwiYm90dWktYWN0aW9ucy10ZXh0LXNlYXJjaHNlbGVjdFxcXCIgOmxhYmVsPVxcXCJhY3Rpb24uc2VsZWN0LmxhYmVsXFxcIiA6b3B0aW9ucz1cXFwiYWN0aW9uLnNlbGVjdC5vcHRpb25zXFxcIj48L3Ytc2VsZWN0PiA8c2VsZWN0IHYtZWxzZSB2LW1vZGVsPVxcXCJhY3Rpb24uc2VsZWN0LnZhbHVlXFxcIiBjbGFzcz1cXFwiYm90dWktYWN0aW9ucy10ZXh0LXNlbGVjdFxcXCIgOnBsYWNlaG9sZGVyPVxcXCJhY3Rpb24uc2VsZWN0LnBsYWNlaG9sZGVyXFxcIiA6c2l6ZT1cXFwiYWN0aW9uLnNlbGVjdC5zaXplXFxcIiA6Y2xhc3M9XFxcImFjdGlvbi5zZWxlY3QuY3NzQ2xhc3NcXFwiIHJlcXVpcmVkIHYtZm9jdXM+PG9wdGlvbiB2LWZvcj1cXFwib3B0aW9uIGluIGFjdGlvbi5zZWxlY3Qub3B0aW9uc1xcXCIgOmNsYXNzPVxcXCJhY3Rpb24uc2VsZWN0Lm9wdGlvbkNsYXNzXFxcIiB2LWJpbmQ6dmFsdWU9XFxcIm9wdGlvbi52YWx1ZVxcXCIgOmRpc2FibGVkPVxcXCIob3B0aW9uLnZhbHVlID09IFxcJ1xcJyk/dHJ1ZTpmYWxzZVxcXCIgOnNlbGVjdGVkPVxcXCIoYWN0aW9uLnNlbGVjdC52YWx1ZSA9PSBvcHRpb24udmFsdWUpP1xcJ3NlbGVjdGVkXFwnOlxcJ1xcJ1xcXCI+IHt7IG9wdGlvbi50ZXh0IH19PC9vcHRpb24+PC9zZWxlY3Q+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiA6Y2xhc3M9XFxcIntcXCdib3R1aS1hY3Rpb25zLWJ1dHRvbnMtYnV0dG9uXFwnOiAhIWFjdGlvbi5zZWxlY3QuYnV0dG9uLCBcXCdib3R1aS1hY3Rpb25zLXNlbGVjdC1zdWJtaXRcXCc6ICFhY3Rpb24uc2VsZWN0LmJ1dHRvbn1cXFwiPjxpIHYtaWY9XFxcImFjdGlvbi5zZWxlY3QuYnV0dG9uICYmIGFjdGlvbi5zZWxlY3QuYnV0dG9uLmljb25cXFwiIGNsYXNzPVxcXCJib3R1aS1pY29uIGJvdHVpLWFjdGlvbi1idXR0b24taWNvbiBmYVxcXCIgOmNsYXNzPVxcXCJcXCdmYS1cXCcgKyBhY3Rpb24uc2VsZWN0LmJ1dHRvbi5pY29uXFxcIj48L2k+IDxzcGFuPnt7KGFjdGlvbi5zZWxlY3QuYnV0dG9uICYmIGFjdGlvbi5zZWxlY3QuYnV0dG9uLmxhYmVsKSB8fCBcXCdPa1xcJ319PC9zcGFuPjwvYnV0dG9uPjwvZm9ybT48ZGl2IHYtaWY9XFxcImFjdGlvbi50eXBlID09IFxcJ2J1dHRvblxcJ1xcXCIgY2xhc3M9XFxcImJvdHVpLWFjdGlvbnMtYnV0dG9uc1xcXCIgOmNsYXNzPVxcXCJhY3Rpb24uY3NzQ2xhc3NcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgOmNsYXNzPVxcXCJidXR0b24uY3NzQ2xhc3NcXFwiIGNsYXNzPVxcXCJib3R1aS1hY3Rpb25zLWJ1dHRvbnMtYnV0dG9uXFxcIiB2LWZvcj1cXFwiYnV0dG9uIGluIGFjdGlvbi5idXR0b24uYnV0dG9uc1xcXCIgQGNsaWNrPVxcXCJoYW5kbGVfYWN0aW9uX2J1dHRvbihidXR0b24pXFxcIj48aSB2LWlmPVxcXCJidXR0b24uaWNvblxcXCIgY2xhc3M9XFxcImJvdHVpLWljb24gYm90dWktYWN0aW9uLWJ1dHRvbi1pY29uIGZhXFxcIiA6Y2xhc3M9XFxcIlxcJ2ZhLVxcJyArIGJ1dHRvbi5pY29uXFxcIj48L2k+IHt7YnV0dG9uLnRleHR9fTwvYnV0dG9uPjwvZGl2Pjxmb3JtIHYtaWY9XFxcImFjdGlvbi50eXBlID09IFxcJ2J1dHRvbnRleHRcXCdcXFwiIGNsYXNzPVxcXCJib3R1aS1hY3Rpb25zLXRleHRcXFwiIEBzdWJtaXQucHJldmVudD1cXFwiaGFuZGxlX2FjdGlvbl90ZXh0KClcXFwiIDpjbGFzcz1cXFwiYWN0aW9uLmNzc0NsYXNzXFxcIj48aSB2LWlmPVxcXCJhY3Rpb24udGV4dC5pY29uXFxcIiBjbGFzcz1cXFwiYm90dWktaWNvbiBib3R1aS1hY3Rpb24tdGV4dC1pY29uIGZhXFxcIiA6Y2xhc3M9XFxcIlxcJ2ZhLVxcJyArIGFjdGlvbi50ZXh0Lmljb25cXFwiPjwvaT4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHJlZj1cXFwiaW5wdXRcXFwiIDp0eXBlPVxcXCJhY3Rpb24udGV4dC5zdWJfdHlwZVxcXCIgdi1tb2RlbD1cXFwiYWN0aW9uLnRleHQudmFsdWVcXFwiIGNsYXNzPVxcXCJib3R1aS1hY3Rpb25zLXRleHQtaW5wdXRcXFwiIDpwbGFjZWhvbGRlcj1cXFwiYWN0aW9uLnRleHQucGxhY2Vob2xkZXJcXFwiIDpzaXplPVxcXCJhY3Rpb24udGV4dC5zaXplXFxcIiA6dmFsdWU9XFxcImFjdGlvbi50ZXh0LnZhbHVlXFxcIiA6Y2xhc3M9XFxcImFjdGlvbi50ZXh0LmNzc0NsYXNzXFxcIiByZXF1aXJlZCB2LWZvY3VzLz4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIDpjbGFzcz1cXFwie1xcJ2JvdHVpLWFjdGlvbnMtYnV0dG9ucy1idXR0b25cXCc6ICEhYWN0aW9uLnRleHQuYnV0dG9uLCBcXCdib3R1aS1hY3Rpb25zLXRleHQtc3VibWl0XFwnOiAhYWN0aW9uLnRleHQuYnV0dG9ufVxcXCI+PGkgdi1pZj1cXFwiYWN0aW9uLnRleHQuYnV0dG9uICYmIGFjdGlvbi50ZXh0LmJ1dHRvbi5pY29uXFxcIiBjbGFzcz1cXFwiYm90dWktaWNvbiBib3R1aS1hY3Rpb24tYnV0dG9uLWljb24gZmFcXFwiIDpjbGFzcz1cXFwiXFwnZmEtcGFwZXItcGxhbmVcXCcgKyAgYWN0aW9uLnRleHQuYnV0dG9uLmljb25cXFwiPjwvaT4gPHNwYW4+e3soYWN0aW9uLnRleHQuYnV0dG9uICYmIGFjdGlvbi50ZXh0LmJ1dHRvbi5sYWJlbCkgfHwgXFwnR29cXCd9fTwvc3Bhbj48L2J1dHRvbj48ZGl2IGNsYXNzPVxcXCJib3R1aS1hY3Rpb25zLWJ1dHRvbnNcXFwiIDpjbGFzcz1cXFwiYWN0aW9uLmNzc0NsYXNzXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIDpjbGFzcz1cXFwiYnV0dG9uLmNzc0NsYXNzXFxcIiBjbGFzcz1cXFwiYm90dWktYWN0aW9ucy1idXR0b25zLWJ1dHRvblxcXCIgdi1mb3I9XFxcImJ1dHRvbiBpbiBhY3Rpb24uYnV0dG9uLmJ1dHRvbnNcXFwiIEBjbGljaz1cXFwiaGFuZGxlX2FjdGlvbl9idXR0b24oYnV0dG9uKVxcXCIgYXV0b2ZvY3VzPjxpIHYtaWY9XFxcImJ1dHRvbi5pY29uXFxcIiBjbGFzcz1cXFwiYm90dWktaWNvbiBib3R1aS1hY3Rpb24tYnV0dG9uLWljb24gZmFcXFwiIDpjbGFzcz1cXFwiXFwnZmEtXFwnICsgYnV0dG9uLmljb25cXFwiPjwvaT4ge3tidXR0b24udGV4dH19PC9idXR0b24+PC9kaXY+PC9mb3JtPjwvZGl2PjwvdHJhbnNpdGlvbj48L2Rpdj48L2Rpdj5cIixkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2FjdGlvbjp7dGV4dDp7c2l6ZTozMCxwbGFjZWhvbGRlcjpcIldyaXRlIGhlcmUgLi5cIn0sYnV0dG9uOnt9LHNob3c6ITEsdHlwZTpcInRleHRcIixhdXRvSGlkZTohMCxhZGRNZXNzYWdlOiEwfSxtZXNzYWdlczpbXX19LGNvbXB1dGVkOntpc01vYmlsZTpmdW5jdGlvbigpe3JldHVybiB0LmlubmVyV2lkdGgmJnQuaW5uZXJXaWR0aDw9NzY4fX0sbWV0aG9kczp7aGFuZGxlX2FjdGlvbl9idXR0b246ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLmFjdGlvbi5idXR0b24uYnV0dG9ucy5sZW5ndGg7ZSsrKWlmKHRoaXMuYWN0aW9uLmJ1dHRvbi5idXR0b25zW2VdLnZhbHVlPT10LnZhbHVlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmFjdGlvbi5idXR0b24uYnV0dG9uc1tlXS5ldmVudCl7aWYodGhpcy5hY3Rpb24uYnV0dG9uLmJ1dHRvbnNbZV0uZXZlbnQodCksdGhpcy5hY3Rpb24uYnV0dG9uLmJ1dHRvbnNbZV0uYWN0aW9uU3RvcClyZXR1cm4hMTticmVha31zKHQudGV4dCk7dmFyIG49e3R5cGU6XCJidXR0b25cIix0ZXh0OnQudGV4dCx2YWx1ZTp0LnZhbHVlfTtmb3IodmFyIG8gaW4gdCl0Lmhhc093blByb3BlcnR5KG8pJiZcInR5cGVcIiE9PW8mJlwidGV4dFwiIT09byYmXCJ2YWx1ZVwiIT09byYmKG5bb109dFtvXSk7dihuKX0saGFuZGxlX2FjdGlvbl90ZXh0OmZ1bmN0aW9uKCl7dGhpcy5hY3Rpb24udGV4dC52YWx1ZSYmKHModGhpcy5hY3Rpb24udGV4dC52YWx1ZSksdih7dHlwZTpcInRleHRcIix2YWx1ZTp0aGlzLmFjdGlvbi50ZXh0LnZhbHVlfSksdGhpcy5hY3Rpb24udGV4dC52YWx1ZT1cIlwiKX0saGFuZGxlX2FjdGlvbl9zZWxlY3Q6ZnVuY3Rpb24oKXtpZih0aGlzLmFjdGlvbi5zZWxlY3Quc2VhcmNoc2VsZWN0JiYhdGhpcy5hY3Rpb24uc2VsZWN0Lm11bHRpcGxlc2VsZWN0KXtpZighdGhpcy5hY3Rpb24uc2VsZWN0LnZhbHVlLnZhbHVlKXJldHVybjtzKHRoaXMuYWN0aW9uLnNlbGVjdC52YWx1ZVt0aGlzLmFjdGlvbi5zZWxlY3QubGFiZWxdKSx2KHt0eXBlOlwidGV4dFwiLHZhbHVlOnRoaXMuYWN0aW9uLnNlbGVjdC52YWx1ZS52YWx1ZSx0ZXh0OnRoaXMuYWN0aW9uLnNlbGVjdC52YWx1ZS50ZXh0LG9iajp0aGlzLmFjdGlvbi5zZWxlY3QudmFsdWV9KX1pZih0aGlzLmFjdGlvbi5zZWxlY3Quc2VhcmNoc2VsZWN0JiZ0aGlzLmFjdGlvbi5zZWxlY3QubXVsdGlwbGVzZWxlY3Qpe2lmKCF0aGlzLmFjdGlvbi5zZWxlY3QudmFsdWUpcmV0dXJuO2Zvcih2YXIgdD1uZXcgQXJyYXksZT1uZXcgQXJyYXksbj0wO248dGhpcy5hY3Rpb24uc2VsZWN0LnZhbHVlLmxlbmd0aDtuKyspdC5wdXNoKHRoaXMuYWN0aW9uLnNlbGVjdC52YWx1ZVtuXS52YWx1ZSksZS5wdXNoKHRoaXMuYWN0aW9uLnNlbGVjdC52YWx1ZVtuXVt0aGlzLmFjdGlvbi5zZWxlY3QubGFiZWxdKTtzKGUuam9pbihcIiwgXCIpKSx2KHt0eXBlOlwidGV4dFwiLHZhbHVlOnQuam9pbihcIiwgXCIpLHRleHQ6ZS5qb2luKFwiLCBcIiksb2JqOnRoaXMuYWN0aW9uLnNlbGVjdC52YWx1ZX0pfWVsc2V7aWYoIXRoaXMuYWN0aW9uLnNlbGVjdC52YWx1ZSlyZXR1cm47Zm9yKHZhciBuPTA7bjx0aGlzLmFjdGlvbi5zZWxlY3Qub3B0aW9ucy5sZW5ndGg7bisrKXRoaXMuYWN0aW9uLnNlbGVjdC5vcHRpb25zW25dLnZhbHVlPT10aGlzLmFjdGlvbi5zZWxlY3QudmFsdWUmJihzKHRoaXMuYWN0aW9uLnNlbGVjdC5vcHRpb25zW25dLnRleHQpLHYoe3R5cGU6XCJ0ZXh0XCIsdmFsdWU6dGhpcy5hY3Rpb24uc2VsZWN0LnZhbHVlLHRleHQ6dGhpcy5hY3Rpb24uc2VsZWN0Lm9wdGlvbnNbbl0udGV4dH0pKX19fX07dC5WdWUuZGlyZWN0aXZlKFwiYm90dWktbWFya2Rvd25cIixmdW5jdGlvbih0LGUpe1wiZmFsc2VcIiE9ZS52YWx1ZSYmKHQuaW5uZXJIVE1MPWkodC50ZXh0Q29udGVudCkpfSksdC5WdWUuZGlyZWN0aXZlKFwiYm90dWktc2Nyb2xsXCIse2luc2VydGVkOmZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dWktY29udGFpbmVyXCIpO2Uuc2Nyb2xsVG9wPWUuc2Nyb2xsSGVpZ2h0fX0pLHQuVnVlLmRpcmVjdGl2ZShcImZvY3VzXCIse2luc2VydGVkOmZ1bmN0aW9uKHQpe3QuZm9jdXMoKX19KSx0LlZ1ZS5kaXJlY3RpdmUoXCJib3R1aS1jb250YWluZXJcIix7aW5zZXJ0ZWQ6ZnVuY3Rpb24odCl7ZD10fX0pLGY9bmV3IHQuVnVlKHtjb21wb25lbnRzOntcImJvdC11aVwiOnl9fSkuJG1vdW50KFwiI1wiK2UpO3ZhciB4PWYuJGNoaWxkcmVuWzBdO3JldHVybiBtLm1lc3NhZ2U9e2FkZDpmdW5jdGlvbih0KXtyZXR1cm4gYyh1KHQpKX0sYm90OmZ1bmN0aW9uKHQpe3JldHVybiB0PXUodCksYyh0KX0saHVtYW46ZnVuY3Rpb24odCl7cmV0dXJuIHQ9dSh0KSx0Lmh1bWFuPSEwLGModCl9LGdldDpmdW5jdGlvbih0KXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHgubWVzc2FnZXNbdF0pfSxyZW1vdmU6ZnVuY3Rpb24odCl7cmV0dXJuIHgubWVzc2FnZXMuc3BsaWNlKHQsMSksUHJvbWlzZS5yZXNvbHZlKCl9LHVwZGF0ZTpmdW5jdGlvbih0LGUpe3ZhciBuPXgubWVzc2FnZXNbdF07cmV0dXJuIG4uY29udGVudD1lLmNvbnRlbnQsbi52aXNpYmxlPSFlLmxvYWRpbmcsbi5sb2FkaW5nPSEhZS5sb2FkaW5nLG4uYWZ0ZXJVcGRhdGU9ITAsUHJvbWlzZS5yZXNvbHZlKGUuY29udGVudCl9LHJlbW92ZUFsbDpmdW5jdGlvbigpe3JldHVybiB4Lm1lc3NhZ2VzLnNwbGljZSgwLHgubWVzc2FnZXMubGVuZ3RoKSxQcm9taXNlLnJlc29sdmUoKX19LG0ub3B0PXtodW1hblBob3RvOm51bGwsYm90UGhvdG86bnVsbCxzZXRIdW1hblBob3RvOmZ1bmN0aW9uKHQpe3RoaXMuaHVtYW5QaG90bz10fSxzZXRCb3RQaG90bzpmdW5jdGlvbih0KXt0aGlzLmJvdFBob3RvPXR9fSxtLmFjdGlvbj17c2hvdzpoLGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4geC5hY3Rpb24uc2hvdz0hMSxQcm9taXNlLnJlc29sdmUoKX0sdGV4dDpmdW5jdGlvbih0KXtyZXR1cm4gbCh0KSx4LmFjdGlvbi50ZXh0PXQuYWN0aW9uLGgodCl9LGJ1dHRvbjpmdW5jdGlvbih0KXtyZXR1cm4gbCh0KSx0LnR5cGU9XCJidXR0b25cIix4LmFjdGlvbi5idXR0b24uYnV0dG9ucz10LmFjdGlvbixoKHQpfSxzZWxlY3Q6ZnVuY3Rpb24odCl7aWYobCh0KSx0LnR5cGU9XCJzZWxlY3RcIix0LmFjdGlvbi5sYWJlbD10LmFjdGlvbi5sYWJlbHx8XCJ0ZXh0XCIsdC5hY3Rpb24udmFsdWU9dC5hY3Rpb24udmFsdWV8fFwiXCIsdC5hY3Rpb24uc2VhcmNoc2VsZWN0PXZvaWQgMCE9PXQuYWN0aW9uLnNlYXJjaHNlbGVjdD90LmFjdGlvbi5zZWFyY2hzZWxlY3Q6cC5zZWFyY2hzZWxlY3QsdC5hY3Rpb24ubXVsdGlwbGVzZWxlY3Q9dC5hY3Rpb24ubXVsdGlwbGVzZWxlY3R8fCExLHQuYWN0aW9uLnNlYXJjaHNlbGVjdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuYWN0aW9uLnZhbHVlKWlmKHQuYWN0aW9uLm11bHRpcGxlc2VsZWN0KXt2YXIgZT10LmFjdGlvbi52YWx1ZS5zcGxpdChcIixcIik7dC5hY3Rpb24udmFsdWU9bmV3IEFycmF5O2Zvcih2YXIgbj0wO248dC5hY3Rpb24ub3B0aW9ucy5sZW5ndGg7bisrKWZvcih2YXIgbz0wO288ZS5sZW5ndGg7bysrKXQuYWN0aW9uLm9wdGlvbnNbbl0udmFsdWU9PWVbb10mJnQuYWN0aW9uLnZhbHVlLnB1c2godC5hY3Rpb24ub3B0aW9uc1tuXSl9ZWxzZSBmb3IodmFyIG49MDtuPHQuYWN0aW9uLm9wdGlvbnMubGVuZ3RoO24rKyl0LmFjdGlvbi5vcHRpb25zW25dLnZhbHVlPT10LmFjdGlvbi52YWx1ZSYmKHQuYWN0aW9uLnZhbHVlPXQuYWN0aW9uLm9wdGlvbnNbbl0pO3JldHVybiB0LmFjdGlvbi5zZWFyY2hzZWxlY3R8fHQuYWN0aW9uLm9wdGlvbnMudW5zaGlmdCh7dmFsdWU6XCJcIix0ZXh0OnQuYWN0aW9uLnBsYWNlaG9sZGVyfSkseC5hY3Rpb24uYnV0dG9uPXQuYWN0aW9uLmJ1dHRvbix4LmFjdGlvbi5zZWxlY3Q9dC5hY3Rpb24saCh0KX0sYnV0dG9udGV4dDpmdW5jdGlvbih0KXtyZXR1cm4gbCh0KSx0LnR5cGU9XCJidXR0b250ZXh0XCIseC5hY3Rpb24uYnV0dG9uLmJ1dHRvbnM9dC5hY3Rpb25CdXR0b24seC5hY3Rpb24udGV4dD10LmFjdGlvblRleHQsaCh0KX19LHAuZm9udGF3ZXNvbWUmJmEoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vZWE3MzFkY2I2Zi5qc1wiKSxwLnNlYXJjaHNlbGVjdCYmYShcImh0dHBzOi8vdW5wa2cuY29tL3Z1ZS1zZWxlY3RAMi40LjAvZGlzdC92dWUtc2VsZWN0LmpzXCIsZnVuY3Rpb24oKXtWdWUuY29tcG9uZW50KFwidi1zZWxlY3RcIixWdWVTZWxlY3QuVnVlU2VsZWN0KX0pLHAuZGVidWcmJihtLl9ib3RBcHA9ZiksbX19KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgRGVmYXVsdCB0aGVtZSBmb3IgQm90VUlcXG4qL1xcbi5ib3R1aS1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi5ib3R1aS1tZXNzYWdlcy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMTBweCAyMHB4OyB9XFxuXFxuLmJvdHVpLWFjdGlvbnMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDsgfVxcblxcbi5ib3R1aS1tZXNzYWdlIHtcXG4gIG1pbi1oZWlnaHQ6IDMwcHg7IH1cXG5cXG4uYm90dWktbWVzc2FnZS1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDdweCAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGNvbG9yOiAjNTk1YTVhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjsgfVxcbiAgLmJvdHVpLW1lc3NhZ2UtY29udGVudC5odW1hbiB7XFxuICAgIGNvbG9yOiAjZjdmOGY4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MjkyOyB9XFxuICAuYm90dWktbWVzc2FnZS1jb250ZW50LnRleHQge1xcbiAgICBsaW5lLWhlaWdodDogMS4zOyB9XFxuICAuYm90dWktbWVzc2FnZS1jb250ZW50LmxvYWRpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuNSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmJvdHVpLW1lc3NhZ2UtY29udGVudC5lbWJlZCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmJvdHVpLW1lc3NhZ2UtY29udGVudC1saW5rIHtcXG4gIGNvbG9yOiAjOTE5MjkyOyB9XFxuXFxuLmJvdHVpLWFjdGlvbnMtdGV4dC1pbnB1dCB7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNTk1YTVhO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MTkyOTI7IH1cXG5cXG4uYm90dWktYWN0aW9ucy10ZXh0LXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTE5MjkyO1xcbiAgYmFja2dyb3VuZDogIzc3Nzk3OTsgfVxcblxcbi5ib3R1aS1hY3Rpb25zLWJ1dHRvbnMtYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZzogN3B4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiAjNzc3OTc5O1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XFxuXFxuLmJvdHVpLWFjdGlvbnMtdGV4dC1zZWxlY3Qge1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjNTk1YTVhO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MTkyOTI7IH1cXG5cXG4uYm90dWktYWN0aW9ucy10ZXh0LXNlYXJjaHNlbGVjdCB7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDVweCA3cHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM1OTVhNWE7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkxOTI5MjsgfVxcblxcbi5ib3R1aS1hY3Rpb25zLXRleHQtc2VhcmNoc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uYm90dWktYWN0aW9ucy10ZXh0LXNlYXJjaHNlbGVjdCAuc2VsZWN0ZWQtdGFnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDAgIWltcG9ydGFudDsgfVxcblxcbi8qXFxuICBBbmltYXRpb24gb2YgbWVzc2FnZXNcXG4gIEZvciBkZXRhaWxzIG9uIGhvdyB0byBjaGFuZ2UsIHNlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvdHJhbnNpdGlvbnMuaHRtbFxcbiovXFxuLnNsaWRlLWZhZGUtZW50ZXItYWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTsgfVxcblxcbi5zbGlkZS1mYWRlLWVudGVyLFxcbi5zbGlkZS1mYWRlLWxlYXZlLXRvIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpOyB9XFxuXFxuLypcXG4gIEFuaW1hdGlvbiBvZiBsb2FkaW5nIGRvdHNcXG4qL1xcbi5kb3Qge1xcbiAgd2lkdGg6IC41cmVtO1xcbiAgaGVpZ2h0OiAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxOTI5MjsgfVxcbiAgLmRvdDpudGgtbGFzdC1jaGlsZCgxKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAuM3JlbTtcXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIC42cyAuM3MgbGluZWFyIGluZmluaXRlOyB9XFxuICAuZG90Om50aC1sYXN0LWNoaWxkKDIpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC4zcmVtO1xcbiAgICBhbmltYXRpb246IGxvYWRpbmcgLjZzIC4ycyBsaW5lYXIgaW5maW5pdGU7IH1cXG4gIC5kb3Q6bnRoLWxhc3QtY2hpbGQoMykge1xcbiAgICBhbmltYXRpb246IGxvYWRpbmcgLjZzIC4xcyBsaW5lYXIgaW5maW5pdGU7IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjsgfVxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTNweCk7IH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7IH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDNweCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpOyB9IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4gKiBib3R1aSAwLjMuN1xcbiAqIEEgSlMgbGlicmFyeSB0byBidWlsZCB0aGUgVUkgZm9yIHlvdXIgYm90XFxuICogaHR0cHM6Ly9ib3R1aS5vcmdcXG4gKlxcbiAqIENvcHlyaWdodCAyMDE5LCBNb2luIFVkZGluXFxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxcbiovXFxuXFxuYS5ib3R1aS1tZXNzYWdlLWNvbnRlbnQtbGluazpmb2N1c3tvdXRsaW5lOnRoaW4gZG90dGVkfWEuYm90dWktbWVzc2FnZS1jb250ZW50LWxpbms6Zm9jdXM6YWN0aXZlLGEuYm90dWktbWVzc2FnZS1jb250ZW50LWxpbms6Zm9jdXM6aG92ZXJ7b3V0bGluZTowfWZvcm0uYm90dWktYWN0aW9ucy10ZXh0e21hcmdpbjowfWJ1dHRvbi5ib3R1aS1hY3Rpb25zLWJ1dHRvbnMtYnV0dG9uLGlucHV0LmJvdHVpLWFjdGlvbnMtdGV4dC1pbnB1dHttYXJnaW46MDtmb250LXNpemU6MTAwJTtsaW5lLWhlaWdodDpub3JtYWw7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9YnV0dG9uLmJvdHVpLWFjdGlvbnMtYnV0dG9ucy1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQuYm90dWktYWN0aW9ucy10ZXh0LWlucHV0OjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowO3BhZGRpbmc6MH1idXR0b24uYm90dWktYWN0aW9ucy1idXR0b25zLWJ1dHRvbntjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVxcbi5ib3R1aS1hcHAtY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjAgYXV0b30uYm90dWktY29udGFpbmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVufS5ib3R1aS1tZXNzYWdle21hcmdpbjoxMHB4IDA7bWluLWhlaWdodDoyMHB4fS5ib3R1aS1tZXNzYWdlOmFmdGVye2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiXFxcIjtjbGVhcjpib3RofS5ib3R1aS1tZXNzYWdlLWNvbnRlbnR7d2lkdGg6YXV0bzttYXgtd2lkdGg6NzUlO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5ib3R1aS1tZXNzYWdlLWNvbnRlbnQuaHVtYW57ZmxvYXQ6cmlnaHR9LmJvdHVpLW1lc3NhZ2UtY29udGVudCBpZnJhbWV7d2lkdGg6MTAwJX0uYm90dWktbWVzc2FnZS1jb250ZW50LWltYWdle21hcmdpbjo1cHggMDtkaXNwbGF5OmJsb2NrO21heC13aWR0aDoyMDBweDttYXgtaGVpZ2h0OjIwMHB4fS5ib3R1aS1tZXNzYWdlLWNvbnRlbnQtbGlua3t0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wcm9maWx7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czo1MCV9LnByb2ZpbC5odW1hbntmbG9hdDpyaWdodDttYXJnaW4tbGVmdDo1cHh9LnByb2ZpbC5hZ2VudHtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDo1cHh9LnByb2ZpbD5pbWd7Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6MjZweDtoZWlnaHQ6MjZweDtib3JkZXI6MH0ucHJvZmlsPmltZy5hZ2VudHtjb250ZW50OnVybChodHRwOi8vZGVjb2RlbW9qaS5jb20vaW1nL2xvZ29zL2JsdWVfbW9qaV9oYXQuc3ZnKX1idXR0b24uYm90dWktYWN0aW9ucy1idXR0b25zLWJ1dHRvbnttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4fWJ1dHRvbi5ib3R1aS1hY3Rpb25zLWJ1dHRvbnMtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0OjEwcHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2hhdHV4LXNwIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNoYXR1eC1idG4tY2hhdC1wYyB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cXG4uY2hhdHV4LWJ0bi1jaGF0IHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAuNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhciwgb3BhY2l0eSAwLjNzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaGF0dXgtYnRuLWNoYXQ6aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2MmNjO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxuXFxufVxcblxcbi5jaGF0dXgtYnRuLW9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoYXR1eC1zY3JuLW9uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyLCBvcGFjaXR5IDAuM3M7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNoYXR1eC1zY3JuLW9mZiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhciwgb3BhY2l0eSAwLjNzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICBEZWZhdWx0IHRoZW1lIGZvciBCb3RVSVxcbiovXFxuXFxuXFxuXFxuXFxuLmJvdHVpLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTRkZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYm90dWktbWVzc2FnZXMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5ib3R1aS1hY3Rpb25zLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4uYm90dWktbWVzc2FnZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5ib3R1aS1tZXNzYWdlLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA3cHggMTNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgY29sb3I6ICMzMTQxNDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5ib3R1aS1tZXNzYWdlLWNvbnRlbnQuaHVtYW4ge1xcbiAgICBjb2xvcjogI2Y4ZjhmODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2NDE1ZDtcXG59XFxuXFxuLmJvdHVpLW1lc3NhZ2UtY29udGVudC50ZXh0IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuLmJvdHVpLW1lc3NhZ2UtY29udGVudC5sb2FkaW5nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ib3R1aS1tZXNzYWdlLWNvbnRlbnQuZW1iZWQge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmJvdHVpLW1lc3NhZ2UtY29udGVudC1saW5rIHtcXG4gICAgY29sb3I6ICM5MTkyOTI7XFxufVxcblxcbi5ib3R1aS1hY3Rpb25zLXRleHQtaW5wdXQge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjNTk1YTVhO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzkxOTI5MjtcXG59XFxuXFxuLmJvdHVpLWFjdGlvbnMtdGV4dC1zdWJtaXQge1xcbiAgICBjb2xvcjogIzMxNDE0MTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY0MTVkO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG4uYm90dWktYWN0aW9ucy1idXR0b25zLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6ICMzNjQxNWQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogN3B4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY0MTVkO1xcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcblxcbi5ib3R1aS1hY3Rpb25zLXRleHQtc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzU5NWE1YTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MTkyOTI7XFxufVxcblxcbi5ib3R1aS1hY3Rpb25zLXRleHQtc2VhcmNoc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogIzU5NWE1YTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MTkyOTI7XFxufVxcblxcbi5ib3R1aS1hY3Rpb25zLXRleHQtc2VhcmNoc2VsZWN0IC5kcm9wZG93bi10b2dnbGUge1xcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvdHVpLWFjdGlvbnMtdGV4dC1zZWFyY2hzZWxlY3QgLnNlbGVjdGVkLXRhZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKlxcbiAgQW5pbWF0aW9uIG9mIG1lc3NhZ2VzXFxuICBGb3IgZGV0YWlscyBvbiBob3cgdG8gY2hhbmdlLCBzZWU6IGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3RyYW5zaXRpb25zLmh0bWxcXG4qL1xcbi5zbGlkZS1mYWRlLWVudGVyLWFjdGl2ZSB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcXG59XFxuXFxuLnNsaWRlLWZhZGUtZW50ZXIsXFxuLnNsaWRlLWZhZGUtbGVhdmUtdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xcbn1cXG5cXG4uc2xpZGUtZmFkZS1sMnItZW50ZXItYWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbn1cXG5cXG4uc2xpZGUtZmFkZS1sMnItZW50ZXIsXFxuLnNsaWRlLWZhZGUtbDJyLWxlYXZlLXRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbn1cXG5cXG4uc2xpZGUtZmFkZS1yMmwtZW50ZXItYWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xcbn1cXG5cXG4uc2xpZGUtZmFkZS1yMmwtZW50ZXIsXFxuLnNsaWRlLWZhZGUtcjJsLWxlYXZlLXRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcXG59XFxuXFxuLypcXG4gIEFuaW1hdGlvbiBvZiBsb2FkaW5nIGRvdHNcXG4qL1xcbi5kb3Qge1xcbiAgICB3aWR0aDogLjVyZW07XFxuICAgIGhlaWdodDogLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxufVxcblxcbi5kb3Q6bnRoLWxhc3QtY2hpbGQoMSkge1xcbiAgICBtYXJnaW4tbGVmdDogLjNyZW07XFxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAuNnMgLjNzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmRvdDpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAuM3JlbTtcXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIC42cyAuMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uZG90Om50aC1sYXN0LWNoaWxkKDMpIHtcXG4gICAgYW5pbWF0aW9uOiBsb2FkaW5nIC42cyAuMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmFiYWI7XFxuICAgIH1cXG4gICAgMjUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0zcHgpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwcHgpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgM3B4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qISBqc2ZyYW1lIHYxLjYuMiBDb3B5cmlnaHQgKGMpIDIwMDctMjAyMCBUb20gTWlzYXdhICovXG4hZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIHI9dCgpO2Zvcih2YXIgbiBpbiByKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW25dPXJbbl19fSh3aW5kb3csKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHIobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciBvPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHIpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHIubT1lLHIuYz10LHIuZD1mdW5jdGlvbihlLHQsbil7ci5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sci5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHIudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSlyLmQobixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiBufSxyLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHIuZCh0LFwiYVwiLHQpLHR9LHIubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sci5wPVwiXCIscihyLnM9MTApfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuLG89ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09biYmKG49Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYikpLG59LGE9ZnVuY3Rpb24oKXt2YXIgZT17fTtyZXR1cm4gZnVuY3Rpb24odCl7aWYodm9pZCAwPT09ZVt0XSl7dmFyIHI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTtpZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnIgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpdHJ5e3I9ci5jb250ZW50RG9jdW1lbnQuaGVhZH1jYXRjaChlKXtyPW51bGx9ZVt0XT1yfXJldHVybiBlW3RdfX0oKSxpPVtdO2Z1bmN0aW9uIGwoZSl7Zm9yKHZhciB0PS0xLHI9MDtyPGkubGVuZ3RoO3IrKylpZihpW3JdLmlkZW50aWZpZXI9PT1lKXt0PXI7YnJlYWt9cmV0dXJuIHR9ZnVuY3Rpb24gcyhlLHQpe2Zvcih2YXIgcj17fSxuPVtdLG89MDtvPGUubGVuZ3RoO28rKyl7dmFyIGE9ZVtvXSxzPXQuYmFzZT9hWzBdK3QuYmFzZTphWzBdLGQ9cltzXXx8MCx1PVwiXCIuY29uY2F0KHMsXCIgXCIpLmNvbmNhdChkKTtyW3NdPWQrMTt2YXIgYz1sKHUpLG09e2NzczphWzFdLG1lZGlhOmFbMl0sc291cmNlTWFwOmFbM119Oy0xIT09Yz8oaVtjXS5yZWZlcmVuY2VzKyssaVtjXS51cGRhdGVyKG0pKTppLnB1c2goe2lkZW50aWZpZXI6dSx1cGRhdGVyOnkobSx0KSxyZWZlcmVuY2VzOjF9KSxuLnB1c2godSl9cmV0dXJuIG59ZnVuY3Rpb24gZChlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbj1lLmF0dHJpYnV0ZXN8fHt9O2lmKHZvaWQgMD09PW4ubm9uY2Upe3ZhciBvPXIubmM7byYmKG4ubm9uY2U9byl9aWYoT2JqZWN0LmtleXMobikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5zZXRBdHRyaWJ1dGUoZSxuW2VdKX0pKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluc2VydCllLmluc2VydCh0KTtlbHNle3ZhciBpPWEoZS5pbnNlcnR8fFwiaGVhZFwiKTtpZighaSl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO2kuYXBwZW5kQ2hpbGQodCl9cmV0dXJuIHR9dmFyIHUsYz0odT1bXSxmdW5jdGlvbihlLHQpe3JldHVybiB1W2VdPXQsdS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX0pO2Z1bmN0aW9uIG0oZSx0LHIsbil7dmFyIG89cj9cIlwiOm4ubWVkaWE/XCJAbWVkaWEgXCIuY29uY2F0KG4ubWVkaWEsXCIge1wiKS5jb25jYXQobi5jc3MsXCJ9XCIpOm4uY3NzO2lmKGUuc3R5bGVTaGVldCllLnN0eWxlU2hlZXQuY3NzVGV4dD1jKHQsbyk7ZWxzZXt2YXIgYT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvKSxpPWUuY2hpbGROb2RlcztpW3RdJiZlLnJlbW92ZUNoaWxkKGlbdF0pLGkubGVuZ3RoP2UuaW5zZXJ0QmVmb3JlKGEsaVt0XSk6ZS5hcHBlbmRDaGlsZChhKX19ZnVuY3Rpb24gcChlLHQscil7dmFyIG49ci5jc3Msbz1yLm1lZGlhLGE9ci5zb3VyY2VNYXA7aWYobz9lLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsbyk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKSxhJiZidG9hJiYobis9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShhKSkpKSxcIiAqL1wiKSksZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PW47ZWxzZXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpO2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobikpfX12YXIgaD1udWxsLGY9MDtmdW5jdGlvbiB5KGUsdCl7dmFyIHIsbixvO2lmKHQuc2luZ2xldG9uKXt2YXIgYT1mKys7cj1ofHwoaD1kKHQpKSxuPW0uYmluZChudWxsLHIsYSwhMSksbz1tLmJpbmQobnVsbCxyLGEsITApfWVsc2Ugcj1kKHQpLG49cC5iaW5kKG51bGwscix0KSxvPWZ1bmN0aW9uKCl7IWZ1bmN0aW9uKGUpe2lmKG51bGw9PT1lLnBhcmVudE5vZGUpcmV0dXJuITE7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfShyKX07cmV0dXJuIG4oZSksZnVuY3Rpb24odCl7aWYodCl7aWYodC5jc3M9PT1lLmNzcyYmdC5tZWRpYT09PWUubWVkaWEmJnQuc291cmNlTWFwPT09ZS5zb3VyY2VNYXApcmV0dXJuO24oZT10KX1lbHNlIG8oKX19ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7KHQ9dHx8e30pLnNpbmdsZXRvbnx8XCJib29sZWFuXCI9PXR5cGVvZiB0LnNpbmdsZXRvbnx8KHQuc2luZ2xldG9uPW8oKSk7dmFyIHI9cyhlPWV8fFtdLHQpO3JldHVybiBmdW5jdGlvbihlKXtpZihlPWV8fFtdLFwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSl7Zm9yKHZhciBuPTA7bjxyLmxlbmd0aDtuKyspe3ZhciBvPWwocltuXSk7aVtvXS5yZWZlcmVuY2VzLS19Zm9yKHZhciBhPXMoZSx0KSxkPTA7ZDxyLmxlbmd0aDtkKyspe3ZhciB1PWwocltkXSk7MD09PWlbdV0ucmVmZXJlbmNlcyYmKGlbdV0udXBkYXRlcigpLGkuc3BsaWNlKHUsMSkpfXI9YX19fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD1bXTtyZXR1cm4gdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcCgoZnVuY3Rpb24odCl7dmFyIHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj1lWzFdfHxcIlwiLG49ZVszXTtpZighbilyZXR1cm4gcjtpZih0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgbz0oaT1uLGw9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoaSkpKSkscz1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChsKSxcIi8qIyBcIi5jb25jYXQocyxcIiAqL1wiKSksYT1uLnNvdXJjZXMubWFwKChmdW5jdGlvbihlKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG4uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KGUsXCIgKi9cIil9KSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW29dKS5qb2luKFwiXFxuXCIpfXZhciBpLGwscztyZXR1cm5bcl0uam9pbihcIlxcblwiKX0odCxlKTtyZXR1cm4gdFsyXT9cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKTpyfSkpLmpvaW4oXCJcIil9LHQuaT1mdW5jdGlvbihlLHIsbil7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPVtbbnVsbCxlLFwiXCJdXSk7dmFyIG89e307aWYobilmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGk9dGhpc1thXVswXTtudWxsIT1pJiYob1tpXT0hMCl9Zm9yKHZhciBsPTA7bDxlLmxlbmd0aDtsKyspe3ZhciBzPVtdLmNvbmNhdChlW2xdKTtuJiZvW3NbMF1dfHwociYmKHNbMl0/c1syXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHNbMl0pOnNbMl09ciksdC5wdXNoKHMpKX19LHR9fSxmdW5jdGlvbihlLHQscil7XG4vKiEgbWVyZ2UtZGVlcGx5IHYyLjEuMCBDb3B5cmlnaHQgKGMpIDIwMTktMjAyMCByaXZlcnN1bi5vcmdAZ21haWwuY29tICovXG5lLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCIvXCIscihyLnM9MCl9KFtmdW5jdGlvbihlLHQscil7ZS5leHBvcnRzPXIoMSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBpKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fGEoZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gbyhlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXt2YXIgcj1bXSxuPSEwLG89ITEsYT12b2lkIDA7dHJ5e2Zvcih2YXIgaSxsPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0oaT1sLm5leHQoKSkuZG9uZSkmJihyLnB1c2goaS52YWx1ZSksIXR8fHIubGVuZ3RoIT09dCk7bj0hMCk7fWNhdGNoKGUpe289ITAsYT1lfWZpbmFsbHl7dHJ5e258fG51bGw9PWwucmV0dXJufHxsLnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyBhfX1yZXR1cm4gcn19KGUsdCl8fGEoZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGEoZSx0KXtpZihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gaShlLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09cnx8XCJTZXRcIj09PXI/QXJyYXkuZnJvbShlKTpcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qocik/aShlLHQpOnZvaWQgMH19ZnVuY3Rpb24gaShlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLG49bmV3IEFycmF5KHQpO3I8dDtyKyspbltyXT1lW3JdO3JldHVybiBufWZ1bmN0aW9uIGwoZSl7cmV0dXJuKGw9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIHMoZSx0LHIpe3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT09bChlKSYmIUFycmF5LmlzQXJyYXkoZSl9LGk9ciYmci5jb25jYXRBcnJheSxkPXt9O3ImJnIuYXNzaWduVG9PYmplY3QmJihkPXIuYXNzaWduVG9PYmplY3Qsci5hc3NpZ25Ub09iamVjdD1udWxsKTt2YXIgdSxjLG0scD1udWxsO2lmKHA9ZD09PWU/ZTpPYmplY3QuYXNzaWduKGQsZSksYShlKSYmYSh0KSlmb3IodmFyIGg9MCxmPU9iamVjdC5lbnRyaWVzKHQpO2g8Zi5sZW5ndGg7aCsrKXt2YXIgeT1vKGZbaF0sMiksYj15WzBdLGc9eVsxXSx2PWVbYl07aSYmQXJyYXkuaXNBcnJheShnKSYmQXJyYXkuaXNBcnJheSh2KSYmdCE9PWU/cFtiXT12LmNvbmNhdC5hcHBseSh2LG4oZykpOmEoZykmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGIpP3BbYl09cyh2LGcscik6T2JqZWN0LmFzc2lnbihwLChtPWcsKGM9Yilpbih1PXt9KT9PYmplY3QuZGVmaW5lUHJvcGVydHkodSxjLHt2YWx1ZTptLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dVtjXT1tLHUpKX1yZXR1cm4gcH1mdW5jdGlvbiBkKGUpe3ZhciB0PW51bGwscj1udWxsLG49ZS5vcDtpZighbil0aHJvdyBFcnJvcignVGhlIGluaXRpYWxpemF0aW9uIHByb3BlcnR5IFwib3BcIiBjYW5ub3QgYmUgb21pdHRlZC4gXCJtZXJnZVwiLFwib3ZlcndyaXRlLW1lcmdlXCIsXCJjbG9uZVwiIGNhbiBiZSBzcGVjaWZpZWQuJyk7dmFyIG89XCJtZXJnZVwiPT09bixhPVwiY2xvbmVcIj09PW4saT1cIm92ZXJ3cml0ZS1tZXJnZVwiPT09bjtpZihvKXtpZih0PWUub2JqZWN0MSxyPWUub2JqZWN0MiwhdHx8IXIpdGhyb3cgRXJyb3IoXCJvYmplY3QxIG9yIG9iamVjdDIgaXMgbm90IHNwZWNpZmllZC5cIil9ZWxzZSBpZihpKXtpZih0PWUub2JqZWN0MSxyPWUub2JqZWN0MiwhdHx8IXIpdGhyb3cgRXJyb3IoXCJvYmplY3QxIG9yIG9iamVjdDIgaXMgbm90IHNwZWNpZmllZC5cIik7aWYoMD09PU9iamVjdC5rZXlzKHIpLmxlbmd0aClyZXR1cm4gbnVsbH1lbHNle2lmKCFhKXRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwib3BcIiBwcm9wZXJ0eSB2YWx1ZSBcIicuY29uY2F0KG4sJ1wiIGhhcyBiZWVuIHNwZWNpZmllZC4nKSk7dD1lLm9iamVjdDEscj17fX12YXIgbCxkPU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKSx1PW51bGwsYz0obD10LE9iamVjdC5nZXRQcm90b3R5cGVPZihsKSE9PU9iamVjdC5wcm90b3R5cGUpO3JldHVybiBvJiZjfHxhPyhzKHQsdCx7YXNzaWduVG9PYmplY3Q6ZCxjb25jYXRBcnJheTplJiZlLmNvbmNhdEFycmF5fSksdT1kKTp1PXt9LHMoYT91OnQscix7YXNzaWduVG9PYmplY3Q6aT90OnUsY29uY2F0QXJyYXk6ZSYmZS5jb25jYXRBcnJheX0pLHV9ci5yKHQpLHIuZCh0LFwiZGVmYXVsdFwiLChmdW5jdGlvbigpe3JldHVybiBkfSkpfV0pLmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCl7Q0FMSUdOPXt9LENBTElHTi5MRUZUX1RPUD1cIkxFRlRfVE9QXCIsQ0FMSUdOLkhDRU5URVJfVE9QPVwiQ0VOVEVSX1RPUFwiLENBTElHTi5SSUdIVF9UT1A9XCJSSUdIVF9UT1BcIixDQUxJR04uTEVGVF9WQ0VOVEVSPVwiTEVGVF9DRU5URVJcIixDQUxJR04uSENFTlRFUl9WQ0VOVEVSPVwiQ0VOVEVSX0NFTlRFUlwiLENBTElHTi5DRU5URVI9Q0FMSUdOLkhDRU5URVJfVkNFTlRFUixDQUxJR04uUklHSFRfVkNFTlRFUj1cIlJJR0hUX0NFTlRFUlwiLENBTElHTi5MRUZUX0JPVFRPTT1cIkxFRlRfQk9UVE9NXCIsQ0FMSUdOLkhDRU5URVJfQk9UVE9NPVwiQ0VOVEVSX0JPVFRPTVwiLENBTElHTi5SSUdIVF9CT1RUT009XCJSSUdIVF9CT1RUT01cIixlLmV4cG9ydHM9Q0FMSUdOfSxmdW5jdGlvbihlLHQscil7dmFyIG49cigxNik7ZnVuY3Rpb24gbygpe3RoaXMuZnBzPTMwLHRoaXMuZHVyYXRpb25NaWxsaXM9MjAwLHRoaXMudGFyZ2V0RnJhbWU9bnVsbCx0aGlzLl9jcnJBbHBoYT0xLHRoaXMuX3RvQWxwaGE9MSx0aGlzLl9jcnJXaWR0aD0wLHRoaXMuX2NyckhlaWdodD0wLHRoaXMuX3RvV2lkdGg9MCx0aGlzLl90b0hlaWdodD0wLHRoaXMuX3RvWD0wLHRoaXMuX3RvWT0wLHRoaXMucGlubmVkQW5pbWF0aW9uRW5hYmxlZD0hMSx0aGlzLl9waW5YPTAsdGhpcy5fcGluWT0wLHRoaXMuX3BpbkFuY2hvcj1udWxsfW8ucHJvdG90eXBlLnNldD1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QudGFyZ2V0RnJhbWU9ZSx0LmZyb21XaWR0aChlLmdldFdpZHRoKCkpLHQuZnJvbUhlaWdodChlLmdldEhlaWdodCgpKSx0LnRvV2lkdGgoZS5nZXRXaWR0aCgpKSx0LnRvSGVpZ2h0KGUuZ2V0SGVpZ2h0KCkpO3ZhciByPWUuZ2V0UG9zaXRpb24oKTtyZXR1cm4gdC5mcm9tUG9zaXRpb24oci54LHIueSxyLmFuY2hvciksdH0sby5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFyZ2V0RnJhbWV9LG8ucHJvdG90eXBlLnNldER1cmF0aW9uPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmR1cmF0aW9uTWlsbGlzPWUsdGhpc30sby5wcm90b3R5cGUuc2V0RlBTPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmZwcz1lLHRoaXN9LG8ucHJvdG90eXBlLmZyb21Qb3NpdGlvbj1mdW5jdGlvbihlLHQscil7dmFyIG49dGhpcztyZXR1cm4gbi5waW5uZWRBbmltYXRpb25FbmFibGVkPSEwLG4uX3Bpblg9ZSxuLl9waW5ZPXQsbi50b1Bvc2l0aW9uKGUsdCksciYmKG4uX3BpbkFuY2hvcj1yKSxufSxvLnByb3RvdHlwZS5mcm9tV2lkdGg9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2NycldpZHRoPWUsdGhpc30sby5wcm90b3R5cGUuZnJvbUhlaWdodD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fY3JySGVpZ2h0PWUsdGhpc30sby5wcm90b3R5cGUudG9XaWR0aD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fdG9XaWR0aD1lLHRoaXN9LG8ucHJvdG90eXBlLnRvSGVpZ2h0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl90b0hlaWdodD1lLHRoaXN9LG8ucHJvdG90eXBlLmZyb21BbHBoYT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fY3JyQWxwaGE9ZSx0aGlzfSxvLnByb3RvdHlwZS50b0FscGhhPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl90b0FscGhhPWUsdGhpc30sby5wcm90b3R5cGUuZWFzZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fZWFzZT1lLHRoaXN9LG8ucHJvdG90eXBlLnRvUG9zaXRpb249ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5fdG9YPWUsdGhpcy5fdG9ZPXQsdGhpc30sby5wcm90b3R5cGUudG9YPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl90b1g9ZSx0aGlzfSxvLnByb3RvdHlwZS50b1k9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX3RvWT1lLHRoaXN9LG8ucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcyxvPXIuX2NycldpZHRoLGE9ci5fY3JySGVpZ2h0LGk9ci5fcGluWCxsPXIuX3Bpblkscz1yLl9jcnJBbHBoYTtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGQsdSl7dmFyIGM9cGFyc2VJbnQoci5mcHMqKHIuZHVyYXRpb25NaWxsaXMvMWUzKSk7MD09YyYmKGM9MSk7dmFyIG09KHIuX3RvV2lkdGgtbykvYyxwPShyLl90b0hlaWdodC1hKS9jLGg9KHIuX3RvWC1pKS9jLGY9KHIuX3RvWS1sKS9jLHk9KHIuX3RvQWxwaGEtcykvYztyLl9lYXNlJiYoeS89MS4yNCk7dmFyIGI9ci5kdXJhdGlvbk1pbGxpcy9jLGc9MDtmdW5jdGlvbiB2KCl7dmFyIGU9bmV3IG47ZS5zZXRJbnRlcnZhbE1pbGxpcyhiKSxlLnNldENhbGxiYWNrKChmdW5jdGlvbihlKXtpZihnPT1jKXt2YXIgbj1yLl90b1dpZHRoLHU9ci5fdG9IZWlnaHQsYj1pK2gqZyx2PWwrZipnLEM9ci5fdG9BbHBoYTtyLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQmJnIudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShiLHYsci5fcGluQW5jaG9yLG4sdSksci50YXJnZXRGcmFtZS5odG1sRWxlbWVudC5zdHlsZSYmKHIudGFyZ2V0RnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUub3BhY2l0eT1DKSxyLnRhcmdldEZyYW1lLnNldFNpemUobix1LCEwKSxyLl9jcnJXaWR0aD1uLHIuX2NyckhlaWdodD11LHIuX3Bpblg9YixyLl9waW5ZPXZ9aWYoZz09YysxKXJldHVybiBlLnN0b3BUaW1lcigpLHIudGFyZ2V0RnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUmJihyLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLm9wYWNpdHk9ci5fdG9BbHBoYSksdm9pZCBkKHIpO249byttKmcsdT1hK3AqZyxiPWkraCpnLHY9bCtmKmcsQz1zK3kqZztpZihyLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQmJnIudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShiLHYsci5fcGluQW5jaG9yLG4sdSksci50YXJnZXRGcmFtZS5odG1sRWxlbWVudC5zdHlsZSYmKHIudGFyZ2V0RnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUub3BhY2l0eT1DKSxyLnRhcmdldEZyYW1lLnNldFNpemUobix1LCEwKSwwPT1nKXt2YXIgQj1yLnRhcmdldEZyYW1lLnBhcmVudENhbnZhcztpZihCKUIuZ2V0V2luZG93KHIudGFyZ2V0RnJhbWUuaWQpJiZyLnRhcmdldEZyYW1lLnNob3coe3JlcXVlc3RGb2N1czp0fSl9ZysrfSkpLGUuc3RhcnRUaW1lcigpfWlmKGUpe3ZhciBDPW5ldyBuO0Muc2V0SW50ZXJ2YWxNaWxsaXMoZSksQy5zZXRDYWxsYmFjaygoZnVuY3Rpb24oZSl7ZS5zdG9wVGltZXIoKSx2KCl9KSksQy5zdGFydFRpbWVyKCl9ZWxzZSB2KCl9KSl9LGUuZXhwb3J0cz1vfSxmdW5jdGlvbihlLHQscil7XG4vKiEgZXZlbnQtbGlzdGVuZXItaGVscGVyKGh0dHBzOi8vZ2l0aHViLmNvbS9yaXZlcnN1bi9ldmVudC1saXN0ZW5lci1oZWxwZXIpIHYxLjAuMiBDb3B5cmlnaHQgKGMpIDIwMjAgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbSAqL1xuZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIHIobil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciBvPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHIpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHIubT1lLHIuYz10LHIuZD1mdW5jdGlvbihlLHQsbil7ci5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sci5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHIudD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9cihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHIucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSlyLmQobixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiBufSxyLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIHIuZCh0LFwiYVwiLHQpLHR9LHIubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sci5wPVwiL1wiLHIoci5zPTApfShbZnVuY3Rpb24oZSx0LHIpe2UuZXhwb3J0cz1yKDEpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gbyhlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXt2YXIgcj1bXSxuPSEwLG89ITEsYT12b2lkIDA7dHJ5e2Zvcih2YXIgaSxsPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0oaT1sLm5leHQoKSkuZG9uZSkmJihyLnB1c2goaS52YWx1ZSksIXR8fHIubGVuZ3RoIT09dCk7bj0hMCk7fWNhdGNoKGUpe289ITAsYT1lfWZpbmFsbHl7dHJ5e258fG51bGw9PWwucmV0dXJufHxsLnJldHVybigpfWZpbmFsbHl7aWYobyl0aHJvdyBhfX1yZXR1cm4gcn19KGUsdCl8fGkoZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGEoZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8bnVsbD09ZVtTeW1ib2wuaXRlcmF0b3JdKXtpZihBcnJheS5pc0FycmF5KGUpfHwoZT1pKGUpKSl7dmFyIHQ9MCxyPWZ1bmN0aW9uKCl7fTtyZXR1cm57czpyLG46ZnVuY3Rpb24oKXtyZXR1cm4gdD49ZS5sZW5ndGg/e2RvbmU6ITB9Ontkb25lOiExLHZhbHVlOmVbdCsrXX19LGU6ZnVuY3Rpb24oZSl7dGhyb3cgZX0sZjpyfX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9dmFyIG4sbyxhPSEwLGw9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtuPWVbU3ltYm9sLml0ZXJhdG9yXSgpfSxuOmZ1bmN0aW9uKCl7dmFyIGU9bi5uZXh0KCk7cmV0dXJuIGE9ZS5kb25lLGV9LGU6ZnVuY3Rpb24oZSl7bD0hMCxvPWV9LGY6ZnVuY3Rpb24oKXt0cnl7YXx8bnVsbD09bi5yZXR1cm58fG4ucmV0dXJuKCl9ZmluYWxseXtpZihsKXRocm93IG99fX19ZnVuY3Rpb24gaShlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBsKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cj9BcnJheS5mcm9tKHIpOlwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKT9sKGUsdCk6dm9pZCAwfX1mdW5jdGlvbiBsKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59ZnVuY3Rpb24gcyhlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19ci5yKHQpLHIuZCh0LFwiZGVmYXVsdFwiLChmdW5jdGlvbigpe3JldHVybiBkfSkpO3ZhciBkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpeyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5ldlRhcmdldExpc3RlbmVyc01hcD1uZXcgTWFwLHRoaXMubGlzdGVuZXJOdW09MH12YXIgdCxyO3JldHVybiB0PWUsKHI9W3trZXk6XCJhZGRFdmVudExpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIsbil7dmFyIG89dGhpcyxhPW51bGw7aWYobiYmKGE9dGhpcy5fY2xvbmVKc29uKG4pKSxhcmd1bWVudHMubGVuZ3RoPjQpdGhyb3cgRXJyb3IoXCJUb28gbWFueSBhcmd1bWVudHMuIE51bWJlciBvZiBhcmd1bWVudHMgY2FuIGJlIHNwZWNpZmllZCA0LlwiKTt0aGlzLl9jaGVja1R5cGVPZk9wdGlvbnMoYSk7dmFyIGk9bnVsbDthJiZhLmxpc3RlbmVyTmFtZSYmKGk9YS5saXN0ZW5lck5hbWUpO3ZhciBsPW51bGw7YSYmYS5vbmNlJiYoZGVsZXRlIGEub25jZSxhLmNhbGxiYWNrT25jZT0hMCxsPWZ1bmN0aW9uKG4pe3Iobiksby5yZW1vdmVFdmVudExpc3RlbmVyKGUsdCxudWxsLGEpfSk7dmFyIHM9e2xpc3RlbmVyTmFtZTpudWxsLHN1Y2Nlc3M6ITB9O2w/ZS5hZGRFdmVudExpc3RlbmVyKHQsbCxhKTplLmFkZEV2ZW50TGlzdGVuZXIodCxyLGEpO3ZhciBkPXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGUpO2R8fChkPW5ldyBNYXAsdGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5zZXQoZSxkKSk7dmFyIHU9ZC5nZXQodCk7aWYodXx8KHU9bmV3IE1hcCxkLnNldCh0LHUpKSxudWxsIT09aSl7aWYodS5oYXMoaSkpdGhyb3cgRXJyb3IoJ1RoZSBsaXN0ZW5lck5hbWUgXCInLmNvbmNhdChpLCdcIiBpcyBhbHJlYWR5IHVzZWQgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSAnKS5jb25jYXQodCkpO3Uuc2V0KGkse2xpc3RlbmVyOnIsb25jZUxpc3RlbmVyOmwsb3B0aW9uczphfSkscy5saXN0ZW5lck5hbWU9aX1lbHNle3ZhciBjPVwibGlzdGVuZXItXCIuY29uY2F0KHRoaXMubGlzdGVuZXJOdW0pO2F8fChhPXt9KSxhLmxpc3RlbmVyTmFtZT1jLHUuc2V0KGMse2xpc3RlbmVyOnIsb25jZUxpc3RlbmVyOmwsb3B0aW9uczphfSkscy5saXN0ZW5lck5hbWU9Yyx0aGlzLmxpc3RlbmVyTnVtKz0xfXJldHVybiBzfX0se2tleTpcInJlbW92ZUV2ZW50TGlzdGVuZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQscixuKXtpZihhcmd1bWVudHMubGVuZ3RoPDMpdGhyb3cgRXJyb3IoXCJUaHJlZSBvciBmb3VyIGFyZ3VtZW50cyBhcmUgcmVxdWlyZWQuXCIpO3RoaXMuX2NoZWNrVHlwZU9mT3B0aW9ucyhuKTt2YXIgbz1udWxsO24mJm4ubGlzdGVuZXJOYW1lJiYobz1uLmxpc3RlbmVyTmFtZSk7dmFyIGE9e3N1Y2Nlc3M6ITEsbWVzc2FnZTpcInVua25vd24gZXJyb3JcIn0saT10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTtpZighaSlyZXR1cm4gYS5tZXNzYWdlPVwiRE9NIGVsZW1lbnQgXCIuY29uY2F0KGUsXCIoaWQ9XCIpLmNvbmNhdChlLmlkLFwiKSBkb2Vzbid0IGhhdmUgYW55IGxpc3RlbmVycy5cIiksYTt2YXIgbD1pLmdldCh0KTtpZighbClyZXR1cm4gYS5tZXNzYWdlPVwiRE9NIGVsZW1lbnQgXCIuY29uY2F0KGUsXCIoaWQ9XCIpLmNvbmNhdChlLmlkLFwiKSBkb2Vzbid0IGhhdmUgXFxcIlwiKS5jb25jYXQodCwnXCIgbGlzdGVuZXJzLicpLGE7aWYobyl7dmFyIHM9bC5nZXQobyk7aWYoIXMpcmV0dXJuIGEubWVzc2FnZT1cIkRPTSBlbGVtZW50IFwiLmNvbmNhdChlLFwiKGlkPVwiKS5jb25jYXQoZS5pZCxcIikgZG9lc24ndCBoYXZlIFxcXCJcIikuY29uY2F0KHQsJ1wiIGxpc3RlbmVyIFwiJykuY29uY2F0KG8sJ1wiJyksYTtsLmRlbGV0ZShvKSxzLm9wdGlvbnMmJnMub3B0aW9ucy5jYWxsYmFja09uY2U/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQscy5vbmNlTGlzdGVuZXIscy5vcHRpb25zKTplLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxzLmxpc3RlbmVyLHMub3B0aW9ucyksYS5zdWNjZXNzPSEwfWVsc2UgaWYoIW8pe2lmKCFyKXJldHVybiBhLm1lc3NhZ2U9XCJvcHRpb25zLmxpc3RlbmVyTmFtZSBpcyBub3QgZm91bmRcIixhO3ZhciBkPVwibGlzdGVuZXJcIix1PXIsYz10aGlzLl9zZWFyY2hLZXlJblZhbHVlQ29udGVudChsLGQsdSk7aWYoYyl7dmFyIG09bC5nZXQoYykscD1tLm9uY2VMaXN0ZW5lcixoPW0ub3B0aW9ucztsLmRlbGV0ZShjKSxwP2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LHAsaCk6ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQscixoKSxhLnN1Y2Nlc3M9ITB9ZWxzZSBhLnN1Y2Nlc3M9ITEsYS5tZXNzYWdlPVwiU3BlY2lmaWVkIGxpc3RlbmVyIGNvdWxkIG5vdCBiZSBkZWxldGVkIGZyb20gRE9NIGVsZW1lbnQgXCIuY29uY2F0KGUsXCIoaWQ9XCIpLmNvbmNhdChlLmlkLFwiKS5cXG4gICAgICAgIFNpbmNlIHRoZSBzcGVjaWZpZWQgbGlzdGVuZXIgaXMgbm90IHJlZ2lzdGVyZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIsXFxuICAgICAgICBpdCBtYXkgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgb3V0c2lkZSBvZiBldmVudC1saXN0ZW5lci1oZWxwZXIuXCIpfXJldHVybiBhfX0se2tleTpcImdldEV2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT90P3RoaXMuX2dldEV2ZW50TGlzdGVuZXJzV2l0aDJBcmdzKGUsdCk6dGhpcy5fZ2V0RXZlbnRMaXN0ZW5lcnNXaXRoMUFyZyhlKTpbXX19LHtrZXk6XCJfZ2V0RXZlbnRMaXN0ZW5lcnNXaXRoMUFyZ1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PVtdLHI9dGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5nZXQoZSk7aWYoIXIpcmV0dXJuIHQ7dmFyIG4saT1hKHIpO3RyeXtmb3IoaS5zKCk7IShuPWkubigpKS5kb25lOyl7dmFyIGwscz1vKG4udmFsdWUsMiksZD1zWzBdLHU9c1sxXSxjPVtdLG09YSh1LnZhbHVlcygpKTt0cnl7Zm9yKG0ucygpOyEobD1tLm4oKSkuZG9uZTspe3ZhciBwPWwudmFsdWU7Yy5wdXNoKHRoaXMuX2dldEZyb3plbkxpc3RlbmVyRGVmKHApKX19Y2F0Y2goZSl7bS5lKGUpfWZpbmFsbHl7bS5mKCl9Yy5sZW5ndGg+MCYmdC5wdXNoKHtldmVudFR5cGU6ZCxsaXN0ZW5lcnM6Y30pfX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX1yZXR1cm4gdH19LHtrZXk6XCJfZ2V0RXZlbnRMaXN0ZW5lcnNXaXRoMkFyZ3NcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKDIhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IEVycm9yKFwiT25seSB0d28gYXJndW1lbnRzIGNhbiBiZSBzcGVjaWZpZWRcIik7dmFyIHI9W10sbj10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTtpZighbilyZXR1cm4gcjt2YXIgbz1uLmdldCh0KTtpZighbylyZXR1cm4gcjt2YXIgaSxsPWEoby52YWx1ZXMoKSk7dHJ5e2ZvcihsLnMoKTshKGk9bC5uKCkpLmRvbmU7KXt2YXIgcz1pLnZhbHVlLGQ9dGhpcy5fZ2V0RnJvemVuTGlzdGVuZXJEZWYocyk7ci5wdXNoKGQpfX1jYXRjaChlKXtsLmUoZSl9ZmluYWxseXtsLmYoKX1yZXR1cm4gcn19LHtrZXk6XCJnZXRFdmVudExpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe2lmKDMhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IEVycm9yKFwiT25seSAzIGFyZ3VtZW50cyBjYW4gYmUgc3BlY2lmaWVkXCIpO3ZhciBuPXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGUpO2lmKCFuKXJldHVybiBudWxsO3ZhciBvPW4uZ2V0KHQpO2lmKCFvKXJldHVybiBudWxsO3ZhciBhPW8uZ2V0KHIpLGk9dGhpcy5fZ2V0RnJvemVuTGlzdGVuZXJEZWYoYSk7cmV0dXJuIGl9fSx7a2V5OlwiaGFzRXZlbnRMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKDIhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IEVycm9yKFwiT25seSB0d28gYXJndW1lbnRzIGNhbiBiZSBzcGVjaWZpZWRcIik7dmFyIHI9dGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5nZXQoZSk7aWYoIXIpcmV0dXJuITE7dmFyIG49ci5nZXQodCk7cmV0dXJuISghbnx8MD09PW4uc2l6ZSl9fSx7a2V5OlwiaGFzRXZlbnRMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxyKXtpZigzIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBFcnJvcihcIk9ubHkgMyBhcmd1bWVudHMgY2FuIGJlIHNwZWNpZmllZFwiKTt2YXIgbj10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTtpZighbilyZXR1cm4hMTt2YXIgbz1uLmdldCh0KTtpZighbylyZXR1cm4hMTt2YXIgYT1vLmdldChyKTtyZXR1cm4hIWF9fSx7a2V5OlwiX2dldEZyb3plbkxpc3RlbmVyRGVmXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIG51bGw7dmFyIHQ9e30scj1udWxsLG49ZS5vcHRpb25zO3JldHVybiBuJiYocj17fSx0Lm9wdGlvbnM9cixuLmNhcHR1cmUmJihyLmNhcHR1cmU9bi5jYXB0dXJlKSxuLmNhbGxiYWNrT25jZSYmKHIub25jZT1uLmNhbGxiYWNrT25jZSksbi5saXN0ZW5lck5hbWUmJihyLmxpc3RlbmVyTmFtZT1uLmxpc3RlbmVyTmFtZSkpLHQubGlzdGVuZXI9ZS5saXN0ZW5lcixPYmplY3QuZnJlZXplKHIpLE9iamVjdC5mcmVlemUodCksdH19LHtrZXk6XCJjbGVhckFsbEV2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZSx0PWEodGhpcy5nZXRBbGxFdmVudFRhcmdldHMoKSk7dHJ5e2Zvcih0LnMoKTshKGU9dC5uKCkpLmRvbmU7KXt2YXIgcj1lLnZhbHVlO3RoaXMuY2xlYXJFdmVudExpc3RlbmVycyhyKX19Y2F0Y2goZSl7dC5lKGUpfWZpbmFsbHl7dC5mKCl9fX0se2tleTpcImNsZWFyRXZlbnRMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKCFlKXRocm93IEVycm9yKFwiQXQgbGVhc3QgdGhlIEV2ZW50VGFyZ2V0IG11c3QgYmUgc3BlY2lmaWVkIGFzIGFuIGFyZ3VtZW50XCIpO3ZhciByPXRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoZSx0KTtpZih0KXtpZih0KXt2YXIgbixvPWEocik7dHJ5e2ZvcihvLnMoKTshKG49by5uKCkpLmRvbmU7KXt2YXIgaT1uLnZhbHVlO3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHQsbnVsbCxpLm9wdGlvbnMpfX1jYXRjaChlKXtvLmUoZSl9ZmluYWxseXtvLmYoKX19fWVsc2V7dmFyIGwscz1hKHIpO3RyeXtmb3Iocy5zKCk7IShsPXMubigpKS5kb25lOyl7dmFyIGQsdT1sLnZhbHVlLGM9dS5ldmVudFR5cGUsbT1hKHUubGlzdGVuZXJzKTt0cnl7Zm9yKG0ucygpOyEoZD1tLm4oKSkuZG9uZTspe3ZhciBwPWQudmFsdWUub3B0aW9uczt0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxjLG51bGwscCl9fWNhdGNoKGUpe20uZShlKX1maW5hbGx5e20uZigpfX19Y2F0Y2goZSl7cy5lKGUpfWZpbmFsbHl7cy5mKCl9fX19LHtrZXk6XCJjbGVhckV2ZW50TGlzdGVuZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIG49dGhpcy5nZXRFdmVudExpc3RlbmVyKGUsdCxyKTtuJiZuLm9wdGlvbnMmJnRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHQsbnVsbCxuLm9wdGlvbnMpfX0se2tleTpcImdldEFsbEV2ZW50VGFyZ2V0c1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIEFycmF5LmZyb20odGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5rZXlzKCkpfX0se2tleTpcInNlYXJjaEV2ZW50TGlzdGVuZXJzQnlOYW1lXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQscj1bXSxuPWEodGhpcy5nZXRBbGxFdmVudFRhcmdldHMoKSk7dHJ5e2ZvcihuLnMoKTshKHQ9bi5uKCkpLmRvbmU7KXt2YXIgbyxpPXQudmFsdWUsbD10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChpKSxzPWEobC5rZXlzKCkpO3RyeXtmb3Iocy5zKCk7IShvPXMubigpKS5kb25lOyl7dmFyIGQ9by52YWx1ZSx1PWwuZ2V0KGQpLGM9dGhpcy5fZ2V0RnJvemVuTGlzdGVuZXJEZWYodS5nZXQoZSkpO2MmJnIucHVzaChjKX19Y2F0Y2goZSl7cy5lKGUpfWZpbmFsbHl7cy5mKCl9fX1jYXRjaChlKXtuLmUoZSl9ZmluYWxseXtuLmYoKX1yZXR1cm4gcn19LHtrZXk6XCJfc2VhcmNoS2V5SW5WYWx1ZUNvbnRlbnRcIix2YWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIG4saT1hKGUpO3RyeXtmb3IoaS5zKCk7IShuPWkubigpKS5kb25lOyl7dmFyIGw9byhuLnZhbHVlLDIpLHM9bFswXTtpZihsWzFdW3RdPT09cilyZXR1cm4gc319Y2F0Y2goZSl7aS5lKGUpfWZpbmFsbHl7aS5mKCl9cmV0dXJuIG51bGx9fSx7a2V5OlwiX2NoZWNrVHlwZU9mT3B0aW9uc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCIhPT1uKGUpJiZ2b2lkIDAhPT1lKXRocm93XCJib29sZWFuXCI9PXR5cGVvZiBlP25ldyBFcnJvcihcIlR5cGUgb2YgYm9vbGVhbiBpcyBub3QgYWNjZXB0ZWQgYXMgdGhlIGZvdXJ0aCBhcmd1bWVudCB5b3Ugc3BlY2lmeS5cXG4gICAgICBJZiB5b3Ugd2FudCB0byBlbmFibGUgdXNlQ2FwdHVyZSwgc3BlY2lmeSB7Y2FwdHVyZTogdHJ1ZX0gYXMgdGhlIGZvdXJ0aCBwYXJhbWV0ZXIgaW5zdGVhZC5cIik6bmV3IEVycm9yKFwiVHlwZSBvZiBcIi5jb25jYXQobihlKSxcIiBpcyBub3QgYWNjZXB0ZWQgYXMgdGhlIGZvdXJ0aCBhcmd1bWVudCB5b3Ugc3BlY2lmeS5cXG4gICAgICBJZiB5b3Ugd2FudCB0byBzcGVjaWZ5IG9wdGlvbnMsIHNwZWNpZnkgYW4gb2JqZWN0IGxpa2Uge2NhcHR1cmU6IHRydWUsIGxpc3RlbmVyTmFtZTonbXktbGlzdGVuZXItMDEnfS5cIikpfX0se2tleTpcIl9jbG9uZUpzb25cIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSl9fV0pJiZzKHQucHJvdG90eXBlLHIpLGV9KCl9XSkuZGVmYXVsdH0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiByKCl7fXIucHJvdG90eXBlPXQucHJvdG90eXBlLGUucHJvdG90eXBlPW5ldyByLGUucHJvdG90eXBlLmNvbnN0cnVjdG9yPWUsZS5zdXBlckNvbnN0cnVjdG9yPXQsZS5zdXBlckNsYXNzPXQucHJvdG90eXBlfX0sZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXIoMiksbz1yKDgpLGE9cigxOCksaT1yKDE5KTtmdW5jdGlvbiBsKCl7fWZ1bmN0aW9uIHMoZSx0KXt2YXIgcj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7dC5maXJzdENoaWxkP3QuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKTp0LmFwcGVuZENoaWxkKGUpO2Zvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXt2YXIgbz1yW25dO2UhPT1vJiZ0LnJlbW92ZUNoaWxkKG8pfX1sLnByb3RvdHlwZS5idWlsZENoaWxkTWVudUFwcGVhcmFuY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpKGUpfSxsLnByb3RvdHlwZS5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlPWZ1bmN0aW9uKGUpe3JldHVybiBlP24oe29wOlwiY2xvbmVcIixvYmplY3QxOmUsY29uY2F0QXJyYXk6ITB9KTpuZXcgb30sbC5wcm90b3R5cGUuYnVpbGRJbWFnZUJ1dHRvbkFwcGVhcmFuY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/bih7b3A6XCJjbG9uZVwiLG9iamVjdDE6ZX0pOm5ldyBhfSxsLnByb3RvdHlwZS5idWlsZEJ1dHRvbj1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5idWlsZFRleHRCdXR0b24oZSl9LGwucHJvdG90eXBlLmFwcGVuZENoaWxkTWVudVRvPWZ1bmN0aW9uKGUsdCl7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyLmNsYXNzTGlzdC5hZGQoXCJqc2ZyYW1lLWNoaWxkLW1lbnVcIiksci5pbm5lckhUTUw9ZS5jaGlsZE1lbnVIVE1MLHIuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLHIuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixyLnN0eWxlLndpZHRoPWUuY2hpbGRNZW51V2lkdGgrXCJweFwiLHIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt2YXIgbj1lLnhPZmZzZXQsbz1wYXJzZUludCh0LnN0eWxlLmhlaWdodCwxMCkrZS55T2Zmc2V0KzI7XCJMRUZUXCI9PT1lLmNoaWxkTWVudUFsaWduP3Iuc3R5bGUubGVmdD1uK1wicHhcIjpcIlJJR0hUXCI9PT1lLmNoaWxkTWVudUFsaWduP3Iuc3R5bGUucmlnaHQ9bitcInB4XCI6XCJDRU5URVJcIj09PWUuY2hpbGRNZW51QWxpZ24mJihuPS1lLmNoaWxkTWVudVdpZHRoLzIrcGFyc2VJbnQodC5zdHlsZS5oZWlnaHQsMTApLzIsci5zdHlsZS5sZWZ0PW4rXCJweFwiKSxyLnN0eWxlLnRvcD1vK1wicHhcIixyLmZpcnN0Q2hpbGQuc3R5bGUucG9pbnRlckV2ZW50cz1cImF1dG9cIix0LmFwcGVuZENoaWxkKHIpfSxsLnByb3RvdHlwZS5idWlsZFRleHRCdXR0b249ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zaXplLHI9dCxuPXQ7bnVsbCE9ZS53aWR0aCYmKHI9ZS53aWR0aCksbnVsbCE9ZS5oZWlnaHQmJihuPWUuaGVpZ2h0KTt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGE9ZS5ib3JkZXJXaWR0aCxpPWUuYm9yZGVyUmFkaXVzLGw9ZS5ib3JkZXJDb2xvckRlZmF1bHQsZD1lLmJvcmRlckNvbG9yRm9jdXNlZCx1PWUuYm9yZGVyQ29sb3JIb3ZlcmVkLGM9ZS5ib3JkZXJDb2xvclByZXNzZWQsbT1lLmJvcmRlclN0eWxlRGVmYXVsdCxwPWUuYm9yZGVyU3R5bGVGb2N1c2VkLGg9ZS5ib3JkZXJTdHlsZUhvdmVyZWQsZj1lLmJvcmRlclN0eWxlUHJlc3NlZCx5PWUuYmFja2dyb3VuZENvbG9yRGVmYXVsdCxiPWUuYmFja2dyb3VuZENvbG9yRm9jdXNlZCxnPWUuYmFja2dyb3VuZENvbG9ySG92ZXJlZCx2PWUuYmFja2dyb3VuZENvbG9yUHJlc3NlZCxDPWUuYmFja2dyb3VuZEJveFNoYWRvdyxCPWUuZmEsRT1lLmNhcHRpb24sdz1lLmltYWdlRGVmYXVsdCx4PWUuaW1hZ2VGb2N1c2VkLEE9ZS5pbWFnZUhvdmVyZWQsRj1lLmltYWdlUHJlc3NlZDt3JiYody5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiKSx4JiYoeC5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiKSxBJiYoQS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiKSxGJiYoRi5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiKTt2YXIgVD1lLmNhcHRpb25Db2xvckRlZmF1bHQsST1lLmNhcHRpb25Db2xvckZvY3VzZWQsXz1lLmNhcHRpb25Db2xvckhvdmVyZWQsUz1lLmNhcHRpb25Db2xvclByZXNzZWQsRD1lLmNhcHRpb25TaGlmdFlweCxNPWUuY2FwdGlvbkZvbnRSYXRpbztvLl9oYXNGcmFtZUZvY3VzPSExLG8uX2lzTW91c2VEb3duPSExLG8uc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLG8uc3R5bGUudG9wPVwiMHB4XCIsby5zdHlsZS5sZWZ0PVwiMHB4XCIsby5zdHlsZS53aWR0aD1yK1wicHhcIixvLnN0eWxlLmhlaWdodD1uK1wicHhcIixlLmN1cnNvcj9vLnN0eWxlLmN1cnNvcj1lLmN1cnNvcjpvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLm1hcmdpbj1cIjBweFwiLG8uc3R5bGUucGFkZGluZz1cIjBweFwiLG8uc3R5bGUuYm94U2l6aW5nPVwiY29udGVudC1ib3hcIixvLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsby5vbm1vdXNlZG93bj1mdW5jdGlvbihlKXtvLl9pc01vdXNlRG93bj0hMCxvLl9oYW5kbGVGb2N1c0RyYXdpbmcoXCJvbm1vdXNlZG93blwiKX0sby5vbm1vdXNlb3V0PWZ1bmN0aW9uKGUpe28uX2lzTW91c2VEb3duPSExLG8uX2hhbmRsZUZvY3VzRHJhd2luZyhcIm9ubW91c2VvdXRcIil9LG8ub25tb3VzZW92ZXI9ZnVuY3Rpb24oZSl7by5faGFuZGxlSG92ZXJEcmF3aW5nKCl9LG8ub25tb3VzZXVwPWZ1bmN0aW9uKGUpe28uX2lzTW91c2VEb3duPSExLG8uX2hhbmRsZUZvY3VzRHJhd2luZyhcIm9ubW91c2V1cFwiKX0sby5fb25UYWtlRm9jdXM9ZnVuY3Rpb24oKXtvLl9oYXNGcmFtZUZvY3VzPSEwLG8uX2hhbmRsZUZvY3VzRHJhd2luZyhcIl9vblRha2VGb2N1c1wiKX0sby5fb25SZWxlYXNlRm9jdXM9ZnVuY3Rpb24oKXtvLl9oYXNGcmFtZUZvY3VzPSExLG8uX2hhbmRsZUZvY3VzRHJhd2luZyhcIl9vblJlbGVhc2VGb2N1c1wiKX0sby5faGFuZGxlRm9jdXNEcmF3aW5nPWZ1bmN0aW9uKGUpe28uX2hhc0ZyYW1lRm9jdXM/by5faXNNb3VzZURvd24/KG8uc3R5bGUuYm9yZGVyQ29sb3I9YyxvLnN0eWxlLmJvcmRlclN0eWxlPWYsby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9dixvLnN0eWxlLmNvbG9yPVMsRiYmcyhGLG8pKTooby5zdHlsZS5ib3JkZXJDb2xvcj1kLG8uc3R5bGUuYm9yZGVyU3R5bGU9cCxvLnN0eWxlLmJhY2tncm91bmRDb2xvcj1iLG8uc3R5bGUuY29sb3I9SSx4JiZzKHgsbykpOm8uX2lzTW91c2VEb3duPyhvLnN0eWxlLmJvcmRlckNvbG9yPWMsby5zdHlsZS5ib3JkZXJTdHlsZT1mLG8uc3R5bGUuYmFja2dyb3VuZENvbG9yPXYsby5zdHlsZS5jb2xvcj1TLEYmJnMoRixvKSk6KG8uc3R5bGUuYm9yZGVyQ29sb3I9bCxvLnN0eWxlLmJvcmRlclN0eWxlPW0sby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9eSxvLnN0eWxlLmNvbG9yPVQsdyYmcyh3LG8pKX0sby5faGFuZGxlSG92ZXJEcmF3aW5nPWZ1bmN0aW9uKCl7by5faGFzRnJhbWVGb2N1cyx1JiYoby5zdHlsZS5ib3JkZXJDb2xvcj11KSxoJiYoby5zdHlsZS5ib3JkZXJTdHlsZT1oKSxnJiYoby5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9ZyksXyYmKG8uc3R5bGUuY29sb3I9XyksQSYmcyhBLG8pfSxvLnN0eWxlLnBhZGRpbmc9XCIwcHhcIixvLnN0eWxlLnRleHRBbGlnbj1cImNlbnRlclwiLG8uc3R5bGUuZm9udFNpemU9bipNK1wicHhcIixvLnN0eWxlLmxpbmVIZWlnaHQ9bitcInB4XCIsby5zdHlsZS5ib3JkZXJXaWR0aD1cIjFweFwiLG51bGwhPWEmJihvLnN0eWxlLmJvcmRlcldpZHRoPWErXCJweFwiKSxudWxsIT1DJiYoby5zdHlsZS5ib3hTaGFkb3c9Qyksby5zdHlsZS5ib3JkZXJSYWRpdXM9aStwYXJzZUludChvLnN0eWxlLmJvcmRlcldpZHRoKStcInB4XCI7aWYodylzKHcsbyk7ZWxzZSBpZihFKXsoaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSkuc3R5bGUud2lkdGg9XCIxMDAlXCIsay5zdHlsZS5tYXJnaW5Ub3A9RCtcInB4XCIsay5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIsay5zdHlsZS50ZXh0QWxpZ249XCJjZW50ZXJcIixrLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShFKSksby5hcHBlbmRDaGlsZChrKX1lbHNlIGlmKEIpe3ZhciBrOyhrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpKS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGsuc3R5bGUud2lkdGg9XCIxMDAlXCIsay5zdHlsZS5tYXJnaW5Ub3A9RCtcInB4XCIsay5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIsay5zdHlsZS50ZXh0QWxpZ249XCJjZW50ZXJcIixrLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsay5pbm5lckhUTUw9JzxpIGNsYXNzPVwiJytCKydcIj48L2k+JyxvLmFwcGVuZENoaWxkKGspfWVsc2UgMDtyZXR1cm4gby5faGFuZGxlRm9jdXNEcmF3aW5nKCksb30sZS5leHBvcnRzPWx9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTE0LHRoaXMud2lkdGg9bnVsbCx0aGlzLmhlaWdodD1udWxsLHRoaXMuYm9yZGVyUmFkaXVzPTIsdGhpcy5ib3JkZXJXaWR0aD0wLHRoaXMuYm9yZGVyQ29sb3JEZWZhdWx0PVwiI2FhYWFhYVwiLHRoaXMuYm9yZGVyQ29sb3JGb2N1c2VkPXRoaXMuYm9yZGVyQ29sb3JEZWZhdWx0LHRoaXMuYm9yZGVyQ29sb3JIb3ZlcmVkPW51bGwsdGhpcy5ib3JkZXJDb2xvclByZXNzZWQ9dGhpcy5ib3JkZXJDb2xvckRlZmF1bHQsdGhpcy5ib3JkZXJTdHlsZURlZmF1bHQ9XCJzb2xpZFwiLHRoaXMuYm9yZGVyU3R5bGVGb2N1c2VkPXRoaXMuYm9yZGVyU3R5bGVEZWZhdWx0LHRoaXMuYm9yZGVyU3R5bGVIb3ZlcmVkPW51bGwsdGhpcy5ib3JkZXJTdHlsZVByZXNzZWQ9dGhpcy5ib3JkZXJTdHlsZURlZmF1bHQsdGhpcy5iYWNrZ3JvdW5kQm94U2hhZG93PW51bGwsdGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0PVwidHJhbnNwYXJlbnRcIix0aGlzLmJhY2tncm91bmRDb2xvckZvY3VzZWQ9dGhpcy5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0LHRoaXMuYmFja2dyb3VuZENvbG9ySG92ZXJlZD1udWxsLHRoaXMuYmFja2dyb3VuZENvbG9yUHJlc3NlZD10aGlzLmJhY2tncm91bmRDb2xvckRlZmF1bHQsdGhpcy5jYXB0aW9uPW51bGwsdGhpcy5jYXB0aW9uQ29sb3JEZWZhdWx0PVwid2hpdGVcIix0aGlzLmNhcHRpb25Db2xvckZvY3VzZWQ9dGhpcy5jYXB0aW9uQ29sb3JEZWZhdWx0LHRoaXMuY2FwdGlvbkNvbG9ySG92ZXJlZD1udWxsLHRoaXMuY2FwdGlvbkNvbG9yUHJlc3NlZD10aGlzLmNhcHRpb25Db2xvckRlZmF1bHQsdGhpcy5jYXB0aW9uU2hpZnRZcHg9MCx0aGlzLmNhcHRpb25Gb250UmF0aW89MX19LGZ1bmN0aW9uKGUsdCl7dmFyIHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX07ZnVuY3Rpb24gbihlLHQscil7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09PSh2b2lkIDA9PT1lP1widW5kZWZpbmVkXCI6cihlKSkmJiFBcnJheS5pc0FycmF5KGUpfWUuZXhwb3J0cy5vYmplY3RBc3NpZ249ZnVuY3Rpb24gZSh0KXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxhPUFycmF5KHI+MT9yLTE6MCksaT0xO2k8cjtpKyspYVtpLTFdPWFyZ3VtZW50c1tpXTtpZighYS5sZW5ndGgpcmV0dXJuIHQ7dmFyIGw9YS5zaGlmdCgpO2lmKG8odCkmJm8obCkpZm9yKHZhciBzIGluIGwpbyhsW3NdKT8odFtzXXx8T2JqZWN0LmFzc2lnbih0LG4oe30scyx7fSkpLGUodFtzXSxsW3NdKSk6T2JqZWN0LmFzc2lnbih0LG4oe30scyxsW3NdKSk7cmV0dXJuIGUuYXBwbHkodm9pZCAwLFt0XS5jb25jYXQoYSkpfX0sZnVuY3Rpb24oZSx0LHIpe2UuZXhwb3J0cz17SlNGcmFtZTpyKDExKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtyKDEyKTt2YXIgbj1yKDE0KSxvPXIoMyksYT1yKDE1KSxpPXIoNiksbD1yKDE3KSxzPXIoNyksZD1yKDQpLHU9cig1KSxjPXt5b3NlbWl0ZTpyKDIxKSxyZWRzdG9uZTpyKDI0KSxwb3B1cDpyKDI3KSx0b2FzdDpyKDMwKSxtYXRlcmlhbDpyKDMxKX0sbT17eW9zZW1pdGU6cigzNCl9LHA9e307ZnVuY3Rpb24gaChlLHQscixuLG8sYSxpLGwpe3ZhciBzPXRoaXM7aWYocy5tb3ZhYmxlPSEwLHMuaWQ9ZSxzLnByb3BlcnR5PXt9LHMuZXh0cmE9e30scy5wYXJlbnRDYW52YXM9bnVsbCxzLmh0bWxFbGVtZW50PW51bGwscy5wdWxsVXBEaXNhYmxlZD0hMSxsJiYocy5wdWxsVXBEaXNhYmxlZD1sLnB1bGxVcERpc2FibGVkKSxzLmh0bWxFbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocC5DQkVBTi5IVE1MX0VMRU1FTlQpLHMuaHRtbEVsZW1lbnQuaWQ9cC5DQkVBTi5IVE1MX0VMRU1FTlRfSURfUFJFRklYK2Uscy5odG1sRWxlbWVudC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIscy5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PXBhcnNlSW50KHQsMTApK1wicHhcIixzLmh0bWxFbGVtZW50LnN0eWxlLnRvcD1wYXJzZUludChyLDEwKStcInB4XCIscy5odG1sRWxlbWVudC5zdHlsZS53aWR0aD1wYXJzZUludChuLDEwKStcInB4XCIscy5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQ9cGFyc2VJbnQobywxMCkrXCJweFwiLG51bGwhPT1hJiYocy5odG1sRWxlbWVudC5zdHlsZS56SW5kZXg9YSkscy5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvcj1cIiMwMDAwMDBcIixzLmh0bWxFbGVtZW50LnN0eWxlLmZvbnRTaXplPVwiMXB4XCIscy5odG1sRWxlbWVudC5wYXJlbnQ9cyxzLmh0bWxFbGVtZW50Lm9ubW91c2Vkb3duPXMub25tb3VzZURvd24sXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvdyl7cy5odG1sRWxlbWVudC5vbnRvdWNoc3RhcnQ9ZnVuY3Rpb24oZSl7cy5vbm1vdXNlRG93bi5iaW5kKHRoaXMpKGUpfX1zLmh0bWxFbGVtZW50LnR5cGVOYW1lPXAuQ0JFQU4uVFlQRV9OQU1FLHMuaHRtbEVsZW1lbnQudXNhZ2U9XCJub3RoaW5nXCIscy5odG1sRWxlbWVudC5pc1JhbmdlTGltaXRlZD0hMSxzLmh0bWxFbGVtZW50LmFyZ1g9MSxzLmh0bWxFbGVtZW50LmFyZ1k9MSxzLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lcj1udWxsLHMub25Nb3ZlTGlzdGVuZXI9bnVsbH1mdW5jdGlvbiBmKGUsdCxyLG4sbyxhKXt2YXIgaT10aGlzO2kuZW5hYmxlUHVsbFVwPSEwLGkuY3VycmVudE9iamVjdD1udWxsLGkub25Ub3BPYmplY3Q9bnVsbCxpLm9mZnNldFg9MCxpLm9mZnNldFk9MCxpLm1vdXNlRG93blNvdXJjZT1udWxsLGkuaWQ9dCxpLmNhbnZhc0VsZW1lbnQ9bnVsbCxpLnBhcmVudEVsZW1lbnQ9ZSxpLmJlYW5MaXN0PW5ldyBBcnJheSxpLmJlYW5JZE5hbWU9e30saS5iZWFuTmFtZUlkPXt9LGkuZXZlbnREYXRhPW5ldyBmdW5jdGlvbigpe3RoaXMueD0wLHRoaXMueT0wLHRoaXMuc2NyZWVuWD0wLHRoaXMuc2NyZWVuWT0wLHRoaXMuZGVsdGFYPTAsdGhpcy5kZWx0YVk9MCx0aGlzLmlzTW92ZWQ9ITEsdGhpcy50YXJnZXRUeXBlTmFtZT1udWxsLHRoaXMudGFyZ2V0VXNhZ2U9bnVsbCx0aGlzLnRhcmdldE9iamVjdD1udWxsfSxpLmJhc2VaSW5kZXg9MCxpLnNldEJhc2VaSW5kZXg9ZnVuY3Rpb24oZSl7aS5iYXNlWkluZGV4PWV9LGkuZ2V0QmFzZVpJbmRleD1mdW5jdGlvbigpe3JldHVybiBpLmJhc2VaSW5kZXh9LGkuY2FudmFzRWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHAuQ0FOVkFTLkhUTUxfRUxFTUVOVCksaS5jYW52YXNFbGVtZW50LnN0eWxlLnpJbmRleD0yZTMsaS5jYW52YXNFbGVtZW50LmlkPWkuaWQsaS5jYW52YXNFbGVtZW50LnN0eWxlLmJveFNpemluZz1cImJvcmRlci1ib3hcIixpLmNhbnZhc0VsZW1lbnQuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGkuY2FudmFzRWxlbWVudC5zdHlsZS5sZWZ0PXBhcnNlSW50KHIpK1wicHhcIixpLmNhbnZhc0VsZW1lbnQuc3R5bGUudG9wPXBhcnNlSW50KG4pK1wicHhcIixpLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGg9cGFyc2VJbnQobykrcC5DQU5WQVMuV0lEVEhfQURKVVNUXzIwMTgwNzIyK1wicHhcIixpLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0PXBhcnNlSW50KGEpK3AuQ0FOVkFTLkhFSUdIVF9BREpVU1RfMjAxODA3MjIrXCJweFwiLGkuY2FudmFzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ0cmFuc3BhcmVudFwiLGkuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZT1cIm5vbmVcIixpLmNhbnZhc0VsZW1lbnQuc3R5bGUubWFyZ2luPVwiMHB4XCIsaS5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoPVwiMHB4XCIsaS5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yPVwidHJhbnNwYXJlbnRcIixpLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaS5jYW52YXNFbGVtZW50KX1mdW5jdGlvbiB5KGUsdCxyLG4sYSxpLGwscyl7dmFyIGQ9dGhpczt5LnN1cGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLGUsdCxyLG4sYSxpLGwscyksZC5hbmNob3I9by5MRUZUX1RPUCxkLnNob3dUaXRsZUJhcj1zLnNob3dUaXRsZUJhcixkLmNhbnZhc05ldEhlaWdodD1udWxsLGQuY2FudmFzTmV0V2lkdGg9bnVsbCxkLmZyYW1lSGVpZ2h0QWRqdXN0PXMuZnJhbWVIZWlnaHRBZGp1c3QsZC5mcmFtZUNvbXBvbmVudE1hcD17fSxkLmNhbnZhcz1udWxsLGQubXlDYW52YXNJZD1udWxsLGQuZmxvYXRpbmdCdXR0b249bnVsbCxkLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdD1cImpzZnJhbWUtdGl0bGViYXItZGVmYXVsdFwiLGQudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkPVwianNmcmFtZS10aXRsZWJhci1mb2N1c2VkXCIsZC50aXRsZUJhckhlaWdodD1zLnRpdGxlQmFySGVpZ2h0LGQudGl0bGVCYXJDYXB0aW9uPXMudGl0bGVCYXJDYXB0aW9uLGQudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbj1zLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4sZC50aXRsZUJhckNhcHRpb25Gb250U2l6ZT1zLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplLGQudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodD1zLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQsZC50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ9cy50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQsZC50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQ9cy50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQsZC50aXRsZUJhckNhcHRpb25UZXh0U2hhZG93PXMudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdyxkLnRpdGxlQmFyQ2FwdGlvblRleHRBbGlnbj1zLnRpdGxlQmFyQ2FwdGlvblRleHRBbGlnbixkLnRpdGxlQWRqdXN0V2lkdGg9MixkLndpbmRvd0lkPWUsZC5leEJvcmRlcldpZHRoPTAsZC5teUNhbnZhc0lkPWUrXCJfY2FudmFzXCI7dmFyIHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtpZih1LnNyYz1cIlwiLHUuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLHUuc3R5bGUubGVmdD1cIjJweFwiLHUuc3R5bGUudG9wPVwiMnB4XCIsdS5zdHlsZS53aWR0aD1cIjE2cHhcIix1LnN0eWxlLmhlaWdodD1cIjE2cHhcIix1LnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIixkLnRpdGxlQmFyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZC50aXRsZUJhci5jbGFzc05hbWU9XCJqc2ZyYW1ldGl0bGViYXJcIixkLnNob3dUaXRsZUJhcil7aWYoZC50aXRsZUJhci5pZD1lK1wiX3RpdGxlXCIsZC50aXRsZUJhci5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZC50aXRsZUJhci5zdHlsZS5ib3hTaXppbmc9XCJib3JkZXItYm94XCIsZC50aXRsZUJhci5zdHlsZS50b3A9XCIwcHhcIixkLnRpdGxlQmFyLnN0eWxlLmxlZnQ9XCIwcHhcIixkLnRpdGxlQmFyLnN0eWxlLndpZHRoPW4tZC50aXRsZUFkanVzdFdpZHRoK3AuQ0FOVkFTLldJRFRIX0FESlVTVF8yMDE4MDcyMitcInB4XCIsZC50aXRsZUJhci5zdHlsZS51c2VyU2VsZWN0PVwibm9uZVwiLGQudGl0bGVCYXJIZWlnaHQpe3ZhciBjPTA7ZC50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQmJihjPTApLGQudGl0bGVCYXIuc3R5bGUuaGVpZ2h0PXBhcnNlSW50KGQudGl0bGVCYXJIZWlnaHQsMTApKzArXCJweFwifWQudGl0bGVCYXJDb2xvckRlZmF1bHQmJihkLnRpdGxlQmFyLnN0eWxlLmJhY2tncm91bmQ9ZC50aXRsZUJhckNvbG9yRGVmYXVsdCksZC50aXRsZUJhci5zdHlsZS56SW5kZXg9MCxkLnRpdGxlQmFyLnN0eWxlLmNvbG9yPWQudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0LGQudGl0bGVCYXIuc3R5bGUuZm9udFNpemU9ZC50aXRsZUJhckNhcHRpb25Gb250U2l6ZSxkLnRpdGxlQmFyLnN0eWxlLmZvbnRXZWlnaHQ9ZC50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0LGQudGl0bGVCYXIuc3R5bGUudGV4dFNoYWRvdz1kLnRpdGxlQmFyQ2FwdGlvblRleHRTaGFkb3csZC50aXRsZUJhci5zdHlsZS50ZXh0QWxpZ249ZC50aXRsZUJhckNhcHRpb25UZXh0QWxpZ24sZC50aXRsZUJhci5zdHlsZS5saW5lSGVpZ2h0PWQudGl0bGVCYXIuc3R5bGUuaGVpZ2h0LGQudGl0bGVCYXIuc3R5bGUuYm9yZGVyQm90dG9tPWQudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0LGQudGl0bGVCYXIuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjt2YXIgbT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSxoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2guaWQ9ZC5pZCtcIl90aXRsZUJhclRleHRcIixudWxsIT1kLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4/KGguc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGguc3R5bGUubGVmdD1wYXJzZUludChkLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4sMTApK1wicHhcIik6KGguc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGguc3R5bGUubGVmdD1cIjBweFwiLGguc3R5bGUucmlnaHQ9XCIwcHhcIiksaC5zdHlsZS50b3A9XCIwcHhcIixoLmFwcGVuZENoaWxkKG0pLGQudGl0bGVCYXIuYXBwZW5kQ2hpbGQoaCl9ZC5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChkLnRpdGxlQmFyKTt2YXIgYj1wYXJzZUludChkLnRpdGxlQmFySGVpZ2h0LDEwKS1jLGc9cGFyc2VJbnQoZC50aXRsZUFkanVzdFdpZHRoLDEwKTtpZihkLnNob3dUaXRsZUJhcnx8KGI9MCxnPTAsYz0wKSxkLmNhbnZhc05ldFdpZHRoPW4tZyxkLmNhbnZhc05ldEhlaWdodD1hLWItZy0xLWMrZC5mcmFtZUhlaWdodEFkanVzdCxkLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvcj1cIm1vdmVcIixkLmNhbnZhcz1uZXcgZihkLmh0bWxFbGVtZW50LGQubXlDYW52YXNJZCwwLGIsbi1nLGEtYi1nKSxkLmNhbnZhcy5lbmFibGVQdWxsVXA9ITEsZC5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9cC5DRlJBTUUuQ0FOVkFTX0VMRU1FTlRfQkdDT0xPUixkLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmN1cnNvcj1cImRlZmF1bHRcIixkLmNhbnZhcy5jYW52YXNFbGVtZW50Lm9ubW91c2Vkb3duPWQuY2FudmFzTW91c2VEb3duLFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3cpe2QuY2FudmFzLmNhbnZhc0VsZW1lbnQub250b3VjaHN0YXJ0PWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2hhbmdlZFRvdWNoZXNbMF07ZC5jYW52YXNNb3VzZURvd24uYmluZCh0aGlzKSh0KX19ZC5jYW52YXMuY2FudmFzRWxlbWVudC5wYXJlbnRDRnJhbWU9ZDt2YXIgQyxCLEUsdz1wYXJzZUludChkLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLDEwKSx4PXBhcnNlSW50KGQuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LDEwKSxBPXMucmVzaXplQXJlYVdpZHRoLEY9cy5yZXNpemVBcmVhSGVpZ2h0LFQ9cy5yZXNpemVBcmVhT2Zmc2V0O3MucmVzaXplQXJlYVZpc2libGUmJihDPVwicmdiYSgyNTUsIDAsIDAsIDAuNSlcIixCPVwicmdiYSgwLCAwLCAyNTUsIDAuNSlcIixFPVwicmdiYSgwLCAyNTUsIDAsIDAuNSlcIik7dmFyIEk9bmV3IHYoZC5teUNhbnZhc0lkK1wiX1JEXCIsdytULHgrVCxBLEYsMCxcIlJEXCIsQyk7SS5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3I9XCJzZS1yZXNpemVcIixJLmh0bWxFbGVtZW50LmFyZ1g9MCxJLmh0bWxFbGVtZW50LmFyZ1k9MDt2YXIgXz1uZXcgdihkLm15Q2FudmFzSWQrXCJfRERcIiwwLHgrVCx3K1QsRiwwLFwiRERcIixCKTtfLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvcj1cIm4tcmVzaXplXCIsXy5odG1sRWxlbWVudC5hcmdYPTAsXy5odG1sRWxlbWVudC5hcmdZPTA7dmFyIFM9bmV3IHYoZC5teUNhbnZhc0lkK1wiX1JSXCIsdytULDAsQSx4K1QsMCxcIlJSXCIsRSk7Zm9yKHZhciBEIGluIFMuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yPVwidy1yZXNpemVcIixTLmh0bWxFbGVtZW50LmFyZ1k9MCxTLmh0bWxFbGVtZW50LmFyZ1g9MCxkLmNhbnZhcy5hZGRCZWFuKEkpLGQuY2FudmFzLmFkZEJlYW4oXyksZC5jYW52YXMuYWRkQmVhbihTKSxkLnJlbW92ZU1hcmtlcnM9ZnVuY3Rpb24oKXtkLmNhbnZhcy5yZW1vdmVCZWFuKEkuaWQpLGQuY2FudmFzLnJlbW92ZUJlYW4oXy5pZCksZC5jYW52YXMucmVtb3ZlQmVhbihTLmlkKSxkLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvcj1cImRlZmF1bHRcIn0sZC5yZW1vdmVNYXJrZXJzMj1mdW5jdGlvbigpe2QuY2FudmFzLnJlbW92ZUJlYW4oSS5pZCksZC5jYW52YXMucmVtb3ZlQmVhbihfLmlkKSxkLmNhbnZhcy5yZW1vdmVCZWFuKFMuaWQpfSxkLmVuYWJsZU1hcmtlcnM9ZnVuY3Rpb24oZSl7ZT8oSS5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLF8uaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheT1cImZsZXhcIixTLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsSS5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3I9XCJzZS1yZXNpemVcIixfLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvcj1cIm4tcmVzaXplXCIsUy5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3I9XCJ3LXJlc2l6ZVwiKTooSS5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLF8uaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixTLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJub25lXCIpfSxzLmZyYW1lQ29tcG9uZW50cyl7dmFyIE09cy5mcmFtZUNvbXBvbmVudHNbRF07TS5zZXRGcmFtZShkKSxcImNsb3NlQnV0dG9uXCI9PU0uaWQmJihNLmh0bWxFbGVtZW50Lm9uY2xpY2s9ZC5jbG9zZSksTS5odG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzZnJhbWUtY2hpbGQtbWVudVwiKSYmZC5ldmVudExpc3RlbmVySGVscGVyLmFkZEV2ZW50TGlzdGVuZXIoTS5odG1sRWxlbWVudCxcImNsaWNrXCIsKGZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbXBvbmVudC1pZFwiKTtpZihkLmhpZGVGcmFtZUNvbXBvbmVudENoaWxkTWVudXMoe2V4Y2VwdEZyYW1lQ29tcG9uZW50SWQ6dH0pLHQpe3ZhciByPWQuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50KHQpLnF1ZXJ5U2VsZWN0b3IoXCIuanNmcmFtZS1jaGlsZC1tZW51XCIpO3ImJihcInRhYmxlXCI9PXIuc3R5bGUuZGlzcGxheT9yLnN0eWxlLmRpc3BsYXk9XCJub25lXCI6ci5zdHlsZS5kaXNwbGF5PVwidGFibGVcIil9fSkse2xpc3RlbmVyTmFtZTpcImZyYW1lLWNvbXBvbmVudF9jaGlsZC1tZW51LWxpc3RlbmVyXCJ9KSxkLmFkZEZyYW1lQ29tcG9uZW50KE0pfWQuaHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIixkLmh0bWxFbGVtZW50Lm9uY29udGV4dG1lbnU9dGhpcy5jb250ZXh0TWVudTtkLmNhcmliVmFsdWU9MCxkLmV4Qm9yZGVyV2lkdGgmJihkLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoPWQuZXhCb3JkZXJXaWR0aCtcInB4XCIpLGQuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGg9cGFyc2VJbnQoZC5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwxMCktMCtcInB4XCIsZC5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQ9cGFyc2VJbnQoZC5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsMTApLTArMStcInB4XCIsZC5odG1sRWxlbWVudC50eXBlTmFtZT1cImN3aW5kb3dcIixkLmh0bWxFbGVtZW50Lm92ZXJmbG93PVwiYXV0b1wiLGQuaHRtbEVsZW1lbnQuc3R5bGUuYm94U2l6aW5nPVwiY29udGVudC1ib3hcIixzLmZyYW1lQm9yZGVyU3R5bGUmJihkLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlPXMuZnJhbWVCb3JkZXJTdHlsZSkscy5mcmFtZUJveFNoYWRvdyYmKGQuaHRtbEVsZW1lbnQuc3R5bGUuYm94U2hhZG93PXMuZnJhbWVCb3hTaGFkb3cpLHBhcnNlSW50KHMuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsMTApPj0wJiYoZC5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aD1zLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0LGQuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3I9cy5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCkscGFyc2VJbnQocy5mcmFtZUJvcmRlclJhZGl1cywxMCk+PTAmJihkLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cz1zLmZyYW1lQm9yZGVyUmFkaXVzKSxkLm9uQ2xvc2VGcmFtZUxpc3RlbmVyPW51bGx9ZnVuY3Rpb24gYihlLHQscixvLGEsaSl7dmFyIGw9dCxzPXIsZD1vLGM9YSxtPWkuemluZGV4LHA9dGhpczt0aGlzLmpzRnJhbWU9bnVsbCx0aGlzLmNvbnRyb2w9bnVsbCx0aGlzLm1pbkZyYW1lV2lkdGg9MTI4LHRoaXMubWluV2luZG93SGVpZ2h0PTMyLHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlcj1uZXcgdSx0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQ9ITEsdGhpcy5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZT0hMCx0aGlzLnRpdGxlQmFyQ29sb3JGb2N1c2VkPWkudGl0bGVCYXJDb2xvckZvY3VzZWQsdGhpcy50aXRsZUJhckNvbG9yRGVmYXVsdD1pLnRpdGxlQmFyQ29sb3JEZWZhdWx0LHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0PWkudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0LHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkPWkudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkLGIuc3VwZXJDb25zdHJ1Y3Rvci5jYWxsKHAsZSxsLHMsZCxjLG0sbnVsbCxpKSxwLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0PWkuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQscC5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZD1pLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkLHAuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ9aS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCxwLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkPWkuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQscC5pZnJhbWU9bnVsbCxwLmlmRGVsdGE9MCxwLnJlc2l6YWJsZT0hMCxwLm9uTW91c2VNb3ZlT25JZnJhbWU9bnVsbCxwLm9uTW91c2VVcE9uSWZyYW1lPW51bGwscC5faGFzRm9jdXM9ITEscC5faGFzRm9jdXNUaW1lPTAscC5odG1sRWxlbWVudC50eXBlTmFtZT1cImNpZndpbmRvd1wiO3ZhciBoPVwicml2ZXJzdW5fXCIrZTtwLmRmcmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHAuaWZyYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIikscC5pZnJhbWUubmFtZT1oLHAuaWZyYW1lLmlkPWgscC5pZnJhbWUuZnJhbWVCb3JkZXI9XCIwXCIscC5pZnJhbWUuekluZGV4PS0xLHAuaWZyYW1lLmFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiLHAuaWZyYW1lLndpZHRoPXAuY2FudmFzTmV0V2lkdGgtcC5pZkRlbHRhKzAscC5pZnJhbWUuaGVpZ2h0PXAuY2FudmFzTmV0SGVpZ2h0LXAuaWZEZWx0YSswLHAuc2hvd1RpdGxlQmFyPWkuc2hvd1RpdGxlQmFyLHAuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cz1pLmdldEZyYW1lSW5uZXJCb3JkZXJSYWRpdXMscC5mcmFtZUJvcmRlclJhZGl1cz1pLmZyYW1lQm9yZGVyUmFkaXVzLHAuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKSxwLnVzZUlmcmFtZT0hMSxwLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKHAuaWZyYW1lKSxwLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKHAuZGZyYW1lKSx0aGlzLnNldFVzZUlmcmFtZT1mdW5jdGlvbihlKXtwLnVzZUlmcmFtZT1lLHAuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIixwLmlmcmFtZS5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIscC5pZnJhbWUuc3R5bGUubGVmdD1cIjBweFwiLHAuaWZyYW1lLnN0eWxlLnRvcD1cIjBweFwiLHAuaWZyYW1lLnN0eWxlLndpZHRoPVwiMTAwJVwiLHAuaWZyYW1lLnN0eWxlLmhlaWdodD1cIjEwMCVcIixwLmRmcmFtZS5zdHlsZS52aXNpYmlsaXR5PVwiaGlkZGVuXCIscC5kZnJhbWUuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLHAuZGZyYW1lLnN0eWxlLmxlZnQ9XCIwcHhcIixwLmRmcmFtZS5zdHlsZS5ib3hTaXppbmc9XCJjb250ZW50LWJveFwiLHAuZGZyYW1lLnN0eWxlLnRvcD1cIjBweFwiLHAuZGZyYW1lLnN0eWxlLndpZHRoPVwiMTAwJVwiLHAuZGZyYW1lLnN0eWxlLmhlaWdodD1cIjEwMCVcIixwLmRmcmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiLGU/KHAuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIscC5kZnJhbWUuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiKToocC5pZnJhbWUuc3R5bGUudmlzaWJpbGl0eT1cImhpZGRlblwiLHAuZGZyYW1lLnN0eWxlLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIpfSxwLnNldFVzZUlmcmFtZShpLnVzZUlmcmFtZSksKHAub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZHx8cC5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkmJihwLnRyYW5zcGFyZW5jZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxwLnRyYW5zcGFyZW5jZS5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIscC50cmFuc3BhcmVuY2Uuc3R5bGUubGVmdD1cIjBweFwiLHAudHJhbnNwYXJlbmNlLnN0eWxlLnRvcD1cIjBweFwiLHAudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoPVwiMHB4XCIscC50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0PVwiMHB4XCIscC50cmFuc3BhcmVuY2Uuc3R5bGUuekluZGV4PTQscC50cmFuc3BhcmVuY2Uuc3R5bGUuYm9yZGVyV2lkdGg9XCIwcHhcIixwLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJDb2xvcj1cIiNmZjAwZWVcIixwLnRyYW5zcGFyZW5jZS5zdHlsZS5ib3JkZXJTdHlsZT1cIm5vbmVcIixwLnRyYW5zcGFyZW5jZS5zdHlsZS5jdXJzb3I9XCJkZWZhdWx0XCIscC50cmFuc3BhcmVuY2Uuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixwLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj1pLmZyYW1lQmFja2dyb3VuZENvbG9yLHAuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQocC50cmFuc3BhcmVuY2UpKSxwLmV2ZW50RW1pdHRlcj1uZXcgbixwLmFwcGVhcmFuY2U9aX1mdW5jdGlvbiBnKGUsdCxyLG4sbyxhKXtnLnN1cGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLGUsdCxyLG4sbyxhKTt2YXIgaT10aGlzO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChmdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gaS5iZWFuTGlzdCl7aS5iZWFuTGlzdFt0XS5vbkJvZHlDbGlja2VkKGUpfX0pKX1mdW5jdGlvbiB2KGUsdCxyLG4sbyxhLGksbCl7dmFyIHM9dGhpczt2LnN1cGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLGUsdCxyLG4sbyxhLGkpLHMuaHRtbEVsZW1lbnQudHlwZU5hbWU9XCJjbWFya2Vyd2luZG93XCIscy5odG1sRWxlbWVudC51c2FnZT1pLHMuaHRtbEVsZW1lbnQuaXNSYW5nZUxpbWl0ZWQ9ITEscy5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZT1cIm5vbmVcIixzLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleD0xLGwmJihzLmh0bWxFbGVtZW50LnN0eWxlLmJhY2tncm91bmQ9bCkscy5nZXRXaW5kb3dUeXBlPWZ1bmN0aW9uKCl7cmV0dXJuXCJDTWFya2VyV2luZG93XCJ9fWZ1bmN0aW9uIEMoZSl7dmFyIHQscj10aGlzLG49bnVsbDsoci5pc1dpbmRvd01hbmFnZXJGaXhlZD0hMCxlJiYwPT1lLmZpeGVkJiYoci5pc1dpbmRvd01hbmFnZXJGaXhlZD0hMSksZSYmZS5wYXJlbnRFbGVtZW50JiYobj1lLnBhcmVudEVsZW1lbnQpLHIuaEFsaWduPVwibGVmdFwiLHIudkFsaWduPVwidG9wXCIsZSYmZS5ob3Jpem9udGFsQWxpZ24mJihyLmhBbGlnbj1lLmhvcml6b250YWxBbGlnbiksZSYmZS52ZXJ0aWNhbEFsaWduJiYoci52QWxpZ249ZS52ZXJ0aWNhbEFsaWduKSxyLnB1bGxUb1JlZnJlc2g9ITEsZSYmXCJib29sZWFuXCI9PXR5cGVvZiBlLnB1bGxUb1JlZnJlc2gmJihyLnB1bGxUb1JlZnJlc2g9ZS5wdWxsVG9SZWZyZXNoKSxyLnRvdWNoQWN0aW9uTWFuaXB1bGF0aW9uPSEwLGUmJlwiYm9vbGVhblwiPT10eXBlb2YgZS50b3VjaEFjdGlvbk1hbmlwdWxhdGlvbiYmKHIudG91Y2hBY3Rpb25NYW5pcHVsYXRpb249ZS50b3VjaEFjdGlvbk1hbmlwdWxhdGlvbiksbik/ci5pc1dpbmRvd01hbmFnZXJGaXhlZD8oKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaWQ9XCJqc0ZyYW1lX2ZpeGVkX1wiK3IuZ2VuZXJhdGVVVUlEKCksdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwicG9zaXRpb246Zml4ZWQ7XCIrci5oQWxpZ24rXCI6MHB4O1wiK3IudkFsaWduK1wiOjBweDttYXJnaW46MHB4O3BhZGRpbmc6MHB4O1wiKSxuLmFwcGVuZENoaWxkKHQpKTooKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaWQ9XCJqc0ZyYW1lX2Fic29sdXRlX1wiK3IuZ2VuZXJhdGVVVUlEKCksdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwicG9zaXRpb246YWJzb2x1dGU7XCIrci5oQWxpZ24rXCI6MHB4O1wiK3IudkFsaWduK1wiOjBweDttYXJnaW46MHB4O3BhZGRpbmc6MHB4O1wiKSxuLmFwcGVuZENoaWxkKHQpKTpyLmlzV2luZG93TWFuYWdlckZpeGVkPygodD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5pZD1cImpzRnJhbWVfZml4ZWRfXCIrci5nZW5lcmF0ZVVVSUQoKSx0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJwb3NpdGlvbjpmaXhlZDtcIityLmhBbGlnbitcIjowcHg7XCIrci52QWxpZ24rXCI6MHB4O21hcmdpbjowcHg7cGFkZGluZzowcHg7XCIpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCksbj10KTooKHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaWQ9XCJqc0ZyYW1lX2Fic29sdXRlX1wiK3IuZ2VuZXJhdGVVVUlEKCksdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwicG9zaXRpb246YWJzb2x1dGU7XCIrci5oQWxpZ24rXCI6MHB4O1wiK3IudkFsaWduK1wiOjBweDttYXJnaW46MHB4O3BhZGRpbmc6MHB4O1wiKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpLG49dCk7aWYoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixvKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsYSksXCJvbnRvdWNoZW5kXCJpbiB3aW5kb3cpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLChmdW5jdGlvbihlKXtvLmJpbmQodGhpcykoZSl9KSl9aWYoXCJvbnRvdWNobW92ZVwiaW4gd2luZG93KXtyLnRvdWNoQWN0aW9uTWFuaXB1bGF0aW9uJiZyLmRvRW5hYmxlVG91Y2hBY3Rpb25NYW5pcHVsYXRpb24oKSxyLnB1bGxUb1JlZnJlc2h8fHIuZG9EaXNhYmxlUHVsbFRvUmVmcmVzaCgpO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwoZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGEuYmluZCh0aGlzKShlKX0pKX1mdW5jdGlvbiBvKGUpe3Iud2luZG93TWFuYWdlci53aW5kb3dNb3VzZVVwKGUpfWZ1bmN0aW9uIGEoZSl7ci53aW5kb3dNYW5hZ2VyLndpbmRvd01vdXNlTW92ZShlKX1yLndpbmRvd01hbmFnZXI9bmV3IGcobixcIndpbmRvd01hbmFnZXJfXCIrci5nZW5lcmF0ZVVVSUQoKSwwLDAsMCwwKSxyLmRvbVBhcnRzQnVpbGRlcj1udWxsfXAuQ0JFQU49e30scC5DQkVBTi5IVE1MX0VMRU1FTlQ9XCJzcGFuXCIscC5DQkVBTi5IVE1MX0VMRU1FTlRfSURfUFJFRklYPVwiaHRtbEVsZW1lbnRfXCIscC5DQkVBTi5UWVBFX05BTUU9XCJiZWFuXCIsaC5wcm90b3R5cGUuZ2V0V2luZG93VHlwZT1mdW5jdGlvbigpe3JldHVyblwiQ0JlYW5GcmFtZVwifSxoLnByb3RvdHlwZS5zZXRPbk1vdmVMaXN0ZW5lcj1mdW5jdGlvbihlKXt0aGlzLm9uTW92ZUxpc3RlbmVyPWV9LGgucHJvdG90eXBlLl9vbk1vdmU9ZnVuY3Rpb24oZSl7dGhpcy5vbk1vdmVMaXN0ZW5lciYmdGhpcy5vbk1vdmVMaXN0ZW5lcihlKX0saC5wcm90b3R5cGUuc2V0TW92YWJsZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiBlPyh0Lmh0bWxFbGVtZW50LmFyZ1g9MSx0Lmh0bWxFbGVtZW50LmFyZ1k9MSk6KHQuaHRtbEVsZW1lbnQuYXJnWD0wLHQuaHRtbEVsZW1lbnQuYXJnWT0wKSx0Lm1vdmFibGU9ZSx0fSxoLnByb3RvdHlwZS5zZXRQYXJlbnRDYW52YXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50Q2FudmFzPWUsdGhpcy5odG1sRWxlbWVudC5wYXJlbnRDYW52YXM9dGhpcy5wYXJlbnRDYW52YXMsdGhpc30saC5wcm90b3R5cGUuc2V0T25FeHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyPWUsdGhpc30saC5wcm90b3R5cGUub25Cb2R5Q2xpY2tlZD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9ZS5wYWdlWCxuPWUucGFnZVksbz1wYXJzZUludCh0Lmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpLGE9cGFyc2VJbnQodC5odG1sRWxlbWVudC5zdHlsZS50b3ApLGk9cGFyc2VJbnQodC5odG1sRWxlbWVudC5zdHlsZS53aWR0aCksbD1wYXJzZUludCh0Lmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCk7bzxyJiZyPG8raSYmYTxuJiZuPGErbHx8dC5leHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXImJnQuZXh0ZXJuYWxBcmVhQ2xpY2tlZExpc3RlbmVyKCl9LGgucHJvdG90eXBlLm9ubW91c2VEb3duPWZ1bmN0aW9uKGUpe3ZhciB0PWU7aWYoXCJ0b3VjaHN0YXJ0XCI9PT1lLnR5cGUpe3ZhciByPWUuY2hhbmdlZFRvdWNoZXM7aWYoMSE9PWUudG91Y2hlcy5sZW5ndGgpcmV0dXJuITA7dD1yWzBdfXZhciBuPXRoaXMucGFyZW50O2lmKDA9PXQuYnV0dG9ufHxcInRvdWNoc3RhcnRcIj09PWUudHlwZSl7aWYobi5wdWxsVXBEaXNhYmxlZClyZXR1cm4hMTt0aGlzLnBhcmVudENhbnZhcy5jdXJyZW50T2JqZWN0PXRoaXMsdGhpcy5wYXJlbnRDYW52YXMucHVsbFVwKG4uaWQpfWVsc2UgaWYoMj09dC5idXR0b24pcmV0dXJuITE7cmV0dXJuIHRoaXMucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3QmJih0aGlzLnBhcmVudENhbnZhcy5vZmZzZXRYPXQucGFnZVgtcGFyc2VJbnQodGhpcy5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdC5zdHlsZS5sZWZ0LDEwKSx0aGlzLnBhcmVudENhbnZhcy5vZmZzZXRZPXQucGFnZVktcGFyc2VJbnQodGhpcy5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdC5zdHlsZS50b3AsMTApKSwhMX0scC5DQU5WQVM9e30scC5DQU5WQVMuSFRNTF9FTEVNRU5UPVwiZGl2XCIscC5DQU5WQVMuV0lEVEhfQURKVVNUXzIwMTgwNzIyPTIscC5DQU5WQVMuSEVJR0hUX0FESlVTVF8yMDE4MDcyMj0zLGYucHJvdG90eXBlLm1vdXNlTW92ZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9ZTtpZihcInRvdWNobW92ZVwiPT09ZS50eXBlKXt2YXIgbj1lLmNoYW5nZWRUb3VjaGVzO2lmKDEhPT1lLnRvdWNoZXMubGVuZ3RoKXJldHVybiEwO3I9blswXX1pZih0LmN1cnJlbnRPYmplY3Qpe3QuZXZlbnREYXRhLnRhcmdldFR5cGVOYW1lPXQuY3VycmVudE9iamVjdC50eXBlTmFtZSx0LmV2ZW50RGF0YS50YXJnZXRVc2FnZT10LmN1cnJlbnRPYmplY3QudXNhZ2UsdC5ldmVudERhdGEudGFyZ2V0T2JqZWN0PXQuY3VycmVudE9iamVjdDt2YXIgbz1yLnBhZ2VYLXQub2Zmc2V0WCxhPXIucGFnZVktdC5vZmZzZXRZLGk9KHIucGFnZVgsci5wYWdlWSx0LmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCksbD10LmN1cnJlbnRPYmplY3Quc3R5bGUudG9wLHM9cGFyc2VJbnQobywxMCksZD1wYXJzZUludChhLDEwKSx1PXMrcGFyc2VJbnQodC5jdXJyZW50T2JqZWN0LnN0eWxlLndpZHRoLDEwKSxjPWQrcGFyc2VJbnQodC5jdXJyZW50T2JqZWN0LnN0eWxlLmhlaWdodCwxMCksbT1wYXJzZUludCh0LmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsMTApLHA9cGFyc2VJbnQodC5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwxMCksaD0wLGY9MDtpZigxPT10LmN1cnJlbnRPYmplY3QuaXNSYW5nZUxpbWl0ZWQmJihzPD0wfHx1Pm18fGQ8PTB8fGM+cCkpaD0wLGY9MDtlbHNle2g9cGFyc2VJbnQobywxMCktcGFyc2VJbnQoaSwxMCksZj1wYXJzZUludChhLDEwKS1wYXJzZUludChsLDEwKSx0LmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdD1wYXJzZUludCh0LmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCkraCp0LmN1cnJlbnRPYmplY3QuYXJnWCtcInB4XCIsdC5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcD1wYXJzZUludCh0LmN1cnJlbnRPYmplY3Quc3R5bGUudG9wKStmKnQuY3VycmVudE9iamVjdC5hcmdZK1wicHhcIjt2YXIgeT10LmN1cnJlbnRPYmplY3QucGFyZW50O3kmJnkuX29uTW92ZSYmeS5fb25Nb3ZlKCl9cmV0dXJuIHQuZXZlbnREYXRhLmRlbHRhWD1oLHQuZXZlbnREYXRhLmRlbHRhWT1mLHQuZXZlbnREYXRhfXJldHVybiBudWxsfSxmLnByb3RvdHlwZS5tb3VzZVVwPWZ1bmN0aW9uKGUpe3RoaXMuY3VycmVudE9iamVjdD1udWxsLHRoaXMubW91c2VEb3duU291cmNlPW51bGx9LGYucHJvdG90eXBlLnB1bGxVcD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9W10sbj10LmJlYW5MaXN0O2Zvcih2YXIgbyBpbiBuKXIucHVzaChuW29dKTt2YXIgYT1uW2VdO3QuZW5hYmxlUHVsbFVwJiZ0LnB1bGxVcFNvcnQoYSxyLHQuYmFzZVpJbmRleCksdC5vblRvcE9iamVjdD1hfSxmLnByb3RvdHlwZS5wdWxsVXBTb3J0PWZ1bmN0aW9uKGUsdCxyKXtmb3IodmFyIG4gaW4gZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXg9dC5sZW5ndGgrcix0LnNvcnQoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuLXBhcnNlSW50KGUuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4LDEwKStwYXJzZUludCh0Lmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCwxMCl9KSksdCl0W25dLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleD10Lmxlbmd0aC0xLW4rcn0sZi5wcm90b3R5cGUucmVtb3ZlQmVhbj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmJlYW5MaXN0LHI9dFtlXTt0aGlzLmNhbnZhc0VsZW1lbnQucmVtb3ZlQ2hpbGQoci5odG1sRWxlbWVudCksZGVsZXRlIHRbZV19LGYucHJvdG90eXBlLmFkZEJlYW49ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXQuYmVhbkxpc3Qsbj10LmJlYW5JZE5hbWUsbz10LmJlYW5OYW1lSWQ7cltlLmlkXT1lLGUucHJvcGVydHkubmFtZSYmKG9bZS5wcm9wZXJ0eS5uYW1lXT1lLmlkLG5bZS5pZF09ZS5wcm9wZXJ0eS5uYW1lKTt2YXIgYT0wO2Zvcih2YXIgaSBpbiByKWErKztlLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleD1hK3QuYmFzZVpJbmRleCxlLnNldFBhcmVudENhbnZhcyh0KSx0aGlzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQoZS5odG1sRWxlbWVudCl9LGYucHJvdG90eXBlLmdldFBhcmVudEVsZW1lbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50fSxwLkNGUkFNRT17fSxwLkNGUkFNRS5DQU5WQVNfRUxFTUVOVF9CR0NPTE9SPVwidHJhbnNwYXJlbnRcIixwLkNGUkFNRS5NT0RBTF9CQUNLR1JPVU5EX0ZSQU1FX0lEX1BSRUZJWD1cIndpbmRvd19fbW9kYWxfd2luZG93X2JhY2tncm91bmRfXCIsaSh5LGgpLHkucHJvdG90eXBlLnNldFRpdGxlQmFyQ2xhc3NOYW1lPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJih0aGlzLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdD1lLHRoaXMudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkPWUpLHQmJih0aGlzLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZD10KSx0aGlzfSx5LnByb3RvdHlwZS5hZGRGcmFtZUNvbXBvbmVudD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5mcmFtZUNvbXBvbmVudE1hcFtlLmlkXT1lLHRoaXMuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQoZS5odG1sRWxlbWVudCksdGhpc30seS5wcm90b3R5cGUuZ2V0RnJhbWVDb21wb25lbnRFbGVtZW50PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmZyYW1lQ29tcG9uZW50TWFwW2VdP3RoaXMuZnJhbWVDb21wb25lbnRNYXBbZV0uaHRtbEVsZW1lbnQ6bnVsbH0seS5wcm90b3R5cGUucmVtb3ZlRnJhbWVDb21wb25lbnRCeUlkPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZnJhbWVDb21wb25lbnRNYXBbZV07dGhpcy5jYW52YXMuY2FudmFzRWxlbWVudC5yZW1vdmVDaGlsZCh0Lmh0bWxFbGVtZW50KSxkZWxldGUgdGhpcy5mcmFtZUNvbXBvbmVudE1hcFtlXX0seS5wcm90b3R5cGUuc2hvd0ZyYW1lQ29tcG9uZW50PWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5nZXRGcmFtZUNvbXBvbmVudEVsZW1lbnQoZSk7cmV0dXJuIHImJihyLnN0eWxlLmRpc3BsYXk9dHx8XCJmbGV4XCIpLHRoaXN9LHkucHJvdG90eXBlLmhpZGVGcmFtZUNvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmdldEZyYW1lQ29tcG9uZW50RWxlbWVudChlKTtyZXR1cm4gdCYmKHQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIiksdGhpc30seS5wcm90b3R5cGUuaGlkZUFsbFZpc2libGVGcmFtZUNvbXBvbmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmZyYW1lQ29tcG9uZW50TWFwO2Zvcih2YXIgdCBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkodCkpe3ZhciByPWVbdF0uaHRtbEVsZW1lbnQ7XCJub25lXCI9PT1yLnN0eWxlLmRpc3BsYXkmJihyLl9hbHJlYWR5Tm9uZT0hMCksci5zdHlsZS5kaXNwbGF5PVwibm9uZVwifX0seS5wcm90b3R5cGUuc2hvd0FsbFZpc2libGVGcmFtZUNvbXBvbmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmZyYW1lQ29tcG9uZW50TWFwO2Zvcih2YXIgdCBpbiBlKWlmKGUuaGFzT3duUHJvcGVydHkodCkpe3ZhciByPWVbdF0uaHRtbEVsZW1lbnQ7ci5fYWxyZWFkeU5vbmU/ci5fYWxyZWFkeU5vbmU9bnVsbDpyLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCJ9fSx5LnByb3RvdHlwZS5oaWRlRnJhbWVDb21wb25lbnRDaGlsZE1lbnVzPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZnJhbWVDb21wb25lbnRNYXA7Zm9yKHZhciByIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSl7aWYoZSYmZS5leGNlcHRGcmFtZUNvbXBvbmVudElkJiZyPT09ZS5leGNlcHRGcmFtZUNvbXBvbmVudElkKWNvbnRpbnVlO3ZhciBuPXRbcl07bi5jaGlsZE1lbnUmJihuLmNoaWxkTWVudS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19LHkucHJvdG90eXBlLnNldFRpdGxlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYodC50aXRsZT1lLHQuc2hvd1RpdGxlQmFyKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKTt0LnRpdGxlQmFyLmZpcnN0Q2hpbGQucmVwbGFjZUNoaWxkKHIsdC50aXRsZUJhci5maXJzdENoaWxkLmZpcnN0Q2hpbGQpfXJldHVybiB0fSx5LnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIG89dGhpcyxhPXBhcnNlSW50KG8uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwxMCksaT1wYXJzZUludChvLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwxMCksbD1wYXJzZUludChvLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLDEwKSxzPXBhcnNlSW50KG8uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LDEwKTtvLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQ9cGFyc2VJbnQoYStlLDEwKStcInB4XCIsby5odG1sRWxlbWVudC5zdHlsZS50b3A9cGFyc2VJbnQoaSt0LDEwKStcInB4XCIsby5odG1sRWxlbWVudC5zdHlsZS53aWR0aD1wYXJzZUludChsK3IsMTApK1wicHhcIixvLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodD1wYXJzZUludChzK24sMTApK1wicHhcIjt2YXIgZD1wYXJzZUludChvLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLDEwKSx1PXBhcnNlSW50KG8uY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LDEwKTtmb3IodmFyIGMgaW4gby5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aD1kK3IrXCJweFwiLG8uY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0PXUrbitcInB4XCIsby5zaG93VGl0bGVCYXImJihvLnRpdGxlQmFyLnN0eWxlLndpZHRoPWQrcitcInB4XCIpLG8uY2FudmFzLmJlYW5MaXN0KXt2YXIgbT1vLmNhbnZhcy5iZWFuTGlzdFtjXTtcImNtYXJrZXJ3aW5kb3dcIj09bS5odG1sRWxlbWVudC50eXBlTmFtZSYmKFwiUkRcIj09bS5odG1sRWxlbWVudC51c2FnZT8obS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PXBhcnNlSW50KG0uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwxMCkrcitcInB4XCIsbS5odG1sRWxlbWVudC5zdHlsZS50b3A9cGFyc2VJbnQobS5odG1sRWxlbWVudC5zdHlsZS50b3AsMTApK24rXCJweFwiKTpcIkREXCI9PW0uaHRtbEVsZW1lbnQudXNhZ2U/KG0uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGg9cGFyc2VJbnQobS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwxMCkrcitcInB4XCIsbS5odG1sRWxlbWVudC5zdHlsZS50b3A9cGFyc2VJbnQobS5odG1sRWxlbWVudC5zdHlsZS50b3AsMTApK24rXCJweFwiKTpcIlJSXCI9PW0uaHRtbEVsZW1lbnQudXNhZ2UmJihtLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQ9cGFyc2VJbnQobS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LDEwKStyK1wicHhcIixtLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodD1wYXJzZUludChtLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwxMCkrbitcInB4XCIpKX19LHkucHJvdG90eXBlLmNhbnZhc01vdXNlRG93bj1mdW5jdGlvbihlKXtudWxsPT10aGlzLnBhcmVudENGcmFtZS5wYXJlbnRDYW52YXMubW91c2VEb3duU291cmNlJiYodGhpcy5wYXJlbnRDRnJhbWUucGFyZW50Q2FudmFzLm1vdXNlRG93blNvdXJjZT1cImNoaWxkY2FudmFzXCIpfSx5LnByb3RvdHlwZS5tb3VzZVVwPWZ1bmN0aW9uKGUpe3RoaXMuY2FudmFzLm1vdXNlVXAoZSl9LHkucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50T2JqZWN0LnBhcmVudENhbnZhcyxyPXRoaXMucGFyZW50T2JqZWN0LG49ci5pZDtyLmNsb3NlSW50ZXJuYWxseShlLHQsbil9LHkucHJvdG90eXBlLmNsb3NlRnJhbWU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJlbnRDYW52YXM7dGhpcy5jbG9zZUludGVybmFsbHkoZSx0LHRoaXMud2luZG93SWQpfSx5LnByb3RvdHlwZS5jbG9zZUludGVybmFsbHk9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXRoaXM7dCYmKHQucmVtb3ZlQmVhbihyKSxuLm1vZGFsQmFja2dyb3VuZFdpbmRvd0lkJiYodC5yZW1vdmVCZWFuKG4ubW9kYWxCYWNrZ3JvdW5kV2luZG93SWQpLG4ubW9kYWxCYWNrZ3JvdW5kV2luZG93SWQ9bnVsbCksbi5vbkNsb3NlRnJhbWVMaXN0ZW5lciYmbi5vbkNsb3NlRnJhbWVMaXN0ZW5lcihuKSl9LHkucHJvdG90eXBlLnNldE9uQ2xvc2VGcmFtZUxpc3RlbmVyPWZ1bmN0aW9uKGUpe3RoaXMub25DbG9zZUZyYW1lTGlzdGVuZXI9ZX0seS5wcm90b3R5cGUuY29udGV4dE1lbnU9ZnVuY3Rpb24oKXtyZXR1cm4hMX0seS5wcm90b3R5cGUuc2V0VGl0bGVCYXJUZXh0Q29sb3I9ZnVuY3Rpb24oZSl7dGhpcy50aXRsZUJhci5zdHlsZS5jb2xvcj1lfSx5LnByb3RvdHlwZS5zZXRQb3NpdGlvbj1mdW5jdGlvbihlLHQscil7dmFyIG49dGhpcy5nZXRXaWR0aCgpLG89dGhpcy5nZXRIZWlnaHQoKTtyZXR1cm4gdGhpcy5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KGUsdCxyLG4sbyksdGhpc30seS5wcm90b3R5cGUuX3NldFBvc2l0aW9uSW50ZXJuYWxseT1mdW5jdGlvbihlLHQscixuLGEpe3ZhciBpPXRoaXM7ciYmKGkuYW5jaG9yPXIpLHImJm8uTEVGVF9UT1AhPXI/by5IQ0VOVEVSX1RPUD09cj8oaS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PS1uLzIrZStcInB4XCIsaS5odG1sRWxlbWVudC5zdHlsZS50b3A9dCtcInB4XCIpOm8uUklHSFRfVE9QPT1yPyhpLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQ9LW4rZStcInB4XCIsaS5odG1sRWxlbWVudC5zdHlsZS50b3A9dCtcInB4XCIpOm8uTEVGVF9WQ0VOVEVSPT1yPyhpLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQ9ZStcInB4XCIsaS5odG1sRWxlbWVudC5zdHlsZS50b3A9LWEvMit0K1wicHhcIik6by5IQ0VOVEVSX1ZDRU5URVI9PXI/KGkuaHRtbEVsZW1lbnQuc3R5bGUubGVmdD0tbi8yK2UrXCJweFwiLGkuaHRtbEVsZW1lbnQuc3R5bGUudG9wPS1hLzIrdCtcInB4XCIpOm8uUklHSFRfVkNFTlRFUj09cj8oaS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PS1uK2UrXCJweFwiLGkuaHRtbEVsZW1lbnQuc3R5bGUudG9wPS1hLzIrdCtcInB4XCIpOm8uTEVGVF9CT1RUT009PXI/KGkuaHRtbEVsZW1lbnQuc3R5bGUubGVmdD1lK1wicHhcIixpLmh0bWxFbGVtZW50LnN0eWxlLnRvcD0tYSt0K1wicHhcIik6by5IQ0VOVEVSX0JPVFRPTT09cj8oaS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PS1uLzIrZStcInB4XCIsaS5odG1sRWxlbWVudC5zdHlsZS50b3A9LWErdCtcInB4XCIpOm8uUklHSFRfQk9UVE9NPT1yJiYoaS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PS1uK2UrXCJweFwiLGkuaHRtbEVsZW1lbnQuc3R5bGUudG9wPS1hK3QrXCJweFwiKTooaS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PWUrXCJweFwiLGkuaHRtbEVsZW1lbnQuc3R5bGUudG9wPXQrXCJweFwiKX0seS5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgZSx0LHI9dGhpcyxuPXIuZ2V0V2lkdGgoKSxhPXIuZ2V0SGVpZ2h0KCksaT1yLmFuY2hvcjtyZXR1cm4gaSYmby5MRUZUX1RPUCE9aT9vLkhDRU5URVJfVE9QPT1pPyhlPXBhcnNlSW50KHIuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwxMCkrbi8yLHQ9cGFyc2VJbnQoci5odG1sRWxlbWVudC5zdHlsZS50b3AsMTApKTpvLlJJR0hUX1RPUD09aT8oZT1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsMTApK24sdD1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwxMCkpOm8uTEVGVF9WQ0VOVEVSPT1pPyhlPXBhcnNlSW50KHIuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwxMCksdD1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwxMCkrYS8yKTpvLkhDRU5URVJfVkNFTlRFUj09aT8oZT1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsMTApK24vMix0PXBhcnNlSW50KHIuaHRtbEVsZW1lbnQuc3R5bGUudG9wLDEwKSthLzIpOm8uUklHSFRfVkNFTlRFUj09aT8oZT1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsMTApK24sdD1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwxMCkrYS8yKTpvLkxFRlRfQk9UVE9NPT1pPyhlPXBhcnNlSW50KHIuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwxMCksdD1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwxMCkrYSk6by5IQ0VOVEVSX0JPVFRPTT09aT8oZT1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsMTApK24vMix0PXBhcnNlSW50KHIuaHRtbEVsZW1lbnQuc3R5bGUudG9wLDEwKSthKTpvLlJJR0hUX0JPVFRPTT09aSYmKGU9cGFyc2VJbnQoci5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LDEwKStuLHQ9cGFyc2VJbnQoci5odG1sRWxlbWVudC5zdHlsZS50b3AsMTApK2EpOihlPXBhcnNlSW50KHIuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwxMCksdD1wYXJzZUludChyLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwxMCkpLHt4OmUseTp0LGFuY2hvcjppfX0seS5wcm90b3R5cGUuZ2V0TGVmdD1mdW5jdGlvbigpe3JldHVybiBwYXJzZUludCh0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsMTApfSx5LnByb3RvdHlwZS5nZXRUb3A9ZnVuY3Rpb24oKXtyZXR1cm4gcGFyc2VJbnQodGhpcy5odG1sRWxlbWVudC5zdHlsZS50b3AsMTApfSx5LnByb3RvdHlwZS5nZXRXaWR0aD1mdW5jdGlvbigpe3JldHVybiBwYXJzZUludCh0aGlzLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLDEwKX0seS5wcm90b3R5cGUuZ2V0SGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlSW50KHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LDEwKX0seS5wcm90b3R5cGUuZ2V0U2l6ZT1mdW5jdGlvbigpe3JldHVybnt3aWR0aDp0aGlzLmdldFdpZHRoKCksaGVpZ2h0OnRoaXMuZ2V0SGVpZ2h0KCl9fSx5LnByb3RvdHlwZS5zZXRTaXplPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj0hMDtyZXR1cm4gciYmKG49ITEpLHRoaXMucmVzaXplKDAsMCxlLXRoaXMuZ2V0V2lkdGgoKSx0LXRoaXMuZ2V0SGVpZ2h0KCksbiksdGhpc30seS5wcm90b3R5cGUuZ2V0V2luZG93SWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53aW5kb3dJZH0seS5wcm90b3R5cGUuZ2V0TmFtZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnByb3BlcnR5Lm5hbWV9LHkucHJvdG90eXBlLnNldE5hbWU9ZnVuY3Rpb24oZSl7dGhpcy5wcm9wZXJ0eS5uYW1lPWV9LGkoYix5KSxiLnByb3RvdHlwZS5nZXRGcmFtZVZpZXc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kZnJhbWV9LGIucHJvdG90eXBlLmdldEZyYW1lQXBwZWFyYW5jZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmFwcGVhcmFuY2V9LGIucHJvdG90eXBlLnNldEhUTUw9ZnVuY3Rpb24oZSl7dGhpcy5kZnJhbWUuaW5uZXJIVE1MPWV9LGIucHJvdG90eXBlLnNldEZyYW1lSW5GcmFtZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmRmcmFtZT90aGlzLmRmcmFtZS5maXJzdENoaWxkOm51bGw7dCYmKERhdGUubm93fHwoRGF0ZS5ub3c9ZnVuY3Rpb24oKXtyZXR1cm4obmV3IERhdGUpLmdldFRpbWUoKX0pLGU/dGhpcy5ldmVudEVtaXR0ZXIub25seShcInJlc2l6ZVwiLFwiZmlmLWxpc3RlbmVyXCIsKGZ1bmN0aW9uKCl7dC5zZXRBdHRyaWJ1dGUoYS5NQVRDSF9QQVJFTlRfQ0hBTkdFX01BUktFUl9BVFRSLERhdGUubm93KCkpfSkpOih0LnJlbW92ZUF0dHJpYnV0ZShhLk1BVENIX1BBUkVOVF9DSEFOR0VfTUFSS0VSX0FUVFIpLHRoaXMuZXZlbnRFbWl0dGVyLm9ubHkoXCJyZXNpemVcIixcImZpZi1saXN0ZW5lclwiLChmdW5jdGlvbigpe30pKSkpfSxiLnByb3RvdHlwZS4kPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnVzZUlmcmFtZT90aGlzLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZSk6dGhpcy5kZnJhbWUucXVlcnlTZWxlY3RvcihlKX0sYi5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXRoaXMsbz1uLmdldEZyYW1lQ29tcG9uZW50RWxlbWVudChlKTtvJiZuLmV2ZW50TGlzdGVuZXJIZWxwZXIuYWRkRXZlbnRMaXN0ZW5lcihvLHQsKGZ1bmN0aW9uKG8pe3IobixvLHt0eXBlOlwiZnJhbWVDb21wb25lbnRcIixpZDplLGV2ZW50VHlwZTp0fSl9KSx7bGlzdGVuZXJOYW1lOlwiZnJhbWUtY29tcG9uZW50LWxpc3RlbmVyXCJ9KSxcImZyYW1lXCIhPT1lJiZcIndpbmRvd1wiIT09ZXx8KFwibW92ZVwiIT09dHx8bi5ldmVudEVtaXR0ZXIuaGFzTGlzdGVuZXJGdW5jcyhcIm1vdmVcIil8fG4uc2V0T25Nb3ZlTGlzdGVuZXIoKGZ1bmN0aW9uKGUpe24uZXZlbnRFbWl0dGVyLmVtaXQoXCJtb3ZlXCIsbi5fZ2V0Q3VycmVudFNpemVQb3MoKSl9KSksbi5ldmVudEVtaXR0ZXIub24odCxyKSk7dmFyIGE9bi4kKGUpO2lmKGEmJihuLmV2ZW50TGlzdGVuZXJIZWxwZXIuaGFzRXZlbnRMaXN0ZW5lcihhLHQsXCJmcmFtZS1kb20tbGlzdGVuZXJcIikmJm4uZXZlbnRMaXN0ZW5lckhlbHBlci5yZW1vdmVFdmVudExpc3RlbmVyKGEsdCxudWxsLHtsaXN0ZW5lck5hbWU6XCJmcmFtZS1kb20tbGlzdGVuZXJcIn0pLG4uZXZlbnRMaXN0ZW5lckhlbHBlci5hZGRFdmVudExpc3RlbmVyKGEsdCwoZnVuY3Rpb24obyl7cihuLG8se3R5cGU6XCJkb21cIixpZDplLGV2ZW50VHlwZTp0fSl9KSx7bGlzdGVuZXJOYW1lOlwiZnJhbWUtZG9tLWxpc3RlbmVyXCJ9KSksIWEpe3ZhciBpPW4uY2FudmFzLmNhbnZhc0VsZW1lbnQucXVlcnlTZWxlY3RvcihlKTtpJiZpLmFkZEV2ZW50TGlzdGVuZXIodCwoZnVuY3Rpb24obyl7cihuLG8se3R5cGU6XCJkb21cIixpZDplLGV2ZW50VHlwZTp0fSl9KSl9fSxiLnByb3RvdHlwZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYocGFyc2VJbnQoZS5mcmFtZUJvcmRlclJhZGl1cywxMCk+MCl7dmFyIHQ9ZS5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzKGUsZS5faGFzRm9jdXMpLHI9dC5mcmFtZUFwcGVhcmFuY2Usbj10LmlubmVyQm9yZGVyUmFkaXVzLG89cGFyc2VJbnQoci50aXRsZUJhckhlaWdodCwxMCk7ZS5zaG93VGl0bGVCYXI/KGUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9bixlLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXM9bixlLmlmcmFtZS5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cz1uLGUuaWZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXM9bixlLnRpdGxlQmFyLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXM9bixlLnRpdGxlQmFyLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzPW4pOihlLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cz1uLGUuaWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cz1uKSxlLmRmcmFtZSYmKDA9PT1vJiYoZS5kZnJhbWUuc3R5bGUuYm9yZGVyVG9wUmlnaHRSYWRpdXN8fChlLmRmcmFtZS5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cz1uKSxlLmRmcmFtZS5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzfHwoZS5kZnJhbWUuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cz1uKSksZS5kZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9bixlLmRmcmFtZS5zdHlsZS5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzPW4pfX0sYi5wcm90b3R5cGUuaGFuZGxlUmVsZWFzaW5nRm9jdXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXQuX2hhc0ZvY3VzO2Zvcih2YXIgbiBpbiB0Ll9oYXNGb2N1cz0hMSx0LnRpdGxlQmFyLmNsYXNzTmFtZT10LnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCx0LnRpdGxlQmFyQ29sb3JEZWZhdWx0JiYodC50aXRsZUJhci5zdHlsZS5iYWNrZ3JvdW5kPXQudGl0bGVCYXJDb2xvckRlZmF1bHQpLHQudGl0bGVCYXIuc3R5bGUuY29sb3I9dC50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQsdC5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCYmKHQuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3I9dC5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCksdC5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCYmKHQuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGg9dC5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCx0LmFkanVzdEZyYW1lQm9yZGVyUmFkaXVzKCkpLFwiY2lmd2luZG93XCI9PXQuaHRtbEVsZW1lbnQudHlwZU5hbWUmJnQub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCYmKHQudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoPXBhcnNlSW50KHQuaWZyYW1lLndpZHRoLDEwKStcInB4XCIsdC50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0PXBhcnNlSW50KHQuaWZyYW1lLmhlaWdodCwxMCkrXCJweFwiKSx0LmZyYW1lQ29tcG9uZW50TWFwKXt0LmZyYW1lQ29tcG9uZW50TWFwW25dLmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCl9cmV0dXJuIHQudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0JiYodC50aXRsZUJhci5zdHlsZS5ib3JkZXJCb3R0b209dC50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQpLHImJnQuZXZlbnRFbWl0dGVyLmVtaXQoXCJibHVyXCIse3RhcmdldDp0fSksdH0sYi5wcm90b3R5cGUuaGFuZGxlVGFraW5nRm9jdXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXQuX2hhc0ZvY3VzO2Zvcih2YXIgbiBpbiB0Ll9oYXNGb2N1cz0hMCx0Ll9oYXNGb2N1cz1EYXRlLm5vdygpLHQub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCYmKHQudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoPVwiMHB4XCIsdC50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0PVwiMHB4XCIpLHQudGl0bGVCYXIuY2xhc3NOYW1lPXQudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkLHQudGl0bGVCYXJDb2xvckZvY3VzZWQmJih0LnRpdGxlQmFyLnN0eWxlLmJhY2tncm91bmQ9dC50aXRsZUJhckNvbG9yRm9jdXNlZCksdC50aXRsZUJhci5zdHlsZS5jb2xvcj10LnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZCx0LmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkJiYodC5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvcj10LmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkKSx0LmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkJiYodC5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aD10LmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkLHQuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKSksdC50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQmJih0LnRpdGxlQmFyLnN0eWxlLmJvcmRlckJvdHRvbT10LnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCksdC5mcmFtZUNvbXBvbmVudE1hcCl7dC5mcmFtZUNvbXBvbmVudE1hcFtuXS5oYW5kbGVUYWtpbmdGb2N1cygpfXJldHVybiByfHx0LmV2ZW50RW1pdHRlci5lbWl0KFwiZm9jdXNcIix7dGFyZ2V0OnR9KSx0fSx5LnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZSYmMD09ZS5yZXF1ZXN0Rm9jdXN8fHRoaXMucmVxdWVzdEZvY3VzKCksdGhpc30seS5wcm90b3R5cGUuc2hvd01vZGFsPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1uZXcgbDtyLnNob3dUaXRsZUJhcj0hMCxyLnNob3dDbG9zZUJ1dHRvbj0hMSxyLmZyYW1lQm9yZGVyUmFkaXVzPVwiMHB4XCIsci5mcmFtZUJvcmRlclN0eWxlPVwibm9uZVwiLHIuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ9XCIwcHhcIixyLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkPVwiMHB4XCIsci5mcmFtZUJveFNoYWRvdz1udWxsLHIuZnJhbWVCYWNrZ3JvdW5kQ29sb3I9XCJ0cmFuc3BhcmVudFwiLHIuZnJhbWVDb21wb25lbnRzPVtdLHIuZnJhbWVIZWlnaHRBZGp1c3Q9MCxyLnRpdGxlQmFySGVpZ2h0PVwiMHB4XCIsci50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQ9bnVsbCxyLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW49XCIwcHhcIixyLm9uSW5pdGlhbGl6ZT1mdW5jdGlvbigpe30sci5wdWxsVXBEaXNhYmxlZD0hMDt2YXIgbj10LnBhcmVudENhbnZhcyxvPXAuQ0ZSQU1FLk1PREFMX0JBQ0tHUk9VTkRfRlJBTUVfSURfUFJFRklYK3QuaWQsYT1uZXcgYihvLDAsMCwxLDEscik7YS5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodCwhMCksYS5zZXRSZXNpemFibGUoITEpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKGZ1bmN0aW9uKCl7YS5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLHdpbmRvdy5pbm5lckhlaWdodCwhMCl9KSksdC5tb2RhbEJhY2tncm91bmRXaW5kb3dJZD1vLGEuaGlkZSgpLG4uYWRkV2luZG93KGEpLGEuc2V0VGl0bGUoXCJcIikuZ2V0RnJhbWVWaWV3KCkuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwianNmcmFtZS1tb2RhbC13aW5kb3ctYmFja2dyb3VuZFwiPjwvZGl2PicsYS5nZXRGcmFtZVZpZXcoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsMCwwLDAuMClcIixhLnNob3coKSx0LnNob3coKSxlJiZ0LnNldE9uQ2xvc2VGcmFtZUxpc3RlbmVyKGUpfSx5LnByb3RvdHlwZS5nZXRXaW5kb3dNYW5hZ2VyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50Q2FudmFzfSxiLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIix0aGlzfSxiLnByb3RvdHlwZS5vbm1vdXNlRG93bj1mdW5jdGlvbihlKXtkb2N1bWVudC5ib2R5Lm9uZHJhZz1mdW5jdGlvbigpe3JldHVybiExfSx0aGlzLmRlY29yYXRvcj15LnByb3RvdHlwZS5vbm1vdXNlRG93bix0aGlzLmRlY29yYXRvcihlKTt2YXIgdD10aGlzLnBhcmVudCxyPXRoaXMucGFyZW50Q2FudmFzO2Zvcih2YXIgbiBpbiByLmJlYW5MaXN0KXt2YXIgbz1yLmJlYW5MaXN0W25dO249PXQuZ2V0V2luZG93SWQoKXx8by5oYW5kbGVSZWxlYXNpbmdGb2N1cygpfXQuaGFuZGxlVGFraW5nRm9jdXMoKX0sYi5wcm90b3R5cGUubW91c2VVcD1mdW5jdGlvbihlKXsodGhpcy5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkfHx0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplKSYmKHRoaXMucGFyZW50Q2FudmFzLm9uVG9wT2JqZWN0PT10aGlzPyh0aGlzLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aD1cIjBweFwiLHRoaXMudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodD1cIjBweFwiKTp0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQmJih0aGlzLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aD1wYXJzZUludCh0aGlzLmlmcmFtZS53aWR0aCkrXCJweFwiLHRoaXMudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodD1wYXJzZUludCh0aGlzLmlmcmFtZS5oZWlnaHQpK1wicHhcIikpLHRoaXMuZGVjb3JhdG9yPXkucHJvdG90eXBlLm1vdXNlVXAsdGhpcy5kZWNvcmF0b3IoZSksZG9jdW1lbnQuYm9keS5vbmRyYWc9bnVsbCxkb2N1bWVudC5ib2R5Lm9uc2VsZWN0c3RhcnQ9bnVsbCx0aGlzLnRyYW5zcGFyZW5jZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwifSxiLnByb3RvdHlwZS5zZXRNaW5GcmFtZVNpemU9ZnVuY3Rpb24oZSx0KXt0aGlzLm1pbkZyYW1lV2lkdGg9ZSx0aGlzLm1pbldpbmRvd0hlaWdodD10fSxiLnByb3RvdHlwZS5yZXNpemU9ZnVuY3Rpb24oZSx0LHIsbixvKXtpZighdGhpcy5yZXNpemFibGUmJm8pcmV0dXJuIG51bGw7dmFyIGE9dGhpcy5nZXRTaXplKCksaT1wYXJzZUludCh0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsMTApLGw9cGFyc2VJbnQodGhpcy5odG1sRWxlbWVudC5zdHlsZS50b3AsMTApLHM9cGFyc2VJbnQodGhpcy5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwxMCksZD1wYXJzZUludCh0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwxMCk7byYmcytyPHRoaXMubWluRnJhbWVXaWR0aCZyPDAmJih0aGlzLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoPXMrXCJweFwiLHI9MCksbyYmZCtuPHRoaXMubWluV2luZG93SGVpZ2h0Jm48MCYmKHRoaXMuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0PWQrXCJweFwiLG49MCksdGhpcy5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PWkrZStcInB4XCIsdGhpcy5odG1sRWxlbWVudC5zdHlsZS50b3A9bCt0K1wicHhcIix0aGlzLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoPXMrcitcInB4XCIsdGhpcy5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQ9ZCtuK1wicHhcIjt2YXIgdT1wYXJzZUludCh0aGlzLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLDEwKSxjPXBhcnNlSW50KHRoaXMuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LDEwKTtmb3IodmFyIG0gaW4gdGhpcy5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aD11K3IrXCJweFwiLHRoaXMuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0PWMrbitcInB4XCIsdGhpcy50aXRsZUJhci5zdHlsZS53aWR0aD11LXRoaXMuaWZEZWx0YStyKzArXCJweFwiLHRoaXMuaWZyYW1lLndpZHRoPXUtdGhpcy5pZkRlbHRhK3IrMCtcInB4XCIsdGhpcy5pZnJhbWUuaGVpZ2h0PWMtdGhpcy5pZkRlbHRhK24rdGhpcy5mcmFtZUhlaWdodEFkanVzdCtcInB4XCIsKHRoaXMub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZHx8dGhpcy5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkmJih0aGlzLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aD1wYXJzZUludCh0aGlzLmlmcmFtZS53aWR0aCkrXCJweFwiLHRoaXMudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodD1wYXJzZUludCh0aGlzLmlmcmFtZS5oZWlnaHQpK1wicHhcIiksdGhpcy5mcmFtZUNvbXBvbmVudE1hcCl7dGhpcy5mcmFtZUNvbXBvbmVudE1hcFttXS51cGRhdGVBbGlnbigpfWZvcih2YXIgcCBpbiB0aGlzLmNhbnZhcy5iZWFuTGlzdCl7dmFyIGg9dGhpcy5jYW52YXMuYmVhbkxpc3RbcF07XCJjbWFya2Vyd2luZG93XCI9PWguaHRtbEVsZW1lbnQudHlwZU5hbWUmJihcIlJEXCI9PWguaHRtbEVsZW1lbnQudXNhZ2U/KGguaHRtbEVsZW1lbnQuc3R5bGUubGVmdD1wYXJzZUludChoLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpK3IrXCJweFwiLGguaHRtbEVsZW1lbnQuc3R5bGUudG9wPXBhcnNlSW50KGguaHRtbEVsZW1lbnQuc3R5bGUudG9wKStuK1wicHhcIik6XCJERFwiPT1oLmh0bWxFbGVtZW50LnVzYWdlPyhoLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoPXBhcnNlSW50KGguaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgpK3IrXCJweFwiLGguaHRtbEVsZW1lbnQuc3R5bGUudG9wPXBhcnNlSW50KGguaHRtbEVsZW1lbnQuc3R5bGUudG9wKStuK1wicHhcIik6XCJSUlwiPT1oLmh0bWxFbGVtZW50LnVzYWdlJiYoaC5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PXBhcnNlSW50KGguaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkrcitcInB4XCIsaC5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQ9cGFyc2VJbnQoaC5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQpK24rXCJweFwiKSl9dmFyIGY9dGhpcy5nZXRTaXplKCk7YS53aWR0aD09PWYud2lkdGgmJmEuaGVpZ2h0PT09Zi5oZWlnaHR8fHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoXCJyZXNpemVcIix0aGlzLl9nZXRDdXJyZW50U2l6ZVBvcygpKX0sYi5wcm90b3R5cGUuX2dldEN1cnJlbnRTaXplUG9zPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5nZXRTaXplKCk7cmV0dXJue3RhcmdldDp0aGlzLHBvczp0aGlzLmdldFBvc2l0aW9uKCksc2l6ZTplfX0sYi5wcm90b3R5cGUucmVzaXplRGlyZWN0PWZ1bmN0aW9uKGUsdCxyKXtpZighdGhpcy5yZXNpemFibGUmJnIpcmV0dXJuIG51bGw7dGhpcy5odG1sRWxlbWVudC5zdHlsZS53aWR0aD1lK1wicHhcIix0aGlzLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodD10K1wicHhcIjtwYXJzZUludCh0aGlzLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoKSxwYXJzZUludCh0aGlzLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCk7Zm9yKHZhciBuIGluIHRoaXMuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGg9ZStcInB4XCIsdGhpcy5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQ9dC10aGlzLnRpdGxlQmFyLnN0eWxlLmhlaWdodCtcInB4XCIsdGhpcy50aXRsZUJhci5zdHlsZS53aWR0aD1lLXRoaXMuaWZEZWx0YStcInB4XCIsdGhpcy5pZnJhbWUud2lkdGg9ZS10aGlzLmlmRGVsdGErXCJweFwiLHRoaXMuaWZyYW1lLmhlaWdodD10LXRoaXMuaWZEZWx0YSt0aGlzLmZyYW1lSGVpZ2h0QWRqdXN0K1wicHhcIiwodGhpcy5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkfHx0aGlzLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplKSYmKHRoaXMudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoPXBhcnNlSW50KHRoaXMuaWZyYW1lLndpZHRoKStcInB4XCIsdGhpcy50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0PXBhcnNlSW50KHRoaXMuaWZyYW1lLmhlaWdodCkrXCJweFwiKSx0aGlzLmZyYW1lQ29tcG9uZW50TWFwKXt0aGlzLmZyYW1lQ29tcG9uZW50TWFwW25dLnVwZGF0ZUFsaWduKCl9Zm9yKHZhciBvIGluIHRoaXMuY2FudmFzLmJlYW5MaXN0KXt2YXIgYT10aGlzLmNhbnZhcy5iZWFuTGlzdFtvXTtcImNtYXJrZXJ3aW5kb3dcIj09YS5odG1sRWxlbWVudC50eXBlTmFtZSYmKFwiUkRcIj09YS5odG1sRWxlbWVudC51c2FnZT8oYS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0PWUrXCJweFwiLGEuaHRtbEVsZW1lbnQuc3R5bGUudG9wPXQrXCJweFwiKTpcIkREXCI9PWEuaHRtbEVsZW1lbnQudXNhZ2U/KGEuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGg9ZStcInB4XCIsYS5odG1sRWxlbWVudC5zdHlsZS50b3A9dCtcInB4XCIpOlwiUlJcIj09YS5odG1sRWxlbWVudC51c2FnZSYmKGEuaHRtbEVsZW1lbnQuc3R5bGUubGVmdD1lK1wicHhcIixhLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodD10K1wicHhcIikpfX0sYi5wcm90b3R5cGUucmVxdWVzdEZvY3VzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wYXJlbnRDYW52YXMuYmVhbkxpc3Q7Zm9yKHZhciB0IGluIGUpe3ZhciByPWVbdF07dD09dGhpcy5nZXRXaW5kb3dJZCgpP3IuaGFuZGxlVGFraW5nRm9jdXMoKTpyLmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCl9dGhpcy5wYXJlbnRDYW52YXMucHVsbFVwKHRoaXMuaWQpfSxiLnByb3RvdHlwZS5zZXRVcmw9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHIsbil7ZT90LnNldFVzZUlmcmFtZSghMCk6KHQuc2V0VXNlSWZyYW1lKCExKSxyKCkpLHQuaWZyYW1lLnNyYz1lLHQuaWZyYW1lLm9ubG9hZD1mdW5jdGlvbigpe3ZhciBlPWZ1bmN0aW9uKGUpe3ZhciByPWUucGFnZVgsbj1lLnBhZ2VZO2lmKFwidG91Y2htb3ZlXCI9PT1lLnR5cGUpe3ZhciBvPWUuY2hhbmdlZFRvdWNoZXM7aWYoMSE9PWUudG91Y2hlcy5sZW5ndGgpcmV0dXJuITA7cj1vWzBdLnBhZ2VYLG49b1swXS5wYWdlWX12YXIgYT10LmdldExlZnQoKSxpPXQuZ2V0VG9wKCksbD1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2wuaW5pdE1vdXNlRXZlbnQoXCJtb3VzZW1vdmVcIiwhMCwhMSx3aW5kb3csZS5kZXRhaWwsZS5zY3JlZW5YLGUuc2NyZWVuWSxyK2EsbitpLGUuY3RybEtleSxlLmFsdEtleSxlLnNoaWZ0S2V5LGUubWV0YUtleSxlLmJ1dHRvbixudWxsKSx0LnBhcmVudENhbnZhcy53aW5kb3dNb3VzZU1vdmUobCksdC5vbk1vdXNlTW92ZU9uSWZyYW1lJiZ0Lm9uTW91c2VNb3ZlT25JZnJhbWUobCl9O3QuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub25tb3VzZW1vdmU9ZSx0LmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9udG91Y2htb3ZlPWU7dmFyIG49ZnVuY3Rpb24oZSl7dmFyIHI9ZS5wYWdlWCxuPWUucGFnZVk7aWYoXCJ0b3VjaGVuZFwiPT09ZS50eXBlKXt2YXIgbz1lLmNoYW5nZWRUb3VjaGVzO3I9b1swXS5wYWdlWCxuPW9bMF0ucGFnZVl9dmFyIGE9dC5nZXRMZWZ0KCksaT10LmdldFRvcCgpLGw9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtsLmluaXRNb3VzZUV2ZW50KFwibW91c2V1cFwiLCEwLCExLHdpbmRvdyxlLmRldGFpbCxlLnNjcmVlblgsZS5zY3JlZW5ZLHIrYSxuK2ksZS5jdHJsS2V5LGUuYWx0S2V5LGUuc2hpZnRLZXksZS5tZXRhS2V5LGUuYnV0dG9uLG51bGwpLHQucGFyZW50Q2FudmFzLndpbmRvd01vdXNlVXAobCksdC5vbk1vdXNlVXBPbklmcmFtZSYmdC5vbk1vdXNlVXBPbklmcmFtZShsKX07dC5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vbm1vdXNldXA9bix0LmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9udG91Y2hlbmQ9bixyKHQsdC5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudCl9fSkpfSxiLnByb3RvdHlwZS5nZXRJZkRvY3VtZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnR9LGIucHJvdG90eXBlLnNldFNjcm9sbGluZz1mdW5jdGlvbihlKXt0aGlzLmlmcmFtZS5zY3JvbGxpbmc9ZX0sYi5wcm90b3R5cGUuZ2V0U2Nyb2xsaW5nPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmlmcmFtZS5zY3JvbGxpbmd9LGIucHJvdG90eXBlLnNldFJlc2l6YWJsZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZXNpemFibGU9ZSx0aGlzLmVuYWJsZU1hcmtlcnMoZSksdGhpc30sYi5wcm90b3R5cGUuc2V0Q29udHJvbD1mdW5jdGlvbihlKXtlJiYoZS5mcmFtZT10aGlzLHRoaXMuY29udHJvbD10aGlzLmpzRnJhbWUuY3JlYXRlV2luZG93RXZlbnRIZWxwZXIoZSksdGhpcy5jb250cm9sLnNldHVwRGVmYXVsdEV2ZW50cygpKX0saShnLGYpLGcucHJvdG90eXBlLmdldFdpbmRvdz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5iZWFuTGlzdFtlXX0sZy5wcm90b3R5cGUuYWRkV2luZG93PWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0V2luZG93SWQoKSxyPWUuZ2V0TmFtZSgpO3RoaXMuYmVhbklkTmFtZVt0XT1yLHRoaXMuYmVhbk5hbWVJZFtyXT10LHRoaXMuYWRkQmVhbihlKX0sZy5wcm90b3R5cGUuY29udGFpbnNXaW5kb3dOYW1lPWZ1bmN0aW9uKGUpe3JldHVybiEhdGhpcy5iZWFuTmFtZUlkW2VdfSxnLnByb3RvdHlwZS5nZXRXaW5kb3dCeU5hbWU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5iZWFuTmFtZUlkW2VdO3JldHVybiB0P3RoaXMuZ2V0V2luZG93KHQpOm51bGx9LGcucHJvdG90eXBlLndpbmRvd01vdXNlTW92ZT1mdW5jdGlvbihlKXtpZihudWxsPT10aGlzLmN1cnJlbnRPYmplY3QpcmV0dXJuIG51bGw7dmFyIHQ9ITEscj10aGlzLmJlYW5MaXN0O2Zvcih2YXIgbiBpbiByKXt2YXIgbz1yW25dLGE9by5jYW52YXMubW91c2VNb3ZlKGUpO2lmKHR8PW51bGwhPWEsbnVsbCE9YSYmXCJjbWFya2Vyd2luZG93XCI9PWEudGFyZ2V0VHlwZU5hbWUpe3ZhciBpPWEudGFyZ2V0T2JqZWN0O28udHJhbnNwYXJlbmNlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhdXRvXCIsXCJSRFwiPT1pLnVzYWdlP28ucmVzaXplKDAsMCxhLmRlbHRhWCxhLmRlbHRhWSwhMCk6XCJERFwiPT1pLnVzYWdlP28ucmVzaXplKDAsMCwwLGEuZGVsdGFZLCEwKTpcIlJSXCI9PWkudXNhZ2UmJm8ucmVzaXplKDAsMCxhLmRlbHRhWCwwLCEwKX19dHx8XCJjaGlsZGNhbnZhc1wiPT10aGlzLm1vdXNlRG93blNvdXJjZXx8dGhpcy5tb3VzZU1vdmUoZSl9LGcucHJvdG90eXBlLndpbmRvd01vdXNlVXA9ZnVuY3Rpb24oZSl7dGhpcy5tb3VzZVVwKGUpO3ZhciB0PXRoaXMuYmVhbkxpc3Q7Zm9yKHZhciByIGluIHQpe3Rbcl0ubW91c2VVcChlKX19LGcucHJvdG90eXBlLnJlbW92ZUJlYW49ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXQuYmVhbkxpc3Qsbj1yW2VdO2lmKG51bGwhPW4pe3ZhciBvPW4uX2hhc0ZvY3VzO3QuY2FudmFzRWxlbWVudC5yZW1vdmVDaGlsZChuLmh0bWxFbGVtZW50KSxkZWxldGUgcltlXTt2YXIgYT10LmJlYW5JZE5hbWVbZV07YSYmKGRlbGV0ZSB0LmJlYW5JZE5hbWVbZV0sZGVsZXRlIHQuYmVhbk5hbWVJZFthXSk7dmFyIGk9MCxsPW51bGw7aWYobyl7Zm9yKHZhciBlIGluIHIpe3ZhciBzPXJbZV07aTw9cy5faGFzRm9jdXNUaW1lJiYhcy5wdWxsVXBEaXNhYmxlZCYmKGk9cy5faGFzRm9jdXNUaW1lLGw9cyl9bCYmbC5yZXF1ZXN0Rm9jdXMoKX1uLnBhcmVudENhbnZhcz1udWxsfX0saSh2LGgpLEMucHJvdG90eXBlLmRvRW5hYmxlVG91Y2hBY3Rpb25NYW5pcHVsYXRpb249ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik7ZT9lLmVuZHNXaXRoKFwiO1wiKXx8KGUrPVwiO1wiKTplPVwiXCIsLTE9PT1lLmluZGV4T2YoXCJ0b3VjaC1hY3Rpb25cIikmJihlKz1cIi1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjt0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcIixkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIixlKSl9LEMucHJvdG90eXBlLmRvRGlzYWJsZVB1bGxUb1JlZnJlc2g9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpO2U/ZS5lbmRzV2l0aChcIjtcIil8fChlKz1cIjtcIik6ZT1cIlwiLC0xPT09ZS5pbmRleE9mKFwib3ZlcnNjcm9sbC1iZWhhdmlvci15XCIpJiYoZSs9XCJvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IGNvbnRhaW47XCIsZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUpKX0sQy5wcm90b3R5cGUuZ2V0RG9tUGFydHNCdWlsZGVyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tUGFydHNCdWlsZGVyfHwodGhpcy5kb21QYXJ0c0J1aWxkZXI9bmV3IHMpLHRoaXMuZG9tUGFydHNCdWlsZGVyfSxDLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9e307dC5uYW1lPWUubmFtZTt2YXIgcixuPWUudGl0bGUsbz1lLmxlZnQsYT1lLnRvcCxpPWUud2lkdGgsbD1lLmhlaWdodCxzPWUuYXBwZWFyYW5jZSxkPWUucHJlc2V0LHU9KGUucHJlc2V0UGFyYW0sZS5hcHBlYXJhbmNlTmFtZSksYz1lLmFwcGVhcmFuY2VQYXJhbSxtPWUuc3R5bGUscD1lLm1pbldpZHRoLGg9ZS5taW5IZWlnaHQsZj1lLmh0bWwseT1lLnJlc2l6YWJsZSxiPWUubW92YWJsZSxnPWUudXJsLHY9ZS51cmxMb2FkZWQsQz1lLnByZXNldFBhcmFtO2Q/KHI9dGhpcy5nZXRQcmVzZXRXaW5kb3coZCkuZ2V0UHJlc2V0V2luZG93KEMpLHM9dGhpcy5jcmVhdGVQcmVzZXRTdHlsZShyLmFwcGVhcmFuY2VOYW1lLHthcHBlYXJhbmNlUGFyYW06ci5hcHBlYXJhbmNlUGFyYW19KSk6dSYmKHM9dGhpcy5jcmVhdGVQcmVzZXRTdHlsZSh1LHthcHBlYXJhbmNlUGFyYW06Y30pKTtpZihlLmNsaWVudEhlaWdodCl7dmFyIEI9cGFyc2VJbnQocy50aXRsZUJhckhlaWdodHx8MCktcy5mcmFtZUhlaWdodEFkanVzdDtsPWUuY2xpZW50SGVpZ2h0K0J9dmFyIEU9dGhpcy5jcmVhdGVGcmFtZShvLGEsaSxsLHMsdCk7aWYobiYmRS5zZXRUaXRsZShuKSxmJiZFLnNldEhUTUwoZiksZyl7dmFyIHc9RS5zZXRVcmwoZyk7diYmdy50aGVuKHYpfWlmKDA9PXkmJkUuc2V0UmVzaXphYmxlKCExKSwwPT1iJiZFLnNldE1vdmFibGUoITEpLHAmJmgmJihFLm1pbkZyYW1lV2lkdGg9cCksaCYmKEUubWluV2luZG93SGVpZ2h0PWgsZS5jbGllbnRIZWlnaHQmJihFLm1pbldpbmRvd0hlaWdodD1oK0IpKSxtKXt2YXIgeD1FLmdldEZyYW1lVmlldygpO2Zvcih2YXIgQSBpbiBtKW0uaGFzT3duUHJvcGVydHkoQSkmJih4LnN0eWxlW0FdPW1bQV0pfXJldHVybiByJiZyLnNldHVwUHJlc2V0V2luZG93KEUpLEV9LEMucHJvdG90eXBlLmNyZWF0ZUZyYW1lPWZ1bmN0aW9uKGUsdCxyLG4sbyxhKXtvfHwobz10aGlzLmNyZWF0ZUZyYW1lQXBwZWFyYW5jZSgpKSxvLmluaXRpYWxpemUoKSxlfHwoZT0wKSx0fHwodD0wKSxyfHwocj0xMjgpLG58fChuPTEyOCk7dmFyIGk9bmV3IGIoXCJ3aW5kb3dfXCIrdGhpcy5nZW5lcmF0ZVVVSUQoKSxlLHQscixuLG8pO2lmKGkuanNGcmFtZT10aGlzLGEmJmEubmFtZSYmaS5zZXROYW1lKGEubmFtZSksaS5oaWRlKCksdGhpcy53aW5kb3dNYW5hZ2VyLmFkZFdpbmRvdyhpKSxvLmdldFRpdGxlQmFyU3R5bGUpe3ZhciBsPW8uZ2V0VGl0bGVCYXJTdHlsZSgpO2wmJmkuc2V0VGl0bGVCYXJDbGFzc05hbWUobC50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQsbC50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQpfWVsc2Ugby50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQmJm8udGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkP2kuc2V0VGl0bGVCYXJDbGFzc05hbWUoby50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQsby50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQpOm8udGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0JiZpLnNldFRpdGxlQmFyQ2xhc3NOYW1lKG8udGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0LG8udGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0KTtyZXR1cm4gaX0sQy5wcm90b3R5cGUuY29udGFpbnNXaW5kb3dOYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLndpbmRvd01hbmFnZXIuY29udGFpbnNXaW5kb3dOYW1lKGUpfSxDLnByb3RvdHlwZS5nZXRXaW5kb3dCeU5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMud2luZG93TWFuYWdlci5nZXRXaW5kb3dCeU5hbWUoZSl9LEMucHJvdG90eXBlLmdlbmVyYXRlVVVJRD1mdW5jdGlvbigpe3ZhciBlPURhdGUubm93KCk7cmV0dXJuXCJ4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcIi5yZXBsYWNlKC9beHldL2csKGZ1bmN0aW9uKHQpe3ZhciByPShlKzE2Kk1hdGgucmFuZG9tKCkpJTE2fDA7cmV0dXJuIGU9TWF0aC5mbG9vcihlLzE2KSwoXCJ4XCI9PXQ/cjozJnJ8OCkudG9TdHJpbmcoMTYpfSkpfSxDLnByb3RvdHlwZS5jcmVhdGVGcmFtZUFwcGVhcmFuY2U9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGx9LEMucHJvdG90eXBlLmNyZWF0ZUFuaW1hdG9yPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBkfSxDLnByb3RvdHlwZS5jcmVhdGVXaW5kb3dFdmVudEhlbHBlcj1mdW5jdGlvbihlKXtyZXR1cm4gZXx8KGU9e30pLGUudmVydGljYWxBbGlnbj10aGlzLnZBbGlnbixlLmhvcml6b250YWxBbGlnbj10aGlzLmhBbGlnbixuZXcgYShlKX0sQy5wcm90b3R5cGUuZ2V0UHJlc2V0V2luZG93PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG1bZV0/bVtlXTpudWxsfSxDLnByb3RvdHlwZS5jcmVhdGVQcmVzZXRTdHlsZT1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuY3JlYXRlRnJhbWVBcHBlYXJhbmNlKCk7aWYodCYmdC5mb2N1c2VkRnJhbWVPbmx5JiYoci5mb2N1c2VkRnJhbWVPbmx5PXQuZm9jdXNlZEZyYW1lT25seSksY1tlXSl7dmFyIG49Y1tlXSxvPW51bGw7cmV0dXJuIHQmJnQuYXBwZWFyYW5jZVBhcmFtJiYobz10LmFwcGVhcmFuY2VQYXJhbSksbi5nZXRTdHlsZShyLG8pfXJldHVybiByfSxDLnByb3RvdHlwZS5zaG93VG9hc3Q9ZnVuY3Rpb24oZSl7aWYoZSl7dmFyIHQ9dGhpcyxyPTYwLG49MjYwLG89MWUzLGE9d2luZG93LmlubmVySGVpZ2h0LTEwLXIvMixpPXdpbmRvdy5pbm5lckhlaWdodC0yMC1yLzIsbD1cIlwiLHM9ITEsZD17Ym9yZGVyUmFkaXVzOlwiMTBweFwiLGJhY2tncm91bmQ6XCJyZ2JhKDAsMCwwLDAuOClcIn07ZS5zdHlsZSYmKGQ9ZS5zdHlsZSksZS5oZWlnaHQmJihyPWUuaGVpZ2h0KSxlLndpZHRoJiYobj1lLndpZHRoKSxlLmR1cmF0aW9uJiYobz1lLmR1cmF0aW9uKSxlLmFsaWduJiYoXCJ0b3BcIj09ZS5hbGlnbj8oYT0xMCtyLzIsaT0yMCtyLzIpOlwiY2VudGVyXCI9PWUuYWxpZ24mJihhPXdpbmRvdy5pbm5lckhlaWdodC8yLGk9d2luZG93LmlubmVySGVpZ2h0LzIpKSxlLmh0bWwmJihsPWUuaHRtbCksZS50ZXh0JiYobD1lLnRleHQpLHM9MT09ZS5jbG9zZUJ1dHRvbjt2YXIgdT10LmNyZWF0ZVByZXNldFN0eWxlKFwidG9hc3RcIik7ZC5ib3JkZXJSYWRpdXMmJih1LmZyYW1lQm9yZGVyUmFkaXVzPWQuYm9yZGVyUmFkaXVzKSxlLmNsb3NlQnV0dG9uQ29sb3ImJih1LmNhcHRpb25DbG9yPWUuY2xvc2VCdXR0b25Db2xvcik7dmFyIGM9dC5jcmVhdGUoe25hbWU6XCJ0b2FzdF9cIit0LmdlbmVyYXRlVVVJRCgpLHdpZHRoOm4saGVpZ2h0OnIsbW92YWJsZTohMSxyZXNpemFibGU6ITEsYXBwZWFyYW5jZTp1LHN0eWxlOmQsaHRtbDonPGRpdiBpZD1cIm15X2VsZW1lbnRcIiBzdHlsZT1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxNnB4O2NvbG9yOmRhcmtncmF5O2hlaWdodDonK3IrJ3B4XCI+JytsK1wiPC9kaXY+XCJ9KTtzfHxjLmhpZGVGcmFtZUNvbXBvbmVudChcImNsb3NlQnV0dG9uXCIpO3ZhciBtPXdpbmRvdy5pbm5lcldpZHRoLzI7XCJyaWdodFwiPT10LmhBbGlnbiYmKG09LW0pLFwiYm90dG9tXCI9PXQudkFsaWduJiYoYS09d2luZG93LmlubmVySGVpZ2h0LGktPXdpbmRvdy5pbm5lckhlaWdodCksdC5jcmVhdGVBbmltYXRvcigpLnNldChjKS5zZXREdXJhdGlvbigzMDApLmZyb21Qb3NpdGlvbihtLGEsXCJDRU5URVJfQ0VOVEVSXCIpLnRvUG9zaXRpb24obSxpLFwiQ0VOVEVSX0NFTlRFUlwiKS50b0FscGhhKDEpLmZyb21BbHBoYSgwKS5zdGFydCgwLCExKS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zZXREdXJhdGlvbigzMDApLmZyb21Qb3NpdGlvbihtLGksXCJDRU5URVJfQ0VOVEVSXCIpLnRvUG9zaXRpb24obSxhLFwiQ0VOVEVSX0NFTlRFUlwiKS5mcm9tQWxwaGEoMSkudG9BbHBoYSguNSkuc3RhcnQobywhMSl9KSkudGhlbigoZnVuY3Rpb24oZSl7ZS5nZXQoKS5jbG9zZUZyYW1lKCl9KSl9fSxPYmplY3QuZnJlZXplKHApLGUuZXhwb3J0cz1DfSxmdW5jdGlvbihlLHQscil7dmFyIG49cigwKSxvPXIoMTMpO1wic3RyaW5nXCI9PXR5cGVvZihvPW8uX19lc01vZHVsZT9vLmRlZmF1bHQ6bykmJihvPVtbZS5pLG8sXCJcIl1dKTt2YXIgYT17aW5zZXJ0OlwiaGVhZFwiLHNpbmdsZXRvbjohMX07bihvLGEpO2UuZXhwb3J0cz1vLmxvY2Fsc3x8e319LGZ1bmN0aW9uKGUsdCxyKXsodD1yKDEpKCExKSkucHVzaChbZS5pLFwiLmpzZnJhbWUtdGl0bGViYXItZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wLCAjZjVmNWY1LCBjb2xvci1zdG9wKDEuMCwgI2Y4ZjdmMikpKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmpzZnJhbWUtdGl0bGViYXItZm9jdXNlZCB7XFxuICAgIC8qIChjKTIwMTUgSm9oYW5uZXMgSmFrb2JcXG4gICAgICAgTWFkZSB3aXRoIDwzIGluIEdlcm1hbnkgKi9cXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjAsICNlYmViZWIsIGNvbG9yLXN0b3AoMS4wLCAjZDVkNWQ1KSkpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcbn1cXG5cXG4uanNmcmFtZS1tb2RhbC13aW5kb3ctYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWRkdGg6IDEwMCVcXG59XCIsXCJcIl0pLGUuZXhwb3J0cz10fSxmdW5jdGlvbihlLHQscil7XG4vKiEgZXZlbnQtZW1pdHRlcihodHRwczovL2dpdGh1Yi5jb20vcml2ZXJzdW4vZXZlbnQtZW1pdHRlcikgdjEuMi4xIENvcHlyaWdodCAoYykgMjAyMCByaXZlcnN1bi5vcmdAZ21haWwuY29tICovXG5lLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIG89dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsciksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKXIuZChuLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCIvXCIscihyLnM9MCl9KFtmdW5jdGlvbihlLHQscil7ZS5leHBvcnRzPXIoMSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fG51bGw9PWVbU3ltYm9sLml0ZXJhdG9yXSl7aWYoQXJyYXkuaXNBcnJheShlKXx8KGU9ZnVuY3Rpb24oZSx0KXtpZihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gbyhlLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09cnx8XCJTZXRcIj09PXI/QXJyYXkuZnJvbShyKTpcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qocik/byhlLHQpOnZvaWQgMH19KGUpKSl7dmFyIHQ9MCxyPWZ1bmN0aW9uKCl7fTtyZXR1cm57czpyLG46ZnVuY3Rpb24oKXtyZXR1cm4gdD49ZS5sZW5ndGg/e2RvbmU6ITB9Ontkb25lOiExLHZhbHVlOmVbdCsrXX19LGU6ZnVuY3Rpb24oZSl7dGhyb3cgZX0sZjpyfX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9dmFyIG4sYSxpPSEwLGw9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtuPWVbU3ltYm9sLml0ZXJhdG9yXSgpfSxuOmZ1bmN0aW9uKCl7dmFyIGU9bi5uZXh0KCk7cmV0dXJuIGk9ZS5kb25lLGV9LGU6ZnVuY3Rpb24oZSl7bD0hMCxhPWV9LGY6ZnVuY3Rpb24oKXt0cnl7aXx8bnVsbD09bi5yZXR1cm58fG4ucmV0dXJuKCl9ZmluYWxseXtpZihsKXRocm93IGF9fX19ZnVuY3Rpb24gbyhlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLG49bmV3IEFycmF5KHQpO3I8dDtyKyspbltyXT1lW3JdO3JldHVybiBufWZ1bmN0aW9uIGEoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dFtyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fWZ1bmN0aW9uIGwoZSx0LHIpe3JldHVybiB0JiZpKGUucHJvdG90eXBlLHQpLHImJmkoZSxyKSxlfXIucih0KSxyLmQodCxcImRlZmF1bHRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gc30pKSxyLmQodCxcIkV2ZW50TGlzdGVuZXJMaXN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGR9KSksci5kKHQsXCJFdmVudExpc3RlbmVyTWFwXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSk7dmFyIHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe2lmKGEodGhpcyxlKSx0aGlzLm9uTGlzdGVuZXJzPW5ldyBNYXAsdGhpcy5vbmx5TGlzdGVuZXJzPW5ldyBNYXAsdCl7dmFyIHIsbz1uKHQpO3RyeXtmb3Ioby5zKCk7IShyPW8ubigpKS5kb25lOyl7dmFyIGk9ci52YWx1ZSxsPW5ldyBkO3RoaXMub25MaXN0ZW5lcnMuc2V0KGksbCl9fWNhdGNoKGUpe28uZShlKX1maW5hbGx5e28uZigpfX10aGlzLmNoaWxkRXZlbnRFbWl0dGVycz1bXX1yZXR1cm4gbChlLFt7a2V5Olwib25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXMub25MaXN0ZW5lcnMuZ2V0KGUpO3J8fChyPW5ldyBkLHRoaXMub25MaXN0ZW5lcnMuc2V0KGUscikpLHIuYWRkTGlzdGVuZXJGdW5jKHQpfX0se2tleTpcIm9ubHlcIix2YWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIG49dGhpcy5vbmx5TGlzdGVuZXJzLmdldChlKTtufHwobj1uZXcgdSx0aGlzLm9ubHlMaXN0ZW5lcnMuc2V0KGUsbikpLG4ucHV0TGlzdGVuZXJGdW5jKHQscil9fSx7a2V5OlwicGlwZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY2hpbGRFdmVudEVtaXR0ZXJzLnB1c2goZSl9fSx7a2V5OlwiZW1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5vbkxpc3RlbmVycy5nZXQoZSk7ciYmKHQuZXZlbnRUeXBlPWUsci5jYWxsTGlzdGVuZXJGdW5jKHQpKTt2YXIgbz10aGlzLm9ubHlMaXN0ZW5lcnMuZ2V0KGUpO28mJm8uY2FsbExpc3RlbmVyRnVuYyh0KTt2YXIgYSxpPW4odGhpcy5jaGlsZEV2ZW50RW1pdHRlcnMpO3RyeXtmb3IoaS5zKCk7IShhPWkubigpKS5kb25lOylhLnZhbHVlLmVtaXQoZSx0KX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX19fSx7a2V5OlwiaGFzTGlzdGVuZXJGdW5jc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKHRoaXMub25MaXN0ZW5lcnMuaGFzKGUpKXt2YXIgdD10aGlzLm9uTGlzdGVuZXJzLmdldChlKTtpZih0JiZ0Lmhhc0xpc3RlbmVyRnVuYygpKXJldHVybiEwfXZhciByLG89bih0aGlzLmNoaWxkRXZlbnRFbWl0dGVycyk7dHJ5e2ZvcihvLnMoKTshKHI9by5uKCkpLmRvbmU7KWlmKHIudmFsdWUuaGFzTGlzdGVuZXJGdW5jcyhlKSlyZXR1cm4hMH1jYXRjaChlKXtvLmUoZSl9ZmluYWxseXtvLmYoKX1yZXR1cm4hMX19LHtrZXk6XCJjbGVhckFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGUsdD1uKHRoaXMub25MaXN0ZW5lcnMudmFsdWVzKCkpO3RyeXtmb3IodC5zKCk7IShlPXQubigpKS5kb25lOyllLnZhbHVlLmNsZWFyQWxsKCl9Y2F0Y2goZSl7dC5lKGUpfWZpbmFsbHl7dC5mKCl9dGhpcy5vbkxpc3RlbmVycy5jbGVhcigpO3ZhciByLG89bih0aGlzLm9ubHlMaXN0ZW5lcnMudmFsdWVzKCkpO3RyeXtmb3Ioby5zKCk7IShyPW8ubigpKS5kb25lOylyLnZhbHVlLmNsZWFyQWxsKCl9Y2F0Y2goZSl7by5lKGUpfWZpbmFsbHl7by5mKCl9dGhpcy5vbmx5TGlzdGVuZXJzLmNsZWFyKCksdGhpcy5jaGlsZEV2ZW50RW1pdHRlcnM9W119fV0pLGV9KCksZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXthKHRoaXMsZSksdGhpcy5saXN0ZW5lckZ1bmNzPVtdfXJldHVybiBsKGUsW3trZXk6XCJjbGVhckFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5saXN0ZW5lckZ1bmNzPVtdfX0se2tleTpcImhhc0xpc3RlbmVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGlzdGVuZXJGdW5jcy5sZW5ndGg+MH19LHtrZXk6XCJhZGRMaXN0ZW5lckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmxpc3RlbmVyRnVuY3MucHVzaChlKX19LHtrZXk6XCJjYWxsTGlzdGVuZXJGdW5jXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQscj1uKHRoaXMubGlzdGVuZXJGdW5jcyk7dHJ5e2ZvcihyLnMoKTshKHQ9ci5uKCkpLmRvbmU7KSgwLHQudmFsdWUpKGUpfWNhdGNoKGUpe3IuZShlKX1maW5hbGx5e3IuZigpfX19XSksZX0oKSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2EodGhpcyxlKSx0aGlzLmxpc3RlbmVyRnVuY01hcD1uZXcgTWFwfXJldHVybiBsKGUsW3trZXk6XCJjbGVhckFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5saXN0ZW5lckZ1bmNNYXAuY2xlYXIoKX19LHtrZXk6XCJoYXNMaXN0ZW5lckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saXN0ZW5lckZ1bmNNYXAuaGFzKGUpfX0se2tleTpcInB1dExpc3RlbmVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5saXN0ZW5lckZ1bmNNYXAuc2V0KGUsdCl9fSx7a2V5OlwiY2FsbExpc3RlbmVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LHI9bih0aGlzLmxpc3RlbmVyRnVuY01hcC52YWx1ZXMoKSk7dHJ5e2ZvcihyLnMoKTshKHQ9ci5uKCkpLmRvbmU7KSgwLHQudmFsdWUpKGUpfWNhdGNoKGUpe3IuZShlKX1maW5hbGx5e3IuZigpfX19XSksZX0oKX1dKS5kZWZhdWx0fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49cig0KSxvPXIoMyksYT1yKDIpLGk9cig1KTtmdW5jdGlvbiBsKGUpe3RoaXMuZXZlbnRMaXN0ZW5lckhlbHBlcj1uZXcgaSx0aGlzLndpbmRvd01vZGU9XCJkZWZhdWx0XCIsdGhpcy5zdHlsZURpc3BsYXk9XCJmbGV4XCIsdGhpcy5ob3Jpem9udGFsQWxpZ249XCJsZWZ0XCIsdGhpcy52ZXJ0aWNhbEFsaWduPVwidG9wXCIsdGhpcy5rZXlMaXN0ZW5lcj1udWxsLHRoaXMubWluaW1pemVCdXR0b249bnVsbCx0aGlzLm1heGltaXplQnV0dG9uPW51bGwsdGhpcy5kZW1heGltaXplQnV0dG9uPW51bGwsdGhpcy5kZW1pbmltaXplQnV0dG9uPW51bGwsdGhpcy5vcHRzPWUsdGhpcy5pc1dpbmRvd01hbmFnZXJGaXhlZD1lLmZyYW1lLmpzRnJhbWUuaXNXaW5kb3dNYW5hZ2VyRml4ZWQsZS5zdHlsZURpc3BsYXkmJih0aGlzLnN0eWxlRGlzcGxheT1lLnN0eWxlRGlzcGxheSksZS5taW5pbWl6ZUJ1dHRvbiYmKHRoaXMubWluaW1pemVCdXR0b249ZS5taW5pbWl6ZUJ1dHRvbiksZS5kZW1pbmltaXplQnV0dG9uJiYodGhpcy5kZW1pbmltaXplQnV0dG9uPWUuZGVtaW5pbWl6ZUJ1dHRvbiksZS5tYXhpbWl6ZUJ1dHRvbiYmKHRoaXMubWF4aW1pemVCdXR0b249ZS5tYXhpbWl6ZUJ1dHRvbiksZS5kZW1heGltaXplQnV0dG9uJiYodGhpcy5kZW1heGltaXplQnV0dG9uPWUuZGVtYXhpbWl6ZUJ1dHRvbiksZS5oaWRlQnV0dG9uJiYodGhpcy5oaWRlQnV0dG9uPWUuaGlkZUJ1dHRvbiksZS5oaWRlQnV0dG9ucyYmKHRoaXMuaGlkZUJ1dHRvbnM9ZS5oaWRlQnV0dG9ucyksdGhpcy5tYXhpbWl6ZVBhcmFtPWUubWF4aW1pemVQYXJhbSx0aGlzLmRlbWF4aW1pemVQYXJhbT1lLmRlbWF4aW1pemVQYXJhbSx0aGlzLm1pbmltaXplUGFyYW09ZS5taW5pbWl6ZVBhcmFtLHRoaXMuZGVtaW5pbWl6ZVBhcmFtPWUuZGVtaW5pbWl6ZVBhcmFtLHRoaXMuaGlkZVBhcmFtPWUuaGlkZVBhcmFtLHRoaXMuZGVoaWRlUGFyYW09ZS5kZWhpZGVQYXJhbSxlLmhvcml6b250YWxBbGlnbiYmKHRoaXMuaG9yaXpvbnRhbEFsaWduPWUuaG9yaXpvbnRhbEFsaWduKSxlLnZlcnRpY2FsQWxpZ24mJih0aGlzLnZlcnRpY2FsQWxpZ249ZS52ZXJ0aWNhbEFsaWduKSx0aGlzLmFuaW1hdGlvbkVuYWJsZWQ9ITEsdGhpcy5hbmltYXRpb25EdXJhdGlvbj0xMDAsdGhpcy5mcmFtZT1lLmZyYW1lLHRoaXMuaGlkZUZyYW1lQm9yZGVyPSEwLHRoaXMuaGlkZVRpdGxlQmFyPSEwLHRoaXMucmVzdG9yZUtleT1udWxsLHRoaXMucmVzdG9yZUR1cmF0aW9uPW51bGwsdGhpcy5yZXN0b3JlQ2FsbGJhY2s9bnVsbCx0aGlzLnN0YXRzU3RvcmU9e30sZS5hbmltYXRpb24mJih0aGlzLmFuaW1hdGlvbkVuYWJsZWQ9ZS5hbmltYXRpb24pLGUuYW5pbWF0aW9uRHVyYXRpb24mJih0aGlzLmFuaW1hdGlvbkR1cmF0aW9uPWUuYW5pbWF0aW9uRHVyYXRpb24pLHRoaXMuZXZlbnRMaXN0ZW5lcnM9e30sdGhpcy5yZXNpemVMaXN0ZW5lcj10aGlzLmhhbmRsZU9uUmVzaXplLmJpbmQodGhpcyksdGhpcy5tYXhpbWl6ZVBhcmFtJiZ0aGlzLm1heGltaXplUGFyYW0ubWF0Y2hQYXJlbnQmJih0aGlzLnJlc2l6ZUxpc3RlbmVyPXRoaXMuaGFuZGxlT25WaXJ0dWFsUmVzaXplLmJpbmQodGhpcykpfWwuTUFUQ0hfUEFSRU5UX0NIQU5HRV9NQVJLRVJfQVRUUj1cIl9fanNmcmFtZS1tcC1tYXJrZXJcIixsLnByb3RvdHlwZS5vbj1mdW5jdGlvbihlLHQpe3RoaXMuZXZlbnRMaXN0ZW5lcnNbZV09dH0sbC5wcm90b3R5cGUuZG9NYXhpbWl6ZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKFwiaGlkXCI9PT10LndpbmRvd01vZGUpdGhyb3cgRXJyb3IoXCJbSlNyYW1lXSBJdCBpcyBub3QgcG9zc2libGUgdG8gY2hhbmdlIGRpcmVjdGx5IGZyb20gdGhlIGhpZCBzdGF0ZSB0byB0aGUgbWF4aW1pemVkIHN0YXRlXCIpO2lmKFwibWF4aW1pemVkXCIhPT10LndpbmRvd01vZGUmJlwibWF4aW1pemluZ1wiIT09dC53aW5kb3dNb2RlKXt0LndpbmRvd01vZGU9XCJtYXhpbWl6aW5nXCI7dmFyIHI9dC5mcmFtZTtpZihlJiZlLm1hdGNoUGFyZW50KXt2YXIgbj1yLmdldFdpbmRvd01hbmFnZXIoKS5nZXRQYXJlbnRFbGVtZW50KCk7aWYoIXQubWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlcil7dmFyIG89bmV3IE11dGF0aW9uT2JzZXJ2ZXIoKGZ1bmN0aW9uKCl7dC5yZXNpemVMaXN0ZW5lcigpfSkpO28ub2JzZXJ2ZShuLHthdHRyaWJ1dGVGaWx0ZXI6W2wuTUFUQ0hfUEFSRU5UX0NIQU5HRV9NQVJLRVJfQVRUUl0sYXR0cmlidXRlczohMH0pLHQubWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlcj1vfX1lbHNlIHQuZXZlbnRMaXN0ZW5lckhlbHBlci5oYXNFdmVudExpc3RlbmVyKHdpbmRvdyxcInJlc2l6ZVwiLFwid2luZG93LXJlc2l6ZS1saXN0ZW5lclwiKXx8dC5ldmVudExpc3RlbmVySGVscGVyLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LFwicmVzaXplXCIsdC5yZXNpemVMaXN0ZW5lcix7bGlzdGVuZXJOYW1lOlwid2luZG93LXJlc2l6ZS1saXN0ZW5lclwifSk7dC5zYXZlQ3VycmVudFdpbmRvd1N0YXRzKFwibWF4aW1pemVfbW9kZVwiKSx0LmhpZGVUaXRsZUJhcj0hIWUmJmUuZnVsbFNjcmVlbix0LmhpZGVUaXRsZUJhcj9yLmhpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk6KHQubWF4aW1pemVCdXR0b24mJnIuaGlkZUZyYW1lQ29tcG9uZW50KHQubWF4aW1pemVCdXR0b24pLHQuZGVtYXhpbWl6ZUJ1dHRvbiYmci5zaG93RnJhbWVDb21wb25lbnQodC5kZW1heGltaXplQnV0dG9uLHQuc3R5bGVEaXNwbGF5KSksci5zZXRNb3ZhYmxlKCExKSxyLnNldFJlc2l6YWJsZSghMSksZSYmZS5yZXN0b3JlS2V5JiYodC5yZXN0b3JlS2V5PWUucmVzdG9yZUtleSksZSYmZS5yZXN0b3JlRHVyYXRpb24mJih0LnJlc3RvcmVEdXJhdGlvbj1lLnJlc3RvcmVEdXJhdGlvbiksZSYmZS5yZXN0b3JlQ2FsbGJhY2smJih0LnJlc3RvcmVDYWxsYmFjaz1lLnJlc3RvcmVDYWxsYmFjayksdC5yZW5kZXJNYXhpbWl6ZWRNb2RlKHthbmltYXRpb246dC5hbmltYXRpb25FbmFibGVkLGNhbGxiYWNrOmUmJmUuY2FsbGJhY2s/ZS5jYWxsYmFjazpudWxsLGR1cmF0aW9uOmUmJmUuZHVyYXRpb24/ZS5kdXJhdGlvbjpudWxsLG1hdGNoUGFyZW50OiEoIWV8fCFlLm1hdGNoUGFyZW50KSYmZS5tYXRjaFBhcmVudH0pfX0sbC5wcm90b3R5cGUucmVuZGVyTWF4aW1pemVkTW9kZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dC5mcmFtZSxuPXQubG9hZFdpbmRvd1N0YXRzKFwibWF4aW1pemVfbW9kZVwiKSxvPTAsYT0wLGk9MCxsPTA7dC5oaWRlVGl0bGVCYXImJihvPTAsYT0tbi50aXRsZUJhckhlaWdodCk7dmFyIHM9d2luZG93LmlubmVyV2lkdGgsZD13aW5kb3cuaW5uZXJIZWlnaHQ7aWYoZS5tYXRjaFBhcmVudCl7dmFyIHU9ci5nZXRXaW5kb3dNYW5hZ2VyKCkuZ2V0UGFyZW50RWxlbWVudCgpO3M9dS5jbGllbnRXaWR0aCxkPXUuY2xpZW50SGVpZ2h0fXQuaGlkZUZyYW1lQm9yZGVyPyhpPXMsbD1kKyh0LmhpZGVUaXRsZUJhcj9uLnRpdGxlQmFySGVpZ2h0OjApKTooaT1zLTIqbi5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCxsPWQtMipuLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0Kyh0LmhpZGVUaXRsZUJhcj9uLnRpdGxlQmFySGVpZ2h0OjApKSxcInJpZ2h0XCI9PXQuaG9yaXpvbnRhbEFsaWduJiYobz0taSksXCJib3R0b21cIj09dC52ZXJ0aWNhbEFsaWduJiYoYT0tbCk7dmFyIGM9ZnVuY3Rpb24obil7dmFyIHM9biYmbi5kaXNhYmxlQ2FsbGJhY2s7ci5zZXRQb3NpdGlvbihvLGEpLHQuaGlkZUZyYW1lQm9yZGVyJiYoci5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdD0wLHIuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ9MCxyLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoPVwiMHB4XCIpLHIuc2V0U2l6ZShpLGwsITApLHN8fCh0LmhpZGVUaXRsZUJhciYmKHQucmVzdG9yZUtleSYmKHQua2V5TGlzdGVuZXI9ZnVuY3Rpb24oZSl7ZS5jb2RlPT09dC5yZXN0b3JlS2V5JiZ0LmRvQ29tbWFuZChcInJlc3RvcmVcIil9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0LmtleUxpc3RlbmVyKSxyLmlmcmFtZSYmci5pZnJhbWUuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQua2V5TGlzdGVuZXIpKSx0LndpbmRvd01vZGU9XCJtYXhpbWl6ZWRcIixlJiZlLmNhbGxiYWNrJiZlLmNhbGxiYWNrKHQuZnJhbWUse2V2ZW50VHlwZTpcIm1heGltaXplZFwifSksdC5ldmVudExpc3RlbmVycy5tYXhpbWl6ZWQmJnQuZXZlbnRMaXN0ZW5lcnMubWF4aW1pemVkKHQuZnJhbWUse2V2ZW50VHlwZTpcIm1heGltaXplZFwifSkpfTtlJiZlLmFuaW1hdGlvbj90LmFuaW1hdGVGcmFtZSh7ZnJhbWU6cixmcm9tOm4sdG86e2xlZnQ6byx0b3A6YSx3aWR0aDppLGhlaWdodDpsfSxkdXJhdGlvbjplLmR1cmF0aW9uP2UuZHVyYXRpb246dC5hbmltYXRpb25EdXJhdGlvbixjYWxsYmFjazpjfSk6ZSYmXCJoYW5kbGVPblJlc2l6ZVwiPT09ZS5jYWxsZXI/Yyh7ZGlzYWJsZUNhbGxiYWNrOiEwfSk6YygpfSxsLnByb3RvdHlwZS5nZXRXaW5kb3dNb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMud2luZG93TW9kZX0sbC5wcm90b3R5cGUuZG9EZW1heGltaXplPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj10LmZyYW1lO2lmKFwiaGlkXCI9PT10LndpbmRvd01vZGUpdGhyb3cgRXJyb3IoXCJbSlNGcmFtZV0gZGVtYXhpbWl6ZSg9cmVjb3ZlcnkgZnJvbSBtYXhpbWl6ZWQpIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gaGlkIHN0YXRlLlwiKTt0Lmhhc1dpbmRvd1N0YXRzKFwibWF4aW1pemVfbW9kZVwiKSYmKHQuaGlkZVRpdGxlQmFyfHwodC5tYXhpbWl6ZUJ1dHRvbiYmci5zaG93RnJhbWVDb21wb25lbnQodC5tYXhpbWl6ZUJ1dHRvbix0LnN0eWxlRGlzcGxheSksdC5kZW1heGltaXplQnV0dG9uJiZyLmhpZGVGcmFtZUNvbXBvbmVudCh0LmRlbWF4aW1pemVCdXR0b24pKSx0LnJlc3RvcmVXaW5kb3coe3Jlc3RvcmVQb3NpdGlvbjohMCxyZXN0b3JlTW9kZTpcIm1heGltaXplX21vZGVcIixhbmltYXRpb246dC5hbmltYXRpb25FbmFibGVkLGNhbGxiYWNrOmUmJmUuY2FsbGJhY2s/ZS5jYWxsYmFjazpudWxsLGZvcmNlU2hvd0ZyYW1lQ29tcG9uZW50czp0LmFuaW1hdGlvbkVuYWJsZWQmJnQuaGlkZVRpdGxlQmFyLGR1cmF0aW9uOmUmJmUuZHVyYXRpb24/ZS5kdXJhdGlvbjpudWxsLGV2ZW50VHlwZTpcImRlbWF4aW1pemVkXCJ9KSl9LGwucHJvdG90eXBlLmhhbmRsZU9uUmVzaXplPWZ1bmN0aW9uKCl7dGhpcy5yZW5kZXJNYXhpbWl6ZWRNb2RlKHtjYWxsZXI6XCJoYW5kbGVPblJlc2l6ZVwifSl9LGwucHJvdG90eXBlLmhhbmRsZU9uVmlydHVhbFJlc2l6ZT1mdW5jdGlvbigpe3RoaXMucmVuZGVyTWF4aW1pemVkTW9kZSh7Y2FsbGVyOlwiaGFuZGxlT25SZXNpemVcIixtYXRjaFBhcmVudDohMH0pfSxsLnByb3RvdHlwZS5kb01pbmltaXplPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoXCJtaW5pbWl6ZWRcIiE9PXQud2luZG93TW9kZSYmXCJtaW5pbWl6aW5nXCIhPT10LndpbmRvd01vZGUpe3Qud2luZG93TW9kZT1cIm1pbmltaXppbmdcIjt2YXIgcj10LmZyYW1lO3Quc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cyhcIm1pbmltaXplX21vZGVcIiksci5zZXRSZXNpemFibGUoITEpLHQucmVuZGVyTWluaW1pemVkTW9kZSh7YW5pbWF0aW9uOnQuYW5pbWF0aW9uRW5hYmxlZCxjYWxsYmFjazplJiZlLmNhbGxiYWNrP2UuY2FsbGJhY2s6bnVsbCxkdXJhdGlvbjplJiZlLmR1cmF0aW9uP2UuZHVyYXRpb246bnVsbCx0b1dpZHRoOmUmJmUudG9XaWR0aD9lLnRvV2lkdGg6bnVsbH0pfX0sbC5wcm90b3R5cGUucmVuZGVyTWluaW1pemVkTW9kZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dC5mcmFtZSxuPXQubG9hZFdpbmRvd1N0YXRzKFwibWluaW1pemVfbW9kZVwiKSxvPXQuZ2V0Q3VycmVudFdpbmRvd1N0YXRzKCksYT10LmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO2EuaGVpZ2h0PW4udGl0bGVCYXJIZWlnaHQsZSYmZS50b1dpZHRoJiYoYS53aWR0aD1lLnRvV2lkdGgpO3ZhciBpPWZ1bmN0aW9uKCl7ci5zZXRTaXplKGEud2lkdGgsYS5oZWlnaHQsITApLHQud2luZG93TW9kZT1cIm1pbmltaXplZFwiLHQubWluaW1pemVCdXR0b24mJnIuaGlkZUZyYW1lQ29tcG9uZW50KHQubWluaW1pemVCdXR0b24pLHQuZGVtaW5pbWl6ZUJ1dHRvbiYmci5zaG93RnJhbWVDb21wb25lbnQodC5kZW1pbmltaXplQnV0dG9uLHQuc3R5bGVEaXNwbGF5KSxlLmNhbGxiYWNrJiZlLmNhbGxiYWNrKHQuZnJhbWUse2V2ZW50VHlwZTpcIm1pbmltaXplZFwifSksdC5ldmVudExpc3RlbmVycy5taW5pbWl6ZWQmJnQuZXZlbnRMaXN0ZW5lcnMubWluaW1pemVkKHQuZnJhbWUse2V2ZW50VHlwZTpcIm1pbmltaXplZFwifSl9O2UmJmUuYW5pbWF0aW9uP3QuYW5pbWF0ZUZyYW1lKHt0b0FscGhhOjEsZHVyYXRpb246ZS5kdXJhdGlvbj9lLmR1cmF0aW9uOnQuYW5pbWF0aW9uRHVyYXRpb24sZnJhbWU6cixmcm9tOm8sdG86YSxjYWxsYmFjazppfSk6aSgpfSxsLnByb3RvdHlwZS5kb0RlbWluaW1pemU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXQuZnJhbWU7dC5oYXNXaW5kb3dTdGF0cyhcIm1pbmltaXplX21vZGVcIikmJih0Lm1pbmltaXplQnV0dG9uJiZyLnNob3dGcmFtZUNvbXBvbmVudCh0Lm1pbmltaXplQnV0dG9uLHQuc3R5bGVEaXNwbGF5KSx0LmRlbWluaW1pemVCdXR0b24mJnIuaGlkZUZyYW1lQ29tcG9uZW50KHQuZGVtaW5pbWl6ZUJ1dHRvbiksdC5yZXN0b3JlV2luZG93KHtyZXN0b3JlUG9zaXRpb246ITEscmVzdG9yZU1vZGU6XCJtaW5pbWl6ZV9tb2RlXCIsYW5pbWF0aW9uOnQuYW5pbWF0aW9uRW5hYmxlZCxkdXJhdGlvbjplJiZlLmR1cmF0aW9uP2UuZHVyYXRpb246bnVsbCxjYWxsYmFjazplJiZlLmNhbGxiYWNrP2UuY2FsbGJhY2s6bnVsbCxldmVudFR5cGU6XCJkZW1pbmltaXplZFwifSkpfSxsLnByb3RvdHlwZS5kb0hpZGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZihcImhpZFwiIT09dC53aW5kb3dNb2RlJiZcImhpZGluZ1wiIT09dC53aW5kb3dNb2RlKXt0LndpbmRvd01vZGU9XCJoaWRpbmdcIjt2YXIgcj10LmZyYW1lO3Quc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cyhcImhpZGVfbW9kZVwiKSxyLnNldFJlc2l6YWJsZSghMSk7dmFyIG49e2FuaW1hdGlvbjp0LmFuaW1hdGlvbkVuYWJsZWR9O2UmJmEoe29wOlwib3ZlcndyaXRlLW1lcmdlXCIsb2JqZWN0MTpuLG9iamVjdDI6ZX0pLHQucmVuZGVySGlkZU1vZGUobil9fSxsLnByb3RvdHlwZS5yZW5kZXJIaWRlTW9kZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dC5mcmFtZSxuPXQubG9hZFdpbmRvd1N0YXRzKFwiaGlkZV9tb2RlXCIpLGE9dC5nZXRDdXJyZW50V2luZG93U3RhdHMoKSxpPXt4OjAseTowfSxsPWUudG9FbGVtZW50O2Uub2Zmc2V0JiYoaT1lLm9mZnNldCk7dmFyIHM9MCxkPTAsdT1lJiZlLmFsaWduP2UuYWxpZ246XCJMRUZUX1RPUFwiO2lmKHUmJm8uTEVGVF9UT1AhPXUpe2lmKG8uSENFTlRFUl9UT1A9PXUpcz1hLmxlZnQrYS53aWR0aC8yLGQ9YS50b3A7ZWxzZSBpZihvLlJJR0hUX1RPUD09dSlzPWEubGVmdCthLndpZHRoLGQ9YS50b3A7ZWxzZSBpZihvLkxFRlRfVkNFTlRFUj09dSlzPWEubGVmdCxkPWEudG9wK2EuaGVpZ2h0LzI7ZWxzZSBpZihvLkhDRU5URVJfVkNFTlRFUj09dSlzPWEubGVmdCthLndpZHRoLzIsZD1hLnRvcCthLmhlaWdodC8yO2Vsc2UgaWYoby5SSUdIVF9WQ0VOVEVSPT11KXM9YS5sZWZ0K2Eud2lkdGgsZD1hLnRvcCthLmhlaWdodC8yO2Vsc2UgaWYoby5MRUZUX0JPVFRPTT09dSlzPWEubGVmdCxkPWEudG9wK2EuaGVpZ2h0O2Vsc2UgaWYoby5IQ0VOVEVSX0JPVFRPTT09dSlzPWEubGVmdCthLndpZHRoLzIsZD1hLnRvcCthLmhlaWdodDtlbHNlIGlmKG8uUklHSFRfQk9UVE9NPT11KXM9YS5sZWZ0K2Eud2lkdGgsZD1hLnRvcCthLmhlaWdodDtlbHNlIGlmKFwiQUJTT0xVVEVcIj09dSlpZihsKXt2YXIgYz1sLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3QuaXNXaW5kb3dNYW5hZ2VyRml4ZWQ/KHM9Yy5sZWZ0LGQ9Yy50b3ApOihzPWMubGVmdCt3aW5kb3cucGFnZVhPZmZzZXQsZD1jLnRvcCt3aW5kb3cucGFnZVlPZmZzZXQpfWVsc2Ugcz1pLngsZD1pLnl9ZWxzZSBzPWEubGVmdCxkPWEudG9wO3ZhciBtPXtsZWZ0OnMsdG9wOmQsd2lkdGg6MCxoZWlnaHQ6bi50aXRsZUJhckhlaWdodH0scD1mdW5jdGlvbigpe3Iuc2V0U2l6ZShtLndpZHRoLG0uaGVpZ2h0LCEwKSx0LndpbmRvd01vZGU9XCJoaWRcIixlJiZlLmNhbGxiYWNrJiZlLmNhbGxiYWNrKHQuZnJhbWUse2V2ZW50VHlwZTpcImhpZFwifSksdC5ldmVudExpc3RlbmVycy5oaWQmJnQuZXZlbnRMaXN0ZW5lcnMuaGlkKHQuZnJhbWUse2V2ZW50VHlwZTpcImhpZFwifSl9O3IuaGlkZUFsbFZpc2libGVGcmFtZUNvbXBvbmVudHMoKSxlJiZlLmFuaW1hdGlvbj90LmFuaW1hdGVGcmFtZSh7ZnJvbUFscGhhOmUuc2lsZW50PzA6MSx0b0FscGhhOjAsZWFzZTohMCxkdXJhdGlvbjplLmR1cmF0aW9uP2UuZHVyYXRpb246dC5hbmltYXRpb25EdXJhdGlvbixmcmFtZTpyLGZyb206YSx0bzptLGNhbGxiYWNrOnB9KTpwKCl9LGwucHJvdG90eXBlLmRvRGVoaWRlPWZ1bmN0aW9uKGUpe3RoaXMuZnJhbWU7dGhpcy5oYXNXaW5kb3dTdGF0cyhcImhpZGVfbW9kZVwiKSYmdGhpcy5yZXN0b3JlV2luZG93KHtkdXJhdGlvbjplJiZlLmR1cmF0aW9uP2UuZHVyYXRpb246bnVsbCxyZXN0b3JlUG9zaXRpb246ITAscmVzdG9yZU1vZGU6XCJoaWRlX21vZGVcIixhbmltYXRpb246dGhpcy5hbmltYXRpb25FbmFibGVkLGZvcmNlU2hvd0ZyYW1lQ29tcG9uZW50czohMCxjYWxsYmFjazplJiZlLmNhbGxiYWNrP2UuY2FsbGJhY2s6bnVsbCxldmVudFR5cGU6XCJkZWhpZGVkXCJ9KX0sbC5wcm90b3R5cGUubG9hZFdpbmRvd1N0YXRzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnN0YXRzU3RvcmVbZV19LGwucHJvdG90eXBlLnNhdmVDdXJyZW50V2luZG93U3RhdHM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXQuZ2V0Q3VycmVudFdpbmRvd1N0YXRzKCk7aWYodC5oYXNXaW5kb3dTdGF0cyhlKSl7dmFyIG49dC5sb2FkV2luZG93U3RhdHMoZSksbz0hdC53aW5kb3dTdGF0c0VxdWFscyhyLG4pO3JldHVybiBvJiYodC5zdGF0c1N0b3JlW2VdPXIpLG99cmV0dXJuIHQuc3RhdHNTdG9yZVtlXT1yLCEwfSxsLnByb3RvdHlwZS53aW5kb3dTdGF0c0VxdWFscz1mdW5jdGlvbihlLHQpe3JldHVybiEoIWV8fCF0KSYmSlNPTi5zdHJpbmdpZnkoZSk9PT1KU09OLnN0cmluZ2lmeSh0KX0sbC5wcm90b3R5cGUuY2xlYXJXaW5kb3dTdGF0cz1mdW5jdGlvbihlKXt0aGlzLnN0YXRzU3RvcmVbZV09bnVsbH0sbC5wcm90b3R5cGUuaGFzV2luZG93U3RhdHM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc3RhdHNTdG9yZVtlXX0sbC5wcm90b3R5cGUuZ2V0Q3VycmVudFdpbmRvd1N0YXRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5mcmFtZSx0PXBhcnNlSW50KGUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0LDEwKSxyPWUuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsbj1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO3JldHVybntsZWZ0OmUuZ2V0TGVmdCgpLHRvcDplLmdldFRvcCgpLHdpZHRoOmUuZ2V0V2lkdGgoKSxoZWlnaHQ6ZS5nZXRIZWlnaHQoKSx0aXRsZUJhckhlaWdodDp0LGZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0OnIsZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ6bixyZXNpemFibGU6ZS5yZXNpemFibGUsbW92YWJsZTplLm1vdmFibGV9fSxsLnByb3RvdHlwZS5yZXN0b3JlV2luZG93PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj10LmZyYW1lLG49dC5sb2FkV2luZG93U3RhdHMoZS5yZXN0b3JlTW9kZSksbz10LmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO3IuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ9bi5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCxyLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkPW4uZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQsci5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aD1yLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO3ZhciBhPWZ1bmN0aW9uKCl7ZSYmMD09ZS5yZXN0b3JlUG9zaXRpb24mJihuLmxlZnQ9by5sZWZ0LG4udG9wPW8udG9wKSxyLnNldFBvc2l0aW9uKG4ubGVmdCxuLnRvcCk7ci5zZXRTaXplKG4ud2lkdGgsbi5oZWlnaHQsITApLHIuc2V0UmVzaXphYmxlKG4ucmVzaXphYmxlKSxyLnNldE1vdmFibGUobi5tb3ZhYmxlKSx0LmNsZWFyV2luZG93U3RhdHMoZS5yZXN0b3JlTW9kZSksdC5rZXlMaXN0ZW5lciYmKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQua2V5TGlzdGVuZXIpLHIuaWZyYW1lJiZyLmlmcmFtZS5jb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdC5rZXlMaXN0ZW5lciksdC5rZXlMaXN0ZW5lcj1udWxsKSx0LndpbmRvd01vZGU9XCJkZWZhdWx0XCIsZSYmZS5mb3JjZVNob3dGcmFtZUNvbXBvbmVudHMmJnIuc2hvd0FsbFZpc2libGVGcmFtZUNvbXBvbmVudHMoKSxyLnNob3coKTt2YXIgYT1cInJlc3RvcmVkXCI7ZSYmZS5ldmVudFR5cGUmJihhPWUuZXZlbnRUeXBlKSxlJiZlLmNhbGxiYWNrJiZlLmNhbGxiYWNrKHQuZnJhbWUse2V2ZW50VHlwZTphfSksdC5ldmVudExpc3RlbmVyc1thXSYmdC5ldmVudExpc3RlbmVyc1thXSh0LmZyYW1lLHtldmVudFR5cGU6YX0pfTtlJiZlLmFuaW1hdGlvbj90LmFuaW1hdGVGcmFtZSh7ZHVyYXRpb246ZS5kdXJhdGlvbj9lLmR1cmF0aW9uOnQuYW5pbWF0aW9uRHVyYXRpb24sZnJhbWU6cixmcm9tQWxwaGE6MCx0b0FscGhhOjEsZnJvbTpvLHRvOm4sY2FsbGJhY2s6YX0pOmEoKSx0LmV2ZW50TGlzdGVuZXJIZWxwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csXCJyZXNpemVcIix0LnJlc2l6ZUxpc3RlbmVyKSx0Lm1hdGNoUGFyZW50UmVzaXplT2JzZXJ2ZXImJih0Lm1hdGNoUGFyZW50UmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpLHQubWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlcj1udWxsKX0sbC5wcm90b3R5cGUuYW5pbWF0ZUZyYW1lPWZ1bmN0aW9uKGUpe3ZhciB0PWlzTmFOKGUuZnJvbUFscGhhKT8xOmUuZnJvbUFscGhhLHI9ZS5mcm9tLG89ZS50bzsobmV3IG4pLnNldChlLmZyYW1lKS5zZXREdXJhdGlvbihlLmR1cmF0aW9uP2UuZHVyYXRpb246dGhpcy5hbmltYXRpb25EdXJhdGlvbikuZnJvbVBvc2l0aW9uKHIubGVmdCxyLnRvcCxcIkxFRlRfVE9QXCIpLnRvUG9zaXRpb24oby5sZWZ0LG8udG9wLFwiTEVGVF9UT1BcIikuZnJvbVdpZHRoKHIud2lkdGgpLmZyb21IZWlnaHQoci5oZWlnaHQpLnRvV2lkdGgoby53aWR0aCkudG9IZWlnaHQoby5oZWlnaHQpLmZyb21BbHBoYSh0KS50b0FscGhhKDA9PWUudG9BbHBoYT8wOjEpLmVhc2UoZS5lYXNlKS5zdGFydCgwLCExKS50aGVuKChmdW5jdGlvbih0KXtlLmNhbGxiYWNrKCl9KSl9LGwucHJvdG90eXBlLmRvQ29tbWFuZD1mdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7XCJtYXhpbWl6ZVwiPT09ZSYmci5fZGVmYXVsdEZ1bmN0aW9uTWF4aW1pemUoci5mcmFtZSksXCJkZW1heGltaXplXCI9PT1lJiZyLl9kZWZhdWx0RnVuY3Rpb25EZW1heGltaXplKHIuZnJhbWUpLFwicmVzdG9yZVwiPT09ZSYmci5fZGVmYXVsdEZ1bmN0aW9uUmVzdG9yZUZyb21GdWxsc2NyZWVuKHIuZnJhbWUpLFwibWluaW1pemVcIj09PWUmJnIuX2RlZmF1bHRGdW5jdGlvbk1pbmltaXplKHIuZnJhbWUpLFwiZGVtaW5pbWl6ZVwiPT09ZSYmci5fZGVmYXVsdEZ1bmN0aW9uRGVtaW5pbWl6ZShyLmZyYW1lKSxcImhpZGVcIj09PWUmJnIuX2RlZmF1bHRGdW5jdGlvbkhpZGUoci5mcmFtZSksXCJkZWhpZGVcIj09PWUmJnIuX2RlZmF1bHRGdW5jdGlvbkRlaGlkZShyLmZyYW1lKX0sbC5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvbk1heGltaXplPWZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5vcHRzLG49e2Z1bGxTY3JlZW46ITA9PT1yLm1heGltaXplV2l0aG91dFRpdGxlQmFyLHJlc3RvcmVLZXk6ci5yZXN0b3JlS2V5P3IucmVzdG9yZUtleTpcIkVzY2FwZVwiLHJlc3RvcmVEdXJhdGlvbjpyLnJlc3RvcmVEdXJhdGlvbn07dGhpcy5tYXhpbWl6ZVBhcmFtJiZhKHtvcDpcIm92ZXJ3cml0ZS1tZXJnZVwiLG9iamVjdDE6bixvYmplY3QyOnRoaXMubWF4aW1pemVQYXJhbX0pLGUuY29udHJvbC5kb01heGltaXplKG4pfSxsLnByb3RvdHlwZS5fZGVmYXVsdEZ1bmN0aW9uRGVtYXhpbWl6ZT1mdW5jdGlvbihlLHQpe2UuY29udHJvbC5kb0RlbWF4aW1pemUoe30pfSxsLnByb3RvdHlwZS5fZGVmYXVsdEZ1bmN0aW9uUmVzdG9yZUZyb21GdWxsc2NyZWVuPWZ1bmN0aW9uKGUsdCl7ZS5jb250cm9sLmRvRGVtYXhpbWl6ZSh7ZHVyYXRpb246dGhpcy5yZXN0b3JlRHVyYXRpb24/dGhpcy5yZXN0b3JlRHVyYXRpb246bnVsbCxjYWxsYmFjazp0aGlzLnJlc3RvcmVDYWxsYmFjaz90aGlzLnJlc3RvcmVDYWxsYmFjazpudWxsfSl9LGwucHJvdG90eXBlLl9kZWZhdWx0RnVuY3Rpb25NaW5pbWl6ZT1mdW5jdGlvbihlLHQpe2UuY29udHJvbC5kb01pbmltaXplKHRoaXMubWluaW1pemVQYXJhbSl9LGwucHJvdG90eXBlLl9kZWZhdWx0RnVuY3Rpb25EZW1pbmltaXplPWZ1bmN0aW9uKGUsdCl7ZS5jb250cm9sLmRvRGVtaW5pbWl6ZSh0aGlzLmRlbWluaW1pemVQYXJhbSl9LGwucHJvdG90eXBlLl9kZWZhdWx0RnVuY3Rpb25IaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIHI9e2FsaWduOlwiQ0VOVEVSX0JPVFRPTVwifTt0aGlzLmhpZGVQYXJhbSYmKHI9dGhpcy5oaWRlUGFyYW0pLGUuY29udHJvbC5kb0hpZGUocil9LGwucHJvdG90eXBlLl9kZWZhdWx0RnVuY3Rpb25EZWhpZGU9ZnVuY3Rpb24oZSx0KXtlLmNvbnRyb2wuZG9EZWhpZGUodGhpcy5kZWhpZGVQYXJhbSl9LGwucHJvdG90eXBlLnNldHVwRGVmYXVsdEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYoZS5tYXhpbWl6ZUJ1dHRvbiYmZS5mcmFtZS5vbihlLm1heGltaXplQnV0dG9uLFwiY2xpY2tcIixlLl9kZWZhdWx0RnVuY3Rpb25NYXhpbWl6ZS5iaW5kKGUpKSxlLmRlbWF4aW1pemVCdXR0b24mJmUuZnJhbWUub24oZS5kZW1heGltaXplQnV0dG9uLFwiY2xpY2tcIixlLl9kZWZhdWx0RnVuY3Rpb25EZW1heGltaXplLmJpbmQoZSkpLGUubWluaW1pemVCdXR0b24mJmUuZnJhbWUub24oZS5taW5pbWl6ZUJ1dHRvbixcImNsaWNrXCIsZS5fZGVmYXVsdEZ1bmN0aW9uTWluaW1pemUuYmluZChlKSksZS5kZW1pbmltaXplQnV0dG9uJiZlLmZyYW1lLm9uKGUuZGVtaW5pbWl6ZUJ1dHRvbixcImNsaWNrXCIsZS5fZGVmYXVsdEZ1bmN0aW9uRGVtaW5pbWl6ZS5iaW5kKGUpKSxlLmhpZGVCdXR0b24mJmUuZnJhbWUub24oZS5oaWRlQnV0dG9uLFwiY2xpY2tcIixlLl9kZWZhdWx0RnVuY3Rpb25IaWRlLmJpbmQoZSkpLGUuaGlkZUJ1dHRvbnMpZm9yKHZhciB0IGluIGUuaGlkZUJ1dHRvbnMpe3ZhciByPWUuaGlkZUJ1dHRvbnNbdF07ciYmZS5mcmFtZS5vbihyLFwiY2xpY2tcIixlLl9kZWZhdWx0RnVuY3Rpb25IaWRlLmJpbmQoZSkpfX0sZS5leHBvcnRzPWx9LGZ1bmN0aW9uKGUsdCl7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpcztlLl90aW1lcklkPW51bGwsZS5faXNSdW5uaW5nPSExLGUuX3RpbWVySW50ZXJ2YWw9MCxlLl9pbnRlcm5hbENhbGxiYWNrPWZ1bmN0aW9uKCl7ZS5fdGltZXJNZXRob2QmJmUuX3RpbWVyTWV0aG9kKGUpO2UuX2lzUnVubmluZyYmKGNsZWFyVGltZW91dChlLl90aW1lcklkKSxlLl90aW1lcklkPXNldFRpbWVvdXQoZS5faW50ZXJuYWxDYWxsYmFjayxlLl90aW1lckludGVydmFsKSl9LGUuX3RpbWVyTWV0aG9kPW51bGx9cmV0dXJuIGUucHJvdG90eXBlLnNldENhbGxiYWNrPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl90aW1lck1ldGhvZD1lLHRoaXN9LGUucHJvdG90eXBlLnNldEludGVydmFsTWlsbGlzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl90aW1lckludGVydmFsPWUsdGhpc30sZS5wcm90b3R5cGUuc3RvcFRpbWVyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lzUnVubmluZz0hMSx0aGlzfSxlLnByb3RvdHlwZS5zdGFydFRpbWVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gZS5fdGltZXJJbnRlcnZhbD4wJiYoZS5fdGltZXJJZD1zZXRUaW1lb3V0KGUuX2ludGVybmFsQ2FsbGJhY2ssZS5fdGltZXJJbnRlcnZhbCksZS5faXNSdW5uaW5nPSEwKSxlfSxlfSgpO2UuZXhwb3J0cz1yfSxmdW5jdGlvbihlLHQscil7dmFyIG49cig3KSxvPXIoMjApO2Z1bmN0aW9uIGEoKXt2YXIgZT10aGlzO3RoaXMuc2hvd1RpdGxlQmFyPSEwLHRoaXMuc2hvd0Nsb3NlQnV0dG9uPSEwLHRoaXMudGl0bGVCYXJDYXB0aW9uPVwiXCIsdGhpcy50aXRsZUJhckNhcHRpb25Gb250U2l6ZT1cIjEycHhcIix0aGlzLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ9XCJib2xkXCIsdGhpcy50aXRsZUJhckhlaWdodD1cIjI0cHhcIix0aGlzLnVzZUlmcmFtZT0hMSx0aGlzLnVzZUZyYW1lPSEwLHRoaXMudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0PW51bGwsdGhpcy50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ9bnVsbCx0aGlzLnNldFVzZUlGcmFtZT1mdW5jdGlvbih0KXtyZXR1cm4gZS51c2VJZnJhbWU9dCxlLnVzZUZyYW1lPSF0LGV9LHRoaXMudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbj1cIjVweFwiLHRoaXMudGl0bGVCYXJDb2xvckRlZmF1bHQ9bnVsbCx0aGlzLnRpdGxlQmFyQ29sb3JGb2N1c2VkPW51bGwsdGhpcy50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQ9XCJcIix0aGlzLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZD1cIlwiLHRoaXMudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdz1cIjAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNylcIix0aGlzLnRpdGxlQmFyQ2FwdGlvblRleHRBbGlnbj1cImNlbnRlclwiLHRoaXMudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0PVwiMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKVwiLHRoaXMudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkPW51bGwsdGhpcy5mcmFtZUJvcmRlclJhZGl1cz1cIjZweFwiLHRoaXMuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ9XCIxcHhcIix0aGlzLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkPXRoaXMuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsdGhpcy5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdD1cInJnYmEoMSwgMSwgMSwgMC4yKVwiLHRoaXMuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ9dGhpcy5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCx0aGlzLmZyYW1lQm9yZGVyU3R5bGU9XCJzb2xpZFwiLHRoaXMuZnJhbWVCb3hTaGFkb3c9XCIycHggM3B4IDE2cHggcmdiYSgwLDAsMCwuNilcIix0aGlzLmZyYW1lQmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIix0aGlzLl9wYXJ0c0J1aWxkZXI9bnVsbCx0aGlzLmZyYW1lQ29tcG9uZW50cz1bXSx0aGlzLmZyYW1lSGVpZ2h0QWRqdXN0PTEsdGhpcy5yZXNpemVBcmVhV2lkdGg9MjAsdGhpcy5yZXNpemVBcmVhSGVpZ2h0PTIwLHRoaXMucmVzaXplQXJlYU9mZnNldD0wLHRoaXMucmVzaXplQXJlYVZpc2libGU9ITEsdGhpcy5nZXRGcmFtZUlubmVyQm9yZGVyUmFkaXVzPWZ1bmN0aW9uKHQscil7cmV0dXJuIHQ/cj97ZnJhbWVBcHBlYXJhbmNlOmUsaW5uZXJCb3JkZXJSYWRpdXM6cGFyc2VJbnQodC5mcmFtZUJvcmRlclJhZGl1cywxMCktcGFyc2VJbnQodC5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCwxMCkrXCJweFwifTp7ZnJhbWVBcHBlYXJhbmNlOmUsaW5uZXJCb3JkZXJSYWRpdXM6cGFyc2VJbnQodC5mcmFtZUJvcmRlclJhZGl1cywxMCktcGFyc2VJbnQodC5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCwxMCkrXCJweFwifTpudWxsfSx0aGlzLm9uSW5pdGlhbGl6ZT1mdW5jdGlvbigpe2lmKGUuc2hvd0Nsb3NlQnV0dG9uKXt2YXIgdD1lLmdldFBhcnRzQnVpbGRlcigpLHI9dC5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7ci5zaXplPTE0LHIuY2FwdGlvblNoaWZ0WXB4PTAsci5jYXB0aW9uRm9udFJhdGlvPTEsci5ib3JkZXJSYWRpdXM9MixyLmJhY2tncm91bmRDb2xvclByZXNzZWQ9XCJ0cmFuc3BhcmVudFwiLHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdD1cInRyYW5zcGFyZW50XCIsci5jYXB0aW9uPVwi4pyWXCIsci5jYXB0aW9uQ29sb3JEZWZhdWx0PVwiZ3JheVwiLHIuY2FwdGlvbkNvbG9yRm9jdXNlZD1cImdyYXlcIixyLmNhcHRpb25Db2xvckhvdmVyZWQ9XCJzaWx2ZXJcIixyLmNhcHRpb25Db2xvclByZXNzZWQ9XCJibGFja1wiLHIuYm9yZGVyV2lkdGg9MCxyLmJvcmRlckNvbG9yRGVmYXVsdD1cIiNhYWFhYWFcIixyLmJvcmRlclN0eWxlPVwic29saWRcIjt2YXIgbj10LmJ1aWxkVGV4dEJ1dHRvbihyKTtlLmFkZEZyYW1lQ29tcG9uZW50KFwiY2xvc2VCdXR0b25cIixuLC0xMCwtMTgsXCJSSUdIVF9UT1BcIil9fSx0aGlzLm9uVGl0bGVCYXJTdHlsZUluaXRpYWxpemU9ZnVuY3Rpb24oKXt9fWEucHJvdG90eXBlLmdldFBhcnRzQnVpbGRlcj1mdW5jdGlvbigpe3JldHVybiBudWxsPT09dGhpcy5fcGFydHNCdWlsZGVyJiYodGhpcy5fcGFydHNCdWlsZGVyPW5ldyBuKSx0aGlzLl9wYXJ0c0J1aWxkZXJ9LGEucHJvdG90eXBlLmluaXRpYWxpemU9ZnVuY3Rpb24oKXt0aGlzLm9uSW5pdGlhbGl6ZSgpfSxhLnByb3RvdHlwZS5hZGRGcmFtZUNvbXBvbmVudD1mdW5jdGlvbihlLHQscixuLGEsaSl7dmFyIGw9bmV3IG8oZSx0LHIsbixhLGkpO3JldHVybiB0Ll9vblRha2VGb2N1cyYmdC5fb25SZWxlYXNlRm9jdXMmJmwuc2V0Rm9jdXNDYWxsYmFjayh0Ll9vblRha2VGb2N1cyx0Ll9vblJlbGVhc2VGb2N1cyksdGhpcy5mcmFtZUNvbXBvbmVudHMucHVzaChsKSxsfSxlLmV4cG9ydHM9YX0sZnVuY3Rpb24oZSx0LHIpe2Z1bmN0aW9uIG4oKXt0aGlzLmltYWdlRGVmYXVsdD1udWxsLHRoaXMuaW1hZ2VIb3ZlcmVkPW51bGwsdGhpcy5pbWFnZVByZXNzZWQ9bnVsbCx0aGlzLmltYWdlRm9jdXNlZD1udWxsLHRoaXMuaW1hZ2VTdG9yZT17fX1yKDYpKG4scig4KSksbi5wcm90b3R5cGUuX3NldEltYWdlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj10aGlzLmltYWdlU3RvcmVbZV07aWYobilyZXR1cm4gbjt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO2lmKG8uc3JjPWUsdCYmcil7dmFyIGE9XCJtYXJnaW46MHB4O3BhZGRpbmc6MHB4O3dpZHRoOlwiK3QrXCJweDtoZWlnaHQ6XCIrcitcInB4XCI7by5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGEpfXJldHVybiB0aGlzLmltYWdlU3RvcmVbZV09byxvfSxuLnByb3RvdHlwZS5zZXRTcmM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztlLmRlZmF1bHQmJih0LmltYWdlRGVmYXVsdD10Ll9zZXRJbWFnZShlLmRlZmF1bHQsZS53aWR0aCxlLmhlaWdodCkpLGUuaG92ZXJlZCYmKHQuaW1hZ2VIb3ZlcmVkPXQuX3NldEltYWdlKGUuaG92ZXJlZCxlLndpZHRoLGUuaGVpZ2h0KSksZS5wcmVzc2VkJiYodC5pbWFnZVByZXNzZWQ9dC5fc2V0SW1hZ2UoZS5wcmVzc2VkLGUud2lkdGgsZS5oZWlnaHQpKSxlLmZvY3VzZWQmJih0LmltYWdlRm9jdXNlZD10Ll9zZXRJbWFnZShlLmZvY3VzZWQsZS53aWR0aCxlLmhlaWdodCkpfSxlLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dGhpcy5jaGlsZE1lbnVIVE1MPVwiXCIsdGhpcy5jaGlsZE1lbnVXaWR0aD0wLHRoaXMuY2hpbGRNZW51QWxpZ249XCJMRUZUXCIsdGhpcy55T2Zmc2V0PTAsdGhpcy54T2Zmc2V0PTB9fSxmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHIoZSx0LHIsbixvLGEpe3ZhciBpPXRoaXM7aS5pZD1lLGkueD1yLGkueT1uLGkuZnJhbWU9bnVsbCxpLl9mb2N1c1Rha2luZ0NhbGxhYmNrPW51bGwsaS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaz1udWxsLGkuZnJhbWVDb21wb25lbnRBbGlnbj1vfHxDQUxJR04uTEVGVF9UT1AsaS5odG1sRWxlbWVudD10LGkuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4PTUwLGkuaHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29tcG9uZW50LWlkXCIsZSksYSYmYS5jaGlsZE1lbnU/aS5jaGlsZE1lbnU9YS5jaGlsZE1lbnU6dC5xdWVyeVNlbGVjdG9yKFwiLmpzZnJhbWUtY2hpbGQtbWVudVwiKSYmKGkuY2hpbGRNZW51PXQucXVlcnlTZWxlY3RvcihcIi5qc2ZyYW1lLWNoaWxkLW1lbnVcIikpfXIucHJvdG90eXBlLnNldEZvY3VzQ2FsbGJhY2s9ZnVuY3Rpb24oZSx0KXt0aGlzLl9mb2N1c1Rha2luZ0NhbGxhYmNrPWUsdGhpcy5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaz10fSxyLnByb3RvdHlwZS5zZXRGcmFtZT1mdW5jdGlvbihlKXt0aGlzLmZyYW1lPWUsdGhpcy5odG1sRWxlbWVudC5wYXJlbnRPYmplY3Q9ZSx0aGlzLnVwZGF0ZUFsaWduKCl9LHIucHJvdG90eXBlLnVwZGF0ZUFsaWduPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuZnJhbWVDb21wb25lbnRBbGlnbixyPWUuZnJhbWUsbj1lLmh0bWxFbGVtZW50LnN0eWxlO24udXNlclNlbGVjdD1cIm5vbmVcIjt2YXIgbz1lLngsYT1lLnksaT1yLmdldFdpZHRoKCksbD1yLmdldEhlaWdodCgpLHM9bi53aWR0aCxkPW4uaGVpZ2h0O0NBTElHTi5MRUZUX1RPUD09dD8obi5sZWZ0PW8rXCJweFwiLG4udG9wPWErXCJweFwiKTpDQUxJR04uSENFTlRFUl9UT1A9PXQ/KG4ubGVmdD1wYXJzZUludChpKS8yLXBhcnNlSW50KHMpLzIrbytcInB4XCIsbi50b3A9YStcInB4XCIpOkNBTElHTi5SSUdIVF9UT1A9PXQ/KG4ubGVmdD1wYXJzZUludChpKS1wYXJzZUludChzKStvK1wicHhcIixuLnRvcD1hK1wicHhcIik6Q0FMSUdOLkxFRlRfVkNFTlRFUj09dD8obi5sZWZ0PW8rXCJweFwiLG4udG9wPXBhcnNlSW50KGwpLzItcGFyc2VJbnQoZCkvMithK1wicHhcIik6Q0FMSUdOLkhDRU5URVJfVkNFTlRFUj09dD8obi5sZWZ0PXBhcnNlSW50KGkpLzItcGFyc2VJbnQocykvMitvK1wicHhcIixuLnRvcD1wYXJzZUludChsKS8yLXBhcnNlSW50KGQpLzIrYStcInB4XCIpOkNBTElHTi5SSUdIVF9WQ0VOVEVSPT10PyhuLmxlZnQ9cGFyc2VJbnQoaSktcGFyc2VJbnQocykrbytcInB4XCIsbi50b3A9cGFyc2VJbnQobCkvMi1wYXJzZUludChkKS8yK2ErXCJweFwiKTpDQUxJR04uTEVGVF9CT1RUT009PXQ/KG4ubGVmdD1vK1wicHhcIixuLnRvcD1wYXJzZUludChsKS1wYXJzZUludChkKSthK1wicHhcIik6Q0FMSUdOLkhDRU5URVJfQk9UVE9NPT10PyhuLmxlZnQ9cGFyc2VJbnQoaSkvMi1wYXJzZUludChzKS8yK28rXCJweFwiLG4udG9wPXBhcnNlSW50KGwpLXBhcnNlSW50KGQpK2ErXCJweFwiKTpDQUxJR04uUklHSFRfQk9UVE9NPT10JiYobi5sZWZ0PXBhcnNlSW50KGkpLXBhcnNlSW50KHMpK28rXCJweFwiLG4udG9wPXBhcnNlSW50KGwpLXBhcnNlSW50KGQpK2ErXCJweFwiKX0sci5wcm90b3R5cGUuaGFuZGxlVGFraW5nRm9jdXM9ZnVuY3Rpb24oKXt0aGlzLl9mb2N1c1Rha2luZ0NhbGxhYmNrJiZ0aGlzLl9mb2N1c1Rha2luZ0NhbGxhYmNrKCl9LHIucHJvdG90eXBlLmhhbmRsZVJlbGVhc2luZ0ZvY3VzPWZ1bmN0aW9uKCl7dGhpcy5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjayYmdGhpcy5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaygpfSxlLmV4cG9ydHM9cn0sZnVuY3Rpb24oZSx0LHIpe3IoMjIpO3ZhciBuPXIoOSk7ZS5leHBvcnRzLmdldFN0eWxlPWZ1bmN0aW9uKGUsdCl7dmFyIHI9e3RpdGxlQmFyOntncmVlbkJ1dHRvbjpcIm1heGltaXplXCJ9fSxvPXI7cmV0dXJuIHQmJm4ub2JqZWN0QXNzaWduKHIsdCksZS5zaG93VGl0bGVCYXI9ITAsZS5zaG93Q2xvc2VCdXR0b249ITAsZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZT1cIjExcHhcIixlLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ9XCJub3JtYWxcIixlLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW49bnVsbCxlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdD1cIiM0ZDQ5NGRcIixlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZD1cIiM0ZDQ5NGRcIixlLnRpdGxlQmFySGVpZ2h0PVwiMjZweFwiLGUudGl0bGVCYXJDb2xvckRlZmF1bHQ9bnVsbCxlLnRpdGxlQmFyQ29sb3JGb2N1c2VkPW51bGwsZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ9XCIxcHggc29saWQgI2IxYWViMVwiLGUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkPWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0LGUuZnJhbWVCb3JkZXJSYWRpdXM9XCI2cHhcIixlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0PVwiMXB4XCIsZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZD1cIjFweFwiLGUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ9XCIjYWNhY2FjXCIsZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZD1cIiNhY2FjYWNcIixlLmZyYW1lQm9yZGVyU3R5bGU9XCJzb2xpZFwiLGUuZnJhbWVCb3hTaGFkb3c9XCIwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpXCIsZS5mcmFtZUJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCIsZS5mcmFtZUNvbXBvbmVudHM9bmV3IEFycmF5LGUuZ2V0VGl0bGVCYXJTdHlsZT1mdW5jdGlvbigpe3JldHVybiBlLmZvY3VzZWRGcmFtZU9ubHk/e3RpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDpcImpzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWZvY3VzZWRcIix0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6XCJqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkXCJ9Ont0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6XCJqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1kZWZhdWx0XCIsdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOlwianNmcmFtZS1wcmVzZXQtc3R5bGUteW9zZW1pdGUtZm9jdXNlZFwifX0sZS5vbkluaXRpYWxpemU9ZnVuY3Rpb24oKXt2YXIgdD1lLmdldFBhcnRzQnVpbGRlcigpLHI9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBV0VsRVFWUW9VMk5rSUJJd0VxbU9BYTZ3Z1pXbEg2U3A0ZmVmUWpDTnhrZFJ5TWpBVVBDZjRmOENrRUpHQnNhRS93d01FMkFhVWF4dVlHV2VEMUlBVWdqUzBQRDdieUxNYWFRckJMbUpLS3VKOWd5aFlDSTZIQUdsRkRBTGY5czdlUUFBQUFCSlJVNUVya0pnZ2c9PVwiLG49XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBVkVsRVFWUW9VMk5rSUJJd29xdmppeEZvQUlsOVd2SUJUTU1BaGtMZUdQNzlJTW5QU3o0NmtxOFFaTjEvaHYvMklCTVlHUmdNUVBSL0JvWUxFRDdqUVpBendGWVRyUkRaTGRSeEk3S0pSQWNQcnZBSEFBVFlLZ3ZMSDBmQUFBQUFBRWxGVGtTdVFtQ0NcIjtcImZ1bGxzY3JlZW5cIj09PW8udGl0bGVCYXIuZ3JlZW5CdXR0b24mJihuPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQVpFbEVRVlFvVTJOa0lCSXdFcW1PQVVXaFFJS0F3TDgvLy9jek1EQVl3QXo0dE9RaldBMWNJVWpSaHdVZlBxQXJ4bERJRjhOL25vbUYwUkZkTVRhRi94a1lHQzZnSy82MDVLTWhpdFY4TWZ3Z2hTQ0FvaGhrQXk2RktJcGhuaUl2ZVBDRktRRHpHenNMUys3bjJBQUFBQUJKUlU1RXJrSmdnZz09XCIpO3ZhciBhPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFCQkpSRUZVZU5waStQLy9Qd05BZ0FFQUNQd0MvdHVpVFJZQUFBQUFTVVZPUks1Q1lJST1cIixpPVwibWFyZ2luOjBweDtwYWRkaW5nOjBweDt3aWR0aDoxMHB4O2hlaWdodDoxMHB4XCIsbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO2wuc3JjPW4sbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGkpO3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7cy5zcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBaVVsRVFWUW9VMk5rd0FJRW9nUU1QaXo3Y0FGWmloR2JRdDRZL3YwTWpJd0xQeS8rc0FBbWoxTWhJd09EdzM5R3hrU1lZcndLUWFiQkZHTlZ5QmZMMS8vL1A2TUJ6RnJtZjR5RmpDQ0gvMlg2M3c5M0MrUC9DNThXZnlwRWR6dllSTjVZZ1FURy8vL25nNjFpWURqd2VjbEhSNndLa1JVVFZBaFR6UEQvZnp4ZUUyRldZUXRza0J3QUt3UTd0VmpBTDRNQUFBQUFTVVZPUks1Q1lJST1cIixzLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsaSk7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtkLnNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFNVWxFUVZRb1UyTmtJQkl3RXFtT2dVWUthN3c0R2hqK005aGpkUVlqdzhHV2JUOGF3RllUclpBWUQ5SElNOFJZRFFCc0VBd0xrcTRJQWdBQUFBQkpSVTVFcmtKZ2dnPT1cIixkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsaSk7dmFyIHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTt1LnNyYz1yLHUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixpKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO2Muc3JjPWEsYy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLFwibWFyZ2luOjBweDtwYWRkaW5nOjBweDt3aWR0aDo2cHg7aGVpZ2h0OjZweFwiKTt2YXIgbT10LmJ1aWxkSW1hZ2VCdXR0b25BcHBlYXJhbmNlKCk7bS5pbWFnZURlZmF1bHQ9YyxtLmltYWdlSG92ZXJlZD11LG0uaW1hZ2VQcmVzc2VkPXUsbS5pbWFnZUZvY3VzZWQ9YyxtLnNpemU9MTAsbS5ib3JkZXJSYWRpdXM9NSxtLmJvcmRlcldpZHRoPTEsbS5ib3JkZXJDb2xvckRlZmF1bHQ9XCIjYzZjNmM2XCIsbS5ib3JkZXJDb2xvckZvY3VzZWQ9XCIjZDM1MjRlXCIsbS5ib3JkZXJDb2xvckhvdmVyZWQ9bS5ib3JkZXJDb2xvckZvY3VzZWQsbS5ib3JkZXJDb2xvclByZXNzZWQ9XCIjZTY0ODQyXCIsbS5ib3JkZXJTdHlsZURlZmF1bHQ9XCJzb2xpZFwiLG0uYm9yZGVyU3R5bGVGb2N1c2VkPW0uYm9yZGVyU3R5bGVEZWZhdWx0LG0uYm9yZGVyU3R5bGVIb3ZlcmVkPW0uYm9yZGVyU3R5bGVEZWZhdWx0LG0uYm9yZGVyU3R5bGVQcmVzc2VkPW0uYm9yZGVyU3R5bGVEZWZhdWx0LG0uYmFja2dyb3VuZENvbG9yRGVmYXVsdD1cIiNkMGQwZDBcIixtLmJhY2tncm91bmRDb2xvckZvY3VzZWQ9XCIjZmM2MTVjXCIsbS5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkPW0uYmFja2dyb3VuZENvbG9yRm9jdXNlZCxtLmJhY2tncm91bmRDb2xvclByZXNzZWQ9bS5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0LG0uc2V0U3JjKHtkZWZhdWx0OmEsZm9jdXNlZDphLGhvdmVyZWQ6cixwcmVzc2VkOnJ9KTt2YXIgcD10LmJ1aWxkQnV0dG9uKG0pLGg9OCxmPS0xOSx5PVwiTEVGVF9UT1BcIjtlLmFkZEZyYW1lQ29tcG9uZW50KG8uY2xvc2VCdXR0b25OYW1lfHxcImNsb3NlQnV0dG9uXCIscCxoLGYseSk7dmFyIGI9dC5idWlsZEltYWdlQnV0dG9uQXBwZWFyYW5jZShtKTtiLmJvcmRlckNvbG9yRGVmYXVsdD1cIiNjNmM2YzZcIixiLmJvcmRlckNvbG9yRm9jdXNlZD1cIiNlNmIzNDdcIixiLmJvcmRlckNvbG9ySG92ZXJlZD1iLmJvcmRlckNvbG9yRm9jdXNlZCxiLmJvcmRlckNvbG9yUHJlc3NlZD1cIiNlMWExMmRcIixiLmJhY2tncm91bmRDb2xvckRlZmF1bHQ9XCIjZDBkMGQwXCIsYi5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkPVwiI2ZkYmU0MFwiLGIuYmFja2dyb3VuZENvbG9ySG92ZXJlZD1iLmJhY2tncm91bmRDb2xvckZvY3VzZWQsYi5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkPWIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCxiLmltYWdlRGVmYXVsdD1jLGIuaW1hZ2VIb3ZlcmVkPWQsYi5pbWFnZVByZXNzZWQ9ZCxiLmltYWdlRm9jdXNlZD1jO3ZhciBnPXQuYnVpbGRCdXR0b24oYiksdj10LmJ1aWxkQnV0dG9uKGIpO3Yuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtoPTI4LGY9LTE5LHk9XCJMRUZUX1RPUFwiO2UuYWRkRnJhbWVDb21wb25lbnQoXCJtaW5pbWl6ZUJ1dHRvblwiLGcsaCxmLHkpLGUuYWRkRnJhbWVDb21wb25lbnQoXCJkZW1pbmltaXplQnV0dG9uXCIsdixoLGYseSk7dmFyIEM9dC5idWlsZEltYWdlQnV0dG9uQXBwZWFyYW5jZShtKTtDLmJvcmRlckNvbG9yRGVmYXVsdD1cIiNjNmM2YzZcIixDLmJvcmRlckNvbG9yRm9jdXNlZD1cIiM2N2I2NTdcIixDLmJvcmRlckNvbG9ySG92ZXJlZD1DLmJvcmRlckNvbG9yRm9jdXNlZCxDLmJvcmRlckNvbG9yUHJlc3NlZD1cIiMwMGFmMzhcIixDLmJhY2tncm91bmRDb2xvckRlZmF1bHQ9XCIjZDBkMGQwXCIsQy5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkPVwiIzM0Y2E0OVwiLEMuYmFja2dyb3VuZENvbG9ySG92ZXJlZD1DLmJhY2tncm91bmRDb2xvckZvY3VzZWQsQy5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkPUMuYmFja2dyb3VuZENvbG9yRGVmYXVsdCxDLmltYWdlRGVmYXVsdD1jLEMuaW1hZ2VIb3ZlcmVkPWwsQy5pbWFnZVByZXNzZWQ9bCxDLmltYWdlRm9jdXNlZD1jO3ZhciBCPXQuYnVpbGRCdXR0b24oQyksRT10LmJ1aWxkSW1hZ2VCdXR0b25BcHBlYXJhbmNlKG0pO0UuYm9yZGVyQ29sb3JEZWZhdWx0PVwiI2M2YzZjNlwiLEUuYm9yZGVyQ29sb3JGb2N1c2VkPVwiIzY3YjY1N1wiLEUuYm9yZGVyQ29sb3JIb3ZlcmVkPUUuYm9yZGVyQ29sb3JGb2N1c2VkLEUuYm9yZGVyQ29sb3JQcmVzc2VkPVwiIzAwYWYzOFwiLEUuYmFja2dyb3VuZENvbG9yRGVmYXVsdD1cIiNkMGQwZDBcIixFLmJhY2tncm91bmRDb2xvckZvY3VzZWQ9XCIjMzRjYTQ5XCIsRS5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkPUUuYmFja2dyb3VuZENvbG9yRm9jdXNlZCxFLmJhY2tncm91bmRDb2xvclByZXNzZWQ9RS5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0LEUuaW1hZ2VEZWZhdWx0PWMsRS5pbWFnZUhvdmVyZWQ9cyxFLmltYWdlUHJlc3NlZD1zLEUuaW1hZ2VGb2N1c2VkPWM7dmFyIHc9dC5idWlsZEJ1dHRvbihFKTt3LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7aD00OCxmPS0xOSx5PVwiTEVGVF9UT1BcIjtlLmFkZEZyYW1lQ29tcG9uZW50KFwiZGV6b29tQnV0dG9uXCIsdyxoLGYseSksZS5hZGRGcmFtZUNvbXBvbmVudChcInpvb21CdXR0b25cIixCLGgsZix5KX0sZX19LGZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1yKDApLG89cigyMyk7XCJzdHJpbmdcIj09dHlwZW9mKG89by5fX2VzTW9kdWxlP28uZGVmYXVsdDpvKSYmKG89W1tlLmksbyxcIlwiXV0pO3ZhciBhPXtpbnNlcnQ6XCJoZWFkXCIsc2luZ2xldG9uOiExfTtuKG8sYSk7ZS5leHBvcnRzPW8ubG9jYWxzfHx7fX0sZnVuY3Rpb24oZSx0LHIpeyh0PXIoMSkoITEpKS5wdXNoKFtlLmksXCIuanNmcmFtZS1wcmVzZXQtc3R5bGUteW9zZW1pdGUtZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wLCAjZjVmNWY1LCBjb2xvci1zdG9wKDEuMCwgI2Y4ZjdmMikpKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWZvY3VzZWQge1xcbiAgICAvKiAoYykyMDE1IEpvaGFubmVzIEpha29iXFxuICAgICAgIE1hZGUgd2l0aCA8MyBpbiBHZXJtYW55ICovXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wLCAjZWJlYmViLCBjb2xvci1zdG9wKDEuMCwgI2Q1ZDVkNSkpKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXCIsXCJcIl0pLGUuZXhwb3J0cz10fSxmdW5jdGlvbihlLHQscil7cigyNSksZS5leHBvcnRzLmdldFN0eWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlLnNob3dUaXRsZUJhcj0hMCxlLnNob3dDbG9zZUJ1dHRvbj0hMCxlLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplPVwiMTJweFwiLGUudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodD1cIm5vcm1hbFwiLGUudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbj1cIjEwcHhcIixlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdD1cIiM5YjlhOWJcIixlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZD1cIiM0ZDQ5NGRcIixlLnRpdGxlQmFySGVpZ2h0PVwiMzBweFwiLGUudGl0bGVCYXJDb2xvckRlZmF1bHQ9bnVsbCxlLnRpdGxlQmFyQ29sb3JGb2N1c2VkPW51bGwsZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ9XCJzb2xpZCAxcHggI2FhYWFhYVwiLGUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkPVwic29saWQgMXB4ICMxODgzZDdcIixlLmZyYW1lQm9yZGVyUmFkaXVzPVwiMHB4XCIsZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdD1cIjFweFwiLGUuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ9XCIxcHhcIixlLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0PVwiI2FhYWFhYVwiLGUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ9XCIjMTg4M2Q3XCIsZS5mcmFtZUJvcmRlclN0eWxlPVwic29saWRcIixlLmZyYW1lQm94U2hhZG93PW51bGwsZS5mcmFtZUJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCIsZS5mcmFtZUNvbXBvbmVudHM9bmV3IEFycmF5LGUuZnJhbWVIZWlnaHRBZGp1c3Q9MCxlLmdldFRpdGxlQmFyU3R5bGU9ZnVuY3Rpb24oKXtyZXR1cm4gZS5mb2N1c2VkRnJhbWVPbmx5P3t0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6XCJqc2ZyYW1lLXByZXNldC1zdHlsZS1yZWRzdG9uZS1mb2N1c2VkXCIsdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOlwianNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZFwifTp7dGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OlwianNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZGVmYXVsdFwiLHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDpcImpzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWZvY3VzZWRcIn19LGUub25Jbml0aWFsaXplPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5nZXRQYXJ0c0J1aWxkZXIoKSxyPXQuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO3Iud2lkdGg9NDUsci5oZWlnaHQ9Mjgsci5ib3JkZXJSYWRpdXM9MCxyLmJvcmRlcldpZHRoPTAsci5ib3JkZXJDb2xvckRlZmF1bHQ9XCIjYzZjNmM2XCIsci5ib3JkZXJDb2xvckZvY3VzZWQ9XCIjZmM2MTVjXCIsci5ib3JkZXJDb2xvckhvdmVyZWQ9ci5ib3JkZXJDb2xvckZvY3VzZWQsci5ib3JkZXJDb2xvclByZXNzZWQ9XCIjZTY0ODQyXCIsci5ib3JkZXJTdHlsZURlZmF1bHQ9XCJzb2xpZFwiLHIuYm9yZGVyU3R5bGVGb2N1c2VkPXIuYm9yZGVyU3R5bGVEZWZhdWx0LHIuYm9yZGVyU3R5bGVIb3ZlcmVkPXIuYm9yZGVyU3R5bGVEZWZhdWx0LHIuYm9yZGVyU3R5bGVQcmVzc2VkPXIuYm9yZGVyU3R5bGVEZWZhdWx0LHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdD1cIndoaXRlXCIsci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkPVwid2hpdGVcIixyLmJhY2tncm91bmRDb2xvckhvdmVyZWQ9XCIjZTgxMTIzXCIsci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkPVwiI2YxNzA3YVwiLHIuY2FwdGlvbj1cIuKVs1wiLHIuY2FwdGlvbkNvbG9yRGVmYXVsdD1cIiM5YjlhOWJcIixyLmNhcHRpb25Db2xvckZvY3VzZWQ9XCJibGFja1wiLHIuY2FwdGlvbkNvbG9ySG92ZXJlZD1cIndoaXRlXCIsci5jYXB0aW9uQ29sb3JQcmVzc2VkPVwid2hpdGVcIixyLmNhcHRpb25TaGlmdFlweD0xLHIuY2FwdGlvbkZvbnRSYXRpbz0uNjt2YXIgbj10LmJ1aWxkVGV4dEJ1dHRvbihyKSxvPTAsYT0tcGFyc2VJbnQoZS50aXRsZUJhckhlaWdodCksaT1cIlJJR0hUX1RPUFwiO2UuYWRkRnJhbWVDb21wb25lbnQoXCJjbG9zZUJ1dHRvblwiLG4sbyxhLGkpO3ZhciBsPXQuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO2wud2lkdGg9NDUsbC5oZWlnaHQ9MjgsbC5ib3JkZXJSYWRpdXM9MCxsLmJvcmRlcldpZHRoPTAsbC5ib3JkZXJDb2xvckRlZmF1bHQ9XCIjYzZjNmM2XCIsbC5ib3JkZXJDb2xvckZvY3VzZWQ9XCIjZmM2MTVjXCIsbC5ib3JkZXJDb2xvckhvdmVyZWQ9bC5ib3JkZXJDb2xvckZvY3VzZWQsbC5ib3JkZXJDb2xvclByZXNzZWQ9XCIjZTY0ODQyXCIsbC5ib3JkZXJTdHlsZURlZmF1bHQ9XCJzb2xpZFwiLGwuYm9yZGVyU3R5bGVGb2N1c2VkPWwuYm9yZGVyU3R5bGVEZWZhdWx0LGwuYm9yZGVyU3R5bGVIb3ZlcmVkPWwuYm9yZGVyU3R5bGVEZWZhdWx0LGwuYm9yZGVyU3R5bGVQcmVzc2VkPWwuYm9yZGVyU3R5bGVEZWZhdWx0LGwuYmFja2dyb3VuZENvbG9yRGVmYXVsdD1cIndoaXRlXCIsbC5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkPVwid2hpdGVcIixsLmJhY2tncm91bmRDb2xvckhvdmVyZWQ9XCIjZTVlNWU1XCIsbC5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkPVwiI2NjY2NjY1wiLGwuY2FwdGlvbj1cIuKYkFwiLGwuY2FwdGlvbkNvbG9yRGVmYXVsdD1cIiM5YjlhOWJcIixsLmNhcHRpb25Db2xvckZvY3VzZWQ9XCJibGFja1wiLGwuY2FwdGlvbkNvbG9ySG92ZXJlZD1cImJsYWNrXCIsbC5jYXB0aW9uQ29sb3JQcmVzc2VkPVwiYmxhY2tcIixsLmNhcHRpb25TaGlmdFlweD0xLGwuY2FwdGlvbkZvbnRSYXRpbz0uNTU7dmFyIHM9dC5idWlsZFRleHRCdXR0b24obCk7bz0tNDYsYT0tcGFyc2VJbnQoZS50aXRsZUJhckhlaWdodCksaT1cIlJJR0hUX1RPUFwiO2UuYWRkRnJhbWVDb21wb25lbnQoXCJtYXhpbWl6ZUJ1dHRvblwiLHMsbyxhLGkpO3ZhciBkPXQuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO2Qud2lkdGg9NDUsZC5oZWlnaHQ9MjgsZC5ib3JkZXJSYWRpdXM9MCxkLmJvcmRlcldpZHRoPTAsZC5ib3JkZXJDb2xvckRlZmF1bHQ9XCIjYzZjNmM2XCIsZC5ib3JkZXJDb2xvckZvY3VzZWQ9XCIjZmM2MTVjXCIsZC5ib3JkZXJDb2xvckhvdmVyZWQ9ZC5ib3JkZXJDb2xvckZvY3VzZWQsZC5ib3JkZXJDb2xvclByZXNzZWQ9XCIjZTY0ODQyXCIsZC5ib3JkZXJTdHlsZURlZmF1bHQ9XCJzb2xpZFwiLGQuYm9yZGVyU3R5bGVGb2N1c2VkPWQuYm9yZGVyU3R5bGVEZWZhdWx0LGQuYm9yZGVyU3R5bGVIb3ZlcmVkPWQuYm9yZGVyU3R5bGVEZWZhdWx0LGQuYm9yZGVyU3R5bGVQcmVzc2VkPWQuYm9yZGVyU3R5bGVEZWZhdWx0LGQuYmFja2dyb3VuZENvbG9yRGVmYXVsdD1cIndoaXRlXCIsZC5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkPVwid2hpdGVcIixkLmJhY2tncm91bmRDb2xvckhvdmVyZWQ9XCIjZTVlNWU1XCIsZC5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkPVwiI2NjY2NjY1wiLGQuY2FwdGlvbj1cIu+8v1wiLGQuY2FwdGlvbkNvbG9yRGVmYXVsdD1cIiM5YjlhOWJcIixkLmNhcHRpb25Db2xvckZvY3VzZWQ9XCJibGFja1wiLGQuY2FwdGlvbkNvbG9ySG92ZXJlZD1cImJsYWNrXCIsZC5jYXB0aW9uQ29sb3JQcmVzc2VkPVwiYmxhY2tcIixkLmNhcHRpb25TaGlmdFlweD0tMixkLmNhcHRpb25Gb250UmF0aW89LjM7dmFyIHU9dC5idWlsZFRleHRCdXR0b24oZCk7bz0tOTIsYT0tcGFyc2VJbnQoZS50aXRsZUJhckhlaWdodCksaT1cIlJJR0hUX1RPUFwiO2UuYWRkRnJhbWVDb21wb25lbnQoXCJtaW5pbWl6ZUJ1dHRvblwiLHUsbyxhLGkpO3ZhciBjPXQuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO2Mud2lkdGg9NDUsYy5oZWlnaHQ9MjgsYy5ib3JkZXJSYWRpdXM9MCxjLmJvcmRlcldpZHRoPTAsYy5ib3JkZXJDb2xvckRlZmF1bHQ9XCIjYzZjNmM2XCIsYy5ib3JkZXJDb2xvckZvY3VzZWQ9XCIjZmM2MTVjXCIsYy5ib3JkZXJDb2xvckhvdmVyZWQ9Yy5ib3JkZXJDb2xvckZvY3VzZWQsYy5ib3JkZXJDb2xvclByZXNzZWQ9XCIjZTY0ODQyXCIsYy5ib3JkZXJTdHlsZURlZmF1bHQ9XCJzb2xpZFwiLGMuYm9yZGVyU3R5bGVGb2N1c2VkPWMuYm9yZGVyU3R5bGVEZWZhdWx0LGMuYm9yZGVyU3R5bGVIb3ZlcmVkPWMuYm9yZGVyU3R5bGVEZWZhdWx0LGMuYm9yZGVyU3R5bGVQcmVzc2VkPWMuYm9yZGVyU3R5bGVEZWZhdWx0LGMuYmFja2dyb3VuZENvbG9yRGVmYXVsdD1cIndoaXRlXCIsYy5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkPVwid2hpdGVcIixjLmJhY2tncm91bmRDb2xvckhvdmVyZWQ9XCIjZTVlNWU1XCIsYy5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkPVwiI2NjY2NjY1wiLGMuY2FwdGlvbj1cIuKWo1wiLGMuY2FwdGlvbkNvbG9yRGVmYXVsdD1cIiM5YjlhOWJcIixjLmNhcHRpb25Db2xvckZvY3VzZWQ9XCJibGFja1wiLGMuY2FwdGlvbkNvbG9ySG92ZXJlZD1cImJsYWNrXCIsYy5jYXB0aW9uQ29sb3JQcmVzc2VkPVwiYmxhY2tcIixjLmNhcHRpb25TaGlmdFlweD0xLGMuY2FwdGlvbkZvbnRSYXRpbz0uNjt2YXIgbT10LmJ1aWxkVGV4dEJ1dHRvbihjKTtvPS05MixhPS1wYXJzZUludChlLnRpdGxlQmFySGVpZ2h0KSxpPVwiUklHSFRfVE9QXCI7bS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGUuYWRkRnJhbWVDb21wb25lbnQoXCJkZW1pbmltaXplQnV0dG9uXCIsbSxvLGEsaSk7dmFyIHA9dC5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7cC53aWR0aD00NSxwLmhlaWdodD0yOCxwLmJvcmRlclJhZGl1cz0wLHAuYm9yZGVyV2lkdGg9MCxwLmJvcmRlckNvbG9yRGVmYXVsdD1cIiNjNmM2YzZcIixwLmJvcmRlckNvbG9yRm9jdXNlZD1cIiNmYzYxNWNcIixwLmJvcmRlckNvbG9ySG92ZXJlZD1wLmJvcmRlckNvbG9yRm9jdXNlZCxwLmJvcmRlckNvbG9yUHJlc3NlZD1cIiNlNjQ4NDJcIixwLmJvcmRlclN0eWxlRGVmYXVsdD1cInNvbGlkXCIscC5ib3JkZXJTdHlsZUZvY3VzZWQ9cC5ib3JkZXJTdHlsZURlZmF1bHQscC5ib3JkZXJTdHlsZUhvdmVyZWQ9cC5ib3JkZXJTdHlsZURlZmF1bHQscC5ib3JkZXJTdHlsZVByZXNzZWQ9cC5ib3JkZXJTdHlsZURlZmF1bHQscC5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0PVwid2hpdGVcIixwLmJhY2tncm91bmRDb2xvckZvY3VzZWQ9XCJ3aGl0ZVwiLHAuYmFja2dyb3VuZENvbG9ySG92ZXJlZD1cIiNlNWU1ZTVcIixwLmJhY2tncm91bmRDb2xvclByZXNzZWQ9XCIjY2NjY2NjXCIscC5jYXB0aW9uPVwi4p2PXCIscC5jYXB0aW9uQ29sb3JEZWZhdWx0PVwiIzliOWE5YlwiLHAuY2FwdGlvbkNvbG9yRm9jdXNlZD1cImJsYWNrXCIscC5jYXB0aW9uQ29sb3JIb3ZlcmVkPVwiYmxhY2tcIixwLmNhcHRpb25Db2xvclByZXNzZWQ9XCJibGFja1wiLHAuY2FwdGlvblNoaWZ0WXB4PTEscC5jYXB0aW9uRm9udFJhdGlvPS41NTt2YXIgaD10LmJ1aWxkVGV4dEJ1dHRvbihwKTtvPS00NixhPS1wYXJzZUludChlLnRpdGxlQmFySGVpZ2h0KSxpPVwiUklHSFRfVE9QXCI7aC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGUuYWRkRnJhbWVDb21wb25lbnQoXCJyZXN0b3JlQnV0dG9uXCIsaCxvLGEsaSl9LGV9fSxmdW5jdGlvbihlLHQscil7dmFyIG49cigwKSxvPXIoMjYpO1wic3RyaW5nXCI9PXR5cGVvZihvPW8uX19lc01vZHVsZT9vLmRlZmF1bHQ6bykmJihvPVtbZS5pLG8sXCJcIl1dKTt2YXIgYT17aW5zZXJ0OlwiaGVhZFwiLHNpbmdsZXRvbjohMX07bihvLGEpO2UuZXhwb3J0cz1vLmxvY2Fsc3x8e319LGZ1bmN0aW9uKGUsdCxyKXsodD1yKDEpKCExKSkucHVzaChbZS5pLFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblwiLFwiXCJdKSxlLmV4cG9ydHM9dH0sZnVuY3Rpb24oZSx0LHIpe3IoMjgpLGUuZXhwb3J0cy5nZXRTdHlsZT1mdW5jdGlvbihlKXtyZXR1cm4gZS5zaG93VGl0bGVCYXI9ITEsZS5zaG93Q2xvc2VCdXR0b249ITAsZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZT1cIjEycHhcIixlLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ9XCJub3JtYWxcIixlLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW49XCIxMHB4XCIsZS50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQ9XCIjNGQ0OTRkXCIsZS50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQ9XCIjNGQ0OTRkXCIsZS50aXRsZUJhckhlaWdodD1cIjVweFwiLGUudGl0bGVCYXJDb2xvckRlZmF1bHQ9XCJ3aGl0ZVwiLGUudGl0bGVCYXJDb2xvckZvY3VzZWQ9XCJ3aGl0ZVwiLGUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0PW51bGwsZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQ9bnVsbCxlLmZyYW1lQm9yZGVyUmFkaXVzPVwiNnB4XCIsZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdD1cIjFweFwiLGUuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ9XCIxcHhcIixlLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0PVwiI2FhYWFhYVwiLGUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ9XCIjYWFhYWFhXCIsZS5mcmFtZUJvcmRlclN0eWxlPVwic29saWRcIixlLmZyYW1lQm94U2hhZG93PVwiMnB4IDJweCA1cHggIHJnYmEoMCwgMCwgMCwgMC41KVwiLGUuZnJhbWVCYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiLGUuZnJhbWVDb21wb25lbnRzPW5ldyBBcnJheSxlLmZyYW1lSGVpZ2h0QWRqdXN0PTIsZS5nZXRUaXRsZUJhclN0eWxlPWZ1bmN0aW9uKCl7cmV0dXJuIGUuZm9jdXNlZEZyYW1lT25seT97dGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OlwianNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZm9jdXNlZFwiLHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDpcImpzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWZvY3VzZWRcIn06e3RpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDpcImpzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWRlZmF1bHRcIix0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6XCJqc2ZyYW1lLXByZXNldC1zdHlsZS1wb3B1cC1mb2N1c2VkXCJ9fSxlLm9uSW5pdGlhbGl6ZT1mdW5jdGlvbigpe3ZhciB0PWUuZ2V0UGFydHNCdWlsZGVyKCkscj10LmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtyLndpZHRoPTIwLHIuaGVpZ2h0PTIwLHIuYm9yZGVyUmFkaXVzPTEwLHIuYm9yZGVyV2lkdGg9MSxyLmJvcmRlckNvbG9yRGVmYXVsdD1cIiNjY2NjY2NcIixyLmJvcmRlckNvbG9yRm9jdXNlZD1cIiNjY2NjY2NcIixyLmJvcmRlckNvbG9ySG92ZXJlZD1cIiNkZGRkZGRcIixyLmJvcmRlckNvbG9yUHJlc3NlZD1cIiNlZWVlZWVcIixyLmJvcmRlclN0eWxlRGVmYXVsdD1cInNvbGlkXCIsci5ib3JkZXJTdHlsZUZvY3VzZWQ9ci5ib3JkZXJTdHlsZURlZmF1bHQsci5ib3JkZXJTdHlsZUhvdmVyZWQ9ci5ib3JkZXJTdHlsZURlZmF1bHQsci5ib3JkZXJTdHlsZVByZXNzZWQ9ci5ib3JkZXJTdHlsZURlZmF1bHQsci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0PVwid2hpdGVcIixyLmJhY2tncm91bmRDb2xvckZvY3VzZWQ9XCJ3aGl0ZVwiLHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZD1cIiNlZWVlZWVcIixyLmJhY2tncm91bmRDb2xvclByZXNzZWQ9XCIjZGRkZGRkXCIsci5iYWNrZ3JvdW5kQm94U2hhZG93PVwiMnB4IDJweCA1cHggIHJnYmEoMCwgMCwgMCwgMC41KVwiLHIuY2FwdGlvbj1cIuKcllwiLHIuY2FwdGlvbkNvbG9yRGVmYXVsdD1cImJsYWNrXCIsci5jYXB0aW9uQ29sb3JGb2N1c2VkPVwiYmxhY2tcIixyLmNhcHRpb25Db2xvckhvdmVyZWQ9XCJ3aGl0ZVwiLHIuY2FwdGlvbkNvbG9yUHJlc3NlZD1cIndoaXRlXCIsci5jYXB0aW9uU2hpZnRZcHg9MSxyLmNhcHRpb25Gb250UmF0aW89LjY7dmFyIG49dC5idWlsZFRleHRCdXR0b24ociksbz0tNi1wYXJzZUludChlLnRpdGxlQmFySGVpZ2h0KTtlLmFkZEZyYW1lQ29tcG9uZW50KFwiY2xvc2VCdXR0b25cIixuLDEwLG8sXCJSSUdIVF9UT1BcIil9LGV9fSxmdW5jdGlvbihlLHQscil7dmFyIG49cigwKSxvPXIoMjkpO1wic3RyaW5nXCI9PXR5cGVvZihvPW8uX19lc01vZHVsZT9vLmRlZmF1bHQ6bykmJihvPVtbZS5pLG8sXCJcIl1dKTt2YXIgYT17aW5zZXJ0OlwiaGVhZFwiLHNpbmdsZXRvbjohMX07bihvLGEpO2UuZXhwb3J0cz1vLmxvY2Fsc3x8e319LGZ1bmN0aW9uKGUsdCxyKXsodD1yKDEpKCExKSkucHVzaChbZS5pLFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZm9jdXNlZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblwiLFwiXCJdKSxlLmV4cG9ydHM9dH0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHMuZ2V0U3R5bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2hvd1RpdGxlQmFyPSExLGUuc2hvd0Nsb3NlQnV0dG9uPSEwLGUudGl0bGVCYXJDYXB0aW9uRm9udFNpemU9XCIwcHhcIixlLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ9XCJub3JtYWxcIixlLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW49XCIwcHhcIixlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdD1cInRyYW5zcGFyZW50XCIsZS50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQ9XCJ0cmFuc3BhcmVudFwiLGUudGl0bGVCYXJIZWlnaHQ9XCIwcHhcIixlLnRpdGxlQmFyQ29sb3JEZWZhdWx0PVwidHJhbnNwYXJlbnRcIixlLnRpdGxlQmFyQ29sb3JGb2N1c2VkPVwidHJhbnNwYXJlbnRcIixlLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdD1udWxsLGUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkPW51bGwsZS5mcmFtZUJvcmRlclJhZGl1cz1cIjEwcHhcIixlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0PVwiMHB4XCIsZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZD1cIjBweFwiLGUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ9XCJ0cmFuc3BhcmVudFwiLGUuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQ9XCJ0cmFuc3BhcmVudFwiLGUuZnJhbWVCb3JkZXJTdHlsZT1cInNvbGlkXCIsZS5mcmFtZUJveFNoYWRvdz1cIjJweCAycHggMTVweCAgcmdiYSgwLCAwLCAwLCAwLjUpXCIsZS5mcmFtZUJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCIsZS5mcmFtZUNvbXBvbmVudHM9W10sZS5mcmFtZUhlaWdodEFkanVzdD0xLGUuY2FwdGlvbkNsb3I9XCJkYXJrZ3JheVwiLGUucHVsbFVwRGlzYWJsZWQ9ITEsZS5nZXRUaXRsZUJhclN0eWxlPWZ1bmN0aW9uKCl7cmV0dXJuIGUuZm9jdXNlZEZyYW1lT25seSx7dGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OlwiIFwiLHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDpcIiBcIn19LGUub25Jbml0aWFsaXplPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5nZXRQYXJ0c0J1aWxkZXIoKSxyPXQuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO3Iud2lkdGg9MjAsci5oZWlnaHQ9MjAsci5ib3JkZXJSYWRpdXM9MTAsci5ib3JkZXJXaWR0aD0wLHIuYm9yZGVyQ29sb3JEZWZhdWx0PVwiI2NjY2NjY1wiLHIuYm9yZGVyQ29sb3JGb2N1c2VkPVwiI2NjY2NjY1wiLHIuYm9yZGVyQ29sb3JIb3ZlcmVkPVwiI2RkZGRkZFwiLHIuYm9yZGVyQ29sb3JQcmVzc2VkPVwiI2VlZWVlZVwiLHIuYm9yZGVyU3R5bGVEZWZhdWx0PVwic29saWRcIixyLmJvcmRlclN0eWxlRm9jdXNlZD1yLmJvcmRlclN0eWxlRGVmYXVsdCxyLmJvcmRlclN0eWxlSG92ZXJlZD1yLmJvcmRlclN0eWxlRGVmYXVsdCxyLmJvcmRlclN0eWxlUHJlc3NlZD1yLmJvcmRlclN0eWxlRGVmYXVsdCxyLmJhY2tncm91bmRDb2xvckRlZmF1bHQ9XCJ0cmFuc3BhcmVudFwiLHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZD1cInRyYW5zcGFyZW50XCIsci5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkPVwidHJhbnNwYXJlbnRcIixyLmJhY2tncm91bmRDb2xvclByZXNzZWQ9XCJ0cmFuc3BhcmVudFwiLHIuYmFja2dyb3VuZEJveFNoYWRvdz1udWxsLHIuY2FwdGlvbj1cIuKcllwiLHIuY2FwdGlvbkNvbG9yRGVmYXVsdD1lLmNhcHRpb25DbG9yLHIuY2FwdGlvbkNvbG9yRm9jdXNlZD1lLmNhcHRpb25DbG9yLHIuY2FwdGlvbkNvbG9ySG92ZXJlZD1lLmNhcHRpb25DbG9yLHIuY2FwdGlvbkNvbG9yUHJlc3NlZD1lLmNhcHRpb25DbG9yLHIuY2FwdGlvblNoaWZ0WXB4PTEsci5jYXB0aW9uRm9udFJhdGlvPS42O3ZhciBuPXQuYnVpbGRUZXh0QnV0dG9uKHIpO2UuYWRkRnJhbWVDb21wb25lbnQoXCJjbG9zZUJ1dHRvblwiLG4sLTYsMyxcIlJJR0hUX1RPUFwiKX0sZX19LGZ1bmN0aW9uKGUsdCxyKXtyKDMyKTt2YXIgbj1yKDkpO2Z1bmN0aW9uIG8oZSx0LHIpe3ZhciBuLG89ZS5nZXRQYXJ0c0J1aWxkZXIoKSxpPTA7Zm9yKHZhciBsIGluIG49cj90LnRpdGxlQmFyLmJ1dHRvbnNPbkxlZnQ6dC50aXRsZUJhci5idXR0b25zKXt2YXIgcz1uW2xdLGQ9by5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7ZC5mYT1zLmZhLGQud2lkdGg9dC50aXRsZUJhci5idXR0b25XaWR0aCxkLmhlaWdodD10LnRpdGxlQmFyLmJ1dHRvbkhlaWdodCxkLmJvcmRlclJhZGl1cz0wLGQuYm9yZGVyV2lkdGg9MCxkLmJvcmRlckNvbG9yRGVmYXVsdD1cIiNjNmM2YzZcIixkLmJvcmRlckNvbG9yRm9jdXNlZD1cIiNmYzYxNWNcIixkLmJvcmRlckNvbG9ySG92ZXJlZD1kLmJvcmRlckNvbG9yRm9jdXNlZCxkLmJvcmRlckNvbG9yUHJlc3NlZD1cIiNlNjQ4NDJcIixkLmJvcmRlclN0eWxlRGVmYXVsdD1cInNvbGlkXCIsZC5ib3JkZXJTdHlsZUZvY3VzZWQ9ZC5ib3JkZXJTdHlsZURlZmF1bHQsZC5ib3JkZXJTdHlsZUhvdmVyZWQ9ZC5ib3JkZXJTdHlsZURlZmF1bHQsZC5ib3JkZXJTdHlsZVByZXNzZWQ9ZC5ib3JkZXJTdHlsZURlZmF1bHQsZC5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0PVwidHJhbnNwYXJlbnRcIixkLmJhY2tncm91bmRDb2xvckZvY3VzZWQ9XCJ0cmFuc3BhcmVudFwiLGQuYmFja2dyb3VuZENvbG9ySG92ZXJlZD1cInRyYW5zcGFyZW50XCIsZC5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkPVwidHJhbnNwYXJlbnRcIjt2YXIgdT1hKHQudGl0bGVCYXIuYnV0dG9uQ29sb3IpO2QuY2FwdGlvbkNvbG9yRGVmYXVsdD10LnRpdGxlQmFyLmJ1dHRvbkNvbG9yLGQuY2FwdGlvbkNvbG9yRm9jdXNlZD10LnRpdGxlQmFyLmJ1dHRvbkNvbG9yLGQuY2FwdGlvbkNvbG9ySG92ZXJlZD11LmhvdmVyZWQsZC5jYXB0aW9uQ29sb3JQcmVzc2VkPXUucHJlc3NlZCxkLmNhcHRpb25TaGlmdFlweD0wLGQuY2FwdGlvbkZvbnRSYXRpbz0xO3ZhciBjPW8uYnVpbGRUZXh0QnV0dG9uKGQpO3MudmlzaWJsZT9jLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI6KHI/aS09dC50aXRsZUJhci5idXR0b25XaWR0aDppKz10LnRpdGxlQmFyLmJ1dHRvbldpZHRoLGMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIik7dmFyIG0scCxoPXBhcnNlSW50KGUudGl0bGVCYXJIZWlnaHQpLGY9aSx5PS1oKyhoLWQuaGVpZ2h0KS8yO209cj9cIkxFRlRfVE9QXCI6XCJSSUdIVF9UT1BcIixzLmNoaWxkTWVudUhUTUwmJigocD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5pZD1zLm5hbWUrXCJfY2hpbGRfbWVudVwiLHAuaW5uZXJIVE1MPXMuY2hpbGRNZW51SFRNTCxwLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixwLnN0eWxlLndpZHRoPShzLmNoaWxkTWVudVdpZHRoP3MuY2hpbGRNZW51V2lkdGg6MjAwKStcInB4XCIscC5zdHlsZS50b3A9cGFyc2VJbnQoYy5zdHlsZS50b3AsMTApK3BhcnNlSW50KGMuc3R5bGUuaGVpZ2h0LDEwKS8yK2gvMitcInB4XCIscC5zdHlsZS5sZWZ0PWMuc3R5bGUubGVmdCxwLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsYy5hcHBlbmRDaGlsZChwKSksZS5hZGRGcmFtZUNvbXBvbmVudChzLm5hbWUsYyxmLHksbSx7Y2hpbGRNZW51OnB9KSxpKz1yP3QudGl0bGVCYXIuYnV0dG9uV2lkdGg6LXQudGl0bGVCYXIuYnV0dG9uV2lkdGh9fWZ1bmN0aW9uIGEoZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTt0LmhlaWdodD0xLHQud2lkdGg9MTt2YXIgcj10LmdldENvbnRleHQoXCIyZFwiKTtyLmZpbGxTdHlsZT1lLHIuZmlsbFJlY3QoMCwwLDEsMSk7dmFyIG49ci5nZXRJbWFnZURhdGEoMCwwLDEsMSkuZGF0YSxvPW5bMF0sYT1uWzFdLGk9blsyXSxsPW5bM10vMjU1LHM9Ljg1Kmw7cmV0dXJue3NyYzpcInJnYihcIitvK1wiLFwiK2ErXCIsXCIraStcIixcIitzK1wiKVwiLGhvdmVyZWQ6XCJyZ2IoXCIrbytcIixcIithK1wiLFwiK2krXCIsXCIrcytcIilcIixwcmVzc2VkOlwicmdiKFwiK28rXCIsXCIrYStcIixcIitpK1wiLFwiKy43NSpsK1wiKVwifX1lLmV4cG9ydHMuZ2V0U3R5bGU9ZnVuY3Rpb24oZSx0KXt2YXIgcj17Ym9yZGVyOntjb2xvcjpcInRyYW5zcGFyZW50XCIsd2lkdGg6MCxyYWRpdXM6Nn0sY29udHJvbDp7bWF4aW1pemVXaXRob3V0VGl0bGVCYXI6ITEscmVzdG9yZUtleTpcIkVzY2FwZVwifSx0aXRsZUJhcjp7Y29sb3I6XCJ3aGl0ZVwiLGJhY2tncm91bmQ6XCJibGFja1wiLGxlZnRNYXJnaW46MjAsaGVpZ2h0OjMwLGZvbnRTaXplOjEyLGJ1dHRvbldpZHRoOjM2LGJ1dHRvbkhlaWdodDoxNixidXR0b25Db2xvcjpcIndoaXRlXCIsYnV0dG9uczpbe2ZhOlwiZmFzIGZhLXRpbWVzXCIsbmFtZTpcImNsb3NlQnV0dG9uXCIsdmlzaWJsZTohMH0se2ZhOlwiZmFyIGZhLXdpbmRvdy1tYXhpbWl6ZVwiLG5hbWU6XCJtYXhpbWl6ZUJ1dHRvblwiLHZpc2libGU6ITB9LHtmYTpcImZhciBmYS13aW5kb3ctcmVzdG9yZVwiLG5hbWU6XCJyZXN0b3JlQnV0dG9uXCIsdmlzaWJsZTohMX0se2ZhOlwiZmFyIGZhLXdpbmRvdy1taW5pbWl6ZVwiLG5hbWU6XCJtaW5pbWl6ZUJ1dHRvblwiLHZpc2libGU6ITB9LHtmYTpcImZhcyBmYS1jYXJldC11cFwiLG5hbWU6XCJkZW1pbmltaXplQnV0dG9uXCIsdmlzaWJsZTohMX1dLGJ1dHRvbnNPbkxlZnQ6W119fSxhPXI7cmV0dXJuIHQmJm4ub2JqZWN0QXNzaWduKHIsdCksZS5zaG93VGl0bGVCYXI9ITAsZS5zaG93Q2xvc2VCdXR0b249ITAsZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZT1hLnRpdGxlQmFyLmZvbnRTaXplK1wicHhcIixlLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ9XCJub3JtYWxcIixlLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW49YS50aXRsZUJhci5sZWZ0TWFyZ2luK1wicHhcIixlLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdD1hLnRpdGxlQmFyLmNvbG9yLGUudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkPWEudGl0bGVCYXIuY29sb3IsZS50aXRsZUJhckNhcHRpb25UZXh0U2hhZG93PW51bGwsZS50aXRsZUJhckNhcHRpb25UZXh0QWxpZ249XCJsZWZ0XCIsZS50aXRsZUJhckhlaWdodD1hLnRpdGxlQmFyLmhlaWdodCtcInB4XCIsZS50aXRsZUJhckNvbG9yRGVmYXVsdD1hLnRpdGxlQmFyLmJhY2tncm91bmQsZS50aXRsZUJhckNvbG9yRm9jdXNlZD1hLnRpdGxlQmFyLmJhY2tncm91bmQsZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ9XCJzb2xpZCAwcHggI2FhYWFhYVwiLGUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkPVwic29saWQgMHB4ICMxODgzZDdcIixlLmZyYW1lQm9yZGVyUmFkaXVzPWEuYm9yZGVyLnJhZGl1cytcInB4XCIsZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdD1hLmJvcmRlci53aWR0aCtcInB4XCIsZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZD1hLmJvcmRlci53aWR0aCtcInB4XCIsZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdD1hLmJvcmRlci5jb2xvcixlLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkPWEuYm9yZGVyLmNvbG9yLGUuZnJhbWVCb3JkZXJTdHlsZT1cInNvbGlkXCIsZS5mcmFtZUJveFNoYWRvdz1hLmJvcmRlci5zaGFkb3csZS5mcmFtZUJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCIsZS5mcmFtZUNvbXBvbmVudHM9bmV3IEFycmF5LGUuZnJhbWVIZWlnaHRBZGp1c3Q9MCxlLmdldFRpdGxlQmFyU3R5bGU9ZnVuY3Rpb24oKXtyZXR1cm4gZS5mb2N1c2VkRnJhbWVPbmx5LHt0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6XCIgXCIsdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOlwiIFwifX0sZS5vbkluaXRpYWxpemU9ZnVuY3Rpb24oKXtvKGUsYSwhMSksbyhlLGEsITApfSxlfX0sZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXIoMCksbz1yKDMzKTtcInN0cmluZ1wiPT10eXBlb2Yobz1vLl9fZXNNb2R1bGU/by5kZWZhdWx0Om8pJiYobz1bW2UuaSxvLFwiXCJdXSk7dmFyIGE9e2luc2VydDpcImhlYWRcIixzaW5nbGV0b246ITF9O24obyxhKTtlLmV4cG9ydHM9by5sb2NhbHN8fHt9fSxmdW5jdGlvbihlLHQscil7KHQ9cigxKSghMSkpLnB1c2goW2UuaSxcIi5qc2ZyYW1lLXByZXNldC1zdHlsZS1tYXRlcmlhbC1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmpzZnJhbWUtcHJlc2V0LXN0eWxlLW1hdGVyaWFsLWZvY3VzZWQge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM2cHg7XFxufVxcblwiLFwiXCJdKSxlLmV4cG9ydHM9dH0sZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXIoMik7ZS5leHBvcnRzLmdldFByZXNldFdpbmRvdz1mdW5jdGlvbihlKXt2YXIgdD17YXBwZWFyYW5jZU5hbWU6XCJ5b3NlbWl0ZVwiLGFwcGVhcmFuY2VQYXJhbTp7fX0scj17fTtlJiYocj1lKTt2YXIgbz1cImZ1bGxzY3JlZW5cIj09PXIubWF4aW1pemVCdXR0b25CZWhhdmlvcixhPVwibWluaW1pemVcIj09PXIubWluaW1pemVCdXR0b25CZWhhdmlvcj9cIm1pbmltaXplQnV0dG9uXCI6bnVsbCxpPVwiaGlkZVwiPT09ci5taW5pbWl6ZUJ1dHRvbkJlaGF2aW9yP1wibWluaW1pemVCdXR0b25cIjpudWxsLGw9XCJoaWRlXCI9PT1yLmNsb3NlQnV0dG9uQmVoYXZpb3I/XCJjdXN0b20tY2xvc2UtYnV0dG9uXCI6bnVsbCxzPXIuY29udHJvbCxkPWwsdT1yLmNsb3NlQnV0dG9uTmFtZTtyZXR1cm4gbyYmKHQuYXBwZWFyYW5jZVBhcmFtLnRpdGxlQmFyPXtncmVlbkJ1dHRvbjpcImZ1bGxzY3JlZW5cIn0pLHQuYXBwZWFyYW5jZVBhcmFtLmNsb3NlQnV0dG9uTmFtZT1kfHx1fHxcImNsb3NlQnV0dG9uXCIsdC5zZXR1cFByZXNldFdpbmRvdz1mdW5jdGlvbihlKXt2YXIgdD17bWF4aW1pemVCdXR0b246XCJ6b29tQnV0dG9uXCIsbWF4aW1pemVQYXJhbTp7ZnVsbFNjcmVlbjpvLHJlc3RvcmVLZXk6XCJFc2NhcGVcIn0sZGVtYXhpbWl6ZUJ1dHRvbjpcImRlem9vbUJ1dHRvblwiLGRlbWluaW1pemVCdXR0b246XCJkZW1pbmltaXplQnV0dG9uXCIsbWluaW1pemVCdXR0b246YSxoaWRlQnV0dG9uczpbaSxsXSxoaWRlUGFyYW06e2FsaWduOlwiQ0VOVEVSX0NFTlRFUlwiLGR1cmF0aW9uOjMwMH0sZGVoaWRlUGFyYW06e2R1cmF0aW9uOjMwMH0sc3R5bGVEaXNwbGF5OlwiaW5saW5lXCIsYW5pbWF0aW9uOiEwLGFuaW1hdGlvbkR1cmF0aW9uOjEwMH07cyYmbih7b3A6XCJvdmVyd3JpdGUtbWVyZ2VcIixvYmplY3QxOnQsb2JqZWN0MjpzfSksZS5zZXRDb250cm9sKHQpfSx0fX1dKX0pKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsIi8qIVxuICogVnVlLmpzIHYyLjAuNVxuICogKGMpIDIwMTQtMjAxNiBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLlZ1ZT10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe3JldHVybiBudWxsPT1lP1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGU/SlNPTi5zdHJpbmdpZnkoZSxudWxsLDIpOlN0cmluZyhlKX1mdW5jdGlvbiB0KGUpe3ZhciB0PXBhcnNlRmxvYXQoZSwxMCk7cmV0dXJuIHR8fDA9PT10P3Q6ZX1mdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBuPU9iamVjdC5jcmVhdGUobnVsbCkscj1lLnNwbGl0KFwiLFwiKSxpPTA7aTxyLmxlbmd0aDtpKyspbltyW2ldXT0hMDtyZXR1cm4gdD9mdW5jdGlvbihlKXtyZXR1cm4gbltlLnRvTG93ZXJDYXNlKCldfTpmdW5jdGlvbihlKXtyZXR1cm4gbltlXX19ZnVuY3Rpb24gcihlLHQpe2lmKGUubGVuZ3RoKXt2YXIgbj1lLmluZGV4T2YodCk7aWYobj4tMSlyZXR1cm4gZS5zcGxpY2UobiwxKX19ZnVuY3Rpb24gaShlLHQpe3JldHVybiBFci5jYWxsKGUsdCl9ZnVuY3Rpb24gbyhlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGV9ZnVuY3Rpb24gYShlKXt2YXIgdD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj10W25dO3JldHVybiByfHwodFtuXT1lKG4pKX19ZnVuY3Rpb24gcyhlLHQpe2Z1bmN0aW9uIG4obil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gcj9yPjE/ZS5hcHBseSh0LGFyZ3VtZW50cyk6ZS5jYWxsKHQsbik6ZS5jYWxsKHQpfXJldHVybiBuLl9sZW5ndGg9ZS5sZW5ndGgsbn1mdW5jdGlvbiBjKGUsdCl7dD10fHwwO2Zvcih2YXIgbj1lLmxlbmd0aC10LHI9bmV3IEFycmF5KG4pO24tLTspcltuXT1lW24rdF07cmV0dXJuIHJ9ZnVuY3Rpb24gdShlLHQpe2Zvcih2YXIgbiBpbiB0KWVbbl09dFtuXTtyZXR1cm4gZX1mdW5jdGlvbiBsKGUpe3JldHVybiBudWxsIT09ZSYmXCJvYmplY3RcIj09dHlwZW9mIGV9ZnVuY3Rpb24gZihlKXtyZXR1cm4gUHIuY2FsbChlKT09PVJyfWZ1bmN0aW9uIGQoZSl7Zm9yKHZhciB0PXt9LG49MDtuPGUubGVuZ3RoO24rKyllW25dJiZ1KHQsZVtuXSk7cmV0dXJuIHR9ZnVuY3Rpb24gcCgpe31mdW5jdGlvbiB2KGUpe3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlLmNvbmNhdCh0LnN0YXRpY0tleXN8fFtdKX0sW10pLmpvaW4oXCIsXCIpfWZ1bmN0aW9uIGgoZSx0KXtyZXR1cm4gZT09dHx8ISghbChlKXx8IWwodCkpJiZKU09OLnN0cmluZ2lmeShlKT09PUpTT04uc3RyaW5naWZ5KHQpfWZ1bmN0aW9uIG0oZSx0KXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKylpZihoKGVbbl0sdCkpcmV0dXJuIG47cmV0dXJuLTF9ZnVuY3Rpb24gZyhlKXt2YXIgdD0oZStcIlwiKS5jaGFyQ29kZUF0KDApO3JldHVybiAzNj09PXR8fDk1PT09dH1mdW5jdGlvbiB5KGUsdCxuLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOm4sZW51bWVyYWJsZTohIXIsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9ZnVuY3Rpb24gXyhlKXtpZighRnIudGVzdChlKSl7dmFyIHQ9ZS5zcGxpdChcIi5cIik7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXtpZighZSlyZXR1cm47ZT1lW3Rbbl1dfXJldHVybiBlfX19ZnVuY3Rpb24gYihlKXtyZXR1cm4vbmF0aXZlIGNvZGUvLnRlc3QoZS50b1N0cmluZygpKX1mdW5jdGlvbiAkKGUpe1FyLnRhcmdldCYmWHIucHVzaChRci50YXJnZXQpLFFyLnRhcmdldD1lfWZ1bmN0aW9uIHcoKXtRci50YXJnZXQ9WHIucG9wKCl9ZnVuY3Rpb24gQygpe2VpLmxlbmd0aD0wLHRpPXt9LG5pPXJpPSExfWZ1bmN0aW9uIHgoKXtmb3Iocmk9ITAsZWkuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBlLmlkLXQuaWR9KSxpaT0wO2lpPGVpLmxlbmd0aDtpaSsrKXt2YXIgZT1laVtpaV0sdD1lLmlkO3RpW3RdPW51bGwsZS5ydW4oKX1aciYmQnIuZGV2dG9vbHMmJlpyLmVtaXQoXCJmbHVzaFwiKSxDKCl9ZnVuY3Rpb24gayhlKXt2YXIgdD1lLmlkO2lmKG51bGw9PXRpW3RdKXtpZih0aVt0XT0hMCxyaSl7Zm9yKHZhciBuPWVpLmxlbmd0aC0xO24+PTAmJmVpW25dLmlkPmUuaWQ7KW4tLTtlaS5zcGxpY2UoTWF0aC5tYXgobixpaSkrMSwwLGUpfWVsc2UgZWkucHVzaChlKTtuaXx8KG5pPSEwLEdyKHgpKX19ZnVuY3Rpb24gQShlKXtzaS5jbGVhcigpLE8oZSxzaSl9ZnVuY3Rpb24gTyhlLHQpe3ZhciBuLHIsaT1BcnJheS5pc0FycmF5KGUpO2lmKChpfHxsKGUpKSYmT2JqZWN0LmlzRXh0ZW5zaWJsZShlKSl7aWYoZS5fX29iX18pe3ZhciBvPWUuX19vYl9fLmRlcC5pZDtpZih0LmhhcyhvKSlyZXR1cm47dC5hZGQobyl9aWYoaSlmb3Iobj1lLmxlbmd0aDtuLS07KU8oZVtuXSx0KTtlbHNlIGZvcihyPU9iamVjdC5rZXlzKGUpLG49ci5sZW5ndGg7bi0tOylPKGVbcltuXV0sdCl9fWZ1bmN0aW9uIFQoZSx0KXtlLl9fcHJvdG9fXz10fWZ1bmN0aW9uIFMoZSx0LG4pe2Zvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7dmFyIG89bltyXTt5KGUsbyx0W29dKX19ZnVuY3Rpb24gRShlKXtpZihsKGUpKXt2YXIgdDtyZXR1cm4gaShlLFwiX19vYl9fXCIpJiZlLl9fb2JfXyBpbnN0YW5jZW9mIGRpP3Q9ZS5fX29iX186Zmkuc2hvdWxkQ29udmVydCYmIUJyLl9pc1NlcnZlciYmKEFycmF5LmlzQXJyYXkoZSl8fGYoZSkpJiZPYmplY3QuaXNFeHRlbnNpYmxlKGUpJiYhZS5faXNWdWUmJih0PW5ldyBkaShlKSksdH19ZnVuY3Rpb24gaihlLHQsbixyKXt2YXIgaT1uZXcgUXIsbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCk7aWYoIW98fG8uY29uZmlndXJhYmxlIT09ITEpe3ZhciBhPW8mJm8uZ2V0LHM9byYmby5zZXQsYz1FKG4pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3ZhciB0PWE/YS5jYWxsKGUpOm47cmV0dXJuIFFyLnRhcmdldCYmKGkuZGVwZW5kKCksYyYmYy5kZXAuZGVwZW5kKCksQXJyYXkuaXNBcnJheSh0KSYmRCh0KSksdH0sc2V0OmZ1bmN0aW9uKHQpe3ZhciByPWE/YS5jYWxsKGUpOm47dCE9PXImJihzP3MuY2FsbChlLHQpOm49dCxjPUUodCksaS5ub3RpZnkoKSl9fSl9fWZ1bmN0aW9uIEwoZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGUubGVuZ3RoPU1hdGgubWF4KGUubGVuZ3RoLHQpLGUuc3BsaWNlKHQsMSxuKSxuO2lmKGkoZSx0KSlyZXR1cm4gdm9pZChlW3RdPW4pO3ZhciByPWUuX19vYl9fO2lmKCEoZS5faXNWdWV8fHImJnIudm1Db3VudCkpcmV0dXJuIHI/KGooci52YWx1ZSx0LG4pLHIuZGVwLm5vdGlmeSgpLG4pOnZvaWQoZVt0XT1uKX1mdW5jdGlvbiBOKGUsdCl7dmFyIG49ZS5fX29iX187ZS5faXNWdWV8fG4mJm4udm1Db3VudHx8aShlLHQpJiYoZGVsZXRlIGVbdF0sbiYmbi5kZXAubm90aWZ5KCkpfWZ1bmN0aW9uIEQoZSl7Zm9yKHZhciB0PXZvaWQgMCxuPTAscj1lLmxlbmd0aDtuPHI7bisrKXQ9ZVtuXSx0JiZ0Ll9fb2JfXyYmdC5fX29iX18uZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkodCkmJkQodCl9ZnVuY3Rpb24gTShlKXtlLl93YXRjaGVycz1bXSxQKGUpLFIoZSksSShlKSxGKGUpLEgoZSl9ZnVuY3Rpb24gUChlKXt2YXIgdD1lLiRvcHRpb25zLnByb3BzO2lmKHQpe3ZhciBuPWUuJG9wdGlvbnMucHJvcHNEYXRhfHx7fSxyPWUuJG9wdGlvbnMuX3Byb3BLZXlzPU9iamVjdC5rZXlzKHQpLGk9IWUuJHBhcmVudDtmaS5zaG91bGRDb252ZXJ0PWk7Zm9yKHZhciBvPWZ1bmN0aW9uKGkpe3ZhciBvPXJbaV07aihlLG8sRGUobyx0LG4sZSkpfSxhPTA7YTxyLmxlbmd0aDthKyspbyhhKTtmaS5zaG91bGRDb252ZXJ0PSEwfX1mdW5jdGlvbiBSKGUpe3ZhciB0PWUuJG9wdGlvbnMuZGF0YTt0PWUuX2RhdGE9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90LmNhbGwoZSk6dHx8e30sZih0KXx8KHQ9e30pO2Zvcih2YXIgbj1PYmplY3Qua2V5cyh0KSxyPWUuJG9wdGlvbnMucHJvcHMsbz1uLmxlbmd0aDtvLS07KXImJmkocixuW29dKXx8VihlLG5bb10pO0UodCksdC5fX29iX18mJnQuX19vYl9fLnZtQ291bnQrK31mdW5jdGlvbiBJKGUpe3ZhciB0PWUuJG9wdGlvbnMuY29tcHV0ZWQ7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByPyhwaS5nZXQ9QihyLGUpLHBpLnNldD1wKToocGkuZ2V0PXIuZ2V0P3IuY2FjaGUhPT0hMT9CKHIuZ2V0LGUpOnMoci5nZXQsZSk6cCxwaS5zZXQ9ci5zZXQ/cyhyLnNldCxlKTpwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLHBpKX19ZnVuY3Rpb24gQihlLHQpe3ZhciBuPW5ldyBhaSh0LGUscCx7bGF6eTohMH0pO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuLmRpcnR5JiZuLmV2YWx1YXRlKCksUXIudGFyZ2V0JiZuLmRlcGVuZCgpLG4udmFsdWV9fWZ1bmN0aW9uIEYoZSl7dmFyIHQ9ZS4kb3B0aW9ucy5tZXRob2RzO2lmKHQpZm9yKHZhciBuIGluIHQpZVtuXT1udWxsPT10W25dP3A6cyh0W25dLGUpfWZ1bmN0aW9uIEgoZSl7dmFyIHQ9ZS4kb3B0aW9ucy53YXRjaDtpZih0KWZvcih2YXIgbiBpbiB0KXt2YXIgcj10W25dO2lmKEFycmF5LmlzQXJyYXkocikpZm9yKHZhciBpPTA7aTxyLmxlbmd0aDtpKyspVShlLG4scltpXSk7ZWxzZSBVKGUsbixyKX19ZnVuY3Rpb24gVShlLHQsbil7dmFyIHI7ZihuKSYmKHI9bixuPW4uaGFuZGxlciksXCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPWVbbl0pLGUuJHdhdGNoKHQsbixyKX1mdW5jdGlvbiB6KGUpe3ZhciB0PXt9O3QuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGF9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLnByb3RvdHlwZSxcIiRkYXRhXCIsdCksZS5wcm90b3R5cGUuJHNldD1MLGUucHJvdG90eXBlLiRkZWxldGU9TixlLnByb3RvdHlwZS4kd2F0Y2g9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXM7bj1ufHx7fSxuLnVzZXI9ITA7dmFyIGk9bmV3IGFpKHIsZSx0LG4pO3JldHVybiBuLmltbWVkaWF0ZSYmdC5jYWxsKHIsaS52YWx1ZSksZnVuY3Rpb24oKXtpLnRlYXJkb3duKCl9fX1mdW5jdGlvbiBWKGUsdCl7Zyh0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuX2RhdGFbdF19LHNldDpmdW5jdGlvbihuKXtlLl9kYXRhW3RdPW59fSl9ZnVuY3Rpb24gSihlKXt2YXIgdD1uZXcgdmkoZS50YWcsZS5kYXRhLGUuY2hpbGRyZW4sZS50ZXh0LGUuZWxtLGUubnMsZS5jb250ZXh0LGUuY29tcG9uZW50T3B0aW9ucyk7cmV0dXJuIHQuaXNTdGF0aWM9ZS5pc1N0YXRpYyx0LmtleT1lLmtleSx0LmlzQ2xvbmVkPSEwLHR9ZnVuY3Rpb24gcShlKXtmb3IodmFyIHQ9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjxlLmxlbmd0aDtuKyspdFtuXT1KKGVbbl0pO3JldHVybiB0fWZ1bmN0aW9uIEsoZSx0LG4scil7cis9dDt2YXIgaT1lLl9faW5qZWN0ZWR8fChlLl9faW5qZWN0ZWQ9e30pO2lmKCFpW3JdKXtpW3JdPSEwO3ZhciBvPWVbdF07bz9lW3RdPWZ1bmN0aW9uKCl7by5hcHBseSh0aGlzLGFyZ3VtZW50cyksbi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9OmVbdF09bn19ZnVuY3Rpb24gVyhlLHQsbixyLGkpe3ZhciBvLGEscyxjLHUsbDtmb3IobyBpbiBlKWlmKGE9ZVtvXSxzPXRbb10sYSlpZihzKXtpZihhIT09cylpZihBcnJheS5pc0FycmF5KHMpKXtzLmxlbmd0aD1hLmxlbmd0aDtmb3IodmFyIGY9MDtmPHMubGVuZ3RoO2YrKylzW2ZdPWFbZl07ZVtvXT1zfWVsc2Ugcy5mbj1hLGVbb109c31lbHNlIGw9XCIhXCI9PT1vLmNoYXJBdCgwKSx1PWw/by5zbGljZSgxKTpvLEFycmF5LmlzQXJyYXkoYSk/bih1LGEuaW52b2tlcj1aKGEpLGwpOihhLmludm9rZXJ8fChjPWEsYT1lW29dPXt9LGEuZm49YyxhLmludm9rZXI9RyhhKSksbih1LGEuaW52b2tlcixsKSk7ZWxzZTtmb3IobyBpbiB0KWVbb118fCh1PVwiIVwiPT09by5jaGFyQXQoMCk/by5zbGljZSgxKTpvLHIodSx0W29dLmludm9rZXIpKX1mdW5jdGlvbiBaKGUpe3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIG49YXJndW1lbnRzLHI9MT09PWFyZ3VtZW50cy5sZW5ndGgsaT0wO2k8ZS5sZW5ndGg7aSsrKXI/ZVtpXSh0KTplW2ldLmFwcGx5KG51bGwsbil9fWZ1bmN0aW9uIEcoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPTE9PT1hcmd1bWVudHMubGVuZ3RoO24/ZS5mbih0KTplLmZuLmFwcGx5KG51bGwsYXJndW1lbnRzKX19ZnVuY3Rpb24gWShlLHQsbil7aWYobyhlKSlyZXR1cm5bUShlKV07aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciByPVtdLGk9MCxhPWUubGVuZ3RoO2k8YTtpKyspe3ZhciBzPWVbaV0sYz1yW3IubGVuZ3RoLTFdO0FycmF5LmlzQXJyYXkocyk/ci5wdXNoLmFwcGx5KHIsWShzLHQsKG58fFwiXCIpK1wiX1wiK2kpKTpvKHMpP2MmJmMudGV4dD9jLnRleHQrPVN0cmluZyhzKTpcIlwiIT09cyYmci5wdXNoKFEocykpOnMgaW5zdGFuY2VvZiB2aSYmKHMudGV4dCYmYyYmYy50ZXh0P2MudGV4dCs9cy50ZXh0Oih0JiZYKHMsdCkscy50YWcmJm51bGw9PXMua2V5JiZudWxsIT1uJiYocy5rZXk9XCJfX3ZsaXN0XCIrbitcIl9cIitpK1wiX19cIiksci5wdXNoKHMpKSl9cmV0dXJuIHJ9fWZ1bmN0aW9uIFEoZSl7cmV0dXJuIG5ldyB2aSh2b2lkIDAsdm9pZCAwLHZvaWQgMCxTdHJpbmcoZSkpfWZ1bmN0aW9uIFgoZSx0KXtpZihlLnRhZyYmIWUubnMmJihlLm5zPXQsZS5jaGlsZHJlbikpZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKVgoZS5jaGlsZHJlbltuXSx0KX1mdW5jdGlvbiBlZShlKXtyZXR1cm4gZSYmZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuY29tcG9uZW50T3B0aW9uc30pWzBdfWZ1bmN0aW9uIHRlKGUpe3ZhciB0PWUuJG9wdGlvbnMsbj10LnBhcmVudDtpZihuJiYhdC5hYnN0cmFjdCl7Zm9yKDtuLiRvcHRpb25zLmFic3RyYWN0JiZuLiRwYXJlbnQ7KW49bi4kcGFyZW50O24uJGNoaWxkcmVuLnB1c2goZSl9ZS4kcGFyZW50PW4sZS4kcm9vdD1uP24uJHJvb3Q6ZSxlLiRjaGlsZHJlbj1bXSxlLiRyZWZzPXt9LGUuX3dhdGNoZXI9bnVsbCxlLl9pbmFjdGl2ZT0hMSxlLl9pc01vdW50ZWQ9ITEsZS5faXNEZXN0cm95ZWQ9ITEsZS5faXNCZWluZ0Rlc3Ryb3llZD0hMX1mdW5jdGlvbiBuZShlKXtlLnByb3RvdHlwZS5fbW91bnQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO3JldHVybiBuLiRlbD1lLG4uJG9wdGlvbnMucmVuZGVyfHwobi4kb3B0aW9ucy5yZW5kZXI9aGkpLHJlKG4sXCJiZWZvcmVNb3VudFwiKSxuLl93YXRjaGVyPW5ldyBhaShuLGZ1bmN0aW9uKCl7bi5fdXBkYXRlKG4uX3JlbmRlcigpLHQpfSxwKSx0PSExLG51bGw9PW4uJHZub2RlJiYobi5faXNNb3VudGVkPSEwLHJlKG4sXCJtb3VudGVkXCIpKSxufSxlLnByb3RvdHlwZS5fdXBkYXRlPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztuLl9pc01vdW50ZWQmJnJlKG4sXCJiZWZvcmVVcGRhdGVcIik7dmFyIHI9bi4kZWwsaT1taTttaT1uO3ZhciBvPW4uX3Zub2RlO24uX3Zub2RlPWUsbz9uLiRlbD1uLl9fcGF0Y2hfXyhvLGUpOm4uJGVsPW4uX19wYXRjaF9fKG4uJGVsLGUsdCksbWk9aSxyJiYoci5fX3Z1ZV9fPW51bGwpLG4uJGVsJiYobi4kZWwuX192dWVfXz1uKSxuLiR2bm9kZSYmbi4kcGFyZW50JiZuLiR2bm9kZT09PW4uJHBhcmVudC5fdm5vZGUmJihuLiRwYXJlbnQuJGVsPW4uJGVsKSxuLl9pc01vdW50ZWQmJnJlKG4sXCJ1cGRhdGVkXCIpfSxlLnByb3RvdHlwZS5fdXBkYXRlRnJvbVBhcmVudD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaT10aGlzLG89ISghaS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4mJiFyKTtpZihpLiRvcHRpb25zLl9wYXJlbnRWbm9kZT1uLGkuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuPXIsZSYmaS4kb3B0aW9ucy5wcm9wcyl7Zmkuc2hvdWxkQ29udmVydD0hMTtmb3IodmFyIGE9aS4kb3B0aW9ucy5fcHJvcEtleXN8fFtdLHM9MDtzPGEubGVuZ3RoO3MrKyl7dmFyIGM9YVtzXTtpW2NdPURlKGMsaS4kb3B0aW9ucy5wcm9wcyxlLGkpfWZpLnNob3VsZENvbnZlcnQ9ITAsaS4kb3B0aW9ucy5wcm9wc0RhdGE9ZX1pZih0KXt2YXIgdT1pLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7aS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzPXQsaS5fdXBkYXRlTGlzdGVuZXJzKHQsdSl9byYmKGkuJHNsb3RzPWJlKHIsaS5fcmVuZGVyQ29udGV4dCksaS4kZm9yY2VVcGRhdGUoKSl9LGUucHJvdG90eXBlLiRmb3JjZVVwZGF0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fd2F0Y2hlciYmZS5fd2F0Y2hlci51cGRhdGUoKX0sZS5wcm90b3R5cGUuJGRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKCFlLl9pc0JlaW5nRGVzdHJveWVkKXtyZShlLFwiYmVmb3JlRGVzdHJveVwiKSxlLl9pc0JlaW5nRGVzdHJveWVkPSEwO3ZhciB0PWUuJHBhcmVudDshdHx8dC5faXNCZWluZ0Rlc3Ryb3llZHx8ZS4kb3B0aW9ucy5hYnN0cmFjdHx8cih0LiRjaGlsZHJlbixlKSxlLl93YXRjaGVyJiZlLl93YXRjaGVyLnRlYXJkb3duKCk7Zm9yKHZhciBuPWUuX3dhdGNoZXJzLmxlbmd0aDtuLS07KWUuX3dhdGNoZXJzW25dLnRlYXJkb3duKCk7ZS5fZGF0YS5fX29iX18mJmUuX2RhdGEuX19vYl9fLnZtQ291bnQtLSxlLl9pc0Rlc3Ryb3llZD0hMCxyZShlLFwiZGVzdHJveWVkXCIpLGUuJG9mZigpLGUuJGVsJiYoZS4kZWwuX192dWVfXz1udWxsKSxlLl9fcGF0Y2hfXyhlLl92bm9kZSxudWxsKX19fWZ1bmN0aW9uIHJlKGUsdCl7dmFyIG49ZS4kb3B0aW9uc1t0XTtpZihuKWZvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyluW3JdLmNhbGwoZSk7ZS4kZW1pdChcImhvb2s6XCIrdCl9ZnVuY3Rpb24gaWUoZSx0LG4scixpKXtpZihlJiYobChlKSYmKGU9QWUuZXh0ZW5kKGUpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSl7aWYoa2UoZSksIWUuY2lkKWlmKGUucmVzb2x2ZWQpZT1lLnJlc29sdmVkO2Vsc2UgaWYoZT1mZShlLGZ1bmN0aW9uKCl7bi4kZm9yY2VVcGRhdGUoKX0pLCFlKXJldHVybjt0PXR8fHt9O3ZhciBvPWRlKHQsZSk7aWYoZS5vcHRpb25zLmZ1bmN0aW9uYWwpcmV0dXJuIG9lKGUsbyx0LG4scik7dmFyIGE9dC5vbjt0Lm9uPXQubmF0aXZlT24sZS5vcHRpb25zLmFic3RyYWN0JiYodD17fSksdmUodCk7dmFyIHM9ZS5vcHRpb25zLm5hbWV8fGksYz1uZXcgdmkoXCJ2dWUtY29tcG9uZW50LVwiK2UuY2lkKyhzP1wiLVwiK3M6XCJcIiksdCx2b2lkIDAsdm9pZCAwLHZvaWQgMCx2b2lkIDAsbix7Q3RvcjplLHByb3BzRGF0YTpvLGxpc3RlbmVyczphLHRhZzppLGNoaWxkcmVuOnJ9KTtyZXR1cm4gY319ZnVuY3Rpb24gb2UoZSx0LG4scixpKXt2YXIgbz17fSxhPWUub3B0aW9ucy5wcm9wcztpZihhKWZvcih2YXIgYyBpbiBhKW9bY109RGUoYyxhLHQpO3ZhciB1PWUub3B0aW9ucy5yZW5kZXIuY2FsbChudWxsLHMobWUse19zZWxmOk9iamVjdC5jcmVhdGUocil9KSx7cHJvcHM6byxkYXRhOm4scGFyZW50OnIsY2hpbGRyZW46WShpKSxzbG90czpmdW5jdGlvbigpe3JldHVybiBiZShpLHIpfX0pO3JldHVybiB1IGluc3RhbmNlb2YgdmkmJih1LmZ1bmN0aW9uYWxDb250ZXh0PXIsbi5zbG90JiYoKHUuZGF0YXx8KHUuZGF0YT17fSkpLnNsb3Q9bi5zbG90KSksdX1mdW5jdGlvbiBhZShlLHQpe3ZhciBuPWUuY29tcG9uZW50T3B0aW9ucyxyPXtfaXNDb21wb25lbnQ6ITAscGFyZW50OnQscHJvcHNEYXRhOm4ucHJvcHNEYXRhLF9jb21wb25lbnRUYWc6bi50YWcsX3BhcmVudFZub2RlOmUsX3BhcmVudExpc3RlbmVyczpuLmxpc3RlbmVycyxfcmVuZGVyQ2hpbGRyZW46bi5jaGlsZHJlbn0saT1lLmRhdGEuaW5saW5lVGVtcGxhdGU7cmV0dXJuIGkmJihyLnJlbmRlcj1pLnJlbmRlcixyLnN0YXRpY1JlbmRlckZucz1pLnN0YXRpY1JlbmRlckZucyksbmV3IG4uQ3RvcihyKX1mdW5jdGlvbiBzZShlLHQpe2lmKCFlLmNoaWxkfHxlLmNoaWxkLl9pc0Rlc3Ryb3llZCl7dmFyIG49ZS5jaGlsZD1hZShlLG1pKTtuLiRtb3VudCh0P2UuZWxtOnZvaWQgMCx0KX19ZnVuY3Rpb24gY2UoZSx0KXt2YXIgbj10LmNvbXBvbmVudE9wdGlvbnMscj10LmNoaWxkPWUuY2hpbGQ7ci5fdXBkYXRlRnJvbVBhcmVudChuLnByb3BzRGF0YSxuLmxpc3RlbmVycyx0LG4uY2hpbGRyZW4pfWZ1bmN0aW9uIHVlKGUpe2UuY2hpbGQuX2lzTW91bnRlZHx8KGUuY2hpbGQuX2lzTW91bnRlZD0hMCxyZShlLmNoaWxkLFwibW91bnRlZFwiKSksZS5kYXRhLmtlZXBBbGl2ZSYmKGUuY2hpbGQuX2luYWN0aXZlPSExLHJlKGUuY2hpbGQsXCJhY3RpdmF0ZWRcIikpfWZ1bmN0aW9uIGxlKGUpe2UuY2hpbGQuX2lzRGVzdHJveWVkfHwoZS5kYXRhLmtlZXBBbGl2ZT8oZS5jaGlsZC5faW5hY3RpdmU9ITAscmUoZS5jaGlsZCxcImRlYWN0aXZhdGVkXCIpKTplLmNoaWxkLiRkZXN0cm95KCkpfWZ1bmN0aW9uIGZlKGUsdCl7aWYoIWUucmVxdWVzdGVkKXtlLnJlcXVlc3RlZD0hMDt2YXIgbj1lLnBlbmRpbmdDYWxsYmFja3M9W3RdLHI9ITAsaT1mdW5jdGlvbih0KXtpZihsKHQpJiYodD1BZS5leHRlbmQodCkpLGUucmVzb2x2ZWQ9dCwhcilmb3IodmFyIGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspbltpXSh0KX0sbz1mdW5jdGlvbihlKXt9LGE9ZShpLG8pO3JldHVybiBhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRoZW4mJiFlLnJlc29sdmVkJiZhLnRoZW4oaSxvKSxyPSExLGUucmVzb2x2ZWR9ZS5wZW5kaW5nQ2FsbGJhY2tzLnB1c2godCl9ZnVuY3Rpb24gZGUoZSx0KXt2YXIgbj10Lm9wdGlvbnMucHJvcHM7aWYobil7dmFyIHI9e30saT1lLmF0dHJzLG89ZS5wcm9wcyxhPWUuZG9tUHJvcHM7aWYoaXx8b3x8YSlmb3IodmFyIHMgaW4gbil7dmFyIGM9TXIocyk7cGUocixvLHMsYywhMCl8fHBlKHIsaSxzLGMpfHxwZShyLGEscyxjKX1yZXR1cm4gcn19ZnVuY3Rpb24gcGUoZSx0LG4scixvKXtpZih0KXtpZihpKHQsbikpcmV0dXJuIGVbbl09dFtuXSxvfHxkZWxldGUgdFtuXSwhMDtpZihpKHQscikpcmV0dXJuIGVbbl09dFtyXSxvfHxkZWxldGUgdFtyXSwhMH1yZXR1cm4hMX1mdW5jdGlvbiB2ZShlKXtlLmhvb2t8fChlLmhvb2s9e30pO2Zvcih2YXIgdD0wO3Q8eWkubGVuZ3RoO3QrKyl7dmFyIG49eWlbdF0scj1lLmhvb2tbbl0saT1naVtuXTtlLmhvb2tbbl09cj9oZShpLHIpOml9fWZ1bmN0aW9uIGhlKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKG4scil7ZShuLHIpLHQobixyKX19ZnVuY3Rpb24gbWUoZSx0LG4pe3JldHVybiB0JiYoQXJyYXkuaXNBcnJheSh0KXx8XCJvYmplY3RcIiE9dHlwZW9mIHQpJiYobj10LHQ9dm9pZCAwKSxnZSh0aGlzLl9zZWxmLGUsdCxuKX1mdW5jdGlvbiBnZShlLHQsbixyKXtpZighbnx8IW4uX19vYl9fKXtpZighdClyZXR1cm4gaGkoKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIGksbz1Cci5nZXRUYWdOYW1lc3BhY2UodCk7aWYoQnIuaXNSZXNlcnZlZFRhZyh0KSlyZXR1cm4gbmV3IHZpKHQsbixZKHIsbyksdm9pZCAwLHZvaWQgMCxvLGUpO2lmKGk9TmUoZS4kb3B0aW9ucyxcImNvbXBvbmVudHNcIix0KSlyZXR1cm4gaWUoaSxuLGUscix0KTt2YXIgYT1cImZvcmVpZ25PYmplY3RcIj09PXQ/XCJ4aHRtbFwiOm87cmV0dXJuIG5ldyB2aSh0LG4sWShyLGEpLHZvaWQgMCx2b2lkIDAsbyxlKX1yZXR1cm4gaWUodCxuLGUscil9fWZ1bmN0aW9uIHllKGUpe2UuJHZub2RlPW51bGwsZS5fdm5vZGU9bnVsbCxlLl9zdGF0aWNUcmVlcz1udWxsLGUuX3JlbmRlckNvbnRleHQ9ZS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUmJmUuJG9wdGlvbnMuX3BhcmVudFZub2RlLmNvbnRleHQsZS4kc2xvdHM9YmUoZS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4sZS5fcmVuZGVyQ29udGV4dCksZS4kY3JlYXRlRWxlbWVudD1zKG1lLGUpLGUuJG9wdGlvbnMuZWwmJmUuJG1vdW50KGUuJG9wdGlvbnMuZWwpfWZ1bmN0aW9uIF9lKG4pe2Z1bmN0aW9uIHIoZSx0LG4pe2lmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspZVtyXSYmXCJzdHJpbmdcIiE9dHlwZW9mIGVbcl0mJmkoZVtyXSx0K1wiX1wiK3Isbik7ZWxzZSBpKGUsdCxuKX1mdW5jdGlvbiBpKGUsdCxuKXtlLmlzU3RhdGljPSEwLGUua2V5PXQsZS5pc09uY2U9bn1uLnByb3RvdHlwZS4kbmV4dFRpY2s9ZnVuY3Rpb24oZSl7R3IoZSx0aGlzKX0sbi5wcm90b3R5cGUuX3JlbmRlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLiRvcHRpb25zLG49dC5yZW5kZXIscj10LnN0YXRpY1JlbmRlckZucyxpPXQuX3BhcmVudFZub2RlO2lmKGUuX2lzTW91bnRlZClmb3IodmFyIG8gaW4gZS4kc2xvdHMpZS4kc2xvdHNbb109cShlLiRzbG90c1tvXSk7ciYmIWUuX3N0YXRpY1RyZWVzJiYoZS5fc3RhdGljVHJlZXM9W10pLGUuJHZub2RlPWk7dmFyIGE7dHJ5e2E9bi5jYWxsKGUuX3JlbmRlclByb3h5LGUuJGNyZWF0ZUVsZW1lbnQpfWNhdGNoKHQpe2lmKEJyLmVycm9ySGFuZGxlcilCci5lcnJvckhhbmRsZXIuY2FsbChudWxsLHQsZSk7ZWxzZXtpZihCci5faXNTZXJ2ZXIpdGhyb3cgdDtjb25zb2xlLmVycm9yKHQpfWE9ZS5fdm5vZGV9cmV0dXJuIGEgaW5zdGFuY2VvZiB2aXx8KGE9aGkoKSksYS5wYXJlbnQ9aSxhfSxuLnByb3RvdHlwZS5faD1tZSxuLnByb3RvdHlwZS5fcz1lLG4ucHJvdG90eXBlLl9uPXQsbi5wcm90b3R5cGUuX2U9aGksbi5wcm90b3R5cGUuX3E9aCxuLnByb3RvdHlwZS5faT1tLG4ucHJvdG90eXBlLl9tPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5fc3RhdGljVHJlZXNbZV07cmV0dXJuIG4mJiF0P0FycmF5LmlzQXJyYXkobik/cShuKTpKKG4pOihuPXRoaXMuX3N0YXRpY1RyZWVzW2VdPXRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW2VdLmNhbGwodGhpcy5fcmVuZGVyUHJveHkpLHIobixcIl9fc3RhdGljX19cIitlLCExKSxuKX0sbi5wcm90b3R5cGUuX289ZnVuY3Rpb24oZSx0LG4pe3JldHVybiByKGUsXCJfX29uY2VfX1wiK3QrKG4/XCJfXCIrbjpcIlwiKSwhMCksZX07dmFyIG89ZnVuY3Rpb24oZSl7cmV0dXJuIGV9O24ucHJvdG90eXBlLl9mPWZ1bmN0aW9uKGUpe3JldHVybiBOZSh0aGlzLiRvcHRpb25zLFwiZmlsdGVyc1wiLGUsITApfHxvfSxuLnByb3RvdHlwZS5fbD1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7aWYoQXJyYXkuaXNBcnJheShlKSlmb3Iobj1uZXcgQXJyYXkoZS5sZW5ndGgpLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbltyXT10KGVbcl0scik7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgZSlmb3Iobj1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspbltyXT10KHIrMSxyKTtlbHNlIGlmKGwoZSkpZm9yKG89T2JqZWN0LmtleXMoZSksbj1uZXcgQXJyYXkoby5sZW5ndGgpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspYT1vW3JdLG5bcl09dChlW2FdLGEscik7cmV0dXJuIG59LG4ucHJvdG90eXBlLl90PWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy4kc2xvdHNbZV07cmV0dXJuIG58fHR9LG4ucHJvdG90eXBlLl9iPWZ1bmN0aW9uKGUsdCxuKXtpZih0KWlmKGwodCkpe0FycmF5LmlzQXJyYXkodCkmJih0PWQodCkpO2Zvcih2YXIgciBpbiB0KWlmKFwiY2xhc3NcIj09PXJ8fFwic3R5bGVcIj09PXIpZVtyXT10W3JdO2Vsc2V7dmFyIGk9bnx8QnIubXVzdFVzZVByb3Aocik/ZS5kb21Qcm9wc3x8KGUuZG9tUHJvcHM9e30pOmUuYXR0cnN8fChlLmF0dHJzPXt9KTtpW3JdPXRbcl19fWVsc2U7cmV0dXJuIGV9LG4ucHJvdG90eXBlLl9rPWZ1bmN0aW9uKGUpe3JldHVybiBCci5rZXlDb2Rlc1tlXX19ZnVuY3Rpb24gYmUoZSx0KXt2YXIgbj17fTtpZighZSlyZXR1cm4gbjtmb3IodmFyIHIsaSxvPVkoZSl8fFtdLGE9W10scz0wLGM9by5sZW5ndGg7czxjO3MrKylpZihpPW9bc10sKGkuY29udGV4dD09PXR8fGkuZnVuY3Rpb25hbENvbnRleHQ9PT10KSYmaS5kYXRhJiYocj1pLmRhdGEuc2xvdCkpe3ZhciB1PW5bcl18fChuW3JdPVtdKTtcInRlbXBsYXRlXCI9PT1pLnRhZz91LnB1c2guYXBwbHkodSxpLmNoaWxkcmVuKTp1LnB1c2goaSl9ZWxzZSBhLnB1c2goaSk7cmV0dXJuIGEubGVuZ3RoJiYoMSE9PWEubGVuZ3RofHxcIiBcIiE9PWFbMF0udGV4dCYmIWFbMF0uaXNDb21tZW50KSYmKG4uZGVmYXVsdD1hKSxufWZ1bmN0aW9uICRlKGUpe2UuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpO3ZhciB0PWUuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyxuPXMoZS4kb24sZSkscj1zKGUuJG9mZixlKTtlLl91cGRhdGVMaXN0ZW5lcnM9ZnVuY3Rpb24odCxpKXtXKHQsaXx8e30sbixyLGUpfSx0JiZlLl91cGRhdGVMaXN0ZW5lcnModCl9ZnVuY3Rpb24gd2UoZSl7ZS5wcm90b3R5cGUuJG9uPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztyZXR1cm4obi5fZXZlbnRzW2VdfHwobi5fZXZlbnRzW2VdPVtdKSkucHVzaCh0KSxufSxlLnByb3RvdHlwZS4kb25jZT1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oKXtyLiRvZmYoZSxuKSx0LmFwcGx5KHIsYXJndW1lbnRzKX12YXIgcj10aGlzO3JldHVybiBuLmZuPXQsci4kb24oZSxuKSxyfSxlLnByb3RvdHlwZS4kb2ZmPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbi5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksbjt2YXIgcj1uLl9ldmVudHNbZV07aWYoIXIpcmV0dXJuIG47aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG4uX2V2ZW50c1tlXT1udWxsLG47Zm9yKHZhciBpLG89ci5sZW5ndGg7by0tOylpZihpPXJbb10saT09PXR8fGkuZm49PT10KXtyLnNwbGljZShvLDEpO2JyZWFrfXJldHVybiBufSxlLnByb3RvdHlwZS4kZW1pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dC5fZXZlbnRzW2VdO2lmKG4pe249bi5sZW5ndGg+MT9jKG4pOm47Zm9yKHZhciByPWMoYXJndW1lbnRzLDEpLGk9MCxvPW4ubGVuZ3RoO2k8bztpKyspbltpXS5hcHBseSh0LHIpfXJldHVybiB0fX1mdW5jdGlvbiBDZShlKXtlLnByb3RvdHlwZS5faW5pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QuX3VpZD1faSsrLHQuX2lzVnVlPSEwLGUmJmUuX2lzQ29tcG9uZW50P3hlKHQsZSk6dC4kb3B0aW9ucz1MZShrZSh0LmNvbnN0cnVjdG9yKSxlfHx7fSx0KSx0Ll9yZW5kZXJQcm94eT10LHQuX3NlbGY9dCx0ZSh0KSwkZSh0KSxyZSh0LFwiYmVmb3JlQ3JlYXRlXCIpLE0odCkscmUodCxcImNyZWF0ZWRcIikseWUodCl9fWZ1bmN0aW9uIHhlKGUsdCl7dmFyIG49ZS4kb3B0aW9ucz1PYmplY3QuY3JlYXRlKGUuY29uc3RydWN0b3Iub3B0aW9ucyk7bi5wYXJlbnQ9dC5wYXJlbnQsbi5wcm9wc0RhdGE9dC5wcm9wc0RhdGEsbi5fcGFyZW50Vm5vZGU9dC5fcGFyZW50Vm5vZGUsbi5fcGFyZW50TGlzdGVuZXJzPXQuX3BhcmVudExpc3RlbmVycyxuLl9yZW5kZXJDaGlsZHJlbj10Ll9yZW5kZXJDaGlsZHJlbixuLl9jb21wb25lbnRUYWc9dC5fY29tcG9uZW50VGFnLHQucmVuZGVyJiYobi5yZW5kZXI9dC5yZW5kZXIsbi5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMpfWZ1bmN0aW9uIGtlKGUpe3ZhciB0PWUub3B0aW9ucztpZihlLnN1cGVyKXt2YXIgbj1lLnN1cGVyLm9wdGlvbnMscj1lLnN1cGVyT3B0aW9ucyxpPWUuZXh0ZW5kT3B0aW9ucztuIT09ciYmKGUuc3VwZXJPcHRpb25zPW4saS5yZW5kZXI9dC5yZW5kZXIsaS5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMsdD1lLm9wdGlvbnM9TGUobixpKSx0Lm5hbWUmJih0LmNvbXBvbmVudHNbdC5uYW1lXT1lKSl9cmV0dXJuIHR9ZnVuY3Rpb24gQWUoZSl7dGhpcy5faW5pdChlKX1mdW5jdGlvbiBPZShlLHQpe3ZhciBuLHIsbztmb3IobiBpbiB0KXI9ZVtuXSxvPXRbbl0saShlLG4pP2wocikmJmwobykmJk9lKHIsbyk6TChlLG4sbyk7cmV0dXJuIGV9ZnVuY3Rpb24gVGUoZSx0KXtyZXR1cm4gdD9lP2UuY29uY2F0KHQpOkFycmF5LmlzQXJyYXkodCk/dDpbdF06ZX1mdW5jdGlvbiBTZShlLHQpe3ZhciBuPU9iamVjdC5jcmVhdGUoZXx8bnVsbCk7cmV0dXJuIHQ/dShuLHQpOm59ZnVuY3Rpb24gRWUoZSl7dmFyIHQ9ZS5wcm9wcztpZih0KXt2YXIgbixyLGksbz17fTtpZihBcnJheS5pc0FycmF5KHQpKWZvcihuPXQubGVuZ3RoO24tLTspcj10W25dLFwic3RyaW5nXCI9PXR5cGVvZiByJiYoaT1McihyKSxvW2ldPXt0eXBlOm51bGx9KTtlbHNlIGlmKGYodCkpZm9yKHZhciBhIGluIHQpcj10W2FdLGk9THIoYSksb1tpXT1mKHIpP3I6e3R5cGU6cn07ZS5wcm9wcz1vfX1mdW5jdGlvbiBqZShlKXt2YXIgdD1lLmRpcmVjdGl2ZXM7aWYodClmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodFtuXT17YmluZDpyLHVwZGF0ZTpyfSl9fWZ1bmN0aW9uIExlKGUsdCxuKXtmdW5jdGlvbiByKHIpe3ZhciBpPXdpW3JdfHxDaTtsW3JdPWkoZVtyXSx0W3JdLG4scil9RWUodCksamUodCk7dmFyIG89dC5leHRlbmRzO2lmKG8mJihlPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8/TGUoZSxvLm9wdGlvbnMsbik6TGUoZSxvLG4pKSx0Lm1peGlucylmb3IodmFyIGE9MCxzPXQubWl4aW5zLmxlbmd0aDthPHM7YSsrKXt2YXIgYz10Lm1peGluc1thXTtjLnByb3RvdHlwZSBpbnN0YW5jZW9mIEFlJiYoYz1jLm9wdGlvbnMpLGU9TGUoZSxjLG4pfXZhciB1LGw9e307Zm9yKHUgaW4gZSlyKHUpO2Zvcih1IGluIHQpaShlLHUpfHxyKHUpO3JldHVybiBsfWZ1bmN0aW9uIE5lKGUsdCxuLHIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgaT1lW3RdLG89aVtuXXx8aVtMcihuKV18fGlbTnIoTHIobikpXTtyZXR1cm4gb319ZnVuY3Rpb24gRGUoZSx0LG4scil7dmFyIG89dFtlXSxhPSFpKG4sZSkscz1uW2VdO2lmKFJlKG8udHlwZSkmJihhJiYhaShvLFwiZGVmYXVsdFwiKT9zPSExOlwiXCIhPT1zJiZzIT09TXIoZSl8fChzPSEwKSksdm9pZCAwPT09cyl7cz1NZShyLG8sZSk7dmFyIGM9Zmkuc2hvdWxkQ29udmVydDtmaS5zaG91bGRDb252ZXJ0PSEwLEUocyksZmkuc2hvdWxkQ29udmVydD1jfXJldHVybiBzfWZ1bmN0aW9uIE1lKGUsdCxuKXtpZihpKHQsXCJkZWZhdWx0XCIpKXt2YXIgcj10LmRlZmF1bHQ7cmV0dXJuIGwociksZSYmZS4kb3B0aW9ucy5wcm9wc0RhdGEmJnZvaWQgMD09PWUuJG9wdGlvbnMucHJvcHNEYXRhW25dJiZ2b2lkIDAhPT1lW25dP2Vbbl06XCJmdW5jdGlvblwiPT10eXBlb2YgciYmdC50eXBlIT09RnVuY3Rpb24/ci5jYWxsKGUpOnJ9fWZ1bmN0aW9uIFBlKGUpe3ZhciB0PWUmJmUudG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtyZXR1cm4gdCYmdFsxXX1mdW5jdGlvbiBSZShlKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm5cIkJvb2xlYW5cIj09PVBlKGUpO2Zvcih2YXIgdD0wLG49ZS5sZW5ndGg7dDxuO3QrKylpZihcIkJvb2xlYW5cIj09PVBlKGVbdF0pKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEllKGUpe2UudXNlPWZ1bmN0aW9uKGUpe2lmKCFlLmluc3RhbGxlZCl7dmFyIHQ9Yyhhcmd1bWVudHMsMSk7cmV0dXJuIHQudW5zaGlmdCh0aGlzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmluc3RhbGw/ZS5pbnN0YWxsLmFwcGx5KGUsdCk6ZS5hcHBseShudWxsLHQpLGUuaW5zdGFsbGVkPSEwLHRoaXN9fX1mdW5jdGlvbiBCZShlKXtlLm1peGluPWZ1bmN0aW9uKHQpe2Uub3B0aW9ucz1MZShlLm9wdGlvbnMsdCl9fWZ1bmN0aW9uIEZlKGUpe2UuY2lkPTA7dmFyIHQ9MTtlLmV4dGVuZD1mdW5jdGlvbihlKXtlPWV8fHt9O3ZhciBuPXRoaXMscj0wPT09bi5jaWQ7aWYociYmZS5fQ3RvcilyZXR1cm4gZS5fQ3Rvcjt2YXIgaT1lLm5hbWV8fG4ub3B0aW9ucy5uYW1lLG89ZnVuY3Rpb24oZSl7dGhpcy5faW5pdChlKX07cmV0dXJuIG8ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobi5wcm90b3R5cGUpLG8ucHJvdG90eXBlLmNvbnN0cnVjdG9yPW8sby5jaWQ9dCsrLG8ub3B0aW9ucz1MZShuLm9wdGlvbnMsZSksby5zdXBlcj1uLG8uZXh0ZW5kPW4uZXh0ZW5kLEJyLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZSl7b1tlXT1uW2VdfSksaSYmKG8ub3B0aW9ucy5jb21wb25lbnRzW2ldPW8pLG8uc3VwZXJPcHRpb25zPW4ub3B0aW9ucyxvLmV4dGVuZE9wdGlvbnM9ZSxyJiYoZS5fQ3Rvcj1vKSxvfX1mdW5jdGlvbiBIZShlKXtCci5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF09ZnVuY3Rpb24obixyKXtyZXR1cm4gcj8oXCJjb21wb25lbnRcIj09PXQmJmYocikmJihyLm5hbWU9ci5uYW1lfHxuLHI9ZS5leHRlbmQocikpLFwiZGlyZWN0aXZlXCI9PT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYocj17YmluZDpyLHVwZGF0ZTpyfSksdGhpcy5vcHRpb25zW3QrXCJzXCJdW25dPXIscik6dGhpcy5vcHRpb25zW3QrXCJzXCJdW25dfX0pfWZ1bmN0aW9uIFVlKGUpe3ZhciB0PXt9O3QuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEJyfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImNvbmZpZ1wiLHQpLGUudXRpbD14aSxlLnNldD1MLGUuZGVsZXRlPU4sZS5uZXh0VGljaz1HcixlLm9wdGlvbnM9T2JqZWN0LmNyZWF0ZShudWxsKSxCci5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpe2Uub3B0aW9uc1t0K1wic1wiXT1PYmplY3QuY3JlYXRlKG51bGwpfSksdShlLm9wdGlvbnMuY29tcG9uZW50cyxBaSksSWUoZSksQmUoZSksRmUoZSksSGUoZSl9ZnVuY3Rpb24gemUoZSl7Zm9yKHZhciB0PWUuZGF0YSxuPWUscj1lO3IuY2hpbGQ7KXI9ci5jaGlsZC5fdm5vZGUsci5kYXRhJiYodD1WZShyLmRhdGEsdCkpO2Zvcig7bj1uLnBhcmVudDspbi5kYXRhJiYodD1WZSh0LG4uZGF0YSkpO3JldHVybiBKZSh0KX1mdW5jdGlvbiBWZShlLHQpe3JldHVybntzdGF0aWNDbGFzczpxZShlLnN0YXRpY0NsYXNzLHQuc3RhdGljQ2xhc3MpLGNsYXNzOmUuY2xhc3M/W2UuY2xhc3MsdC5jbGFzc106dC5jbGFzc319ZnVuY3Rpb24gSmUoZSl7dmFyIHQ9ZS5jbGFzcyxuPWUuc3RhdGljQ2xhc3M7cmV0dXJuIG58fHQ/cWUobixLZSh0KSk6XCJcIn1mdW5jdGlvbiBxZShlLHQpe3JldHVybiBlP3Q/ZStcIiBcIit0OmU6dHx8XCJcIn1mdW5jdGlvbiBLZShlKXt2YXIgdD1cIlwiO2lmKCFlKXJldHVybiB0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKWVbcl0mJihuPUtlKGVbcl0pKSYmKHQrPW4rXCIgXCIpO3JldHVybiB0LnNsaWNlKDAsLTEpfWlmKGwoZSkpe2Zvcih2YXIgbyBpbiBlKWVbb10mJih0Kz1vK1wiIFwiKTtyZXR1cm4gdC5zbGljZSgwLC0xKX1yZXR1cm4gdH1mdW5jdGlvbiBXZShlKXtyZXR1cm4gRmkoZSk/XCJzdmdcIjpcIm1hdGhcIj09PWU/XCJtYXRoXCI6dm9pZCAwfWZ1bmN0aW9uIFplKGUpe2lmKCFVcilyZXR1cm4hMDtpZihVaShlKSlyZXR1cm4hMTtpZihlPWUudG9Mb3dlckNhc2UoKSxudWxsIT16aVtlXSlyZXR1cm4gemlbZV07dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtyZXR1cm4gZS5pbmRleE9mKFwiLVwiKT4tMT96aVtlXT10LmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxVbmtub3duRWxlbWVudHx8dC5jb25zdHJ1Y3Rvcj09PXdpbmRvdy5IVE1MRWxlbWVudDp6aVtlXT0vSFRNTFVua25vd25FbGVtZW50Ly50ZXN0KHQudG9TdHJpbmcoKSl9ZnVuY3Rpb24gR2UoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKSwhZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKX1yZXR1cm4gZX1mdW5jdGlvbiBZZShlLHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7cmV0dXJuXCJzZWxlY3RcIiE9PWU/bjoodC5kYXRhJiZ0LmRhdGEuYXR0cnMmJlwibXVsdGlwbGVcImluIHQuZGF0YS5hdHRycyYmbi5zZXRBdHRyaWJ1dGUoXCJtdWx0aXBsZVwiLFwibXVsdGlwbGVcIiksbil9ZnVuY3Rpb24gUWUoZSx0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE1pW2VdLHQpfWZ1bmN0aW9uIFhlKGUpe3JldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKX1mdW5jdGlvbiBldChlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChlKX1mdW5jdGlvbiB0dChlLHQsbil7ZS5pbnNlcnRCZWZvcmUodCxuKX1mdW5jdGlvbiBudChlLHQpe2UucmVtb3ZlQ2hpbGQodCl9ZnVuY3Rpb24gcnQoZSx0KXtlLmFwcGVuZENoaWxkKHQpfWZ1bmN0aW9uIGl0KGUpe3JldHVybiBlLnBhcmVudE5vZGV9ZnVuY3Rpb24gb3QoZSl7cmV0dXJuIGUubmV4dFNpYmxpbmd9ZnVuY3Rpb24gYXQoZSl7cmV0dXJuIGUudGFnTmFtZX1mdW5jdGlvbiBzdChlLHQpe2UudGV4dENvbnRlbnQ9dH1mdW5jdGlvbiBjdChlKXtyZXR1cm4gZS5jaGlsZE5vZGVzfWZ1bmN0aW9uIHV0KGUsdCxuKXtlLnNldEF0dHJpYnV0ZSh0LG4pfWZ1bmN0aW9uIGx0KGUsdCl7dmFyIG49ZS5kYXRhLnJlZjtpZihuKXt2YXIgaT1lLmNvbnRleHQsbz1lLmNoaWxkfHxlLmVsbSxhPWkuJHJlZnM7dD9BcnJheS5pc0FycmF5KGFbbl0pP3IoYVtuXSxvKTphW25dPT09byYmKGFbbl09dm9pZCAwKTplLmRhdGEucmVmSW5Gb3I/QXJyYXkuaXNBcnJheShhW25dKT9hW25dLnB1c2gobyk6YVtuXT1bb106YVtuXT1vfX1mdW5jdGlvbiBmdChlKXtyZXR1cm4gbnVsbD09ZX1mdW5jdGlvbiBkdChlKXtyZXR1cm4gbnVsbCE9ZX1mdW5jdGlvbiBwdChlLHQpe3JldHVybiBlLmtleT09PXQua2V5JiZlLnRhZz09PXQudGFnJiZlLmlzQ29tbWVudD09PXQuaXNDb21tZW50JiYhZS5kYXRhPT0hdC5kYXRhfWZ1bmN0aW9uIHZ0KGUsdCxuKXt2YXIgcixpLG89e307Zm9yKHI9dDtyPD1uOysrcilpPWVbcl0ua2V5LGR0KGkpJiYob1tpXT1yKTtyZXR1cm4gb31mdW5jdGlvbiBodChlKXtmdW5jdGlvbiB0KGUpe3JldHVybiBuZXcgdmkoQy50YWdOYW1lKGUpLnRvTG93ZXJDYXNlKCkse30sW10sdm9pZCAwLGUpfWZ1bmN0aW9uIG4oZSx0KXtmdW5jdGlvbiBuKCl7MD09PS0tbi5saXN0ZW5lcnMmJnIoZSl9cmV0dXJuIG4ubGlzdGVuZXJzPXQsbn1mdW5jdGlvbiByKGUpe3ZhciB0PUMucGFyZW50Tm9kZShlKTt0JiZDLnJlbW92ZUNoaWxkKHQsZSl9ZnVuY3Rpb24gaShlLHQsbil7dmFyIHIsaT1lLmRhdGE7aWYoZS5pc1Jvb3RJbnNlcnQ9IW4sZHQoaSkmJihkdChyPWkuaG9vaykmJmR0KHI9ci5pbml0KSYmcihlKSxkdChyPWUuY2hpbGQpKSlyZXR1cm4gdShlLHQpLGUuZWxtO3ZhciBvPWUuY2hpbGRyZW4scz1lLnRhZztyZXR1cm4gZHQocyk/KGUuZWxtPWUubnM/Qy5jcmVhdGVFbGVtZW50TlMoZS5ucyxzKTpDLmNyZWF0ZUVsZW1lbnQocyxlKSxsKGUpLGEoZSxvLHQpLGR0KGkpJiZjKGUsdCkpOmUuaXNDb21tZW50P2UuZWxtPUMuY3JlYXRlQ29tbWVudChlLnRleHQpOmUuZWxtPUMuY3JlYXRlVGV4dE5vZGUoZS50ZXh0KSxlLmVsbX1mdW5jdGlvbiBhKGUsdCxuKXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKUMuYXBwZW5kQ2hpbGQoZS5lbG0saSh0W3JdLG4sITApKTtlbHNlIG8oZS50ZXh0KSYmQy5hcHBlbmRDaGlsZChlLmVsbSxDLmNyZWF0ZVRleHROb2RlKGUudGV4dCkpfWZ1bmN0aW9uIHMoZSl7Zm9yKDtlLmNoaWxkOyllPWUuY2hpbGQuX3Zub2RlO3JldHVybiBkdChlLnRhZyl9ZnVuY3Rpb24gYyhlLHQpe2Zvcih2YXIgbj0wO248JC5jcmVhdGUubGVuZ3RoOysrbikkLmNyZWF0ZVtuXShxaSxlKTtfPWUuZGF0YS5ob29rLGR0KF8pJiYoXy5jcmVhdGUmJl8uY3JlYXRlKHFpLGUpLF8uaW5zZXJ0JiZ0LnB1c2goZSkpfWZ1bmN0aW9uIHUoZSx0KXtlLmRhdGEucGVuZGluZ0luc2VydCYmdC5wdXNoLmFwcGx5KHQsZS5kYXRhLnBlbmRpbmdJbnNlcnQpLGUuZWxtPWUuY2hpbGQuJGVsLHMoZSk/KGMoZSx0KSxsKGUpKToobHQoZSksdC5wdXNoKGUpKX1mdW5jdGlvbiBsKGUpe3ZhciB0O2R0KHQ9ZS5jb250ZXh0KSYmZHQodD10LiRvcHRpb25zLl9zY29wZUlkKSYmQy5zZXRBdHRyaWJ1dGUoZS5lbG0sdCxcIlwiKSxkdCh0PW1pKSYmdCE9PWUuY29udGV4dCYmZHQodD10LiRvcHRpb25zLl9zY29wZUlkKSYmQy5zZXRBdHRyaWJ1dGUoZS5lbG0sdCxcIlwiKX1mdW5jdGlvbiBmKGUsdCxuLHIsbyxhKXtmb3IoO3I8PW87KytyKUMuaW5zZXJ0QmVmb3JlKGUsaShuW3JdLGEpLHQpfWZ1bmN0aW9uIGQoZSl7dmFyIHQsbixyPWUuZGF0YTtpZihkdChyKSlmb3IoZHQodD1yLmhvb2spJiZkdCh0PXQuZGVzdHJveSkmJnQoZSksdD0wO3Q8JC5kZXN0cm95Lmxlbmd0aDsrK3QpJC5kZXN0cm95W3RdKGUpO2lmKGR0KHQ9ZS5jaGlsZHJlbikpZm9yKG49MDtuPGUuY2hpbGRyZW4ubGVuZ3RoOysrbilkKGUuY2hpbGRyZW5bbl0pfWZ1bmN0aW9uIHAoZSx0LG4scil7Zm9yKDtuPD1yOysrbil7dmFyIGk9dFtuXTtkdChpKSYmKGR0KGkudGFnKT8odihpKSxkKGkpKTpDLnJlbW92ZUNoaWxkKGUsaS5lbG0pKX19ZnVuY3Rpb24gdihlLHQpe2lmKHR8fGR0KGUuZGF0YSkpe3ZhciBpPSQucmVtb3ZlLmxlbmd0aCsxO2Zvcih0P3QubGlzdGVuZXJzKz1pOnQ9bihlLmVsbSxpKSxkdChfPWUuY2hpbGQpJiZkdChfPV8uX3Zub2RlKSYmZHQoXy5kYXRhKSYmdihfLHQpLF89MDtfPCQucmVtb3ZlLmxlbmd0aDsrK18pJC5yZW1vdmVbX10oZSx0KTtkdChfPWUuZGF0YS5ob29rKSYmZHQoXz1fLnJlbW92ZSk/XyhlLHQpOnQoKX1lbHNlIHIoZS5lbG0pfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtmb3IodmFyIGEscyxjLHUsbD0wLGQ9MCx2PXQubGVuZ3RoLTEsaD10WzBdLGc9dFt2XSx5PW4ubGVuZ3RoLTEsXz1uWzBdLGI9blt5XSwkPSFvO2w8PXYmJmQ8PXk7KWZ0KGgpP2g9dFsrK2xdOmZ0KGcpP2c9dFstLXZdOnB0KGgsXyk/KG0oaCxfLHIpLGg9dFsrK2xdLF89blsrK2RdKTpwdChnLGIpPyhtKGcsYixyKSxnPXRbLS12XSxiPW5bLS15XSk6cHQoaCxiKT8obShoLGIsciksJCYmQy5pbnNlcnRCZWZvcmUoZSxoLmVsbSxDLm5leHRTaWJsaW5nKGcuZWxtKSksaD10WysrbF0sYj1uWy0teV0pOnB0KGcsXyk/KG0oZyxfLHIpLCQmJkMuaW5zZXJ0QmVmb3JlKGUsZy5lbG0saC5lbG0pLGc9dFstLXZdLF89blsrK2RdKTooZnQoYSkmJihhPXZ0KHQsbCx2KSkscz1kdChfLmtleSk/YVtfLmtleV06bnVsbCxmdChzKT8oQy5pbnNlcnRCZWZvcmUoZSxpKF8sciksaC5lbG0pLF89blsrK2RdKTooYz10W3NdLGMudGFnIT09Xy50YWc/KEMuaW5zZXJ0QmVmb3JlKGUsaShfLHIpLGguZWxtKSxfPW5bKytkXSk6KG0oYyxfLHIpLHRbc109dm9pZCAwLCQmJkMuaW5zZXJ0QmVmb3JlKGUsXy5lbG0saC5lbG0pLF89blsrK2RdKSkpO2w+dj8odT1mdChuW3krMV0pP251bGw6blt5KzFdLmVsbSxmKGUsdSxuLGQseSxyKSk6ZD55JiZwKGUsdCxsLHYpfWZ1bmN0aW9uIG0oZSx0LG4scil7aWYoZSE9PXQpe2lmKHQuaXNTdGF0aWMmJmUuaXNTdGF0aWMmJnQua2V5PT09ZS5rZXkmJih0LmlzQ2xvbmVkfHx0LmlzT25jZSkpcmV0dXJuIHZvaWQodC5lbG09ZS5lbG0pO3ZhciBpLG89dC5kYXRhLGE9ZHQobyk7YSYmZHQoaT1vLmhvb2spJiZkdChpPWkucHJlcGF0Y2gpJiZpKGUsdCk7dmFyIGM9dC5lbG09ZS5lbG0sdT1lLmNoaWxkcmVuLGw9dC5jaGlsZHJlbjtpZihhJiZzKHQpKXtmb3IoaT0wO2k8JC51cGRhdGUubGVuZ3RoOysraSkkLnVwZGF0ZVtpXShlLHQpO2R0KGk9by5ob29rKSYmZHQoaT1pLnVwZGF0ZSkmJmkoZSx0KX1mdCh0LnRleHQpP2R0KHUpJiZkdChsKT91IT09bCYmaChjLHUsbCxuLHIpOmR0KGwpPyhkdChlLnRleHQpJiZDLnNldFRleHRDb250ZW50KGMsXCJcIiksZihjLG51bGwsbCwwLGwubGVuZ3RoLTEsbikpOmR0KHUpP3AoYyx1LDAsdS5sZW5ndGgtMSk6ZHQoZS50ZXh0KSYmQy5zZXRUZXh0Q29udGVudChjLFwiXCIpOmUudGV4dCE9PXQudGV4dCYmQy5zZXRUZXh0Q29udGVudChjLHQudGV4dCksYSYmZHQoaT1vLmhvb2spJiZkdChpPWkucG9zdHBhdGNoKSYmaShlLHQpfX1mdW5jdGlvbiBnKGUsdCxuKXtpZihuJiZlLnBhcmVudCllLnBhcmVudC5kYXRhLnBlbmRpbmdJbnNlcnQ9dDtlbHNlIGZvcih2YXIgcj0wO3I8dC5sZW5ndGg7KytyKXRbcl0uZGF0YS5ob29rLmluc2VydCh0W3JdKX1mdW5jdGlvbiB5KGUsdCxuKXt0LmVsbT1lO3ZhciByPXQudGFnLGk9dC5kYXRhLG89dC5jaGlsZHJlbjtpZihkdChpKSYmKGR0KF89aS5ob29rKSYmZHQoXz1fLmluaXQpJiZfKHQsITApLGR0KF89dC5jaGlsZCkpKXJldHVybiB1KHQsbiksITA7aWYoZHQocikpe2lmKGR0KG8pKXt2YXIgcz1DLmNoaWxkTm9kZXMoZSk7aWYocy5sZW5ndGgpe3ZhciBsPSEwO2lmKHMubGVuZ3RoIT09by5sZW5ndGgpbD0hMTtlbHNlIGZvcih2YXIgZj0wO2Y8by5sZW5ndGg7ZisrKWlmKCF5KHNbZl0sb1tmXSxuKSl7bD0hMTticmVha31pZighbClyZXR1cm4hMX1lbHNlIGEodCxvLG4pfWR0KGkpJiZjKHQsbil9cmV0dXJuITB9dmFyIF8sYiwkPXt9LHc9ZS5tb2R1bGVzLEM9ZS5ub2RlT3BzO2ZvcihfPTA7XzxLaS5sZW5ndGg7KytfKWZvcigkW0tpW19dXT1bXSxiPTA7Yjx3Lmxlbmd0aDsrK2Ipdm9pZCAwIT09d1tiXVtLaVtfXV0mJiRbS2lbX11dLnB1c2god1tiXVtLaVtfXV0pO3JldHVybiBmdW5jdGlvbihlLG4scixvKXtpZighbilyZXR1cm4gdm9pZChlJiZkKGUpKTt2YXIgYSxjLHU9ITEsbD1bXTtpZihlKXt2YXIgZj1kdChlLm5vZGVUeXBlKTtpZighZiYmcHQoZSxuKSltKGUsbixsLG8pO2Vsc2V7aWYoZil7aWYoMT09PWUubm9kZVR5cGUmJmUuaGFzQXR0cmlidXRlKFwic2VydmVyLXJlbmRlcmVkXCIpJiYoZS5yZW1vdmVBdHRyaWJ1dGUoXCJzZXJ2ZXItcmVuZGVyZWRcIikscj0hMCksciYmeShlLG4sbCkpcmV0dXJuIGcobixsLCEwKSxlO2U9dChlKX1pZihhPWUuZWxtLGM9Qy5wYXJlbnROb2RlKGEpLGkobixsKSxuLnBhcmVudCYmKG4ucGFyZW50LmVsbT1uLmVsbSxzKG4pKSlmb3IodmFyIHY9MDt2PCQuY3JlYXRlLmxlbmd0aDsrK3YpJC5jcmVhdGVbdl0ocWksbi5wYXJlbnQpO251bGwhPT1jPyhDLmluc2VydEJlZm9yZShjLG4uZWxtLEMubmV4dFNpYmxpbmcoYSkpLHAoYyxbZV0sMCwwKSk6ZHQoZS50YWcpJiZkKGUpfX1lbHNlIHU9ITAsaShuLGwpO3JldHVybiBnKG4sbCx1KSxuLmVsbX19ZnVuY3Rpb24gbXQoZSx0KXtpZihlLmRhdGEuZGlyZWN0aXZlc3x8dC5kYXRhLmRpcmVjdGl2ZXMpe3ZhciBuLHIsaSxvPWU9PT1xaSxhPWd0KGUuZGF0YS5kaXJlY3RpdmVzLGUuY29udGV4dCkscz1ndCh0LmRhdGEuZGlyZWN0aXZlcyx0LmNvbnRleHQpLGM9W10sdT1bXTtmb3IobiBpbiBzKXI9YVtuXSxpPXNbbl0scj8oaS5vbGRWYWx1ZT1yLnZhbHVlLF90KGksXCJ1cGRhdGVcIix0LGUpLGkuZGVmJiZpLmRlZi5jb21wb25lbnRVcGRhdGVkJiZ1LnB1c2goaSkpOihfdChpLFwiYmluZFwiLHQsZSksaS5kZWYmJmkuZGVmLmluc2VydGVkJiZjLnB1c2goaSkpO2lmKGMubGVuZ3RoKXt2YXIgbD1mdW5jdGlvbigpe2MuZm9yRWFjaChmdW5jdGlvbihuKXtfdChuLFwiaW5zZXJ0ZWRcIix0LGUpfSl9O28/Syh0LmRhdGEuaG9va3x8KHQuZGF0YS5ob29rPXt9KSxcImluc2VydFwiLGwsXCJkaXItaW5zZXJ0XCIpOmwoKX1pZih1Lmxlbmd0aCYmSyh0LmRhdGEuaG9va3x8KHQuZGF0YS5ob29rPXt9KSxcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7dS5mb3JFYWNoKGZ1bmN0aW9uKG4pe190KG4sXCJjb21wb25lbnRVcGRhdGVkXCIsdCxlKX0pfSxcImRpci1wb3N0cGF0Y2hcIiksIW8pZm9yKG4gaW4gYSlzW25dfHxfdChhW25dLFwidW5iaW5kXCIsZSl9fWZ1bmN0aW9uIGd0KGUsdCl7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZighZSlyZXR1cm4gbjt2YXIgcixpO2ZvcihyPTA7cjxlLmxlbmd0aDtyKyspaT1lW3JdLGkubW9kaWZpZXJzfHwoaS5tb2RpZmllcnM9WmkpLG5beXQoaSldPWksaS5kZWY9TmUodC4kb3B0aW9ucyxcImRpcmVjdGl2ZXNcIixpLm5hbWUsITApO3JldHVybiBufWZ1bmN0aW9uIHl0KGUpe3JldHVybiBlLnJhd05hbWV8fGUubmFtZStcIi5cIitPYmplY3Qua2V5cyhlLm1vZGlmaWVyc3x8e30pLmpvaW4oXCIuXCIpfWZ1bmN0aW9uIF90KGUsdCxuLHIpe3ZhciBpPWUuZGVmJiZlLmRlZlt0XTtpJiZpKG4uZWxtLGUsbixyKX1mdW5jdGlvbiBidChlLHQpe2lmKGUuZGF0YS5hdHRyc3x8dC5kYXRhLmF0dHJzKXt2YXIgbixyLGksbz10LmVsbSxhPWUuZGF0YS5hdHRyc3x8e30scz10LmRhdGEuYXR0cnN8fHt9O3MuX19vYl9fJiYocz10LmRhdGEuYXR0cnM9dSh7fSxzKSk7Zm9yKG4gaW4gcylyPXNbbl0saT1hW25dLGkhPT1yJiYkdChvLG4scik7Zm9yKG4gaW4gYSludWxsPT1zW25dJiYoTGkobik/by5yZW1vdmVBdHRyaWJ1dGVOUyhqaSxOaShuKSk6U2kobil8fG8ucmVtb3ZlQXR0cmlidXRlKG4pKX19ZnVuY3Rpb24gJHQoZSx0LG4pe0VpKHQpP0RpKG4pP2UucmVtb3ZlQXR0cmlidXRlKHQpOmUuc2V0QXR0cmlidXRlKHQsdCk6U2kodCk/ZS5zZXRBdHRyaWJ1dGUodCxEaShuKXx8XCJmYWxzZVwiPT09bj9cImZhbHNlXCI6XCJ0cnVlXCIpOkxpKHQpP0RpKG4pP2UucmVtb3ZlQXR0cmlidXRlTlMoamksTmkodCkpOmUuc2V0QXR0cmlidXRlTlMoamksdCxuKTpEaShuKT9lLnJlbW92ZUF0dHJpYnV0ZSh0KTplLnNldEF0dHJpYnV0ZSh0LG4pfWZ1bmN0aW9uIHd0KGUsdCl7dmFyIG49dC5lbG0scj10LmRhdGEsaT1lLmRhdGE7aWYoci5zdGF0aWNDbGFzc3x8ci5jbGFzc3x8aSYmKGkuc3RhdGljQ2xhc3N8fGkuY2xhc3MpKXt2YXIgbz16ZSh0KSxhPW4uX3RyYW5zaXRpb25DbGFzc2VzO2EmJihvPXFlKG8sS2UoYSkpKSxvIT09bi5fcHJldkNsYXNzJiYobi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLG8pLG4uX3ByZXZDbGFzcz1vKX19ZnVuY3Rpb24gQ3QoZSx0KXtpZihlLmRhdGEub258fHQuZGF0YS5vbil7dmFyIG49dC5kYXRhLm9ufHx7fSxyPWUuZGF0YS5vbnx8e30saT10LmVsbS5fdl9hZGR8fCh0LmVsbS5fdl9hZGQ9ZnVuY3Rpb24oZSxuLHIpe3QuZWxtLmFkZEV2ZW50TGlzdGVuZXIoZSxuLHIpfSksbz10LmVsbS5fdl9yZW1vdmV8fCh0LmVsbS5fdl9yZW1vdmU9ZnVuY3Rpb24oZSxuKXt0LmVsbS5yZW1vdmVFdmVudExpc3RlbmVyKGUsbil9KTtXKG4scixpLG8sdC5jb250ZXh0KX19ZnVuY3Rpb24geHQoZSx0KXtpZihlLmRhdGEuZG9tUHJvcHN8fHQuZGF0YS5kb21Qcm9wcyl7dmFyIG4scixpPXQuZWxtLG89ZS5kYXRhLmRvbVByb3BzfHx7fSxhPXQuZGF0YS5kb21Qcm9wc3x8e307YS5fX29iX18mJihhPXQuZGF0YS5kb21Qcm9wcz11KHt9LGEpKTtmb3IobiBpbiBvKW51bGw9PWFbbl0mJihpW25dPVwiXCIpO2ZvcihuIGluIGEpaWYoXCJ0ZXh0Q29udGVudFwiIT09biYmXCJpbm5lckhUTUxcIiE9PW58fCF0LmNoaWxkcmVufHwodC5jaGlsZHJlbi5sZW5ndGg9MCkscj1hW25dLFwidmFsdWVcIj09PW4pe2kuX3ZhbHVlPXI7dmFyIHM9bnVsbD09cj9cIlwiOlN0cmluZyhyKTtpLnZhbHVlPT09c3x8aS5jb21wb3Npbmd8fChpLnZhbHVlPXMpfWVsc2UgaVtuXT1yfX1mdW5jdGlvbiBrdChlLHQpe2lmKGUuZGF0YSYmZS5kYXRhLnN0eWxlfHx0LmRhdGEuc3R5bGUpe3ZhciBuLHIsaT10LmVsbSxvPWUuZGF0YS5zdHlsZXx8e30sYT10LmRhdGEuc3R5bGV8fHt9O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXJldHVybiB2b2lkKGkuc3R5bGUuY3NzVGV4dD1hKTt2YXIgcz1hLl9fb2JfXztBcnJheS5pc0FycmF5KGEpJiYoYT10LmRhdGEuc3R5bGU9ZChhKSkscyYmKGE9dC5kYXRhLnN0eWxlPXUoe30sYSkpO2ZvcihyIGluIG8pbnVsbD09YVtyXSYmbm8oaSxyLFwiXCIpO2ZvcihyIGluIGEpbj1hW3JdLG4hPT1vW3JdJiZubyhpLHIsbnVsbD09bj9cIlwiOm4pfX1mdW5jdGlvbiBBdChlLHQpe2lmKHQmJnQudHJpbSgpKWlmKGUuY2xhc3NMaXN0KXQuaW5kZXhPZihcIiBcIik+LTE/dC5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LmFkZCh0KX0pOmUuY2xhc3NMaXN0LmFkZCh0KTtlbHNle3ZhciBuPVwiIFwiK2UuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikrXCIgXCI7bi5pbmRleE9mKFwiIFwiK3QrXCIgXCIpPDAmJmUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwobit0KS50cmltKCkpfX1mdW5jdGlvbiBPdChlLHQpe2lmKHQmJnQudHJpbSgpKWlmKGUuY2xhc3NMaXN0KXQuaW5kZXhPZihcIiBcIik+LTE/dC5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xhc3NMaXN0LnJlbW92ZSh0KX0pOmUuY2xhc3NMaXN0LnJlbW92ZSh0KTtlbHNle2Zvcih2YXIgbj1cIiBcIitlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpK1wiIFwiLHI9XCIgXCIrdCtcIiBcIjtuLmluZGV4T2Yocik+PTA7KW49bi5yZXBsYWNlKHIsXCIgXCIpO2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixuLnRyaW0oKSl9fWZ1bmN0aW9uIFR0KGUpe3ZvKGZ1bmN0aW9uKCl7dm8oZSl9KX1mdW5jdGlvbiBTdChlLHQpeyhlLl90cmFuc2l0aW9uQ2xhc3Nlc3x8KGUuX3RyYW5zaXRpb25DbGFzc2VzPVtdKSkucHVzaCh0KSxBdChlLHQpfWZ1bmN0aW9uIEV0KGUsdCl7ZS5fdHJhbnNpdGlvbkNsYXNzZXMmJnIoZS5fdHJhbnNpdGlvbkNsYXNzZXMsdCksT3QoZSx0KX1mdW5jdGlvbiBqdChlLHQsbil7dmFyIHI9THQoZSx0KSxpPXIudHlwZSxvPXIudGltZW91dCxhPXIucHJvcENvdW50O2lmKCFpKXJldHVybiBuKCk7dmFyIHM9aT09PXNvP2xvOnBvLGM9MCx1PWZ1bmN0aW9uKCl7ZS5yZW1vdmVFdmVudExpc3RlbmVyKHMsbCksbigpfSxsPWZ1bmN0aW9uKHQpe3QudGFyZ2V0PT09ZSYmKytjPj1hJiZ1KCl9O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjPGEmJnUoKX0sbysxKSxlLmFkZEV2ZW50TGlzdGVuZXIocyxsKX1mdW5jdGlvbiBMdChlLHQpe3ZhciBuLHI9d2luZG93LmdldENvbXB1dGVkU3R5bGUoZSksaT1yW3VvK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxvPXJbdW8rXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGE9TnQoaSxvKSxzPXJbZm8rXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLGM9cltmbytcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksdT1OdChzLGMpLGw9MCxmPTA7dD09PXNvP2E+MCYmKG49c28sbD1hLGY9by5sZW5ndGgpOnQ9PT1jbz91PjAmJihuPWNvLGw9dSxmPWMubGVuZ3RoKToobD1NYXRoLm1heChhLHUpLG49bD4wP2E+dT9zbzpjbzpudWxsLGY9bj9uPT09c28/by5sZW5ndGg6Yy5sZW5ndGg6MCk7dmFyIGQ9bj09PXNvJiZoby50ZXN0KHJbdW8rXCJQcm9wZXJ0eVwiXSk7cmV0dXJue3R5cGU6bix0aW1lb3V0OmwscHJvcENvdW50OmYsaGFzVHJhbnNmb3JtOmR9fWZ1bmN0aW9uIE50KGUsdCl7Zm9yKDtlLmxlbmd0aDx0Lmxlbmd0aDspZT1lLmNvbmNhdChlKTtyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCx0Lm1hcChmdW5jdGlvbih0LG4pe3JldHVybiBEdCh0KStEdChlW25dKX0pKX1mdW5jdGlvbiBEdChlKXtyZXR1cm4gMWUzKk51bWJlcihlLnNsaWNlKDAsLTEpKX1mdW5jdGlvbiBNdChlKXt2YXIgdD1lLmVsbTt0Ll9sZWF2ZUNiJiYodC5fbGVhdmVDYi5jYW5jZWxsZWQ9ITAsdC5fbGVhdmVDYigpKTt2YXIgbj1SdChlLmRhdGEudHJhbnNpdGlvbik7aWYobiYmIXQuX2VudGVyQ2ImJjE9PT10Lm5vZGVUeXBlKXt2YXIgcj1uLmNzcyxpPW4udHlwZSxvPW4uZW50ZXJDbGFzcyxhPW4uZW50ZXJBY3RpdmVDbGFzcyxzPW4uYXBwZWFyQ2xhc3MsYz1uLmFwcGVhckFjdGl2ZUNsYXNzLHU9bi5iZWZvcmVFbnRlcixsPW4uZW50ZXIsZj1uLmFmdGVyRW50ZXIsZD1uLmVudGVyQ2FuY2VsbGVkLHA9bi5iZWZvcmVBcHBlYXIsdj1uLmFwcGVhcixoPW4uYWZ0ZXJBcHBlYXIsbT1uLmFwcGVhckNhbmNlbGxlZCxnPW1pLiR2bm9kZSx5PWcmJmcucGFyZW50P2cucGFyZW50LmNvbnRleHQ6bWksXz0heS5faXNNb3VudGVkfHwhZS5pc1Jvb3RJbnNlcnQ7aWYoIV98fHZ8fFwiXCI9PT12KXt2YXIgYj1fP3M6bywkPV8/YzphLHc9Xz9wfHx1OnUsQz1fJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2P3Y6bCx4PV8/aHx8ZjpmLGs9Xz9tfHxkOmQsQT1yIT09ITEmJiFKcixPPUMmJihDLl9sZW5ndGh8fEMubGVuZ3RoKT4xLFQ9dC5fZW50ZXJDYj1JdChmdW5jdGlvbigpe0EmJkV0KHQsJCksVC5jYW5jZWxsZWQ/KEEmJkV0KHQsYiksayYmayh0KSk6eCYmeCh0KSx0Ll9lbnRlckNiPW51bGx9KTtlLmRhdGEuc2hvd3x8SyhlLmRhdGEuaG9va3x8KGUuZGF0YS5ob29rPXt9KSxcImluc2VydFwiLGZ1bmN0aW9uKCl7dmFyIG49dC5wYXJlbnROb2RlLHI9biYmbi5fcGVuZGluZyYmbi5fcGVuZGluZ1tlLmtleV07ciYmci50YWc9PT1lLnRhZyYmci5lbG0uX2xlYXZlQ2ImJnIuZWxtLl9sZWF2ZUNiKCksQyYmQyh0LFQpfSxcInRyYW5zaXRpb24taW5zZXJ0XCIpLHcmJncodCksQSYmKFN0KHQsYiksU3QodCwkKSxUdChmdW5jdGlvbigpe0V0KHQsYiksVC5jYW5jZWxsZWR8fE98fGp0KHQsaSxUKX0pKSxlLmRhdGEuc2hvdyYmQyYmQyh0LFQpLEF8fE98fFQoKX19fWZ1bmN0aW9uIFB0KGUsdCl7ZnVuY3Rpb24gbigpe20uY2FuY2VsbGVkfHwoZS5kYXRhLnNob3d8fCgoci5wYXJlbnROb2RlLl9wZW5kaW5nfHwoci5wYXJlbnROb2RlLl9wZW5kaW5nPXt9KSlbZS5rZXldPWUpLHUmJnUociksdiYmKFN0KHIscyksU3QocixjKSxUdChmdW5jdGlvbigpe0V0KHIscyksbS5jYW5jZWxsZWR8fGh8fGp0KHIsYSxtKX0pKSxsJiZsKHIsbSksdnx8aHx8bSgpKX12YXIgcj1lLmVsbTtyLl9lbnRlckNiJiYoci5fZW50ZXJDYi5jYW5jZWxsZWQ9ITAsci5fZW50ZXJDYigpKTt2YXIgaT1SdChlLmRhdGEudHJhbnNpdGlvbik7aWYoIWkpcmV0dXJuIHQoKTtpZighci5fbGVhdmVDYiYmMT09PXIubm9kZVR5cGUpe3ZhciBvPWkuY3NzLGE9aS50eXBlLHM9aS5sZWF2ZUNsYXNzLGM9aS5sZWF2ZUFjdGl2ZUNsYXNzLHU9aS5iZWZvcmVMZWF2ZSxsPWkubGVhdmUsZj1pLmFmdGVyTGVhdmUsZD1pLmxlYXZlQ2FuY2VsbGVkLHA9aS5kZWxheUxlYXZlLHY9byE9PSExJiYhSnIsaD1sJiYobC5fbGVuZ3RofHxsLmxlbmd0aCk+MSxtPXIuX2xlYXZlQ2I9SXQoZnVuY3Rpb24oKXtyLnBhcmVudE5vZGUmJnIucGFyZW50Tm9kZS5fcGVuZGluZyYmKHIucGFyZW50Tm9kZS5fcGVuZGluZ1tlLmtleV09bnVsbCksdiYmRXQocixjKSxtLmNhbmNlbGxlZD8odiYmRXQocixzKSxkJiZkKHIpKToodCgpLGYmJmYocikpLHIuX2xlYXZlQ2I9bnVsbH0pO3A/cChuKTpuKCl9fWZ1bmN0aW9uIFJ0KGUpe2lmKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXt2YXIgdD17fTtyZXR1cm4gZS5jc3MhPT0hMSYmdSh0LG1vKGUubmFtZXx8XCJ2XCIpKSx1KHQsZSksdH1yZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9tbyhlKTp2b2lkIDB9fWZ1bmN0aW9uIEl0KGUpe3ZhciB0PSExO3JldHVybiBmdW5jdGlvbigpe3R8fCh0PSEwLGUoKSl9fWZ1bmN0aW9uIEJ0KGUsdCxuKXt2YXIgcj10LnZhbHVlLGk9ZS5tdWx0aXBsZTtpZighaXx8QXJyYXkuaXNBcnJheShyKSl7Zm9yKHZhciBvLGEscz0wLGM9ZS5vcHRpb25zLmxlbmd0aDtzPGM7cysrKWlmKGE9ZS5vcHRpb25zW3NdLGkpbz1tKHIsSHQoYSkpPi0xLGEuc2VsZWN0ZWQhPT1vJiYoYS5zZWxlY3RlZD1vKTtlbHNlIGlmKGgoSHQoYSkscikpcmV0dXJuIHZvaWQoZS5zZWxlY3RlZEluZGV4IT09cyYmKGUuc2VsZWN0ZWRJbmRleD1zKSk7aXx8KGUuc2VsZWN0ZWRJbmRleD0tMSl9fWZ1bmN0aW9uIEZ0KGUsdCl7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7bisrKWlmKGgoSHQodFtuXSksZSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gSHQoZSl7cmV0dXJuXCJfdmFsdWVcImluIGU/ZS5fdmFsdWU6ZS52YWx1ZX1mdW5jdGlvbiBVdChlKXtlLnRhcmdldC5jb21wb3Npbmc9ITB9ZnVuY3Rpb24genQoZSl7ZS50YXJnZXQuY29tcG9zaW5nPSExLFZ0KGUudGFyZ2V0LFwiaW5wdXRcIil9ZnVuY3Rpb24gVnQoZSx0KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7bi5pbml0RXZlbnQodCwhMCwhMCksZS5kaXNwYXRjaEV2ZW50KG4pfWZ1bmN0aW9uIEp0KGUpe3JldHVybiFlLmNoaWxkfHxlLmRhdGEmJmUuZGF0YS50cmFuc2l0aW9uP2U6SnQoZS5jaGlsZC5fdm5vZGUpfWZ1bmN0aW9uIHF0KGUpe3ZhciB0PWUmJmUuY29tcG9uZW50T3B0aW9ucztyZXR1cm4gdCYmdC5DdG9yLm9wdGlvbnMuYWJzdHJhY3Q/cXQoZWUodC5jaGlsZHJlbikpOmV9ZnVuY3Rpb24gS3QoZSl7dmFyIHQ9e30sbj1lLiRvcHRpb25zO2Zvcih2YXIgciBpbiBuLnByb3BzRGF0YSl0W3JdPWVbcl07dmFyIGk9bi5fcGFyZW50TGlzdGVuZXJzO1xuZm9yKHZhciBvIGluIGkpdFtMcihvKV09aVtvXS5mbjtyZXR1cm4gdH1mdW5jdGlvbiBXdChlLHQpe3JldHVybi9cXGQta2VlcC1hbGl2ZSQvLnRlc3QodC50YWcpP2UoXCJrZWVwLWFsaXZlXCIpOm51bGx9ZnVuY3Rpb24gWnQoZSl7Zm9yKDtlPWUucGFyZW50OylpZihlLmRhdGEudHJhbnNpdGlvbilyZXR1cm4hMH1mdW5jdGlvbiBHdChlKXtlLmVsbS5fbW92ZUNiJiZlLmVsbS5fbW92ZUNiKCksZS5lbG0uX2VudGVyQ2ImJmUuZWxtLl9lbnRlckNiKCl9ZnVuY3Rpb24gWXQoZSl7ZS5kYXRhLm5ld1Bvcz1lLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX1mdW5jdGlvbiBRdChlKXt2YXIgdD1lLmRhdGEucG9zLG49ZS5kYXRhLm5ld1BvcyxyPXQubGVmdC1uLmxlZnQsaT10LnRvcC1uLnRvcDtpZihyfHxpKXtlLmRhdGEubW92ZWQ9ITA7dmFyIG89ZS5lbG0uc3R5bGU7by50cmFuc2Zvcm09by5XZWJraXRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoXCIrcitcInB4LFwiK2krXCJweClcIixvLnRyYW5zaXRpb25EdXJhdGlvbj1cIjBzXCJ9fWZ1bmN0aW9uIFh0KGUsdCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gbi5pbm5lckhUTUw9JzxkaXYgYT1cIicrZSsnXCI+JyxuLmlubmVySFRNTC5pbmRleE9mKHQpPjB9ZnVuY3Rpb24gZW4oZSl7cmV0dXJuIEVvLmlubmVySFRNTD1lLEVvLnRleHRDb250ZW50fWZ1bmN0aW9uIHRuKGUsdCl7cmV0dXJuIHQmJihlPWUucmVwbGFjZShiYSxcIlxcblwiKSksZS5yZXBsYWNlKHlhLFwiPFwiKS5yZXBsYWNlKF9hLFwiPlwiKS5yZXBsYWNlKCRhLFwiJlwiKS5yZXBsYWNlKHdhLCdcIicpfWZ1bmN0aW9uIG5uKGUsdCl7ZnVuY3Rpb24gbih0KXtmKz10LGU9ZS5zdWJzdHJpbmcodCl9ZnVuY3Rpb24gcigpe3ZhciB0PWUubWF0Y2goUm8pO2lmKHQpe3ZhciByPXt0YWdOYW1lOnRbMV0sYXR0cnM6W10sc3RhcnQ6Zn07bih0WzBdLmxlbmd0aCk7Zm9yKHZhciBpLG87IShpPWUubWF0Y2goSW8pKSYmKG89ZS5tYXRjaChEbykpOyluKG9bMF0ubGVuZ3RoKSxyLmF0dHJzLnB1c2gobyk7aWYoaSlyZXR1cm4gci51bmFyeVNsYXNoPWlbMV0sbihpWzBdLmxlbmd0aCksci5lbmQ9ZixyfX1mdW5jdGlvbiBpKGUpe3ZhciBuPWUudGFnTmFtZSxyPWUudW5hcnlTbGFzaDt1JiYoXCJwXCI9PT1zJiZCaShuKSYmbyhcIlwiLHMpLElpKG4pJiZzPT09biYmbyhcIlwiLG4pKTtmb3IodmFyIGk9bChuKXx8XCJodG1sXCI9PT1uJiZcImhlYWRcIj09PXN8fCEhcixhPWUuYXR0cnMubGVuZ3RoLGY9bmV3IEFycmF5KGEpLGQ9MDtkPGE7ZCsrKXt2YXIgcD1lLmF0dHJzW2RdO3pvJiZwWzBdLmluZGV4T2YoJ1wiXCInKT09PS0xJiYoXCJcIj09PXBbM10mJmRlbGV0ZSBwWzNdLFwiXCI9PT1wWzRdJiZkZWxldGUgcFs0XSxcIlwiPT09cFs1XSYmZGVsZXRlIHBbNV0pO3ZhciB2PXBbM118fHBbNF18fHBbNV18fFwiXCI7ZltkXT17bmFtZTpwWzFdLHZhbHVlOnRuKHYsdC5zaG91bGREZWNvZGVOZXdsaW5lcyl9fWl8fChjLnB1c2goe3RhZzpuLGF0dHJzOmZ9KSxzPW4scj1cIlwiKSx0LnN0YXJ0JiZ0LnN0YXJ0KG4sZixpLGUuc3RhcnQsZS5lbmQpfWZ1bmN0aW9uIG8oZSxuLHIsaSl7dmFyIG87aWYobnVsbD09ciYmKHI9ZiksbnVsbD09aSYmKGk9Ziksbil7dmFyIGE9bi50b0xvd2VyQ2FzZSgpO2ZvcihvPWMubGVuZ3RoLTE7bz49MCYmY1tvXS50YWcudG9Mb3dlckNhc2UoKSE9PWE7by0tKTt9ZWxzZSBvPTA7aWYobz49MCl7Zm9yKHZhciB1PWMubGVuZ3RoLTE7dT49bzt1LS0pdC5lbmQmJnQuZW5kKGNbdV0udGFnLHIsaSk7Yy5sZW5ndGg9byxzPW8mJmNbby0xXS50YWd9ZWxzZVwiYnJcIj09PW4udG9Mb3dlckNhc2UoKT90LnN0YXJ0JiZ0LnN0YXJ0KG4sW10sITAscixpKTpcInBcIj09PW4udG9Mb3dlckNhc2UoKSYmKHQuc3RhcnQmJnQuc3RhcnQobixbXSwhMSxyLGkpLHQuZW5kJiZ0LmVuZChuLHIsaSkpfWZvcih2YXIgYSxzLGM9W10sdT10LmV4cGVjdEhUTUwsbD10LmlzVW5hcnlUYWd8fElyLGY9MDtlOyl7aWYoYT1lLHMmJm1hKHMsdC5zZmMsYykpe3ZhciBkPXMudG9Mb3dlckNhc2UoKSxwPWdhW2RdfHwoZ2FbZF09bmV3IFJlZ0V4cChcIihbXFxcXHNcXFxcU10qPykoPC9cIitkK1wiW14+XSo+KVwiLFwiaVwiKSksdj0wLGg9ZS5yZXBsYWNlKHAsZnVuY3Rpb24oZSxuLHIpe3JldHVybiB2PXIubGVuZ3RoLFwic2NyaXB0XCIhPT1kJiZcInN0eWxlXCIhPT1kJiZcIm5vc2NyaXB0XCIhPT1kJiYobj1uLnJlcGxhY2UoLzwhLS0oW1xcc1xcU10qPyktLT4vZyxcIiQxXCIpLnJlcGxhY2UoLzwhXFxbQ0RBVEFcXFsoW1xcc1xcU10qPyldXT4vZyxcIiQxXCIpKSx0LmNoYXJzJiZ0LmNoYXJzKG4pLFwiXCJ9KTtmKz1lLmxlbmd0aC1oLmxlbmd0aCxlPWgsbyhcIjwvXCIrZCtcIj5cIixkLGYtdixmKX1lbHNle3ZhciBtPWUuaW5kZXhPZihcIjxcIik7aWYoMD09PW0pe2lmKEhvLnRlc3QoZSkpe3ZhciBnPWUuaW5kZXhPZihcIi0tPlwiKTtpZihnPj0wKXtuKGcrMyk7Y29udGludWV9fWlmKFVvLnRlc3QoZSkpe3ZhciB5PWUuaW5kZXhPZihcIl0+XCIpO2lmKHk+PTApe24oeSsyKTtjb250aW51ZX19dmFyIF89ZS5tYXRjaChGbyk7aWYoXyl7bihfWzBdLmxlbmd0aCk7Y29udGludWV9dmFyIGI9ZS5tYXRjaChCbyk7aWYoYil7dmFyICQ9ZjtuKGJbMF0ubGVuZ3RoKSxvKGJbMF0sYlsxXSwkLGYpO2NvbnRpbnVlfXZhciB3PXIoKTtpZih3KXtpKHcpO2NvbnRpbnVlfX12YXIgQz12b2lkIDAseD12b2lkIDAsaz12b2lkIDA7aWYobT4wKXtmb3IoeD1lLnNsaWNlKG0pOyEoQm8udGVzdCh4KXx8Um8udGVzdCh4KXx8SG8udGVzdCh4KXx8VW8udGVzdCh4KXx8KGs9eC5pbmRleE9mKFwiPFwiLDEpLGs8MCkpOyltKz1rLHg9ZS5zbGljZShtKTtDPWUuc3Vic3RyaW5nKDAsbSksbihtKX1tPDAmJihDPWUsZT1cIlwiKSx0LmNoYXJzJiZDJiZ0LmNoYXJzKEMpfWlmKGU9PT1hJiZ0LmNoYXJzKXt0LmNoYXJzKGUpO2JyZWFrfX1vKCl9ZnVuY3Rpb24gcm4oZSl7ZnVuY3Rpb24gdCgpeyhhfHwoYT1bXSkpLnB1c2goZS5zbGljZShkLGkpLnRyaW0oKSksZD1pKzF9dmFyIG4scixpLG8sYSxzPSExLGM9ITEsdT0wLGw9MCxmPTAsZD0wO2ZvcihpPTA7aTxlLmxlbmd0aDtpKyspaWYocj1uLG49ZS5jaGFyQ29kZUF0KGkpLHMpMzk9PT1uJiY5MiE9PXImJihzPSFzKTtlbHNlIGlmKGMpMzQ9PT1uJiY5MiE9PXImJihjPSFjKTtlbHNlIGlmKDEyNCE9PW58fDEyND09PWUuY2hhckNvZGVBdChpKzEpfHwxMjQ9PT1lLmNoYXJDb2RlQXQoaS0xKXx8dXx8bHx8Zilzd2l0Y2gobil7Y2FzZSAzNDpjPSEwO2JyZWFrO2Nhc2UgMzk6cz0hMDticmVhaztjYXNlIDQwOmYrKzticmVhaztjYXNlIDQxOmYtLTticmVhaztjYXNlIDkxOmwrKzticmVhaztjYXNlIDkzOmwtLTticmVhaztjYXNlIDEyMzp1Kys7YnJlYWs7Y2FzZSAxMjU6dS0tfWVsc2Ugdm9pZCAwPT09bz8oZD1pKzEsbz1lLnNsaWNlKDAsaSkudHJpbSgpKTp0KCk7aWYodm9pZCAwPT09bz9vPWUuc2xpY2UoMCxpKS50cmltKCk6MCE9PWQmJnQoKSxhKWZvcihpPTA7aTxhLmxlbmd0aDtpKyspbz1vbihvLGFbaV0pO3JldHVybiBvfWZ1bmN0aW9uIG9uKGUsdCl7dmFyIG49dC5pbmRleE9mKFwiKFwiKTtpZihuPDApcmV0dXJuJ19mKFwiJyt0KydcIikoJytlK1wiKVwiO3ZhciByPXQuc2xpY2UoMCxuKSxpPXQuc2xpY2UobisxKTtyZXR1cm4nX2YoXCInK3IrJ1wiKSgnK2UrXCIsXCIraX1mdW5jdGlvbiBhbihlLHQpe3ZhciBuPXQ/a2EodCk6Q2E7aWYobi50ZXN0KGUpKXtmb3IodmFyIHIsaSxvPVtdLGE9bi5sYXN0SW5kZXg9MDtyPW4uZXhlYyhlKTspe2k9ci5pbmRleCxpPmEmJm8ucHVzaChKU09OLnN0cmluZ2lmeShlLnNsaWNlKGEsaSkpKTt2YXIgcz1ybihyWzFdLnRyaW0oKSk7by5wdXNoKFwiX3MoXCIrcytcIilcIiksYT1pK3JbMF0ubGVuZ3RofXJldHVybiBhPGUubGVuZ3RoJiZvLnB1c2goSlNPTi5zdHJpbmdpZnkoZS5zbGljZShhKSkpLG8uam9pbihcIitcIil9fWZ1bmN0aW9uIHNuKGUpe2NvbnNvbGUuZXJyb3IoXCJbVnVlIHBhcnNlcl06IFwiK2UpfWZ1bmN0aW9uIGNuKGUsdCl7cmV0dXJuIGU/ZS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGVbdF19KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KTpbXX1mdW5jdGlvbiB1bihlLHQsbil7KGUucHJvcHN8fChlLnByb3BzPVtdKSkucHVzaCh7bmFtZTp0LHZhbHVlOm59KX1mdW5jdGlvbiBsbihlLHQsbil7KGUuYXR0cnN8fChlLmF0dHJzPVtdKSkucHVzaCh7bmFtZTp0LHZhbHVlOm59KX1mdW5jdGlvbiBmbihlLHQsbixyLGksbyl7KGUuZGlyZWN0aXZlc3x8KGUuZGlyZWN0aXZlcz1bXSkpLnB1c2goe25hbWU6dCxyYXdOYW1lOm4sdmFsdWU6cixhcmc6aSxtb2RpZmllcnM6b30pfWZ1bmN0aW9uIGRuKGUsdCxuLHIsaSl7ciYmci5jYXB0dXJlJiYoZGVsZXRlIHIuY2FwdHVyZSx0PVwiIVwiK3QpO3ZhciBvO3ImJnIubmF0aXZlPyhkZWxldGUgci5uYXRpdmUsbz1lLm5hdGl2ZUV2ZW50c3x8KGUubmF0aXZlRXZlbnRzPXt9KSk6bz1lLmV2ZW50c3x8KGUuZXZlbnRzPXt9KTt2YXIgYT17dmFsdWU6bixtb2RpZmllcnM6cn0scz1vW3RdO0FycmF5LmlzQXJyYXkocyk/aT9zLnVuc2hpZnQoYSk6cy5wdXNoKGEpOnM/b1t0XT1pP1thLHNdOltzLGFdOm9bdF09YX1mdW5jdGlvbiBwbihlLHQsbil7dmFyIHI9dm4oZSxcIjpcIit0KXx8dm4oZSxcInYtYmluZDpcIit0KTtpZihudWxsIT1yKXJldHVybiByO2lmKG4hPT0hMSl7dmFyIGk9dm4oZSx0KTtpZihudWxsIT1pKXJldHVybiBKU09OLnN0cmluZ2lmeShpKX19ZnVuY3Rpb24gdm4oZSx0KXt2YXIgbjtpZihudWxsIT0obj1lLmF0dHJzTWFwW3RdKSlmb3IodmFyIHI9ZS5hdHRyc0xpc3QsaT0wLG89ci5sZW5ndGg7aTxvO2krKylpZihyW2ldLm5hbWU9PT10KXtyLnNwbGljZShpLDEpO2JyZWFrfXJldHVybiBufWZ1bmN0aW9uIGhuKGUsdCl7Vm89dC53YXJufHxzbixKbz10LmdldFRhZ05hbWVzcGFjZXx8SXIscW89dC5tdXN0VXNlUHJvcHx8SXIsS289dC5pc1ByZVRhZ3x8SXIsV289Y24odC5tb2R1bGVzLFwicHJlVHJhbnNmb3JtTm9kZVwiKSxabz1jbih0Lm1vZHVsZXMsXCJ0cmFuc2Zvcm1Ob2RlXCIpLEdvPWNuKHQubW9kdWxlcyxcInBvc3RUcmFuc2Zvcm1Ob2RlXCIpLFlvPXQuZGVsaW1pdGVyczt2YXIgbixyLGk9W10sbz10LnByZXNlcnZlV2hpdGVzcGFjZSE9PSExLGE9ITEscz0hMTtyZXR1cm4gbm4oZSx7ZXhwZWN0SFRNTDp0LmV4cGVjdEhUTUwsaXNVbmFyeVRhZzp0LmlzVW5hcnlUYWcsc2hvdWxkRGVjb2RlTmV3bGluZXM6dC5zaG91bGREZWNvZGVOZXdsaW5lcyxzdGFydDpmdW5jdGlvbihlLG8sYyl7ZnVuY3Rpb24gdShlKXt9dmFyIGw9ciYmci5uc3x8Sm8oZSk7dC5pc0lFJiZcInN2Z1wiPT09bCYmKG89TG4obykpO3ZhciBmPXt0eXBlOjEsdGFnOmUsYXR0cnNMaXN0Om8sYXR0cnNNYXA6U24obyx0LmlzSUUpLHBhcmVudDpyLGNoaWxkcmVuOltdfTtsJiYoZi5ucz1sKSxqbihmKSYmKGYuZm9yYmlkZGVuPSEwKTtmb3IodmFyIGQ9MDtkPFdvLmxlbmd0aDtkKyspV29bZF0oZix0KTtpZihhfHwobW4oZiksZi5wcmUmJihhPSEwKSksS28oZi50YWcpJiYocz0hMCksYSlnbihmKTtlbHNle2JuKGYpLCRuKGYpLENuKGYpLHluKGYpLGYucGxhaW49IWYua2V5JiYhby5sZW5ndGgsX24oZikseG4oZiksa24oZik7Zm9yKHZhciBwPTA7cDxaby5sZW5ndGg7cCsrKVpvW3BdKGYsdCk7QW4oZil9bj9pLmxlbmd0aHx8bi5pZiYmZi5lbHNlJiYodShmKSxuLmVsc2VCbG9jaz1mKToobj1mLHUobikpLHImJiFmLmZvcmJpZGRlbiYmKGYuZWxzZT93bihmLHIpOihyLmNoaWxkcmVuLnB1c2goZiksZi5wYXJlbnQ9cikpLGN8fChyPWYsaS5wdXNoKGYpKTtmb3IodmFyIHY9MDt2PEdvLmxlbmd0aDt2KyspR29bdl0oZix0KX0sZW5kOmZ1bmN0aW9uKCl7dmFyIGU9aVtpLmxlbmd0aC0xXSx0PWUuY2hpbGRyZW5bZS5jaGlsZHJlbi5sZW5ndGgtMV07dCYmMz09PXQudHlwZSYmXCIgXCI9PT10LnRleHQmJmUuY2hpbGRyZW4ucG9wKCksaS5sZW5ndGgtPTEscj1pW2kubGVuZ3RoLTFdLGUucHJlJiYoYT0hMSksS28oZS50YWcpJiYocz0hMSl9LGNoYXJzOmZ1bmN0aW9uKGUpe2lmKHImJihlPXN8fGUudHJpbSgpP0RhKGUpOm8mJnIuY2hpbGRyZW4ubGVuZ3RoP1wiIFwiOlwiXCIpKXt2YXIgdDshYSYmXCIgXCIhPT1lJiYodD1hbihlLFlvKSk/ci5jaGlsZHJlbi5wdXNoKHt0eXBlOjIsZXhwcmVzc2lvbjp0LHRleHQ6ZX0pOihlPWUucmVwbGFjZShOYSxcIlwiKSxyLmNoaWxkcmVuLnB1c2goe3R5cGU6Myx0ZXh0OmV9KSl9fX0pLG59ZnVuY3Rpb24gbW4oZSl7bnVsbCE9dm4oZSxcInYtcHJlXCIpJiYoZS5wcmU9ITApfWZ1bmN0aW9uIGduKGUpe3ZhciB0PWUuYXR0cnNMaXN0Lmxlbmd0aDtpZih0KWZvcih2YXIgbj1lLmF0dHJzPW5ldyBBcnJheSh0KSxyPTA7cjx0O3IrKyluW3JdPXtuYW1lOmUuYXR0cnNMaXN0W3JdLm5hbWUsdmFsdWU6SlNPTi5zdHJpbmdpZnkoZS5hdHRyc0xpc3Rbcl0udmFsdWUpfTtlbHNlIGUucHJlfHwoZS5wbGFpbj0hMCl9ZnVuY3Rpb24geW4oZSl7dmFyIHQ9cG4oZSxcImtleVwiKTt0JiYoZS5rZXk9dCl9ZnVuY3Rpb24gX24oZSl7dmFyIHQ9cG4oZSxcInJlZlwiKTt0JiYoZS5yZWY9dCxlLnJlZkluRm9yPU9uKGUpKX1mdW5jdGlvbiBibihlKXt2YXIgdDtpZih0PXZuKGUsXCJ2LWZvclwiKSl7dmFyIG49dC5tYXRjaChPYSk7aWYoIW4pcmV0dXJuO2UuZm9yPW5bMl0udHJpbSgpO3ZhciByPW5bMV0udHJpbSgpLGk9ci5tYXRjaChUYSk7aT8oZS5hbGlhcz1pWzFdLnRyaW0oKSxlLml0ZXJhdG9yMT1pWzJdLnRyaW0oKSxpWzNdJiYoZS5pdGVyYXRvcjI9aVszXS50cmltKCkpKTplLmFsaWFzPXJ9fWZ1bmN0aW9uICRuKGUpe3ZhciB0PXZuKGUsXCJ2LWlmXCIpO3QmJihlLmlmPXQpLG51bGwhPXZuKGUsXCJ2LWVsc2VcIikmJihlLmVsc2U9ITApfWZ1bmN0aW9uIHduKGUsdCl7dmFyIG49RW4odC5jaGlsZHJlbik7biYmbi5pZiYmKG4uZWxzZUJsb2NrPWUpfWZ1bmN0aW9uIENuKGUpe3ZhciB0PXZuKGUsXCJ2LW9uY2VcIik7bnVsbCE9dCYmKGUub25jZT0hMCl9ZnVuY3Rpb24geG4oZSl7aWYoXCJzbG90XCI9PT1lLnRhZyllLnNsb3ROYW1lPXBuKGUsXCJuYW1lXCIpO2Vsc2V7dmFyIHQ9cG4oZSxcInNsb3RcIik7dCYmKGUuc2xvdFRhcmdldD10KX19ZnVuY3Rpb24ga24oZSl7dmFyIHQ7KHQ9cG4oZSxcImlzXCIpKSYmKGUuY29tcG9uZW50PXQpLG51bGwhPXZuKGUsXCJpbmxpbmUtdGVtcGxhdGVcIikmJihlLmlubGluZVRlbXBsYXRlPSEwKX1mdW5jdGlvbiBBbihlKXt2YXIgdCxuLHIsaSxvLGEscyxjLHU9ZS5hdHRyc0xpc3Q7Zm9yKHQ9MCxuPXUubGVuZ3RoO3Q8bjt0KyspaWYocj1pPXVbdF0ubmFtZSxvPXVbdF0udmFsdWUsQWEudGVzdChyKSlpZihlLmhhc0JpbmRpbmdzPSEwLHM9VG4ocikscyYmKHI9ci5yZXBsYWNlKExhLFwiXCIpKSxTYS50ZXN0KHIpKXI9ci5yZXBsYWNlKFNhLFwiXCIpLHMmJnMucHJvcCYmKGM9ITAscj1McihyKSxcImlubmVySHRtbFwiPT09ciYmKHI9XCJpbm5lckhUTUxcIikpLGN8fHFvKHIpP3VuKGUscixvKTpsbihlLHIsbyk7ZWxzZSBpZihFYS50ZXN0KHIpKXI9ci5yZXBsYWNlKEVhLFwiXCIpLGRuKGUscixvLHMpO2Vsc2V7cj1yLnJlcGxhY2UoQWEsXCJcIik7dmFyIGw9ci5tYXRjaChqYSk7bCYmKGE9bFsxXSkmJihyPXIuc2xpY2UoMCwtKGEubGVuZ3RoKzEpKSksZm4oZSxyLGksbyxhLHMpfWVsc2UgbG4oZSxyLEpTT04uc3RyaW5naWZ5KG8pKX1mdW5jdGlvbiBPbihlKXtmb3IodmFyIHQ9ZTt0Oyl7aWYodm9pZCAwIT09dC5mb3IpcmV0dXJuITA7dD10LnBhcmVudH1yZXR1cm4hMX1mdW5jdGlvbiBUbihlKXt2YXIgdD1lLm1hdGNoKExhKTtpZih0KXt2YXIgbj17fTtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe25bZS5zbGljZSgxKV09ITB9KSxufX1mdW5jdGlvbiBTbihlLHQpe2Zvcih2YXIgbj17fSxyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW5bZVtyXS5uYW1lXT1lW3JdLnZhbHVlO3JldHVybiBufWZ1bmN0aW9uIEVuKGUpe2Zvcih2YXIgdD1lLmxlbmd0aDt0LS07KWlmKGVbdF0udGFnKXJldHVybiBlW3RdfWZ1bmN0aW9uIGpuKGUpe3JldHVyblwic3R5bGVcIj09PWUudGFnfHxcInNjcmlwdFwiPT09ZS50YWcmJighZS5hdHRyc01hcC50eXBlfHxcInRleHQvamF2YXNjcmlwdFwiPT09ZS5hdHRyc01hcC50eXBlKX1mdW5jdGlvbiBMbihlKXtmb3IodmFyIHQ9W10sbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgcj1lW25dO01hLnRlc3Qoci5uYW1lKXx8KHIubmFtZT1yLm5hbWUucmVwbGFjZShQYSxcIlwiKSx0LnB1c2gocikpfXJldHVybiB0fWZ1bmN0aW9uIE5uKGUsdCl7ZSYmKFFvPVJhKHQuc3RhdGljS2V5c3x8XCJcIiksWG89dC5pc1Jlc2VydmVkVGFnfHxmdW5jdGlvbigpe3JldHVybiExfSxNbihlKSxQbihlLCExKSl9ZnVuY3Rpb24gRG4oZSl7cmV0dXJuIG4oXCJ0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzXCIrKGU/XCIsXCIrZTpcIlwiKSl9ZnVuY3Rpb24gTW4oZSl7aWYoZS5zdGF0aWM9Um4oZSksMT09PWUudHlwZSlmb3IodmFyIHQ9MCxuPWUuY2hpbGRyZW4ubGVuZ3RoO3Q8bjt0Kyspe3ZhciByPWUuY2hpbGRyZW5bdF07TW4ociksci5zdGF0aWN8fChlLnN0YXRpYz0hMSl9fWZ1bmN0aW9uIFBuKGUsdCl7aWYoMT09PWUudHlwZSl7aWYoKGUuc3RhdGljfHxlLm9uY2UpJiYoZS5zdGF0aWNJbkZvcj10KSxlLnN0YXRpYylyZXR1cm4gdm9pZChlLnN0YXRpY1Jvb3Q9ITApO2lmKGUuY2hpbGRyZW4pZm9yKHZhciBuPTAscj1lLmNoaWxkcmVuLmxlbmd0aDtuPHI7bisrKVBuKGUuY2hpbGRyZW5bbl0sdHx8ISFlLmZvcil9fWZ1bmN0aW9uIFJuKGUpe3JldHVybiAyIT09ZS50eXBlJiYoMz09PWUudHlwZXx8ISghZS5wcmUmJihlLmhhc0JpbmRpbmdzfHxlLmlmfHxlLmZvcnx8U3IoZS50YWcpfHwhWG8oZS50YWcpfHxJbihlKXx8IU9iamVjdC5rZXlzKGUpLmV2ZXJ5KFFvKSkpKX1mdW5jdGlvbiBJbihlKXtmb3IoO2UucGFyZW50Oyl7aWYoZT1lLnBhcmVudCxcInRlbXBsYXRlXCIhPT1lLnRhZylyZXR1cm4hMTtpZihlLmZvcilyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBCbihlLHQpe3ZhciBuPXQ/XCJuYXRpdmVPbjp7XCI6XCJvbjp7XCI7Zm9yKHZhciByIGluIGUpbis9J1wiJytyKydcIjonK0ZuKGVbcl0pK1wiLFwiO3JldHVybiBuLnNsaWNlKDAsLTEpK1wifVwifWZ1bmN0aW9uIEZuKGUpe2lmKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuXCJbXCIrZS5tYXAoRm4pLmpvaW4oXCIsXCIpK1wiXVwiO2lmKGUubW9kaWZpZXJzKXt2YXIgdD1cIlwiLG49W107Zm9yKHZhciByIGluIGUubW9kaWZpZXJzKUZhW3JdP3QrPUZhW3JdOm4ucHVzaChyKTtuLmxlbmd0aCYmKHQ9SG4obikrdCk7dmFyIGk9SWEudGVzdChlLnZhbHVlKT9lLnZhbHVlK1wiKCRldmVudClcIjplLnZhbHVlO3JldHVyblwiZnVuY3Rpb24oJGV2ZW50KXtcIit0K2krXCJ9XCJ9cmV0dXJuIElhLnRlc3QoZS52YWx1ZSk/ZS52YWx1ZTpcImZ1bmN0aW9uKCRldmVudCl7XCIrZS52YWx1ZStcIn1cIn1yZXR1cm5cImZ1bmN0aW9uKCl7fVwifWZ1bmN0aW9uIEhuKGUpe3ZhciB0PTE9PT1lLmxlbmd0aD9VbihlWzBdKTpBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGUubWFwKFVuKSk7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/XCJpZihcIit0Lm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIiRldmVudC5rZXlDb2RlIT09XCIrZX0pLmpvaW4oXCImJlwiKStcIilyZXR1cm47XCI6XCJpZigkZXZlbnQua2V5Q29kZSE9PVwiK3QrXCIpcmV0dXJuO1wifWZ1bmN0aW9uIFVuKGUpe3JldHVybiBwYXJzZUludChlLDEwKXx8QmFbZV18fFwiX2soXCIrSlNPTi5zdHJpbmdpZnkoZSkrXCIpXCJ9ZnVuY3Rpb24gem4oZSx0KXtlLndyYXBEYXRhPWZ1bmN0aW9uKGUpe3JldHVyblwiX2IoXCIrZStcIixcIit0LnZhbHVlKyh0Lm1vZGlmaWVycyYmdC5tb2RpZmllcnMucHJvcD9cIix0cnVlXCI6XCJcIikrXCIpXCJ9fWZ1bmN0aW9uIFZuKGUsdCl7dmFyIG49aWEscj1pYT1bXSxpPW9hO29hPTAsYWE9dCxlYT10Lndhcm58fHNuLHRhPWNuKHQubW9kdWxlcyxcInRyYW5zZm9ybUNvZGVcIiksbmE9Y24odC5tb2R1bGVzLFwiZ2VuRGF0YVwiKSxyYT10LmRpcmVjdGl2ZXN8fHt9O3ZhciBvPWU/Sm4oZSk6J19oKFwiZGl2XCIpJztyZXR1cm4gaWE9bixvYT1pLHtyZW5kZXI6XCJ3aXRoKHRoaXMpe3JldHVybiBcIitvK1wifVwiLHN0YXRpY1JlbmRlckZuczpyfX1mdW5jdGlvbiBKbihlKXtpZihlLnN0YXRpY1Jvb3QmJiFlLnN0YXRpY1Byb2Nlc3NlZClyZXR1cm4gcW4oZSk7aWYoZS5vbmNlJiYhZS5vbmNlUHJvY2Vzc2VkKXJldHVybiBLbihlKTtpZihlLmZvciYmIWUuZm9yUHJvY2Vzc2VkKXJldHVybiBHbihlKTtpZihlLmlmJiYhZS5pZlByb2Nlc3NlZClyZXR1cm4gV24oZSk7aWYoXCJ0ZW1wbGF0ZVwiIT09ZS50YWd8fGUuc2xvdFRhcmdldCl7aWYoXCJzbG90XCI9PT1lLnRhZylyZXR1cm4gbnIoZSk7dmFyIHQ7aWYoZS5jb21wb25lbnQpdD1ycihlLmNvbXBvbmVudCxlKTtlbHNle3ZhciBuPWUucGxhaW4/dm9pZCAwOlluKGUpLHI9ZS5pbmxpbmVUZW1wbGF0ZT9udWxsOlhuKGUpO3Q9XCJfaCgnXCIrZS50YWcrXCInXCIrKG4/XCIsXCIrbjpcIlwiKSsocj9cIixcIityOlwiXCIpK1wiKVwifWZvcih2YXIgaT0wO2k8dGEubGVuZ3RoO2krKyl0PXRhW2ldKGUsdCk7cmV0dXJuIHR9cmV0dXJuIFhuKGUpfHxcInZvaWQgMFwifWZ1bmN0aW9uIHFuKGUpe3JldHVybiBlLnN0YXRpY1Byb2Nlc3NlZD0hMCxpYS5wdXNoKFwid2l0aCh0aGlzKXtyZXR1cm4gXCIrSm4oZSkrXCJ9XCIpLFwiX20oXCIrKGlhLmxlbmd0aC0xKSsoZS5zdGF0aWNJbkZvcj9cIix0cnVlXCI6XCJcIikrXCIpXCJ9ZnVuY3Rpb24gS24oZSl7aWYoZS5vbmNlUHJvY2Vzc2VkPSEwLGUuc3RhdGljSW5Gb3Ipe2Zvcih2YXIgdD1cIlwiLG49ZS5wYXJlbnQ7bjspe2lmKG4uZm9yKXt0PW4ua2V5O2JyZWFrfW49bi5wYXJlbnR9cmV0dXJuIHQ/XCJfbyhcIitKbihlKStcIixcIitvYSsrICsodD9cIixcIit0OlwiXCIpK1wiKVwiOkpuKGUpfXJldHVybiBxbihlKX1mdW5jdGlvbiBXbihlKXt2YXIgdD1lLmlmO3JldHVybiBlLmlmUHJvY2Vzc2VkPSEwLFwiKFwiK3QrXCIpP1wiK0puKGUpK1wiOlwiK1puKGUpfWZ1bmN0aW9uIFpuKGUpe3JldHVybiBlLmVsc2VCbG9jaz9KbihlLmVsc2VCbG9jayk6XCJfZSgpXCJ9ZnVuY3Rpb24gR24oZSl7dmFyIHQ9ZS5mb3Isbj1lLmFsaWFzLHI9ZS5pdGVyYXRvcjE/XCIsXCIrZS5pdGVyYXRvcjE6XCJcIixpPWUuaXRlcmF0b3IyP1wiLFwiK2UuaXRlcmF0b3IyOlwiXCI7cmV0dXJuIGUuZm9yUHJvY2Vzc2VkPSEwLFwiX2woKFwiK3QrXCIpLGZ1bmN0aW9uKFwiK24rcitpK1wiKXtyZXR1cm4gXCIrSm4oZSkrXCJ9KVwifWZ1bmN0aW9uIFluKGUpe3ZhciB0PVwie1wiLG49UW4oZSk7biYmKHQrPW4rXCIsXCIpLGUua2V5JiYodCs9XCJrZXk6XCIrZS5rZXkrXCIsXCIpLGUucmVmJiYodCs9XCJyZWY6XCIrZS5yZWYrXCIsXCIpLGUucmVmSW5Gb3ImJih0Kz1cInJlZkluRm9yOnRydWUsXCIpLGUuY29tcG9uZW50JiYodCs9J3RhZzpcIicrZS50YWcrJ1wiLCcpLGUuc2xvdFRhcmdldCYmKHQrPVwic2xvdDpcIitlLnNsb3RUYXJnZXQrXCIsXCIpO2Zvcih2YXIgcj0wO3I8bmEubGVuZ3RoO3IrKyl0Kz1uYVtyXShlKTtpZihlLmF0dHJzJiYodCs9XCJhdHRyczp7XCIraXIoZS5hdHRycykrXCJ9LFwiKSxlLnByb3BzJiYodCs9XCJkb21Qcm9wczp7XCIraXIoZS5wcm9wcykrXCJ9LFwiKSxlLmV2ZW50cyYmKHQrPUJuKGUuZXZlbnRzKStcIixcIiksZS5uYXRpdmVFdmVudHMmJih0Kz1CbihlLm5hdGl2ZUV2ZW50cywhMCkrXCIsXCIpLGUuaW5saW5lVGVtcGxhdGUpe3ZhciBpPWUuY2hpbGRyZW5bMF07aWYoMT09PWkudHlwZSl7dmFyIG89Vm4oaSxhYSk7dCs9XCJpbmxpbmVUZW1wbGF0ZTp7cmVuZGVyOmZ1bmN0aW9uKCl7XCIrby5yZW5kZXIrXCJ9LHN0YXRpY1JlbmRlckZuczpbXCIrby5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb24oKXtcIitlK1wifVwifSkuam9pbihcIixcIikrXCJdfVwifX1yZXR1cm4gdD10LnJlcGxhY2UoLywkLyxcIlwiKStcIn1cIixlLndyYXBEYXRhJiYodD1lLndyYXBEYXRhKHQpKSx0fWZ1bmN0aW9uIFFuKGUpe3ZhciB0PWUuZGlyZWN0aXZlcztpZih0KXt2YXIgbixyLGksbyxhPVwiZGlyZWN0aXZlczpbXCIscz0hMTtmb3Iobj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7aT10W25dLG89ITA7dmFyIGM9cmFbaS5uYW1lXXx8SGFbaS5uYW1lXTtjJiYobz0hIWMoZSxpLGVhKSksbyYmKHM9ITAsYSs9J3tuYW1lOlwiJytpLm5hbWUrJ1wiLHJhd05hbWU6XCInK2kucmF3TmFtZSsnXCInKyhpLnZhbHVlP1wiLHZhbHVlOihcIitpLnZhbHVlK1wiKSxleHByZXNzaW9uOlwiK0pTT04uc3RyaW5naWZ5KGkudmFsdWUpOlwiXCIpKyhpLmFyZz8nLGFyZzpcIicraS5hcmcrJ1wiJzpcIlwiKSsoaS5tb2RpZmllcnM/XCIsbW9kaWZpZXJzOlwiK0pTT04uc3RyaW5naWZ5KGkubW9kaWZpZXJzKTpcIlwiKStcIn0sXCIpfXJldHVybiBzP2Euc2xpY2UoMCwtMSkrXCJdXCI6dm9pZCAwfX1mdW5jdGlvbiBYbihlKXtpZihlLmNoaWxkcmVuLmxlbmd0aClyZXR1cm5cIltcIitlLmNoaWxkcmVuLm1hcChlcikuam9pbihcIixcIikrXCJdXCJ9ZnVuY3Rpb24gZXIoZSl7cmV0dXJuIDE9PT1lLnR5cGU/Sm4oZSk6dHIoZSl9ZnVuY3Rpb24gdHIoZSl7cmV0dXJuIDI9PT1lLnR5cGU/ZS5leHByZXNzaW9uOkpTT04uc3RyaW5naWZ5KGUudGV4dCl9ZnVuY3Rpb24gbnIoZSl7dmFyIHQ9ZS5zbG90TmFtZXx8J1wiZGVmYXVsdFwiJyxuPVhuKGUpO3JldHVyblwiX3QoXCIrdCsobj9cIixcIituOlwiXCIpK1wiKVwifWZ1bmN0aW9uIHJyKGUsdCl7dmFyIG49dC5pbmxpbmVUZW1wbGF0ZT9udWxsOlhuKHQpO3JldHVyblwiX2goXCIrZStcIixcIitZbih0KSsobj9cIixcIituOlwiXCIpK1wiKVwifWZ1bmN0aW9uIGlyKGUpe2Zvcih2YXIgdD1cIlwiLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIHI9ZVtuXTt0Kz0nXCInK3IubmFtZSsnXCI6JytyLnZhbHVlK1wiLFwifXJldHVybiB0LnNsaWNlKDAsLTEpfWZ1bmN0aW9uIG9yKGUsdCl7dmFyIG49aG4oZS50cmltKCksdCk7Tm4obix0KTt2YXIgcj1WbihuLHQpO3JldHVybnthc3Q6bixyZW5kZXI6ci5yZW5kZXIsc3RhdGljUmVuZGVyRm5zOnIuc3RhdGljUmVuZGVyRm5zfX1mdW5jdGlvbiBhcihlLHQpe3ZhciBuPSh0Lndhcm58fHNuLHZuKGUsXCJjbGFzc1wiKSk7biYmKGUuc3RhdGljQ2xhc3M9SlNPTi5zdHJpbmdpZnkobikpO3ZhciByPXBuKGUsXCJjbGFzc1wiLCExKTtyJiYoZS5jbGFzc0JpbmRpbmc9cil9ZnVuY3Rpb24gc3IoZSl7dmFyIHQ9XCJcIjtyZXR1cm4gZS5zdGF0aWNDbGFzcyYmKHQrPVwic3RhdGljQ2xhc3M6XCIrZS5zdGF0aWNDbGFzcytcIixcIiksZS5jbGFzc0JpbmRpbmcmJih0Kz1cImNsYXNzOlwiK2UuY2xhc3NCaW5kaW5nK1wiLFwiKSx0fWZ1bmN0aW9uIGNyKGUpe3ZhciB0PXBuKGUsXCJzdHlsZVwiLCExKTt0JiYoZS5zdHlsZUJpbmRpbmc9dCl9ZnVuY3Rpb24gdXIoZSl7cmV0dXJuIGUuc3R5bGVCaW5kaW5nP1wic3R5bGU6KFwiK2Uuc3R5bGVCaW5kaW5nK1wiKSxcIjpcIlwifWZ1bmN0aW9uIGxyKGUpe2lmKGNhPWUsc2E9Y2EubGVuZ3RoLGxhPWZhPWRhPTAsZS5pbmRleE9mKFwiW1wiKTwwKXJldHVybntleHA6ZSxpZHg6bnVsbH07Zm9yKDshZHIoKTspdWE9ZnIoKSxwcih1YSk/aHIodWEpOjkxPT09dWEmJnZyKHVhKTtyZXR1cm57ZXhwOmUuc3Vic3RyaW5nKDAsZmEpLGlkeDplLnN1YnN0cmluZyhmYSsxLGRhKX19ZnVuY3Rpb24gZnIoKXtyZXR1cm4gY2EuY2hhckNvZGVBdCgrK2xhKX1mdW5jdGlvbiBkcigpe3JldHVybiBsYT49c2F9ZnVuY3Rpb24gcHIoZSl7cmV0dXJuIDM0PT09ZXx8Mzk9PT1lfWZ1bmN0aW9uIHZyKGUpe3ZhciB0PTE7Zm9yKGZhPWxhOyFkcigpOylpZihlPWZyKCkscHIoZSkpaHIoZSk7ZWxzZSBpZig5MT09PWUmJnQrKyw5Mz09PWUmJnQtLSwwPT09dCl7ZGE9bGE7YnJlYWt9fWZ1bmN0aW9uIGhyKGUpe2Zvcih2YXIgdD1lOyFkcigpJiYoZT1mcigpLGUhPT10KTspO31mdW5jdGlvbiBtcihlLHQsbil7cGE9bjt2YXIgcj10LnZhbHVlLGk9dC5tb2RpZmllcnMsbz1lLnRhZyxhPWUuYXR0cnNNYXAudHlwZTtyZXR1cm5cInNlbGVjdFwiPT09bz9icihlLHIsaSk6XCJpbnB1dFwiPT09byYmXCJjaGVja2JveFwiPT09YT9ncihlLHIsaSk6XCJpbnB1dFwiPT09byYmXCJyYWRpb1wiPT09YT95cihlLHIsaSk6X3IoZSxyLGkpLCEwfWZ1bmN0aW9uIGdyKGUsdCxuKXt2YXIgcj1uJiZuLm51bWJlcixpPXBuKGUsXCJ2YWx1ZVwiKXx8XCJudWxsXCIsbz1wbihlLFwidHJ1ZS12YWx1ZVwiKXx8XCJ0cnVlXCIsYT1wbihlLFwiZmFsc2UtdmFsdWVcIil8fFwiZmFsc2VcIjt1bihlLFwiY2hlY2tlZFwiLFwiQXJyYXkuaXNBcnJheShcIit0K1wiKT9faShcIit0K1wiLFwiK2krXCIpPi0xOl9xKFwiK3QrXCIsXCIrbytcIilcIiksZG4oZSxcImNoYW5nZVwiLFwidmFyICQkYT1cIit0K1wiLCQkZWw9JGV2ZW50LnRhcmdldCwkJGM9JCRlbC5jaGVja2VkPyhcIitvK1wiKTooXCIrYStcIik7aWYoQXJyYXkuaXNBcnJheSgkJGEpKXt2YXIgJCR2PVwiKyhyP1wiX24oXCIraStcIilcIjppKStcIiwkJGk9X2koJCRhLCQkdik7aWYoJCRjKXskJGk8MCYmKFwiK3QrXCI9JCRhLmNvbmNhdCgkJHYpKX1lbHNleyQkaT4tMSYmKFwiK3QrXCI9JCRhLnNsaWNlKDAsJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSsxKSkpfX1lbHNle1wiK3QrXCI9JCRjfVwiLG51bGwsITApfWZ1bmN0aW9uIHlyKGUsdCxuKXt2YXIgcj1uJiZuLm51bWJlcixpPXBuKGUsXCJ2YWx1ZVwiKXx8XCJudWxsXCI7aT1yP1wiX24oXCIraStcIilcIjppLHVuKGUsXCJjaGVja2VkXCIsXCJfcShcIit0K1wiLFwiK2krXCIpXCIpLGRuKGUsXCJjaGFuZ2VcIiwkcih0LGkpLG51bGwsITApfWZ1bmN0aW9uIF9yKGUsdCxuKXt2YXIgcj1lLmF0dHJzTWFwLnR5cGUsaT1ufHx7fSxvPWkubGF6eSxhPWkubnVtYmVyLHM9aS50cmltLGM9b3x8VnImJlwicmFuZ2VcIj09PXI/XCJjaGFuZ2VcIjpcImlucHV0XCIsdT0hbyYmXCJyYW5nZVwiIT09cixsPVwiaW5wdXRcIj09PWUudGFnfHxcInRleHRhcmVhXCI9PT1lLnRhZyxmPWw/XCIkZXZlbnQudGFyZ2V0LnZhbHVlXCIrKHM/XCIudHJpbSgpXCI6XCJcIik6XCIkZXZlbnRcIjtmPWF8fFwibnVtYmVyXCI9PT1yP1wiX24oXCIrZitcIilcIjpmO3ZhciBkPSRyKHQsZik7bCYmdSYmKGQ9XCJpZigkZXZlbnQudGFyZ2V0LmNvbXBvc2luZylyZXR1cm47XCIrZCksdW4oZSxcInZhbHVlXCIsbD9cIl9zKFwiK3QrXCIpXCI6XCIoXCIrdCtcIilcIiksZG4oZSxjLGQsbnVsbCwhMCl9ZnVuY3Rpb24gYnIoZSx0LG4pe3ZhciByPW4mJm4ubnVtYmVyLGk9J0FycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsZnVuY3Rpb24obyl7cmV0dXJuIG8uc2VsZWN0ZWR9KS5tYXAoZnVuY3Rpb24obyl7dmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtyZXR1cm4gJysocj9cIl9uKHZhbClcIjpcInZhbFwiKStcIn0pXCIrKG51bGw9PWUuYXR0cnNNYXAubXVsdGlwbGU/XCJbMF1cIjpcIlwiKSxvPSRyKHQsaSk7ZG4oZSxcImNoYW5nZVwiLG8sbnVsbCwhMCl9ZnVuY3Rpb24gJHIoZSx0KXt2YXIgbj1scihlKTtyZXR1cm4gbnVsbD09PW4uaWR4P2UrXCI9XCIrdDpcInZhciAkJGV4cCA9IFwiK24uZXhwK1wiLCAkJGlkeCA9IFwiK24uaWR4K1wiO2lmICghQXJyYXkuaXNBcnJheSgkJGV4cCkpe1wiK2UrXCI9XCIrdCtcIn1lbHNleyQkZXhwLnNwbGljZSgkJGlkeCwgMSwgXCIrdCtcIil9XCJ9ZnVuY3Rpb24gd3IoZSx0KXt0LnZhbHVlJiZ1bihlLFwidGV4dENvbnRlbnRcIixcIl9zKFwiK3QudmFsdWUrXCIpXCIpfWZ1bmN0aW9uIENyKGUsdCl7dC52YWx1ZSYmdW4oZSxcImlubmVySFRNTFwiLFwiX3MoXCIrdC52YWx1ZStcIilcIil9ZnVuY3Rpb24geHIoZSx0KXtyZXR1cm4gdD10P3UodSh7fSxLYSksdCk6S2Esb3IoZSx0KX1mdW5jdGlvbiBrcihlLHQsbil7dmFyIHI9KHQmJnQud2Fybnx8JGksdCYmdC5kZWxpbWl0ZXJzP1N0cmluZyh0LmRlbGltaXRlcnMpK2U6ZSk7aWYocWFbcl0pcmV0dXJuIHFhW3JdO3ZhciBpPXt9LG89eHIoZSx0KTtpLnJlbmRlcj1BcihvLnJlbmRlcik7dmFyIGE9by5zdGF0aWNSZW5kZXJGbnMubGVuZ3RoO2kuc3RhdGljUmVuZGVyRm5zPW5ldyBBcnJheShhKTtmb3IodmFyIHM9MDtzPGE7cysrKWkuc3RhdGljUmVuZGVyRm5zW3NdPUFyKG8uc3RhdGljUmVuZGVyRm5zW3NdKTtyZXR1cm4gcWFbcl09aX1mdW5jdGlvbiBBcihlKXt0cnl7cmV0dXJuIG5ldyBGdW5jdGlvbihlKX1jYXRjaChlKXtyZXR1cm4gcH19ZnVuY3Rpb24gT3IoZSl7aWYoZS5vdXRlckhUTUwpcmV0dXJuIGUub3V0ZXJIVE1MO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIHQuYXBwZW5kQ2hpbGQoZS5jbG9uZU5vZGUoITApKSx0LmlubmVySFRNTH12YXIgVHIsU3I9bihcInNsb3QsY29tcG9uZW50XCIsITApLEVyPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksanI9Ly0oXFx3KS9nLExyPWEoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShqcixmdW5jdGlvbihlLHQpe3JldHVybiB0P3QudG9VcHBlckNhc2UoKTpcIlwifSl9KSxOcj1hKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSl9KSxEcj0vKFteLV0pKFtBLVpdKS9nLE1yPWEoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShEcixcIiQxLSQyXCIpLnJlcGxhY2UoRHIsXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpfSksUHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxScj1cIltvYmplY3QgT2JqZWN0XVwiLElyPWZ1bmN0aW9uKCl7cmV0dXJuITF9LEJyPXtvcHRpb25NZXJnZVN0cmF0ZWdpZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxzaWxlbnQ6ITEsZGV2dG9vbHM6ITEsZXJyb3JIYW5kbGVyOm51bGwsaWdub3JlZEVsZW1lbnRzOm51bGwsa2V5Q29kZXM6T2JqZWN0LmNyZWF0ZShudWxsKSxpc1Jlc2VydmVkVGFnOklyLGlzVW5rbm93bkVsZW1lbnQ6SXIsZ2V0VGFnTmFtZXNwYWNlOnAsbXVzdFVzZVByb3A6SXIsX2Fzc2V0VHlwZXM6W1wiY29tcG9uZW50XCIsXCJkaXJlY3RpdmVcIixcImZpbHRlclwiXSxfbGlmZWN5Y2xlSG9va3M6W1wiYmVmb3JlQ3JlYXRlXCIsXCJjcmVhdGVkXCIsXCJiZWZvcmVNb3VudFwiLFwibW91bnRlZFwiLFwiYmVmb3JlVXBkYXRlXCIsXCJ1cGRhdGVkXCIsXCJiZWZvcmVEZXN0cm95XCIsXCJkZXN0cm95ZWRcIixcImFjdGl2YXRlZFwiLFwiZGVhY3RpdmF0ZWRcIl0sX21heFVwZGF0ZUNvdW50OjEwMCxfaXNTZXJ2ZXI6ITF9LEZyPS9bXlxcdy4kXS8sSHI9XCJfX3Byb3RvX19cImlue30sVXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJbb2JqZWN0IE9iamVjdF1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cpLHpyPVVyJiZ3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLFZyPXpyJiYvbXNpZXx0cmlkZW50Ly50ZXN0KHpyKSxKcj16ciYmenIuaW5kZXhPZihcIm1zaWUgOS4wXCIpPjAscXI9enImJnpyLmluZGV4T2YoXCJlZGdlL1wiKT4wLEtyPXpyJiZ6ci5pbmRleE9mKFwiYW5kcm9pZFwiKT4wLFdyPXpyJiYvaXBob25lfGlwYWR8aXBvZHxpb3MvLnRlc3QoenIpLFpyPVVyJiZ3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyxHcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyPSExO3ZhciBlPW4uc2xpY2UoMCk7bi5sZW5ndGg9MDtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdKCl9dmFyIHQsbj1bXSxyPSExO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZiKFByb21pc2UpKXt2YXIgaT1Qcm9taXNlLnJlc29sdmUoKTt0PWZ1bmN0aW9uKCl7aS50aGVuKGUpLFdyJiZzZXRUaW1lb3V0KHApfX1lbHNlIGlmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyfHwhYihNdXRhdGlvbk9ic2VydmVyKSYmXCJbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl1cIiE9PU11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSl0PWZ1bmN0aW9uKCl7c2V0VGltZW91dChlLDApfTtlbHNle3ZhciBvPTEsYT1uZXcgTXV0YXRpb25PYnNlcnZlcihlKSxzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhvKSk7YS5vYnNlcnZlKHMse2NoYXJhY3RlckRhdGE6ITB9KSx0PWZ1bmN0aW9uKCl7bz0obysxKSUyLHMuZGF0YT1TdHJpbmcobyl9fXJldHVybiBmdW5jdGlvbihlLGkpe3ZhciBvPWk/ZnVuY3Rpb24oKXtlLmNhbGwoaSl9OmU7bi5wdXNoKG8pLHJ8fChyPSEwLHQoKSl9fSgpO1RyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQmJmIoU2V0KT9TZXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX1yZXR1cm4gZS5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT10aGlzLnNldFtlXX0sZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGUpe3RoaXMuc2V0W2VdPTF9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX0sZX0oKTt2YXIgWXI9MCxRcj1mdW5jdGlvbigpe3RoaXMuaWQ9WXIrKyx0aGlzLnN1YnM9W119O1FyLnByb3RvdHlwZS5hZGRTdWI9ZnVuY3Rpb24oZSl7dGhpcy5zdWJzLnB1c2goZSl9LFFyLnByb3RvdHlwZS5yZW1vdmVTdWI9ZnVuY3Rpb24oZSl7cih0aGlzLnN1YnMsZSl9LFFyLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtRci50YXJnZXQmJlFyLnRhcmdldC5hZGREZXAodGhpcyl9LFFyLnByb3RvdHlwZS5ub3RpZnk9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5zdWJzLnNsaWNlKCksdD0wLG49ZS5sZW5ndGg7dDxuO3QrKyllW3RdLnVwZGF0ZSgpfSxRci50YXJnZXQ9bnVsbDt2YXIgWHI9W10sZWk9W10sdGk9e30sbmk9ITEscmk9ITEsaWk9MCxvaT0wLGFpPWZ1bmN0aW9uKGUsdCxuLHIpe3ZvaWQgMD09PXImJihyPXt9KSx0aGlzLnZtPWUsZS5fd2F0Y2hlcnMucHVzaCh0aGlzKSx0aGlzLmRlZXA9ISFyLmRlZXAsdGhpcy51c2VyPSEhci51c2VyLHRoaXMubGF6eT0hIXIubGF6eSx0aGlzLnN5bmM9ISFyLnN5bmMsdGhpcy5leHByZXNzaW9uPXQudG9TdHJpbmcoKSx0aGlzLmNiPW4sdGhpcy5pZD0rK29pLHRoaXMuYWN0aXZlPSEwLHRoaXMuZGlydHk9dGhpcy5sYXp5LHRoaXMuZGVwcz1bXSx0aGlzLm5ld0RlcHM9W10sdGhpcy5kZXBJZHM9bmV3IFRyLHRoaXMubmV3RGVwSWRzPW5ldyBUcixcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3RoaXMuZ2V0dGVyPXQ6KHRoaXMuZ2V0dGVyPV8odCksdGhpcy5nZXR0ZXJ8fCh0aGlzLmdldHRlcj1mdW5jdGlvbigpe30pKSx0aGlzLnZhbHVlPXRoaXMubGF6eT92b2lkIDA6dGhpcy5nZXQoKX07YWkucHJvdG90eXBlLmdldD1mdW5jdGlvbigpeyQodGhpcyk7dmFyIGU9dGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLHRoaXMudm0pO3JldHVybiB0aGlzLmRlZXAmJkEoZSksdygpLHRoaXMuY2xlYW51cERlcHMoKSxlfSxhaS5wcm90b3R5cGUuYWRkRGVwPWZ1bmN0aW9uKGUpe3ZhciB0PWUuaWQ7dGhpcy5uZXdEZXBJZHMuaGFzKHQpfHwodGhpcy5uZXdEZXBJZHMuYWRkKHQpLHRoaXMubmV3RGVwcy5wdXNoKGUpLHRoaXMuZGVwSWRzLmhhcyh0KXx8ZS5hZGRTdWIodGhpcykpfSxhaS5wcm90b3R5cGUuY2xlYW51cERlcHM9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcyx0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl7dmFyIG49ZS5kZXBzW3RdO2UubmV3RGVwSWRzLmhhcyhuLmlkKXx8bi5yZW1vdmVTdWIoZSl9dmFyIHI9dGhpcy5kZXBJZHM7dGhpcy5kZXBJZHM9dGhpcy5uZXdEZXBJZHMsdGhpcy5uZXdEZXBJZHM9cix0aGlzLm5ld0RlcElkcy5jbGVhcigpLHI9dGhpcy5kZXBzLHRoaXMuZGVwcz10aGlzLm5ld0RlcHMsdGhpcy5uZXdEZXBzPXIsdGhpcy5uZXdEZXBzLmxlbmd0aD0wfSxhaS5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5sYXp5P3RoaXMuZGlydHk9ITA6dGhpcy5zeW5jP3RoaXMucnVuKCk6ayh0aGlzKX0sYWkucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe2lmKHRoaXMuYWN0aXZlKXt2YXIgZT10aGlzLmdldCgpO2lmKGUhPT10aGlzLnZhbHVlfHxsKGUpfHx0aGlzLmRlZXApe3ZhciB0PXRoaXMudmFsdWU7aWYodGhpcy52YWx1ZT1lLHRoaXMudXNlcil0cnl7dGhpcy5jYi5jYWxsKHRoaXMudm0sZSx0KX1jYXRjaChlKXtpZighQnIuZXJyb3JIYW5kbGVyKXRocm93IGU7QnIuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCxlLHRoaXMudm0pfWVsc2UgdGhpcy5jYi5jYWxsKHRoaXMudm0sZSx0KX19fSxhaS5wcm90b3R5cGUuZXZhbHVhdGU9ZnVuY3Rpb24oKXt0aGlzLnZhbHVlPXRoaXMuZ2V0KCksdGhpcy5kaXJ0eT0hMX0sYWkucHJvdG90eXBlLmRlcGVuZD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KWUuZGVwc1t0XS5kZXBlbmQoKX0sYWkucHJvdG90eXBlLnRlYXJkb3duPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0aGlzLmFjdGl2ZSl7dGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZHx8dGhpcy52bS5fdkZvclJlbW92aW5nfHxyKHRoaXMudm0uX3dhdGNoZXJzLHRoaXMpO2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspZS5kZXBzW3RdLnJlbW92ZVN1YihlKTt0aGlzLmFjdGl2ZT0hMX19O3ZhciBzaT1uZXcgVHIsY2k9QXJyYXkucHJvdG90eXBlLHVpPU9iamVjdC5jcmVhdGUoY2kpO1tcInB1c2hcIixcInBvcFwiLFwic2hpZnRcIixcInVuc2hpZnRcIixcInNwbGljZVwiLFwic29ydFwiLFwicmV2ZXJzZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWNpW2VdO3kodWksZSxmdW5jdGlvbigpe2Zvcih2YXIgbj1hcmd1bWVudHMscj1hcmd1bWVudHMubGVuZ3RoLGk9bmV3IEFycmF5KHIpO3ItLTspaVtyXT1uW3JdO3ZhciBvLGE9dC5hcHBseSh0aGlzLGkpLHM9dGhpcy5fX29iX187c3dpdGNoKGUpe2Nhc2VcInB1c2hcIjpvPWk7YnJlYWs7Y2FzZVwidW5zaGlmdFwiOm89aTticmVhaztjYXNlXCJzcGxpY2VcIjpvPWkuc2xpY2UoMil9cmV0dXJuIG8mJnMub2JzZXJ2ZUFycmF5KG8pLHMuZGVwLm5vdGlmeSgpLGF9KX0pO3ZhciBsaT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh1aSksZmk9e3Nob3VsZENvbnZlcnQ6ITAsaXNTZXR0aW5nUHJvcHM6ITF9LGRpPWZ1bmN0aW9uKGUpe2lmKHRoaXMudmFsdWU9ZSx0aGlzLmRlcD1uZXcgUXIsdGhpcy52bUNvdW50PTAseShlLFwiX19vYl9fXCIsdGhpcyksQXJyYXkuaXNBcnJheShlKSl7dmFyIHQ9SHI/VDpTO3QoZSx1aSxsaSksdGhpcy5vYnNlcnZlQXJyYXkoZSl9ZWxzZSB0aGlzLndhbGsoZSl9O2RpLnByb3RvdHlwZS53YWxrPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1PYmplY3Qua2V5cyhlKSxuPTA7bjx0Lmxlbmd0aDtuKyspaihlLHRbbl0sZVt0W25dXSl9LGRpLnByb3RvdHlwZS5vYnNlcnZlQXJyYXk9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aDt0PG47dCsrKUUoZVt0XSl9O3ZhciBwaT17ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsZ2V0OnAsc2V0OnB9LHZpPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEscyl7dGhpcy50YWc9ZSx0aGlzLmRhdGE9dCx0aGlzLmNoaWxkcmVuPW4sdGhpcy50ZXh0PXIsdGhpcy5lbG09aSx0aGlzLm5zPW8sdGhpcy5jb250ZXh0PWEsdGhpcy5mdW5jdGlvbmFsQ29udGV4dD12b2lkIDAsdGhpcy5rZXk9dCYmdC5rZXksdGhpcy5jb21wb25lbnRPcHRpb25zPXMsdGhpcy5jaGlsZD12b2lkIDAsdGhpcy5wYXJlbnQ9dm9pZCAwLHRoaXMucmF3PSExLHRoaXMuaXNTdGF0aWM9ITEsdGhpcy5pc1Jvb3RJbnNlcnQ9ITAsdGhpcy5pc0NvbW1lbnQ9ITEsdGhpcy5pc0Nsb25lZD0hMSx0aGlzLmlzT25jZT0hMX0saGk9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgdmk7cmV0dXJuIGUudGV4dD1cIlwiLGUuaXNDb21tZW50PSEwLGV9LG1pPW51bGwsZ2k9e2luaXQ6c2UscHJlcGF0Y2g6Y2UsaW5zZXJ0OnVlLGRlc3Ryb3k6bGV9LHlpPU9iamVjdC5rZXlzKGdpKSxfaT0wO0NlKEFlKSx6KEFlKSx3ZShBZSksbmUoQWUpLF9lKEFlKTt2YXIgYmksJGk9cCx3aT1Cci5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7d2kuZGF0YT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIG4/ZXx8dD9mdW5jdGlvbigpe3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKG4pOnQsaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UuY2FsbChuKTp2b2lkIDA7cmV0dXJuIHI/T2UocixpKTppfTp2b2lkIDA6dD9cImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6ZT9mdW5jdGlvbigpe3JldHVybiBPZSh0LmNhbGwodGhpcyksZS5jYWxsKHRoaXMpKX06dDplfSxCci5fbGlmZWN5Y2xlSG9va3MuZm9yRWFjaChmdW5jdGlvbihlKXt3aVtlXT1UZX0pLEJyLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZSl7d2lbZStcInNcIl09U2V9KSx3aS53YXRjaD1mdW5jdGlvbihlLHQpe2lmKCF0KXJldHVybiBlO2lmKCFlKXJldHVybiB0O3ZhciBuPXt9O3UobixlKTtmb3IodmFyIHIgaW4gdCl7dmFyIGk9bltyXSxvPXRbcl07aSYmIUFycmF5LmlzQXJyYXkoaSkmJihpPVtpXSksbltyXT1pP2kuY29uY2F0KG8pOltvXX1yZXR1cm4gbn0sd2kucHJvcHM9d2kubWV0aG9kcz13aS5jb21wdXRlZD1mdW5jdGlvbihlLHQpe2lmKCF0KXJldHVybiBlO2lmKCFlKXJldHVybiB0O3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIHUobixlKSx1KG4sdCksbn07dmFyIENpPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/ZTp0fSx4aT1PYmplY3QuZnJlZXplKHtkZWZpbmVSZWFjdGl2ZTpqLF90b1N0cmluZzplLHRvTnVtYmVyOnQsbWFrZU1hcDpuLGlzQnVpbHRJblRhZzpTcixyZW1vdmU6cixoYXNPd246aSxpc1ByaW1pdGl2ZTpvLGNhY2hlZDphLGNhbWVsaXplOkxyLGNhcGl0YWxpemU6TnIsaHlwaGVuYXRlOk1yLGJpbmQ6cyx0b0FycmF5OmMsZXh0ZW5kOnUsaXNPYmplY3Q6bCxpc1BsYWluT2JqZWN0OmYsdG9PYmplY3Q6ZCxub29wOnAsbm86SXIsZ2VuU3RhdGljS2V5czp2LGxvb3NlRXF1YWw6aCxsb29zZUluZGV4T2Y6bSxpc1Jlc2VydmVkOmcsZGVmOnkscGFyc2VQYXRoOl8saGFzUHJvdG86SHIsaW5Ccm93c2VyOlVyLFVBOnpyLGlzSUU6VnIsaXNJRTk6SnIsaXNFZGdlOnFyLGlzQW5kcm9pZDpLcixpc0lPUzpXcixkZXZ0b29sczpacixuZXh0VGljazpHcixnZXQgX1NldCgpe3JldHVybiBUcn0sbWVyZ2VPcHRpb25zOkxlLHJlc29sdmVBc3NldDpOZSx3YXJuOiRpLGZvcm1hdENvbXBvbmVudE5hbWU6YmksdmFsaWRhdGVQcm9wOkRlfSksa2k9e25hbWU6XCJrZWVwLWFsaXZlXCIsYWJzdHJhY3Q6ITAsY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuY2FjaGU9T2JqZWN0LmNyZWF0ZShudWxsKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGU9ZWUodGhpcy4kc2xvdHMuZGVmYXVsdCk7aWYoZSYmZS5jb21wb25lbnRPcHRpb25zKXt2YXIgdD1lLmNvbXBvbmVudE9wdGlvbnMsbj1udWxsPT1lLmtleT90LkN0b3IuY2lkK1wiOjpcIit0LnRhZzplLmtleTt0aGlzLmNhY2hlW25dP2UuY2hpbGQ9dGhpcy5jYWNoZVtuXS5jaGlsZDp0aGlzLmNhY2hlW25dPWUsZS5kYXRhLmtlZXBBbGl2ZT0hMH1yZXR1cm4gZX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztmb3IodmFyIHQgaW4gdGhpcy5jYWNoZSl7dmFyIG49ZS5jYWNoZVt0XTtyZShuLmNoaWxkLFwiZGVhY3RpdmF0ZWRcIiksbi5jaGlsZC4kZGVzdHJveSgpfX19LEFpPXtLZWVwQWxpdmU6a2l9O1VlKEFlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoQWUucHJvdG90eXBlLFwiJGlzU2VydmVyXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBCci5faXNTZXJ2ZXJ9fSksQWUudmVyc2lvbj1cIjIuMC41XCI7dmFyIE9pLFRpPW4oXCJ2YWx1ZSxzZWxlY3RlZCxjaGVja2VkLG11dGVkXCIpLFNpPW4oXCJjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2tcIiksRWk9bihcImFsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLGVuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLHRydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGVcIiksamk9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsTGk9ZnVuY3Rpb24oZSl7cmV0dXJuXCI6XCI9PT1lLmNoYXJBdCg1KSYmXCJ4bGlua1wiPT09ZS5zbGljZSgwLDUpfSxOaT1mdW5jdGlvbihlKXtyZXR1cm4gTGkoZSk/ZS5zbGljZSg2LGUubGVuZ3RoKTpcIlwifSxEaT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ZT09PSExfSxNaT17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixtYXRoOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHhodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtXCJ9LFBpPW4oXCJodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSxhZGRyZXNzLGFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixoMSxoMixoMyxoNCxoNSxoNixoZ3JvdXAsbmF2LHNlY3Rpb24sZGl2LGRkLGRsLGR0LGZpZ2NhcHRpb24sZmlndXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLGEsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSxzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbyxlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucyxjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0cixidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLG91dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsZGV0YWlscyxkaWFsb2csbWVudSxtZW51aXRlbSxzdW1tYXJ5LGNvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGVcIiksUmk9bihcImFyZWEsYmFzZSxicixjb2wsZW1iZWQsZnJhbWUsaHIsaW1nLGlucHV0LGlzaW5kZXgsa2V5Z2VuLGxpbmssbWV0YSxwYXJhbSxzb3VyY2UsdHJhY2ssd2JyXCIsITApLElpPW4oXCJjb2xncm91cCxkZCxkdCxsaSxvcHRpb25zLHAsdGQsdGZvb3QsdGgsdGhlYWQsdHIsc291cmNlXCIsITApLEJpPW4oXCJhZGRyZXNzLGFydGljbGUsYXNpZGUsYmFzZSxibG9ja3F1b3RlLGJvZHksY2FwdGlvbixjb2wsY29sZ3JvdXAsZGQsZGV0YWlscyxkaWFsb2csZGl2LGRsLGR0LGZpZWxkc2V0LGZpZ2NhcHRpb24sZmlndXJlLGZvb3Rlcixmb3JtLGgxLGgyLGgzLGg0LGg1LGg2LGhlYWQsaGVhZGVyLGhncm91cCxocixodG1sLGxlZ2VuZCxsaSxtZW51aXRlbSxtZXRhLG9wdGdyb3VwLG9wdGlvbixwYXJhbSxycCxydCxzb3VyY2Usc3R5bGUsc3VtbWFyeSx0Ym9keSx0ZCx0Zm9vdCx0aCx0aGVhZCx0aXRsZSx0cix0cmFja1wiLCEwKSxGaT1uKFwic3ZnLGFuaW1hdGUsY2lyY2xlLGNsaXBwYXRoLGN1cnNvcixkZWZzLGRlc2MsZWxsaXBzZSxmaWx0ZXIsZm9udCxmb250LWZhY2UsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLHBvbHlnb24scG9seWxpbmUscmVjdCxzd2l0Y2gsc3ltYm9sLHRleHQsdGV4dHBhdGgsdHNwYW4sdXNlLHZpZXdcIiwhMCksSGk9ZnVuY3Rpb24oZSl7cmV0dXJuXCJwcmVcIj09PWV9LFVpPWZ1bmN0aW9uKGUpe3JldHVybiBQaShlKXx8RmkoZSl9LHppPU9iamVjdC5jcmVhdGUobnVsbCksVmk9T2JqZWN0LmZyZWV6ZSh7Y3JlYXRlRWxlbWVudDpZZSxjcmVhdGVFbGVtZW50TlM6UWUsY3JlYXRlVGV4dE5vZGU6WGUsY3JlYXRlQ29tbWVudDpldCxpbnNlcnRCZWZvcmU6dHQscmVtb3ZlQ2hpbGQ6bnQsYXBwZW5kQ2hpbGQ6cnQscGFyZW50Tm9kZTppdCxuZXh0U2libGluZzpvdCx0YWdOYW1lOmF0LHNldFRleHRDb250ZW50OnN0LGNoaWxkTm9kZXM6Y3Qsc2V0QXR0cmlidXRlOnV0fSksSmk9e2NyZWF0ZTpmdW5jdGlvbihlLHQpe2x0KHQpfSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXtlLmRhdGEucmVmIT09dC5kYXRhLnJlZiYmKGx0KGUsITApLGx0KHQpKX0sZGVzdHJveTpmdW5jdGlvbihlKXtsdChlLCEwKX19LHFpPW5ldyB2aShcIlwiLHt9LFtdKSxLaT1bXCJjcmVhdGVcIixcInVwZGF0ZVwiLFwicmVtb3ZlXCIsXCJkZXN0cm95XCJdLFdpPXtjcmVhdGU6bXQsdXBkYXRlOm10LGRlc3Ryb3k6ZnVuY3Rpb24oZSl7bXQoZSxxaSl9fSxaaT1PYmplY3QuY3JlYXRlKG51bGwpLEdpPVtKaSxXaV0sWWk9e2NyZWF0ZTpidCx1cGRhdGU6YnR9LFFpPXtjcmVhdGU6d3QsdXBkYXRlOnd0fSxYaT17Y3JlYXRlOkN0LHVwZGF0ZTpDdH0sZW89e2NyZWF0ZTp4dCx1cGRhdGU6eHR9LHRvPS9eLS0vLG5vPWZ1bmN0aW9uKGUsdCxuKXt0by50ZXN0KHQpP2Uuc3R5bGUuc2V0UHJvcGVydHkodCxuKTplLnN0eWxlW2lvKHQpXT1ufSxybz1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0saW89YShmdW5jdGlvbihlKXtpZihPaT1PaXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPUxyKGUpLFwiZmlsdGVyXCIhPT1lJiZlIGluIE9pLnN0eWxlKXJldHVybiBlO2Zvcih2YXIgdD1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj0wO248cm8ubGVuZ3RoO24rKyl7dmFyIHI9cm9bbl0rdDtpZihyIGluIE9pLnN0eWxlKXJldHVybiByfX0pLG9vPXtjcmVhdGU6a3QsdXBkYXRlOmt0fSxhbz1VciYmIUpyLHNvPVwidHJhbnNpdGlvblwiLGNvPVwiYW5pbWF0aW9uXCIsdW89XCJ0cmFuc2l0aW9uXCIsbG89XCJ0cmFuc2l0aW9uZW5kXCIsZm89XCJhbmltYXRpb25cIixwbz1cImFuaW1hdGlvbmVuZFwiO2FvJiYodm9pZCAwPT09d2luZG93Lm9udHJhbnNpdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCYmKHVvPVwiV2Via2l0VHJhbnNpdGlvblwiLGxvPVwid2Via2l0VHJhbnNpdGlvbkVuZFwiKSx2b2lkIDA9PT13aW5kb3cub25hbmltYXRpb25lbmQmJnZvaWQgMCE9PXdpbmRvdy5vbndlYmtpdGFuaW1hdGlvbmVuZCYmKGZvPVwiV2Via2l0QW5pbWF0aW9uXCIscG89XCJ3ZWJraXRBbmltYXRpb25FbmRcIikpO3ZhciB2bz1VciYmd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCxobz0vXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvLG1vPWEoZnVuY3Rpb24oZSl7cmV0dXJue2VudGVyQ2xhc3M6ZStcIi1lbnRlclwiLGxlYXZlQ2xhc3M6ZStcIi1sZWF2ZVwiLGFwcGVhckNsYXNzOmUrXCItZW50ZXJcIixlbnRlckFjdGl2ZUNsYXNzOmUrXCItZW50ZXItYWN0aXZlXCIsbGVhdmVBY3RpdmVDbGFzczplK1wiLWxlYXZlLWFjdGl2ZVwiLGFwcGVhckFjdGl2ZUNsYXNzOmUrXCItZW50ZXItYWN0aXZlXCJ9fSksZ289VXI/e2NyZWF0ZTpmdW5jdGlvbihlLHQpe3QuZGF0YS5zaG93fHxNdCh0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7ZS5kYXRhLnNob3c/dCgpOlB0KGUsdCl9fTp7fSx5bz1bWWksUWksWGksZW8sb28sZ29dLF9vPXlvLmNvbmNhdChHaSksYm89aHQoe25vZGVPcHM6VmksbW9kdWxlczpfb30pO0pyJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5hY3RpdmVFbGVtZW50O2UmJmUudm1vZGVsJiZWdChlLFwiaW5wdXRcIil9KTt2YXIgJG89e2luc2VydGVkOmZ1bmN0aW9uKGUsdCxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe3ZhciByPWZ1bmN0aW9uKCl7QnQoZSx0LG4uY29udGV4dCl9O3IoKSwoVnJ8fHFyKSYmc2V0VGltZW91dChyLDApfWVsc2VcInRleHRhcmVhXCIhPT1uLnRhZyYmXCJ0ZXh0XCIhPT1lLnR5cGV8fHQubW9kaWZpZXJzLmxhenl8fChLcnx8KGUuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uc3RhcnRcIixVdCksZS5hZGRFdmVudExpc3RlbmVyKFwiY29tcG9zaXRpb25lbmRcIix6dCkpLEpyJiYoZS52bW9kZWw9ITApKX0sY29tcG9uZW50VXBkYXRlZDpmdW5jdGlvbihlLHQsbil7aWYoXCJzZWxlY3RcIj09PW4udGFnKXtCdChlLHQsbi5jb250ZXh0KTt2YXIgcj1lLm11bHRpcGxlP3QudmFsdWUuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gRnQodCxlLm9wdGlvbnMpfSk6dC52YWx1ZSE9PXQub2xkVmFsdWUmJkZ0KHQudmFsdWUsZS5vcHRpb25zKTtyJiZWdChlLFwiY2hhbmdlXCIpfX19LHdvPXtiaW5kOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10LnZhbHVlO249SnQobik7dmFyIGk9bi5kYXRhJiZuLmRhdGEudHJhbnNpdGlvbjtyJiZpJiYhSnImJk10KG4pO3ZhciBvPVwibm9uZVwiPT09ZS5zdHlsZS5kaXNwbGF5P1wiXCI6ZS5zdHlsZS5kaXNwbGF5O2Uuc3R5bGUuZGlzcGxheT1yP286XCJub25lXCIsZS5fX3ZPcmlnaW5hbERpc3BsYXk9b30sdXBkYXRlOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10LnZhbHVlLGk9dC5vbGRWYWx1ZTtpZihyIT09aSl7bj1KdChuKTt2YXIgbz1uLmRhdGEmJm4uZGF0YS50cmFuc2l0aW9uO28mJiFKcj9yPyhNdChuKSxlLnN0eWxlLmRpc3BsYXk9ZS5fX3ZPcmlnaW5hbERpc3BsYXkpOlB0KG4sZnVuY3Rpb24oKXtlLnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KTplLnN0eWxlLmRpc3BsYXk9cj9lLl9fdk9yaWdpbmFsRGlzcGxheTpcIm5vbmVcIn19fSxDbz17bW9kZWw6JG8sc2hvdzp3b30seG89e25hbWU6U3RyaW5nLGFwcGVhcjpCb29sZWFuLGNzczpCb29sZWFuLG1vZGU6U3RyaW5nLHR5cGU6U3RyaW5nLGVudGVyQ2xhc3M6U3RyaW5nLGxlYXZlQ2xhc3M6U3RyaW5nLGVudGVyQWN0aXZlQ2xhc3M6U3RyaW5nLGxlYXZlQWN0aXZlQ2xhc3M6U3RyaW5nLGFwcGVhckNsYXNzOlN0cmluZyxhcHBlYXJBY3RpdmVDbGFzczpTdHJpbmd9LGtvPXtuYW1lOlwidHJhbnNpdGlvblwiLHByb3BzOnhvLGFic3RyYWN0OiEwLHJlbmRlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzLG49dGhpcy4kc2xvdHMuZGVmYXVsdDtpZihuJiYobj1uLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS50YWd9KSxuLmxlbmd0aCkpe3ZhciByPXRoaXMubW9kZSxpPW5bMF07aWYoWnQodGhpcy4kdm5vZGUpKXJldHVybiBpO3ZhciBvPXF0KGkpO2lmKCFvKXJldHVybiBpO2lmKHRoaXMuX2xlYXZpbmcpcmV0dXJuIFd0KGUsaSk7dmFyIGE9by5rZXk9bnVsbD09by5rZXl8fG8uaXNTdGF0aWM/XCJfX3ZcIisoby50YWcrdGhpcy5fdWlkKStcIl9fXCI6by5rZXkscz0oby5kYXRhfHwoby5kYXRhPXt9KSkudHJhbnNpdGlvbj1LdCh0aGlzKSxjPXRoaXMuX3Zub2RlLGw9cXQoYyk7aWYoby5kYXRhLmRpcmVjdGl2ZXMmJm8uZGF0YS5kaXJlY3RpdmVzLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuXCJzaG93XCI9PT1lLm5hbWV9KSYmKG8uZGF0YS5zaG93PSEwKSxsJiZsLmRhdGEmJmwua2V5IT09YSl7dmFyIGY9bC5kYXRhLnRyYW5zaXRpb249dSh7fSxzKTtpZihcIm91dC1pblwiPT09cilyZXR1cm4gdGhpcy5fbGVhdmluZz0hMCxLKGYsXCJhZnRlckxlYXZlXCIsZnVuY3Rpb24oKXt0Ll9sZWF2aW5nPSExLHQuJGZvcmNlVXBkYXRlKCl9LGEpLFd0KGUsaSk7aWYoXCJpbi1vdXRcIj09PXIpe3ZhciBkLHA9ZnVuY3Rpb24oKXtkKCl9O0socyxcImFmdGVyRW50ZXJcIixwLGEpLEsocyxcImVudGVyQ2FuY2VsbGVkXCIscCxhKSxLKGYsXCJkZWxheUxlYXZlXCIsZnVuY3Rpb24oZSl7ZD1lfSxhKX19cmV0dXJuIGl9fX0sQW89dSh7dGFnOlN0cmluZyxtb3ZlQ2xhc3M6U3RyaW5nfSx4byk7ZGVsZXRlIEFvLm1vZGU7dmFyIE9vPXtwcm9wczpBbyxyZW5kZXI6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMudGFnfHx0aGlzLiR2bm9kZS5kYXRhLnRhZ3x8XCJzcGFuXCIsbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9dGhpcy5wcmV2Q2hpbGRyZW49dGhpcy5jaGlsZHJlbixpPXRoaXMuJHNsb3RzLmRlZmF1bHR8fFtdLG89dGhpcy5jaGlsZHJlbj1bXSxhPUt0KHRoaXMpLHM9MDtzPGkubGVuZ3RoO3MrKyl7dmFyIGM9aVtzXTtjLnRhZyYmbnVsbCE9Yy5rZXkmJjAhPT1TdHJpbmcoYy5rZXkpLmluZGV4T2YoXCJfX3ZsaXN0XCIpJiYoby5wdXNoKGMpLG5bYy5rZXldPWMsKGMuZGF0YXx8KGMuZGF0YT17fSkpLnRyYW5zaXRpb249YSl9aWYocil7Zm9yKHZhciB1PVtdLGw9W10sZj0wO2Y8ci5sZW5ndGg7ZisrKXt2YXIgZD1yW2ZdO2QuZGF0YS50cmFuc2l0aW9uPWEsZC5kYXRhLnBvcz1kLmVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuW2Qua2V5XT91LnB1c2goZCk6bC5wdXNoKGQpfXRoaXMua2VwdD1lKHQsbnVsbCx1KSx0aGlzLnJlbW92ZWQ9bH1yZXR1cm4gZSh0LG51bGwsbyl9LGJlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuX19wYXRjaF9fKHRoaXMuX3Zub2RlLHRoaXMua2VwdCwhMSwhMCksdGhpcy5fdm5vZGU9dGhpcy5rZXB0fSx1cGRhdGVkOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcmV2Q2hpbGRyZW4sdD10aGlzLm1vdmVDbGFzc3x8dGhpcy5uYW1lK1wiLW1vdmVcIjtpZihlLmxlbmd0aCYmdGhpcy5oYXNNb3ZlKGVbMF0uZWxtLHQpKXtlLmZvckVhY2goR3QpLGUuZm9yRWFjaChZdCksZS5mb3JFYWNoKFF0KTtkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtlLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZS5kYXRhLm1vdmVkKXt2YXIgbj1lLmVsbSxyPW4uc3R5bGU7U3Qobix0KSxyLnRyYW5zZm9ybT1yLldlYmtpdFRyYW5zZm9ybT1yLnRyYW5zaXRpb25EdXJhdGlvbj1cIlwiLG4uYWRkRXZlbnRMaXN0ZW5lcihsbyxuLl9tb3ZlQ2I9ZnVuY3Rpb24gZShyKXtyJiYhL3RyYW5zZm9ybSQvLnRlc3Qoci5wcm9wZXJ0eU5hbWUpfHwobi5yZW1vdmVFdmVudExpc3RlbmVyKGxvLGUpLG4uX21vdmVDYj1udWxsLEV0KG4sdCkpfSl9fSl9fSxtZXRob2RzOntoYXNNb3ZlOmZ1bmN0aW9uKGUsdCl7aWYoIWFvKXJldHVybiExO2lmKG51bGwhPXRoaXMuX2hhc01vdmUpcmV0dXJuIHRoaXMuX2hhc01vdmU7U3QoZSx0KTt2YXIgbj1MdChlKTtyZXR1cm4gRXQoZSx0KSx0aGlzLl9oYXNNb3ZlPW4uaGFzVHJhbnNmb3JtfX19LFRvPXtUcmFuc2l0aW9uOmtvLFRyYW5zaXRpb25Hcm91cDpPb307QWUuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQ9WmUsQWUuY29uZmlnLmlzUmVzZXJ2ZWRUYWc9VWksQWUuY29uZmlnLmdldFRhZ05hbWVzcGFjZT1XZSxBZS5jb25maWcubXVzdFVzZVByb3A9VGksdShBZS5vcHRpb25zLmRpcmVjdGl2ZXMsQ28pLHUoQWUub3B0aW9ucy5jb21wb25lbnRzLFRvKSxBZS5wcm90b3R5cGUuX19wYXRjaF9fPUJyLl9pc1NlcnZlcj9wOmJvLEFlLnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1lJiYhQnIuX2lzU2VydmVyP0dlKGUpOnZvaWQgMCx0aGlzLl9tb3VudChlLHQpfSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7QnIuZGV2dG9vbHMmJlpyJiZaci5lbWl0KFwiaW5pdFwiLEFlKX0sMCk7dmFyIFNvPSEhVXImJlh0KFwiXFxuXCIsXCImIzEwO1wiKSxFbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGpvPS8oW15cXHNcIic8PlxcLz1dKykvLExvPS8oPzo9KS8sTm89Wy9cIihbXlwiXSopXCIrLy5zb3VyY2UsLycoW14nXSopJysvLnNvdXJjZSwvKFteXFxzXCInPTw+YF0rKS8uc291cmNlXSxEbz1uZXcgUmVnRXhwKFwiXlxcXFxzKlwiK2pvLnNvdXJjZStcIig/OlxcXFxzKihcIitMby5zb3VyY2UrXCIpXFxcXHMqKD86XCIrTm8uam9pbihcInxcIikrXCIpKT9cIiksTW89XCJbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSpcIixQbz1cIigoPzpcIitNbytcIlxcXFw6KT9cIitNbytcIilcIixSbz1uZXcgUmVnRXhwKFwiXjxcIitQbyksSW89L15cXHMqKFxcLz8pPi8sQm89bmV3IFJlZ0V4cChcIl48XFxcXC9cIitQbytcIltePl0qPlwiKSxGbz0vXjwhRE9DVFlQRSBbXj5dKz4vaSxIbz0vXjwhLS0vLFVvPS9ePCFcXFsvLHpvPSExO1wieFwiLnJlcGxhY2UoL3goLik/L2csZnVuY3Rpb24oZSx0KXt6bz1cIlwiPT09dH0pO3ZhciBWbyxKbyxxbyxLbyxXbyxabyxHbyxZbyxRbyxYbyxlYSx0YSxuYSxyYSxpYSxvYSxhYSxzYSxjYSx1YSxsYSxmYSxkYSxwYSx2YT1uKFwic2NyaXB0LHN0eWxlXCIsITApLGhhPWZ1bmN0aW9uKGUpe3JldHVyblwibGFuZ1wiPT09ZS5uYW1lJiZcImh0bWxcIiE9PWUudmFsdWV9LG1hPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hIXZhKGUpfHwhKCF0fHxcInRlbXBsYXRlXCIhPT1lfHwxIT09bi5sZW5ndGh8fCFuWzBdLmF0dHJzLnNvbWUoaGEpKX0sZ2E9e30seWE9LyZsdDsvZyxfYT0vJmd0Oy9nLGJhPS8mIzEwOy9nLCRhPS8mYW1wOy9nLHdhPS8mcXVvdDsvZyxDYT0vXFx7XFx7KCg/Oi58XFxuKSs/KVxcfVxcfS9nLHhhPS9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2csa2E9YShmdW5jdGlvbihlKXt2YXIgdD1lWzBdLnJlcGxhY2UoeGEsXCJcXFxcJCZcIiksbj1lWzFdLnJlcGxhY2UoeGEsXCJcXFxcJCZcIik7XG5yZXR1cm4gbmV3IFJlZ0V4cCh0K1wiKCg/Oi58XFxcXG4pKz8pXCIrbixcImdcIil9KSxBYT0vXnYtfF5AfF46LyxPYT0vKC4qPylcXHMrKD86aW58b2YpXFxzKyguKikvLFRhPS9cXCgoW14sXSopLChbXixdKikoPzosKFteLF0qKSk/XFwpLyxTYT0vXjp8XnYtYmluZDovLEVhPS9eQHxedi1vbjovLGphPS86KC4qKSQvLExhPS9cXC5bXi5dKy9nLE5hPS9cXHUyMDI4fFxcdTIwMjkvZyxEYT1hKGVuKSxNYT0vXnhtbG5zOk5TXFxkKy8sUGE9L15OU1xcZCs6LyxSYT1hKERuKSxJYT0vXlxccypbQS1aYS16XyRdW1xcdyRdKig/OlxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXXxcXFtcIi4qP1wiXXxcXFtcXGQrXXxcXFtbQS1aYS16XyRdW1xcdyRdKl0pKlxccyokLyxCYT17ZXNjOjI3LHRhYjo5LGVudGVyOjEzLHNwYWNlOjMyLHVwOjM4LGxlZnQ6MzcscmlnaHQ6MzksZG93bjo0MCxkZWxldGU6WzgsNDZdfSxGYT17c3RvcDpcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcIixwcmV2ZW50OlwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XCIsc2VsZjpcImlmKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KXJldHVybjtcIn0sSGE9e2JpbmQ6em4sY2xvYWs6cH0sVWE9KG5ldyBSZWdFeHAoXCJcXFxcYlwiK1wiZG8saWYsZm9yLGxldCxuZXcsdHJ5LHZhcixjYXNlLGVsc2Usd2l0aCxhd2FpdCxicmVhayxjYXRjaCxjbGFzcyxjb25zdCxzdXBlcix0aHJvdyx3aGlsZSx5aWVsZCxkZWxldGUsZXhwb3J0LGltcG9ydCxyZXR1cm4sc3dpdGNoLGRlZmF1bHQsZXh0ZW5kcyxmaW5hbGx5LGNvbnRpbnVlLGRlYnVnZ2VyLGZ1bmN0aW9uLGFyZ3VtZW50c1wiLnNwbGl0KFwiLFwiKS5qb2luKFwiXFxcXGJ8XFxcXGJcIikrXCJcXFxcYlwiKSx7c3RhdGljS2V5czpbXCJzdGF0aWNDbGFzc1wiXSx0cmFuc2Zvcm1Ob2RlOmFyLGdlbkRhdGE6c3J9KSx6YT17dHJhbnNmb3JtTm9kZTpjcixnZW5EYXRhOnVyfSxWYT1bVWEsemFdLEphPXttb2RlbDptcix0ZXh0OndyLGh0bWw6Q3J9LHFhPU9iamVjdC5jcmVhdGUobnVsbCksS2E9e2lzSUU6VnIsZXhwZWN0SFRNTDohMCxtb2R1bGVzOlZhLHN0YXRpY0tleXM6dihWYSksZGlyZWN0aXZlczpKYSxpc1Jlc2VydmVkVGFnOlVpLGlzVW5hcnlUYWc6UmksbXVzdFVzZVByb3A6VGksZ2V0VGFnTmFtZXNwYWNlOldlLGlzUHJlVGFnOkhpfSxXYT1hKGZ1bmN0aW9uKGUpe3ZhciB0PUdlKGUpO3JldHVybiB0JiZ0LmlubmVySFRNTH0pLFphPUFlLnByb3RvdHlwZS4kbW91bnQ7cmV0dXJuIEFlLnByb3RvdHlwZS4kbW91bnQ9ZnVuY3Rpb24oZSx0KXtpZihlPWUmJkdlKGUpLGU9PT1kb2N1bWVudC5ib2R5fHxlPT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KXJldHVybiB0aGlzO3ZhciBuPXRoaXMuJG9wdGlvbnM7aWYoIW4ucmVuZGVyKXt2YXIgcj1uLnRlbXBsYXRlO2lmKHIpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpXCIjXCI9PT1yLmNoYXJBdCgwKSYmKHI9V2EocikpO2Vsc2V7aWYoIXIubm9kZVR5cGUpcmV0dXJuIHRoaXM7cj1yLmlubmVySFRNTH1lbHNlIGUmJihyPU9yKGUpKTtpZihyKXt2YXIgaT1rcihyLHt3YXJuOiRpLHNob3VsZERlY29kZU5ld2xpbmVzOlNvLGRlbGltaXRlcnM6bi5kZWxpbWl0ZXJzfSx0aGlzKSxvPWkucmVuZGVyLGE9aS5zdGF0aWNSZW5kZXJGbnM7bi5yZW5kZXI9byxuLnN0YXRpY1JlbmRlckZucz1hfX1yZXR1cm4gWmEuY2FsbCh0aGlzLGUsdCl9LEFlLmNvbXBpbGU9a3IsQWV9KTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIEFqYXhDbGllbnRcbiAqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIEBhdXRob3IgVG9tIE1pc2F3YSAocml2ZXJzdW4ub3JnQGdtYWlsLmNvbSxodHRwczovL2dpdGh1Yi5jb20vcml2ZXJzdW4pXG4gKi9cbmltcG9ydCB7U0FOSVRJWkVfVVNFUl9JTlBVVF9GT1JfU0VORElOR19WSUFfSFRUUF9NRVRIT0R9IGZyb20gXCIuL2NoYXQtdXgtZGVmXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhDbGllbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgYWpheChvcHRpb25zKSB7XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLl9jcmVhdGVVcmwob3B0aW9ucyk7XG4gICAgY29uc3QgbWV0aG9kID0gb3B0aW9ucy50eXBlO1xuICAgIGNvbnN0IGRhdGFUeXBlID0gb3B0aW9ucy5kYXRhVHlwZTtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG5cbiAgICBsZXQgcG9zdEJvZHkgPSBudWxsO1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG5cbiAgICAgIHBvc3RCb2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb25wJykge1xuICAgICAgICAvL1BPU1QgYW5kIGpzb25wIHNwZWNpZmllZFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHR5cGU6J1BPU1QnIGFuZCAnZGF0YVR5cGU6anNvbnAnIGFyZSBzcGVjaWZpZWQgdG9nZXRoZXIuXG4gICAgICAgICAgICAgICAgJ1BPU1QnIGFuZCAnanNvbnAnIGNhbiBub3QgYmUgc3BlY2lmaWVkIHRvZ2V0aGVyYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhlYWRlcnMgJiYgZGF0YVR5cGUgPT09ICdqc29ucCcpIHtcbiAgICAgIC8vaHR0cC1oZWFkZXJzIGFuZCBqc29ucCBzcGVjaWZpZWRcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2hlYWRlcnMnIGFuZCAnZGF0YVR5cGU6anNvbnAnIGNhbiBub3QgYmUgc3BlY2lmaWVkIHRvZ2V0aGVyLlxuICAgICAgICAgICBIdHRwIGhlYWRlcnMgY2Fubm90IGJlIHNlbnQgd2hlbiB1c2luZyBqc29ucC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXFQYXJhbSA9IHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBib2R5OiBwb3N0Qm9keSxcbiAgICB9O1xuXG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIHJlcVBhcmFtLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIH1cblxuICAgIGlmIChkYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlSnNvbihyZXFQYXJhbSk7XG4gICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ2pzb25wJykge1xuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUpzb25wKHJlcVBhcmFtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhVHlwZSBtdXN0IGJlICdqc29uJyBvciAnanNvbnAnYCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUpzb24ocmVxUGFyYW0pIHtcbiAgICBjb25zdCBhc3luY1Jlc3VsdCA9IG5ldyBBamF4UmVzdWx0KCk7XG4gICAgY29uc3QgZmV0Y2hQYXJhbSA9IHtcbiAgICAgIG1ldGhvZDogcmVxUGFyYW0ubWV0aG9kLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAvL2NyZWRlbnRpYWxzOm51bGwsLy8gJ2luY2x1ZGUnLFxuICAgICAgLy9yZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICB9O1xuXG4gICAgLy9wb3B1bGF0ZSBjcmVkZW50aWFsc1xuICAgIGlmIChyZXFQYXJhbS5jcmVkZW50aWFscykge1xuICAgICAgZmV0Y2hQYXJhbS5jcmVkZW50aWFscyA9IHJlcVBhcmFtLmNyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vcG9wdWxhdGUgaGVhZGVyc1xuICAgIGlmIChyZXFQYXJhbS5oZWFkZXJzKSB7XG4gICAgICBmZXRjaFBhcmFtLmhlYWRlcnMgPSByZXFQYXJhbS5oZWFkZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaFBhcmFtLmhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vcG9wdWxhdGUgYm9keVxuICAgIGlmIChyZXFQYXJhbS5ib2R5KSB7XG4gICAgICBmZXRjaFBhcmFtLmJvZHkgPSByZXFQYXJhbS5ib2R5O1xuICAgIH1cblxuICAgIC8vZXhlY3V0ZSBmZXRjaFxuICAgIGZldGNoKHJlcVBhcmFtLnVybCwgZmV0Y2hQYXJhbSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnN0IGVycm9yT2JqID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgICBhc3luY1Jlc3VsdC5fZmFpbChlcnJvck9iaik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGFzeW5jUmVzdWx0Ll9zdWNjZXNzKGpzb24pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zdCBlcnJvck9iaiA9IGVycjtcbiAgICAgICAgYXN5bmNSZXN1bHQuX2ZhaWwoZXJyb3JPYmopO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGFzeW5jUmVzdWx0O1xuXG4gIH1cblxuICBfaGFuZGxlSnNvbnAocmVxUGFyYW0pIHtcbiAgICBjb25zdCBhc3luY1Jlc3VsdCA9IG5ldyBBamF4UmVzdWx0KCk7XG4gICAgY29uc3Qgc2NyaXB0RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29uc3QgY2FsbGJhY2tGdW5jTmFtZSA9IGBjaGF0dXhfJHt0aGlzLl9jcmVhdGVVVUlEKCl9YDtcblxuICAgIHNjcmlwdEVsZS5zcmMgPSBgJHtyZXFQYXJhbS51cmx9JmNhbGxiYWNrPSR7Y2FsbGJhY2tGdW5jTmFtZX1gO1xuICAgIHNjcmlwdEVsZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnJvck9iaikgPT4ge1xuICAgICAgYXN5bmNSZXN1bHQuX2ZhaWwoZXJyb3JPYmopO1xuICAgIH0pO1xuXG4gICAgLy9nbG9iYWwgb2JqZWN0XG4gICAgd2luZG93W2NhbGxiYWNrRnVuY05hbWVdID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgZGVsZXRlIHdpbmRvd1tjYWxsYmFja0Z1bmNOYW1lXTtcbiAgICAgIGFzeW5jUmVzdWx0Ll9zdWNjZXNzKHJlcyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHBhcmVudEVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJykgPyBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIDogZG9jdW1lbnQuYm9keTtcblxuICAgIHBhcmVudEVsZS5hcHBlbmRDaGlsZChzY3JpcHRFbGUpO1xuXG4gICAgcmV0dXJuIGFzeW5jUmVzdWx0O1xuXG4gIH1cblxuICBfY3JlYXRlVXJsKG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdQT1NUJykge1xuICAgICAgLy9QT1NUXG4gICAgICByZXR1cm4gb3B0aW9ucy51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vR0VUXG4gICAgICBsZXQgdXJsID0gb3B0aW9ucy51cmw7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICAgIHVybCA9IHVybCArICc/JztcbiAgICAgICAgZm9yIChsZXQgcGFyYW1LZXkgb2YgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKSkge1xuICAgICAgICAgIGNvbnN0IHBhcmFtVmFsID0gb3B0aW9ucy5kYXRhW3BhcmFtS2V5XTtcbiAgICAgICAgICBjb25zdCBfZmluYWxQYXJhbVZhbCA9IFNBTklUSVpFX1VTRVJfSU5QVVRfRk9SX1NFTkRJTkdfVklBX0hUVFBfTUVUSE9EID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtVmFsKSA6IHBhcmFtVmFsO1xuICAgICAgICAgIHVybCArPSBgJHtwYXJhbUtleX09JHtfZmluYWxQYXJhbVZhbH0mYDtcbiAgICAgICAgfVxuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZVVVSUQoKSB7XG4gICAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB1dWlkID0gJ3h4eHh4eHh4X3h4eHhfNHh4eF95eHh4X3h4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgY29uc3QgciA9IChkYXRlVGltZSArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG4gICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuICAgIHJldHVybiB1dWlkO1xuICB9XG59XG5cbmNsYXNzIEFqYXhSZXN1bHQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3N1Y2Nlc3NGdW5jID0gKCkgPT4ge1xuICAgIH07XG4gICAgdGhpcy5fZmFpbEZ1bmMgPSAoKSA9PiB7XG4gICAgfTtcbiAgfVxuXG4gIGRvbmUoY2FsbGJhY2tGdW5jKSB7XG4gICAgdGhpcy5fc3VjY2Vzc0Z1bmMgPSBjYWxsYmFja0Z1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmYWlsKGNhbGxiYWNrRnVuYykge1xuICAgIHRoaXMuX2ZhaWxGdW5jID0gY2FsbGJhY2tGdW5jO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3N1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICBpZiAodGhpcy5fc3VjY2Vzc0Z1bmMpIHtcbiAgICAgIHRoaXMuX3N1Y2Nlc3NGdW5jKHJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBfZmFpbChyZXNwb25zZSkge1xuICAgIGlmICh0aGlzLl9mYWlsRnVuYykge1xuICAgICAgdGhpcy5fZmFpbEZ1bmMocmVzcG9uc2UpO1xuICAgIH1cbiAgfVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib3R1aS10aGVtZS1yaXZlcnN1bi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBBamF4Q2xpZW50IGZyb20gJy4vYWpheC1jbGllbnQuanMnO1xuXG4vKipcbiAqIENoYXRDbGllbnRcbiAqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIEBhdXRob3IgVG9tIE1pc2F3YSAocml2ZXJzdW4ub3JnQGdtYWlsLmNvbSxodHRwczovL2dpdGh1Yi5jb20vcml2ZXJzdW4pXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRDbGllbnQge1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICB0aGlzLmVuZHBvaW50ID0gb3B0cy5lbmRwb2ludDtcblxuICAgIHRoaXMubWV0aG9kID0gJ0dFVCc7XG4gICAgaWYgKG9wdHMubWV0aG9kKSB7XG4gICAgICB0aGlzLm1ldGhvZCA9IG9wdHMubWV0aG9kO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YVR5cGUgPSAnanNvbic7XG4gICAgaWYgKG9wdHMuZGF0YVR5cGUpIHtcbiAgICAgIHRoaXMuZGF0YVR5cGUgPSBvcHRzLmRhdGFUeXBlO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JSZXNwb25zZSA9IHtcbiAgICAgIG91dHB1dDogW1xuICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ0FuIGVycm9yIG9jY3VycmVkLid9XG4gICAgICBdXG4gICAgfTtcblxuICAgIGlmIChvcHRzLmVycm9yUmVzcG9uc2UpIHtcbiAgICAgIHRoaXMuZXJyb3JSZXNwb25zZSA9IG9wdHMuZXJyb3JSZXNwb25zZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBvcHRzLmhlYWRlcnM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMucGFyYW1zKSB7XG4gICAgICB0aGlzLnBhcmFtcyA9IG9wdHMucGFyYW1zO1xuICAgIH1cbiAgfVxuXG4gIHNlbmRNc2dUb0NoYXRTZXJ2ZXIoY2FsbGJhY2tGdW5jKSB7XG5cbiAgICBjb25zdCBhYyA9IG5ldyBBamF4Q2xpZW50KCk7XG5cbiAgICBsZXQgcGFyYW1zO1xuXG4gICAgaWYgKHRoaXMucGFyYW1zKSB7XG4gICAgICBwYXJhbXMgPSB0aGlzLnBhcmFtcztcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0ge307XG4gICAgfVxuXG4gICAgYWMuYWpheCh7XG4gICAgICB0eXBlOiB0aGlzLm1ldGhvZCxcbiAgICAgIHVybDogdGhpcy5lbmRwb2ludCxcbiAgICAgIGRhdGFUeXBlOiB0aGlzLmRhdGFUeXBlLFxuICAgICAgZGF0YTogcGFyYW1zLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzXG4gICAgfSkuZG9uZShyZXNwb25zZSA9PiB7XG4gICAgICBjYWxsYmFja0Z1bmMocmVzcG9uc2UpO1xuICAgIH0pLmZhaWwoKGVycikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IHRoaXMuZXJyb3JSZXNwb25zZTtcbiAgICAgIGNhbGxiYWNrRnVuYyhlcnJvclJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBKU0ZyYW1lIH0gZnJvbSAnanNmcmFtZS5qcyc7XG5pbXBvcnQgeyBpc01vYmlsZURldmljZSB9IGZyb20gJy4vY2hhdC11eC11dGlsLmpzJztcblxuLyoqXG4gKiBUbyBzaG93IGNoYXRXaW5kb3cvY2hhdEFyZWEgYW5kIHN0YXJ0L2VuZCBidXR0b24gZm9yIGNoYXQgaW50ZXJmYWNlXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBAYXV0aG9yIFRvbSBNaXNhd2EgKHJpdmVyc3VuLm9yZ0BnbWFpbC5jb20saHR0cHM6Ly9naXRodWIuY29tL3JpdmVyc3VuKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0RnJhbWUge1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcblxuICAgIHRoaXMuSUNPTl9DUk9TU01BUksgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+JztcbiAgICB0aGlzLklDT05fQ09NTUVOVCA9ICc8aSBjbGFzcz1cImZhcyBmYS1jb21tZW50LWFsdFwiPjwvaT4nO1xuXG5cbiAgICAvL1NldHVwIGluaXRpYWwgcGFyYW1ldGVyc1tiZWdpbl1cbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlck1vZGUgPSB0aGlzLmlzTW9iaWxlRGV2aWNlKCkgPyAnbW9iaWxlJyA6ICdwYyc7XG5cbiAgICBpZiAob3B0cy5yZW5kZXJNb2RlKSB7XG4gICAgICBpZiAob3B0cy5yZW5kZXJNb2RlID09PSAnYXV0bycpIHtcbiAgICAgICAgLy9zZXQgcmVuZGVyIG1vZGUgYXMtaXMuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2ZvcmNlIHNldHRpbmcgc3BlY2lmaWVkIG1vZGVcbiAgICAgICAgdGhpcy5yZW5kZXJNb2RlID0gb3B0cy5yZW5kZXJNb2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMud2luZG93UGFyYW0gPSB7fTtcblxuICAgIGlmIChvcHRzLndpbmRvdykge1xuICAgICAgdGhpcy53aW5kb3dQYXJhbSA9IG9wdHMud2luZG93O1xuICAgIH1cblxuXG4gICAgLy9TZXR1cCBpbml0aWFsIHBhcmFtZXRlcnNbZW5kXVxuICAgIHRoaXMuanNGcmFtZSA9IG5ldyBKU0ZyYW1lKHtcbiAgICAgIGhvcml6b250YWxBbGlnbjogJ3JpZ2h0JyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgIH0pO1xuXG5cbiAgICB0aGlzLmZyYW1lUGFyYW0gPSB7XG4gICAgICByaWdodDogMjAsXG4gICAgICBib3R0b206IDIwLFxuICAgICAgc2l6ZTogNjAsXG4gICAgICBmb250U2l6ZTogMjUsXG4gICAgfTtcblxuXG4gICAgaWYgKG9wdHMud2FrZXVwQnV0dG9uKSB7XG4gICAgICB0aGlzLmZyYW1lUGFyYW0gPSBvcHRzLndha2V1cEJ1dHRvbjtcbiAgICB9XG5cblxuICAgIHRoaXMud2luZG93U2l6ZVBhcmFtID0ge1xuICAgICAgd2lkdGg6IDM2MCxcbiAgICAgIGhlaWdodDogNjAwLFxuICAgICAgbWluSGVpZ2h0OiAzMDAsXG4gICAgICBtaW5XaWR0aDogMjAwLFxuICAgICAgdGl0bGVIZWlnaHQ6IDQwLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy53aW5kb3dQYXJhbS5zaXplKSB7XG4gICAgICB0aGlzLndpbmRvd1NpemVQYXJhbSA9IHRoaXMud2luZG93UGFyYW0uc2l6ZTtcbiAgICB9XG5cbiAgICB0aGlzLmFwcGVhcmFuY2VQYXJhbSA9IHtcbiAgICAgIGJvcmRlcjoge1xuICAgICAgICBzaGFkb3c6ICcycHggMnB4IDEwcHggIHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICByYWRpdXM6IDYsXG4gICAgICB9LFxuICAgICAgdGl0bGVCYXI6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjNDdkNDVlJyxcbiAgICAgICAgbGVmdE1hcmdpbjogKHRoaXMud2luZG93UGFyYW0uaW5mb1VybCkgPyA0MCA6IDEwLFxuICAgICAgICBoZWlnaHQ6IHRoaXMud2luZG93U2l6ZVBhcmFtLnRpdGxlSGVpZ2h0LFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIGJ1dHRvbldpZHRoOiAzNixcbiAgICAgICAgYnV0dG9uSGVpZ2h0OiAxNixcbiAgICAgICAgYnV0dG9uQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmYTogJ2ZhcyBmYS10aW1lcycsXG4gICAgICAgICAgICBuYW1lOiAnaGlkZUJ1dHRvbicsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgYnV0dG9uc09uTGVmdDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZhOiAnZmFzIGZhLWNvbW1lbnQtYWx0JyxcbiAgICAgICAgICAgIG5hbWU6ICdpbmZvJyxcbiAgICAgICAgICAgIHZpc2libGU6ICh0aGlzLndpbmRvd1BhcmFtLmluZm9VcmwpID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmICh0aGlzLndpbmRvd1BhcmFtLmFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuYXBwZWFyYW5jZVBhcmFtID0gdGhpcy53aW5kb3dQYXJhbS5hcHBlYXJhbmNlO1xuICAgIH1cblxuXG4gICAgdGhpcy5GUkFNRV9OQU1FID0gJ2NoYXRfd2luZG93JztcbiAgICB0aGlzLkJVVFRPTl9TVEFURV9PUEVOID0gJ29wZW5fY2hhdF93aW5kb3cnO1xuICAgIHRoaXMuQlVUVE9OX1NUQVRFX1RSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG4gICAgdGhpcy5CVVRUT05fU1RBVEVfQ0xPU0UgPSAnY2xvc2VfY2hhdF93aW5kb3cnO1xuICAgIHRoaXMuQlVUVE9OX0lEID0gJ2NoYXRfd2FrZXVwJztcblxuICAgIC8vSWYgdHJ1ZSwgY2hhdCBidXR0b24gd2lsbCBkaXNhcHBlYXIgd2hlbiBvcGVuaW5nIHRoZSBjaGF0IHdpbmRvd1xuICAgIC8vSWYgZmFsc2UsY2hhdCBidXR0b24gd2lsbCBiZSBzaG93biBhcyBhIHRvZ2dsZSBidXR0b24oT1BFTi9DTE9TRSlcbiAgICB0aGlzLmJ1dHRvbk9mZldoZW5PcGVuRnJhbWUgPSBmYWxzZTtcbiAgICB0aGlzLmJ1dHRvblN0YXRlID0gbnVsbDtcblxuICAgIHRoaXMuYnV0dG9uVmFuaXNoUG9pbnQgPSB7fTtcblxuICAgIHRoaXMuZnJhbWUgPSBudWxsO1xuICAgIHRoaXMuc2hvd0NoYXRCdG4gPSBudWxsO1xuICAgIHRoaXMuY2hhdEFyZWFFbGUgPSBudWxsO1xuXG5cbiAgICAvL0VtcHR5IGltcGxlbWVudGF0aW9uIGZvciBkZWZhdWx0XG4gICAgdGhpcy5vbkNoYXRGcmFtZUNyZWF0ZSA9ICgpID0+IHtcbiAgICB9O1xuXG4gICAgdGhpcy5vbkNoYXRGcmFtZVBhdXNlID0gKCkgPT4ge1xuICAgIH07XG5cbiAgICB0aGlzLm9uQ2hhdEZyYW1lUmVzdW1lID0gKCkgPT4ge1xuICAgIH07XG5cbiAgICB0aGlzLmhvbGRlcklkID0gJyc7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBjaGF0IHN0YXJ0IGJ1dHRvblxuICAgKi9cbiAgYnVpbGRDaGF0QnV0dG9uKCkge1xuXG4gICAgY29uc3QgcCA9IHRoaXMuZnJhbWVQYXJhbTtcbiAgICBjb25zdCBidG5SaWdodCA9IHAucmlnaHQ7XG4gICAgY29uc3QgYnRuQm90dG9tID0gcC5ib3R0b207XG4gICAgY29uc3QgYnRuU2l6ZSA9IHAuc2l6ZTtcbiAgICBjb25zdCBidG5Gb250U2l6ZSA9IHAuZm9udFNpemU7XG5cbiAgICBjb25zdCBzaG93Q2hhdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuc2hvd0NoYXRCdG4gPSBzaG93Q2hhdEJ0bjtcbiAgICBzaG93Q2hhdEJ0bi5pZCA9IHRoaXMuQlVUVE9OX0lEO1xuXG4gICAgaWYgKHRoaXMucmVuZGVyTW9kZSA9PT0gJ21vYmlsZScpIHtcbiAgICAgIHNob3dDaGF0QnRuLmNsYXNzTmFtZSA9ICdjaGF0dXgtYnRuLWNoYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93Q2hhdEJ0bi5jbGFzc05hbWUgPSAnY2hhdHV4LWJ0bi1jaGF0IGNoYXR1eC1idG4tY2hhdC1wYyc7XG4gICAgfVxuXG4gICAgc2hvd0NoYXRCdG4ub25jbGljayA9IHRoaXMudG9nZ2xlQ2hhdEJ1dHRvblN0YXRlLmJpbmQodGhpcyk7XG5cblxuICAgIGNvbnN0IHN0eWxlID0gc2hvd0NoYXRCdG4uc3R5bGU7XG4gICAgc3R5bGUucmlnaHQgPSBidG5SaWdodCArICdweCc7XG4gICAgc3R5bGUuYm90dG9tID0gYnRuQm90dG9tICsgJ3B4JztcbiAgICBzdHlsZS53aWR0aCA9IGJ0blNpemUgKyAncHgnO1xuICAgIHN0eWxlLmhlaWdodCA9IHN0eWxlLndpZHRoO1xuICAgIHN0eWxlLmxpbmVIZWlnaHQgPSBzdHlsZS53aWR0aDtcbiAgICBzdHlsZS5mb250U2l6ZSA9IGJ0bkZvbnRTaXplICsgJ3B4JztcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2hvd0NoYXRCdG4pO1xuXG4gICAgLy9maXJzdCBjYWxsIGZvciBjaGF0IGJ1dHRvbiBpbml0aWFsaXphdGlvblxuICAgIHRoaXMudG9nZ2xlQ2hhdEJ1dHRvblN0YXRlKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBUb2dnbGUgY2hhdCBidXR0b24gc3RhdGVcbiAgICovXG4gIHRvZ2dsZUNoYXRCdXR0b25TdGF0ZSgpIHtcblxuICAgIGNvbnN0IHNob3dDaGF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5CVVRUT05fSUR9YCk7XG5cbiAgICBpZiAoIXRoaXMuYnV0dG9uU3RhdGUpIHtcblxuICAgICAgLy8tIGJ1dHRvblN0YXRlIG5vdCBhbHJlYWR5IHNldFxuICAgICAgc2hvd0NoYXRCdG4uaW5uZXJIVE1MID0gdGhpcy5JQ09OX0NPTU1FTlQ7XG4gICAgICB0aGlzLmJ1dHRvblN0YXRlID0gdGhpcy5CVVRUT05fU1RBVEVfT1BFTjtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5idXR0b25TdGF0ZSA9PT0gdGhpcy5CVVRUT05fU1RBVEVfT1BFTikge1xuICAgICAgLy8gLSBjdXJyZW50IGJ1dHRvblN0YXRlIGlzIE9QRU5cblxuICAgICAgLy8tIFNldCB0aGlzIHN0YXRlIHNvIHRoYXQgdHJvdWJsZSBkb2VzIG5vdCBvY2N1ciBldmVuIGlmIHRoZSB1c2VyIGhpdHMgYnV0dG9ucyByZXBlYXRlZGx5XG4gICAgICB0aGlzLmJ1dHRvblN0YXRlID0gdGhpcy5CVVRUT05fU1RBVEVfVFJBTlNJVElPTjtcblxuICAgICAgdGhpcy5zaG93KCgpID0+IHtcblxuICAgICAgICBpZiAodGhpcy5idXR0b25PZmZXaGVuT3BlbkZyYW1lICYmIHRoaXMucmVuZGVyTW9kZSA9PT0gJ3BjJykge1xuICAgICAgICAgIHRoaXMuc2V0Q2hhdEJ1dHRvblZpc2libGUoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNob3dDaGF0QnRuLmlubmVySFRNTCA9IHRoaXMuSUNPTl9DUk9TU01BUks7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1dHRvblN0YXRlID0gdGhpcy5CVVRUT05fU1RBVEVfQ0xPU0U7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5idXR0b25TdGF0ZSA9PT0gdGhpcy5CVVRUT05fU1RBVEVfVFJBTlNJVElPTikge1xuICAgICAgLy8tIE1heWJlIGNoYXQgYnV0dG9uIGlzIHByZXNzZWQgZHVyaW5nIHRoZSB0cmFuc2l0aW9uXG4gICAgICAvL0RvIG5vdGhpbmdcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuYnV0dG9uU3RhdGUgPSB0aGlzLkJVVFRPTl9TVEFURV9UUkFOU0lUSU9OO1xuXG4gICAgICB0aGlzLmhpZGUoKCkgPT4ge1xuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbk9mZldoZW5PcGVuRnJhbWUgJiYgdGhpcy5yZW5kZXJNb2RlID09PSAncGMnKSB7XG4gICAgICAgICAgdGhpcy5zZXRDaGF0QnV0dG9uVmlzaWJsZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaG93Q2hhdEJ0bi5pbm5lckhUTUwgPSB0aGlzLklDT05fQ09NTUVOVDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1dHRvblN0YXRlID0gdGhpcy5CVVRUT05fU1RBVEVfT1BFTjtcbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBDaGF0IFVJXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgc2hvdyhjYWxsYmFjaykge1xuXG4gICAgaWYgKHRoaXMucmVuZGVyTW9kZSA9PT0gJ21vYmlsZScpIHtcblxuICAgICAgLy8gb24gbW9iaWxlIGRldmljZVxuICAgICAgaWYgKHRoaXMuY2hhdEFyZWFFbGUpIHtcbiAgICAgICAgdGhpcy5jaGF0QXJlYUVsZS5jbGFzc0xpc3QucmVwbGFjZSgnY2hhdHV4LXNjcm4tb2ZmJywgJ2NoYXR1eC1zY3JuLW9uJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uQ2hhdEZyYW1lUmVzdW1lKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy9vbiBQQ1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLmpzRnJhbWUuZ2V0V2luZG93QnlOYW1lKHRoaXMuRlJBTUVfTkFNRSk7XG5cbiAgICAgIC8vT3BlbiBtaW5pbWl6ZWQgd2luZG93XG4gICAgICBmcmFtZS5jb250cm9sLmRvRGVoaWRlKHtcblxuICAgICAgICBjYWxsYmFjazogKF9mcmFtZSwgaW5mbykgPT4ge1xuXG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMub25DaGF0RnJhbWVSZXN1bWUoX2ZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgQ2hhdC1VSVxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIGhpZGUoY2FsbGJhY2spIHtcblxuICAgIGlmICh0aGlzLnJlbmRlck1vZGUgPT09ICdtb2JpbGUnKSB7XG5cbiAgICAgIC8vIG9uIG1vYmlsZSBkZXZpY2VcbiAgICAgIGlmICh0aGlzLmNoYXRBcmVhRWxlKSB7XG4gICAgICAgIHRoaXMuY2hhdEFyZWFFbGUuY2xhc3NMaXN0LnJlcGxhY2UoJ2NoYXR1eC1zY3JuLW9uJywgJ2NoYXR1eC1zY3JuLW9mZicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkNoYXRGcmFtZVBhdXNlKCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvL29uIFBDXG4gICAgICBjb25zdCBmcmFtZSA9IHRoaXMuanNGcmFtZS5nZXRXaW5kb3dCeU5hbWUodGhpcy5GUkFNRV9OQU1FKTtcblxuICAgICAgLy9PcGVuIG1pbmltaXplZCB3aW5kb3dcblxuICAgICAgZnJhbWUuY29udHJvbC5kb0hpZGUoe1xuICAgICAgICBvZmZzZXQ6IHRoaXMuYnV0dG9uVmFuaXNoUG9pbnQsXG4gICAgICAgIGFsaWduOiAnQUJTT0xVVEUnLFxuICAgICAgICBjYWxsYmFjazogKF9mcmFtZSwgaW5mbykgPT4ge1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLm9uQ2hhdEZyYW1lUGF1c2UoX2ZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgY2hhdCBidXR0b24gdmlzaWJsZSBvciBpbnZpc2libGUuXG4gICAqIEBwYXJhbSBpc1Zpc2libGVcbiAgICovXG4gIHNldENoYXRCdXR0b25WaXNpYmxlKGlzVmlzaWJsZSkge1xuICAgIGNvbnN0IGNoYXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLkJVVFRPTl9JRH1gKTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICBjaGF0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoYXR1eC1idG4tb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjaGF0dXgtYnRuLW9uJyk7XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgY2hhdCBhcmVhIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgKi9cbiAgYnVpbGRDaGF0QXJlYSgpIHtcblxuICAgIHRoaXMuY2hhdEFyZWFFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2hhdEFyZWFFbGUpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNoYXRBcmVhKCk7XG4gIH1cblxuICBpbml0aWFsaXplQ2hhdEFyZWEoKSB7XG4gICAgdGhpcy5jaGF0QXJlYUVsZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgdGhpcy5jaGF0QXJlYUVsZS5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgdGhpcy5jaGF0QXJlYUVsZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICB0aGlzLmNoYXRBcmVhRWxlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgIHRoaXMuY2hhdEFyZWFFbGUuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICB0aGlzLmNoYXRBcmVhRWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5jaGF0QXJlYUVsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRoaXMuY2hhdEFyZWFFbGUuY2xhc3NMaXN0LmFkZCgnY2hhdHV4LXNjcm4tb2ZmJyk7XG4gICAgdGhpcy5jaGF0QXJlYUVsZS5pbm5lckhUTUwgPSB0aGlzLmdldEJvdFVpSW5udGVySHRtbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaW5udGVySFRNTCBmb3IgQm90VUlcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEJvdFVpSW5udGVySHRtbCgpIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJib3R1aS1hcHAtY29udGFpbmVyXCIgaWQ9XCIke3RoaXMuaG9sZGVySWR9XCI+PGJvdC11aT48L2JvdC11aT48L2Rpdj5gO1xuICB9XG5cbiAgLyoqXG4gICAqICBCdWlsZCBjaGF0IHdpbmRvdyBmb3IgUENcbiAgICovXG4gIGJ1aWxkQ2hhdFdpbmRvdygpIHtcblxuICAgIGNvbnN0IHBhcmFtID0gdGhpcy5mcmFtZVBhcmFtO1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLndpbmRvd1NpemVQYXJhbTtcbiAgICBjb25zdCBmcm1XaWR0aCA9IHNpemUud2lkdGg7XG4gICAgY29uc3QgZnJtSGVpZ2h0ID0gc2l6ZS5oZWlnaHQ7XG4gICAgY29uc3QgZnJtSGVpZ2h0TWluID0gc2l6ZS5taW5IZWlnaHQ7XG4gICAgY29uc3QgZnJtV2lkdGhNaW4gPSBzaXplLm1pbldpZHRoO1xuICAgIGNvbnN0IGZybVRpdGxlSGVpZ2h0ID0gc2l6ZS50aXRsZUhlaWdodDtcbiAgICBjb25zdCBmcm1MZWZ0ID0gLShwYXJhbS5yaWdodCArIGZybVdpZHRoKTtcbiAgICBjb25zdCBmcm1Ub3AgPSAtKHBhcmFtLmJvdHRvbSArIHBhcmFtLnNpemUgKyBmcm1IZWlnaHQpO1xuXG4gICAgLyoqXG4gICAgICogQ29vcmRpbmF0ZShsZWZ0LHRvcCkgd2hlcmUgdGhlIHdpbmRvdyBpcyBtaW5pbXppZWRcbiAgICAgKiBAdHlwZSB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cbiAgICAgKi9cbiAgICB0aGlzLmJ1dHRvblZhbmlzaFBvaW50ID0ge1xuICAgICAgeDogZnJtTGVmdCArIGZybVdpZHRoLFxuICAgICAgeTogZnJtVG9wICsgZnJtSGVpZ2h0IC0gZnJtVGl0bGVIZWlnaHRcbiAgICB9O1xuXG4gICAgLy9DcmVhdGUgY2hhdCB3aW5kb3dcbiAgICB0aGlzLmZyYW1lID0gdGhpcy5qc0ZyYW1lLmNyZWF0ZSh7XG4gICAgICBuYW1lOiB0aGlzLkZSQU1FX05BTUUsXG4gICAgICB0aXRsZTogdGhpcy53aW5kb3dQYXJhbS50aXRsZSxcbiAgICAgIGxlZnQ6IGZybUxlZnQsXG4gICAgICB0b3A6IGZybVRvcCxcbiAgICAgIHdpZHRoOiBmcm1XaWR0aCxcbiAgICAgIGhlaWdodDogZnJtSGVpZ2h0LFxuICAgICAgbWluV2lkdGg6IGZybVdpZHRoTWluLFxuICAgICAgbWluSGVpZ2h0OiBmcm1IZWlnaHRNaW4sXG4gICAgICBhcHBlYXJhbmNlTmFtZTogJ21hdGVyaWFsJyxcbiAgICAgIGFwcGVhcmFuY2VQYXJhbTogdGhpcy5hcHBlYXJhbmNlUGFyYW0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEuMCknLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nXG4gICAgICB9LFxuICAgICAgaHRtbDogJycsLy8gJ0NoYXQgVUkgSGVyZSdcbiAgICAgIC8vdXJsOiAvLyBDaGF0IFVSTCBoZXJlXG4gICAgfSk7XG5cbiAgICAvL0VuYWJsZSBoZWxwZXIgdG8gYWN0IG9uIHdpbmRvdydzIGNvbW1vbiBvcGVyYXRpb25zKG1heGltaXphdGlvbi9taW5pbWl6YXRpb24gYW5kIHNvbWV0aGluZylcbiAgICB0aGlzLmZyYW1lLnNldENvbnRyb2woe1xuICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDIwMCxcbiAgICB9KTtcblxuICAgIC8vU2V0IGNsaWNrIGV2ZW50IHdoZW4gdGhlIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgdGhpcy5mcmFtZS5vbignaGlkZUJ1dHRvbicsICdjbGljaycsIChfZnJhbWUsIGV2dCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVDaGF0QnV0dG9uU3RhdGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZnJhbWUub24oJ2luZm8nLCAnY2xpY2snLCAoX2ZyYW1lLCBldnQpID0+IHtcblxuICAgICAgaWYgKHRoaXMud2luZG93UGFyYW0uaW5mb1VybCkge1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLndpbmRvd1BhcmFtLmluZm9VcmwsICdfYmxhbmsnKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgLy9NaW5pbWl6ZSB0aGUgd2luZG93IGZpcnN0IHRvIG1lbW9yeSB0aGUgIGluaXRpYWwgd2luZG93IHBvc2l0aW9uIGFuZCBzaXplLlxuICAgIHRoaXMuZnJhbWUuY29udHJvbC5kb0hpZGUoe1xuICAgICAgc2lsZW50OiB0cnVlLC8vbWVhbnMgaW52aXNpYmxlIGFjdGlvblxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBhbGlnbjogJ0FCU09MVVRFJywvL25lZWQgdG8gc2V0IHRoZSBvZmZzZXQgcG9pbnQgd2hlcmUgd2luZG93IGlzIG1pbmltaXplZFxuICAgICAgb2Zmc2V0OiB0aGlzLmJ1dHRvblZhbmlzaFBvaW50LFxuICAgICAgY2FsbGJhY2s6IChfZnJhbWUsIGluZm8pID0+IHtcbiAgICAgICAgdGhpcy5vbkNoYXRGcmFtZUNyZWF0ZShfZnJhbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQnVpbGQgQ2hhdCBVSSBhbmQgcmVsYXRlZCBjb21wb25lbnRzIGxpa2Ugd2FrZXVwIGJ1dHRvblxuICAgKiBAcGFyYW0gaG9sZGVyRWxlSWRcbiAgICovXG4gIGJ1aWxkKGhvbGRlckVsZUlkLCBpc0F1dG9PcGVuKSB7XG5cbiAgICB0aGlzLmhvbGRlcklkID0gaG9sZGVyRWxlSWQ7XG5cbiAgICBpZiAodGhpcy5yZW5kZXJNb2RlID09PSAnbW9iaWxlJykge1xuICAgICAgLy8gb24gbW9iaWxlIGRldmljZVxuICAgICAgdGhpcy5idWlsZENoYXRBcmVhKCk7XG4gICAgICB0aGlzLmJ1aWxkQ2hhdEJ1dHRvbigpO1xuICAgICAgdGhpcy5vbkNoYXRGcmFtZUNyZWF0ZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vb24gUENcbiAgICAgIHRoaXMuYnVpbGRDaGF0V2luZG93KCk7XG4gICAgICB0aGlzLmZyYW1lLnNldEhUTUwodGhpcy5nZXRCb3RVaUlubnRlckh0bWwoKSk7XG4gICAgICB0aGlzLmJ1aWxkQ2hhdEJ1dHRvbigpO1xuXG4gICAgfVxuICAgIHRoaXMuc2V0Q2hhdEJ1dHRvblZpc2libGUodHJ1ZSk7XG4gIH1cblxuICBjbGVhcigpIHtcblxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuY2hhdEFyZWFFbGUpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY2hhdEFyZWFFbGUpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuc2hvd0NoYXRCdG4pKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuc2hvd0NoYXRCdG4pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZyYW1lKSB7XG4gICAgICAvL2Nsb3NlIHRoZSB3aW5kb3dcbiAgICAgIHRoaXMuZnJhbWUuY2xvc2VGcmFtZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIGFwcCBpcyBydW5uaW5nIG9uIG1vYmlsZSBkZXZpY2VzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNNb2JpbGVEZXZpY2UoKSB7XG4gICAgcmV0dXJuIGlzTW9iaWxlRGV2aWNlKCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IENoYXRDbGllbnQgZnJvbSAnLi9jaGF0LWNsaWVudC5qcyc7XG5pbXBvcnQgQm90VUkgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2JvdHVpL2J1aWxkL2JvdHVpLm1pbi5qcyc7XG5pbXBvcnQgc2FuaXRpemUgZnJvbSBcIi4vc2FuaXRpemVyXCI7XG5pbXBvcnQge1xuICBTQU5JVElaRV9VU0VSX0lOUFVUX0ZPUl9ESVNQTEFZLFxufSBmcm9tIFwiLi9jaGF0LXV4LWRlZlwiO1xuXG5cbi8qKlxuICogQ2hhdCB1c2VyIGludGVyZmFjZSBwb3dlcmVkIGJ5IEJvdFVJIChmb3JrZWQgdmVyLiBvbiBodHRwczovL2dpdGh1Yi5jb20vcml2ZXJzdW4vYm90dWkpXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBAYXV0aG9yIFRvbSBNaXNhd2EgKHJpdmVyc3VuLm9yZ0BnbWFpbC5jb20saHR0cHM6Ly9naXRodWIuY29tL3JpdmVyc3VuKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0VUkge1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcblxuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJvdHVpID0gbnVsbDtcblxuICAgIHRoaXMuYm90SW5mbyA9IG9wdHMuYm90SW5mbztcblxuICAgIGlmICghdGhpcy5ib3RJbmZvLndpZGdldCkge1xuICAgICAgdGhpcy5ib3RJbmZvLndpZGdldCA9IHtcbiAgICAgICAgc2VuZExhYmVsOiAnU0VORCcsXG4gICAgICAgIHBsYWNlSG9sZGVyOiAnUGxlYXNlIGlucHV0IHRleHQuJ1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuXG4gICAgaWYgKCF0aGlzLmJvdHVpKSB7XG5cbiAgICAgIHRoaXMuYm90dWkgPSBuZXcgQm90VUkodGhpcy5vcHRzLmhvbGRlcklkLFxuICAgICAgICB7dnVlOiB0aGlzLm9wdHMudnVlfVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMub3B0cykge1xuXG4gICAgICAgIGlmICh0aGlzLm9wdHMuYXBpKSB7XG4gICAgICAgICAgdGhpcy5jaGF0Q2xpZW50ID0gbmV3IENoYXRDbGllbnQodGhpcy5vcHRzLmFwaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGF0Q2xpZW50ID0gbmV3IENoYXRDbGllbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJvdEluZm8uYm90UGhvdG8pIHtcbiAgICAgICAgICB0aGlzLmJvdHVpLm9wdC5zZXRCb3RQaG90byh0aGlzLmJvdEluZm8uYm90UGhvdG8pO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5ib3RJbmZvLmh1bWFuUGhvdG8pIHtcbiAgICAgICAgICB0aGlzLmJvdHVpLm9wdC5zZXRIdW1hblBob3RvKHRoaXMuYm90SW5mby5odW1hblBob3RvKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBzdGFydENoYXRib3Qod2FrZXVwSW5wdXQpIHtcblxuICAgIGlmICh0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgLy9wYXNzIGlmIHN0YXJ0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gICAgaWYgKHdha2V1cElucHV0KSB7XG4gICAgICB0aGlzLmhhbmRsZVVzZXJJbnB1dCh7dmFsdWU6IHdha2V1cElucHV0fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0lucHV0UHJvbXB0KCk7XG4gICAgfVxuXG4gIH1cblxuICBzaG93SW5wdXRQcm9tcHQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5ib3R1aS5hY3Rpb24udGV4dCh7XG4gICAgICBhZGRNZXNzYWdlOiAhU0FOSVRJWkVfVVNFUl9JTlBVVF9GT1JfRElTUExBWSxcbiAgICAgIGFjdGlvbjoge1xuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAvL2ljb246J3BhcGVyLXBsYW5lJyxcbiAgICAgICAgICBsYWJlbDogdGhpcy5ib3RJbmZvLndpZGdldC5zZW5kTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuYm90SW5mby53aWRnZXQucGxhY2VIb2xkZXJcbiAgICAgIH1cbiAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gU0FOSVRJWkVfVVNFUl9JTlBVVF9GT1JfRElTUExBWSA/IHNhbml0aXplKHJlcy52YWx1ZSkgOiByZXMudmFsdWU7XG4gICAgICBzZWxmLmJvdHVpLm1lc3NhZ2UuYWRkKHtcbiAgICAgICAgZGVsYXk6IDEsXG4gICAgICAgIHBob3RvOiB0cnVlLFxuICAgICAgICBodW1hbjogdHJ1ZSwgLy8gc2hvdyBpdCBhcyByaWdodCBhbGlnbmVkIHRvIFVJXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgX2hhbmRsZVVzZXJJbnB1dCA9IHNlbGYuaGFuZGxlVXNlcklucHV0LmJpbmQoc2VsZik7XG4gICAgICBfaGFuZGxlVXNlcklucHV0KHJlcyk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBUbyBoYW5kbGUgdXNlciBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB1c2VySW5wdXRcbiAgICovXG4gIGhhbmRsZVVzZXJJbnB1dCh1c2VySW5wdXQpIHtcblxuICAgIGlmICghdGhpcy5ib3R1aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vQSBsb2FkaW5nIGljb24gaXMgZGlzcGxheWVkIGJlZm9yZSB0aGUgZGlzcGxheSBvZiB0aGUgdXNlciBpbnB1dCBib3ggaXMgZmluaXNoZWRcbiAgICAvL0p1c3QgcHV0IHdhaXQgdG8gcHJldmVudCBpdC5cbiAgICBjb25zdCBkZWxheU1zNExvYWRpbmdJY29uID0gNTAwO1xuXG4gICAgaWYgKHRoaXMub3B0cy5tZXRob2RzKSB7XG4gICAgICBpZiAodGhpcy5vcHRzLm1ldGhvZHMub25Vc2VySW5wdXQpIHtcbiAgICAgICAgY29uc3QgY29uc3VtZWQgPSB0aGlzLm9wdHMubWV0aG9kcy5vblVzZXJJbnB1dCh1c2VySW5wdXQudmFsdWUpO1xuICAgICAgICBpZiAoY29uc3VtZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy9TaG93IGxvYWRpbmcgaWNvblxuICAgICAgdGhpcy5ib3R1aS5tZXNzYWdlLmFkZChcbiAgICAgICAge3Bob3RvOiB0cnVlLCBsb2FkaW5nOiB0cnVlfVxuICAgICAgKS50aGVuKGxvYWRpbmdJY29uTXNnSWR4ID0+IHtcblxuXG4gICAgICAgIGlmICh0aGlzLm9wdHMubWV0aG9kcyAmJiB0aGlzLm9wdHMubWV0aG9kcy5vblNlcnZlclByb2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IHRoaXMub3B0cy5tZXRob2RzLm9uU2VydmVyUHJvY2Vzcyh1c2VySW5wdXQudmFsdWUpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhdFNlcnZlclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlLCBsb2FkaW5nSWNvbk1zZ0lkeCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuY2hhdENsaWVudC5wYXJhbXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhdENsaWVudC5wYXJhbXMgPSB7fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNoYXRDbGllbnQucGFyYW1zLnRleHQgPSB0aGlzLm9wdHMuYXBpLmVzY2FwZVVzZXJJbnB1dCA/IHNhbml0aXplKHVzZXJJbnB1dC52YWx1ZSkgOiB1c2VySW5wdXQudmFsdWU7XG5cbiAgICAgICAgICAvL1lvdSBjYW4gaW50ZXJjZXB0IHJlcXVlc3QgaGVhZGVycy9wYXJhbXMgYmVmb3JlIHNlbmRpbmcgYSByZXF1ZXN0IHRvIHNlcnZlclxuICAgICAgICAgIGlmICh0aGlzLm9wdHMubWV0aG9kcyAmJiB0aGlzLm9wdHMubWV0aG9kcy5vblByZXBhcmVSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLm9wdHMubWV0aG9kcy5vblByZXBhcmVSZXF1ZXN0KHRoaXMuY2hhdENsaWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9GaW5pc2ggc2hvd2luZyBsb2FkaW5nIGljb25cbiAgICAgICAgICB0aGlzLmNoYXRDbGllbnQuc2VuZE1zZ1RvQ2hhdFNlcnZlcigoc2VydmVyUmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgLy9IYW5kbGluZyByZXNwb25zZSBmcm9tIENoYXRTZXJ2ZXJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhdFNlcnZlclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlLCBsb2FkaW5nSWNvbk1zZ0lkeCk7XG5cbiAgICAgICAgICAgIC8vWW91IGNhbiBpbnRlcmNlcHQgcmVxdWVzdCBoZWFkZXJzL3BhcmFtcyBhZnRlciBzZW5kaW5nIGEgcmVxdWVzdCB0byBzZXJ2ZXJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMubWV0aG9kcyAmJiB0aGlzLm9wdHMubWV0aG9kcy5vbkZpbmlzaFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1ldGhvZHMub25GaW5pc2hSZXF1ZXN0KHRoaXMuY2hhdENsaWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZGVsYXlNczRMb2FkaW5nSWNvbik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGluZyByZXNwb25zZSBmcm9tIENoYXRTZXJ2ZXJcbiAgICogQHBhcmFtIHNlcnZlclJlc3BvbnNlXG4gICAqIEBwYXJhbSBsb2FkaW5nSWNvbk1zZ0lkeFxuICAgKi9cbiAgaGFuZGxlQ2hhdFNlcnZlclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlLCBsb2FkaW5nSWNvbk1zZ0lkeCkge1xuXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuYm90dWkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRzLm1ldGhvZHMpIHtcbiAgICAgIGlmICh0aGlzLm9wdHMubWV0aG9kcy5vblNlcnZlclJlc3BvbnNlKSB7XG4gICAgICAgIHNlcnZlclJlc3BvbnNlID0gdGhpcy5vcHRzLm1ldGhvZHMub25TZXJ2ZXJSZXNwb25zZShzZXJ2ZXJSZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbXNnSW50ZXJ2YWwgPSB0aGlzLm9wdHMubXNnSW50ZXJ2YWwgPyB0aGlzLm9wdHMubXNnSW50ZXJ2YWwgOiAxMDA7XG4gICAgY29uc3Qgb3V0ID0gc2VydmVyUmVzcG9uc2Uub3V0cHV0O1xuXG4gICAgbGV0IGlzVXNlcklucHV0Q29uc3VtZWQgPSBmYWxzZTtcbiAgICBsZXQgZGVsYXlNcyA9IDA7XG5cbiAgICBmb3IgKGxldCBvdXRJZHggaW4gb3V0KSB7XG5cbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBvdXRbb3V0SWR4XTtcblxuICAgICAgY29uc3QgcmVzVHlwZSA9IG1lc3NhZ2UudHlwZTtcblxuICAgICAgZGVsYXlNcyArPSBtc2dJbnRlcnZhbDtcblxuICAgICAgaWYgKG1lc3NhZ2UuZGVsYXlNcykge1xuICAgICAgICBkZWxheU1zICs9IG1lc3NhZ2UuZGVsYXlNcztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc1R5cGUgPT0gJ3RleHQnKSB7XG5cbiAgICAgICAgaWYgKG91dElkeCA9PSAwKSB7XG4gICAgICAgICAgLy9JbiB0aGUgY2FzZSBvZiB0aGUgZmlyc3QgbWVzc2FnZSxcbiAgICAgICAgICAvLyByZW1vdmUgdGhlIGxvYWRpbmcgaWNvbiBhbmQgc2hvdyBtZXNzYWdlXG4gICAgICAgICAgdGhpcy5ib3R1aS5tZXNzYWdlLnVwZGF0ZShsb2FkaW5nSWNvbk1zZ0lkeCwge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBwaG90bzogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UudmFsdWVcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgdGhpcy5ib3R1aS5tZXNzYWdlLmFkZCh7XG4gICAgICAgICAgICBkZWxheTogZGVsYXlNcyxcbiAgICAgICAgICAgIHBob3RvOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudDogbWVzc2FnZS52YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAocmVzVHlwZSA9PSAnaW1hZ2UnKSB7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRWYWx1ZSA9ICchW2ltYWdlXSgnICsgbWVzc2FnZS52YWx1ZSArICcpJztcbiAgICAgICAgdGhpcy5oYW5kbGVDb250ZW50KG91dElkeCwgbG9hZGluZ0ljb25Nc2dJZHgsIHR5cGUsIGNvbnRlbnRWYWx1ZSwgZGVsYXlNcyk7XG5cbiAgICAgIH0gZWxzZSBpZiAocmVzVHlwZSA9PSAneW91dHViZScpIHtcblxuICAgICAgICBjb25zdCB0eXBlID0gJ2VtYmVkJztcbiAgICAgICAgY29uc3QgeW91dHViZUlkID0gbWVzc2FnZS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29udGVudFZhbHVlID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt5b3V0dWJlSWR9XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xuICAgICAgICB0aGlzLmhhbmRsZUNvbnRlbnQob3V0SWR4LCBsb2FkaW5nSWNvbk1zZ0lkeCwgdHlwZSwgY29udGVudFZhbHVlLCBkZWxheU1zKTtcblxuICAgICAgfSBlbHNlIGlmIChyZXNUeXBlID09ICdlbWJlZCcpIHtcblxuICAgICAgICBjb25zdCB0eXBlID0gJ2VtYmVkJztcbiAgICAgICAgY29uc3QgY29udGVudFZhbHVlID0gbWVzc2FnZS52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVDb250ZW50KG91dElkeCwgbG9hZGluZ0ljb25Nc2dJZHgsIHR5cGUsIGNvbnRlbnRWYWx1ZSwgZGVsYXlNcyk7XG5cbiAgICAgIH0gZWxzZSBpZiAocmVzVHlwZSA9PSAnaHRtbCcpIHtcblxuICAgICAgICBjb25zdCB0eXBlID0gJ2h0bWwnO1xuICAgICAgICBjb25zdCBjb250ZW50VmFsdWUgPSBtZXNzYWdlLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZUNvbnRlbnQob3V0SWR4LCBsb2FkaW5nSWNvbk1zZ0lkeCwgdHlwZSwgY29udGVudFZhbHVlLCBkZWxheU1zKTtcblxuICAgICAgfSBlbHNlIGlmIChyZXNUeXBlID09ICd3aW5kb3cnICYmICh0aGlzLm9wdHMucGFyZW50ICYmIHRoaXMub3B0cy5wYXJlbnQuZ2V0UmVuZGVyTW9kZSgpID09PSAncGMnKSkge1xuXG4gICAgICAgIGxldCBfZGVsYXlNcyA9IGRlbGF5TXM7XG5cbiAgICAgICAgaWYgKCFfZGVsYXlNcykge1xuICAgICAgICAgIF9kZWxheU1zID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdHMucGFyZW50KSB7XG5cbiAgICAgICAgICBjb25zdCBmdW5jID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRzLnBhcmVudC5jcmVhdGVXaW5kb3dGcm9tU2VydmVyTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfZGVsYXlNcyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChvdXRJZHggPT0gMCkge1xuICAgICAgICAgICAgLy9JbiB0aGUgY2FzZSBvZiB0aGUgZmlyc3QgbWVzc2FnZSxcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbG9hZGluZyBpY29uIGFuZCBzaG93IG1lc3NhZ2VcbiAgICAgICAgICAgIHRoaXMuYm90dWkubWVzc2FnZS5yZW1vdmUobG9hZGluZ0ljb25Nc2dJZHgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVuYygpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlc1R5cGUgPT0gJ3dpbmRvdycgJiYgKHRoaXMub3B0cy5wYXJlbnQgJiYgdGhpcy5vcHRzLnBhcmVudC5nZXRSZW5kZXJNb2RlKCkgPT09ICdtb2JpbGUnKSkge1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSAnaHRtbCc7XG4gICAgICAgIGxldCBjb250ZW50VmFsdWUgPSBudWxsO1xuICAgICAgICBsZXQgdGl0bGUgPSBudWxsO1xuXG4gICAgICAgIGlmIChtZXNzYWdlLnVybCB8fCBtZXNzYWdlLm1vYmlsZVVybCkge1xuXG4gICAgICAgICAgaWYgKG1lc3NhZ2UudXJsKSB7XG4gICAgICAgICAgICAvL3VybFxuICAgICAgICAgICAgdGl0bGUgPSBgJHttZXNzYWdlLnVybH1gO1xuICAgICAgICAgICAgY29udGVudFZhbHVlID0gYDxhIGhyZWY9XCIke21lc3NhZ2UudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dGl0bGV9PC9hPmA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lc3NhZ2UubW9iaWxlVXJsKSB7XG4gICAgICAgICAgICAvL21vYmlsZVVybFxuICAgICAgICAgICAgdGl0bGUgPSBgJHttZXNzYWdlLm1vYmlsZVVybH1gO1xuICAgICAgICAgICAgY29udGVudFZhbHVlID0gYDxhIGhyZWY9XCIke21lc3NhZ2UubW9iaWxlVXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dGl0bGV9PC9hPmA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lc3NhZ2UudGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gbWVzc2FnZS50aXRsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmhhbmRsZUNvbnRlbnQob3V0SWR4LCBsb2FkaW5nSWNvbk1zZ0lkeCwgdHlwZSwgY29udGVudFZhbHVlLCBkZWxheU1zKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vaHRtbFxuICAgICAgICAgIGNvbnRlbnRWYWx1ZSA9IG1lc3NhZ2UuaHRtbCA/IG1lc3NhZ2UuaHRtbCA6ICdObyBkYXRhJztcblxuICAgICAgICAgIHRoaXMuaGFuZGxlQ29udGVudChvdXRJZHgsIGxvYWRpbmdJY29uTXNnSWR4LCB0eXBlLCBjb250ZW50VmFsdWUsIGRlbGF5TXMpO1xuICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmIChyZXNUeXBlID09ICdvcHRpb24nKSB7XG5cbiAgICAgICAgY29uc3Qgb3B0cyA9IG1lc3NhZ2Uub3B0aW9ucztcblxuICAgICAgICBsZXQgYWJvdXRPcHRpb24gPSAnJztcblxuICAgICAgICBpZiAoYWJvdXRPcHRpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChvdXRJZHggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5ib3R1aS5tZXNzYWdlLnVwZGF0ZShsb2FkaW5nSWNvbk1zZ0lkeCwge1xuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5TXMsXG4gICAgICAgICAgICAgIHBob3RvOiB0cnVlLFxuICAgICAgICAgICAgICBjb250ZW50OiBhYm91dE9wdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90dWkubWVzc2FnZS5hZGQoe1xuICAgICAgICAgICAgICBkZWxheTogZGVsYXlNcyxcbiAgICAgICAgICAgICAgcGhvdG86IHRydWUsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGFib3V0T3B0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRBY3Rpb25zID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgZm9yIChsZXQgb3B0SWR4IGluIG9wdHMpIHtcblxuICAgICAgICAgIGNvbnN0IG9wdCA9IG9wdHNbb3B0SWR4XTtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IG9wdC5sYWJlbDtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gb3B0LnZhbHVlO1xuXG4gICAgICAgICAgb3B0QWN0aW9ucy5wdXNoKHt0ZXh0OiBsYWJlbCwgdmFsdWU6IHRleHR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzVXNlcklucHV0Q29uc3VtZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChvdXRJZHggPT0gMCkge1xuICAgICAgICAgIC8vSW4gdGhlIGNhc2Ugb2YgdGhlIGZpcnN0IG1lc3NhZ2UsXG4gICAgICAgICAgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIGljb24gYW5kIHNob3cgbWVzc2FnZVxuICAgICAgICAgIHRoaXMuYm90dWkubWVzc2FnZS5yZW1vdmUobG9hZGluZ0ljb25Nc2dJZHgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib3R1aS5hY3Rpb24uYnV0dG9uKHtcbiAgICAgICAgICAgICAgICBhdXRvSGlkZTogdHJ1ZSwvL3RydWU6QXV0b21hdGljYWxseSBoaWRlIHdoZW4gcHVzaGluZyB0aGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5TXMsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBvcHRBY3Rpb25zXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICkudGhlbihcbiAgICAgICAgICAgIC8vSGFuZGxpbmcgb2YgcHVzaGluZyBvZiBhY3Rpb24gYnV0dG9uXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVVzZXJJbnB1dC5iaW5kKHRoaXMpXG4gICAgICAgICAgKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vU2hvdyBhY3Rpb24gYnV0dG9uc1xuICAgICAgICAgIHRoaXMuYm90dWkuYWN0aW9uLmJ1dHRvbih7XG4gICAgICAgICAgICBhdXRvSGlkZTogdHJ1ZSwvL3RydWU6QXV0b21hdGljYWxseSBoaWRlIHdoZW4gcHVzaGluZyB0aGUgYnV0dG9uXG4gICAgICAgICAgICBkZWxheTogZGVsYXlNcyxcbiAgICAgICAgICAgIGFjdGlvbjogb3B0QWN0aW9uc1xuICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAvL0hhbmRsaW5nIG9mIHB1c2hpbmcgb2YgYWN0aW9uIGJ1dHRvblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL0lmIHRoZSB1c2VyIGlucHV0IGhhcyBub3QgYmVlbiBjb25zdW1lZCBkdWUgdG8gYW4gYWN0aW9uIGJ1dHRvbiBwcmVzcyBvciB0aGUgbGlrZSxcbiAgICAvLyBkaXNwbGF5IHVzZXIgaW5wdXQgYm94XG4gICAgaWYgKCFpc1VzZXJJbnB1dENvbnN1bWVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VsZi5zaG93SW5wdXRQcm9tcHQoKTtcbiAgICAgIH0sIChkZWxheU1zICsgbXNnSW50ZXJ2YWwpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDb250ZW50KG91dElkeCwgbG9hZGluZ0ljb25Nc2dJZHgsIHR5cGUsIGNvbnRlbnRWYWx1ZSwgZGVsYXlNcykge1xuXG4gICAgaWYgKG91dElkeCA9PSAwKSB7XG4gICAgICAvL0luIHRoZSBjYXNlIG9mIHRoZSBmaXJzdCBtZXNzYWdlLFxuICAgICAgLy8gcmVtb3ZlIHRoZSBsb2FkaW5nIGljb24gYW5kIHNob3cgbWVzc2FnZVxuICAgICAgdGhpcy5ib3R1aS5tZXNzYWdlLnVwZGF0ZShsb2FkaW5nSWNvbk1zZ0lkeCwge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgcGhvdG86IHRydWUsXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRWYWx1ZVxuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3R1aS5tZXNzYWdlLmFkZCh7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGRlbGF5OiBkZWxheU1zLFxuICAgICAgICBwaG90bzogdHJ1ZSxcbiAgICAgICAgY29udGVudDogY29udGVudFZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB1c2VySW5wdXRUZXh0IHNob3VsZCBiZSBzYW5pdGl6ZWRcbi8vIHdoZW4gZGlzcGxheWVkIG9uIHRoZSBjaGF0IHNjcmVlbiAoYXBwZW5kIGFzIERPTSBlbGVtZW50KS5cbmV4cG9ydCBjb25zdCBTQU5JVElaRV9VU0VSX0lOUFVUX0ZPUl9ESVNQTEFZID0gdHJ1ZTtcblxuLy8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IEVuY29kZVVSSUNvbXBvbmVudCBzaG91bGQgYmUgcGVyZm9ybWVkXG4vLyBmb3IgdXNlcklucHV0VGV4dCBpbiBvcmRlciB0byBhdm9pZCBtaXhpbmcgXCImXCIgaW4gdGhlIHF1ZXJ5IHN0cmluZ1xuLy8gd2l0aCBcIiZcIiBpbiB1c2VySW5wdXRUZXh0IHdoZW4gc2VuZGluZyB2YWx1ZXMgdmlhIEdFVFxuZXhwb3J0IGNvbnN0IFNBTklUSVpFX1VTRVJfSU5QVVRfRk9SX1NFTkRJTkdfVklBX0hUVFBfTUVUSE9EID0gdHJ1ZTsiLCIvKipcbiAqIFJldHVybnMgdHJ1ZSB3aGVuIGFwcCBpcyBydW5uaW5nIG9uIG1vYmlsZSBkZXZpY2VzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuXG4gICAgY29uc3QgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpUG9kJykgPiAwIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwICYmIHVzZXJBZ2VudC5pbmRleE9mKCdNb2JpbGUnKSA+IDApIHtcbiAgICAgICAgLy9pcyBzbWFydHBob25lXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDAgfHwgdXNlckFnZW50LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDApIHtcbiAgICAgICAgLy9pcyB0YWJsZXRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9pcyBwY1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhVGltZXMnO1xuaW1wb3J0IHsgZmFDb21tZW50QWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ29tbWVudEFsdCc7XG5pbXBvcnQgeyBKU0ZyYW1lIH0gZnJvbSAnanNmcmFtZS5qcyc7XG4vLyBBZGQgc3BlY2lmaWMgaWNvbnMgZnJvbSBmb250IGF3ZXNvbWVcbmxpYnJhcnkuYWRkKGZhVGltZXMsIGZhQ29tbWVudEFsdCk7XG5kb20ud2F0Y2goKTtcblxuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQ2hhdFVJIGZyb20gJy4vY2hhdC11aS5qcyc7XG5pbXBvcnQgQ2hhdEZyYW1lIGZyb20gJy4vY2hhdC1mcmFtZS5qcyc7XG5pbXBvcnQgeyBpc01vYmlsZURldmljZSB9IGZyb20gJy4vY2hhdC11eC11dGlsLmpzJztcblxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYm90dWkvYnVpbGQvYm90dWkubWluLmNzcyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9ib3R1aS9idWlsZC9ib3R1aS10aGVtZS1kZWZhdWx0LmNzcyc7XG5pbXBvcnQgJy4vYm90dWktdGhlbWUtcml2ZXJzdW4uY3NzJztcbmltcG9ydCAnLi9hcHAuY3NzJztcblxuXG4vKipcbiAqIEVhc3kgdG8gY3JlYXRlIENoYXQgVUlcbiAqXG4gKiBNSVQgTGljZW5zZVxuICpcbiAqIEBhdXRob3IgVG9tIE1pc2F3YSAocml2ZXJzdW4ub3JnQGdtYWlsLmNvbSxodHRwczovL2dpdGh1Yi5jb20vcml2ZXJzdW4pXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRVeCB7XG5cbiAgY29uc3RydWN0b3Iob3B0cykge1xuICAgIGlmIChvcHRzKSB7XG4gICAgICB0aGlzLmluaXQob3B0cyk7XG4gICAgfVxuXG4gICAgLy9mbGFnIGZvciBvcGVuaW5nIGNoYXQgYXV0b21hdGljYWxseVxuICAgIHRoaXMuYXV0b09wZW4gPSBmYWxzZTtcbiAgfVxuXG5cbiAgaW5pdChvcHRzKSB7XG5cbiAgICB0aGlzLmhvbGRlckVsZUlkID0gJ215LWNoYXQtYm90JztcbiAgICB0aGlzLnVpID0gbnVsbDtcbiAgICB0aGlzLmNoYXRGcmFtZSA9IG51bGw7XG5cbiAgICBsZXQgYm90SW5mbyA9IG9wdHMuYm90O1xuICAgIGlmICghYm90SW5mbykge1xuICAgICAgYm90SW5mbyA9IHt9O1xuICAgIH1cblxuICAgIGxldCBwYXJhbVdpbiA9IG9wdHMud2luZG93O1xuICAgIGlmICghcGFyYW1XaW4pIHtcbiAgICAgIHBhcmFtV2luID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1XYWtldXBCdXR0b24gPSBvcHRzLndha2V1cEJ1dHRvbjtcblxuICAgIGxldCBtZXRob2RzID0gb3B0cy5tZXRob2RzO1xuICAgIGlmICghbWV0aG9kcykge1xuICAgICAgbWV0aG9kcyA9IHt9O1xuICAgIH1cblxuICAgIC8vIGlmICghYm90SW5mby5ib3RQaG90bykge1xuICAgIC8vICAgICBib3RJbmZvLmJvdFBob3RvID0gcG5nX2ljb25fb3BlcmF0b3I7XG4gICAgLy8gfVxuXG4gICAgdGhpcy51aSA9IG5ldyBDaGF0VUkoe1xuICAgICAgaG9sZGVySWQ6IHRoaXMuaG9sZGVyRWxlSWQsXG4gICAgICBib3RJbmZvOiBib3RJbmZvLFxuICAgICAgdnVlOiBWdWUsXG4gICAgICBhcGk6IG9wdHMuYXBpLFxuICAgICAgbWV0aG9kczogbWV0aG9kcyxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGF0RnJhbWUgPSBuZXcgQ2hhdEZyYW1lKHtcbiAgICAgIHJlbmRlck1vZGU6IG9wdHMucmVuZGVyTW9kZSxcbiAgICAgIHdpbmRvdzogcGFyYW1XaW4sXG4gICAgICB3YWtldXBCdXR0b246IHBhcmFtV2FrZXVwQnV0dG9uXG4gICAgfSk7XG5cbiAgICB0aGlzLmNoYXRGcmFtZS5idXR0b25PZmZXaGVuT3BlbkZyYW1lID0gb3B0cy5idXR0b25PZmZXaGVuT3BlbkZyYW1lO1xuXG4gICAgdGhpcy5jaGF0RnJhbWUub25DaGF0RnJhbWVDcmVhdGUgPSAoZnJhbWUpID0+IHtcblxuICAgICAgdGhpcy51aS5pbml0aWFsaXplKCk7XG5cbiAgICAgIGlmIChvcHRzLm9wZW4gfHwgdGhpcy5hdXRvT3Blbikge1xuICAgICAgICB0aGlzLmNoYXRGcmFtZS50b2dnbGVDaGF0QnV0dG9uU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGhvZHMub25DaGF0V2luZG93Q3JlYXRlKSB7XG4gICAgICAgIG1ldGhvZHMub25DaGF0V2luZG93Q3JlYXRlKGZyYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jaGF0RnJhbWUub25DaGF0RnJhbWVSZXN1bWUgPSAoZnJhbWUpID0+IHtcblxuICAgICAgaWYgKGJvdEluZm8ud2FrZXVwVGV4dCkge1xuICAgICAgICB0aGlzLnVpLnN0YXJ0Q2hhdGJvdChib3RJbmZvLndha2V1cFRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51aS5zdGFydENoYXRib3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGhvZHMub25DaGF0V2luZG93UmVzdW1lKSB7XG4gICAgICAgIG1ldGhvZHMub25DaGF0V2luZG93UmVzdW1lKGZyYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jaGF0RnJhbWUub25DaGF0RnJhbWVQYXVzZSA9IChmcmFtZSkgPT4ge1xuICAgICAgaWYgKG1ldGhvZHMub25DaGF0V2luZG93UGF1c2UpIHtcbiAgICAgICAgbWV0aG9kcy5vbkNoYXRXaW5kb3dQYXVzZShmcmFtZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFJlbmRlck1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhdEZyYW1lLnJlbmRlck1vZGU7XG4gIH1cblxuICBjcmVhdGVXaW5kb3dGcm9tU2VydmVyTWVzc2FnZShtZXNzYWdlKSB7XG5cbiAgICAvL2dldCBqc0ZyYW1lIGluc3RhbmNlXG4gICAgY29uc3QganNGcmFtZUZvckNoYXRXaW5kb3cgPSB0aGlzLmNoYXRGcmFtZS5qc0ZyYW1lO1xuXG4gICAgaWYgKCF0aGlzLmpzRnJhbWUpIHtcbiAgICAgIHRoaXMuanNGcmFtZSA9IG5ldyBKU0ZyYW1lKHtcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBmaXhlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vb3ZlcnJpZGUganNmcmFtZSBtb3VzZSBpbnRlcmNlcHRlciBmb3Igc3VwcG9ydGluZyBtdWx0aXBsZSBqc2ZyYW1lXG4gICAgZG9jdW1lbnQub25tb3VzZXVwID0gKGUpID0+IHtcbiAgICAgIGpzRnJhbWVGb3JDaGF0V2luZG93LndpbmRvd01hbmFnZXIud2luZG93TW91c2VVcChlKTtcbiAgICAgIHRoaXMuanNGcmFtZS53aW5kb3dNYW5hZ2VyLndpbmRvd01vdXNlVXAoZSk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcbiAgICAgIGpzRnJhbWVGb3JDaGF0V2luZG93LndpbmRvd01hbmFnZXIud2luZG93TW91c2VNb3ZlKGUpO1xuICAgICAgdGhpcy5qc0ZyYW1lLndpbmRvd01hbmFnZXIud2luZG93TW91c2VNb3ZlKGUpO1xuICAgIH07XG5cbiAgICAvL2dldCBjaGF0IHdpbmRvdyBpbnN0YW5jZVxuICAgIGNvbnN0IGNoYXRXaW4gPSB0aGlzLmNoYXRGcmFtZS5mcmFtZTtcbiAgICBjb25zdCBjaGF0V2luU3R5bGUgPSB0aGlzLmNoYXRGcmFtZS5hcHBlYXJhbmNlUGFyYW07XG4gICAgY2hhdFdpblN0eWxlLnRpdGxlQmFyLmxlZnRNYXJnaW4gPSAnMTBweCc7XG4gICAgY2hhdFdpblN0eWxlLnRpdGxlQmFyLmJ1dHRvbnNPbkxlZnRbMF0udmlzaWJsZSA9IGZhbHNlO1xuICAgIGNvbnN0IGNoYXRXaW5Qb3MgPSBjaGF0V2luLmdldFBvc2l0aW9uKCk7XG5cbiAgICAvL3ByZXBhcmUgZGV0YWlsZWQgd2luZG93XG4gICAgY29uc3QgYnJvd3NlcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgZHRXaW5XaWR0aCA9IG1lc3NhZ2Uud2lkdGggPyBtZXNzYWdlLndpZHRoIDogNDAwO1xuICAgIGNvbnN0IGR0V2luSGVpZ2h0ID0gbWVzc2FnZS5oZWlnaHQgPyBtZXNzYWdlLmhlaWdodCA6IDQwMDtcbiAgICBjb25zdCBkdFdpbkxlZnQgPSBtZXNzYWdlLmxlZnQgPyBtZXNzYWdlLmxlZnQgOiAzMjtcbiAgICBjb25zdCBkdFdpbllPZmZzZXQgPSBtZXNzYWdlLmFkZFlPZmZzZXQ7XG4gICAgY29uc3QgZHRXaW5Ub3AgPSBtZXNzYWdlLnRvcCA/IG1lc3NhZ2UudG9wICsgKGR0V2luWU9mZnNldCA/IHBhcnNlSW50KHdpbmRvdy5wYWdlWU9mZnNldCkgOiAwKSA6IDMyICsgKGR0V2luWU9mZnNldCA/IHBhcnNlSW50KHdpbmRvdy5wYWdlWU9mZnNldCkgOiAwKTtcbiAgICBjb25zdCBkdFdpbkJhY2tncm91bmRDb2xvciA9IG1lc3NhZ2UuYmFja2dyb3VuZENvbG9yID8gbWVzc2FnZS5iYWNrZ3JvdW5kQ29sb3IgOiAncmdiYSgyNTUsMjU1LDI1NSwxLjApJztcbiAgICBjb25zdCBkdFdpbk92ZXJmbG93ID0gbWVzc2FnZS5vdmVyZmxvdyA/IG1lc3NhZ2Uub3ZlcmZsb3cgOiAnYXV0byc7XG5cbiAgICBjb25zdCBkZXRhaWxXaW4gPSB0aGlzLmpzRnJhbWUuY3JlYXRlKHtcbiAgICAgIG5hbWU6ICduZXcnLFxuICAgICAgdGl0bGU6IG1lc3NhZ2UudGl0bGUgPyBtZXNzYWdlLnRpdGxlIDogJycsXG4gICAgICBsZWZ0OiBkdFdpbkxlZnQsXG4gICAgICB0b3A6IGR0V2luVG9wLFxuICAgICAgd2lkdGg6IGR0V2luV2lkdGgsXG4gICAgICBoZWlnaHQ6IGR0V2luSGVpZ2h0LFxuICAgICAgbWluV2lkdGg6IDEwMCxcbiAgICAgIG1pbkhlaWdodDogMTAwLFxuICAgICAgYXBwZWFyYW5jZU5hbWU6ICdtYXRlcmlhbCcsXG4gICAgICBhcHBlYXJhbmNlUGFyYW06IGNoYXRXaW5TdHlsZSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZHRXaW5CYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIG92ZXJmbG93OiBkdFdpbk92ZXJmbG93XG4gICAgICB9LFxuICAgICAgdXJsOiBtZXNzYWdlLnVybCxcbiAgICAgIGh0bWw6IG1lc3NhZ2UuaHRtbFxuICAgIH0pO1xuXG4gICAgLy9zZXQgY3Jvc3MgbWFyayBjbGljayBoYW5kbGVyXG4gICAgZGV0YWlsV2luLm9uKCdoaWRlQnV0dG9uJywgJ2NsaWNrJywgKF9mcmFtZSwgZXZ0KSA9PiB7XG4gICAgICBkZXRhaWxXaW4uY2xvc2VGcmFtZSgpO1xuICAgIH0pO1xuXG4gICAgZGV0YWlsV2luLnNob3coKTtcblxuICB9XG5cbiAgc3RhcnQob3BlbkZsYWcpIHtcblxuICAgIGlmIChvcGVuRmxhZykge1xuICAgICAgdGhpcy5hdXRvT3BlbiA9IG9wZW5GbGFnO1xuICAgIH1cblxuICAgIHRoaXMuY2hhdEZyYW1lLmJ1aWxkKHRoaXMuaG9sZGVyRWxlSWQpO1xuXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuY2hhdEZyYW1lLmNsZWFyKCk7XG4gIH1cblxuICBpc01vYmlsZURldmljZSgpIHtcbiAgICByZXR1cm4gaXNNb2JpbGVEZXZpY2UoKTtcbiAgfVxuXG59XG5cblxuXG5cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hhdFV4IH0gIGZyb20gJy4vY2hhdC11eC5qcyc7IiwiLyoqXG4gKiBTYW5pdGl6ZSB0ZXh0ICg9IGVzY2FwZSBIVE1MIHRhZ3MpXG4gKlxuICogVGhlcmUgYXJlIHR3byBwb3NzaWJsZSBhcHByb2FjaGVzIHRvIHNhbml0aXphdGlvbjogc2ltcGx5IGVzY2FwaW5nIEhUTUwsXG4gKiBvciBhbGxvd2luZyBIVE1MIHRvIGJlIGRpc3BsYXllZCBhbmQgdXNpbmcgRE9NUHVyaWZ5IHRvIHByZXZlbnQgZGFuZ2Vyb3VzIEhUTUwuXG4gKiBTaW5jZSB0aGVyZSBhcmUgZG91YnRzIGFib3V0IHdoZXRoZXIgYWxsb3dpbmcgSFRNTCBmb3IgdXNlciBpbnB1dCBpcyBuZWNlc3NhcnlcbiAqIGZvciBjaGF0IGluIHRoZSBmaXJzdCBwbGFjZSxcbiAqIEkgd2lsbCBhZG9wdCBzaW1wbGUgZXNjYXBpbmcgYXMgYSBzYW5pdGl6YXRpb24gbWV0aG9kIHRoaXMgdGltZS5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYW5pdGl6ZSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiN4Mjc7JylcbiAgICAucmVwbGFjZSgvYC9nLCAnJiN4NjA7Jyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9