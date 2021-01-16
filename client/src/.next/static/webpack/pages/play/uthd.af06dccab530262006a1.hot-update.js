webpackHotUpdate_N_E("pages/play/uthd",{

/***/ "./components/ButtonHelp.js":
/*!**********************************!*\
  !*** ./components/ButtonHelp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: white;\n    margin: 30px 20px 20px 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    height: 200px;\n    width: 200px;\n    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);\n    border-radius: 8px;\n    cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function ButtonHelp(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(ButtonWrapper, {
    onClick: function onClick() {
      sendAction(props.action);
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BtnTitle, {
      children: props.title
    })
  });
}

_c = ButtonHelp;

function sendAction(action) {
  try {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://gc.uthd.dev/api/mc/actions/".concat(action));
    console.log();
  } catch (err) {
    console.log(err);
  }
}

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject());
_c2 = ButtonWrapper;
var BtnTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h5(_templateObject2());
_c3 = BtnTitle;
/* harmony default export */ __webpack_exports__["default"] = (ButtonHelp);

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonHelp");
$RefreshReg$(_c2, "ButtonWrapper");
$RefreshReg$(_c3, "BtnTitle");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25IZWxwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkhlbHAiLCJwcm9wcyIsInNlbmRBY3Rpb24iLCJhY3Rpb24iLCJ0aXRsZSIsImF4aW9zIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiYnV0dG9uIiwiQnRuVGl0bGUiLCJoNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDeEIsc0JBQ0ksOERBQUMsYUFBRDtBQUFlLFdBQU8sRUFBRSxtQkFBTTtBQUFDQyxnQkFBVSxDQUFDRCxLQUFLLENBQUNFLE1BQVAsQ0FBVjtBQUF5QixLQUF4RDtBQUFBLDJCQUNJLDhEQUFDLFFBQUQ7QUFBQSxnQkFBV0YsS0FBSyxDQUFDRztBQUFqQjtBQURKLElBREo7QUFLSDs7S0FOUUosVTs7QUFRVCxTQUFTRSxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUN4QixNQUFJO0FBQ0FFLGdEQUFLLENBQUNDLElBQU4sOENBQWlESCxNQUFqRDtBQUNBSSxXQUFPLENBQUNDLEdBQVI7QUFDSCxHQUhELENBR0MsT0FBT0MsR0FBUCxFQUFXO0FBQ1JGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0g7QUFDSjs7QUFFRCxJQUFNQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLE1BQVYsbUJBQW5CO01BQU1GLGE7QUFRTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNHLEVBQVYsb0JBQWQ7TUFBTUQsUTtBQUtTYix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5L3V0aGQuYWYwNmRjY2FiNTMwMjYyMDA2YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gQnV0dG9uSGVscCAocHJvcHMpIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8QnV0dG9uV3JhcHBlciBvbkNsaWNrPXsoKSA9PiB7c2VuZEFjdGlvbihwcm9wcy5hY3Rpb24pfX0+XHJcbiAgICAgICAgICAgIDxCdG5UaXRsZT57cHJvcHMudGl0bGV9PC9CdG5UaXRsZT5cclxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kQWN0aW9uKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2djLnV0aGQuZGV2L2FwaS9tYy9hY3Rpb25zLyR7YWN0aW9ufWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgIH1jYXRjaCAoZXJyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjOEMyQUQ5IDAlLCByZ2JhKDIxLCAyMTAsIDE5OSwgMC44NSkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbmNvbnN0IEJ0blRpdGxlID0gc3R5bGVkLmg1YFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAzMHB4IDIwcHggMjBweCAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uSGVscDsiXSwic291cmNlUm9vdCI6IiJ9