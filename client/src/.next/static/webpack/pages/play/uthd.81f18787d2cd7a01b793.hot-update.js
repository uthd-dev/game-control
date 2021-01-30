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
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    min-height: 500px;\n    min-width: 300px;\n\n    box-shadow: 0px 0px 0px 3px #F0524C;\n    border-radius: 8px;\n    background: none;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 25px;\n    h3 {\n        text-align: center;\n        font-size: 36px;\n        margin: 0 auto;\n    }\n    h5 {\n        text-align: center;\n        font-size: 20px;\n        margin: 0 auto;\n        font-weight: 200;\n    }\n    span {\n        font-size: 24px;\n        font-weight: 600;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    min-height: 500px;\n    min-width: 300px;\n\n    box-shadow: 0px 0px 0px 3px #F0524C;\n    border-radius: 8px;\n    background: none;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 25px;\n    h3 {\n        text-align: center;\n        font-size: 36px;\n        margin: 0 auto;\n    }\n    h5 {\n        text-align: center;\n        font-size: 20px;\n        margin: 0 auto;\n        font-weight: 200;\n    }\n    span {\n        font-size: 24px;\n        font-weight: 600;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    justify-self: left;\n    margin: 0  50px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: auto;\n    min-width: 65vw;\n    height: 720px;\n    background-color: gray;\n    margin: 20px;\n    border-radius: 5px;\n    border: 5px solid #F0524C;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    justify-content: center;\n\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -moz-flex;\n    display: -webkit-flex;\n    display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    justify-content: center;\n\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -moz-flex;\n    display: -webkit-flex;\n    display: flex;\n\n    margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    min-height: 800px;\n    width: 80vw;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    overflow: hidden;\n    margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    min-height: calc(100vh - 80px);\n    width: calc(100vw - 72px);\n    margin-left: 72px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//Component Imports




 //Useful Stuff Imports




/* Socket.io */


