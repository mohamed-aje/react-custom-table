'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0 = require('react');
var md = require('react-icons/md');
var reactTooltip = require('react-tooltip');
var reactWindow = require('react-window');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(undefined);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: true
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    undefined === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;undefined!==g&&(e=""+g);undefined!==a.key&&(e=""+a.key);undefined!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) undefined===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = undefined; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

/**
 * Default locale configuration
 */
var defaultLocale = {
  filterPlaceholder: 'Search...',
  clearFilter: 'Clear',
  noData: 'No data available',
  noPermission: 'No permission to view this data',
  loading: 'Loading...',
  itemsPerPage: 'Items per page',
  exportCSV: 'Export CSV',
  copyTooltip: 'Click to copy',
  copied: 'Copied!',
  pagination: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    total: 'Total {total} items'
  },
  sort: {
    sortAsc: 'Sort ascending',
    sortDesc: 'Sort descending',
    cancelSort: 'Cancel sort'
  },
  actions: {
    view: 'View',
    edit: 'Edit',
    "delete": 'Delete',
    resetPassword: 'Reset Password'
  }
};
/**
 * Default theme configuration
 */
var defaultTheme = {
  primaryColor: '#3498db',
  borderColor: '#e1e8ed',
  headerBg: '#f8fafc',
  rowHoverBg: '#f1f5f9',
  selectedRowBg: '#e3f2fd',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  borderRadius: '8px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
};

/**
 * Custom hook for table sorting
 */
function useTableSort(data, initialSort) {
  var _useState = require$$0.useState(initialSort || []),
    _useState2 = _slicedToArray(_useState, 2),
    sortConfig = _useState2[0],
    setSortConfig = _useState2[1];
  var sortedData = require$$0.useMemo(function () {
    if (sortConfig.length === 0) return data;
    return _toConsumableArray(data).sort(function (a, b) {
      var _iterator = _createForOfIteratorHelper(sortConfig),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var config = _step.value;
          var key = config.key,
            direction = config.direction,
            sorter = config.sorter;
          var comparison = 0;
          if (sorter) {
            comparison = sorter(a, b);
          } else {
            var aValue = getNestedValue(a, key);
            var bValue = getNestedValue(b, key);
            if (aValue < bValue) comparison = -1;else if (aValue > bValue) comparison = 1;
          }
          if (comparison !== 0) {
            return direction === 'asc' ? comparison : -comparison;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return 0;
    });
  }, [data, sortConfig]);
  var handleSort = require$$0.useCallback(function (key) {
    var multiSort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setSortConfig(function (prevConfig) {
      var existingIndex = prevConfig.findIndex(function (config) {
        return config.key === key;
      });
      if (!multiSort) {
        // Single column sort
        if (existingIndex >= 0) {
          var existing = prevConfig[existingIndex];
          if (existing.direction === 'asc') {
            return [_objectSpread2(_objectSpread2({}, existing), {}, {
              direction: 'desc'
            })];
          } else {
            return [];
          }
        } else {
          return [{
            key: key,
            direction: 'asc'
          }];
        }
      } else {
        // Multi-column sort
        var newConfig = _toConsumableArray(prevConfig);
        if (existingIndex >= 0) {
          var _existing = newConfig[existingIndex];
          if (_existing.direction === 'asc') {
            newConfig[existingIndex] = _objectSpread2(_objectSpread2({}, _existing), {}, {
              direction: 'desc'
            });
          } else {
            newConfig.splice(existingIndex, 1);
          }
        } else {
          newConfig.push({
            key: key,
            direction: 'asc'
          });
        }
        return newConfig;
      }
    });
  }, []);
  var resetSort = require$$0.useCallback(function () {
    setSortConfig([]);
  }, []);
  return {
    sortedData: sortedData,
    sortConfig: sortConfig,
    handleSort: handleSort,
    resetSort: resetSort,
    setSortConfig: setSortConfig
  };
}
/**
 * Custom hook for table filtering
 */
function useTableFilter(data, initialFilters) {
  var _useState3 = require$$0.useState(initialFilters || []),
    _useState4 = _slicedToArray(_useState3, 2),
    filterConfig = _useState4[0],
    setFilterConfig = _useState4[1];
  var _useState5 = require$$0.useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    globalSearchTerm = _useState6[0],
    setGlobalSearchTerm = _useState6[1];
  var filteredData = require$$0.useMemo(function () {
    var filtered = data;
    // Apply column filters
    if (filterConfig.length > 0) {
      filtered = filtered.filter(function (record) {
        return filterConfig.every(function (filter) {
          var key = filter.key,
            value = filter.value,
            type = filter.type,
            filterFn = filter.filterFn;
          if (!value && value !== 0) return true;
          if (filterFn) {
            return filterFn(value, record);
          }
          var recordValue = getNestedValue(record, key);
          switch (type) {
            case 'text':
              return String(recordValue).toLowerCase().includes(String(value).toLowerCase());
            case 'select':
              return recordValue === value;
            case 'number':
              return Number(recordValue) === Number(value);
            case 'dateRange':
              if (Array.isArray(value) && value.length === 2) {
                var recordDate = new Date(recordValue);
                var _value$map = value.map(function (d) {
                    return new Date(d);
                  }),
                  _value$map2 = _slicedToArray(_value$map, 2),
                  start = _value$map2[0],
                  end = _value$map2[1];
                return recordDate >= start && recordDate <= end;
              }
              return true;
            default:
              return true;
          }
        });
      });
    }
    // Apply global search
    if (globalSearchTerm) {
      var searchTerm = globalSearchTerm.toLowerCase();
      filtered = filtered.filter(function (record) {
        return Object.values(record).some(function (value) {
          return String(value).toLowerCase().includes(searchTerm);
        });
      });
    }
    return filtered;
  }, [data, filterConfig, globalSearchTerm]);
  var handleFilter = require$$0.useCallback(function (key, value) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
    setFilterConfig(function (prevConfig) {
      var existingIndex = prevConfig.findIndex(function (config) {
        return config.key === key;
      });
      if (!value && value !== 0) {
        // Remove filter
        if (existingIndex >= 0) {
          return prevConfig.filter(function (_, index) {
            return index !== existingIndex;
          });
        }
        return prevConfig;
      }
      var newFilter = {
        key: key,
        value: value,
        type: type
      };
      if (existingIndex >= 0) {
        // Update existing filter
        var newConfig = _toConsumableArray(prevConfig);
        newConfig[existingIndex] = newFilter;
        return newConfig;
      } else {
        // Add new filter
        return [].concat(_toConsumableArray(prevConfig), [newFilter]);
      }
    });
  }, []);
  var clearFilter = require$$0.useCallback(function (key) {
    if (key) {
      setFilterConfig(function (prevConfig) {
        return prevConfig.filter(function (config) {
          return config.key !== key;
        });
      });
    } else {
      setFilterConfig([]);
      setGlobalSearchTerm('');
    }
  }, []);
  var clearAllFilters = require$$0.useCallback(function () {
    setFilterConfig([]);
    setGlobalSearchTerm('');
  }, []);
  return {
    filteredData: filteredData,
    filterConfig: filterConfig,
    globalSearchTerm: globalSearchTerm,
    handleFilter: handleFilter,
    clearFilter: clearFilter,
    clearAllFilters: clearAllFilters,
    setGlobalSearchTerm: setGlobalSearchTerm,
    setFilterConfig: setFilterConfig
  };
}
/**
 * Custom hook for table pagination
 */
