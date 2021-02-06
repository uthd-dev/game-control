module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/nav/[context].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/db/schema/links.js":
/*!********************************!*\
  !*** ./lib/db/schema/links.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const Link = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  key: String,
  href: String,
  role: String,
  context: String,
  text: String
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Link || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Link", Link, "links"));

/***/ }),

/***/ "./middleware/database.js":
/*!********************************!*\
  !*** ./middleware/database.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return database; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

async function database(req, res, next) {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    }

    if (!req.mongoose) req.mongoose = global.mongoose;
  } catch (err) {
    console.error(err);
  }

  return next();
}

/***/ }),

/***/ "./middleware/index.js":
/*!*****************************!*\
  !*** ./middleware/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ "./middleware/database.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session */ "./middleware/session.js");




const middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
middleware.use(_database__WEBPACK_IMPORTED_MODULE_2__["default"]).use(_session__WEBPACK_IMPORTED_MODULE_3__["default"]).use(passport__WEBPACK_IMPORTED_MODULE_1___default.a.initialize()).use(passport__WEBPACK_IMPORTED_MODULE_1___default.a.session());
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),

/***/ "./middleware/session.js":
/*!*******************************!*\
  !*** ./middleware/session.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sessionMiddleware; });
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connect-mongo */ "connect-mongo");
/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uid_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uid-safe */ "uid-safe");
/* harmony import */ var uid_safe__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uid_safe__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_1___default()(express_session__WEBPACK_IMPORTED_MODULE_0___default.a);
const sessionConfig = {
  secret: uid_safe__WEBPACK_IMPORTED_MODULE_2___default.a.sync(18),
  cookie: {
    maxAge: 28800 * 1000 // 8 hours in milliseconds

  },
  resave: false,
  saveUninitialized: true
};
function sessionMiddleware(req, res, next) {
  const mongoStore = new MongoStore({
    mongooseConnection: global.mongoose.connection
  });
  return express_session__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread(_objectSpread({}, sessionConfig), {}, {
    store: mongoStore
  }))(req, res, next);
}

/***/ }),

