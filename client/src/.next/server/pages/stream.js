module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/stream.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




let userData = {};

function Layout({
  children
}) {
  updateUserData();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(PageWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Header, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(HeaderContentWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(HeaderText, {
          children: "UTHD MC"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(HeaderMenu, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "/auth/twitch",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SignInButton, {
              id: "si-button",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SignInText, {
                children: "Sign in with Twitch"
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(HeaderGreeting, {
            className: "hidden",
            children: "Welcome!"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(HeaderProfileImage, {
            id: "profileImg",
            className: "hidden"
          })]
        })]
      })
    }), children]
  });
}

async function updateUserData() {
  try {
    //Retrieve data from REST API endpoint, on success, update the profile Pic and UserData object, on failure, log the error.
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/api/users'); //waits for axios to complete GET request to /api/users, returns an object "user"

    userData = response.data.user;

    if (userData.loggedIn == true) {
      document.getElementById("profileImg").src = `${userData.profileImg}`;
      document.getElementById("profileImg").classList.remove("hidden");
      document.getElementById("si-button").classList.add("hidden");
    }
  } catch (err) {
    console.log(err);
  }
}

const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    height: 80px;
    width: 100%;
    background-color: #000000;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`

`;
const HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`

`;
const HeaderProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
    width: 50px;
    background-color: black;
    border-radius: 100%;
    border: 2px solid #F0524C;
    cursor: pointer;
`;
const HeaderGreeting = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3`
    color: white;
`;
const SignInButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    background-color: #9146FF;
    height: 38px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    :hover {

    }
`;
const SignInText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5`
    margin: 0;
    font-size: 15px;