function useTablePagination(data) {
  var initialPageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var _useState7 = require$$0.useState(1),
    _useState8 = _slicedToArray(_useState7, 2),
    current = _useState8[0],
    setCurrent = _useState8[1];
  var _useState9 = require$$0.useState(initialPageSize),
    _useState10 = _slicedToArray(_useState9, 2),
    pageSize = _useState10[0],
    setPageSize = _useState10[1];
  var paginatedData = require$$0.useMemo(function () {
    var startIndex = (current - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, current, pageSize]);
  var totalPages = require$$0.useMemo(function () {
    return Math.ceil(data.length / pageSize);
  }, [data.length, pageSize]);
  var handlePageChange = require$$0.useCallback(function (page) {
    setCurrent(page);
  }, []);
  var handlePageSizeChange = require$$0.useCallback(function (newPageSize) {
    setPageSize(newPageSize);
    setCurrent(1); // Reset to first page
  }, []);
  var resetPagination = require$$0.useCallback(function () {
    setCurrent(1);
  }, []);
  // Reset to first page when data changes
  require$$0.useEffect(function () {
    setCurrent(1);
  }, [data.length]);
  return {
    paginatedData: paginatedData,
    current: current,
    pageSize: pageSize,
    totalPages: totalPages,
    total: data.length,
    handlePageChange: handlePageChange,
    handlePageSizeChange: handlePageSizeChange,
    resetPagination: resetPagination
  };
}
/**
 * Custom hook for table selection
 */
function useTableSelection(data) {
  var rowKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'checkbox';
  var _useState11 = require$$0.useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedKeys = _useState12[0],
    setSelectedKeys = _useState12[1];
  var getRowKey = require$$0.useCallback(function (record, index) {
    return typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey] || index;
  }, [rowKey]);
  var selectedRows = require$$0.useMemo(function () {
    return data.filter(function (record, index) {
      var key = getRowKey(record, index);
      return selectedKeys.includes(key);
    });
  }, [data, selectedKeys, getRowKey]);
  var handleSelect = require$$0.useCallback(function (record, index, selected) {
    var key = getRowKey(record, index);
    if (type === 'radio') {
      setSelectedKeys(selected ? [key] : []);
    } else {
      setSelectedKeys(function (prev) {
        return selected ? [].concat(_toConsumableArray(prev), [key]) : prev.filter(function (k) {
          return k !== key;
        });
      });
    }
  }, [getRowKey, type]);
  var handleSelectAll = require$$0.useCallback(function (selected) {
    if (type === 'checkbox') {
      setSelectedKeys(selected ? data.map(function (record, index) {
        return getRowKey(record, index);
      }) : []);
    }
  }, [data, getRowKey, type]);
  var isSelected = require$$0.useCallback(function (record, index) {
    var key = getRowKey(record, index);
    return selectedKeys.includes(key);
  }, [selectedKeys, getRowKey]);
  var isAllSelected = require$$0.useMemo(function () {
    return data.length > 0 && selectedKeys.length === data.length;
  }, [data.length, selectedKeys.length]);
  var isIndeterminate = require$$0.useMemo(function () {
    return selectedKeys.length > 0 && selectedKeys.length < data.length;
  }, [data.length, selectedKeys.length]);
  var clearSelection = require$$0.useCallback(function () {
    setSelectedKeys([]);
  }, []);
  return {
    selectedKeys: selectedKeys,
    selectedRows: selectedRows,
    handleSelect: handleSelect,
    handleSelectAll: handleSelectAll,
    isSelected: isSelected,
    isAllSelected: isAllSelected,
    isIndeterminate: isIndeterminate,
    clearSelection: clearSelection,
    setSelectedKeys: setSelectedKeys
  };
}
/**
 * Utility function to get nested object values
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce(function (current, key) {
    return current === null || current === undefined ? undefined : current[key];
  }, obj);
}
/**
 * Utility function to debounce function calls
 */
