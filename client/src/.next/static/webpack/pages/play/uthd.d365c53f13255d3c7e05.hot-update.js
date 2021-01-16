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
            action: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbInVzZXJEYXRhIiwiU3RyZWFtZXJHYW1lQ29udHJvbCIsInByb3BzIiwidXBkYXRlVXNlckRhdGEiLCJDb250ZW50V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlJvd09uZVdyYXBwZXIiLCJSb3dUd29XcmFwcGVyIiwiUm93VGhyZWVXcmFwcGVyIiwiVHdpdGNoIiwiR2FtZUNvbnRyb2wiLCJTdGF0cyIsIkxlYWRlcmJvYXJkIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyIiwibG9nZ2VkSW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwicHJvZmlsZUltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFFBQVEsR0FBRyxFQUFmOztBQUVBLFNBQVNDLG1CQUFULENBQThCQyxLQUE5QixFQUFxQztBQUNqQ0MsZ0JBQWM7QUFDZCxzQkFDSSwrREFBQywwREFBRDtBQUFBLDRCQUNJLDhEQUFDLG1FQUFELEtBREosZUFJSSwrREFBQyxjQUFEO0FBQUEsOEJBRUksOERBQUMsYUFBRDtBQUFBLCtCQUNJLDhEQUFDLE1BQUQ7QUFBQSxpQ0FDSSw4REFBQyw4REFBRDtBQUNJLG1CQUFPLEVBQUMsTUFEWjtBQUVJLGNBQUUsRUFBQyxNQUZQO0FBR0ksaUJBQUssRUFBQyxNQUhWO0FBSUksaUJBQUssTUFKVDtBQUtJLGtCQUFNLEVBQUMsTUFMWDtBQU1JLGlCQUFLLEVBQUM7QUFOVjtBQURKO0FBREosUUFGSixlQWNJLDhEQUFDLGFBQUQ7QUFBQSwrQkFDSSwrREFBQyxXQUFEO0FBQUEsa0NBQ0ksOERBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLG1CQUFsQjtBQUFzQyxrQkFBTTtBQUE1QyxZQURKLGVBR0ksOERBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLGFBQWxCO0FBQWdDLGtCQUFNLEVBQUM7QUFBdkMsWUFISixlQUlJLDhEQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBQyxXQUFsQjtBQUE4QixrQkFBTSxFQUFDO0FBQXJDLFlBSkosZUFLSSw4REFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUMsNEJBQWxCO0FBQStDLGtCQUFNLEVBQUM7QUFBdEQsWUFMSixlQU1JLDhEQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBQyw2QkFBbEI7QUFBZ0Qsa0JBQU0sRUFBQztBQUF2RCxZQU5KLGVBT0ksOERBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLGlCQUFsQjtBQUFvQyxrQkFBTSxFQUFDO0FBQTNDLFlBUEosZUFRSSw4REFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUMsWUFBbEI7QUFBK0Isa0JBQU0sRUFBQztBQUF0QyxZQVJKLGVBU0ksOERBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDO0FBQWxCLFlBVEo7QUFBQTtBQURKLFFBZEosZUEyQkksK0RBQUMsZUFBRDtBQUFBLGdDQUNJLCtEQUFDLEtBQUQ7QUFBQSxrQ0FDSTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsb0NBQUk7QUFBQTtBQUFBLGNBQUo7QUFBQSxZQUZKO0FBQUEsVUFESixlQUtJLCtEQUFDLFdBQUQ7QUFBQSxrQ0FDSTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsb0NBQUk7QUFBQTtBQUFBLGNBQUo7QUFBQSxZQUZKO0FBQUEsVUFMSjtBQUFBLFFBM0JKO0FBQUEsTUFKSjtBQUFBLElBREo7QUE4Q0g7O0tBaERRRixtQjtBQWtEVCxJQUFNRyxjQUFjLEdBQUdDLDBEQUFNLENBQUNDLEdBQVYsbUJBQXBCO01BQU1GLGM7QUFTTixJQUFNRyxhQUFhLEdBQUdGLDBEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1DLGE7QUFTTixJQUFNQyxhQUFhLEdBQUdILDBEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1FLGE7QUFZTixJQUFNQyxlQUFlLEdBQUdKLDBEQUFNLENBQUNDLEdBQVYsb0JBQXJCO01BQU1HLGU7QUFZTixJQUFNQyxNQUFNLEdBQUdMLDBEQUFNLENBQUNDLEdBQVYsb0JBQVo7TUFBTUksTTtBQU1OLElBQU1DLFdBQVcsR0FBR04sMERBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUssVztBQU9OLElBQU1DLEtBQUssR0FBR1AsMERBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNTSxLO0FBNEJOLElBQU1DLFdBQVcsR0FBR1IsMERBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTU8sVzs7U0E0QlNWLGM7O0VBZWY7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2lSQTFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRStCVyw2Q0FBSyxDQUFDQyxHQUFOLENBQVUsK0JBQVYsQ0FGL0I7O0FBQUE7QUFFY0Msb0JBRmQ7QUFFMkU7QUFDbkVoQixvQkFBUSxHQUFHZ0IsUUFBUSxDQUFDQyxJQUFULENBQWNDLElBQXpCOztBQUNBLGdCQUFHbEIsUUFBUSxDQUFDbUIsUUFBVCxJQUFxQixJQUF4QixFQUE4QjtBQUMxQkMsc0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsR0FBdEMsYUFBK0N0QixRQUFRLENBQUN1QixVQUF4RDtBQUNBSCxzQkFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRyxTQUF0QyxDQUFnREMsTUFBaEQsQ0FBdUQsUUFBdkQ7QUFDQUwsc0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0csU0FBckMsQ0FBK0NFLEdBQS9DLENBQW1ELFFBQW5EO0FBQ0g7O0FBUlQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFXUUMsbUJBQU8sQ0FBQ0MsR0FBUjs7QUFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBNENlM0Isa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS91dGhkLmQzNjVjNTNmMTMyNTVkM2M3ZTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBJbXBvcnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBCdXR0b25IZWxwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uSGVscCc7XHJcbmltcG9ydCBCdXR0b25IdXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uSHVydCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgU3RyZWFtZXJTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3RyZWFtZXJTaWRlYmFyJztcclxuXHJcbi8vVXNlZnVsIFN0dWZmIEltcG9ydHNcclxuaW1wb3J0IHsgVHdpdGNoRW1iZWQsIFR3aXRjaENoYXQsIFR3aXRjaENsaXAsIFR3aXRjaFBsYXllciB9IGZyb20gJ3JlYWN0LXR3aXRjaC1lbWJlZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5sZXQgdXNlckRhdGEgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIFN0cmVhbWVyR2FtZUNvbnRyb2wgKHByb3BzKSB7XHJcbiAgICB1cGRhdGVVc2VyRGF0YSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTaWRlYmFyPlxyXG5cclxuICAgICAgICAgICAgPC9TdHJlYW1lclNpZGViYXI+XHJcbiAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFJvd09uZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXRjaEVtYmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD1cInV0aGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1dGhkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHdpdGNoPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3dPbmVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvd1R3b1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdhbWVDb250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSGVscCB0aXRsZT1cIkVuY2hhbnQgSGVsZCBJdGVtXCIgYWN0aW9uPjwvQnV0dG9uSGVscD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiSGVhbCBQbGF5ZXJcIiBhY3Rpb249XCJoZWFsLXBsYXllclwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJHaXZlIEl0ZW1cIiBhY3Rpb249XCJnaXZlLWl0ZW1cIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiR2l2ZSBIZWxwZnVsIFBvdGlvbiBFZmZlY3RcIiBhY3Rpb249XCJnb29kLXBvdGlvblwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJHaXZlIEFubm95aW5nIFBvdGlvbiBFZmZlY3RcIiBhY3Rpb249XCJiYWQtcG90aW9uXCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIkNsZWFyIEludmVudG9yeVwiIGFjdGlvbj1cImNsZWFyLWludlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJTdW1tb24gTW9iXCIgYWN0aW9uPVwic3VtbW9uLW1vYlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJldGMuXCI+PC9CdXR0b25IdXJ0PiBcclxuICAgICAgICAgICAgICAgICAgICA8L0dhbWVDb250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3dUd29XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvd1RocmVlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Vc2VyIEluZm88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+PHNwYW4+U2hhcmRzOjwvc3Bhbj4gICBMb2FkaW5nLi4uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YXRzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMZWFkZXJib2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxlYWRlcmJvYXJkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjxzcGFuPlRvcCBQbGF5ZXI6IDwvc3Bhbj5Mb2FkaW5nLi4uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xlYWRlcmJvYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3dUaHJlZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNzJweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IFJvd09uZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbmA7IFxyXG5jb25zdCBSb3dUd29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG5gO1xyXG5jb25zdCBSb3dUaHJlZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgVHdpdGNoID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbmA7XHJcbmNvbnN0IEdhbWVDb250cm9sID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcclxuYDtcclxuY29uc3QgU3RhdHMgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjRjA1MjRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuYDtcclxuY29uc3QgTGVhZGVyYm9hcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjRjA1MjRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuYDtcclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckRhdGEoKSB7XHJcbiAgICB0cnl7IC8vUmV0cmlldmUgZGF0YSBmcm9tIFJFU1QgQVBJIGVuZHBvaW50LCBvbiBzdWNjZXNzLCB1cGRhdGUgdGhlIHByb2ZpbGUgUGljIGFuZCBVc2VyRGF0YSBvYmplY3QsIG9uIGZhaWx1cmUsIGxvZyB0aGUgZXJyb3IuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vZ2MudXRoZC5kZXYvYXBpL3VzZXJzJyk7IC8vd2FpdHMgZm9yIGF4aW9zIHRvIGNvbXBsZXRlIEdFVCByZXF1ZXN0IHRvIC9hcGkvdXNlcnMsIHJldHVybnMgYW4gb2JqZWN0IFwidXNlclwiXHJcbiAgICAgICAgdXNlckRhdGEgPSByZXNwb25zZS5kYXRhLnVzZXI7XHJcbiAgICAgICAgaWYodXNlckRhdGEubG9nZ2VkSW4gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVJbWdcIikuc3JjID0gYCR7dXNlckRhdGEucHJvZmlsZUltZ31gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVJbWdcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL1Byb3BzIGdldHRpbmdcclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBnZXRBbGxQYWdlU2x1Z3MoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbiAgICAgICAgcGF0aHNcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRQYWdlRGF0YUZyb21TbHVnKHBhcmFtcy5zbHVnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmV2YWxpZGF0ZTogNSxcclxuICAgICAgICBwcm9wczoge3BhZ2VEYXRhfVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxQYWdlU2x1Z3MgKCkge1xyXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCBnZXRQYWdlcygpO1xyXG4gICAgcmV0dXJuIHBhZ2VzLm1hcChwYWdlID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHNsdWc6IHBhZ2Uuc2x1Z1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJlYW1lckdhbWVDb250cm9sOyJdLCJzb3VyY2VSb290IjoiIn0=