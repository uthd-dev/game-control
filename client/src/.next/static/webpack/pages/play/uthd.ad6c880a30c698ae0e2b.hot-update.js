webpackHotUpdate_N_E("pages/play/uthd",{

/***/ "./components/buttonHelp.js":
/*!**********************************!*\
  !*** ./components/buttonHelp.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Dev\\GitHub\\game-control\\client\\src\\components\\buttonHelp.js";

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: white;\n    margin: 30px 20px 20px 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 20px;\n    height: 200px;\n    width: 200px;\n    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);\n    border-radius: 8px;\n    border: none;\n    cursor: pointer;\n\n    :hover { \n        box-shadow: 0px 2px 8px 4px rgba(21, 210, 199, 0.25);\n        transform: translateY(-5px);\n        transition: 300ms;\n    }\n    transition: 300ms;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function ButtonHelp(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ButtonWrapper, {
    onClick: function onClick() {
      sendAction(props.action);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(BtnTitle, {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = ButtonHelp;

function sendAction(action) {
  try {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("https://gc.uthd.dev/api/mc/actions/".concat(action));
    console.log("sent ".concat(action));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25IZWxwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkhlbHAiLCJwcm9wcyIsInNlbmRBY3Rpb24iLCJhY3Rpb24iLCJ0aXRsZSIsImF4aW9zIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJCdXR0b25XcmFwcGVyIiwic3R5bGVkIiwiYnV0dG9uIiwiQnRuVGl0bGUiLCJoNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLHNCQUNJLHFFQUFDLGFBQUQ7QUFBZSxXQUFPLEVBQUUsbUJBQU07QUFBQ0MsZ0JBQVUsQ0FBQ0QsS0FBSyxDQUFDRSxNQUFQLENBQVY7QUFBeUIsS0FBeEQ7QUFBQSwyQkFDSSxxRUFBQyxRQUFEO0FBQUEsZ0JBQVdGLEtBQUssQ0FBQ0c7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztLQU5RSixVOztBQVFULFNBQVNFLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQ3hCLE1BQUk7QUFDQUUsZ0RBQUssQ0FBQ0MsSUFBTiw4Q0FBaURILE1BQWpEO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixnQkFBb0JMLE1BQXBCO0FBQ0gsR0FIRCxDQUdDLE9BQU9NLEdBQVAsRUFBVztBQUNSRixXQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNIO0FBQ0o7O0FBRUQsSUFBTUMsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWLG1CQUFuQjtNQUFNRixhO0FBZ0JOLElBQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0csRUFBVixvQkFBZDtNQUFNRCxRO0FBS1NiLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkvdXRoZC5hZDZjODgwYTMwYzY5OGFlMGUyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBCdXR0b25IZWxwIChwcm9wcykge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCdXR0b25XcmFwcGVyIG9uQ2xpY2s9eygpID0+IHtzZW5kQWN0aW9uKHByb3BzLmFjdGlvbil9fT5cclxuICAgICAgICAgICAgPEJ0blRpdGxlPntwcm9wcy50aXRsZX08L0J0blRpdGxlPlxyXG4gICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vZ2MudXRoZC5kZXYvYXBpL21jL2FjdGlvbnMvJHthY3Rpb259YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlbnQgJHthY3Rpb259YCk7XHJcbiAgICB9Y2F0Y2ggKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzhDMkFEOSAwJSwgcmdiYSgyMSwgMjEwLCAxOTksIDAuODUpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIDpob3ZlciB7IFxyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IDRweCByZ2JhKDIxLCAyMTAsIDE5OSwgMC4yNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xyXG4gICAgfVxyXG4gICAgdHJhbnNpdGlvbjogMzAwbXM7XHJcbmA7XHJcbmNvbnN0IEJ0blRpdGxlID0gc3R5bGVkLmg1YFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAzMHB4IDIwcHggMjBweCAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uSGVscDsiXSwic291cmNlUm9vdCI6IiJ9