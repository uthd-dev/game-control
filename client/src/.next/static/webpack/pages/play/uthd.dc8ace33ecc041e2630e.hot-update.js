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




function _templateObject6() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n"]);

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
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    height: calc(100vh - 80px);\n    z-index: 1;\n\n    display: flex;\n    background-color: white;\n"]);

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
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Twitch, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(GameControl, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Info, {})]
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
var Info = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6()); //Props getting

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

_c7 = Info;
/* harmony default export */ __webpack_exports__["default"] = (StreamerGameControl);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "StreamerGameControl");
$RefreshReg$(_c2, "ContentWrapper");
$RefreshReg$(_c3, "StreamerSidebar");
$RefreshReg$(_c4, "PrimaryWrapper");
$RefreshReg$(_c5, "Twitch");
$RefreshReg$(_c6, "GameControl");
$RefreshReg$(_c7, "Info");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbIlN0cmVhbWVyR2FtZUNvbnRyb2wiLCJwcm9wcyIsIkNvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU3RyZWFtZXJTaWRlYmFyIiwiUHJpbWFyeVdyYXBwZXIiLCJUd2l0Y2giLCJHYW1lQ29udHJvbCIsIkluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLG1CQUFULENBQThCQyxLQUE5QixFQUFxQztBQUNqQyxzQkFDSSw4REFBQywwREFBRDtBQUFBLDJCQUNJLCtEQUFDLGNBQUQ7QUFBQSw4QkFDSSw4REFBQyxlQUFELEtBREosZUFJSSwrREFBQyxjQUFEO0FBQUEsZ0NBQ0ksOERBQUMsTUFBRCxLQURKLGVBSUksOERBQUMsV0FBRCxLQUpKLGVBT0ksOERBQUMsSUFBRCxLQVBKO0FBQUEsUUFKSjtBQUFBO0FBREosSUFESjtBQW9CSDs7S0FyQlFELG1CO0FBdUJULElBQU1FLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBcEI7TUFBTUYsYztBQVNOLElBQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBckI7TUFBTUMsZTtBQUtOLElBQU1DLGNBQWMsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBcEI7TUFBTUUsYztBQUlOLElBQU1DLE1BQU0sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVixvQkFBWjtNQUFNRyxNO0FBRU4sSUFBTUMsV0FBVyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtNQUFNSSxXO0FBRU4sSUFBTUMsSUFBSSxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUFWLEMsQ0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BN0JNSyxJO0FBK0JTVCxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5L3V0aGQuZGM4YWNlMzNlY2MwNDFlMjYzMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IEltcG9ydHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcblxyXG4vL1VzZWZ1bCBTdHVmZiBJbXBvcnRzXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gU3RyZWFtZXJHYW1lQ29udHJvbCAocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFN0cmVhbWVyU2lkZWJhcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1N0cmVhbWVyU2lkZWJhcj5cclxuICAgICAgICAgICAgICAgIDxQcmltYXJ5V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VHdpdGNoPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1R3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICA8R2FtZUNvbnRyb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvR2FtZUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEluZm8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5mbz5cclxuICAgICAgICAgICAgICAgIDwvUHJpbWFyeVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHJlYW1lclNpZGViYXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYyQTM5O1xyXG5gO1xyXG5jb25zdCBQcmltYXJ5V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcblxyXG5gOyBcclxuXHJcbmNvbnN0IFR3aXRjaCA9IHN0eWxlZC5kaXZgXHJcbmA7XHJcbmNvbnN0IEdhbWVDb250cm9sID0gc3R5bGVkLmRpdmBcclxuYDtcclxuY29uc3QgSW5mbyA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbi8vUHJvcHMgZ2V0dGluZ1xyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbFBhZ2VTbHVncygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuICAgICAgICBwYXRoc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGdldFBhZ2VEYXRhRnJvbVNsdWcocGFyYW1zLnNsdWcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXZhbGlkYXRlOiA1LFxyXG4gICAgICAgIHByb3BzOiB7cGFnZURhdGF9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFBhZ2VTbHVncyAoKSB7XHJcbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IGdldFBhZ2VzKCk7XHJcbiAgICByZXR1cm4gcGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogcGFnZS5zbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyR2FtZUNvbnRyb2w7Il0sInNvdXJjZVJvb3QiOiIifQ==