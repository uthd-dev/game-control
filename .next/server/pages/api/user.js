module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user.js");
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

/***/ "./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/index */ "./middleware/index.js");
/* harmony import */ var _lib_auth_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/auth/passport */ "./lib/auth/passport.js");
/* harmony import */ var _utils_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/users */ "./utils/users.js");




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middleware_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
handler.get(async (req, res) => res.json({
  user: await Object(_utils_users__WEBPACK_IMPORTED_MODULE_3__["extractUser"])(req)
}));
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./utils/users.js":
/*!************************!*\
  !*** ./utils/users.js ***!
  \************************/
/*! exports provided: extractUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractUser", function() { return extractUser; });
function extractUser(req) {
  if (!req.user) return null; // take only needed user fields to avoid sensitive ones (such as password)

  const {
    username,
    email,
    fname,
    profileImg,
    stats,
    displayName
  } = req.user;
  return {
    username,
    email,
    fname,
    profileImg,
    stats,
    displayName,
    loggedIn: true
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgvcGFzc3BvcnQtdHdpdGNoLmpzIiwid2VicGFjazovLy8uL2xpYi9hdXRoL3Bhc3Nwb3J0LmpzIiwid2VicGFjazovLy8uL2xpYi9kYi9zY2hlbWEvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9kYXRhYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2luZGV4LmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2Vycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZC1maXNjaGVyL3Bhc3Nwb3J0LXR3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3QtbW9uZ29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidWlkLXNhZmVcIiJdLCJuYW1lcyI6WyJUd2l0Y2giLCJTdHJhdGVneSIsImNsaWVudElEIiwicHJvY2VzcyIsImVudiIsInR3aXRjaENsaWVudElkIiwiY2xpZW50U2VjcmV0IiwidHdpdGNoQ2xpZW50U2VjcmV0IiwiY2FsbGJhY2tVUkwiLCJIT1NUX1VSTCIsInNjb3BlIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiZG9uZSIsIlVzZXIiLCJmaW5kT25lIiwidHdpdGNoSWQiLCJpZCIsImVyciIsInVzZXIiLCJmbmFtZSIsInRlbCIsImRpc3BsYXlOYW1lIiwiZGlzcGxheV9uYW1lIiwiZW1haWwiLCJ1c2VybmFtZSIsImxvZ2luIiwicHJvZmlsZUltZyIsInByb2ZpbGVfaW1hZ2VfdXJsIiwicHJvdmlkZXIiLCJzdGF0cyIsInNoYXJkcyIsImlnbiIsInN0cmVhbWVyIiwib25ib2FyZGluZ1N0YXJ0ZWQiLCJhcHByb3ZlZCIsImxpdmUiLCJyb2xlIiwib25saW5lIiwic2F2ZSIsImNvbnNvbGUiLCJsb2ciLCJwYXNzcG9ydCIsInNlcmlhbGl6ZVVzZXIiLCJkZXNlcmlhbGl6ZVVzZXIiLCJmaW5kQnlJZCIsInVzZSIsInR3aXRjaFN0cmF0ZWd5IiwiU2NoZW1hIiwiU3RyaW5nIiwiT2JqZWN0IiwiQm9vbGVhbiIsIm1vbmdvb3NlIiwibW9kZWxzIiwibW9kZWwiLCJkYXRhYmFzZSIsInJlcSIsInJlcyIsIm5leHQiLCJnbG9iYWwiLCJjb25uZWN0IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiZXJyb3IiLCJtaWRkbGV3YXJlIiwibmV4dENvbm5lY3QiLCJzZXNzaW9uIiwiaW5pdGlhbGl6ZSIsIk1vbmdvU3RvcmUiLCJjb25uZWN0TW9uZ28iLCJzZXNzaW9uQ29uZmlnIiwic2VjcmV0IiwidWlkIiwic3luYyIsImNvb2tpZSIsIm1heEFnZSIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwic2Vzc2lvbk1pZGRsZXdhcmUiLCJtb25nb1N0b3JlIiwibW9uZ29vc2VDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsInN0b3JlIiwiaGFuZGxlciIsImdldCIsImpzb24iLCJleHRyYWN0VXNlciIsImxvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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dUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS91c2VyLmpzXCIpO1xuIiwiaW1wb3J0IFR3aXRjaCBmcm9tIFwiQGQtZmlzY2hlci9wYXNzcG9ydC10d2l0Y2hcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2RiL3NjaGVtYS91c2Vyc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVHdpdGNoLlN0cmF0ZWd5KFxyXG4gIHtcclxuICAgIGNsaWVudElEOiBwcm9jZXNzLmVudi50d2l0Y2hDbGllbnRJZCxcclxuICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYudHdpdGNoQ2xpZW50U2VjcmV0LFxyXG4gICAgY2FsbGJhY2tVUkw6IGAke3Byb2Nlc3MuZW52LkhPU1RfVVJMfS9hcGkvYXV0aC90d2l0Y2gvY2FsbGJhY2tgLFxyXG4gICAgc2NvcGU6IFwidXNlcjpyZWFkOmVtYWlsXCIsXHJcbiAgfSxcclxuICAoYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgcHJvZmlsZSwgZG9uZSkgPT4ge1xyXG4gICAgVXNlci5maW5kT25lKHsgdHdpdGNoSWQ6IHByb2ZpbGUuaWQgfSwgZnVuY3Rpb24gKGVyciwgdXNlcikge1xyXG4gICAgICAgIC8vRXJyb3IgZmlyc3RcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL01ha2Ugc3VyZSB1c2VyIGRvZXMgbm90IGFscmVhZHkgZXhpc3RcclxuICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgIC8vQ3JlYXRlIG5ldyB1c2VyIHdpdGggdGhlc2UgZGVmYXVsdCB2YWx1ZXMgKGZvbGxvd3Mgc2NoZW1hIGluIGxpYi9kYi9zY2hlbWEvKVxyXG4gICAgICAgICAgdXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgdHdpdGNoSWQ6IHByb2ZpbGUuaWQsXHJcbiAgICAgICAgICAgIGZuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB0ZWw6IFwiXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9maWxlLmRpc3BsYXlfbmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLmxvZ2luLFxyXG4gICAgICAgICAgICBwcm9maWxlSW1nOiBwcm9maWxlLnByb2ZpbGVfaW1hZ2VfdXJsLFxyXG4gICAgICAgICAgICBwcm92aWRlcjogXCJ0d2l0Y2hcIixcclxuICAgICAgICAgICAgc3RhdHM6IHtcclxuICAgICAgICAgICAgICAvL1RPRE86IFR1cm4gc2hhcmRzIGludG8gYW5kIG9iamVjdCB3aXRoIGEga2V5IGZvciBlYWNoIHN0cmVhbWVyIHRoYXQgdGhlIHVzZXIgaGFzIHNoYXJkcyBmb3JcclxuICAgICAgICAgICAgICAvL2VnLiBHbG9iYWwgU2hhcmRzIC0tLT4gUGVyIHN0cmVhbWVyIHNoYXJkc1xyXG4gICAgICAgICAgICAgIHNoYXJkczogMTAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZ246IFwiXCIsXHJcbiAgICAgICAgICAgIHN0cmVhbWVyOiB7XHJcbiAgICAgICAgICAgICAgb25ib2FyZGluZ1N0YXJ0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGFwcHJvdmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXHJcbiAgICAgICAgICAgIG9ubGluZTogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHVzZXIuc2F2ZShmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBkb25lKGVyciwgdXNlcik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGRvbmUoZXJyLCB1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuKTtcclxuIiwiaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCJwYXNzcG9ydFwiO1xyXG5pbXBvcnQgdHdpdGNoU3RyYXRlZ3kgZnJvbSBcIi4vcGFzc3BvcnQtdHdpdGNoXCJcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vZGIvc2NoZW1hL3VzZXJzJ1xyXG5cclxucGFzc3BvcnQuc2VyaWFsaXplVXNlcihmdW5jdGlvbiAodXNlciwgZG9uZSkge1xyXG4gIGRvbmUobnVsbCwgdXNlci5pZCk7XHJcbn0pO1xyXG5cclxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKGZ1bmN0aW9uIChpZCwgZG9uZSkge1xyXG4gIC8vUmVxdWlyZXMgcmVxLnVzZXIgY2FsbHMgdG8gdXNlIERCIHZhbHVlcyB0byBtYWtlIHN1cmUgdGhhdCB1c2VyIG9iamVjdHMgYW5kIERCIGFyZSBzeW5jZWQuXHJcbiAgVXNlci5maW5kQnlJZChpZCwgZnVuY3Rpb24gKGVyciwgdXNlcikge1xyXG4gICAgZG9uZShlcnIsIHVzZXIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbnBhc3Nwb3J0LnVzZSh0d2l0Y2hTdHJhdGVneSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhc3Nwb3J0IiwiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFVzZXIgPSBuZXcgU2NoZW1hKHtcclxuICB0d2l0Y2hJZDogU3RyaW5nLFxyXG4gIGZuYW1lOiBTdHJpbmcsXHJcbiAgZGlzcGxheU5hbWU6IFN0cmluZyxcclxuICBlbWFpbDogU3RyaW5nLFxyXG4gIHRlbDogU3RyaW5nLFxyXG4gIHVzZXJuYW1lOiBTdHJpbmcsXHJcbiAgcHJvZmlsZUltZzogU3RyaW5nLFxyXG4gIHByb3ZpZGVyOiBTdHJpbmcsXHJcbiAgc3RhdHM6IE9iamVjdCxcclxuICBpZ246IFN0cmluZyxcclxuICBzdHJlYW1lcjogT2JqZWN0LFxyXG4gIHJvbGU6IFN0cmluZyxcclxuICBvbmxpbmU6IEJvb2xlYW4sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyKTtcclxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGF0YWJhc2UocmVxLCByZXMsIG5leHQpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKCFnbG9iYWwubW9uZ29vc2UpIHtcclxuICAgICAgZ2xvYmFsLm1vbmdvb3NlID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYoIXJlcS5tb25nb29zZSkgcmVxLm1vbmdvb3NlID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5leHQoKTtcclxufVxyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XHJcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgc2Vzc2lvbiBmcm9tIFwiLi9zZXNzaW9uXCI7XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbm1pZGRsZXdhcmVcclxuICAudXNlKGRhdGFiYXNlKVxyXG4gIC51c2Uoc2Vzc2lvbilcclxuICAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSlcclxuICAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlO1xyXG4iLCJpbXBvcnQgc2Vzc2lvbiBmcm9tIFwiZXhwcmVzcy1zZXNzaW9uXCI7XHJcbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSBcImNvbm5lY3QtbW9uZ29cIjtcclxuaW1wb3J0IHVpZCBmcm9tIFwidWlkLXNhZmVcIjtcclxuaW1wb3J0IHsgbW9uZ28gfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IE1vbmdvU3RvcmUgPSBjb25uZWN0TW9uZ28oc2Vzc2lvbik7XHJcblxyXG5jb25zdCBzZXNzaW9uQ29uZmlnID0ge1xyXG4gIHNlY3JldDogdWlkLnN5bmMoMTgpLFxyXG4gIGNvb2tpZToge1xyXG4gICAgbWF4QWdlOiAyODgwMCAqIDEwMDAsIC8vIDggaG91cnMgaW4gbWlsbGlzZWNvbmRzXHJcbiAgfSxcclxuICByZXNhdmU6IGZhbHNlLFxyXG4gIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vzc2lvbk1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcclxuICBjb25zdCBtb25nb1N0b3JlID0gbmV3IE1vbmdvU3RvcmUoe1xyXG4gICAgbW9uZ29vc2VDb25uZWN0aW9uOiBnbG9iYWwubW9uZ29vc2UuY29ubmVjdGlvblxyXG4gIH0pO1xyXG4gIHJldHVybiBzZXNzaW9uKHtcclxuICAgIC4uLnNlc3Npb25Db25maWcsXHJcbiAgICBzdG9yZTogbW9uZ29TdG9yZVxyXG4gIH0pKHJlcSwgcmVzLCBuZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tIFwiLi4vLi4vbWlkZGxld2FyZS9pbmRleFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcIi4uLy4uL2xpYi9hdXRoL3Bhc3Nwb3J0XCI7XHJcbmltcG9ydCB7IGV4dHJhY3RVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZXJzXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKTtcclxuXHJcbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xyXG5cclxuaGFuZGxlci5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiByZXMuanNvbih7IHVzZXI6IGF3YWl0IGV4dHJhY3RVc2VyKHJlcSkgfSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiLCJleHBvcnQgZnVuY3Rpb24gZXh0cmFjdFVzZXIocmVxKSB7XHJcbiAgICBpZiAoIXJlcS51c2VyKSByZXR1cm4gbnVsbDtcclxuICAgIC8vIHRha2Ugb25seSBuZWVkZWQgdXNlciBmaWVsZHMgdG8gYXZvaWQgc2Vuc2l0aXZlIG9uZXMgKHN1Y2ggYXMgcGFzc3dvcmQpXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJuYW1lLCBlbWFpbCwgZm5hbWUsIHByb2ZpbGVJbWcsIHN0YXRzLCBkaXNwbGF5TmFtZVxyXG4gICAgfSA9IHJlcS51c2VyO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXNlcm5hbWUsIGVtYWlsLCBmbmFtZSwgcHJvZmlsZUltZywgc3RhdHMsIGRpc3BsYXlOYW1lLCBsb2dnZWRJbjogdHJ1ZSxcclxuICAgIH07XHJcbiAgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBkLWZpc2NoZXIvcGFzc3BvcnQtdHdpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtbW9uZ29cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1aWQtc2FmZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9