function useDebounce(value, delay) {
  var _useState13 = require$$0.useState(value),
    _useState14 = _slicedToArray(_useState13, 2),
    debouncedValue = _useState14[0],
    setDebouncedValue = _useState14[1];
  require$$0.useEffect(function () {
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);
    return function () {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
/**
 * Custom hook for localStorage persistence
 */
function useLocalStorage(key, initialValue) {
  var _useState15 = require$$0.useState(function () {
      try {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.warn("Error reading localStorage key \"".concat(key, "\":"), error);
        return initialValue;
      }
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    storedValue = _useState16[0],
    setStoredValue = _useState16[1];
  var setValue = require$$0.useCallback(function (value) {
    try {
      var valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn("Error setting localStorage key \"".concat(key, "\":"), error);
    }
  }, [key, storedValue]);
  return [storedValue, setValue];
}
/**
 * Export utilities
 */
var exportUtils = {
  /**
   * Convert data to CSV format
   */
  toCSV: function toCSV(data, columns) {
    var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : columns;
    var csvHeaders = headers.join(',');
    var csvRows = data.map(function (row) {
      return columns.map(function (col) {
        var value = getNestedValue(row, col);
        // Escape commas and quotes in CSV
        var stringValue = String(value !== null && value !== undefined ? value : '');
        return stringValue.includes(',') || stringValue.includes('"') ? "\"".concat(stringValue.replace(/"/g, '""'), "\"") : stringValue;
      }).join(',');
    });
    return [csvHeaders].concat(_toConsumableArray(csvRows)).join('\n');
  },
  /**
   * Download CSV file
   */
  downloadCSV: function downloadCSV(csvContent) {
    var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'table-data.csv';
    var blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;'
    });
    var link = document.createElement('a');
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }
};

var styles$4 = {"paginationContainer":"Pagination-module_paginationContainer__zKrKX","totalInfo":"Pagination-module_totalInfo__oEuXo","paginationControls":"Pagination-module_paginationControls__vJdRi","pageButton":"Pagination-module_pageButton__J5g8l","disabled":"Pagination-module_disabled__wxTqn","pageNumbers":"Pagination-module_pageNumbers__U6yA3","pageNumber":"Pagination-module_pageNumber__8FV1g","active":"Pagination-module_active__2AofC","pageSizeChanger":"Pagination-module_pageSizeChanger__Vskmq","pageSizeSelect":"Pagination-module_pageSizeSelect__BI5oT","quickJumper":"Pagination-module_quickJumper__fi69f","jumpInput":"Pagination-module_jumpInput__ER8cC"};

var Pagination = function Pagination(_ref) {
  var current = _ref.current,
    total = _ref.total,
    pageSize = _ref.pageSize,
    totalPages = _ref.totalPages,
    onChange = _ref.onChange,
    onPageSizeChange = _ref.onPageSizeChange,
    _ref$showSizeChanger = _ref.showSizeChanger,
    showSizeChanger = _ref$showSizeChanger === undefined ? true : _ref$showSizeChanger,
    _ref$showQuickJumper = _ref.showQuickJumper,
    showQuickJumper = _ref$showQuickJumper === undefined ? false : _ref$showQuickJumper,
    _ref$showTotal = _ref.showTotal,
    showTotal = _ref$showTotal === undefined ? true : _ref$showTotal,
    locale = _ref.locale,
    _ref$testId = _ref.testId,
    testId = _ref$testId === undefined ? 'pagination' : _ref$testId;
  var startIndex = (current - 1) * pageSize + 1;
  var endIndex = Math.min(current * pageSize, total);
  var renderTotal = function renderTotal() {
    if (showTotal === false) return null;
    if (typeof showTotal === 'function') {
      return showTotal(total, [startIndex, endIndex]);
    }
    return jsxRuntimeExports.jsxs("span", {
      className: styles$4.totalInfo,
      children: ["Showing ", startIndex, " to ", endIndex, " of ", total, " entries"]
    });
  };
  var renderPageNumbers = function renderPageNumbers() {
    var pages = [];
    var maxVisiblePages = 5;
    var startPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
    var endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    var _loop = function _loop(i) {
      pages.push(jsxRuntimeExports.jsx("button", {
        className: "".concat(styles$4.pageNumber, " ").concat(i === current ? styles$4.active : ''),
        onClick: function onClick() {
          return onChange(i);
        },
        "data-testid": "".concat(testId, "-page-").concat(i),
        children: i
      }, i));
    };
    for (var i = startPage; i <= endPage; i++) {
      _loop(i);
    }
    return pages;
  };
  if (totalPages <= 1) return null;
  return jsxRuntimeExports.jsxs("div", {
    className: styles$4.paginationContainer,
    "data-testid": testId,
    children: [renderTotal(), jsxRuntimeExports.jsxs("div", {
      className: styles$4.paginationControls,
      children: [jsxRuntimeExports.jsx("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === 1 ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(1);
        },
        disabled: current === 1,
        "data-testid": "".concat(testId, "-first"),
        title: "First Page",
        children: jsxRuntimeExports.jsx(md.MdFirstPage, {})
      }), jsxRuntimeExports.jsxs("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === 1 ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(current - 1);
        },
        disabled: current === 1,
        "data-testid": "".concat(testId, "-previous"),
        title: locale.pagination.previous,
        children: [jsxRuntimeExports.jsx(md.MdNavigateBefore, {}), locale.pagination.previous]
      }), jsxRuntimeExports.jsx("div", {
        className: styles$4.pageNumbers,
        children: renderPageNumbers()
      }), jsxRuntimeExports.jsxs("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === totalPages ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(current + 1);
        },
        disabled: current === totalPages,
        "data-testid": "".concat(testId, "-next"),
        title: locale.pagination.next,
        children: [locale.pagination.next, jsxRuntimeExports.jsx(md.MdNavigateNext, {})]
      }), jsxRuntimeExports.jsx("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === totalPages ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(totalPages);
        },
        disabled: current === totalPages,
        "data-testid": "".concat(testId, "-last"),
        title: "Last Page",
        children: jsxRuntimeExports.jsx(md.MdLastPage, {})
      })]
    }), showSizeChanger && onPageSizeChange && jsxRuntimeExports.jsx("div", {
      className: styles$4.pageSizeChanger,
      children: jsxRuntimeExports.jsx("select", {
        value: pageSize,
        onChange: function onChange(e) {
          return onPageSizeChange(Number(e.target.value));
        },
        className: styles$4.pageSizeSelect,
        "data-testid": "".concat(testId, "-page-size"),
        children: [10, 25, 50, 100].map(function (size) {
          return jsxRuntimeExports.jsxs("option", {
            value: size,
            children: [size, " / page"]
          }, size);
        })
      })
    }), showQuickJumper && jsxRuntimeExports.jsxs("div", {
      className: styles$4.quickJumper,
      children: [jsxRuntimeExports.jsx("span", {
        children: "Go to"
      }), jsxRuntimeExports.jsx("input", {
        type: "number",
        min: 1,
        max: totalPages,
        className: styles$4.jumpInput,
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            var page = parseInt(e.target.value);
            if (page >= 1 && page <= totalPages) {
              onChange(page);
              e.target.value = '';
            }
          }
        },
        "data-testid": "".concat(testId, "-quick-jump")
      })]
    })]
  });
};

var styles$3 = {"filterContainer":"ColumnFilter-module_filterContainer__PYTU9","filterContent":"ColumnFilter-module_filterContent__fQtAr","filterInput":"ColumnFilter-module_filterInput__6got7","filterSelect":"ColumnFilter-module_filterSelect__sI3-I","dateRangeContainer":"ColumnFilter-module_dateRangeContainer__V8fkt","dateInput":"ColumnFilter-module_dateInput__GNxBa","dateSeparator":"ColumnFilter-module_dateSeparator__OPhly","filterActions":"ColumnFilter-module_filterActions__iE-1n","applyButton":"ColumnFilter-module_applyButton__khQMi","clearButton":"ColumnFilter-module_clearButton__PwPnP","filterIcon":"ColumnFilter-module_filterIcon__9p3rY","filterIconActive":"ColumnFilter-module_filterIconActive__DBUgq"};