/***/ "./pages/api/nav/[context].js":
/*!************************************!*\
  !*** ./pages/api/nav/[context].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/index */ "./middleware/index.js");
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/links */ "./utils/links.js");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middleware_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
handler.get(async (req, res) => {
  const {
    context
  } = req.query;
  res.json({
    nav: await Object(_utils_links__WEBPACK_IMPORTED_MODULE_2__["getLinks"])(req, context)
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./utils/links.js":
/*!************************!*\
  !*** ./utils/links.js ***!
  \************************/
/*! exports provided: getLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinks", function() { return getLinks; });
/* harmony import */ var _lib_db_schema_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/db/schema/links */ "./lib/db/schema/links.js");

async function getLinks(req, context) {
  if (!req.user) return [];
  return await _lib_db_schema_links__WEBPACK_IMPORTED_MODULE_0__["default"].find({});
}

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "uid-safe":
/*!***************************!*\
  !*** external "uid-safe" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uid-safe");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2RiL3NjaGVtYS9saW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2RhdGFiYXNlLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9zZXNzaW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9uYXYvW2NvbnRleHRdLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2xpbmtzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3QtbW9uZ29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidWlkLXNhZmVcIiJdLCJuYW1lcyI6WyJMaW5rIiwiU2NoZW1hIiwia2V5IiwiU3RyaW5nIiwiaHJlZiIsInJvbGUiLCJjb250ZXh0IiwidGV4dCIsIm1vbmdvb3NlIiwibW9kZWxzIiwibW9kZWwiLCJkYXRhYmFzZSIsInJlcSIsInJlcyIsIm5leHQiLCJnbG9iYWwiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1pZGRsZXdhcmUiLCJuZXh0Q29ubmVjdCIsInVzZSIsInNlc3Npb24iLCJwYXNzcG9ydCIsImluaXRpYWxpemUiLCJNb25nb1N0b3JlIiwiY29ubmVjdE1vbmdvIiwic2Vzc2lvbkNvbmZpZyIsInNlY3JldCIsInVpZCIsInN5bmMiLCJjb29raWUiLCJtYXhBZ2UiLCJyZXNhdmUiLCJzYXZlVW5pbml0aWFsaXplZCIsInNlc3Npb25NaWRkbGV3YXJlIiwibW9uZ29TdG9yZSIsIm1vbmdvb3NlQ29ubmVjdGlvbiIsImNvbm5lY3Rpb24iLCJzdG9yZSIsImhhbmRsZXIiLCJnZXQiLCJxdWVyeSIsImpzb24iLCJuYXYiLCJnZXRMaW5rcyIsInVzZXIiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLElBQUlDLCtDQUFKLENBQVc7QUFDcEJDLEtBQUcsRUFBRUMsTUFEZTtBQUVwQkMsTUFBSSxFQUFFRCxNQUZjO0FBR3BCRSxNQUFJLEVBQUVGLE1BSGM7QUFJcEJHLFNBQU8sRUFBRUgsTUFKVztBQUtwQkksTUFBSSxFQUFFSjtBQUxjLENBQVgsQ0FB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QXdCeEMsR0FBeEIsRUFBNkJOLE9BQTdCLEVBQXNDO0FBQ3pDLE1BQUksQ0FBQ00sR0FBRyxDQUFDeUMsSUFBVCxFQUFlLE9BQU8sRUFBUDtBQUNmLFNBQU8sTUFBTXJELDREQUFJLENBQUNzRCxJQUFMLENBQVUsRUFBVixDQUFiO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNMSCwwQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvbmF2L1tjb250ZXh0XS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL25hdi9bY29udGV4dF0uanNcIik7XG4iLCJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgTGluayA9IG5ldyBTY2hlbWEoe1xyXG4gICAga2V5OiBTdHJpbmcsXHJcbiAgICBocmVmOiBTdHJpbmcsXHJcbiAgICByb2xlOiBTdHJpbmcsXHJcbiAgICBjb250ZXh0OiBTdHJpbmcsXHJcbiAgICB0ZXh0OiBTdHJpbmcsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5MaW5rIHx8IG1vbmdvb3NlLm1vZGVsKFwiTGlua1wiLCBMaW5rLCBcImxpbmtzXCIpO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkYXRhYmFzZShyZXEsIHJlcywgbmV4dCkge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWdsb2JhbC5tb25nb29zZSkge1xyXG4gICAgICBnbG9iYWwubW9uZ29vc2UgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZighcmVxLm1vbmdvb3NlKSByZXEubW9uZ29vc2UgPSBnbG9iYWwubW9uZ29vc2U7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV4dCgpO1xyXG59XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tIFwibmV4dC1jb25uZWN0XCI7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tIFwicGFzc3BvcnRcIjtcclxuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuL2RhdGFiYXNlXCI7XHJcbmltcG9ydCBzZXNzaW9uIGZyb20gXCIuL3Nlc3Npb25cIjtcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xyXG5cclxubWlkZGxld2FyZVxyXG4gIC51c2UoZGF0YWJhc2UpXHJcbiAgLnVzZShzZXNzaW9uKVxyXG4gIC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKVxyXG4gIC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7XHJcbiIsImltcG9ydCBzZXNzaW9uIGZyb20gXCJleHByZXNzLXNlc3Npb25cIjtcclxuaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tIFwiY29ubmVjdC1tb25nb1wiO1xyXG5pbXBvcnQgdWlkIGZyb20gXCJ1aWQtc2FmZVwiO1xyXG5pbXBvcnQgeyBtb25nbyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgTW9uZ29TdG9yZSA9IGNvbm5lY3RNb25nbyhzZXNzaW9uKTtcclxuXHJcbmNvbnN0IHNlc3Npb25Db25maWcgPSB7XHJcbiAgc2VjcmV0OiB1aWQuc3luYygxOCksXHJcbiAgY29va2llOiB7XHJcbiAgICBtYXhBZ2U6IDI4ODAwICogMTAwMCwgLy8gOCBob3VycyBpbiBtaWxsaXNlY29uZHNcclxuICB9LFxyXG4gIHJlc2F2ZTogZmFsc2UsXHJcbiAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXNzaW9uTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xyXG4gIGNvbnN0IG1vbmdvU3RvcmUgPSBuZXcgTW9uZ29TdG9yZSh7XHJcbiAgICBtb25nb29zZUNvbm5lY3Rpb246IGdsb2JhbC5tb25nb29zZS5jb25uZWN0aW9uXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNlc3Npb24oe1xyXG4gICAgLi4uc2Vzc2lvbkNvbmZpZyxcclxuICAgIHN0b3JlOiBtb25nb1N0b3JlXHJcbiAgfSkocmVxLCByZXMsIG5leHQpO1xyXG59XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tIFwibmV4dC1jb25uZWN0XCI7XHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlL2luZGV4XCI7XHJcbmltcG9ydCB7IGdldExpbmtzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xpbmtzXCJcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpO1xyXG5cclxuaGFuZGxlci51c2UobWlkZGxld2FyZSk7XHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgY29udGV4dCB9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgcmVzLmpzb24oeyBuYXY6IGF3YWl0IGdldExpbmtzKHJlcSwgY29udGV4dCkgfSlcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICcuLi9saWIvZGIvc2NoZW1hL2xpbmtzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpbmtzKHJlcSwgY29udGV4dCkge1xyXG4gICAgaWYgKCFyZXEudXNlcikgcmV0dXJuIFtdO1xyXG4gICAgcmV0dXJuIGF3YWl0IExpbmsuZmluZCh7fSlcclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdC1tb25nb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVpZC1zYWZlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=