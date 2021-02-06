module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/twitch/callback.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/auth/passport-twitch.js":
/*!*************************************!*\
  !*** ./lib/auth/passport-twitch.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_fischer_passport_twitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @d-fischer/passport-twitch */ "@d-fischer/passport-twitch");
/* harmony import */ var _d_fischer_passport_twitch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_fischer_passport_twitch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_schema_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/schema/users */ "./lib/db/schema/users.js");


/* harmony default export */ __webpack_exports__["default"] = (new _d_fischer_passport_twitch__WEBPACK_IMPORTED_MODULE_0___default.a.Strategy({
  clientID: process.env.twitchClientId,
  clientSecret: process.env.twitchClientSecret,
  callbackURL: `${process.env.HOST_URL}/api/auth/twitch/callback`,
  scope: "user:read:email"
}, (accessToken, refreshToken, profile, done) => {
  _db_schema_users__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    twitchId: profile.id
  }, function (err, user) {
    //Error first
    if (err) {
      return done(err);
    } //Make sure user does not already exist


    if (!user) {
      //Create new user with these default values (follows schema in lib/db/schema/)
      user = new _db_schema_users__WEBPACK_IMPORTED_MODULE_1__["default"]({
        twitchId: profile.id,
        fname: "",
        tel: "",
        displayName: profile.display_name,
        email: profile.email,
        username: profile.login,
        profileImg: profile.profile_image_url,
        provider: "twitch",
        stats: {
          //TODO: Turn shards into and object with a key for each streamer that the user has shards for
          //eg. Global Shards ---> Per streamer shards
          shards: 100
        },
        ign: "",
        streamer: {
          onboardingStarted: false,
          approved: false,
          live: false
        },
        role: "user",
        online: false
      });
      user.save(function (err) {
        if (err) console.log(err);
        return done(err, user);
      });
    } else {
      return done(err, user);
    }
  });
}));

/***/ }),

/***/ "./lib/auth/passport.js":
/*!******************************!*\
  !*** ./lib/auth/passport.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _passport_twitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passport-twitch */ "./lib/auth/passport-twitch.js");
/* harmony import */ var _db_schema_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/schema/users */ "./lib/db/schema/users.js");



