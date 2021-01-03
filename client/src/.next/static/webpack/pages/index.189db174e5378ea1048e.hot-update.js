webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    width: 50px;\n    background-color: gray;\n    border-radius: 100%;\n    border: 2px solid #F0524C;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    height: 80px;\n    width: 100%;\n    background-color: #000000;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var userData = {};

function Layout(_ref) {
  var children = _ref.children;
  updateUserData();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(PageWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Header, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(HeaderContentWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(HeaderText, {
          children: "UTHD MC"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(HeaderProfile, {
          id: "profileImg",
          src: ""
        })]
      })
    }), children]
  });
}

_c = Layout;

function updateUserData() {
  return _updateUserData.apply(this, arguments);
}

function _updateUserData() {
  _updateUserData = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/users');

          case 3:
            response = _context.sent;
            //waits for axios to complete GET request to /api/users, returns an object "user"
            userData = response.data.user;
            document.getElementById("profileImg").src = "".concat(userData.profileImg);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            document.getElementById("profileImg").classList.add();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _updateUserData.apply(this, arguments);
}

var Header = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
_c2 = Header;
var PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
_c3 = PageWrapper;
var HeaderText = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject3());
_c4 = HeaderText;
var HeaderProfile = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject4());
_c5 = HeaderProfile;
var HeaderContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
_c6 = HeaderContentWrapper;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Layout");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "PageWrapper");
$RefreshReg$(_c4, "HeaderText");
$RefreshReg$(_c5, "HeaderProfile");
$RefreshReg$(_c6, "HeaderContentWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsidXNlckRhdGEiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVwZGF0ZVVzZXJEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsInByb2ZpbGVJbWciLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwiYWRkIiwiSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiUGFnZVdyYXBwZXIiLCJIZWFkZXJUZXh0IiwiaDEiLCJIZWFkZXJQcm9maWxlIiwiaW1nIiwiSGVhZGVyQ29udGVudFdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBSUEsUUFBUSxHQUFHLEVBQWY7O0FBRUEsU0FBU0MsTUFBVCxPQUE2QjtBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUN6QkMsZ0JBQWM7QUFDZCxzQkFDSSwrREFBQyxXQUFEO0FBQUEsNEJBQ0ksOERBQUMsTUFBRDtBQUFBLDZCQUNJLCtEQUFDLG9CQUFEO0FBQUEsZ0NBQ0ksOERBQUMsVUFBRDtBQUFBO0FBQUEsVUFESixlQUVJLDhEQUFDLGFBQUQ7QUFBZSxZQUFFLEVBQUMsWUFBbEI7QUFBK0IsYUFBRyxFQUFDO0FBQW5DLFVBRko7QUFBQTtBQURKLE1BREosRUFPS0QsUUFQTDtBQUFBLElBREo7QUFXSDs7S0FiUUQsTTs7U0FlTUUsYzs7Ozs7aVJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUUrQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLFlBQVYsQ0FGL0I7O0FBQUE7QUFFY0Msb0JBRmQ7QUFFd0Q7QUFDaEROLG9CQUFRLEdBQUdNLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxJQUF6QjtBQUNBQyxvQkFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDQyxHQUF0QyxhQUErQ1gsUUFBUSxDQUFDWSxVQUF4RDtBQUpSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBT1FDLG1CQUFPLENBQUNDLEdBQVI7QUFDQUwsb0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0ssU0FBdEMsQ0FBZ0RDLEdBQWhEOztBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFZQSxJQUFNQyxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQVo7TUFBTUYsTTtBQVlOLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUMsVztBQUlOLElBQU1DLFVBQVUsR0FBR0gseURBQU0sQ0FBQ0ksRUFBVixvQkFBaEI7TUFBTUQsVTtBQUlOLElBQU1FLGFBQWEsR0FBR0wseURBQU0sQ0FBQ00sR0FBVixvQkFBbkI7TUFBTUQsYTtBQU9OLElBQU1FLG9CQUFvQixHQUFHUCx5REFBTSxDQUFDQyxHQUFWLG9CQUExQjtNQUFNTSxvQjtBQVVTeEIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTg5ZGIxNzRlNTM3OGVhMTA0OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5sZXQgdXNlckRhdGEgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIExheW91dCAoe2NoaWxkcmVufSkge1xyXG4gICAgdXBkYXRlVXNlckRhdGEoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlclRleHQ+VVRIRCBNQzwvSGVhZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyUHJvZmlsZSBpZD1cInByb2ZpbGVJbWdcIiBzcmM9XCJcIj48L0hlYWRlclByb2ZpbGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlckNvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyRGF0YSgpIHtcclxuICAgIHRyeXsgLy9SZXRyaWV2ZSBkYXRhIGZyb20gUkVTVCBBUEkgZW5kcG9pbnQsIG9uIHN1Y2Nlc3MsIHVwZGF0ZSB0aGUgcHJvZmlsZSBQaWMgYW5kIFVzZXJEYXRhIG9iamVjdCwgb24gZmFpbHVyZSwgbG9nIHRoZSBlcnJvci5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2VycycpOyAvL3dhaXRzIGZvciBheGlvcyB0byBjb21wbGV0ZSBHRVQgcmVxdWVzdCB0byAvYXBpL3VzZXJzLCByZXR1cm5zIGFuIG9iamVjdCBcInVzZXJcIlxyXG4gICAgICAgIHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5zcmMgPSBgJHt1c2VyRGF0YS5wcm9maWxlSW1nfWA7XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5jbGFzc0xpc3QuYWRkKClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJUZXh0ID0gc3R5bGVkLmgxYFxyXG5cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclByb2ZpbGUgPSBzdHlsZWQuaW1nYFxyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGMDUyNEM7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXJDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=