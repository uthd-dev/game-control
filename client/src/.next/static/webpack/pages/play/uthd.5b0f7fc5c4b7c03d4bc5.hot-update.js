webpackHotUpdate_N_E("pages/play/uthd",{

/***/ "../../node_modules/next/dist/next-server/lib/dynamic.js":
/*!************************************************************************************!*\
  !*** D:/Dev/GitHub/game-control/node_modules/next/dist/next-server/lib/dynamic.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports["default"] = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "../../node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://err.sh/vercel/next.js/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/loadable-context.js":
/*!*********************************************************************************************!*\
  !*** D:/Dev/GitHub/game-control/node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/next/dist/next-server/lib/loadable.js":
/*!*************************************************************************************!*\
  !*** D:/Dev/GitHub/game-control/node_modules/next/dist/next-server/lib/loadable.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "../../node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "../../node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return /*#__PURE__*/_react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports["default"] = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/use-subscription/cjs/use-subscription.development.js":
/*!****************************************************************************************************!*\
  !*** D:/Dev/GitHub/game-control/node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "../../node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "../../node_modules/use-subscription/index.js":
/*!*************************************************************************!*\
  !*** D:/Dev/GitHub/game-control/node_modules/use-subscription/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "../../node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ }),

/***/ "./pages/play/uthd.js":
/*!****************************!*\
  !*** ./pages/play/uthd.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/play-components/buttonHelp */ "./components/play-components/buttonHelp.js");
/* harmony import */ var _components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/play-components/buttonHurt */ "./components/play-components/buttonHurt.js");
/* harmony import */ var _components_layout_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout-components/layout */ "./components/layout-components/layout.js");
/* harmony import */ var _components_play_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/play-components/streamerSidebar */ "./components/play-components/streamerSidebar.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "../../node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "../../node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "D:\\Dev\\GitHub\\game-control\\client\\src\\pages\\play\\uthd.js",
    _s = $RefreshSig$();

function _templateObject8() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 500px;\n  min-width: 300px;\n\n  box-shadow: 0px 0px 0px 3px #f0524c;\n  border-radius: 8px;\n  background: none;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 25px;\n  h3 {\n    text-align: center;\n    font-size: 36px;\n    margin: 0 auto;\n  }\n  h5 {\n    text-align: center;\n    font-size: 20px;\n    margin: 0 auto;\n    font-weight: 200;\n  }\n  span {\n    font-size: 24px;\n    font-weight: 600;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 500px;\n  min-width: 300px;\n\n  box-shadow: 0px 0px 0px 3px #f0524c;\n  border-radius: 8px;\n  background: none;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 25px;\n  h3 {\n    text-align: center;\n    font-size: 36px;\n    margin: 0 auto;\n  }\n  h5 {\n    text-align: center;\n    font-size: 20px;\n    margin: 0 auto;\n    font-weight: 200;\n  }\n  span {\n    font-size: 24px;\n    font-weight: 600;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  justify-self: left;\n  margin: 0 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  min-width: 65vw;\n  height: 720px;\n  background-color: gray;\n  margin: 20px;\n  border-radius: 5px;\n  border: 5px solid #f0524c;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  justify-content: center;\n\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  justify-content: center;\n\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex;\n\n  margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 800px;\n  width: 80vw;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow: hidden;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: calc(100vh - 80px);\n  width: calc(100vw - 72px);\n  margin-left: 72px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//Component Imports



 //Useful Stuff Imports




var TwitchEmbed = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/play-components/twitchEmbed */ "./components/play-components/twitchEmbed.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/play-components/twitchEmbed */ "./components/play-components/twitchEmbed.js")];
    },
    modules: ['../../components/play-components/twitchEmbed']
  }
});
/* Socket.io */

_c2 = TwitchEmbed;

var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_9__["io"])("/api/ws/user");

