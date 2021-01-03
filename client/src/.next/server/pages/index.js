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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
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
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(HeaderProfile, {
          id: "profileImg",
          src: ""
        })]
      })
    }), children]
  });
}

async function updateUserData() {
  try {
    //Retrieve data from REST API endpoint, on success, update the profile Pic and UserData object, on failure, log the error.
    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/users'); //waits for axios to complete GET request to /api/users, returns an object "user"

    userData = response.data.user;
    document.getElementById("profileImg").src = `${userData.profileImg}`;
  } catch (err) {
    console.log(err);
    document.getElementById("profileImg").classList.add("hidden");
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
const HeaderProfile = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
    width: 50px;
    background-color: gray;
    border-radius: 100%;
    border: 2px solid #F0524C;
    cursor: pointer;
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");





function Home() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SignUpButton, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SignUpText, {
              children: "SIGN UP"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LearnMoreButton, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LearnMoreText, {
              children: "LEARN MORE"
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
        transition: 300ms;
    }
    transition: 300ms;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidXNlckRhdGEiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVwZGF0ZVVzZXJEYXRhIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImRhdGEiLCJ1c2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsInByb2ZpbGVJbWciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiUGFnZVdyYXBwZXIiLCJIZWFkZXJUZXh0IiwiaDEiLCJIZWFkZXJQcm9maWxlIiwiaW1nIiwiSGVhZGVyQ29udGVudFdyYXBwZXIiLCJIb21lIiwiQ29udGVudFdyYXBwZXIiLCJJbWFnZVdyYXBwZXIiLCJTaWduVXBXcmFwcGVyIiwiUmljaGllIiwiUGFnZVRpdGxlIiwiaDMiLCJQYWdlRXhjZXBydCIsInAiLCJCdXR0b25Db250YWluZXIiLCJTaWduVXBCdXR0b24iLCJMZWFybk1vcmVCdXR0b24iLCJTaWduVXBUZXh0IiwiaDUiLCJMZWFybk1vcmVUZXh0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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O0FBR2ViLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDNUdBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5sZXQgdXNlckRhdGEgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIExheW91dCAoe2NoaWxkcmVufSkge1xyXG4gICAgdXBkYXRlVXNlckRhdGEoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+VVRIRCBNQzwvSGVhZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyUHJvZmlsZSBpZD1cInByb2ZpbGVJbWdcIiBzcmM9XCJcIj48L0hlYWRlclByb2ZpbGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlckNvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyRGF0YSgpIHtcclxuICAgIHRyeXsgLy9SZXRyaWV2ZSBkYXRhIGZyb20gUkVTVCBBUEkgZW5kcG9pbnQsIG9uIHN1Y2Nlc3MsIHVwZGF0ZSB0aGUgcHJvZmlsZSBQaWMgYW5kIFVzZXJEYXRhIG9iamVjdCwgb24gZmFpbHVyZSwgbG9nIHRoZSBlcnJvci5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2VycycpOyAvL3dhaXRzIGZvciBheGlvcyB0byBjb21wbGV0ZSBHRVQgcmVxdWVzdCB0byAvYXBpL3VzZXJzLCByZXR1cm5zIGFuIG9iamVjdCBcInVzZXJcIlxyXG4gICAgICAgIHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5zcmMgPSBgJHt1c2VyRGF0YS5wcm9maWxlSW1nfWA7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuY29uc3QgUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclRleHQgPSBzdHlsZWQuaDFgXHJcblxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyUHJvZmlsZSA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0YwNTI0QztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlckNvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSAoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8UmljaGllIHNyYz1cIi9ob21lL3JpY2hpZS5zdmdcIj48L1JpY2hpZT5cclxuICAgICAgICAgICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFNpZ25VcFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VUaXRsZT5MaWtlIHRvIFN0cmVhbT88L1BhZ2VUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnZUV4Y2VwcnQ+U2lnbiBVcCBub3cgdG8gbGV0IHZpZXdlcnMgdGFrZSBjb250cm9sIG9mIHlvdXIgZ2FtZSE8L1BhZ2VFeGNlcHJ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduVXBCdXR0b24+PFNpZ25VcFRleHQ+U0lHTiBVUDwvU2lnblVwVGV4dD48L1NpZ25VcEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExlYXJuTW9yZUJ1dHRvbj48TGVhcm5Nb3JlVGV4dD5MRUFSTiBNT1JFPC9MZWFybk1vcmVUZXh0PjwvTGVhcm5Nb3JlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9TaWduVXBXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTaWduVXBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxODI0O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMzBweCAwIDEwcHggNDBweDtcclxuXHJcbiAgICBib3gtc2hhZG93OiAtNHB4IDBweCA2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbmA7XHJcblxyXG5jb25zdCBSaWNoaWUgPSBzdHlsZWQuaW1nYFxyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiA5NnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5gO1xyXG5jb25zdCBQYWdlRXhjZXBydCA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNDNEM0QzQ7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5jb25zdCBTaWduVXBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YwNTI0QztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggI0YwNTI0QztcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gICAgfVxyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbmA7XHJcbmNvbnN0IExlYXJuTW9yZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNGMDUyNEM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcclxuYDtcclxuY29uc3QgU2lnblVwVGV4dCA9IHN0eWxlZC5oNWBcclxuICAgIG1hcmdpbjogMDtcclxuYDtcclxuY29uc3QgTGVhcm5Nb3JlVGV4dCA9IHN0eWxlZC5oNWBcclxuICAgIG1hcmdpbjogMDtcclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9