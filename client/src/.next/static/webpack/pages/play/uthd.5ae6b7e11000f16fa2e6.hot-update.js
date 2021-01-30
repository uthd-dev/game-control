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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/buttonHelp */ "./components/buttonHelp.js");
/* harmony import */ var _components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/buttonHurt */ "./components/buttonHurt.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_streamerSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/streamerSidebar */ "./components/streamerSidebar.js");
/* harmony import */ var react_twitch_embed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-twitch-embed */ "../../node_modules/react-twitch-embed/dist/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ "../../node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "D:\\Dev\\GitHub\\game-control\\client\\src\\pages\\play\\uthd.js",
    _s = $RefreshSig$();

function _templateObject8() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 500px;\n  min-width: 300px;\n\n  box-shadow: 0px 0px 0px 3px #f0524c;\n  border-radius: 8px;\n  background: none;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 25px;\n  h3 {\n    text-align: center;\n    font-size: 36px;\n    margin: 0 auto;\n  }\n  h5 {\n    text-align: center;\n    font-size: 20px;\n    margin: 0 auto;\n    font-weight: 200;\n  }\n  span {\n    font-size: 24px;\n    font-weight: 600;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 500px;\n  min-width: 300px;\n\n  box-shadow: 0px 0px 0px 3px #f0524c;\n  border-radius: 8px;\n  background: none;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 25px;\n  h3 {\n    text-align: center;\n    font-size: 36px;\n    margin: 0 auto;\n  }\n  h5 {\n    text-align: center;\n    font-size: 20px;\n    margin: 0 auto;\n    font-weight: 200;\n  }\n  span {\n    font-size: 24px;\n    font-weight: 600;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  justify-self: left;\n  margin: 0 50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  min-width: 65vw;\n  height: 720px;\n  background-color: gray;\n  margin: 20px;\n  border-radius: 5px;\n  border: 5px solid #f0524c;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  justify-content: center;\n\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  justify-content: center;\n\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex;\n\n  margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 800px;\n  width: 80vw;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow: hidden;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: calc(100vh - 80px);\n  width: calc(100vw - 72px);\n  margin-left: 72px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//Component Imports




 //Useful Stuff Imports




/* Socket.io */


var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_10__["io"])("/api/users/ws");

function StreamerGameControl(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(),
      userData = _useState[0],
      setUserData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(),
      streamerData = _useState2[0],
      setStreamerData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    var userShardsElement = document.getElementById("user-shards");
    socket.on("connect", function () {
      console.log("Socket connection established!");
    });
    socket.on("update-userData", function (data) {
      setUserData(data);
    });
    socket.on("update-streamerData", function (data) {
      setStreamerData(data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      streamerData: streamerData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContentWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowOneWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Twitch, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_twitch_embed__WEBPACK_IMPORTED_MODULE_7__["TwitchEmbed"], {
            channel: "uthd",
            id: "uthd",
            muted: true,
            theme: "dark",
            height: "100%",
            width: "100%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowTwoWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Enchant Held Item",
            action: "enchant"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Heal Player",
            action: "heal-player"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Item",
            action: "give-item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Helpful Potion Effect",
            action: "good-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Give Annoying Potion Effect",
            action: "bad-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Clear Inventory",
            action: "clear-inv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Summon Mob",
            action: "summon-mob"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "etc."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowThreeWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "User Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Shards: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), userData ? userData.stats.shards : "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Leaderboard, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "Leaderboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Top Player: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(StreamerGameControl, "0EWjw8JYosNt6IY8Aax/qgXbeWw=");

_c = StreamerGameControl;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
_c2 = ContentWrapper;
var RowOneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());
_c3 = RowOneWrapper;
var RowTwoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject3());
_c4 = RowTwoWrapper;
var RowThreeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject4());
_c5 = RowThreeWrapper;
var Twitch = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject5());
_c6 = Twitch;
var GameControl = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject6());
_c7 = GameControl;
var Stats = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject7());
_c8 = Stats;
var Leaderboard = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject8()); //Props getting

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