passport__WEBPACK_IMPORTED_MODULE_0___default.a.serializeUser(function (user, done) {
  done(null, user.id);
});
passport__WEBPACK_IMPORTED_MODULE_0___default.a.deserializeUser(function (id, done) {
  //Requires req.user calls to use DB values to make sure that user objects and DB are synced.
  _db_schema_users__WEBPACK_IMPORTED_MODULE_2__["default"].findById(id, function (err, user) {
    done(err, user);
  });
});
passport__WEBPACK_IMPORTED_MODULE_0___default.a.use(_passport_twitch__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (passport__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./lib/db/schema/users.js":
/*!********************************!*\
  !*** ./lib/db/schema/users.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const User = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  twitchId: String,
  fname: String,
  displayName: String,
  email: String,
  tel: String,
  username: String,
  profileImg: String,
  provider: String,
  stats: Object,
  ign: String,
  streamer: Object,
  role: String,
  online: Boolean
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", User));

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

/***/ "./pages/api/auth/twitch/callback.js":
/*!*******************************************!*\
  !*** ./pages/api/auth/twitch/callback.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../middleware/index */ "./middleware/index.js");
/* harmony import */ var _lib_auth_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/auth/passport */ "./lib/auth/passport.js");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middleware_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
handler.get(_lib_auth_passport__WEBPACK_IMPORTED_MODULE_2__["default"].authenticate("twitch", {
  failureRedirect: "/"
}), async (req, res) => {
  var _req$session;

  // Successful authentication, redirect home (default) or returnTo (from session), and reset returnTo.
  if ((_req$session = req.session) === null || _req$session === void 0 ? void 0 : _req$session.returnTo) {
    let returnTo = req.session.returnTo;
    req.session.returnTo = "/";
    res.redirect(`${"http://localhost:3000"}${returnTo}`);
  } else res.redirect("/");
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "@d-fischer/passport-twitch":
/*!*********************************************!*\
  !*** external "@d-fischer/passport-twitch" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@d-fischer/passport-twitch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgvcGFzc3BvcnQtdHdpdGNoLmpzIiwid2VicGFjazovLy8uL2xpYi9hdXRoL3Bhc3Nwb3J0LmpzIiwid2VicGFjazovLy8uL2xpYi9kYi9zY2hlbWEvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC90d2l0Y2gvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGQtZmlzY2hlci9wYXNzcG9ydC10d2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25uZWN0LW1vbmdvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVpZC1zYWZlXCIiXSwibmFtZXMiOlsiVHdpdGNoIiwiU3RyYXRlZ3kiLCJjbGllbnRJRCIsInByb2Nlc3MiLCJlbnYiLCJ0d2l0Y2hDbGllbnRJZCIsImNsaWVudFNlY3JldCIsInR3aXRjaENsaWVudFNlY3JldCIsImNhbGxiYWNrVVJMIiwiSE9TVF9VUkwiLCJzY29wZSIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwicHJvZmlsZSIsImRvbmUiLCJVc2VyIiwiZmluZE9uZSIsInR3aXRjaElkIiwiaWQiLCJlcnIiLCJ1c2VyIiwiZm5hbWUiLCJ0ZWwiLCJkaXNwbGF5TmFtZSIsImRpc3BsYXlfbmFtZSIsImVtYWlsIiwidXNlcm5hbWUiLCJsb2dpbiIsInByb2ZpbGVJbWciLCJwcm9maWxlX2ltYWdlX3VybCIsInByb3ZpZGVyIiwic3RhdHMiLCJzaGFyZHMiLCJpZ24iLCJzdHJlYW1lciIsIm9uYm9hcmRpbmdTdGFydGVkIiwiYXBwcm92ZWQiLCJsaXZlIiwicm9sZSIsIm9ubGluZSIsInNhdmUiLCJjb25zb2xlIiwibG9nIiwicGFzc3BvcnQiLCJzZXJpYWxpemVVc2VyIiwiZGVzZXJpYWxpemVVc2VyIiwiZmluZEJ5SWQiLCJ1c2UiLCJ0d2l0Y2hTdHJhdGVneSIsIlNjaGVtYSIsIlN0cmluZyIsIk9iamVjdCIsIkJvb2xlYW4iLCJtb25nb29zZSIsIm1vZGVscyIsIm1vZGVsIiwiZGF0YWJhc2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZ2xvYmFsIiwiY29ubmVjdCIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsImVycm9yIiwibWlkZGxld2FyZSIsIm5leHRDb25uZWN0Iiwic2Vzc2lvbiIsImluaXRpYWxpemUiLCJNb25nb1N0b3JlIiwiY29ubmVjdE1vbmdvIiwic2Vzc2lvbkNvbmZpZyIsInNlY3JldCIsInVpZCIsInN5bmMiLCJjb29raWUiLCJtYXhBZ2UiLCJyZXNhdmUiLCJzYXZlVW5pbml0aWFsaXplZCIsInNlc3Npb25NaWRkbGV3YXJlIiwibW9uZ29TdG9yZSIsIm1vbmdvb3NlQ29ubmVjdGlvbiIsImNvbm5lY3Rpb24iLCJzdG9yZSIsImhhbmRsZXIiLCJnZXQiLCJhdXRoZW50aWNhdGUiLCJmYWlsdXJlUmVkaXJlY3QiLCJyZXR1cm5UbyIsInJlZGlyZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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Q0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdXRoL3R3aXRjaC9jYWxsYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvdHdpdGNoL2NhbGxiYWNrLmpzXCIpO1xuIiwiaW1wb3J0IFR3aXRjaCBmcm9tIFwiQGQtZmlzY2hlci9wYXNzcG9ydC10d2l0Y2hcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2RiL3NjaGVtYS91c2Vyc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVHdpdGNoLlN0cmF0ZWd5KFxyXG4gIHtcclxuICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi50d2l0Y2hDbGllbnRJZCxcclxuICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYudHdpdGNoQ2xpZW50U2VjcmV0LFxyXG4gICAgY2FsbGJhY2tVUkw6IGAke3Byb2Nlc3MuZW52LkhPU1RfVVJMfS9hcGkvYXV0aC90d2l0Y2gvY2FsbGJhY2tgLFxyXG4gICAgc2NvcGU6IFwidXNlcjpyZWFkOmVtYWlsXCIsXHJcbiAgfSxcclxuICAoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkgPT4ge1xyXG4gICAgVXNlci5maW5kT25lKHsgdHdpdGNoSWQ6IHByb2ZpbGUuaWQgfSwgZnVuY3Rpb24gKGVyciwgdXNlcikge1xyXG4gICAgICAgIC8vRXJyb3IgZmlyc3RcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL01ha2Ugc3VyZSB1c2VyIGRvZXMgbm90IGFscmVhZHkgZXhpc3RcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIC8vQ3JlYXRlIG5ldyB1c2VyIHdpdGggdGhlc2UgZGVmYXVsdCB2YWx1ZXMgKGZvbGxvd3Mgc2NoZW1hIGluIGxpYi9kYi9zY2hlbWEvKVxyXG4gICAgICAgICAgdXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgdHdpdGNoSWQ6IHByb2ZpbGUuaWQsXHJcbiAgICAgICAgICAgIGZuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB0ZWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9maWxlLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLmxvZ2luLFxyXG4gICAgICAgICAgICBwcm9maWxlSW1nOiBwcm9maWxlLnByb2ZpbGVfaW1hZ2VfdXJsLFxyXG4gICAgICAgICAgICBwcm92aWRlcjogXCJ0d2l0Y2hcIixcclxuICAgICAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgICAgICAvL1RPRE86IFR1cm4gc2hhcmRzIGludG8gYW5kIG9iamVjdCB3aXRoIGEga2V5IGZvciBlYWNoIHN0cmVhbWVyIHRoYXQgdGhlIHVzZXIgaGFzIHNoYXJkcyBmb3JcclxuICAgICAgICAgICAgICAvL2VnLiBHbG9iYWwgU2hhcmRzIC0tLT4gUGVyIHN0cmVhbWVyIHNoYXJkc1xyXG4gICAgICAgICAgICAgIHNoYXJkczogMTAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZ246IFwiXCIsXHJcbiAgICAgICAgICAgIHN0cmVhbWVyOiB7XHJcbiAgICAgICAgICAgICAgb25ib2FyZGluZ1N0YXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGFwcHJvdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXHJcbiAgICAgICAgICAgIG9ubGluZTogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHVzZXIuc2F2ZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKGVyciwgdXNlcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGRvbmUoZXJyLCB1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuKTtcclxuIiwiaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5pbXBvcnQgdHdpdGNoU3RyYXRlZ3kgZnJvbSBcIi4vcGFzc3BvcnQtdHdpdGNoXCJcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vZGIvc2NoZW1hL3VzZXJzJ1xyXG5cclxucGFzc3BvcnQuc2VyaWFsaXplVXNlcihmdW5jdGlvbiAodXNlciwgZG9uZSkge1xyXG4gIGRvbmUobnVsbCwgdXNlci5pZCk7XHJcbn0pO1xyXG5cclxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKGZ1bmN0aW9uIChpZCwgZG9uZSkge1xyXG4gIC8vUmVxdWlyZXMgcmVxLnVzZXIgY2FsbHMgdG8gdXNlIERCIHZhbHVlcyB0byBtYWtlIHN1cmUgdGhhdCB1c2VyIG9iamVjdHMgYW5kIERCIGFyZSBzeW5jZWQuXHJcbiAgVXNlci5maW5kQnlJZChpZCwgZnVuY3Rpb24gKGVyciwgdXNlcikge1xyXG4gICAgZG9uZShlcnIsIHVzZXIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnBhc3Nwb3J0LnVzZSh0d2l0Y2hTdHJhdGVneSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhc3Nwb3J0IiwiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFVzZXIgPSBuZXcgU2NoZW1hKHtcclxuICB0d2l0Y2hJZDogU3RyaW5nLFxyXG4gIGZuYW1lOiBTdHJpbmcsXHJcbiAgZGlzcGxheU5hbWU6IFN0cmluZyxcclxuICBlbWFpbDogU3RyaW5nLFxyXG4gIHRlbDogU3RyaW5nLFxyXG4gIHVzZXJuYW1lOiBTdHJpbmcsXHJcbiAgcHJvZmlsZUltZzogU3RyaW5nLFxyXG4gIHByb3ZpZGVyOiBTdHJpbmcsXHJcbiAgc3RhdHM6IE9iamVjdCxcclxuICBpZ246IFN0cmluZyxcclxuICBzdHJlYW1lcjogT2JqZWN0LFxyXG4gIHJvbGU6IFN0cmluZyxcclxuICBvbmxpbmU6IEJvb2xlYW4sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGF0YWJhc2UocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFnbG9iYWwubW9uZ29vc2UpIHtcclxuICAgICAgZ2xvYmFsLm1vbmdvb3NlID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYoIXJlcS5tb25nb29zZSkgcmVxLm1vbmdvb3NlID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5leHQoKTtcclxufVxyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgc2Vzc2lvbiBmcm9tIFwiLi9zZXNzaW9uXCI7XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbm1pZGRsZXdhcmVcclxuICAudXNlKGRhdGFiYXNlKVxyXG4gIC51c2Uoc2Vzc2lvbilcclxuICAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSlcclxuICAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlO1xyXG4iLCJpbXBvcnQgc2Vzc2lvbiBmcm9tIFwiZXhwcmVzcy1zZXNzaW9uXCI7XHJcbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSBcImNvbm5lY3QtbW9uZ29cIjtcclxuaW1wb3J0IHVpZCBmcm9tIFwidWlkLXNhZmVcIjtcclxuaW1wb3J0IHsgbW9uZ28gfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1vbmdvU3RvcmUgPSBjb25uZWN0TW9uZ28oc2Vzc2lvbik7XHJcblxyXG5jb25zdCBzZXNzaW9uQ29uZmlnID0ge1xyXG4gIHNlY3JldDogdWlkLnN5bmMoMTgpLFxyXG4gIGNvb2tpZToge1xyXG4gICAgbWF4QWdlOiAyODgwMCAqIDEwMDAsIC8vIDggaG91cnMgaW4gbWlsbGlzZWNvbmRzXHJcbiAgfSxcclxuICByZXNhdmU6IGZhbHNlLFxyXG4gIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vzc2lvbk1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcclxuICBjb25zdCBtb25nb1N0b3JlID0gbmV3IE1vbmdvU3RvcmUoe1xyXG4gICAgbW9uZ29vc2VDb25uZWN0aW9uOiBnbG9iYWwubW9uZ29vc2UuY29ubmVjdGlvblxyXG4gIH0pO1xyXG4gIHJldHVybiBzZXNzaW9uKHtcclxuICAgIC4uLnNlc3Npb25Db25maWcsXHJcbiAgICBzdG9yZTogbW9uZ29TdG9yZVxyXG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tIFwiLi4vLi4vLi4vLi4vbWlkZGxld2FyZS9pbmRleFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9hdXRoL3Bhc3Nwb3J0XCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xyXG5cclxuaGFuZGxlci5nZXQoXHJcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKFwidHdpdGNoXCIsIHsgZmFpbHVyZVJlZGlyZWN0OiBcIi9cIiB9KSxcclxuICBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIC8vIFN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb24sIHJlZGlyZWN0IGhvbWUgKGRlZmF1bHQpIG9yIHJldHVyblRvIChmcm9tIHNlc3Npb24pLCBhbmQgcmVzZXQgcmV0dXJuVG8uXHJcbiAgICBpZiAocmVxLnNlc3Npb24/LnJldHVyblRvKSB7XHJcbiAgICAgIGxldCByZXR1cm5UbyA9IHJlcS5zZXNzaW9uLnJldHVyblRvO1xyXG4gICAgICByZXEuc2Vzc2lvbi5yZXR1cm5UbyA9IFwiL1wiO1xyXG4gICAgICByZXMucmVkaXJlY3QoYCR7cHJvY2Vzcy5lbnYuaG9zdFVybH0ke3JldHVyblRvfWApO1xyXG4gICAgfSBlbHNlIHJlcy5yZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZC1maXNjaGVyL3Bhc3Nwb3J0LXR3aXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25uZWN0LW1vbmdvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidWlkLXNhZmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==