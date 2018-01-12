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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(16);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(35);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(31);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var ctx = __webpack_require__(34);
var hide = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._ = undefined;

var _typeof2 = __webpack_require__(67);

var _typeof3 = _interopRequireDefault(_typeof2);

var _from = __webpack_require__(37);

var _from2 = _interopRequireDefault(_from);

exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.getStyle = getStyle;
exports.throttle = throttle;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.warn = warn;
exports.merge = merge;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addEvent(el, type, handler) {
	if (el.addEventListener) {
		el.addEventListener(type, handler, false);
	} else if (el.attachEvent) {
		el.attachEvent('on' + type, handler);
	} else {
		el['on' + type] = handler;
	}
}

function removeEvent(el, type, handler) {
	if (el.addEventListener) {
		el.removeEventListener(type, handler, false);
	} else if (el.attachEvent) {
		el.detachEvent('on' + type, handler);
	} else {
		el['on' + type] = null;
	}
}

function getStyle(el, name) {
	if (el.currentStyle) {
		return el.currentStyle[name];
	} else {
		return Number(getComputedStyle(el, false)[name].replace(/px/, ''));
	}
}

function throttle(fn, time) {
	var timer = void 0;
	var firstTime = true;
	return function () {
		var _this = this;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		if (firstTime) {
			fn.apply(this, args);
			firstTime = false;
			return firstTime;
		}

		if (timer) {
			return false;
		}

		timer = setTimeout(function () {
			clearTimeout(timer);
			timer = null;
			fn.apply(_this, args);
		}, time);
	};
}

function addClass(el, newClass) {
	var oldClass = el.className;
	el.className = oldClass + ' ' + newClass;
}

function removeClass(obj, cls) {
	// 获取 class 内容, 并在首尾各加一个空格.  'abc    bcd' -> ' abc    bcd '
	var objClass = ' ' + obj.className + ' ';
	// 将多余的空字符替换成一个空格.  ' abc    bcd ' -> ' abc bcd '
	objClass = objClass.replace(/(\s+)/gi, ' ');
	// 在原来的 class 替换掉首尾加了空格的 class.  ' abc bcd ' -> 'bcd '
	var removed = objClass.replace(' ' + cls + ' ', ' ');
	// 去掉首尾空格.  'bcd ' -> 'bcd'
	removed = removed.replace(/(^\s+)|(\s+$)/g, '');
	// 替换原来的 class
	obj.className = removed;
}

function warn(msg) {
	console.error('[DragList warn]: ' + msg);
}

function merge() /** obj1, obj2, obj3 **/{
	var result = {};

	for (var i = 0; i < arguments.length; i++) {
		var obj = arguments[i];
		// 遍历该对象
		for (var key in obj) {
			// 如果对象有该属性，且不在原型链上
			if (obj.hasOwnProperty(key)) {
				// 如果待混入的值为对象，且result中对应值也为对象，则将两个对象融合后重新赋值给result[key]
				if (_.isObject(obj[key]) && _.isObject(result[key])) {
					result[key] = merge(result[key], obj[key]);
				} else {
					// 否则直接赋值
					result[key] = obj[key];
				}
			}
		}
	}
	return result;
}

