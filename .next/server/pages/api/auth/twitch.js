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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/NSD":
/***/ (function(module, exports) {

module.exports = require("uid-safe");

/***/ }),

/***/ "05dG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Zb5a");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zq23");
/* harmony import */ var _lib_auth_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7Ed3");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middleware_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
handler.get((req, res) => {
  if (req.query.returnTo) req.session.returnTo = `${req.query.returnTo}`;

  function doVerify() {
    if (req.query.verify) return req.query.verify == "true" ? true : false;
  }

  _lib_auth_passport__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].authenticate("twitch", {
    forceVerify: doVerify()
  })(req, res);
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("05dG");


/***/ }),

/***/ "7Ed3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "passport"
var external_passport_ = __webpack_require__("CPU0");
var external_passport_default = /*#__PURE__*/__webpack_require__.n(external_passport_);

// EXTERNAL MODULE: external "@d-fischer/passport-twitch"
var passport_twitch_ = __webpack_require__("oafL");
var passport_twitch_default = /*#__PURE__*/__webpack_require__.n(passport_twitch_);

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__("FiKB");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./lib/db/schema/users.js

const User = new external_mongoose_["Schema"]({
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
  permLevel: Number,
  online: Boolean
});
/* harmony default export */ var users = (external_mongoose_default.a.models.User || external_mongoose_default.a.model("User", User));
// CONCATENATED MODULE: ./lib/auth/passport-twitch.js


/* harmony default export */ var passport_twitch = (new passport_twitch_default.a.Strategy({
  clientID: process.env.twitchClientId,
  clientSecret: process.env.twitchClientSecret,
  callbackURL: `${process.env.HOST_URL}/api/auth/twitch/callback`,
  scope: "user:read:email"
}, (accessToken, refreshToken, profile, done) => {
  users.findOne({
    twitchId: profile.id
  }, function (err, user) {
    //Error first
    if (err) {
      return done(err);
    } //Make sure user does not already exist


    if (!user) {
      //Create new user with these default values (follows schema in lib/db/schema/)
      user = new users({
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
        permLevel: 0,
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
// CONCATENATED MODULE: ./lib/auth/passport.js



external_passport_default.a.serializeUser(function (user, done) {
  done(null, user.id);
});
external_passport_default.a.deserializeUser(function (id, done) {
  //Requires req.user calls to use DB values to make sure that user objects and DB are synced.
  users.findById(id, function (err, user) {
    done(err, user);
  });
});
external_passport_default.a.use(passport_twitch);
/* harmony default export */ var passport = __webpack_exports__["a"] = (external_passport_default.a);

/***/ }),

/***/ "CPU0":
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "H5g9":
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),

/***/ "J7Lo":
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "Zb5a":
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "oafL":
/***/ (function(module, exports) {

module.exports = require("@d-fischer/passport-twitch");

/***/ }),

/***/ "zq23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-connect"
var external_next_connect_ = __webpack_require__("Zb5a");
var external_next_connect_default = /*#__PURE__*/__webpack_require__.n(external_next_connect_);

// EXTERNAL MODULE: external "passport"
var external_passport_ = __webpack_require__("CPU0");
var external_passport_default = /*#__PURE__*/__webpack_require__.n(external_passport_);

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__("FiKB");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./middleware/database.js

async function database(req, res, next) {
  try {
    if (!global.mongoose) {
      global.mongoose = await external_mongoose_default.a.connect(process.env.MONGODB_URI, {
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
// EXTERNAL MODULE: external "express-session"
var external_express_session_ = __webpack_require__("J7Lo");
var external_express_session_default = /*#__PURE__*/__webpack_require__.n(external_express_session_);

// EXTERNAL MODULE: external "connect-mongo"
var external_connect_mongo_ = __webpack_require__("H5g9");
var external_connect_mongo_default = /*#__PURE__*/__webpack_require__.n(external_connect_mongo_);

// EXTERNAL MODULE: external "uid-safe"
var external_uid_safe_ = __webpack_require__("/NSD");
var external_uid_safe_default = /*#__PURE__*/__webpack_require__.n(external_uid_safe_);

// CONCATENATED MODULE: ./middleware/session.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MongoStore = external_connect_mongo_default()(external_express_session_default.a);
const sessionConfig = {
  secret: external_uid_safe_default.a.sync(18),
  cookie: {
    maxAge: 28800 * 1000 // 8 hours in milliseconds

  },
  resave: false,
  saveUninitialized: false
};
function sessionMiddleware(req, res, next) {
  const mongoStore = new MongoStore({
    mongooseConnection: global.mongoose.connection
  });
  return external_express_session_default()(_objectSpread(_objectSpread({}, sessionConfig), {}, {
    store: mongoStore
  }))(req, res, next);
}
// CONCATENATED MODULE: ./middleware/index.js




const middleware = external_next_connect_default()();
middleware.use(database).use(sessionMiddleware).use(external_passport_default.a.initialize()).use(external_passport_default.a.session());
/* harmony default export */ var middleware_0 = __webpack_exports__["a"] = (middleware);

/***/ })

/******/ });