function StreamerGameControl(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      userData = _useState[0],
      setUserData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(),
      streamerData = _useState2[0],
      setStreamerData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    socket.on("connect", function () {});
    socket.on("update-userData", function (data) {
      setUserData(data);
    });
    socket.on("update-streamerData", function (data) {
      setStreamerData(data);
    });
    socket.emit("get-userData");
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_layout_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      streamerData: streamerData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContentWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowOneWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Twitch, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(TwitchEmbed, {
            id: "uthd",
            channel: "uthd"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowTwoWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Enchant Held Item",
            action: "enchant"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Heal Player",
            action: "heal-player"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Give Item",
            action: "give-item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Give Good Potion Effect",
            action: "good-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Bad Potion Effect",
            action: "bad-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Clear Inventory",
            action: "clear-inv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Summon Mob",
            action: "summon-mob"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "etc."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowThreeWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "User Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Shards: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this), userData ? userData.stats.shards : "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Leaderboard, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "Leaderboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Top Player: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(StreamerGameControl, "0EWjw8JYosNt6IY8Aax/qgXbeWw=");

_c3 = StreamerGameControl;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c4 = ContentWrapper;
var RowOneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
_c5 = RowOneWrapper;
var RowTwoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3());
_c6 = RowTwoWrapper;
var RowThreeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4());
_c7 = RowThreeWrapper;
var Twitch = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject5());
_c8 = Twitch;
var GameControl = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject6());
_c9 = GameControl;
var Stats = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject7());
_c10 = Stats;
var Leaderboard = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject8()); //Props getting

/*
export async function getStaticPaths() {
    const paths = await getAllPageSlugs();
    return {
        fallback: 'blocking',
        paths
    }
  }

export async function getStaticProps({ params }) {
    const pageData = await getPageDataFromSlug(params.slug);
    return {
        revalidate: 5,
        props: {pageData}
    }
}

async function getAllPageSlugs () {
    const pages = await getPages();
    return pages.map(page => {
        return {
            params: {
                slug: page.slug
            }
        }
    })
}*/

