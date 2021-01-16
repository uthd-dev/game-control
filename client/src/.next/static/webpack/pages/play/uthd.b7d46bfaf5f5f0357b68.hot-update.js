webpackHotUpdate_N_E("pages/play/uthd",{

/***/ "./pages/play/uthd.js":
/*!****************************!*\
  !*** ./pages/play/uthd.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! D:/Dev/GitHub/game-control/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ButtonHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ButtonHelp */ "./components/ButtonHelp.js");
/* harmony import */ var _components_buttonHurt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/buttonHurt */ "./components/buttonHurt.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_streamerSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/streamerSidebar */ "./components/streamerSidebar.js");
/* harmony import */ var react_twitch_embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-twitch-embed */ "../../node_modules/react-twitch-embed/dist/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);






function _templateObject8() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    min-height: 500px;\n    min-width: 300px;\n\n    box-shadow: 0px 0px 0px 3px #F0524C;\n    border-radius: 8px;\n    background: none;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 25px;\n    h3 {\n        text-align: center;\n        font-size: 36px;\n        margin: 0 auto;\n    }\n    h5 {\n        text-align: center;\n        font-size: 20px;\n        margin: 0 auto;\n        font-weight: 200;\n    }\n    span {\n        font-size: 24px;\n        font-weight: 600;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    min-height: 500px;\n    min-width: 300px;\n\n    box-shadow: 0px 0px 0px 3px #F0524C;\n    border-radius: 8px;\n    background: none;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 25px;\n    h3 {\n        text-align: center;\n        font-size: 36px;\n        margin: 0 auto;\n    }\n    h5 {\n        text-align: center;\n        font-size: 20px;\n        margin: 0 auto;\n        font-weight: 200;\n    }\n    span {\n        font-size: 24px;\n        font-weight: 600;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    justify-self: left;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    width: 80vw;\n    height: 720px;\n    background-color: gray;\n    margin: 20px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    width: 100%;\n    justify-content: center;\n\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -moz-flex;\n    display: -webkit-flex;\n    display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    justify-content: center;\n\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -moz-flex;\n    display: -webkit-flex;\n    display: flex;\n\n    margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    min-height: 800px;\n    width: 80vw;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    overflow: hidden;\n    margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    min-height: calc(100vh - 80px);\n    width: calc(100vw - 72px);\n    margin-left: 72px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//Component Imports




 //Useful Stuff Imports




var userData = {};

function StreamerGameControl(props) {
  updateUserData();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(ContentWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(RowOneWrapper, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Twitch, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_twitch_embed__WEBPACK_IMPORTED_MODULE_9__["TwitchEmbed"], {
            channel: "uthd",
            id: "uthd",
            theme: "dark",
            muted: true,
            height: "100%",
            width: "100%"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(RowTwoWrapper, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ButtonHelp__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Enchant Held Item",
            action: "enchant"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ButtonHelp__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Heal Player",
            action: "heal-player"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ButtonHelp__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Give Item",
            action: "give-item"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ButtonHelp__WEBPACK_IMPORTED_MODULE_5__["default"], {
            title: "Give Helpful Potion Effect",
            action: "good-potion"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Give Annoying Potion Effect",
            action: "bad-potion"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Clear Inventory",
            action: "clear-inv"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Summon Mob",
            action: "summon-mob"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "etc."
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(RowThreeWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
            children: "User Info"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
              children: "Shards:"
            }), "   Loading..."]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(Leaderboard, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h3", {
            children: "Leaderboard"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
              children: "Top Player: "
            }), "Loading..."]
          })]
        })]
      })]
    })]
  });
}

_c = StreamerGameControl;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject());
_c2 = ContentWrapper;
var RowOneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject2());
_c3 = RowOneWrapper;
var RowTwoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject3());
_c4 = RowTwoWrapper;
var RowThreeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject4());
_c5 = RowThreeWrapper;
var Twitch = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject5());
_c6 = Twitch;
var GameControl = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject6());
_c7 = GameControl;
var Stats = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject7());
_c8 = Stats;
var Leaderboard = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject8());
_c9 = Leaderboard;

function updateUserData() {
  return _updateUserData.apply(this, arguments);
} //Props getting

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