var ColumnFilter = function ColumnFilter(_ref) {
  var column = _ref.column,
    value = _ref.value,
    onChange = _ref.onChange,
    onClear = _ref.onClear;
    _ref.locale;
  var _useState = require$$0.useState(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var _useState3 = require$$0.useState(Array.isArray(value) ? value : ['', '']),
    _useState4 = _slicedToArray(_useState3, 2),
    dateRange = _useState4[0],
    setDateRange = _useState4[1];
  var handleApply = function handleApply() {
    if (column.filterType === 'dateRange') {
      onChange(dateRange.every(function (date) {
        return date;
      }) ? dateRange : null);
    } else {
      onChange(localValue || null);
    }
  };
  var handleClear = function handleClear() {
    setLocalValue('');
    setDateRange(['', '']);
    onClear();
  };
  var renderFilterInput = function renderFilterInput() {
    var _a;
    switch (column.filterType) {
      case 'select':
        return jsxRuntimeExports.jsxs("select", {
          value: localValue,
          onChange: function onChange(e) {
            return setLocalValue(e.target.value);
          },
          className: styles$3.filterSelect,
          children: [jsxRuntimeExports.jsx("option", {
            value: "",
            children: "All"
          }), (_a = column.filterOptions) === null || _a === undefined ? undefined : _a.map(function (option) {
            return jsxRuntimeExports.jsx("option", {
              value: option.value,
              children: option.label
            }, option.value);
          })]
        });
      case 'number':
        return jsxRuntimeExports.jsx("input", {
          type: "number",
          value: localValue,
          onChange: function onChange(e) {
            return setLocalValue(e.target.value);
          },
          placeholder: "Enter number...",
          className: styles$3.filterInput
        });
      case 'dateRange':
        return jsxRuntimeExports.jsxs("div", {
          className: styles$3.dateRangeContainer,
          children: [jsxRuntimeExports.jsx("input", {
            type: "date",
            value: dateRange[0],
            onChange: function onChange(e) {
              return setDateRange([e.target.value, dateRange[1]]);
            },
            className: styles$3.dateInput
          }), jsxRuntimeExports.jsx("span", {
            className: styles$3.dateSeparator,
            children: "to"
          }), jsxRuntimeExports.jsx("input", {
            type: "date",
            value: dateRange[1],
            onChange: function onChange(e) {
              return setDateRange([dateRange[0], e.target.value]);
            },
            className: styles$3.dateInput
          })]
        });
      default:
        return jsxRuntimeExports.jsx("input", {
          type: "text",
          value: localValue,
          onChange: function onChange(e) {
            return setLocalValue(e.target.value);
          },
          placeholder: "Filter ".concat(column.title.toLowerCase(), "..."),
          className: styles$3.filterInput
        });
    }
  };
  return jsxRuntimeExports.jsx("div", {
    className: styles$3.filterContainer,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    children: jsxRuntimeExports.jsxs("div", {
      className: styles$3.filterContent,
      children: [renderFilterInput(), jsxRuntimeExports.jsxs("div", {
        className: styles$3.filterActions,
        children: [jsxRuntimeExports.jsx("button", {
          onClick: handleApply,
          className: styles$3.applyButton,
          title: "Apply Filter",
          children: jsxRuntimeExports.jsx(md.MdCheck, {})
        }), jsxRuntimeExports.jsx("button", {
          onClick: handleClear,
          className: styles$3.clearButton,
          title: "Clear Filter",
          children: jsxRuntimeExports.jsx(md.MdClose, {})
        })]
      })]
    })
  });
};

var styles$2 = {"mobileCardContainer":"MobileCard-module_mobileCardContainer__Q8Jex","card":"MobileCard-module_card__UDZER","cardSelection":"MobileCard-module_cardSelection__NFE5G","cardCheckbox":"MobileCard-module_cardCheckbox__WU3-E","cardBody":"MobileCard-module_cardBody__PyUSU","cardField":"MobileCard-module_cardField__X07Ke","cardLabel":"MobileCard-module_cardLabel__mbn7y","cardValue":"MobileCard-module_cardValue__wE8R-","cardActions":"MobileCard-module_cardActions__lft1B","cardActionButton":"MobileCard-module_cardActionButton__-eGdJ","cardActionButtonprimary":"MobileCard-module_cardActionButtonprimary__Icx3E","cardActionButtondanger":"MobileCard-module_cardActionButtondanger__FG-X4","cardActionButtonlink":"MobileCard-module_cardActionButtonlink__pNagZ","mobileEmptyState":"MobileCard-module_mobileEmptyState__4-m-0"};

var MobileCard = function MobileCard(_ref) {
  var data = _ref.data,
    columns = _ref.columns,
    _ref$actions = _ref.actions,
    actions = _ref$actions === undefined ? [] : _ref$actions,
    selection = _ref.selection,
    locale = _ref.locale;
    _ref.theme;
    var onRowClick = _ref.onRowClick,
    _ref$testId = _ref.testId,
    testId = _ref$testId === undefined ? 'mobile-card' : _ref$testId;
  var renderCardContent = function renderCardContent(record, index) {
    return jsxRuntimeExports.jsxs("div", {
      className: styles$2.card,
      onClick: function onClick(e) {
        return onRowClick === null || onRowClick === undefined ? undefined : onRowClick(record, index, e);
      },
      "data-testid": "".concat(testId, "-item-").concat(index),
      children: [selection && jsxRuntimeExports.jsx("div", {
        className: styles$2.cardSelection,
        children: jsxRuntimeExports.jsx("input", {
          type: "checkbox",
          checked: selection.isSelected(record, index),
          onChange: function onChange(e) {
            return selection.handleSelect(record, index, e.target.checked);
          },
          className: styles$2.cardCheckbox
        })
      }), jsxRuntimeExports.jsx("div", {
        className: styles$2.cardBody,
        children: columns.map(function (column) {
          if (column.hidden) return null;
          var value = column.dataIndex ? typeof column.dataIndex === 'function' ? column.dataIndex(record, index) : getNestedValue(record, column.dataIndex) : record[column.key];
          return jsxRuntimeExports.jsxs("div", {
            className: styles$2.cardField,
            children: [jsxRuntimeExports.jsxs("span", {
              className: styles$2.cardLabel,
              children: [column.title, ":"]
            }), jsxRuntimeExports.jsx("span", {
              className: styles$2.cardValue,
              children: column.render ? column.render(value, record, index) : String(value || '')
            })]
          }, column.key);
        })
      }), actions.length > 0 && jsxRuntimeExports.jsx("div", {
        className: styles$2.cardActions,
        children: actions.map(function (action) {
          return jsxRuntimeExports.jsxs("button", {
            className: "".concat(styles$2.cardActionButton, " ").concat(styles$2["cardActionButton".concat(action.type || 'default')]),
            onClick: function onClick(e) {
              e.stopPropagation();
              action.onClick(record, index);
            },
            disabled: typeof action.disabled === 'function' ? action.disabled(record, index) : action.disabled,
            title: action.tooltip,
            children: [action.icon, jsxRuntimeExports.jsx("span", {
              children: action.label
            })]
          }, action.key);
        })
      })]
    }, index);
  };
  if (data.length === 0) {
    return jsxRuntimeExports.jsx("div", {
      className: styles$2.mobileEmptyState,
      "data-testid": "".concat(testId, "-empty"),
      children: jsxRuntimeExports.jsx("p", {
        children: locale.noData
      })
    });
  }
  return jsxRuntimeExports.jsx("div", {
    className: styles$2.mobileCardContainer,
    "data-testid": testId,
    children: data.map(renderCardContent)
  });
};

var styles$1 = {"virtualizedContainer":"VirtualizedTable-module_virtualizedContainer__BJSO2","virtualizedHeader":"VirtualizedTable-module_virtualizedHeader__NM5YL","virtualHeaderCell":"VirtualizedTable-module_virtualHeaderCell__qhVoH","virtualizedList":"VirtualizedTable-module_virtualizedList__asBjg","virtualRow":"VirtualizedTable-module_virtualRow__t-Kw5","virtualCell":"VirtualizedTable-module_virtualCell__JFIEf","virtualizedEmptyState":"VirtualizedTable-module_virtualizedEmptyState__dGBjY"};

var Row = function Row(_ref) {
  var index = _ref.index,
    style = _ref.style,
    data = _ref.data;
  var items = data.items,
    columns = data.columns;
  var record = items[index];
  return jsxRuntimeExports.jsx("div", {
    style: style,
    className: styles$1.virtualRow,
    children: columns.map(function (column) {
      var value = column.dataIndex ? typeof column.dataIndex === 'function' ? column.dataIndex(record, index) : getNestedValue(record, column.dataIndex) : record[column.key];
      return jsxRuntimeExports.jsx("div", {
        className: styles$1.virtualCell,
        style: {
          width: column.width || 'auto',
          textAlign: column.align || 'left'
        },
        children: column.render ? column.render(value, record, index) : String(value || '')
      }, column.key);
    })
  });
};
var VirtualizedTable = function VirtualizedTable(_ref2) {
  var data = _ref2.data,
    columns = _ref2.columns,
    rowHeight = _ref2.rowHeight,
    height = _ref2.height,
    locale = _ref2.locale;
    _ref2.theme;
    var _ref2$testId = _ref2.testId,
    testId = _ref2$testId === undefined ? 'virtualized-table' : _ref2$testId;
  var itemData = require$$0.useMemo(function () {
    return {
      items: data,
      columns: columns.filter(function (col) {
        return !col.hidden;
      })
    };
  }, [data, columns]);
  if (data.length === 0) {
    return jsxRuntimeExports.jsx("div", {
      className: styles$1.virtualizedEmptyState,
      "data-testid": "".concat(testId, "-empty"),
      children: jsxRuntimeExports.jsx("p", {
        children: locale.noData
      })
    });
  }
  return jsxRuntimeExports.jsxs("div", {
    className: styles$1.virtualizedContainer,
    "data-testid": testId,
    children: [jsxRuntimeExports.jsx("div", {
      className: styles$1.virtualizedHeader,
      children: itemData.columns.map(function (column) {
        return jsxRuntimeExports.jsx("div", {
          className: styles$1.virtualHeaderCell,
          style: {
            width: column.width || 'auto',
            textAlign: column.align || 'left'
          },
          children: column.title
        }, column.key);
      })
    }), jsxRuntimeExports.jsx(reactWindow.FixedSizeList, {
      height: height,
      itemCount: data.length,
      itemSize: rowHeight,
      itemData: itemData,
      className: styles$1.virtualizedList,
      children: Row
    })]
  });
};

var styles = {"tableContainer":"Table-module_tableContainer__Gf0Qf","tableHeader":"Table-module_tableHeader__fbcw4","tableTitle":"Table-module_tableTitle__y3Qhu","tableControls":"Table-module_tableControls__mVIOU","globalSearch":"Table-module_globalSearch__4tDAx","searchInput":"Table-module_searchInput__WLr2q","clearSearchButton":"Table-module_clearSearchButton__l3SKK","clearFiltersButton":"Table-module_clearFiltersButton__Hsl9a","exportButton":"Table-module_exportButton__UzjQC","recordSummaryWrapper":"Table-module_recordSummaryWrapper__1qLNb","recordSummary":"Table-module_recordSummary__t-SrI","itemsPerPageContainer":"Table-module_itemsPerPageContainer__KD-Fx","itemsPerPageLabel":"Table-module_itemsPerPageLabel__XWVXu","tableWrapper":"Table-module_tableWrapper__WneDh","table":"Table-module_table__5TBGM","stickyHeader":"Table-module_stickyHeader__sMsY1","headerContent":"Table-module_headerContent__XcZcG","headerTitle":"Table-module_headerTitle__KGNPP","sortIcon":"Table-module_sortIcon__jXcZl","sortIconActive":"Table-module_sortIconActive__aG6Fm","filterIcon":"Table-module_filterIcon__VJsZq","filterIconActive":"Table-module_filterIconActive__-r8-k","tableRow":"Table-module_tableRow__EhQU9","selectedRow":"Table-module_selectedRow__y-4M9","tableCell":"Table-module_tableCell__H-Q5E","copyableCell":"Table-module_copyableCell__qx7s3","copyableContent":"Table-module_copyableContent__UegFX","copyIcon":"Table-module_copyIcon__OKgsx","checkboxContainer":"Table-module_checkboxContainer__9W80K","checkbox":"Table-module_checkbox__uB8f0","disabled":"Table-module_disabled__dHuoo","actionsContainer":"Table-module_actionsContainer__qd3Qj","actionButton":"Table-module_actionButton__gBF0x","actionButtonprimary":"Table-module_actionButtonprimary__YMSZW","actionButtondanger":"Table-module_actionButtondanger__0EQrj","actionButtonlink":"Table-module_actionButtonlink__65ltf","stickyColumn":"Table-module_stickyColumn__sTdbA","emptyState":"Table-module_emptyState__E2nSH","emptyStateContent":"Table-module_emptyStateContent__brD2H","emptyStateIcon":"Table-module_emptyStateIcon__2NNB-","loadingContainer":"Table-module_loadingContainer__WazmT","loadingSpinner":"Table-module_loadingSpinner__5xHS3","spinner":"Table-module_spinner__KKiox","spin":"Table-module_spin__VBj3g","noPermission":"Table-module_noPermission__8Zv5E","tableInfo":"Table-module_tableInfo__S62Aj","paginationContainer":"Table-module_paginationContainer__mjDju","pagination":"Table-module_pagination__MZurs","active":"Table-module_active__etioB","paginationLink":"Table-module_paginationLink__w5e4s","paginationDisabled":"Table-module_paginationDisabled__2200t","disabledPagination":"Table-module_disabledPagination__fIeBb","warn":"Table-module_warn__rebJm","infoSection":"Table-module_infoSection__ALjGg","flightName":"Table-module_flightName__GxnBT","carrier":"Table-module_carrier__ITOGN","flightDetail":"Table-module_flightDetail__w7tVX","exportContainer":"Table-module_exportContainer__Mhvbf","title":"Table-module_title__CyT9-","columnHeader":"Table-module_columnHeader__E-0hn","editIcon":"Table-module_editIcon__HbrGj"};

var _excluded = ["columns", "data", "title", "loading", "loadingComponent", "pagination", "sortConfig", "multiSort", "filterConfig", "globalSearch", "searchPlaceholder", "actions", "rowSelection", "rowKey", "rowClassName", "rowStyle", "tableStyle", "containerStyle", "theme", "locale", "exportConfig", "virtualization", "responsive", "mobileCardView", "stickyHeader", "stickyColumns", "resizable", "reorderable", "emptyState", "permissions", "onSort", "onFilter", "onPaginationChange", "onRowClick", "onRowDoubleClick", "onRowContextMenu", "onColumnResize", "onColumnReorder", "onExport", "aria-label", "aria-describedby", "data-testid"];
function Table(_ref) {
  var columns = _ref.columns,
    _ref$data = _ref.data,
    data = _ref$data === undefined ? [] : _ref$data,
    title = _ref.title,
    _ref$loading = _ref.loading,
    loading = _ref$loading === undefined ? false : _ref$loading,
    loadingComponent = _ref.loadingComponent,
    _ref$pagination = _ref.pagination,
    pagination = _ref$pagination === undefined ? {
      pageSize: 10,
      current: 1,
      showSizeChanger: true
    } : _ref$pagination,
    _ref$sortConfig = _ref.sortConfig,
    initialSortConfig = _ref$sortConfig === undefined ? [] : _ref$sortConfig,
    _ref$multiSort = _ref.multiSort,
    multiSort = _ref$multiSort === undefined ? false : _ref$multiSort,
    _ref$filterConfig = _ref.filterConfig,
    initialFilterConfig = _ref$filterConfig === undefined ? [] : _ref$filterConfig,
    _ref$globalSearch = _ref.globalSearch,
    globalSearch = _ref$globalSearch === undefined ? true : _ref$globalSearch,
    searchPlaceholder = _ref.searchPlaceholder,
    _ref$actions = _ref.actions,
    actions = _ref$actions === undefined ? [] : _ref$actions,
    rowSelection = _ref.rowSelection,
    _ref$rowKey = _ref.rowKey,
    rowKey = _ref$rowKey === undefined ? 'id' : _ref$rowKey,
    rowClassName = _ref.rowClassName,
    rowStyle = _ref.rowStyle,
    tableStyle = _ref.tableStyle,
    containerStyle = _ref.containerStyle,
    _ref$theme = _ref.theme,
    theme = _ref$theme === undefined ? {} : _ref$theme,
    _ref$locale = _ref.locale,
    locale = _ref$locale === undefined ? {} : _ref$locale,
    exportConfig = _ref.exportConfig,
    _ref$virtualization = _ref.virtualization,
    virtualization = _ref$virtualization === undefined ? {
      enabled: false,
      threshold: 1000
    } : _ref$virtualization,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === undefined ? {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400
    } : _ref$responsive,
    _ref$mobileCardView = _ref.mobileCardView,
    mobileCardView = _ref$mobileCardView === undefined ? true : _ref$mobileCardView,
    _ref$stickyHeader = _ref.stickyHeader,
    stickyHeader = _ref$stickyHeader === undefined ? false : _ref$stickyHeader;
    _ref.stickyColumns;
    _ref.resizable;
    var _ref$reorderable = _ref.reorderable,
    reorderable = _ref$reorderable === undefined ? false : _ref$reorderable,
    emptyState = _ref.emptyState,
    _ref$permissions = _ref.permissions,
    permissions = _ref$permissions === undefined ? {
      read: true,
      write: true,
      "delete": true,
      "export": true
    } : _ref$permissions,
    onSort = _ref.onSort,
    onFilter = _ref.onFilter;
    _ref.onPaginationChange;
    var onRowClick = _ref.onRowClick,
    onRowDoubleClick = _ref.onRowDoubleClick,
    onRowContextMenu = _ref.onRowContextMenu,
    onColumnResize = _ref.onColumnResize;
    _ref.onColumnReorder;
    var onExport = _ref.onExport,
    ariaLabel = _ref['aria-label'],
    ariaDescribedBy = _ref['aria-describedby'],
    _ref$dataTestid = _ref['data-testid'],
    testId = _ref$dataTestid === undefined ? 'react-pro-table' : _ref$dataTestid,
    legacyProps = _objectWithoutProperties(_ref, _excluded);
  // Merge with default configurations
  var mergedLocale = _objectSpread2(_objectSpread2({}, defaultLocale), locale);
  var mergedTheme = _objectSpread2(_objectSpread2({}, defaultTheme), theme);
  var _useLocalStorage = useLocalStorage("table-column-widths-".concat(testId), {}),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    columnWidths = _useLocalStorage2[0],
    setColumnWidths = _useLocalStorage2[1];
  var _useLocalStorage3 = useLocalStorage("table-column-order-".concat(testId), columns.map(function (col) {
      return col.key;
    })),
    _useLocalStorage4 = _slicedToArray(_useLocalStorage3, 2),
    columnOrder = _useLocalStorage4[0];
    _useLocalStorage4[1];
  var _useState = require$$0.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    copiedCell = _useState2[0],
    setCopiedCell = _useState2[1];
  var _useState3 = require$$0.useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    filterVisible = _useState4[0],
    setFilterVisible = _useState4[1];
  var _useState5 = require$$0.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isMobile = _useState6[0],
    setIsMobile = _useState6[1];
  var _useTableSort = useTableSort(data, initialSortConfig),
    sortedData = _useTableSort.sortedData,
    sortConfig = _useTableSort.sortConfig,
    handleSort = _useTableSort.handleSort;
    _useTableSort.resetSort;
    _useTableSort.setSortConfig;
  var _useTableFilter = useTableFilter(sortedData, initialFilterConfig),
    filteredData = _useTableFilter.filteredData,
    filterConfig = _useTableFilter.filterConfig,
    globalSearchTerm = _useTableFilter.globalSearchTerm,
    handleFilter = _useTableFilter.handleFilter,
    clearFilter = _useTableFilter.clearFilter,
    clearAllFilters = _useTableFilter.clearAllFilters,
    setGlobalSearchTerm = _useTableFilter.setGlobalSearchTerm;
  useDebounce(globalSearchTerm, 300);
  var _useTablePagination = useTablePagination(filteredData, pagination === false ? filteredData.length : (pagination === null || pagination === undefined ? undefined : pagination.pageSize) || 10),
    paginatedData = _useTablePagination.paginatedData,
    current = _useTablePagination.current,
    pageSize = _useTablePagination.pageSize,
    totalPages = _useTablePagination.totalPages,
    total = _useTablePagination.total,
    handlePageChange = _useTablePagination.handlePageChange,
    handlePageSizeChange = _useTablePagination.handlePageSizeChange,
    resetPagination = _useTablePagination.resetPagination;
  var selection = useTableSelection(paginatedData, rowKey, (rowSelection === null || rowSelection === undefined ? undefined : rowSelection.type) || 'checkbox');
  //Legacy props support for backward compatibility
  require$$0.useEffect(function () {
    if (legacyProps.columns && legacyProps.columnDisplayNames) {
      console.warn('Using legacy columns prop. Please migrate to new columns format.');
    }
  }, [legacyProps]);
  require$$0.useEffect(function () {
    var checkMobile = function checkMobile() {
      setIsMobile(window.innerWidth < (responsive.sm || 768));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return function () {
      return window.removeEventListener('resize', checkMobile);
    };
  }, [responsive.sm]);
  //Column management
  var processedColumns = require$$0.useMemo(function () {
    var processed = columns.map(function (col) {
      return _objectSpread2(_objectSpread2({}, col), {}, {
        width: columnWidths[col.key] || col.width
      });
    });
    //Apply column order if reorderable
    if (reorderable) {
      processed = columnOrder.map(function (key) {
        return processed.find(function (col) {
          return col.key === key;
        });
      }).filter(Boolean);
    }
    return processed.filter(function (col) {
      return !col.hidden;
    });
  }, [columns, columnWidths, columnOrder, reorderable]);
  var handleSortClick = require$$0.useCallback(function (columnKey) {
    handleSort(columnKey, multiSort);
    onSort === null || onSort === undefined ? undefined : onSort(sortConfig);
  }, [handleSort, multiSort, sortConfig, onSort]);
  var handleFilterChange = require$$0.useCallback(function (columnKey, value, type) {
    handleFilter(columnKey, value, type);
    resetPagination();
    onFilter === null || onFilter === undefined ? undefined : onFilter(filterConfig);
  }, [handleFilter, resetPagination, filterConfig, onFilter]);
  var handleCellCopy = require$$0.useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(value, cellKey) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (value) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.prev = 2;
            _context.next = 5;
            return navigator.clipboard.writeText(String(value));
          case 5:
            setCopiedCell(cellKey);
            setTimeout(function () {
              return setCopiedCell(null);
            }, 2000);
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.warn('Failed to copy to clipboard:', _context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 9]]);
    }));
    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  var handleExportData = require$$0.useCallback(function () {
    if (!onExport && !exportConfig) {
      // Default CSV export
      var exportColumns = (exportConfig === null || exportConfig === undefined ? undefined : exportConfig.columns) || processedColumns.map(function (col) {
        return col.key;
      });
      var exportHeaders = exportColumns.map(function (key) {
        var column = processedColumns.find(function (col) {
          return col.key === key;
        });
        return (column === null || column === undefined ? undefined : column.title) || key;
      });
      var csvContent = exportUtils.toCSV((exportConfig === null || exportConfig === undefined ? undefined : exportConfig.transformer) ? exportConfig.transformer(filteredData) : filteredData, exportColumns, exportHeaders);
      exportUtils.downloadCSV(csvContent, (exportConfig === null || exportConfig === undefined ? undefined : exportConfig.filename) || 'table-data.csv');
    } else {
      onExport === null || onExport === undefined ? undefined : onExport(filteredData, exportConfig || {});
    }
  }, [onExport, exportConfig, processedColumns, filteredData]);
  require$$0.useCallback(function (columnKey, width) {
    setColumnWidths(function (prev) {
      return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, columnKey, width));
    });
    onColumnResize === null || onColumnResize === undefined ? undefined : onColumnResize(columnKey, width);
  }, [setColumnWidths, onColumnResize]);
  // Render helpers
  var renderSortIcon = function renderSortIcon(column) {
    if (!column.sortable) return null;
    var sortState = sortConfig.find(function (config) {
      return config.key === column.key;
    });
    if (!sortState) {
      return jsxRuntimeExports.jsx(md.MdUnfoldMore, {
        className: styles.sortIcon
      });
    }
    return sortState.direction === 'asc' ? jsxRuntimeExports.jsx(md.MdArrowUpward, {
      className: "".concat(styles.sortIcon, " ").concat(styles.sortIconActive)
    }) : jsxRuntimeExports.jsx(md.MdArrowDownward, {
      className: "".concat(styles.sortIcon, " ").concat(styles.sortIconActive)
    });
  };
  var renderCellContent = function renderCellContent(value, record, column, index) {
    // Custom render function
    if (column.render) {
      return column.render(value, record, index);
    }
    // Copyable cell
    if (column.copyable) {
      var cellKey = "".concat(getRowKey(record, index), "-").concat(column.key);
      var isCopied = copiedCell === cellKey;
      return jsxRuntimeExports.jsxs("div", {
        className: styles.copyableCell,
        children: [jsxRuntimeExports.jsx("span", {
          onClick: function onClick() {
            return handleCellCopy(value, cellKey);
          },
          className: styles.copyableContent,
          "data-tooltip-id": "copy-tooltip-".concat(cellKey),
          "data-tooltip-content": isCopied ? mergedLocale.copied : mergedLocale.copyTooltip,
          children: String(value || '')
        }), jsxRuntimeExports.jsx(md.MdContentCopy, {
          className: styles.copyIcon,
          onClick: function onClick() {
            return handleCellCopy(value, cellKey);
          }
        }), jsxRuntimeExports.jsx(reactTooltip.Tooltip, {
          id: "copy-tooltip-".concat(cellKey)
        })]
      });
    }
    return jsxRuntimeExports.jsx("span", {
      children: String(value || '')
    });
  };
  var renderHeaderCell = function renderHeaderCell(column) {
    var _a;
    return jsxRuntimeExports.jsxs("th", {
      className: "".concat(styles.tableHeader, " ").concat(column.fixed ? styles.stickyColumn : ''),
      style: _objectSpread2({
        width: column.width,
        minWidth: column.minWidth,
        maxWidth: column.maxWidth,
        textAlign: column.align || 'left'
      }, column.headerStyle),
      onClick: function onClick() {
        return column.sortable && handleSortClick(column.key);
      },
      children: [jsxRuntimeExports.jsxs("div", {
        className: styles.headerContent,
        children: [jsxRuntimeExports.jsx("span", {
          className: styles.headerTitle,
          children: column.title
        }), renderSortIcon(column), column.filterable && jsxRuntimeExports.jsx(md.MdFilterList, {
          className: "".concat(styles.filterIcon, " ").concat(filterConfig.some(function (f) {
            return f.key === column.key;
          }) ? styles.filterIconActive : ''),
          onClick: function onClick(e) {
            e.stopPropagation();
            setFilterVisible(function (prev) {
              return _objectSpread2(_objectSpread2({}, prev), {}, _defineProperty({}, column.key, !prev[column.key]));
            });
          }
        })]
      }), filterVisible[column.key] && jsxRuntimeExports.jsx(ColumnFilter, {
        column: column,
        value: (_a = filterConfig.find(function (f) {
          return f.key === column.key;
        })) === null || _a === undefined ? undefined : _a.value,
        onChange: function onChange(value) {
          return handleFilterChange(column.key, value, column.filterType || 'text');
        },
        onClear: function onClear() {
          return clearFilter(column.key);
        },
        locale: mergedLocale
      })]
    }, column.key);
  };
  var renderBodyCell = function renderBodyCell(record, column, index) {
    var value = column.dataIndex ? typeof column.dataIndex === 'function' ? column.dataIndex(record, index) : getNestedValue(record, column.dataIndex) : record[column.key];
    return jsxRuntimeExports.jsx("td", {
      className: "".concat(styles.tableCell, " ").concat(column.fixed ? styles.stickyColumn : ''),
      style: _objectSpread2({
        textAlign: column.align || 'left'
      }, column.cellStyle),
      children: renderCellContent(value, record, column, index)
    }, column.key);
  };
  var getRowKey = function getRowKey(record, index) {
    return typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey] || index;
  };
  var renderSelectionColumn = function renderSelectionColumn() {
    if (!rowSelection) return null;
    return jsxRuntimeExports.jsx("th", {
      className: styles.tableHeader,
      children: rowSelection.type === 'checkbox' && jsxRuntimeExports.jsx("div", {
        className: styles.checkboxContainer,
        children: selection.isAllSelected ? jsxRuntimeExports.jsx(md.MdCheckBox, {
          className: styles.checkbox,
          onClick: function onClick() {
            return selection.handleSelectAll(false);
          }
        }) : selection.isIndeterminate ? jsxRuntimeExports.jsx(md.MdIndeterminateCheckBox, {
          className: styles.checkbox,
          onClick: function onClick() {
            return selection.handleSelectAll(true);
          }
        }) : jsxRuntimeExports.jsx(md.MdCheckBoxOutlineBlank, {
          className: styles.checkbox,
          onClick: function onClick() {
            return selection.handleSelectAll(true);
          }
        })
      })
    });
  };
  var renderSelectionCell = function renderSelectionCell(record, index) {
    var _a;
    if (!rowSelection) return null;
    var isSelected = selection.isSelected(record, index);
    var checkboxProps = ((_a = rowSelection.getCheckboxProps) === null || _a === undefined ? undefined : _a.call(rowSelection, record)) || {};
    return jsxRuntimeExports.jsx("td", {
      className: styles.tableCell,
      children: jsxRuntimeExports.jsx("div", {
        className: styles.checkboxContainer,
        children: isSelected ? jsxRuntimeExports.jsx(md.MdCheckBox, {
          className: "".concat(styles.checkbox, " ").concat(checkboxProps.disabled ? styles.disabled : ''),
          onClick: function onClick() {
            return !checkboxProps.disabled && selection.handleSelect(record, index, false);
          }
        }) : jsxRuntimeExports.jsx(md.MdCheckBoxOutlineBlank, {
          className: "".concat(styles.checkbox, " ").concat(checkboxProps.disabled ? styles.disabled : ''),
          onClick: function onClick() {
            return !checkboxProps.disabled && selection.handleSelect(record, index, true);
          }
        })
      })
    });
  };
  // Don't render if no read permission
  if (!permissions.read) {
    return jsxRuntimeExports.jsx("div", {
      className: styles.noPermission,
      "data-testid": "".concat(testId, "-no-permission"),
      children: mergedLocale.noPermission
    });
  }
  // Loading state
  if (loading) {
    return jsxRuntimeExports.jsx("div", {
      className: styles.loadingContainer,
      "data-testid": "".concat(testId, "-loading"),
      children: loadingComponent || jsxRuntimeExports.jsxs("div", {
        className: styles.loadingSpinner,
        children: [jsxRuntimeExports.jsx(md.MdRefresh, {
          className: styles.spinner
        }), jsxRuntimeExports.jsx("span", {
          children: mergedLocale.loading
        })]
      })
    });
  }
  // Mobile card view
  if (isMobile && mobileCardView) {
    return jsxRuntimeExports.jsx(MobileCard, {
      data: paginatedData,
      columns: processedColumns,
      actions: actions,
      selection: rowSelection ? selection : undefined,
      locale: mergedLocale,
      theme: mergedTheme,
      onRowClick: onRowClick,
      testId: testId
    });
  }
  // Virtualized table for large datasets
  if (virtualization.enabled && filteredData.length >= (virtualization.threshold || 1000)) {
    return jsxRuntimeExports.jsx(VirtualizedTable, {
      data: filteredData,
      columns: processedColumns,
      rowHeight: virtualization.estimatedRowHeight || 50,
      height: 600,
      locale: mergedLocale,
      theme: mergedTheme,
      testId: testId
    });
  }
  var displayData = pagination === false ? filteredData : paginatedData;
  return jsxRuntimeExports.jsxs("div", {
    className: styles.tableContainer,
    style: _objectSpread2(_objectSpread2({}, containerStyle), mergedTheme),
    "data-testid": testId,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    children: [jsxRuntimeExports.jsxs("div", {
      className: styles.tableHeader,
      children: [title && jsxRuntimeExports.jsx("h2", {
        className: styles.tableTitle,
        children: title
      }), jsxRuntimeExports.jsxs("div", {
        className: styles.tableControls,
        children: [globalSearch && jsxRuntimeExports.jsxs("div", {
          className: styles.globalSearch,
          children: [jsxRuntimeExports.jsx("input", {
            type: "text",
            placeholder: searchPlaceholder || mergedLocale.filterPlaceholder,
            value: globalSearchTerm,
            onChange: function onChange(e) {
              return setGlobalSearchTerm(e.target.value);
            },
            className: styles.searchInput,
            "data-testid": "".concat(testId, "-global-search")
          }), globalSearchTerm && jsxRuntimeExports.jsx(md.MdClear, {
            className: styles.clearSearchButton,
            onClick: function onClick() {
              return setGlobalSearchTerm('');
            }
          })]
        }), (filterConfig.length > 0 || globalSearchTerm) && jsxRuntimeExports.jsxs("button", {
          className: styles.clearFiltersButton,
          onClick: clearAllFilters,
          "data-testid": "".concat(testId, "-clear-filters"),
          children: [jsxRuntimeExports.jsx(md.MdClear, {}), " Clear Filters"]
        }), permissions["export"] && (exportConfig || onExport) && jsxRuntimeExports.jsxs("button", {
          className: styles.exportButton,
          onClick: handleExportData,
          "data-testid": "".concat(testId, "-export"),
          children: [jsxRuntimeExports.jsx(md.MdFileDownload, {}), " ", mergedLocale.exportCSV]
        })]
      })]
    }), displayData.length > 0 ? jsxRuntimeExports.jsx("div", {
      className: styles.tableWrapper,
      children: jsxRuntimeExports.jsxs("table", {
        className: "".concat(styles.table, " ").concat(stickyHeader ? styles.stickyHeader : ''),
        style: tableStyle,
        children: [jsxRuntimeExports.jsx("thead", {
          children: jsxRuntimeExports.jsxs("tr", {
            children: [renderSelectionColumn(), processedColumns.map(renderHeaderCell), actions.length > 0 && jsxRuntimeExports.jsx("th", {
              className: styles.tableHeader,
              children: "Actions"
            })]
          })
        }), jsxRuntimeExports.jsx("tbody", {
          children: displayData.map(function (record, index) {
            return jsxRuntimeExports.jsxs("tr", {
              className: "".concat(styles.tableRow, " ").concat(typeof rowClassName === 'function' ? rowClassName(record, index) : rowClassName || '', " ").concat((selection === null || selection === undefined ? undefined : selection.isSelected(record, index)) ? styles.selectedRow : ''),
              style: typeof rowStyle === 'function' ? rowStyle(record, index) : rowStyle,
              onClick: function onClick(e) {
                return onRowClick === null || onRowClick === undefined ? undefined : onRowClick(record, index, e);
              },
              onDoubleClick: function onDoubleClick(e) {
                return onRowDoubleClick === null || onRowDoubleClick === undefined ? undefined : onRowDoubleClick(record, index, e);
              },
              onContextMenu: function onContextMenu(e) {
                return onRowContextMenu === null || onRowContextMenu === undefined ? undefined : onRowContextMenu(record, index, e);
              },
              children: [renderSelectionCell(record, index), processedColumns.map(function (column) {
                return renderBodyCell(record, column, index);
              }), actions.length > 0 && jsxRuntimeExports.jsx("td", {
                className: styles.tableCell,
                children: jsxRuntimeExports.jsx("div", {
                  className: styles.actionsContainer,
                  children: actions.map(function (action) {
                    return jsxRuntimeExports.jsxs("button", {
                      className: "".concat(styles.actionButton, " ").concat(styles["actionButton".concat(action.type || 'default')]),
                      onClick: function onClick() {
                        return action.onClick(record, index);
                      },
                      disabled: typeof action.disabled === 'function' ? action.disabled(record, index) : action.disabled,
                      title: action.tooltip,
                      "data-testid": "".concat(testId, "-action-").concat(action.key),
                      children: [action.icon, action.label]
                    }, action.key);
                  })
                })
              })]
            }, getRowKey(record, index));
          })
        })]
      })
    }) : jsxRuntimeExports.jsx("div", {
      className: styles.emptyState,
      "data-testid": "".concat(testId, "-empty"),
      children: emptyState || jsxRuntimeExports.jsxs("div", {
        className: styles.emptyStateContent,
        children: [jsxRuntimeExports.jsx(md.MdFilterList, {
          className: styles.emptyStateIcon
        }), jsxRuntimeExports.jsx("p", {
          children: mergedLocale.noData
        })]
      })
    }), pagination !== false && total > (pagination.pageSize || 10) && jsxRuntimeExports.jsx(Pagination, {
      current: current,
      total: total,
      pageSize: pageSize,
      totalPages: totalPages,
      onChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange,
      showSizeChanger: pagination.showSizeChanger,
      showQuickJumper: pagination.showQuickJumper,
      showTotal: pagination.showTotal,
      locale: mergedLocale,
      testId: "".concat(testId, "-pagination")
    }), jsxRuntimeExports.jsx("div", {
      className: styles.tableInfo,
      children: jsxRuntimeExports.jsxs("span", {
        children: [pagination !== false ? "Showing ".concat((current - 1) * pageSize + 1, " to ").concat(Math.min(current * pageSize, total), " of ").concat(total, " entries") : "Showing ".concat(total, " entries"), filterConfig.length > 0 && " (filtered from ".concat(data.length, " total entries)")]
      })
    })]
  });
}

exports.ColumnFilter = ColumnFilter;
exports.MobileCard = MobileCard;
exports.Pagination = Pagination;
exports.Table = Table;
exports.VirtualizedTable = VirtualizedTable;
exports.default = Table;
exports.defaultLocale = defaultLocale;
exports.defaultTheme = defaultTheme;
exports.exportUtils = exportUtils;
exports.getNestedValue = getNestedValue;
exports.useDebounce = useDebounce;
exports.useLocalStorage = useLocalStorage;
exports.useTableFilter = useTableFilter;
exports.useTablePagination = useTablePagination;
exports.useTableSelection = useTableSelection;
exports.useTableSort = useTableSort;
//# sourceMappingURL=index.js.map