_c11 = Leaderboard;
/* harmony default export */ __webpack_exports__["default"] = (StreamerGameControl);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TwitchEmbed$dynamic");
$RefreshReg$(_c2, "TwitchEmbed");
$RefreshReg$(_c3, "StreamerGameControl");
$RefreshReg$(_c4, "ContentWrapper");
$RefreshReg$(_c5, "RowOneWrapper");
$RefreshReg$(_c6, "RowTwoWrapper");
$RefreshReg$(_c7, "RowThreeWrapper");
$RefreshReg$(_c8, "Twitch");
$RefreshReg$(_c9, "GameControl");
$RefreshReg$(_c10, "Stats");
$RefreshReg$(_c11, "Leaderboard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9keW5hbWljLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvRDovRGV2L0dpdEh1Yi9nYW1lLWNvbnRyb2wvbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS9EOi9EZXYvR2l0SHViL2dhbWUtY29udHJvbC9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbImlzU2VydmVyU2lkZSIsImxvYWRhYmxlT3B0aW9ucyIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJMb2FkaW5nIiwibG9hZGFibGVGbiIsIkxvYWRhYmxlIiwibG9hZGluZyIsImVycm9yIiwiZHluYW1pY09wdGlvbnMiLCJjb25zb2xlIiwibG9hZE1vZHVsZXMiLCJtb2R1bGVzIiwiT2JqZWN0Iiwia2V5IiwidmFsdWUiLCJtb2QiLCJub1NTUiIsIkxvYWRhYmxlQ29udGV4dCIsIlJlYWN0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwicHJvbWlzZSIsImxvYWRlciIsInN0YXRlIiwibG9hZGVkIiwiZXJyIiwicHJvbWlzZXMiLCJyZXN1bHQiLCJsb2FkIiwib2JqIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcHRzIiwiZGVsYXkiLCJ0aW1lb3V0IiwicmVuZGVyIiwid2VicGFjayIsInN1YnNjcmlwdGlvbiIsInN1YiIsImdldEN1cnJlbnRWYWx1ZSIsInN1YnNjcmliZSIsInJldHJ5IiwibW9kdWxlSWRzIiwiaWRzIiwiaW5pdCIsIkxvYWRhYmxlQ29tcG9uZW50IiwiY29udGV4dCIsIkFycmF5IiwibW9kdWxlTmFtZSIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiTG9hZGFibGVTdWJzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIl9yZXMiLCJfb3B0cyIsInNldFRpbWVvdXQiLCJfZXJyIiwiX3VwZGF0ZSIsImNhbGxiYWNrIiwiX2NsZWFyVGltZW91dHMiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImluaXRpYWxpemVycyIsImZsdXNoSW5pdGlhbGl6ZXJzIiwicmVzb2x2ZVByZWxvYWQiLCJ3aW5kb3ciLCJUd2l0Y2hFbWJlZCIsImR5bmFtaWMiLCJzc3IiLCJzb2NrZXQiLCJpbyIsIlN0cmVhbWVyR2FtZUNvbnRyb2wiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInN0cmVhbWVyRGF0YSIsInNldFN0cmVhbWVyRGF0YSIsInVzZUVmZmVjdCIsIm9uIiwiZGF0YSIsImVtaXQiLCJzdGF0cyIsInNoYXJkcyIsIkNvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiUm93T25lV3JhcHBlciIsIlJvd1R3b1dyYXBwZXIiLCJSb3dUaHJlZVdyYXBwZXIiLCJUd2l0Y2giLCJHYW1lQ29udHJvbCIsIlN0YXRzIiwiTGVhZGVyYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7O0FBQUEsSUFBTUEsWUFBTjs7QUFpRE8scURBR21CO0FBQ3hCO0FBQ0EsU0FBT0MsZUFBZSxDQUF0QjtBQUNBLFNBQU9BLGVBQWUsQ0FBdEIsUUFId0IsQ0FLeEI7O0FBQ0EsTUFBSSxDQUFKLGNBQW1CO0FBQ2pCLFdBQU9DLG1CQUFtQixDQUExQixlQUEwQixDQUExQjtBQUdGOztBQUFBLE1BQU1DLE9BQU8sR0FBR0YsZUFBZSxDQUEv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TUMsYTtBQVNOLElBQU1DLGFBQWEsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBbkI7TUFBTUUsYTtBQVlOLElBQU1DLGVBQWUsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVixvQkFBckI7TUFBTUcsZTtBQVlOLElBQU1DLE1BQU0sR0FBR0wseURBQU0sQ0FBQ0MsR0FBVixvQkFBWjtNQUFNSSxNO0FBU04sSUFBTUMsV0FBVyxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtNQUFNSyxXO0FBUU4sSUFBTUMsS0FBSyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWLG9CQUFYO09BQU1NLEs7QUE0Qk4sSUFBTUMsV0FBVyxHQUFHUix5REFBTSxDQUFDQyxHQUFWLG9CQUFqQixDLENBNkJBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7T0F4RE1PLFc7QUEwRFN0QixrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5L3V0aGQuNWIwZjdmYzVjNGI3YzAzZDRiYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2FkYWJsZSBmcm9tICcuL2xvYWRhYmxlJ1xuXG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgdHlwZSBMb2FkZXJDb21wb25lbnQ8UCA9IHt9PiA9IFByb21pc2U8XG4gIFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfCB7IGRlZmF1bHQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4gfVxuPlxuXG5leHBvcnQgdHlwZSBMb2FkZXI8UCA9IHt9PiA9ICgoKSA9PiBMb2FkZXJDb21wb25lbnQ8UD4pIHwgTG9hZGVyQ29tcG9uZW50PFA+XG5cbmV4cG9ydCB0eXBlIExvYWRlck1hcCA9IHsgW21kdWxlOiBzdHJpbmddOiAoKSA9PiBMb2FkZXI8YW55PiB9XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyA9IHtcbiAgd2VicGFjaz8oKTogYW55XG4gIG1vZHVsZXM/KCk6IExvYWRlck1hcFxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUJhc2VPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnMgJiB7XG4gIGxvYWRpbmc/OiAoe1xuICAgIGVycm9yLFxuICAgIGlzTG9hZGluZyxcbiAgICBwYXN0RGVsYXksXG4gIH06IHtcbiAgICBlcnJvcj86IEVycm9yIHwgbnVsbFxuICAgIGlzTG9hZGluZz86IGJvb2xlYW5cbiAgICBwYXN0RGVsYXk/OiBib29sZWFuXG4gICAgcmV0cnk/OiAoKSA9PiB2b2lkXG4gICAgdGltZWRPdXQ/OiBib29sZWFuXG4gIH0pID0+IEpTWC5FbGVtZW50IHwgbnVsbFxuICBsb2FkZXI/OiBMb2FkZXI8UD4gfCBMb2FkZXJNYXBcbiAgbG9hZGFibGVHZW5lcmF0ZWQ/OiBMb2FkYWJsZUdlbmVyYXRlZE9wdGlvbnNcbiAgc3NyPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZU9wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlQmFzZU9wdGlvbnM8UD4gJiB7XG4gIHJlbmRlcj8obG9hZGVyOiBhbnksIHByb3BzOiBhbnkpOiBKU1guRWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBEeW5hbWljT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVCYXNlT3B0aW9uczxQPiAmIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHRoZSBtb2R1bGVzIG9wdGlvbiBoYXMgYmVlbiBwbGFubmVkIGZvciByZW1vdmFsXG4gICAqL1xuICByZW5kZXI/KHByb3BzOiBQLCBsb2FkZWQ6IGFueSk6IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlRm48UCA9IHt9PiA9IChcbiAgb3B0czogTG9hZGFibGVPcHRpb25zPFA+XG4pID0+IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVDb21wb25lbnQ8UCA9IHt9PiA9IFJlYWN0LkNvbXBvbmVudFR5cGU8UD5cblxuZXhwb3J0IGZ1bmN0aW9uIG5vU1NSPFAgPSB7fT4oXG4gIExvYWRhYmxlSW5pdGlhbGl6ZXI6IExvYWRhYmxlRm48UD4sXG4gIGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHtcbiAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2tcbiAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzXG5cbiAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKVxuICB9XG5cbiAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nIVxuICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgcmV0dXJuICgpID0+IChcbiAgICA8TG9hZGluZyBlcnJvcj17bnVsbH0gaXNMb2FkaW5nIHBhc3REZWxheT17ZmFsc2V9IHRpbWVkT3V0PXtmYWxzZX0gLz5cbiAgKVxufVxuXG4vLyBmdW5jdGlvbiBkeW5hbWljPFAgPSB7fSwgTyBleHRlbmRzIER5bmFtaWNPcHRpb25zPihvcHRpb25zOiBPKTpcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYzxQID0ge30+KFxuICBkeW5hbWljT3B0aW9uczogRHluYW1pY09wdGlvbnM8UD4gfCBMb2FkZXI8UD4sXG4gIG9wdGlvbnM/OiBEeW5hbWljT3B0aW9uczxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB7XG4gIGxldCBsb2FkYWJsZUZuOiBMb2FkYWJsZUZuPFA+ID0gTG9hZGFibGVcbiAgbGV0IGxvYWRhYmxlT3B0aW9uczogTG9hZGFibGVPcHRpb25zPFA+ID0ge1xuICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgbG9hZGluZzogKHsgZXJyb3IsIGlzTG9hZGluZywgcGFzdERlbGF5IH0pID0+IHtcbiAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbFxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7ZXJyb3Iuc3RhY2t9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSxcbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpID0+IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGR5bmFtaWNPcHRpb25zXG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5keW5hbWljT3B0aW9ucyB9XG4gIH1cblxuICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG4gIGxvYWRhYmxlT3B0aW9ucyA9IHsgLi4ubG9hZGFibGVPcHRpb25zLCAuLi5vcHRpb25zIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICEoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKVxuICApIHtcbiAgICAvLyBzaG93IGRlcHJlY2F0aW9uIHdhcm5pbmcgZm9yIGBtb2R1bGVzYCBrZXkgaW4gZGV2ZWxvcG1lbnRcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdUaGUgbW9kdWxlcyBvcHRpb24gZm9yIG5leHQvZHluYW1pYyBoYXMgYmVlbiBkZXByZWNhdGVkLiBTZWUgaGVyZSBmb3IgbW9yZSBpbmZvIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL25leHQtZHluYW1pYy1tb2R1bGVzJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIGByZW5kZXJgIHdoZW4gdXNpbmcgYSBtYXBwaW5nLCBlZzogYGR5bmFtaWMoeyBtb2R1bGVzOiAoKSA9PiB7cmV0dXJuIHtIZWxsb1dvcmxkOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9LCByZW5kZXIocHJvcHMsIGxvYWRlZCkge30gfSB9KVxuICAgIGlmIChkeW5hbWljT3B0aW9ucy5yZW5kZXIpIHtcbiAgICAgIGxvYWRhYmxlT3B0aW9ucy5yZW5kZXIgPSAobG9hZGVkLCBwcm9wcykgPT5cbiAgICAgICAgZHluYW1pY09wdGlvbnMucmVuZGVyIShwcm9wcywgbG9hZGVkKVxuICAgIH1cbiAgICAvLyBTdXBwb3J0IGZvciBgbW9kdWxlc2Agd2hlbiB1c2luZyBhIG1hcHBpbmcsIGVnOiBgZHluYW1pYyh7IG1vZHVsZXM6ICgpID0+IHtyZXR1cm4ge0hlbGxvV29ybGQ6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0sIHJlbmRlcihwcm9wcywgbG9hZGVkKSB7fSB9IH0pXG4gICAgaWYgKGR5bmFtaWNPcHRpb25zLm1vZHVsZXMpIHtcbiAgICAgIGxvYWRhYmxlRm4gPSBMb2FkYWJsZS5NYXBcbiAgICAgIGNvbnN0IGxvYWRNb2R1bGVzOiBMb2FkZXJNYXAgPSB7fVxuICAgICAgY29uc3QgbW9kdWxlcyA9IGR5bmFtaWNPcHRpb25zLm1vZHVsZXMoKVxuICAgICAgT2JqZWN0LmtleXMobW9kdWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBtb2R1bGVzW2tleV1cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9ICgpID0+IHZhbHVlLnRoZW4oKG1vZDogYW55KSA9PiBtb2QuZGVmYXVsdCB8fCBtb2QpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbG9hZE1vZHVsZXNba2V5XSA9IHZhbHVlXG4gICAgICB9KVxuICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9IGxvYWRNb2R1bGVzXG4gICAgfVxuICB9XG5cbiAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCxcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICB9XG5cbiAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzclxuICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucylcbiAgICB9XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3JcbiAgfVxuXG4gIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucylcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBDYXB0dXJlRm4gPSAobW9kdWxlTmFtZTogc3RyaW5nKSA9PiB2b2lkXG5cbmV4cG9ydCBjb25zdCBMb2FkYWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PENhcHR1cmVGbiB8IG51bGw+KG51bGwpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIExvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbnRleHQnXG59XG4iLCIvKipcbkBjb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCBKYW1lcyBLeWxlIDxtZUB0aGVqYW1lc2t5bGUuY29tPlxuIE1JVCBMaWNlbnNlXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkVcbiovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vamFtaWVidWlsZHMvcmVhY3QtbG9hZGFibGUvYmxvYi92NS41LjAvc3JjL2luZGV4LmpzXG4vLyBNb2RpZmllZCB0byBiZSBjb21wYXRpYmxlIHdpdGggd2VicGFjayA0IC8gTmV4dC5qc1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdWJzY3JpcHRpb24gfSBmcm9tICd1c2Utc3Vic2NyaXB0aW9uJ1xuaW1wb3J0IHsgTG9hZGFibGVDb250ZXh0IH0gZnJvbSAnLi9sb2FkYWJsZS1jb250ZXh0J1xuXG5jb25zdCBBTExfSU5JVElBTElaRVJTID0gW11cbmNvbnN0IFJFQURZX0lOSVRJQUxJWkVSUyA9IFtdXG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBsb2FkKGxvYWRlcikge1xuICBsZXQgcHJvbWlzZSA9IGxvYWRlcigpXG5cbiAgbGV0IHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgbG9hZGVkOiBudWxsLFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgc3RhdGUucHJvbWlzZSA9IHByb21pc2VcbiAgICAudGhlbigobG9hZGVkKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHN0YXRlLmxvYWRlZCA9IGxvYWRlZFxuICAgICAgcmV0dXJuIGxvYWRlZFxuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIGxvYWRNYXAob2JqKSB7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsb2FkZWQ6IHt9LFxuICAgIGVycm9yOiBudWxsLFxuICB9XG5cbiAgbGV0IHByb21pc2VzID0gW11cblxuICB0cnkge1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gbG9hZChvYmpba2V5XSlcblxuICAgICAgaWYgKCFyZXN1bHQubG9hZGluZykge1xuICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc3VsdC5sb2FkZWRcbiAgICAgICAgc3RhdGUuZXJyb3IgPSByZXN1bHQuZXJyb3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIHByb21pc2VzLnB1c2gocmVzdWx0LnByb21pc2UpXG5cbiAgICAgIHJlc3VsdC5wcm9taXNlXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBzdGF0ZS5sb2FkZWRba2V5XSA9IHJlc1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHN0YXRlLmVycm9yID0gZXJyXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgfVxuXG4gIHN0YXRlLnByb21pc2UgPSBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHJldHVybiByZXNcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRocm93IGVyclxuICAgIH0pXG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmouZGVmYXVsdCA6IG9ialxufVxuXG5mdW5jdGlvbiByZW5kZXIobG9hZGVkLCBwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChyZXNvbHZlKGxvYWRlZCksIHByb3BzKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkRm4sIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIGxvYWRlcjogbnVsbCxcbiAgICAgIGxvYWRpbmc6IG51bGwsXG4gICAgICBkZWxheTogMjAwLFxuICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgd2VicGFjazogbnVsbCxcbiAgICAgIG1vZHVsZXM6IG51bGwsXG4gICAgfSxcbiAgICBvcHRpb25zXG4gIClcblxuICBsZXQgc3Vic2NyaXB0aW9uID0gbnVsbFxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgIGNvbnN0IHN1YiA9IG5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sIG9wdHMpXG4gICAgICBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgIGdldEN1cnJlbnRWYWx1ZTogc3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1YiksXG4gICAgICAgIHN1YnNjcmliZTogc3ViLnN1YnNjcmliZS5iaW5kKHN1YiksXG4gICAgICAgIHJldHJ5OiBzdWIucmV0cnkuYmluZChzdWIpLFxuICAgICAgICBwcm9taXNlOiBzdWIucHJvbWlzZS5iaW5kKHN1YiksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpcHRpb24ucHJvbWlzZSgpXG4gIH1cblxuICAvLyBTZXJ2ZXIgb25seVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBBTExfSU5JVElBTElaRVJTLnB1c2goaW5pdClcbiAgfVxuXG4gIC8vIENsaWVudCBvbmx5XG4gIGlmIChcbiAgICAhaW5pdGlhbGl6ZWQgJiZcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBvcHRzLndlYnBhY2sgPT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgY29uc3QgbW9kdWxlSWRzID0gb3B0cy53ZWJwYWNrKClcbiAgICBSRUFEWV9JTklUSUFMSVpFUlMucHVzaCgoaWRzKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcykge1xuICAgICAgICBpZiAoaWRzLmluZGV4T2YobW9kdWxlSWQpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiBpbml0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IChwcm9wcywgcmVmKSA9PiB7XG4gICAgaW5pdCgpXG5cbiAgICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChMb2FkYWJsZUNvbnRleHQpXG4gICAgY29uc3Qgc3RhdGUgPSB1c2VTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKVxuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShcbiAgICAgIHJlZixcbiAgICAgICgpID0+ICh7XG4gICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICB9KSxcbiAgICAgIFtdXG4gICAgKVxuXG4gICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KG9wdHMubG9hZGluZywge1xuICAgICAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICAgICAgICBwYXN0RGVsYXk6IHN0YXRlLnBhc3REZWxheSxcbiAgICAgICAgICB0aW1lZE91dDogc3RhdGUudGltZWRPdXQsXG4gICAgICAgICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgICAgICAgIHJldHJ5OiBzdWJzY3JpcHRpb24ucmV0cnksXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICByZXR1cm4gb3B0cy5yZW5kZXIoc3RhdGUubG9hZGVkLCBwcm9wcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgfSwgW3Byb3BzLCBzdGF0ZV0pXG4gIH1cblxuICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCkgPT4gaW5pdCgpXG4gIExvYWRhYmxlQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29tcG9uZW50J1xuXG4gIHJldHVybiBSZWFjdC5mb3J3YXJkUmVmKExvYWRhYmxlQ29tcG9uZW50KVxufVxuXG5jbGFzcyBMb2FkYWJsZVN1YnNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cykge1xuICAgIHRoaXMuX2xvYWRGbiA9IGxvYWRGblxuICAgIHRoaXMuX29wdHMgPSBvcHRzXG4gICAgdGhpcy5fY2FsbGJhY2tzID0gbmV3IFNldCgpXG4gICAgdGhpcy5fZGVsYXkgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcblxuICAgIHRoaXMucmV0cnkoKVxuICB9XG5cbiAgcHJvbWlzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzLnByb21pc2VcbiAgfVxuXG4gIHJldHJ5KCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKVxuICAgIHRoaXMuX3JlcyA9IHRoaXMuX2xvYWRGbih0aGlzLl9vcHRzLmxvYWRlcilcblxuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgIHRpbWVkT3V0OiBmYWxzZSxcbiAgICB9XG5cbiAgICBjb25zdCB7IF9yZXM6IHJlcywgX29wdHM6IG9wdHMgfSA9IHRoaXNcblxuICAgIGlmIChyZXMubG9hZGluZykge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAob3B0cy5kZWxheSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX3N0YXRlLnBhc3REZWxheSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgICAgcGFzdERlbGF5OiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LCBvcHRzLmRlbGF5KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlKHsgdGltZWRPdXQ6IHRydWUgfSlcbiAgICAgICAgfSwgb3B0cy50aW1lb3V0KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3Jlcy5wcm9taXNlXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChfZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgICB9KVxuICAgIHRoaXMuX3VwZGF0ZSh7fSlcbiAgfVxuXG4gIF91cGRhdGUocGFydGlhbCkge1xuICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgLi4udGhpcy5fc3RhdGUsXG4gICAgICBlcnJvcjogdGhpcy5fcmVzLmVycm9yLFxuICAgICAgbG9hZGVkOiB0aGlzLl9yZXMubG9hZGVkLFxuICAgICAgbG9hZGluZzogdGhpcy5fcmVzLmxvYWRpbmcsXG4gICAgICAuLi5wYXJ0aWFsLFxuICAgIH1cbiAgICB0aGlzLl9jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKCkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0cygpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gIH1cblxuICBnZXRDdXJyZW50VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlXG4gIH1cblxuICBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgICB0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9jYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZShvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkLCBvcHRzKVxufVxuXG5mdW5jdGlvbiBMb2FkYWJsZU1hcChvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRhYmxlTWFwIHJlcXVpcmVzIGEgYHJlbmRlcihsb2FkZWQsIHByb3BzKWAgZnVuY3Rpb24nKVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRNYXAsIG9wdHMpXG59XG5cbkxvYWRhYmxlLk1hcCA9IExvYWRhYmxlTWFwXG5cbmZ1bmN0aW9uIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKSB7XG4gIGxldCBwcm9taXNlcyA9IFtdXG5cbiAgd2hpbGUgKGluaXRpYWxpemVycy5sZW5ndGgpIHtcbiAgICBsZXQgaW5pdCA9IGluaXRpYWxpemVycy5wb3AoKVxuICAgIHByb21pc2VzLnB1c2goaW5pdChpZHMpKVxuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKVxuICAgIH1cbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpID0+IHtcbiAgICBmbHVzaEluaXRpYWxpemVycyhBTExfSU5JVElBTElaRVJTKS50aGVuKHJlc29sdmVJbml0aWFsaXplcnMsIHJlamVjdClcbiAgfSlcbn1cblxuTG9hZGFibGUucHJlbG9hZFJlYWR5ID0gKGlkcyA9IFtdKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByZWxvYWQpID0+IHtcbiAgICBjb25zdCByZXMgPSAoKSA9PiB7XG4gICAgICBpbml0aWFsaXplZCA9IHRydWVcbiAgICAgIHJldHVybiByZXNvbHZlUHJlbG9hZCgpXG4gICAgfVxuICAgIC8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG4gICAgZmx1c2hJbml0aWFsaXplcnMoUkVBRFlfSU5JVElBTElaRVJTLCBpZHMpLnRoZW4ocmVzLCByZXMpXG4gIH0pXG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWSA9IExvYWRhYmxlLnByZWxvYWRSZWFkeVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkYWJsZVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvL0NvbXBvbmVudCBJbXBvcnRzXHJcbmltcG9ydCBCdXR0b25IZWxwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BsYXktY29tcG9uZW50cy9idXR0b25IZWxwXCI7XHJcbmltcG9ydCBCdXR0b25IdXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BsYXktY29tcG9uZW50cy9idXR0b25IdXJ0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0LWNvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBTdHJlYW1lclNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGxheS1jb21wb25lbnRzL3N0cmVhbWVyU2lkZWJhclwiO1xyXG5cclxuLy9Vc2VmdWwgU3R1ZmYgSW1wb3J0c1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFR3aXRjaEVtYmVkID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvcGxheS1jb21wb25lbnRzL3R3aXRjaEVtYmVkJyksXHJcbiAgeyBzc3I6IGZhbHNlIH1cclxuKVxyXG5cclxuLyogU29ja2V0LmlvICovXHJcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvYXBpL3dzL3VzZXJcIik7XHJcblxyXG5mdW5jdGlvbiBTdHJlYW1lckdhbWVDb250cm9sKHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzdHJlYW1lckRhdGEsIHNldFN0cmVhbWVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7fSk7XHJcbiAgICBzb2NrZXQub24oXCJ1cGRhdGUtdXNlckRhdGFcIiwgKGRhdGEpID0+IHtcclxuICAgICAgc2V0VXNlckRhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbihcInVwZGF0ZS1zdHJlYW1lckRhdGFcIiwgKGRhdGEpID0+IHtcclxuICAgICAgc2V0U3RyZWFtZXJEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQuZW1pdChcImdldC11c2VyRGF0YVwiKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxTdHJlYW1lclNpZGViYXIgc3RyZWFtZXJEYXRhPXtzdHJlYW1lckRhdGF9IC8+XHJcbiAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICA8Um93T25lV3JhcHBlcj5cclxuICAgICAgICAgIDxUd2l0Y2g+XHJcbiAgICAgICAgICAgICAgPFR3aXRjaEVtYmVkIGlkPVwidXRoZFwiIGNoYW5uZWw9XCJ1dGhkXCIgLz5cclxuICAgICAgICAgIDwvVHdpdGNoPlxyXG4gICAgICAgIDwvUm93T25lV3JhcHBlcj5cclxuICAgICAgICA8Um93VHdvV3JhcHBlcj5cclxuICAgICAgICAgIDxHYW1lQ29udHJvbD5cclxuICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJFbmNoYW50IEhlbGQgSXRlbVwiIGFjdGlvbj1cImVuY2hhbnRcIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiSGVhbCBQbGF5ZXJcIiBhY3Rpb249XCJoZWFsLXBsYXllclwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJHaXZlIEl0ZW1cIiBhY3Rpb249XCJnaXZlLWl0ZW1cIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJHaXZlIEdvb2QgUG90aW9uIEVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPVwiZ29vZC1wb3Rpb25cIlxyXG4gICAgICAgICAgICA+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICA8QnV0dG9uSHVydFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2l2ZSBCYWQgUG90aW9uIEVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPVwiYmFkLXBvdGlvblwiXHJcbiAgICAgICAgICAgID48L0J1dHRvbkh1cnQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25IdXJ0IHRpdGxlPVwiQ2xlYXIgSW52ZW50b3J5XCIgYWN0aW9uPVwiY2xlYXItaW52XCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIlN1bW1vbiBNb2JcIiBhY3Rpb249XCJzdW1tb24tbW9iXCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cImV0Yy5cIj48L0J1dHRvbkh1cnQ+XHJcbiAgICAgICAgICA8L0dhbWVDb250cm9sPlxyXG4gICAgICAgIDwvUm93VHdvV3JhcHBlcj5cclxuICAgICAgICA8Um93VGhyZWVXcmFwcGVyPlxyXG4gICAgICAgICAgPFN0YXRzPlxyXG4gICAgICAgICAgICA8aDM+VXNlciBJbmZvPC9oMz5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNoYXJkczogPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHt1c2VyRGF0YSA/IHVzZXJEYXRhLnN0YXRzLnNoYXJkcyA6IGBMb2FkaW5nLi4uYH1cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDwvU3RhdHM+XHJcbiAgICAgICAgICA8TGVhZGVyYm9hcmQ+XHJcbiAgICAgICAgICAgIDxoMz5MZWFkZXJib2FyZDwvaDM+XHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ub3AgUGxheWVyOiA8L3NwYW4+TG9hZGluZy4uLlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPC9MZWFkZXJib2FyZD5cclxuICAgICAgICA8L1Jvd1RocmVlV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA3MnB4KTtcclxuICBtYXJnaW4tbGVmdDogNzJweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IFJvd09uZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5jb25zdCBSb3dUd29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBtYXJnaW46IDA7XHJcbmA7XHJcbmNvbnN0IFJvd1RocmVlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IFR3aXRjaCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiA2NXZ3O1xyXG4gIGhlaWdodDogNzIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmMDUyNGM7XHJcbmA7XHJcbmNvbnN0IEdhbWVDb250cm9sID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCA1MHB4O1xyXG5gO1xyXG5jb25zdCBTdGF0cyA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNmMDUyNGM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBMZWFkZXJib2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNmMDUyNGM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy9Qcm9wcyBnZXR0aW5nXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUGFnZVNsdWdzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgICAgIHBhdGhzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGFGcm9tU2x1ZyhwYXJhbXMuc2x1Zyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJldmFsaWRhdGU6IDUsXHJcbiAgICAgICAgcHJvcHM6IHtwYWdlRGF0YX1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGFnZVNsdWdzICgpIHtcclxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKTtcclxuICAgIHJldHVybiBwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBwYWdlLnNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtZXJHYW1lQ29udHJvbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==