function _updateUserData() {
  _updateUserData = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return D_Dev_GitHub_game_control_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('https://gc.uthd.dev/api/users');

          case 3:
            response = _context.sent;
            //waits for axios to complete GET request to /api/users, returns an object "user"
            userData = response.data.user;

            if (userData.loggedIn == true) {
              document.getElementById("profileImg").src = "".concat(userData.profileImg);
              document.getElementById("profileImg").classList.remove("hidden");
              document.getElementById("si-button").classList.add("hidden");
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _updateUserData.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (StreamerGameControl);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "StreamerGameControl");
$RefreshReg$(_c2, "ContentWrapper");
$RefreshReg$(_c3, "RowOneWrapper");
$RefreshReg$(_c4, "RowTwoWrapper");
$RefreshReg$(_c5, "RowThreeWrapper");
$RefreshReg$(_c6, "Twitch");
$RefreshReg$(_c7, "GameControl");
$RefreshReg$(_c8, "Stats");
$RefreshReg$(_c9, "Leaderboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbInVzZXJEYXRhIiwiU3RyZWFtZXJHYW1lQ29udHJvbCIsInByb3BzIiwidXBkYXRlVXNlckRhdGEiLCJDb250ZW50V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlJvd09uZVdyYXBwZXIiLCJSb3dUd29XcmFwcGVyIiwiUm93VGhyZWVXcmFwcGVyIiwiVHdpdGNoIiwiR2FtZUNvbnRyb2wiLCJTdGF0cyIsIkxlYWRlcmJvYXJkIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwibG9nZ2VkSW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwicHJvZmlsZUltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFFBQVEsR0FBRyxFQUFmOztBQUVBLFNBQVNDLG1CQUFULENBQThCQyxLQUE5QixFQUFxQztBQUNqQ0MsZ0JBQWM7QUFDZCxzQkFDSSwrREFBQywwREFBRDtBQUFBLDRCQUNJLDhEQUFDLG1FQUFELEtBREosZUFJSSwrREFBQyxjQUFEO0FBQUEsOEJBRUksOERBQUMsYUFBRDtBQUFBLCtCQUNJLDhEQUFDLE1BQUQ7QUFBQSxpQ0FDSSw4REFBQyw4REFBRDtBQUNJLG1CQUFPLEVBQUMsTUFEWjtBQUVJLGNBQUUsRUFBQyxNQUZQO0FBR0ksaUJBQUssRUFBQyxNQUhWO0FBSUksaUJBQUssTUFKVDtBQUtJLGtCQUFNLEVBQUMsTUFMWDtBQU1JLGlCQUFLLEVBQUM7QUFOVjtB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QkFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDRyxTQUFyQyxDQUErQ0UsR0FBL0MsQ0FBbUQsUUFBbkQ7QUFDSDs7QUFSVDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdRQyxtQkFBTyxDQUFDQyxHQUFSOztBQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUE0Q2UzQixrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wbGF5L3V0aGQuYjdkNDZiZmFmNWY1ZjAzNTdiNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IEltcG9ydHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEJ1dHRvbkhlbHAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b25IZWxwJztcclxuaW1wb3J0IEJ1dHRvbkh1cnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25IdXJ0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBTdHJlYW1lclNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zdHJlYW1lclNpZGViYXInO1xyXG5cclxuLy9Vc2VmdWwgU3R1ZmYgSW1wb3J0c1xyXG5pbXBvcnQgeyBUd2l0Y2hFbWJlZCwgVHdpdGNoQ2hhdCwgVHdpdGNoQ2xpcCwgVHdpdGNoUGxheWVyIH0gZnJvbSAncmVhY3QtdHdpdGNoLWVtYmVkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmxldCB1c2VyRGF0YSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gU3RyZWFtZXJHYW1lQ29udHJvbCAocHJvcHMpIHtcclxuICAgIHVwZGF0ZVVzZXJEYXRhKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTdHJlYW1lclNpZGViYXI+XHJcblxyXG4gICAgICAgICAgICA8L1N0cmVhbWVyU2lkZWJhcj5cclxuICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Um93T25lV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VHdpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHdpdGNoRW1iZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsPVwidXRoZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInV0aGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ud2l0Y2g+XHJcbiAgICAgICAgICAgICAgICA8L1Jvd09uZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93VHdvV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8R2FtZUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiRW5jaGFudCBIZWxkIEl0ZW1cIiBhY3Rpb249XCJlbmNoYW50XCI+PC9CdXR0b25IZWxwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJIZWFsIFBsYXllclwiIGFjdGlvbj1cImhlYWwtcGxheWVyXCI+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSGVscCB0aXRsZT1cIkdpdmUgSXRlbVwiIGFjdGlvbj1cImdpdmUtaXRlbVwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJHaXZlIEhlbHBmdWwgUG90aW9uIEVmZmVjdFwiIGFjdGlvbj1cImdvb2QtcG90aW9uXCI+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIkdpdmUgQW5ub3lpbmcgUG90aW9uIEVmZmVjdFwiIGFjdGlvbj1cImJhZC1wb3Rpb25cIj48L0J1dHRvbkh1cnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IdXJ0IHRpdGxlPVwiQ2xlYXIgSW52ZW50b3J5XCIgYWN0aW9uPVwiY2xlYXItaW52XCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIlN1bW1vbiBNb2JcIiBhY3Rpb249XCJzdW1tb24tbW9iXCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cImV0Yy5cIj48L0J1dHRvbkh1cnQ+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvR2FtZUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvd1R3b1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93VGhyZWVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlVzZXIgSW5mbzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT48c3Bhbj5TaGFyZHM6PC9zcGFuPiAgIExvYWRpbmcuLi48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhdHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPExlYWRlcmJvYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+TGVhZGVyYm9hcmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+PHNwYW4+VG9wIFBsYXllcjogPC9zcGFuPkxvYWRpbmcuLi48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGVhZGVyYm9hcmQ+XHJcbiAgICAgICAgICAgICAgICA8L1Jvd1RocmVlV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA3MnB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgUm93T25lV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxuYDsgXHJcbmNvbnN0IFJvd1R3b1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbmA7XHJcbmNvbnN0IFJvd1RocmVlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBUd2l0Y2ggPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDcyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuYDtcclxuY29uc3QgR2FtZUNvbnRyb2wgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG5gO1xyXG5jb25zdCBTdGF0cyA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNGMDUyNEM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBMZWFkZXJib2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNGMDUyNEM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5gO1xyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyRGF0YSgpIHtcclxuICAgIHRyeXsgLy9SZXRyaWV2ZSBkYXRhIGZyb20gUkVTVCBBUEkgZW5kcG9pbnQsIG9uIHN1Y2Nlc3MsIHVwZGF0ZSB0aGUgcHJvZmlsZSBQaWMgYW5kIFVzZXJEYXRhIG9iamVjdCwgb24gZmFpbHVyZSwgbG9nIHRoZSBlcnJvci5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9nYy51dGhkLmRldi9hcGkvdXNlcnMnKTsgLy93YWl0cyBmb3IgYXhpb3MgdG8gY29tcGxldGUgR0VUIHJlcXVlc3QgdG8gL2FwaS91c2VycywgcmV0dXJucyBhbiBvYmplY3QgXCJ1c2VyXCJcclxuICAgICAgICB1c2VyRGF0YSA9IHJlc3BvbnNlLmRhdGEudXNlcjtcclxuICAgICAgICBpZih1c2VyRGF0YS5sb2dnZWRJbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5zcmMgPSBgJHt1c2VyRGF0YS5wcm9maWxlSW1nfWA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpLWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vUHJvcHMgZ2V0dGluZ1xyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbFBhZ2VTbHVncygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuICAgICAgICBwYXRoc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGdldFBhZ2VEYXRhRnJvbVNsdWcocGFyYW1zLnNsdWcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXZhbGlkYXRlOiA1LFxyXG4gICAgICAgIHByb3BzOiB7cGFnZURhdGF9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFBhZ2VTbHVncyAoKSB7XHJcbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IGdldFBhZ2VzKCk7XHJcbiAgICByZXR1cm4gcGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogcGFnZS5zbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyR2FtZUNvbnRyb2w7Il0sInNvdXJjZVJvb3QiOiIifQ==