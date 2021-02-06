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
          }, item.name, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQtY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibmF2TGlua3MiLCJzZXROYXZMaW5rcyIsInJldHVyblRvIiwic2V0UmV0dXJuVG8iLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2dnZWRJbiIsIm5hdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJwcm9maWxlSW1nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlubmVySFRNTCIsImlubmVyV2lkdGgiLCJwcm9maWxlQ2xpY2tIYW5kbGVyIiwidG9nZ2xlIiwiZGlzcGxheU5hbWUiLCJOYXZMaW5rcyIsImZhbGxiYWNrIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImhyZWYiLCJ0ZXh0IiwibmFtZSIsIkhlYWRlcldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXJUZXh0IiwiaDEiLCJIZWFkZXJQcm9maWxlSW1hZ2UiLCJpbWciLCJIZWFkZXJHcmVldGluZyIsImgzIiwiU2lnbkluQnV0dG9uIiwiU2lnbkluVGV4dCIsImg1IiwiSGVhZGVyTWVudSIsIk5hdk1lbnUiLCJOYXZMaW5rIiwiSGVhZGVyQ29udGVudFdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEs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QUksQ0FBQ0U7QUFBL0IsYUFBY0YsSUFBSSxDQUFDRyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBVkQsTUFVTSxPQUFPTixRQUFQO0FBQ1A7O01BWlFELFE7QUFjVCxJQUFNUSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO01BQU1GLGE7QUFrQk4sSUFBTUcsVUFBVSxHQUFHRix5REFBTSxDQUFDRyxFQUFWLG9CQUFoQjtNQUFNRCxVO0FBT04sSUFBTUUsa0JBQWtCLEdBQUdKLHlEQUFNLENBQUNLLEdBQVYsb0JBQXhCO01BQU1ELGtCO0FBWU4sSUFBTUUsY0FBYyxHQUFHTix5REFBTSxDQUFDTyxFQUFWLG9CQUFwQjtNQUFNRCxjO0FBR04sSUFBTUUsWUFBWSxHQUFHUix5REFBTSxDQUFDQyxHQUFWLG9CQUFsQjtNQUFNTyxZO0FBWU4sSUFBTUMsVUFBVSxHQUFHVCx5REFBTSxDQUFDVSxFQUFWLG9CQUFoQjtNQUFNRCxVO0FBS04sSUFBTUUsVUFBVSxHQUFHWCx5REFBTSxDQUFDQyxHQUFWLG9CQUFoQjtNQUFNVSxVO0FBT04sSUFBTUMsT0FBTyxHQUFHWix5REFBTSxDQUFDQyxHQUFWLG9CQUFiO09BQU1XLE87QUFrQk4sSUFBTUMsT0FBTyxHQUFHYix5REFBTSxDQUFDQyxHQUFWLG9CQUFiO09BQU1ZLE87QUFtQk4sSUFBTUMsb0JBQW9CLEdBQUdkLHlEQUFNLENBQUNDLEdBQVYscUJBQTFCO09BQU1hLG9CO0FBUVMxRCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMDMxOGJlZDhlOGQzNTQ4Yzc4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbmF2TGlua3MsIHNldE5hdkxpbmtzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmV0dXJuVG8sIHNldFJldHVyblRvXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYC9hcGkvdXNlcmApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZihyZXMuZGF0YS51c2VyKSBzZXRVc2VyRGF0YShyZXMuZGF0YS51c2VyKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlckRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGAvYXBpL25hdi9oZWFkZXJgKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHNldE5hdkxpbmtzKHJlcy5kYXRhLm5hdik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdXNlckRhdGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyRGF0YS5sb2dnZWRJbikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVJbWdcIikuc3JjID0gYCR7dXNlckRhdGEucHJvZmlsZUltZ31gO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVJbWdcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJHcmVldGluZ1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UmV0dXJuVG8od2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaS10ZXh0XCIpLmlubmVySFRNTCA9XHJcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggPCA2MDAgPyBcIlNpZ24gSW5cIiA6IFwiU2lnbiBpbiB3aXRoIFR3aXRjaFwiO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VyRGF0YV0pO1xyXG5cclxuICBmdW5jdGlvbiBwcm9maWxlQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZC1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyV3JhcHBlcj5cclxuICAgICAgPHRpdGxlPkdhbWUgQ29udHJvbCB8IFVUSEQgTUM8L3RpdGxlPlxyXG4gICAgICA8SGVhZGVyQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8SGVhZGVyVGV4dD5VVEhEIE1DPC9IZWFkZXJUZXh0PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8SGVhZGVyTWVudT5cclxuICAgICAgICAgIDxhIGhyZWY9e2AvYXBpL2F1dGgvdHdpdGNoP3JldHVyblRvPSR7cmV0dXJuVG99YH0+XHJcbiAgICAgICAgICAgIDxTaWduSW5CdXR0b24gaWQ9XCJzaS1idXR0b25cIj5cclxuICAgICAgICAgICAgICA8U2lnbkluVGV4dCBpZD1cInNpLXRleHRcIj5Mb2cgaW4gd2l0aCBUd2l0Y2g8L1NpZ25JblRleHQ+XHJcbiAgICAgICAgICAgIDwvU2lnbkluQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPEhlYWRlckdyZWV0aW5nIGlkPVwiaGVhZGVyR3JlZXRpbmdcIiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgSGksIHt1c2VyRGF0YS5kaXNwbGF5TmFtZX0hXHJcbiAgICAgICAgICA8L0hlYWRlckdyZWV0aW5nPlxyXG4gICAgICAgICAgPEhlYWRlclByb2ZpbGVJbWFnZVxyXG4gICAgICAgICAgICBpZD1cInByb2ZpbGVJbWdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9maWxlQ2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgPjwvSGVhZGVyUHJvZmlsZUltYWdlPlxyXG4gICAgICAgICAgPE5hdk1lbnUgaWQ9XCJkZC1tZW51XCIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rcyBuYXZMaW5rcz17bmF2TGlua3N9IGZhbGxiYWNrPXtcIkxvYWRpbmcuLi5cIn0gLz5cclxuICAgICAgICAgIDwvTmF2TWVudT5cclxuICAgICAgICA8L0hlYWRlck1lbnU+XHJcbiAgICAgIDwvSGVhZGVyQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L0hlYWRlcldyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTmF2TGlua3MoeyBuYXZMaW5rcywgZmFsbGJhY2sgfSkge1xyXG4gIGlmICghbmF2TGlua3MubGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiBuYXZMaW5rcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aXRlbS5uYW1lfT57aXRlbS50ZXh0fTwvTmF2TGluaz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9ZWxzZSByZXR1cm4gZmFsbGJhY2s7XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcblxyXG4gIHotaW5kZXg6IDEyO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyVGV4dCA9IHN0eWxlZC5oMWBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJQcm9maWxlSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMDUyNGM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICB9XHJcbmA7XHJcbmNvbnN0IEhlYWRlckdyZWV0aW5nID0gc3R5bGVkLmgzYFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuYDtcclxuY29uc3QgU2lnbkluQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE0NmZmO1xyXG4gIGhlaWdodDogNDRweDtcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICA6aG92ZXIge1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2lnbkluVGV4dCA9IHN0eWxlZC5oNWBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgTmF2TWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgei1pbmRleDogMTUwO1xyXG4gIHRvcDogODBweDtcclxuICByaWdodDogMjBweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogYmVnaW5uaW5nO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2NC45NmRlZywgIzExMTExMSAwJSwgcmdiYSg3OSwgNzksIDc5LCAwLjIpIDEwMCUpO1xyXG4gIGNvbG9yOiAjZjVmNWY1O1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiA4MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAxMDBtcztcclxuICB9XHJcbiAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9