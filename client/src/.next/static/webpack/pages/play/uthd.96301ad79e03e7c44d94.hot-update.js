webpackHotUpdate_N_E("pages/play/uthd",{

/***/ "./pages/play/uthd.js":
/*!****************************!*\
  !*** ./pages/play/uthd.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);




function _templateObject10() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    height: 200px;\n    width: 200px;\n    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);\n    border-radius: 8px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    height: 200px;\n    width: 200px;\n    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);\n    border-radius: 8px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    height: 200px;\n    width: 200px;\n    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);\n    border-radius: 8px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    height: 200px;\n    width: 200px;\n    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);\n    border-radius: 8px;\n    cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    diaply: flex;\n    flex: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 1480px;\n    height: 720px;\n    background-color: gray;\n    margin: 20px;\n    flex: 2;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 100%;\n    width: 72px;\n    background-color: #1F2A39;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    height: calc(100vh - 80px);\n    z-index: 1;\n\n    display: flex;\n    background-color: #101824;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//Component Imports

 //Useful Stuff Imports




function StreamerGameControl(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])(ContentWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(StreamerSidebar, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])(PrimaryWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Twitch, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ButtonOne, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ButtonTwo, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ButtonThree, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ButtonFour, {})]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Info, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {})
        })]
      })]
    })
  });
}

_c = StreamerGameControl;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c2 = ContentWrapper;
var StreamerSidebar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
_c3 = StreamerSidebar;
var PrimaryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
_c4 = PrimaryWrapper;
var Twitch = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4());
_c5 = Twitch;
var GameControl = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
_c6 = GameControl;
var Info = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
_c7 = Info;
var ButtonOne = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject7());
_c8 = ButtonOne;
var ButtonTwo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject8());
_c9 = ButtonTwo;
var ButtonThree = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject9());
_c10 = ButtonThree;
var ButtonFour = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject10()); //Props getting

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

_c11 = ButtonFour;
/* harmony default export */ __webpack_exports__["default"] = (StreamerGameControl);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "StreamerGameControl");
$RefreshReg$(_c2, "ContentWrapper");
$RefreshReg$(_c3, "StreamerSidebar");
$RefreshReg$(_c4, "PrimaryWrapper");
$RefreshReg$(_c5, "Twitch");
$RefreshReg$(_c6, "GameControl");
$RefreshReg$(_c7, "Info");
$RefreshReg$(_c8, "ButtonOne");
$RefreshReg$(_c9, "ButtonTwo");
$RefreshReg$(_c10, "ButtonThree");
$RefreshReg$(_c11, "ButtonFour");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbIlN0cmVhbWVyR2FtZUNvbnRyb2wiLCJwcm9wcyIsIkNvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU3RyZWFtZXJTaWRlYmFyIiwiUHJpbWFyeVdyYXBwZXIiLCJUd2l0Y2giLCJHYW1lQ29udHJvbCIsIkluZm8iLCJCdXR0b25PbmUiLCJCdXR0b25Ud28iLCJCdXR0b25UaHJlZSIsIkJ1dHRvbkZvdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxtQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFDakMsc0JBQ0ksOERBQUMsMERBQUQ7QUFBQSwyQkFDSSwrREFBQyxjQUFEO0FBQUEsOEJBQ0ksOERBQUMsZUFBRCxLQURKLGVBSUksK0RBQUMsY0FBRDtBQUFBLGdDQUNJLDhEQUFDLE1BQUQsS0FESixlQUlJLCtEQUFDLFdBQUQ7QUFBQSxrQ0FDSSw4REFBQyxTQUFELEtBREosZUFFSSw4REFBQyxTQUFELEtBRkosZUFHSSw4REFBQyxXQUFELEtBSEosZUFJSSw4REFBQyxVQUFELEtBSko7QUFBQSxVQUpKLGVBVUksOERBQUMsSUFBRDtBQUFBLGlDQUNJO0FBREosVUFWSjtBQUFBLFFBSko7QUFBQTtBQURKLElBREo7QUF1Qkg7O0tBeEJRRCxtQjtBQTBCVCxJQUFNRSxjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO01BQU1GLGM7QUFTTixJQUFNRyxlQUFlLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQXJCO01BQU1DLGU7QUFLTixJQUFNQyxjQUFjLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQXBCO01BQU1FLGM7QUFPTixJQUFNQyxNQUFNLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQVo7TUFBTUcsTTtBQU9OLElBQU1DLFdBQVcsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUksVztBQUlOLElBQU1DLElBQUksR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBVjtNQUFNSyxJO0FBSU4sSUFBTUMsU0FBUyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWLG9CQUFmO01BQU1NLFM7QUFRTixJQUFNQyxTQUFTLEdBQUdSLHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTU8sUztBQU9OLElBQU1DLFdBQVcsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7T0FBTVEsVztBQU9OLElBQU1DLFVBQVUsR0FBR1YseURBQU0sQ0FBQ0MsR0FBVixxQkFBaEIsQyxDQVNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7T0FwQ01TLFU7QUFzQ1NiLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkvdXRoZC45NjMwMWFkNzllMDNlN2M0NGQ5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgSW1wb3J0c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuXHJcbi8vVXNlZnVsIFN0dWZmIEltcG9ydHNcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBTdHJlYW1lckdhbWVDb250cm9sIChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8U3RyZWFtZXJTaWRlYmFyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvU3RyZWFtZXJTaWRlYmFyPlxyXG4gICAgICAgICAgICAgICAgPFByaW1hcnlXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUd2l0Y2g+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHdpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbk9uZT48L0J1dHRvbk9uZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblR3bz48L0J1dHRvblR3bz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblRocmVlPjwvQnV0dG9uVGhyZWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25Gb3VyPjwvQnV0dG9uRm91cj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dhbWVDb250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbmZvPlxyXG4gICAgICAgICAgICAgICAgPC9QcmltYXJ5V3JhcHBlcj5cclxuICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxODI0O1xyXG5gO1xyXG5cclxuY29uc3QgU3RyZWFtZXJTaWRlYmFyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMkEzOTtcclxuYDtcclxuY29uc3QgUHJpbWFyeVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogd3JhcDtcclxuYDsgXHJcblxyXG5jb25zdCBUd2l0Y2ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDE0ODBweDtcclxuICAgIGhlaWdodDogNzIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZmxleDogMjtcclxuYDtcclxuY29uc3QgR2FtZUNvbnRyb2wgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlhcGx5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuYDtcclxuY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgXHJcblxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uT25lID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjOEMyQUQ5IDAlLCByZ2JhKDIxLCAyMTAsIDE5OSwgMC44NSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbmNvbnN0IEJ1dHRvblR3byA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzhDMkFEOSAwJSwgcmdiYSgyMSwgMjEwLCAxOTksIDAuODUpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5gO1xyXG5jb25zdCBCdXR0b25UaHJlZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzhDMkFEOSAwJSwgcmdiYSgyMSwgMjEwLCAxOTksIDAuODUpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5gO1xyXG5jb25zdCBCdXR0b25Gb3VyID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjOEMyQUQ5IDAlLCByZ2JhKDIxLCAyMTAsIDE5OSwgMC44NSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbmA7XHJcblxyXG5cclxuLy9Qcm9wcyBnZXR0aW5nXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUGFnZVNsdWdzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgICAgIHBhdGhzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGFGcm9tU2x1ZyhwYXJhbXMuc2x1Zyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJldmFsaWRhdGU6IDUsXHJcbiAgICAgICAgcHJvcHM6IHtwYWdlRGF0YX1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGFnZVNsdWdzICgpIHtcclxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKTtcclxuICAgIHJldHVybiBwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBwYWdlLnNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtZXJHYW1lQ29udHJvbDsiXSwic291cmNlUm9vdCI6IiJ9