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
/* harmony import */ var _components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/play-components/buttonHelp */ "./components/play-components/buttonHelp.js");
/* harmony import */ var _components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/play-components/buttonHurt */ "./components/play-components/buttonHurt.js");
/* harmony import */ var _components_layout_components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout-components/layout */ "./components/layout-components/layout.js");
/* harmony import */ var _components_play_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/play-components/streamerSidebar */ "./components/play-components/streamerSidebar.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "../../node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_twitch_embed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-twitch-embed */ "../../node_modules/react-twitch-embed/dist/index.es.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ "../../node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "D:\\Dev\\GitHub\\game-control\\client\\src\\pages\\play\\uthd.js",
    _this = undefined,
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


var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_10__["io"])("/api/ws/user");
var StreamPlayer = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_twitch_embed__WEBPACK_IMPORTED_MODULE_9__["TwitchEmbed"], {
    channel: "uthd",
    id: "uthd",
    muted: true,
    theme: "dark",
    height: "100%",
    width: "100%"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }, _this);
}, {
  ssr: false
});
_c2 = StreamPlayer;

function StreamerGameControl(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      userData = _useState[0],
      setUserData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(),
      streamerData = _useState2[0],
      setStreamerData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    socket.on("connect", function () {});
    socket.on("update-userData", function (data) {
      setUserData(data);
    });
    socket.on("update-streamerData", function (data) {
      setStreamerData(data);
    });
    socket.emit("get-userData");
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_layout_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      streamerData: streamerData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContentWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowOneWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Twitch, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StreamPlayer, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowTwoWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Enchant Held Item",
            action: "enchant"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Heal Player",
            action: "heal-player"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Give Item",
            action: "give-item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHelp__WEBPACK_IMPORTED_MODULE_2__["default"], {
            title: "Give Good Potion Effect",
            action: "good-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Bad Potion Effect",
            action: "bad-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Clear Inventory",
            action: "clear-inv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Summon Mob",
            action: "summon-mob"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_play_components_buttonHurt__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "etc."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowThreeWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "User Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Shards: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), userData ? userData.stats.shards : "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Leaderboard, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "Leaderboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Top Player: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(StreamerGameControl, "0EWjw8JYosNt6IY8Aax/qgXbeWw=");

_c3 = StreamerGameControl;
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c4 = ContentWrapper;
var RowOneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
_c5 = RowOneWrapper;
var RowTwoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject3());
_c6 = RowTwoWrapper;
var RowThreeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject4());
_c7 = RowThreeWrapper;
var Twitch = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject5());
_c8 = Twitch;
var GameControl = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject6());
_c9 = GameControl;
var Stats = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject7());
_c10 = Stats;
var Leaderboard = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject8()); //Props getting

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

