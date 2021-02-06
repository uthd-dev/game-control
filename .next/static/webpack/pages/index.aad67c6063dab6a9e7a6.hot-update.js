webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout-components/header.js":
/*!************************************************!*\
  !*** ./components/layout-components/header.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\Dev\\GitHub\\game-control\\components\\layout-components\\header.js",
    _s = $RefreshSig$();

function _templateObject10() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-width: 200px;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 0;\n\n  padding: 10px 20px;\n  background: linear-gradient(64.96deg, #111111 0%, rgba(79, 79, 79, 0.2) 100%);\n  color: #f5f5f5;\n  :hover {\n    opacity: 80%;\n    transition: 100ms;\n  }\n  transition: 300ms;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n\n  height: auto;\n  min-width: 200px;\n  background-color: red;\n  z-index: 150;\n  top: 80px;\n  right: 20px;\n\n  border-radius: 0 0 8px 8px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: beginning;\n  overflow: hidden;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  font-size: 15px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #9146ff;\n  height: 44px;\n  width: auto;\n  padding: 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  :hover {\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50px;\n  height: 50px;\n  background-color: black;\n  border-radius: 100%;\n  border: 2px solid #f0524c;\n  cursor: pointer;\n  :hover {\n    opacity: 75%;\n    transition: 200ms;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media only screen and (max-width: 1400px) {\n    font-size: 36px;\n    font-weight: 800;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 80px;\n  width: 100%;\n  background-color: #000000;\n\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n\n  z-index: 12;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      userData = _useState[0],
      setUserData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      navLinks = _useState2[0],
      setNavLinks = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
      returnTo = _useState3[0],
      setReturnTo = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/user").then(function (res) {
      if (res.data.user) setUserData(res.data.user);
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (userData.loggedIn) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/nav/header").then(function (res) {
        setNavLinks(res.data.nav);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, [userData]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (userData.loggedIn) {
      document.getElementById("profileImg").src = "".concat(userData.profileImg);
      document.getElementById("profileImg").classList.remove("hidden");
      document.getElementById("si-button").classList.add("hidden");
      document.getElementById("headerGreeting").classList.remove("hidden");
    } else {
      setReturnTo(window.location.pathname);
      document.getElementById("si-text").innerHTML = window.innerWidth < 600 ? "Sign In" : "Sign in with Twitch";
    }
  }, [userData]);

  function profileClickHandler() {
    document.getElementById("dd-menu").classList.toggle("hidden");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HeaderWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
      children: "Game Control | UTHD MC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HeaderContentWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HeaderText, {
            children: "UTHD MC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HeaderMenu, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "/api/auth/twitch?returnTo=".concat(returnTo),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SignInButton, {
            id: "si-button",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SignInText, {
              id: "si-text",
              children: "Log in with Twitch"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HeaderGreeting, {
          id: "headerGreeting",
          className: "hidden",
          children: ["Hi, ", userData.displayName, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(HeaderProfileImage, {
          id: "profileImg",
          className: "hidden",
          onClick: profileClickHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavMenu, {
          id: "dd-menu",
          className: "hidden",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavLinks, {
            navLinks: navLinks,
            fallback: "Loading..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(Header, "6IXCN9rdNO8ERl9fwT1LLzY25xU=");

_c = Header;

function NavLinks(_ref) {
  var _this = this;

  var navLinks = _ref.navLinks,
      fallback = _ref.fallback;

  if (!navLinks.length == 0) {
    return navLinks.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: item.href,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavLink, {
            children: item.text
          }, item.key, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this);
    });
  } else return fallback;
}

_c2 = NavLinks;
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c3 = HeaderWrapper;
var HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject2());
_c4 = HeaderText;
var HeaderProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject3());
_c5 = HeaderProfileImage;
var HeaderGreeting = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject4());
_c6 = HeaderGreeting;
var SignInButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
_c7 = SignInButton;
var SignInText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h5(_templateObject6());
_c8 = SignInText;
var HeaderMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
_c9 = HeaderMenu;
var NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8());
_c10 = NavMenu;
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject9());
_c11 = NavLink;
var HeaderContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject10());
_c12 = HeaderContentWrapper;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "NavLinks");
$RefreshReg$(_c3, "HeaderWrapper");
$RefreshReg$(_c4, "HeaderText");
$RefreshReg$(_c5, "HeaderProfileImage");
$RefreshReg$(_c6, "HeaderGreeting");
$RefreshReg$(_c7, "SignInButton");
$RefreshReg$(_c8, "SignInText");
$RefreshReg$(_c9, "HeaderMenu");
$RefreshReg$(_c10, "NavMenu");
$RefreshReg$(_c11, "NavLink");
$RefreshReg$(_c12, "HeaderContentWrapper");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQtY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibmF2TGlua3MiLCJzZXROYXZMaW5rcyIsInJldHVyblRvIiwic2V0UmV0dXJuVG8iLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2dnZWRJbiIsIm5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJwcm9maWxlSW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlubmVySFRNTCIsImlubmVyV2lkdGgiLCJwcm9maWxlQ2xpY2tIYW5kbGVyIiwidG9nZ2xlIiwiZGlzcGxheU5hbWUiLCJOYXZMaW5rcyIsImZhbGxiYWNrIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImhyZWYiLCJ0ZXh0Iiwia2V5IiwiSGVhZGVyV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkhlYWRlclRleHQiLCJoMSIsIkhlYWRlclByb2ZpbGVJbWFnZSIsImltZyIsIkhlYWRlckdyZWV0aW5nIiwiaDMiLCJTaWduSW5CdXR0b24iLCJTaWduSW5UZXh0IiwiaDUiLCJIZWFkZXJNZW51IiwiTmF2TWVudSIsIk5hdkxpbmsiLCJIZWFkZXJDb250ZW50V3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxr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SSxDQUFDRTtBQUE5QixhQUFjRixJQUFJLENBQUNHLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FWRCxNQVVNLE9BQU9OLFFBQVA7QUFDUDs7TUFaUUQsUTtBQWNULElBQU1RLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7TUFBTUYsYTtBQWtCTixJQUFNRyxVQUFVLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQWhCO01BQU1ELFU7QUFPTixJQUFNRSxrQkFBa0IsR0FBR0oseURBQU0sQ0FBQ0ssR0FBVixvQkFBeEI7TUFBTUQsa0I7QUFZTixJQUFNRSxjQUFjLEdBQUdOLHlEQUFNLENBQUNPLEVBQVYsb0JBQXBCO01BQU1ELGM7QUFHTixJQUFNRSxZQUFZLEdBQUdSLHlEQUFNLENBQUNDLEdBQVYsb0JBQWxCO01BQU1PLFk7QUFZTixJQUFNQyxVQUFVLEdBQUdULHlEQUFNLENBQUNVLEVBQVYsb0JBQWhCO01BQU1ELFU7QUFLTixJQUFNRSxVQUFVLEdBQUdYLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO01BQU1VLFU7QUFPTixJQUFNQyxPQUFPLEdBQUdaLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7T0FBTVcsTztBQWtCTixJQUFNQyxPQUFPLEdBQUdiLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7T0FBTVksTztBQW1CTixJQUFNQyxvQkFBb0IsR0FBR2QseURBQU0sQ0FBQ0MsR0FBVixxQkFBMUI7T0FBTWEsb0I7QUFRUzFELHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhZDY3YzYwNjNkYWI2YTllN2E2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtuYXZMaW5rcywgc2V0TmF2TGlua3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZXR1cm5Ubywgc2V0UmV0dXJuVG9dID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgL2FwaS91c2VyYClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmKHJlcy5kYXRhLnVzZXIpIHNldFVzZXJEYXRhKHJlcy5kYXRhLnVzZXIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyRGF0YS5sb2dnZWRJbikge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYC9hcGkvbmF2L2hlYWRlcmApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0TmF2TGlua3MocmVzLmRhdGEubmF2KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyRGF0YV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJEYXRhLmxvZ2dlZEluKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5zcmMgPSBgJHt1c2VyRGF0YS5wcm9maWxlSW1nfWA7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpLWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlckdyZWV0aW5nXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSZXR1cm5Ubyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpLXRleHRcIikuaW5uZXJIVE1MID1cclxuICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCA/IFwiU2lnbiBJblwiIDogXCJTaWduIGluIHdpdGggVHdpdGNoXCI7XHJcbiAgICB9XHJcbiAgfSwgW3VzZXJEYXRhXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHByb2ZpbGVDbGlja0hhbmRsZXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRkLW1lbnVcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXJXcmFwcGVyPlxyXG4gICAgICA8dGl0bGU+R2FtZSBDb250cm9sIHwgVVRIRCBNQzwvdGl0bGU+XHJcbiAgICAgIDxIZWFkZXJDb250ZW50V3JhcHBlcj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxIZWFkZXJUZXh0PlVUSEQgTUM8L0hlYWRlclRleHQ+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxIZWFkZXJNZW51PlxyXG4gICAgICAgICAgPGEgaHJlZj17YC9hcGkvYXV0aC90d2l0Y2g/cmV0dXJuVG89JHtyZXR1cm5Ub31gfT5cclxuICAgICAgICAgICAgPFNpZ25JbkJ1dHRvbiBpZD1cInNpLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgIDxTaWduSW5UZXh0IGlkPVwic2ktdGV4dFwiPkxvZyBpbiB3aXRoIFR3aXRjaDwvU2lnbkluVGV4dD5cclxuICAgICAgICAgICAgPC9TaWduSW5CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8SGVhZGVyR3JlZXRpbmcgaWQ9XCJoZWFkZXJHcmVldGluZ1wiIGNsYXNzTmFtZT1cImhpZGRlblwiPlxyXG4gICAgICAgICAgICBIaSwge3VzZXJEYXRhLmRpc3BsYXlOYW1lfSFcclxuICAgICAgICAgIDwvSGVhZGVyR3JlZXRpbmc+XHJcbiAgICAgICAgICA8SGVhZGVyUHJvZmlsZUltYWdlXHJcbiAgICAgICAgICAgIGlkPVwicHJvZmlsZUltZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2ZpbGVDbGlja0hhbmRsZXJ9XHJcbiAgICAgICAgICA+PC9IZWFkZXJQcm9maWxlSW1hZ2U+XHJcbiAgICAgICAgICA8TmF2TWVudSBpZD1cImRkLW1lbnVcIiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmtzIG5hdkxpbmtzPXtuYXZMaW5rc30gZmFsbGJhY2s9e1wiTG9hZGluZy4uLlwifSAvPlxyXG4gICAgICAgICAgPC9OYXZNZW51PlxyXG4gICAgICAgIDwvSGVhZGVyTWVudT5cclxuICAgICAgPC9IZWFkZXJDb250ZW50V3JhcHBlcj5cclxuICAgIDwvSGVhZGVyV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBOYXZMaW5rcyh7IG5hdkxpbmtzLCBmYWxsYmFjayB9KSB7XHJcbiAgaWYgKCFuYXZMaW5rcy5sZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIG5hdkxpbmtzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtpdGVtLmtleX0+e2l0ZW0udGV4dH08L05hdkxpbms+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfWVsc2UgcmV0dXJuIGZhbGxiYWNrO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG5cclxuICB6LWluZGV4OiAxMjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclRleHQgPSBzdHlsZWQuaDFgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyUHJvZmlsZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjA1MjRjO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBIZWFkZXJHcmVldGluZyA9IHN0eWxlZC5oM2BcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcbmNvbnN0IFNpZ25JbkJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxNDZmZjtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgOmhvdmVyIHtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNpZ25JblRleHQgPSBzdHlsZWQuaDVgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlck1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuYDtcclxuXHJcbmNvbnN0IE5hdk1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHotaW5kZXg6IDE1MDtcclxuICB0b3A6IDgwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGJlZ2lubmluZztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5jb25zdCBOYXZMaW5rID0gc3R5bGVkLmRpdmBcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjQuOTZkZWcsICMxMTExMTEgMCUsIHJnYmEoNzksIDc5LCA3OSwgMC4yKSAxMDAlKTtcclxuICBjb2xvcjogI2Y1ZjVmNTtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogODAlO1xyXG4gICAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IDMwMG1zO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==