`;
const HeaderMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display: flex;
`;
const HeaderContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/stream.js":
/*!*************************!*\
  !*** ./pages/stream.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");





function Home() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ContentWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ImageWrapper, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Richie, {
          src: "/home/richie.svg"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(SignUpWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(PageTitle, {
          children: "Like to Stream?"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(PageExceprt, {
          children: "Sign Up now to let viewers take control of your game!"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ButtonContainer, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: "/auth/twitch",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SignUpButton, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SignUpText, {
                children: "SIGN UP"
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LearnMoreButton, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LearnMoreText, {
                children: "LEARN MORE"
              })
            })
          })]
        })]
      })]
    })
  });
}

const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    width: 100%;
    height: 100vh;
    z-index: 1;

    display: flex;
    background-color: white;
`;
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SignUpWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    flex: 2;
    background-color: #101824;

    display: flex;
    flex-direction: column;
    padding: 30px 0 10px 40px;

    box-shadow: -4px 0px 6px 1px rgba(0, 0, 0, 0.35);
`;
const Richie = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
    height: 50%;
    min-width: 600px;
    max-width: 100%;
    padding-left: 20px;
`;
const PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3`
    color: white;
    font-weight: 800;
    font-size: 96px;
    margin: 0;
`;
const PageExceprt = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
    font-size: 24px;
    color: #C4C4C4;
    margin: 0 15px;
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    margin: 20px;
    display: flex;
`;
const SignUpButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    height: 72px;
    background: #F0524C;
    border-radius: 8px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    :hover {
        box-shadow: 0px 0px 0px 3px #F0524C;
        background: none;
        transition: 150ms;
    }
    transition: 150ms;
`;
const LearnMoreButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    height: 72px;
    border-radius: 8px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    box-shadow: 0px 0px 0px 2px #F0524C;
    cursor: pointer;
    transition: 300ms;
`;
const SignUpText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5`
    margin: 0;
`;
const LearnMoreText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5`
    margin: 0;
`;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RyZWFtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZXJEYXRhIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1cGRhdGVVc2VyRGF0YSIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwidXNlciIsImxvZ2dlZEluIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsInByb2ZpbGVJbWciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiUGFnZVdyYXBwZXIiLCJIZWFkZXJUZXh0IiwiaDEiLCJIZWFkZXJQcm9maWxlSW1hZ2UiLCJpbWciLCJIZWFkZXJHcmVldGluZyIsImgzIiwiU2lnbkluQnV0dG9uIiwiU2lnbkluVGV4dCIsImg1IiwiSGVhZGVyTWVudSIsIkhlYWRlckNvbnRlbnRXcmFwcGVyIiwiSG9tZSIsIkNvbnRlbnRXcmFwcGVyIiwiSW1hZ2VXcmFwcGVyIiwiU2lnblVwV3JhcHBlciIsIlJpY2hpZSIsIlBhZ2VUaXRsZSIsIlBhZ2VFeGNlcHJ0IiwicCIsIkJ1dHRvbkNvbnRhaW5lciIsIlNpZ25VcEJ1dHRvbiIsIkxlYXJuTW9yZUJ1dHRvbiIsIlNpZ25VcFRleHQiLCJMZWFybk1vcmVUZXh0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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LEdBQUdoQix3REFBTSxDQUFDQyxHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FMQTtBQU9BLE1BQU1nQixhQUFhLEdBQUdqQix3REFBTSxDQUFDQyxHQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRBO0FBV0EsTUFBTWlCLE1BQU0sR0FBR2xCLHdEQUFNLENBQUNNLEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBU0EsTUFBTWEsU0FBUyxHQUFHbkIsd0RBQU0sQ0FBQ1EsRUFBRztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEE7QUFNQSxNQUFNWSxXQUFXLEdBQUdwQix3REFBTSxDQUFDcUIsQ0FBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBTUEsTUFBTUMsZUFBZSxHQUFHdEIsd0RBQU0sQ0FBQ0MsR0FBSTtBQUNuQztBQUNBO0FBQ0EsQ0FIQTtBQUlBLE1BQU1zQixZQUFZLEdBQUd2Qix3REFBTSxDQUFDQyxHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZBO0FBZ0JBLE1BQU11QixlQUFlLEdBQUd4Qix3REFBTSxDQUFDQyxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVkE7QUFXQSxNQUFNd0IsVUFBVSxHQUFHekIsd0RBQU0sQ0FBQ1csRUFBRztBQUM3QjtBQUNBLENBRkE7QUFHQSxNQUFNZSxhQUFhLEdBQUcxQix3REFBTSxDQUFDVyxFQUFHO0FBQ2hDO0FBQ0EsQ0FGQTtBQUdlRyxtRUFBZixFOzs7Ozs7Ozs7OztBQzVHQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zdHJlYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3N0cmVhbS5qc1wiKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5sZXQgdXNlckRhdGEgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIExheW91dCAoe2NoaWxkcmVufSkge1xyXG4gICAgdXBkYXRlVXNlckRhdGEoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+VVRIRCBNQzwvSGVhZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hdXRoL3R3aXRjaFwiPjxTaWduSW5CdXR0b24gaWQ9XCJzaS1idXR0b25cIj48U2lnbkluVGV4dD5TaWduIGluIHdpdGggVHdpdGNoPC9TaWduSW5UZXh0PjwvU2lnbkluQnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckdyZWV0aW5nIGNsYXNzTmFtZT1cImhpZGRlblwiPldlbGNvbWUhPC9IZWFkZXJHcmVldGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlclByb2ZpbGVJbWFnZSBpZD1cInByb2ZpbGVJbWdcIiBjbGFzc05hbWU9XCJoaWRkZW5cIj48L0hlYWRlclByb2ZpbGVJbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRlck1lbnU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlckNvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyRGF0YSgpIHtcclxuICAgIHRyeXsgLy9SZXRyaWV2ZSBkYXRhIGZyb20gUkVTVCBBUEkgZW5kcG9pbnQsIG9uIHN1Y2Nlc3MsIHVwZGF0ZSB0aGUgcHJvZmlsZSBQaWMgYW5kIFVzZXJEYXRhIG9iamVjdCwgb24gZmFpbHVyZSwgbG9nIHRoZSBlcnJvci5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VycycpOyAvL3dhaXRzIGZvciBheGlvcyB0byBjb21wbGV0ZSBHRVQgcmVxdWVzdCB0byAvYXBpL3VzZXJzLCByZXR1cm5zIGFuIG9iamVjdCBcInVzZXJcIlxyXG4gICAgICAgIHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgIGlmKHVzZXJEYXRhLmxvZ2dlZEluID09IHRydWUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlSW1nXCIpLnNyYyA9IGAke3VzZXJEYXRhLnByb2ZpbGVJbWd9YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlSW1nXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ktYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJUZXh0ID0gc3R5bGVkLmgxYFxyXG5cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclByb2ZpbGVJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGMDUyNEM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbmNvbnN0IEhlYWRlckdyZWV0aW5nID0gc3R5bGVkLmgzYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5jb25zdCBTaWduSW5CdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkxNDZGRjtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICA6aG92ZXIge1xyXG5cclxuICAgIH1cclxuYDtcclxuY29uc3QgU2lnbkluVGV4dCA9IHN0eWxlZC5oNWBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlck1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlckNvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSAoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8UmljaGllIHNyYz1cIi9ob21lL3JpY2hpZS5zdmdcIj48L1JpY2hpZT5cclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFNpZ25VcFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VUaXRsZT5MaWtlIHRvIFN0cmVhbT88L1BhZ2VUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZUV4Y2VwcnQ+U2lnbiBVcCBub3cgdG8gbGV0IHZpZXdlcnMgdGFrZSBjb250cm9sIG9mIHlvdXIgZ2FtZSE8L1BhZ2VFeGNlcHJ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYXV0aC90d2l0Y2hcIj48U2lnblVwQnV0dG9uPjxTaWduVXBUZXh0PlNJR04gVVA8L1NpZ25VcFRleHQ+PC9TaWduVXBCdXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48TGVhcm5Nb3JlQnV0dG9uPjxMZWFybk1vcmVUZXh0PkxFQVJOIE1PUkU8L0xlYXJuTW9yZVRleHQ+PC9MZWFybk1vcmVCdXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9TaWduVXBXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTaWduVXBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxODI0O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMzBweCAwIDEwcHggNDBweDtcclxuXHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDBweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbmA7XHJcblxyXG5jb25zdCBSaWNoaWUgPSBzdHlsZWQuaW1nYFxyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiA5NnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5gO1xyXG5jb25zdCBQYWdlRXhjZXBydCA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNDNEM0QzQ7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5jb25zdCBTaWduVXBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YwNTI0QztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggI0YwNTI0QztcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDE1MG1zO1xyXG4gICAgfVxyXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XHJcbmA7XHJcbmNvbnN0IExlYXJuTW9yZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNGMDUyNEM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuYDtcclxuY29uc3QgU2lnblVwVGV4dCA9IHN0eWxlZC5oNWBcclxuICAgIG1hcmdpbjogMDtcclxuYDtcclxuY29uc3QgTGVhcm5Nb3JlVGV4dCA9IHN0eWxlZC5oNWBcclxuICAgIG1hcmdpbjogMDtcclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9