_c11 = Leaderboard;
/* harmony default export */ __webpack_exports__["default"] = (StreamerGameControl);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "StreamPlayer$dynamic");
$RefreshReg$(_c2, "StreamPlayer");
$RefreshReg$(_c3, "StreamerGameControl");
$RefreshReg$(_c4, "ContentWrapper");
$RefreshReg$(_c5, "RowOneWrapper");
$RefreshReg$(_c6, "RowTwoWrapper");
$RefreshReg$(_c7, "RowThreeWrapper");
$RefreshReg$(_c8, "Twitch");
$RefreshReg$(_c9, "GameControl");
$RefreshReg$(_c10, "Stats");
$RefreshReg$(_c11, "Leaderboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwiU3RyZWFtUGxheWVyIiwiZHluYW1pYyIsInNzciIsIlN0cmVhbWVyR2FtZUNvbnRyb2wiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInN0cmVhbWVyRGF0YSIsInNldFN0cmVhbWVyRGF0YSIsInVzZUVmZmVjdCIsIm9uIiwiZGF0YSIsImVtaXQiLCJzdGF0cyIsInNoYXJkcyIsIkNvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiUm93T25lV3JhcHBlciIsIlJvd1R3b1dyYXBwZXIiLCJSb3dUaHJlZVdyYXBwZXIiLCJUd2l0Y2giLCJHYW1lQ29udHJvbCIsIlN0YXRzIiwiTGVhZGVyYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyw0REFBRSxDQUFDLGNBQUQsQ0FBakI7QUFFQSxJQUFJQyxZQUFZLEdBQUdDLG1EQUFPLE1BQ3hCLGNBQU07QUFDSixzQkFDRSxxRUFBQyw4REFBRDtBQUNFLFdBQU8sRUFBQyxNQURWO0FBRUUsTUFBRSxFQUFDLE1BRkw7QUFHRSxTQUFLLE1BSFA7QUFJRSxTQUFLLEVBQUMsTUFKUjtBQUtFLFVBQU0sRUFBQyxNQUxUO0FBTUUsU0FBSyxFQUFDO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FadUIsRUFheEI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0Fid0IsQ0FBMUI7TUFBSUYsWTs7QUFnQkosU0FBU0csbUJBQVQsQ0FB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QkFERixlQUVFO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2Q0Q7O0dBM0RRWixtQjs7TUFBQUEsbUI7QUE2RFQsSUFBTWEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFwQjtNQUFNRixjO0FBU04sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNQyxhO0FBU04sSUFBTUMsYUFBYSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNRSxhO0FBWU4sSUFBTUMsZUFBZSxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFyQjtNQUFNRyxlO0FBWU4sSUFBTUMsTUFBTSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG9CQUFaO01BQU1JLE07QUFTTixJQUFNQyxXQUFXLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1LLFc7QUFRTixJQUFNQyxLQUFLLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYsb0JBQVg7T0FBTU0sSztBQTRCTixJQUFNQyxXQUFXLEdBQUdSLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCLEMsQ0E2QkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztPQXhETU8sVztBQTBEU3RCLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkvdXRoZC4yNWM1OTM2ZmUwYzA0YTBiNjZhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgSW1wb3J0c1xyXG5pbXBvcnQgQnV0dG9uSGVscCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wbGF5LWNvbXBvbmVudHMvYnV0dG9uSGVscFwiO1xyXG5pbXBvcnQgQnV0dG9uSHVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wbGF5LWNvbXBvbmVudHMvYnV0dG9uSHVydFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC1jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgU3RyZWFtZXJTaWRlYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BsYXktY29tcG9uZW50cy9zdHJlYW1lclNpZGViYXJcIjtcclxuXHJcbi8vVXNlZnVsIFN0dWZmIEltcG9ydHNcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFR3aXRjaEVtYmVkIH0gZnJvbSBcInJlYWN0LXR3aXRjaC1lbWJlZFwiO1xyXG5cclxuLyogU29ja2V0LmlvICovXHJcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvYXBpL3dzL3VzZXJcIik7XHJcblxyXG5sZXQgU3RyZWFtUGxheWVyID0gZHluYW1pYyhcclxuICAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VHdpdGNoRW1iZWRcclxuICAgICAgICBjaGFubmVsPVwidXRoZFwiXHJcbiAgICAgICAgaWQ9XCJ1dGhkXCJcclxuICAgICAgICBtdXRlZFxyXG4gICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gU3RyZWFtZXJHYW1lQ29udHJvbChwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc3RyZWFtZXJEYXRhLCBzZXRTdHJlYW1lckRhdGFdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge30pO1xyXG4gICAgc29ja2V0Lm9uKFwidXBkYXRlLXVzZXJEYXRhXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFVzZXJEYXRhKGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oXCJ1cGRhdGUtc3RyZWFtZXJEYXRhXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIHNldFN0cmVhbWVyRGF0YShkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgc29ja2V0LmVtaXQoXCJnZXQtdXNlckRhdGFcIik7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8U3RyZWFtZXJTaWRlYmFyIHN0cmVhbWVyRGF0YT17c3RyZWFtZXJEYXRhfSAvPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPFJvd09uZVdyYXBwZXI+XHJcbiAgICAgICAgICA8VHdpdGNoPlxyXG4gICAgICAgICAgICA8U3RyZWFtUGxheWVyIC8+XHJcbiAgICAgICAgICA8L1R3aXRjaD5cclxuICAgICAgICA8L1Jvd09uZVdyYXBwZXI+XHJcbiAgICAgICAgPFJvd1R3b1dyYXBwZXI+XHJcbiAgICAgICAgICA8R2FtZUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiRW5jaGFudCBIZWxkIEl0ZW1cIiBhY3Rpb249XCJlbmNoYW50XCI+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICA8QnV0dG9uSGVscCB0aXRsZT1cIkhlYWwgUGxheWVyXCIgYWN0aW9uPVwiaGVhbC1wbGF5ZXJcIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiR2l2ZSBJdGVtXCIgYWN0aW9uPVwiZ2l2ZS1pdGVtXCI+PC9CdXR0b25IZWxwPlxyXG4gICAgICAgICAgICA8QnV0dG9uSGVscFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiR2l2ZSBHb29kIFBvdGlvbiBFZmZlY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGlvbj1cImdvb2QtcG90aW9uXCJcclxuICAgICAgICAgICAgPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgPEJ1dHRvbkh1cnRcclxuICAgICAgICAgICAgICB0aXRsZT1cIkdpdmUgQmFkIFBvdGlvbiBFZmZlY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGlvbj1cImJhZC1wb3Rpb25cIlxyXG4gICAgICAgICAgICA+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIkNsZWFyIEludmVudG9yeVwiIGFjdGlvbj1cImNsZWFyLWludlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJTdW1tb24gTW9iXCIgYWN0aW9uPVwic3VtbW9uLW1vYlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJldGMuXCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgPC9HYW1lQ29udHJvbD5cclxuICAgICAgICA8L1Jvd1R3b1dyYXBwZXI+XHJcbiAgICAgICAgPFJvd1RocmVlV3JhcHBlcj5cclxuICAgICAgICAgIDxTdGF0cz5cclxuICAgICAgICAgICAgPGgzPlVzZXIgSW5mbzwvaDM+XHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICA8c3Bhbj5TaGFyZHM6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICB7dXNlckRhdGEgPyB1c2VyRGF0YS5zdGF0cy5zaGFyZHMgOiBgTG9hZGluZy4uLmB9XHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8L1N0YXRzPlxyXG4gICAgICAgICAgPExlYWRlcmJvYXJkPlxyXG4gICAgICAgICAgICA8aDM+TGVhZGVyYm9hcmQ8L2gzPlxyXG4gICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VG9wIFBsYXllcjogPC9zcGFuPkxvYWRpbmcuLi5cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDwvTGVhZGVyYm9hcmQ+XHJcbiAgICAgICAgPC9Sb3dUaHJlZVdyYXBwZXI+XHJcbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNzJweCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBSb3dPbmVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICB3aWR0aDogODB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxuYDtcclxuY29uc3QgUm93VHdvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG5gO1xyXG5jb25zdCBSb3dUaHJlZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBUd2l0Y2ggPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogNjV2dztcclxuICBoZWlnaHQ6IDcyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZjA1MjRjO1xyXG5gO1xyXG5jb25zdCBHYW1lQ29udHJvbCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcclxuICBtYXJnaW46IDAgNTBweDtcclxuYDtcclxuY29uc3QgU3RhdHMgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjZjA1MjRjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIGg1IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuYDtcclxuY29uc3QgTGVhZGVyYm9hcmQgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcblxyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjZjA1MjRjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDI1cHg7XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIGg1IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB9XHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vUHJvcHMgZ2V0dGluZ1xyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbFBhZ2VTbHVncygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuICAgICAgICBwYXRoc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGdldFBhZ2VEYXRhRnJvbVNsdWcocGFyYW1zLnNsdWcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXZhbGlkYXRlOiA1LFxyXG4gICAgICAgIHByb3BzOiB7cGFnZURhdGF9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFBhZ2VTbHVncyAoKSB7XHJcbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IGdldFBhZ2VzKCk7XHJcbiAgICByZXR1cm4gcGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogcGFnZS5zbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyR2FtZUNvbnRyb2w7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=