var _ = exports._ = {
	setAttr: function setAttr(node, key, value) {
		switch (key) {
			case 'style':
				node.style.cssText = value;
				break;
			case 'value':
				var tagName = node.tagName || '';
				tagName = tagName.toLowerCase();
				if (tagName === 'input' || tagName === 'textarea') {
					node.value = value;
				} else {
					node.setAttribute(key, value);
				}
				break;
			default:
				node.setAttribute(key, value);
				break;
		}
	},
	slice: function slice(arrLike, index) {
		return Array.prototype.slice.call(arrLike, index);
	},
	isArray: function isArray(array) {
		return Object.prototype.toString.call(array) === '[object Array]';
	},
	toArray: function toArray(arrLike) {
		return (0, _from2.default)(arrLike);
	},
	isString: function isString(string) {
		return Object.prototype.toString.call(string) === '[object String]';
	},
	isObject: function isObject(obj) {
		return (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object';
	},
	isElementNode: function isElementNode(node) {
		return node.nodeType === 1;
	}
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(25);
var wksExt = __webpack_require__(28);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(50)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(53);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(36)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(55)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(25);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(40);
var hide = __webpack_require__(6);
var has = __webpack_require__(3);
var Iterators = __webpack_require__(14);
var $iterCreate = __webpack_require__(56);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(59);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(57);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(36)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(31);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(45);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _index2.default(document.querySelector('.items'), {
  dragStart: function dragStart(obj) {
    console.log('start', obj);
  },
  dragEnd: function dragEnd(obj) {
    console.log('end', obj);
    console.log('aa');
  }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _init = __webpack_require__(46);

var _core = __webpack_require__(85);

var _util = __webpack_require__(27);

// import { eventMixin } from './drag/event'
function DragList(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    (0, _util.warn)('can not resolve the wrapper dom');
  }

  this._init(el, options);
}

(0, _init.initMixin)(DragList);
// eventMixin(DragList)
(0, _core.coreMixin)(DragList);

exports.default = DragList;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(47);

var _keys2 = _interopRequireDefault(_keys);

var _from = __webpack_require__(37);

var _from2 = _interopRequireDefault(_from);

exports.initMixin = initMixin;

var _util = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_OPTIONS = {
  dargStart: null,
  dargEnd: null
};

function initMixin(DragList) {
  DragList.prototype._init = function (el, options) {
    this.options = (0, _util.merge)(options, DEFAULT_OPTIONS);
    console.log(this.options);

    this.item = (0, _from2.default)(this.wrapper.children);
    this.itemData = this._initItemsData();

    this.wrapWidth = this.wrapper.offsetWidth;
    this.wrapLeft = this.wrapper.offsetLeft;

    this.itemKeys = (0, _keys2.default)(this.itemData);
    this.keyLength = this.itemKeys.length;

    this._initIndex();
    this._initEvent();
  };

  DragList.prototype._initIndex = function () {
    for (var i = 0; i < this.item.length; i++) {
      var el = this.item[i];
      el.setAttribute('data-index', i);
    }
  };

  DragList.prototype._initItemsData = function () {
    // 获取初始状态，每个节点的顶部底部基线
    var result = {};
    for (var i = 0; i < this.item.length; i++) {
      var el = this.item[i];
      var top = el.offsetTop;
      var height = (0, _util.getStyle)(el, 'height');

      result[i] = {
        topLine: top,
        bottomLine: top + height,
        el: el
      };
    }
    return result;
  };

  DragList.prototype._initEvent = function () {
    (0, _util.addEvent)(this.wrapper, 'mousedown', this._start.bind(this));
    (0, _util.addEvent)(this.wrapper, 'transitionend', this._transitionEnd.bind(this));
    (0, _util.addEvent)(document, 'mousemove', this._move.bind(this));
    (0, _util.addEvent)(document, 'mouseup', this._end.bind(this));
  };
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
module.exports = __webpack_require__(2).Object.keys;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(15);
var $keys = __webpack_require__(9);

__webpack_require__(52)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(51);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
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
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(2);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(60);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var defined = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(41);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(9);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3);
var toObject = __webpack_require__(15);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(34);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(15);
var call = __webpack_require__(61);
var isArrayIter = __webpack_require__(62);
var toLength = __webpack_require__(33);
var createProperty = __webpack_require__(63);
var getIterFn = __webpack_require__(64);

$export($export.S + $export.F * !__webpack_require__(66)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(14);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(13);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(65);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(14);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(68);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(74);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
__webpack_require__(70);
module.exports = __webpack_require__(28).f('iterator');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(71);
var global = __webpack_require__(1);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(14);
var TO_STRING_TAG = __webpack_require__(0)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(72);
var step = __webpack_require__(73);
var Iterators = __webpack_require__(14);
var toIObject = __webpack_require__(5);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(40);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(16);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(28);
var wksDefine = __webpack_require__(29);
var enumKeys = __webpack_require__(78);
var isArray = __webpack_require__(79);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(12);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(24);
var createDesc = __webpack_require__(13);
var _create = __webpack_require__(41);
var gOPNExt = __webpack_require__(80);
var $GOPD = __webpack_require__(81);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(9);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(42).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(17).f = $propertyIsEnumerable;
  __webpack_require__(30).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(25)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(16)('meta');
var isObject = __webpack_require__(12);
var has = __webpack_require__(3);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(9);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(17);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(5);
var gOPN = __webpack_require__(42).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(17);
var createDesc = __webpack_require__(13);
var toIObject = __webpack_require__(5);
var toPrimitive = __webpack_require__(24);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(35);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('asyncIterator');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29)('observable');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

exports.coreMixin = coreMixin;

var _util = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 当前被拖动元素的信息
var obj = {
    el: null,
    index: null,
    direction: null,
    x: null,
    y: null,
    diffX: null,
    diffY: null,
    width: null,
    height: null,
    centerX: null,
    centerY: null
};

var transitionStyle = '0.2s all cubic-bezier(0.17,0,0,1)';

var isDrag = false;
var isMouseDown = false;
var zIndex = 10;

var documentHeight = document.body.offsetHeight;
var screenHeight = window.screen.height;
var limit = 10;

// 放开拖拽元素时，元素目标位置的下一个节点，用于insetBefore调用。
var afterElem = void 0;
// 用于判断鼠标移动方向，上一次操作的鼠标的x, y值
var oldX = void 0,
    oldY = void 0;
// 用于将节点移出列表，再插入的情况
var outY = void 0,
    inY = void 0;
var isOut = false;

function coreMixin(DragList) {
    DragList.prototype._start = function (e) {
        if (this.wrapper.contains(e.target)) {
            oldX = e.pageX;
            oldY = e.pageY;
            isMouseDown = true;
        }
    };

    DragList.prototype._move = function (e) {
        // 当鼠标按下且移动了3px，才认为用户进行了拖动
        if (!isDrag && isMouseDown) {
            var newX = e.pageX;
            var newY = e.pageY;
            var diffX = newX - oldX;
            var diffY = newY - oldY;

            var distance = Math.sqrt(diffX * diffX + diffY * diffY);

            if (distance > 3) {
                // 初始化当前拖动元素的数据
                this._initObjData(e);

                if (this.options.dragStart) {
                    this.options.dragStart.call(this, obj.el);
                }
            }
        }

        if (isDrag) {
            // 被拖拽元素应该translate的x,y值
            var x = e.pageX - obj.diffX - obj.x;
            var y = e.pageY - obj.diffY - obj.y;

            obj.el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

            // 判断拖拽元素的移动方向
            if (e.pageY - oldY > 0) {
                obj.direction = 'down';
            } else if (e.pageY - oldY < 0) {
                obj.direction = 'up';
            } else {
                obj.direction = 'nochange';
            }

            // 更新
            oldY = e.pageY;

            // 元素中心的x, y值
            obj.centerX = e.pageX - obj.diffX + obj.width / 2;
            obj.centerY = e.pageY - obj.diffY + obj.height / 2;

            // 被拖拽元素的中心应该在wrapper左右范围内
            // 有一个bug，一次被拖拽了大于1个位置，会阻塞，原因是查找范围不对，
            // 导致无效的循环查找阻塞，所以需要特殊处理从外面插入进来的情况
            if (obj.centerX >= this.wrapLeft && obj.centerX <= this.wrapLeft + this.wrapWidth) {
                if (isOut) {
                    // 说明当前从外部进入wapper
                    inY = e.pageY;
                    isOut = false;
                    if (inY - outY > 0) {
                        obj.direction = 'down';
                    } else if (inY - outY < 0) {
                        obj.direction = 'up';
                    }
                    outY = null;
                    inY = null;
                }
                // 寻找被进入的元素位置,然后更新
                this.findIndexAndUpdate(obj.centerY);
            } else {
                // 离开wrapper区域，记录当前y值
                if (!outY) {
                    outY = e.pageY;
                }
                isOut = true;
            }
        }
    };

    DragList.prototype.findIndexAndUpdate = function (centerY) {
        var curIndex = obj.index;

        // 上一个元素的下边界，如果是第一个元素，那么它的上边界为－2*h
        var position1 = this.itemData[curIndex - 1] && this.itemData[curIndex - 1].bottomLine || -screenHeight;
        // 下一个元素的上边界，如果是最后一个元素，那么它的下边界为整个文档高度 + 2h
        var position2 = this.itemData[curIndex + 1] && this.itemData[curIndex + 1].topLine || documentHeight + screenHeight;

        // 防止无效遍历，比如被拖动元素只是在它原来的位置稍微拖动了一下，没有换位置，这个时候就不需要遍历
        if (centerY >= position1 && centerY <= position2) {
            return;
        }

        // 由移动方向确定遍历范围
        if (obj.direction === 'up') {
            // 向上找
            this.lookUp(curIndex, centerY);
        } else if (obj.direction === 'down') {
            // 向下找
            this.lookDown(curIndex, centerY);
        }
    };

    DragList.prototype.lookUp = function (curIndex, centerY) {
        if (curIndex > limit) {
            var isFind = false;
            // 一次查找limit个
            // j为大的循环次数，比如从被拖拽的index是34，然后就要循环j次。34-24,24-14,14-4,4-0
            // 防止一次循环太多
            var j = Math.ceil(curIndex / limit);
            for (var i = 1; i <= j; i++) {
                var start = curIndex - i * limit > 0 ? curIndex - i * limit : -1;
                var end = curIndex - (i - 1) * limit;
                // 向上查找时，循环应该从靠近被拖动元素的index,开始找起，依次－－
                for (var k = end; k > start; k--) {
                    // 判断是否进入以及移动
                    var result = this.isEnterAndMove(k, centerY);
                    if (result) {
                        isFind = true;
                        break;
                    }
                }
                // 如果找到了直接跳出循环
                if (isFind) {
                    break;
                }
            }
        } else {
            for (var _i = curIndex; _i >= 0; _i--) {
                var _result = this.isEnterAndMove(_i, centerY);
                if (_result) break;
            }
        }
    };

    DragList.prototype.lookDown = function (curIndex, centerY) {
        if (this.keyLength - curIndex > limit) {
            var isFind = false;
            // 大的循环次数，比如从被拖拽的index是74，然后就要循环j次。74-84,84-94,94-100
            var j = Math.floor((this.keyLength - curIndex) / limit);
            for (var i = 1; i <= j; i++) {
                var start = curIndex + (i - 1) * limit;
                var end = curIndex + i * limit > this.keyLength ? this.keyLength : curIndex + i * limit;
                // 循环应该从靠近被拖动元素的index开始找起，依次++
                for (var k = start; k < end; k++) {
                    // 判断是否进入以及移动
                    var result = this.isEnterAndMove(k, centerY);
                    if (result) {
                        isFind = true;
                        break;
                    }
                }
                if (isFind) {
                    break;
                }
            }
        } else {
            for (var _i2 = curIndex; _i2 < this.keyLength; _i2++) {
                var _result2 = this.isEnterAndMove(_i2, centerY);
                if (_result2) break;
            }
        }
    };

    /**
    * 判断是否进入了某个节点区间，然后移动
    * @param  {Number} i 第i个节点
    * @param  {Number} y 当前被拖动元素中心y值
    * @return {Boolean}
    */
    DragList.prototype.isEnterAndMove = function (i, y) {
        // index: 0, 1, 2 ...
        var newIndex = Number(this.itemKeys[i]);
        var beforeIndex = Number(this.itemKeys[i - 1]);

        // { topline: .., bottomLine: ..., el: .. }
        var value = this.itemData[newIndex];
        var beaforeValue = this.itemData[beforeIndex] || null;

        // 有一个bug，拖动速度过快时，index值没有及时改变
        // 所以处于padding处的y值没有被过滤，有大量无效遍历阻塞
        // 所以要再次过滤
        if (beaforeValue && y > beaforeValue.bottomLine && y < value.topLine) {
            return true;
        }

        // 判断被拖拽的元素y轴高度，是否在某个节点的范围之内,同时不在当前节点内
        if (y <= value.bottomLine && y >= value.topLine && newIndex !== obj.index) {
            this.moveItem(newIndex);
            return true;
        } else {
            return false;
        }
    };

    DragList.prototype.moveItem = function (newIndex) {
        //  如果被拖拽元素一次性被往上拖了大于1个位置
        if (obj.index - newIndex > 1) {
            var diff = obj.index - newIndex;

            // 那么有diff个节点需要移动，需要移动diff次
            for (var i = 0; i < diff; i++) {
                // 每次移动相邻节点
                this.moveUp(obj.index, obj.index - 1);
            }
        }

        // 如果被拖拽元素一次性被往下拖了大于1个位置
        if (obj.index - newIndex < -1) {
            var _diff = newIndex - obj.index;
            // 那么有diff个节点需要移动，需要移动diff次
            for (var _i3 = 0; _i3 < _diff; _i3++) {
                // 每次移动相邻节点
                this.moveDown(obj.index, obj.index + 1);
            }
        }

        // 如果只移动了一个位置
        if (Math.abs(obj.index - newIndex) === 1) {
            if (obj.direction === 'up') {
                this.moveUp(obj.index, newIndex);
            } else {
                this.moveDown(obj.index, newIndex);
            }
        }
    };

    DragList.prototype.moveUp = function (nowIndex, newIndex) {
        var value = this.itemData[newIndex];
        // 被进入的元素
        var moveEl = value.el;
        // 被进入元素的高
        var h = (0, _util.getStyle)(moveEl, 'height');

        var moveY = this.itemData[nowIndex].bottomLine - value.topLine - h;

        if (value.el.style.transform && value.el.style.transform !== 'translate(0px, 0px)') {
            value.el.style.transform = 'translate(0px, 0px)';
        } else {
            value.el.style.transform = 'translate(0px, ' + moveY + 'px)';
        }

        var valTop = value.topLine;

        value.bottomLine = this.itemData[nowIndex].bottomLine;
        value.topLine = this.itemData[nowIndex].bottomLine - h;

        this.itemData[nowIndex].topLine = valTop;
        this.itemData[nowIndex].bottomLine = valTop + obj.height;

        // 交换两节点的数据
        this.swapData(nowIndex, newIndex);
    };

    DragList.prototype.moveDown = function (nowIndex, newIndex) {
        // 被进入元素的数据
        var value = this.itemData[newIndex];
        // 被进入的元素
        var moveEl = value.el;
        // 被进入元素的高
        var h = (0, _util.getStyle)(moveEl, 'height');

        var moveY = this.itemData[nowIndex].topLine - value.topLine;

        if (value.el.style.transform && value.el.style.transform !== 'translate(0px, 0px)') {
            value.el.style.transform = 'translate(0px, 0px)';
        } else {
            value.el.style.transform = 'translate(0px, ' + moveY + 'px)';
        }

        // 更新节点的top值和bottom值
        var objTop = this.itemData[nowIndex].topLine;

        this.itemData[nowIndex].bottomLine = value.bottomLine;
        this.itemData[nowIndex].topLine = value.bottomLine - obj.height;

        value.topLine = objTop;
        value.bottomLine = objTop + h;

        // 交换两个节点的数据
        this.swapData(nowIndex, newIndex);
    };

    DragList.prototype.swapData = function (nowIndex, newIndex) {
        // 当位置交换时，itemData里的数据也要做交换
        var temp1 = (0, _assign2.default)({}, this.itemData[newIndex]);
        var temp2 = (0, _assign2.default)({}, this.itemData[nowIndex]);
        var oldIndex = nowIndex;

        // 交换data-index值
        obj.el.setAttribute('data-index', newIndex);
        this.itemData[newIndex].el.setAttribute('data-index', oldIndex);

        // itemData里的数据要做交换
        this.itemData[newIndex] = temp2;
        this.itemData[nowIndex] = temp1;
        // 更新当前index值
        obj.index = newIndex;

        // item数组也要交换
        var oldItem = this.item[oldIndex];

        this.item[oldIndex] = this.item[newIndex];
        this.item[newIndex] = oldItem;
    };

    DragList.prototype._initObjData = function (e) {
        if (e.target.parentNode === this.wrapper) {
            var target = e.target;

            obj.index = Number(target.getAttribute('data-index'));

            obj.x = target.offsetLeft;
            obj.y = target.offsetTop;

            obj.el = target;

            // 鼠标相对元素上方和左边的距离
            obj.diffX = e.pageX - obj.x;
            obj.diffY = e.pageY - obj.y;

            target.style.zIndex = zIndex++;

            // let top = target.offsetTop
            var width = (0, _util.getStyle)(target, 'width');
            var height = (0, _util.getStyle)(target, 'height');

            obj.width = width;
            obj.height = height;

            // 给每个其他元素加上贝塞尔曲线
            // 可优化的点：如果元素过多，可只给上下一部分加？
            for (var i = 0; i < this.item.length; i++) {
                if (this.item[i] !== target) {
                    this.item[i].style.webkitTransition = transitionStyle;
                }
            }

            (0, _util.addClass)(this.wrapper, 'active');
            (0, _util.addClass)(target, 'item-active');

            isDrag = true;
        }
    };

    DragList.prototype._end = function (e) {
        if (isDrag) {
            obj.el.style.webkitTransition = transitionStyle;

            var index = obj.index;

            var top = this.itemData[index].topLine;
            var offTop = obj.el.offsetTop;

            afterElem = this.itemData[index + 1] && this.itemData[index + 1].el || null;

            // 注意当节点没有刷新时，offTop不会变，不管它translate了多少，而top是经过拖拽后计算的应该处于的位置
            // top - offTop 的值就是鼠标松开后，被拖拽元素应该回到的位置
            obj.el.style.transform = 'translate(0px, ' + (top - offTop) + 'px)';
        }
        isDrag = false;
        isMouseDown = false;
    };

    DragList.prototype._transitionEnd = function (e) {
        if (e.target !== obj.el) return;

        (0, _util.removeClass)(this.wrapper, 'active');
        (0, _util.removeClass)(obj.el, 'item-active');

        for (var i = 0; i < this.item.length; i++) {
            this.item[i].style = '';
        }
        // 最后更新列表时, 直接插入节点，而不是原来重新渲染整个列表
        // 当节点很多的时候，比原来快了很多
        if (afterElem) {
            this.wrapper.removeChild(obj.el);
            this.wrapper.insertBefore(obj.el, afterElem);
        } else {
            this.wrapper.appendChild(obj.el);
        }
        if (this.options.dragEnd) {
            this.options.dragEnd.call(this, obj.el);
        }
    };
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(89) });


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(9);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(17);
var toObject = __webpack_require__(15);
var IObject = __webpack_require__(32);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(8)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ })
/******/ ]);