var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_10__["io"])('/api/users/ws');

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
    socket.on('connect', function () {
      console.log("Socket connection established!");
    });
    socket.on('update-userData', function (data) {
      setUserData(data);
    });
    socket.on('update-streamerData', function (data) {});
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
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
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowTwoWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Enchant Held Item",
            action: "enchant"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Heal Player",
            action: "heal-player"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Item",
            action: "give-item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Helpful Potion Effect",
            action: "good-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Give Annoying Potion Effect",
            action: "bad-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Clear Inventory",
            action: "clear-inv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Summon Mob",
            action: "summon-mob"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "etc."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowThreeWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "User Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Shards: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), userData ? userData.stats.shards : "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Leaderboard, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "Leaderboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Top Player: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this), "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwiU3RyZWFtZXJHYW1lQ29udHJvbCIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwic3RyZWFtZXJEYXRhIiwic2V0U3RyZWFtZXJEYXRhIiwidXNlRWZmZWN0IiwidXNlclNoYXJkc0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0YXRzIiwic2hhcmRzIiwiQ29udGVudFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJSb3dPbmVXcmFwcGVyIiwiUm93VHdvV3JhcHBlciIsIlJvd1RocmVlV3JhcHBlciIsIlR3aXRjaCIsIkdhbWVDb250cm9sIiwiU3RhdHMiLCJMZWFkZXJib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsNERBQUUsQ0FBQyxlQUFELENBQWpCOztBQUlBLFNBQVNDLG1CQUFULENBQThCQyxLQUE5QixFQUFxQztBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxFQURQO0FBQUEsTUFDMUJDLFFBRDBCO0FBQUEsTUFDaEJDLFdBRGdCOztBQUFBLG1CQUVPRixzREFBUSxFQUZmO0FBQUEsTUFFMUJHLFlBRjBCO0FBQUEsTUFFWkMsZUFGWTs7QUFHakNDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBeEI7QUFDQVosVUFBTSxDQUFDYSxFQUFQLENBQVUsU0FBVixFQUFxQixZQUFNO0FBQ3ZCQyxhQUFPLENBQUNDLEdBQVI7QUFDSCxLQUZEO0FBR0FmLFVBQU0sQ0FBQ2EsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFVBQUFHLElBQUksRUFBSTtBQUNqQ1YsaUJBQVcsQ0FBQ1UsSUFBRCxDQUFYO0FBQ0gsS0FGRDtBQUdBaEIsVUFBTSxDQUFDYSxFQUFQLENBQVUscUJBQVYsRUFBaUMsVUFBQUcsSUFBSSxFQUFJLENBQUUsQ0FBM0M7QUFDSCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBVUEsc0JBQ0kscUVBQUMsMERBQUQ7QUFBQSw0QkFDSSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSxxRUFBQyxjQUFEO0FBQUEsOEJBRUkscUVBQUMsYUFBRDtBQUFBLCtCQUNJLHFFQUFDLE1BQUQ7QUFBQSxpQ0FDSSxxRUFBQyw4REFBRDtBQUNJLG1CQUFPLEVBQUMsTUFEWjtBQUVJLGNBQUUsRUFBQyxNQUZQO0FBR0ksaUJBQUssTUFIVDtBQUlJLGlCQUFLLEVBQUMsTUFKVjtBQUtJLGtCQUFNLEVBQUMsTUFMWDtBQU1JLGlCQUFLLEVBQUM7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQWNJLHFFQUFDLGFBQUQ7QUFBQSwrQkFDSSxxRUFBQyxXQUFEO0FBQUEsa0NBQ0kscUVBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLG1CQUFsQjtBQUFzQyxrQkFBTSxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSxxRUFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUMsYUFBbEI7QUFBZ0Msa0JBQU0sRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBR0kscUVBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLFdBQWxCO0FBQThCLGtCQUFNLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJLHFFQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBQyw0QkFBbEI7QUFBK0Msa0JBQU0sRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBS0kscUVBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLDZCQUFsQjtBQUFnRCxrQkFBTSxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSSxxRUFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUMsaUJBQWxCO0FBQW9DLGtCQUFNLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSixlQU9JLHFFQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBQyxZQUFsQjtBQUErQixrQkFBTSxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFRSSxxRUFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosZUEwQkkscUVBQUMsZUFBRDtBQUFBLGdDQUNJLHFFQUFDLEtBQUQ7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUEsb0NBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUosRUFBMEJYLFFBQVEsR0FBR0EsUUFBUSxDQUFDWSxLQUFULENBQWVDLE1BQWxCLGVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSSxxRUFBQyxXQUFEO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG9DQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkNIOztHQTFEUWhCLG1COztLQUFBQSxtQjtBQTREVCxJQUFNaUIsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFwQjtNQUFNRixjO0FBU04sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNQyxhO0FBU04sSUFBTUMsYUFBYSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNRSxhO0FBWU4sSUFBTUMsZUFBZSxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFyQjtNQUFNRyxlO0FBWU4sSUFBTUMsTUFBTSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG9CQUFaO01BQU1JLE07QUFTTixJQUFNQyxXQUFXLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1LLFc7QUFRTixJQUFNQyxLQUFLLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYsb0JBQVg7TUFBTU0sSztBQTRCTixJQUFNQyxXQUFXLEdBQUdSLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCLEMsQ0E2QkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQXhETU8sVztBQTBEUzFCLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkvdXRoZC44MWYxODc4N2QyY2Q3YTAxYjc5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgSW1wb3J0c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQnV0dG9uSGVscCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbkhlbHAnO1xyXG5pbXBvcnQgQnV0dG9uSHVydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbkh1cnQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IFN0cmVhbWVyU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0cmVhbWVyU2lkZWJhcic7XHJcblxyXG4vL1VzZWZ1bCBTdHVmZiBJbXBvcnRzXHJcbmltcG9ydCB7IFR3aXRjaEVtYmVkLCBUd2l0Y2hDaGF0LCBUd2l0Y2hDbGlwLCBUd2l0Y2hQbGF5ZXIgfSBmcm9tICdyZWFjdC10d2l0Y2gtZW1iZWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qIFNvY2tldC5pbyAqL1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmNvbnN0IHNvY2tldCA9IGlvKCcvYXBpL3VzZXJzL3dzJyk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFN0cmVhbWVyR2FtZUNvbnRyb2wgKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc3RyZWFtZXJEYXRhLCBzZXRTdHJlYW1lckRhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHVzZXJTaGFyZHNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyLXNoYXJkc1wiKTtcclxuICAgICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb2NrZXQgY29ubmVjdGlvbiBlc3RhYmxpc2hlZCFgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oJ3VwZGF0ZS11c2VyRGF0YScsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyRGF0YShkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQub24oJ3VwZGF0ZS1zdHJlYW1lckRhdGEnLCBkYXRhID0+IHt9KVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8U3RyZWFtZXJTaWRlYmFyID5cclxuXHJcbiAgICAgICAgICAgIDwvU3RyZWFtZXJTaWRlYmFyPlxyXG4gICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSb3dPbmVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0Y2hFbWJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ1dGhkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXRoZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R3aXRjaD5cclxuICAgICAgICAgICAgICAgIDwvUm93T25lV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxSb3dUd29XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJFbmNoYW50IEhlbGQgSXRlbVwiIGFjdGlvbj1cImVuY2hhbnRcIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiSGVhbCBQbGF5ZXJcIiBhY3Rpb249XCJoZWFsLXBsYXllclwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJHaXZlIEl0ZW1cIiBhY3Rpb249XCJnaXZlLWl0ZW1cIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiR2l2ZSBIZWxwZnVsIFBvdGlvbiBFZmZlY3RcIiBhY3Rpb249XCJnb29kLXBvdGlvblwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJHaXZlIEFubm95aW5nIFBvdGlvbiBFZmZlY3RcIiBhY3Rpb249XCJiYWQtcG90aW9uXCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIkNsZWFyIEludmVudG9yeVwiIGFjdGlvbj1cImNsZWFyLWludlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJTdW1tb24gTW9iXCIgYWN0aW9uPVwic3VtbW9uLW1vYlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJldGMuXCI+PC9CdXR0b25IdXJ0PiBcclxuICAgICAgICAgICAgICAgICAgICA8L0dhbWVDb250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3dUd29XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvd1RocmVlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Vc2VyIEluZm88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+PHNwYW4+U2hhcmRzOiA8L3NwYW4+e3VzZXJEYXRhID8gdXNlckRhdGEuc3RhdHMuc2hhcmRzIDogYExvYWRpbmcuLi5gfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGF0cz5cclxuICAgICAgICAgICAgICAgICAgICA8TGVhZGVyYm9hcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5MZWFkZXJib2FyZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT48c3Bhbj5Ub3AgUGxheWVyOiA8L3NwYW4+TG9hZGluZy4uLjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MZWFkZXJib2FyZD5cclxuICAgICAgICAgICAgICAgIDwvUm93VGhyZWVXcmFwcGVyPlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDcycHgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBSb3dPbmVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5gOyBcclxuY29uc3QgUm93VHdvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxuYDtcclxuY29uc3QgUm93VGhyZWVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IFR3aXRjaCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogNjV2dztcclxuICAgIGhlaWdodDogNzIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0YwNTI0QztcclxuYDtcclxuY29uc3QgR2FtZUNvbnRyb2wgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwICA1MHB4O1xyXG5gO1xyXG5jb25zdCBTdGF0cyA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNGMDUyNEM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBMZWFkZXJib2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNGMDUyNEM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGgzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuLy9Qcm9wcyBnZXR0aW5nXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzID0gYXdhaXQgZ2V0QWxsUGFnZVNsdWdzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgICAgIHBhdGhzXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0UGFnZURhdGFGcm9tU2x1ZyhwYXJhbXMuc2x1Zyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJldmFsaWRhdGU6IDUsXHJcbiAgICAgICAgcHJvcHM6IHtwYWdlRGF0YX1cclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGFnZVNsdWdzICgpIHtcclxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKTtcclxuICAgIHJldHVybiBwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBzbHVnOiBwYWdlLnNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtZXJHYW1lQ29udHJvbDsiXSwic291cmNlUm9vdCI6IiJ9