_c9 = Leaderboard;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwiU3RyZWFtZXJHYW1lQ29udHJvbCIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwic3RyZWFtZXJEYXRhIiwic2V0U3RyZWFtZXJEYXRhIiwidXNlRWZmZWN0IiwidXNlclNoYXJkc0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0YXRzIiwic2hhcmRzIiwiQ29udGVudFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJSb3dPbmVXcmFwcGVyIiwiUm93VHdvV3JhcHBlciIsIlJvd1RocmVlV3JhcHBlciIsIlR3aXRjaCIsIkdhbWVDb250cm9sIiwiU3RhdHMiLCJMZWFkZXJib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsNERBQUUsQ0FBQyxlQUFELENBQWpCOztBQUVBLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxFQUROO0FBQUEsTUFDM0JDLFFBRDJCO0FBQUEsTUFDakJDLFdBRGlCOztBQUFBLG1CQUVNRixzREFBUSxFQUZkO0FBQUEsTUFFM0JHLFlBRjJCO0FBQUEsTUFFYkMsZUFGYTs7QUFHbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBeEI7QUFDQVosVUFBTSxDQUFD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O0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvREQ7O0dBbkVRaEIsbUI7O0tBQUFBLG1CO0FBcUVULElBQU1pQixjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO01BQU1GLGM7QUFTTixJQUFNRyxhQUFhLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1DLGE7QUFTTixJQUFNQyxhQUFhLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1FLGE7QUFZTixJQUFNQyxlQUFlLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQXJCO01BQU1HLGU7QUFZTixJQUFNQyxNQUFNLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQVo7TUFBTUksTTtBQVNOLElBQU1DLFdBQVcsR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUssVztBQVFOLElBQU1DLEtBQUssR0FBR1AseURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNTSxLO0FBNEJOLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVixvQkFBakIsQyxDQTZCQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BeERNTyxXO0FBMERTMUIsa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS91dGhkLjVhZTZiN2UxMTAwMGYxNmZhMmU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBJbXBvcnRzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEJ1dHRvbkhlbHAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uSGVscFwiO1xyXG5pbXBvcnQgQnV0dG9uSHVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25IdXJ0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBTdHJlYW1lclNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3RyZWFtZXJTaWRlYmFyXCI7XHJcblxyXG4vL1VzZWZ1bCBTdHVmZiBJbXBvcnRzXHJcbmltcG9ydCB7XHJcbiAgVHdpdGNoRW1iZWRcclxufSBmcm9tIFwicmVhY3QtdHdpdGNoLWVtYmVkXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8qIFNvY2tldC5pbyAqL1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmNvbnN0IHNvY2tldCA9IGlvKFwiL2FwaS91c2Vycy93c1wiKTtcclxuXHJcbmZ1bmN0aW9uIFN0cmVhbWVyR2FtZUNvbnRyb2wocHJvcHMpIHtcclxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3N0cmVhbWVyRGF0YSwgc2V0U3RyZWFtZXJEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB1c2VyU2hhcmRzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1zaGFyZHNcIik7XHJcbiAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYFNvY2tldCBjb25uZWN0aW9uIGVzdGFibGlzaGVkIWApO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oXCJ1cGRhdGUtdXNlckRhdGFcIiwgKGRhdGEpID0+IHtcclxuICAgICAgc2V0VXNlckRhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbihcInVwZGF0ZS1zdHJlYW1lckRhdGFcIiwgKGRhdGEpID0+IHtcclxuICAgICAgc2V0U3RyZWFtZXJEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8U3RyZWFtZXJTaWRlYmFyIHN0cmVhbWVyRGF0YT17c3RyZWFtZXJEYXRhfSAvPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPFJvd09uZVdyYXBwZXI+XHJcbiAgICAgICAgICA8VHdpdGNoPlxyXG4gICAgICAgICAgICA8VHdpdGNoRW1iZWRcclxuICAgICAgICAgICAgICBjaGFubmVsPVwidXRoZFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ1dGhkXCJcclxuICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVHdpdGNoPlxyXG4gICAgICAgIDwvUm93T25lV3JhcHBlcj5cclxuICAgICAgICA8Um93VHdvV3JhcHBlcj5cclxuICAgICAgICAgIDxHYW1lQ29udHJvbD5cclxuICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJFbmNoYW50IEhlbGQgSXRlbVwiIGFjdGlvbj1cImVuY2hhbnRcIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiSGVhbCBQbGF5ZXJcIiBhY3Rpb249XCJoZWFsLXBsYXllclwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJHaXZlIEl0ZW1cIiBhY3Rpb249XCJnaXZlLWl0ZW1cIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJHaXZlIEhlbHBmdWwgUG90aW9uIEVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPVwiZ29vZC1wb3Rpb25cIlxyXG4gICAgICAgICAgICA+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICA8QnV0dG9uSHVydFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2l2ZSBBbm5veWluZyBQb3Rpb24gRWZmZWN0XCJcclxuICAgICAgICAgICAgICBhY3Rpb249XCJiYWQtcG90aW9uXCJcclxuICAgICAgICAgICAgPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJDbGVhciBJbnZlbnRvcnlcIiBhY3Rpb249XCJjbGVhci1pbnZcIj48L0J1dHRvbkh1cnQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25IdXJ0IHRpdGxlPVwiU3VtbW9uIE1vYlwiIGFjdGlvbj1cInN1bW1vbi1tb2JcIj48L0J1dHRvbkh1cnQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25IdXJ0IHRpdGxlPVwiZXRjLlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgIDwvR2FtZUNvbnRyb2w+XHJcbiAgICAgICAgPC9Sb3dUd29XcmFwcGVyPlxyXG4gICAgICAgIDxSb3dUaHJlZVdyYXBwZXI+XHJcbiAgICAgICAgICA8U3RhdHM+XHJcbiAgICAgICAgICAgIDxoMz5Vc2VyIEluZm88L2gzPlxyXG4gICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U2hhcmRzOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAge3VzZXJEYXRhID8gdXNlckRhdGEuc3RhdHMuc2hhcmRzIDogYExvYWRpbmcuLi5gfVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPC9TdGF0cz5cclxuICAgICAgICAgIDxMZWFkZXJib2FyZD5cclxuICAgICAgICAgICAgPGgzPkxlYWRlcmJvYXJkPC9oMz5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlRvcCBQbGF5ZXI6IDwvc3Bhbj5Mb2FkaW5nLi4uXHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8L0xlYWRlcmJvYXJkPlxyXG4gICAgICAgIDwvUm93VGhyZWVXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICB3aWR0aDogY2FsYygxMDB2dyAtIDcycHgpO1xyXG4gIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgUm93T25lV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7XHJcbmA7XHJcbmNvbnN0IFJvd1R3b1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuY29uc3QgUm93VGhyZWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgVHdpdGNoID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDY1dnc7XHJcbiAgaGVpZ2h0OiA3MjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2YwNTI0YztcclxuYDtcclxuY29uc3QgR2FtZUNvbnRyb2wgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIDUwcHg7XHJcbmA7XHJcbmNvbnN0IFN0YXRzID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggI2YwNTI0YztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBoNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IExlYWRlcmJvYXJkID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAzcHggI2YwNTI0YztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBoNSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbmA7XHJcblxyXG4vL1Byb3BzIGdldHRpbmdcclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBnZXRBbGxQYWdlU2x1Z3MoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZycsXHJcbiAgICAgICAgcGF0aHNcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRQYWdlRGF0YUZyb21TbHVnKHBhcmFtcy5zbHVnKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmV2YWxpZGF0ZTogNSxcclxuICAgICAgICBwcm9wczoge3BhZ2VEYXRhfVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxQYWdlU2x1Z3MgKCkge1xyXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCBnZXRQYWdlcygpO1xyXG4gICAgcmV0dXJuIHBhZ2VzLm1hcChwYWdlID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIHNsdWc6IHBhZ2Uuc2x1Z1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJlYW1lckdhbWVDb250cm9sO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9