import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo, useCallback, useEffect } from 'react';
import { MdFirstPage, MdNavigateBefore, MdNavigateNext, MdLastPage, MdCheck, MdClose, MdRefresh, MdClear, MdFileDownload, MdFilterList, MdCheckBox, MdIndeterminateCheckBox, MdCheckBoxOutlineBlank, MdUnfoldMore, MdArrowUpward, MdArrowDownward, MdContentCopy } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import { FixedSizeList } from 'react-window';

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
  var _useState = useState(initialSort || []),
    _useState2 = _slicedToArray(_useState, 2),
    sortConfig = _useState2[0],
    setSortConfig = _useState2[1];
  var sortedData = useMemo(function () {
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
  var handleSort = useCallback(function (key) {
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
  var resetSort = useCallback(function () {
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
  var _useState3 = useState(initialFilters || []),
    _useState4 = _slicedToArray(_useState3, 2),
    filterConfig = _useState4[0],
    setFilterConfig = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    globalSearchTerm = _useState6[0],
    setGlobalSearchTerm = _useState6[1];
  var filteredData = useMemo(function () {
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
  var handleFilter = useCallback(function (key, value) {
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
  var clearFilter = useCallback(function (key) {
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
  var clearAllFilters = useCallback(function () {
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
  var _useState7 = useState(1),
    _useState8 = _slicedToArray(_useState7, 2),
    current = _useState8[0],
    setCurrent = _useState8[1];
  var _useState9 = useState(initialPageSize),
    _useState10 = _slicedToArray(_useState9, 2),
    pageSize = _useState10[0],
    setPageSize = _useState10[1];
  var paginatedData = useMemo(function () {
    var startIndex = (current - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, current, pageSize]);
  var totalPages = useMemo(function () {
    return Math.ceil(data.length / pageSize);
  }, [data.length, pageSize]);
  var handlePageChange = useCallback(function (page) {
    setCurrent(page);
  }, []);
  var handlePageSizeChange = useCallback(function (newPageSize) {
    setPageSize(newPageSize);
    setCurrent(1); // Reset to first page
  }, []);
  var resetPagination = useCallback(function () {
    setCurrent(1);
  }, []);
  // Reset to first page when data changes
  useEffect(function () {
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
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedKeys = _useState12[0],
    setSelectedKeys = _useState12[1];
  var getRowKey = useCallback(function (record, index) {
    return typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey] || index;
  }, [rowKey]);
  var selectedRows = useMemo(function () {
    return data.filter(function (record, index) {
      var key = getRowKey(record, index);
      return selectedKeys.includes(key);
    });
  }, [data, selectedKeys, getRowKey]);
  var handleSelect = useCallback(function (record, index, selected) {
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
  var handleSelectAll = useCallback(function (selected) {
    if (type === 'checkbox') {
      setSelectedKeys(selected ? data.map(function (record, index) {
        return getRowKey(record, index);
      }) : []);
    }
  }, [data, getRowKey, type]);
  var isSelected = useCallback(function (record, index) {
    var key = getRowKey(record, index);
    return selectedKeys.includes(key);
  }, [selectedKeys, getRowKey]);
  var isAllSelected = useMemo(function () {
    return data.length > 0 && selectedKeys.length === data.length;
  }, [data.length, selectedKeys.length]);
  var isIndeterminate = useMemo(function () {
    return selectedKeys.length > 0 && selectedKeys.length < data.length;
  }, [data.length, selectedKeys.length]);
  var clearSelection = useCallback(function () {
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
  var _useState13 = useState(value),
    _useState14 = _slicedToArray(_useState13, 2),
    debouncedValue = _useState14[0],
    setDebouncedValue = _useState14[1];
  useEffect(function () {
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
  var _useState15 = useState(function () {
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
  var setValue = useCallback(function (value) {
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
    return jsxs("span", {
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
      pages.push(jsx("button", {
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
  return jsxs("div", {
    className: styles$4.paginationContainer,
    "data-testid": testId,
    children: [renderTotal(), jsxs("div", {
      className: styles$4.paginationControls,
      children: [jsx("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === 1 ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(1);
        },
        disabled: current === 1,
        "data-testid": "".concat(testId, "-first"),
        title: "First Page",
        children: jsx(MdFirstPage, {})
      }), jsxs("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === 1 ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(current - 1);
        },
        disabled: current === 1,
        "data-testid": "".concat(testId, "-previous"),
        title: locale.pagination.previous,
        children: [jsx(MdNavigateBefore, {}), locale.pagination.previous]
      }), jsx("div", {
        className: styles$4.pageNumbers,
        children: renderPageNumbers()
      }), jsxs("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === totalPages ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(current + 1);
        },
        disabled: current === totalPages,
        "data-testid": "".concat(testId, "-next"),
        title: locale.pagination.next,
        children: [locale.pagination.next, jsx(MdNavigateNext, {})]
      }), jsx("button", {
        className: "".concat(styles$4.pageButton, " ").concat(current === totalPages ? styles$4.disabled : ''),
        onClick: function onClick() {
          return onChange(totalPages);
        },
        disabled: current === totalPages,
        "data-testid": "".concat(testId, "-last"),
        title: "Last Page",
        children: jsx(MdLastPage, {})
      })]
    }), showSizeChanger && onPageSizeChange && jsx("div", {
      className: styles$4.pageSizeChanger,
      children: jsx("select", {
        value: pageSize,
        onChange: function onChange(e) {
          return onPageSizeChange(Number(e.target.value));
        },
        className: styles$4.pageSizeSelect,
        "data-testid": "".concat(testId, "-page-size"),
        children: [10, 25, 50, 100].map(function (size) {
          return jsxs("option", {
            value: size,
            children: [size, " / page"]
          }, size);
        })
      })
    }), showQuickJumper && jsxs("div", {
      className: styles$4.quickJumper,
      children: [jsx("span", {
        children: "Go to"
      }), jsx("input", {
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
  var _useState = useState(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var _useState3 = useState(Array.isArray(value) ? value : ['', '']),
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
        return jsxs("select", {
          value: localValue,
          onChange: function onChange(e) {
            return setLocalValue(e.target.value);
          },
          className: styles$3.filterSelect,
          children: [jsx("option", {
            value: "",
            children: "All"
          }), (_a = column.filterOptions) === null || _a === undefined ? undefined : _a.map(function (option) {
            return jsx("option", {
              value: option.value,
              children: option.label
            }, option.value);
          })]
        });
      case 'number':
        return jsx("input", {
          type: "number",
          value: localValue,
          onChange: function onChange(e) {
            return setLocalValue(e.target.value);
          },
          placeholder: "Enter number...",
          className: styles$3.filterInput
        });
      case 'dateRange':
        return jsxs("div", {
          className: styles$3.dateRangeContainer,
          children: [jsx("input", {
            type: "date",
            value: dateRange[0],
            onChange: function onChange(e) {
              return setDateRange([e.target.value, dateRange[1]]);
            },
            className: styles$3.dateInput
          }), jsx("span", {
            className: styles$3.dateSeparator,
            children: "to"
          }), jsx("input", {
            type: "date",
            value: dateRange[1],
            onChange: function onChange(e) {
              return setDateRange([dateRange[0], e.target.value]);
            },
            className: styles$3.dateInput
          })]
        });
      default:
        return jsx("input", {
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
  return jsx("div", {
    className: styles$3.filterContainer,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    children: jsxs("div", {
      className: styles$3.filterContent,
      children: [renderFilterInput(), jsxs("div", {
        className: styles$3.filterActions,
        children: [jsx("button", {
          onClick: handleApply,
          className: styles$3.applyButton,
          title: "Apply Filter",
          children: jsx(MdCheck, {})
        }), jsx("button", {
          onClick: handleClear,
          className: styles$3.clearButton,
          title: "Clear Filter",
          children: jsx(MdClose, {})
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
    return jsxs("div", {
      className: styles$2.card,
      onClick: function onClick(e) {
        return onRowClick === null || onRowClick === undefined ? undefined : onRowClick(record, index, e);
      },
      "data-testid": "".concat(testId, "-item-").concat(index),
      children: [selection && jsx("div", {
        className: styles$2.cardSelection,
        children: jsx("input", {
          type: "checkbox",
          checked: selection.isSelected(record, index),
          onChange: function onChange(e) {
            return selection.handleSelect(record, index, e.target.checked);
          },
          className: styles$2.cardCheckbox
        })
      }), jsx("div", {
        className: styles$2.cardBody,
        children: columns.map(function (column) {
          if (column.hidden) return null;
          var value = column.dataIndex ? typeof column.dataIndex === 'function' ? column.dataIndex(record, index) : getNestedValue(record, column.dataIndex) : record[column.key];
          return jsxs("div", {
            className: styles$2.cardField,
            children: [jsxs("span", {
              className: styles$2.cardLabel,
              children: [column.title, ":"]
            }), jsx("span", {
              className: styles$2.cardValue,
              children: column.render ? column.render(value, record, index) : String(value || '')
            })]
          }, column.key);
        })
      }), actions.length > 0 && jsx("div", {
        className: styles$2.cardActions,
        children: actions.map(function (action) {
          return jsxs("button", {
            className: "".concat(styles$2.cardActionButton, " ").concat(styles$2["cardActionButton".concat(action.type || 'default')]),
            onClick: function onClick(e) {
              e.stopPropagation();
              action.onClick(record, index);
            },
            disabled: typeof action.disabled === 'function' ? action.disabled(record, index) : action.disabled,
            title: action.tooltip,
            children: [action.icon, jsx("span", {
              children: action.label
            })]
          }, action.key);
        })
      })]
    }, index);
  };
  if (data.length === 0) {
    return jsx("div", {
      className: styles$2.mobileEmptyState,
      "data-testid": "".concat(testId, "-empty"),
      children: jsx("p", {
        children: locale.noData
      })
    });
  }
  return jsx("div", {
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
  return jsx("div", {
    style: style,
    className: styles$1.virtualRow,
    children: columns.map(function (column) {
      var value = column.dataIndex ? typeof column.dataIndex === 'function' ? column.dataIndex(record, index) : getNestedValue(record, column.dataIndex) : record[column.key];
      return jsx("div", {
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
  var itemData = useMemo(function () {
    return {
      items: data,
      columns: columns.filter(function (col) {
        return !col.hidden;
      })
    };
  }, [data, columns]);
  if (data.length === 0) {
    return jsx("div", {
      className: styles$1.virtualizedEmptyState,
      "data-testid": "".concat(testId, "-empty"),
      children: jsx("p", {
        children: locale.noData
      })
    });
  }
  return jsxs("div", {
    className: styles$1.virtualizedContainer,
    "data-testid": testId,
    children: [jsx("div", {
      className: styles$1.virtualizedHeader,
      children: itemData.columns.map(function (column) {
        return jsx("div", {
          className: styles$1.virtualHeaderCell,
          style: {
            width: column.width || 'auto',
            textAlign: column.align || 'left'
          },
          children: column.title
        }, column.key);
      })
    }), jsx(FixedSizeList, {
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
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    copiedCell = _useState2[0],
    setCopiedCell = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    filterVisible = _useState4[0],
    setFilterVisible = _useState4[1];
  var _useState5 = useState(false),
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
  useEffect(function () {
    if (legacyProps.columns && legacyProps.columnDisplayNames) {
      console.warn('Using legacy columns prop. Please migrate to new columns format.');
    }
  }, [legacyProps]);
  useEffect(function () {
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
  var processedColumns = useMemo(function () {
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
  var handleSortClick = useCallback(function (columnKey) {
    handleSort(columnKey, multiSort);
    onSort === null || onSort === undefined ? undefined : onSort(sortConfig);
  }, [handleSort, multiSort, sortConfig, onSort]);
  var handleFilterChange = useCallback(function (columnKey, value, type) {
    handleFilter(columnKey, value, type);
    resetPagination();
    onFilter === null || onFilter === undefined ? undefined : onFilter(filterConfig);
  }, [handleFilter, resetPagination, filterConfig, onFilter]);
  var handleCellCopy = useCallback(/*#__PURE__*/function () {
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
  var handleExportData = useCallback(function () {
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
  useCallback(function (columnKey, width) {
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
      return jsx(MdUnfoldMore, {
        className: styles.sortIcon
      });
    }
    return sortState.direction === 'asc' ? jsx(MdArrowUpward, {
      className: "".concat(styles.sortIcon, " ").concat(styles.sortIconActive)
    }) : jsx(MdArrowDownward, {
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
      return jsxs("div", {
        className: styles.copyableCell,
        children: [jsx("span", {
          onClick: function onClick() {
            return handleCellCopy(value, cellKey);
          },
          className: styles.copyableContent,
          "data-tooltip-id": "copy-tooltip-".concat(cellKey),
          "data-tooltip-content": isCopied ? mergedLocale.copied : mergedLocale.copyTooltip,
          children: String(value || '')
        }), jsx(MdContentCopy, {
          className: styles.copyIcon,
          onClick: function onClick() {
            return handleCellCopy(value, cellKey);
          }
        }), jsx(Tooltip, {
          id: "copy-tooltip-".concat(cellKey)
        })]
      });
    }
    return jsx("span", {
      children: String(value || '')
    });
  };
  var renderHeaderCell = function renderHeaderCell(column) {
    var _a;
    return jsxs("th", {
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
      children: [jsxs("div", {
        className: styles.headerContent,
        children: [jsx("span", {
          className: styles.headerTitle,
          children: column.title
        }), renderSortIcon(column), column.filterable && jsx(MdFilterList, {
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
      }), filterVisible[column.key] && jsx(ColumnFilter, {
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
    return jsx("td", {
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
    return jsx("th", {
      className: styles.tableHeader,
      children: rowSelection.type === 'checkbox' && jsx("div", {
        className: styles.checkboxContainer,
        children: selection.isAllSelected ? jsx(MdCheckBox, {
          className: styles.checkbox,
          onClick: function onClick() {
            return selection.handleSelectAll(false);
          }
        }) : selection.isIndeterminate ? jsx(MdIndeterminateCheckBox, {
          className: styles.checkbox,
          onClick: function onClick() {
            return selection.handleSelectAll(true);
          }
        }) : jsx(MdCheckBoxOutlineBlank, {
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
    return jsx("td", {
      className: styles.tableCell,
      children: jsx("div", {
        className: styles.checkboxContainer,
        children: isSelected ? jsx(MdCheckBox, {
          className: "".concat(styles.checkbox, " ").concat(checkboxProps.disabled ? styles.disabled : ''),
          onClick: function onClick() {
            return !checkboxProps.disabled && selection.handleSelect(record, index, false);
          }
        }) : jsx(MdCheckBoxOutlineBlank, {
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
    return jsx("div", {
      className: styles.noPermission,
      "data-testid": "".concat(testId, "-no-permission"),
      children: mergedLocale.noPermission
    });
  }
  // Loading state
  if (loading) {
    return jsx("div", {
      className: styles.loadingContainer,
      "data-testid": "".concat(testId, "-loading"),
      children: loadingComponent || jsxs("div", {
        className: styles.loadingSpinner,
        children: [jsx(MdRefresh, {
          className: styles.spinner
        }), jsx("span", {
          children: mergedLocale.loading
        })]
      })
    });
  }
  // Mobile card view
  if (isMobile && mobileCardView) {
    return jsx(MobileCard, {
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
    return jsx(VirtualizedTable, {
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
  return jsxs("div", {
    className: styles.tableContainer,
    style: _objectSpread2(_objectSpread2({}, containerStyle), mergedTheme),
    "data-testid": testId,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    children: [jsxs("div", {
      className: styles.tableHeader,
      children: [title && jsx("h2", {
        className: styles.tableTitle,
        children: title
      }), jsxs("div", {
        className: styles.tableControls,
        children: [globalSearch && jsxs("div", {
          className: styles.globalSearch,
          children: [jsx("input", {
            type: "text",
            placeholder: searchPlaceholder || mergedLocale.filterPlaceholder,
            value: globalSearchTerm,
            onChange: function onChange(e) {
              return setGlobalSearchTerm(e.target.value);
            },
            className: styles.searchInput,
            "data-testid": "".concat(testId, "-global-search")
          }), globalSearchTerm && jsx(MdClear, {
            className: styles.clearSearchButton,
            onClick: function onClick() {
              return setGlobalSearchTerm('');
            }
          })]
        }), (filterConfig.length > 0 || globalSearchTerm) && jsxs("button", {
          className: styles.clearFiltersButton,
          onClick: clearAllFilters,
          "data-testid": "".concat(testId, "-clear-filters"),
          children: [jsx(MdClear, {}), " Clear Filters"]
        }), permissions["export"] && (exportConfig || onExport) && jsxs("button", {
          className: styles.exportButton,
          onClick: handleExportData,
          "data-testid": "".concat(testId, "-export"),
          children: [jsx(MdFileDownload, {}), " ", mergedLocale.exportCSV]
        })]
      })]
    }), displayData.length > 0 ? jsx("div", {
      className: styles.tableWrapper,
      children: jsxs("table", {
        className: "".concat(styles.table, " ").concat(stickyHeader ? styles.stickyHeader : ''),
        style: tableStyle,
        children: [jsx("thead", {
          children: jsxs("tr", {
            children: [renderSelectionColumn(), processedColumns.map(renderHeaderCell), actions.length > 0 && jsx("th", {
              className: styles.tableHeader,
              children: "Actions"
            })]
          })
        }), jsx("tbody", {
          children: displayData.map(function (record, index) {
            return jsxs("tr", {
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
              }), actions.length > 0 && jsx("td", {
                className: styles.tableCell,
                children: jsx("div", {
                  className: styles.actionsContainer,
                  children: actions.map(function (action) {
                    return jsxs("button", {
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
    }) : jsx("div", {
      className: styles.emptyState,
      "data-testid": "".concat(testId, "-empty"),
      children: emptyState || jsxs("div", {
        className: styles.emptyStateContent,
        children: [jsx(MdFilterList, {
          className: styles.emptyStateIcon
        }), jsx("p", {
          children: mergedLocale.noData
        })]
      })
    }), pagination !== false && total > (pagination.pageSize || 10) && jsx(Pagination, {
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
    }), jsx("div", {
      className: styles.tableInfo,
      children: jsxs("span", {
        children: [pagination !== false ? "Showing ".concat((current - 1) * pageSize + 1, " to ").concat(Math.min(current * pageSize, total), " of ").concat(total, " entries") : "Showing ".concat(total, " entries"), filterConfig.length > 0 && " (filtered from ".concat(data.length, " total entries)")]
      })
    })]
  });
}

export { ColumnFilter, MobileCard, Pagination, Table, VirtualizedTable, Table as default, defaultLocale, defaultTheme, exportUtils, getNestedValue, useDebounce, useLocalStorage, useTableFilter, useTablePagination, useTableSelection, useTableSort };
//# sourceMappingURL=index.esm.js.map
