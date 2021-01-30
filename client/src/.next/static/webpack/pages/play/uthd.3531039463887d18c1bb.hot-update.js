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
      lineNumber: 34,
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
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowTwoWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Enchant Held Item",
            action: "enchant"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Heal Player",
            action: "heal-player"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Item",
            action: "give-item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Helpful Potion Effect",
            action: "good-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Give Annoying Potion Effect",
            action: "bad-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Clear Inventory",
            action: "clear-inv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Summon Mob",
            action: "summon-mob"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "etc."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowThreeWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "User Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Shards: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), userData ? userData.stats.shards : "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Leaderboard, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "Leaderboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Top Player: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this), "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwiU3RyZWFtZXJHYW1lQ29udHJvbCIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwic3RyZWFtZXJEYXRhIiwic2V0U3RyZWFtZXJEYXRhIiwidXNlRWZmZWN0IiwidXNlclNoYXJkc0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0YXRzIiwic2hhcmRzIiwiQ29udGVudFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJSb3dPbmVXcmFwcGVyIiwiUm93VHdvV3JhcHBlciIsIlJvd1RocmVlV3JhcHBlciIsIlR3aXRjaCIsIkdhbWVDb250cm9sIiwiU3RhdHMiLCJMZWFkZXJib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsNERBQUUsQ0FBQyxlQUFELENBQWpCOztBQUVBLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxFQUROO0FBQUEsTUFDM0JDLFFBRDJCO0FBQUEsTUFDakJDLFdBRGlCOztBQUFBLG1CQUVNRixzREFBUSxFQUZkO0FBQUEsTUFFM0JHLFlBRjJCO0FBQUEsTUFFYkMsZUFGYTs7QUFHbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBeEI7QUFDQVosVUFBTSxDQUFD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O0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvREQ7O0dBbkVRaEIsbUI7O0tBQUFBLG1CO0FBcUVULElBQU1pQixjQUFjLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQXBCO01BQU1GLGM7QUFTTixJQUFNRyxhQUFhLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1DLGE7QUFTTixJQUFNQyxhQUFhLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1FLGE7QUFZTixJQUFNQyxlQUFlLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQXJCO01BQU1HLGU7QUFZTixJQUFNQyxNQUFNLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQVo7TUFBTUksTTtBQVNOLElBQU1DLFdBQVcsR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUssVztBQVFOLElBQU1DLEtBQUssR0FBR1AseURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNTSxLO0FBNEJOLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVixvQkFBakIsQyxDQTZCQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BeERNTyxXO0FBMERTMUIsa0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGxheS91dGhkLjM1MzEwMzk0NjM4ODdkMThjMWJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudCBJbXBvcnRzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEJ1dHRvbkhlbHAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uSGVscFwiO1xyXG5pbXBvcnQgQnV0dG9uSHVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b25IdXJ0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBTdHJlYW1lclNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3RyZWFtZXJTaWRlYmFyXCI7XHJcblxyXG4vL1VzZWZ1bCBTdHVmZiBJbXBvcnRzXHJcbmltcG9ydCB7IFR3aXRjaEVtYmVkIH0gZnJvbSBcInJlYWN0LXR3aXRjaC1lbWJlZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKiBTb2NrZXQuaW8gKi9cclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5jb25zdCBzb2NrZXQgPSBpbyhcIi9hcGkvdXNlcnMvd3NcIik7XHJcblxyXG5mdW5jdGlvbiBTdHJlYW1lckdhbWVDb250cm9sKHByb3BzKSB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzdHJlYW1lckRhdGEsIHNldFN0cmVhbWVyRGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdXNlclNoYXJkc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXItc2hhcmRzXCIpO1xyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgY29ubmVjdGlvbiBlc3RhYmxpc2hlZCFgKTtcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKFwidXBkYXRlLXVzZXJEYXRhXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFVzZXJEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oXCJ1cGRhdGUtc3RyZWFtZXJEYXRhXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFN0cmVhbWVyRGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPFN0cmVhbWVyU2lkZWJhciBzdHJlYW1lckRhdGE9e3N0cmVhbWVyRGF0YX0gLz5cclxuICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDxSb3dPbmVXcmFwcGVyPlxyXG4gICAgICAgICAgPFR3aXRjaD5cclxuICAgICAgICAgICAgPFR3aXRjaEVtYmVkXHJcbiAgICAgICAgICAgICAgY2hhbm5lbD1cInV0aGRcIlxyXG4gICAgICAgICAgICAgIGlkPVwidXRoZFwiXHJcbiAgICAgICAgICAgICAgbXV0ZWRcclxuICAgICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1R3aXRjaD5cclxuICAgICAgICA8L1Jvd09uZVdyYXBwZXI+XHJcbiAgICAgICAgPFJvd1R3b1dyYXBwZXI+XHJcbiAgICAgICAgICA8R2FtZUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiRW5jaGFudCBIZWxkIEl0ZW1cIiBhY3Rpb249XCJlbmNoYW50XCI+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICA8QnV0dG9uSGVscCB0aXRsZT1cIkhlYWwgUGxheWVyXCIgYWN0aW9uPVwiaGVhbC1wbGF5ZXJcIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiR2l2ZSBJdGVtXCIgYWN0aW9uPVwiZ2l2ZS1pdGVtXCI+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICA8QnV0dG9uSGVscFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2l2ZSBIZWxwZnVsIFBvdGlvbiBFZmZlY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGlvbj1cImdvb2QtcG90aW9uXCJcclxuICAgICAgICAgICAgPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgPEJ1dHRvbkh1cnRcclxuICAgICAgICAgICAgICB0aXRsZT1cIkdpdmUgQW5ub3lpbmcgUG90aW9uIEVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aW9uPVwiYmFkLXBvdGlvblwiXHJcbiAgICAgICAgICAgID48L0J1dHRvbkh1cnQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25IdXJ0IHRpdGxlPVwiQ2xlYXIgSW52ZW50b3J5XCIgYWN0aW9uPVwiY2xlYXItaW52XCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIlN1bW1vbiBNb2JcIiBhY3Rpb249XCJzdW1tb24tbW9iXCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cImV0Yy5cIj48L0J1dHRvbkh1cnQ+XHJcbiAgICAgICAgICA8L0dhbWVDb250cm9sPlxyXG4gICAgICAgIDwvUm93VHdvV3JhcHBlcj5cclxuICAgICAgICA8Um93VGhyZWVXcmFwcGVyPlxyXG4gICAgICAgICAgPFN0YXRzPlxyXG4gICAgICAgICAgICA8aDM+VXNlciBJbmZvPC9oMz5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNoYXJkczogPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHt1c2VyRGF0YSA/IHVzZXJEYXRhLnN0YXRzLnNoYXJkcyA6IGBMb2FkaW5nLi4uYH1cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDwvU3RhdHM+XHJcbiAgICAgICAgICA8TGVhZGVyYm9hcmQ+XHJcbiAgICAgICAgICAgIDxoMz5MZWFkZXJib2FyZDwvaDM+XHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICA8c3Bhbj5Ub3AgUGxheWVyOiA8L3NwYW4+TG9hZGluZy4uLlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPC9MZWFkZXJib2FyZD5cclxuICAgICAgICA8L1Jvd1RocmVlV3JhcHBlcj5cclxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA3MnB4KTtcclxuICBtYXJnaW4tbGVmdDogNzJweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IFJvd09uZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5jb25zdCBSb3dUd29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBtYXJnaW46IDA7XHJcbmA7XHJcbmNvbnN0IFJvd1RocmVlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IFR3aXRjaCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLXdpZHRoOiA2NXZ3O1xyXG4gIGhlaWdodDogNzIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmMDUyNGM7XHJcbmA7XHJcbmNvbnN0IEdhbWVDb250cm9sID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCA1MHB4O1xyXG5gO1xyXG5jb25zdCBTdGF0cyA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNmMDUyNGM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBMZWFkZXJib2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuXHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNmMDUyNGM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMjVweDtcclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgaDUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy9Qcm9wcyBnZXR0aW5nXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUGFnZVNsdWdzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgICAgIHBhdGhzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGFGcm9tU2x1ZyhwYXJhbXMuc2x1Zyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJldmFsaWRhdGU6IDUsXHJcbiAgICAgICAgcHJvcHM6IHtwYWdlRGF0YX1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGFnZVNsdWdzICgpIHtcclxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKTtcclxuICAgIHJldHVybiBwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBwYWdlLnNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtZXJHYW1lQ29udHJvbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==