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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! socket.io-client */ "../../node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_11__);



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
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    justify-self: left;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(D_Dev_GitHub_game_control_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 80vw;\n    height: 720px;\n    background-color: gray;\n    margin: 20px;\n"]);

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



function StreamerGameControl(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      userData = _useState[0],
      setUserData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/users").then(function (res) {
      setUserData(res.data.user);

      if (userData.loggedIn == true) {
        document.getElementById("profileImg").src = "".concat(userData.profileImg);
        document.getElementById("profileImg").classList.remove("hidden");
        document.getElementById("si-button").classList.add("hidden");
      }
    })["catch"](function (err) {
      console.log(err);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_streamerSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowTwoWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GameControl, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Enchant Held Item",
            action: "enchant"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Heal Player",
            action: "heal-player"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Item",
            action: "give-item"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHelp__WEBPACK_IMPORTED_MODULE_3__["default"], {
            title: "Give Helpful Potion Effect",
            action: "good-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Give Annoying Potion Effect",
            action: "bad-potion"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Clear Inventory",
            action: "clear-inv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "Summon Mob",
            action: "summon-mob"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttonHurt__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: "etc."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(RowThreeWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "User Info"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Shards:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this), "   Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Leaderboard, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            children: "Leaderboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
              children: "Top Player: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, this), "Loading..."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(StreamerGameControl, "LXAOzhxTy9nW1apql5Pcq7dSgFA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheS91dGhkLmpzIl0sIm5hbWVzIjpbIlN0cmVhbWVyR2FtZUNvbnRyb2wiLCJwcm9wcyIsInVzZVN0YXRlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJ1c2VyIiwibG9nZ2VkSW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwicHJvZmlsZUltZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJDb250ZW50V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlJvd09uZVdyYXBwZXIiLCJSb3dUd29XcmFwcGVyIiwiUm93VGhyZWVXcmFwcGVyIiwiVHdpdGNoIiwiR2FtZUNvbnRyb2wiLCJTdGF0cyIsIkxlYWRlcmJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUFFQSxTQUFTQSxtQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFBQTs7QUFBQSxrQkFDREMsdURBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUMxQkMsUUFEMEI7QUFBQSxNQUNoQkMsV0FEZ0I7O0FBRWpDQywwREFBUyxDQUFDLFlBQU07QUFDWkMsZ0RBQUssQ0FBQ0MsR0FBTixlQUNDQyxJQURELENBQ00sVUFBQUMsR0FBRyxFQUFJO0FBQ1RMLGlCQUFXLENBQUNLLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxJQUFWLENBQVg7O0FBQ0EsVUFBR1IsUUFBUSxDQUFDUyxRQUFULElBQXFCLElBQXhCLEVBQThCO0FBQzFCQyxnQkFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDQyxHQUF0QyxhQUErQ1osUUFBUSxDQUFDYSxVQUF4RDtBQUNBSCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRyxTQUF0QyxDQUFnREMsTUFBaEQsQ0FBdUQsUUFBdkQ7QUFDQUwsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixFQUFxQ0csU0FBckMsQ0FBK0NFLEdBQS9DLENBQW1ELFFBQW5EO0FBQ0g7QUFDSixLQVJELFdBUVMsVUFBQUMsR0FBRyxFQUFJO0FBQUNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQWlCLEtBUmxDO0FBU0gsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVdBLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0kscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUkscUVBQUMsY0FBRDtBQUFBLDhCQUVJLHFFQUFDLGFBQUQ7QUFBQSwrQkFDSSxxRUFBQyxNQUFEO0FBQUEsaUNBQ0kscUVBQUMsOERBQUQ7QUFDSSxtQkFBTyxFQUFDLE1BRFo7QUFFSSxjQUFFLEVBQUMsTUFGUDtBQUdJLGlCQUFLLE1BSFQ7QUFJSSxpQkFBSyxFQUFDLE1BSlY7QUFLSSxrQkFBTSxFQUFDLE1BTFg7QUFNSSxpQkFBSyxFQUFDO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFjSSxxRUFBQyxhQUFEO0FBQUEsK0JBQ0kscUVBQUMsV0FBRDtBQUFBLGtDQUNJLHFFQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBQyxtQkFBbEI7QUFBc0Msa0JBQU0sRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLGFBQWxCO0FBQWdDLGtCQUFNLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJLHFFQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBQyxXQUFsQjtBQUE4QixrQkFBTSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosZUFJSSxxRUFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUMsNEJBQWxCO0FBQStDLGtCQUFNLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJLHFFQUFDLDhEQUFEO0FBQVksaUJBQUssRUFBQyw2QkFBbEI7QUFBZ0Qsa0JBQU0sRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBTUkscUVBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDLGlCQUFsQjtBQUFvQyxrQkFBTSxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosZUFPSSxxRUFBQyw4REFBRDtBQUFZLGlCQUFLLEVBQUMsWUFBbEI7QUFBK0Isa0JBQU0sRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKLGVBUUkscUVBQUMsOERBQUQ7QUFBWSxpQkFBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBMEJJLHFFQUFDLGVBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxLQUFEO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG9DQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSSxxRUFBQyxXQUFEO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBLG9DQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkNIOztHQTFEUXBCLG1COztLQUFBQSxtQjtBQTREVCxJQUFNdUIsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFwQjtNQUFNRixjO0FBU04sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNQyxhO0FBU04sSUFBTUMsYUFBYSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFuQjtNQUFNRSxhO0FBWU4sSUFBTUMsZUFBZSxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFyQjtNQUFNRyxlO0FBWU4sSUFBTUMsTUFBTSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG9CQUFaO01BQU1JLE07QUFNTixJQUFNQyxXQUFXLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1LLFc7QUFPTixJQUFNQyxLQUFLLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYsb0JBQVg7TUFBTU0sSztBQTRCTixJQUFNQyxXQUFXLEdBQUdSLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCLEMsQ0E2QkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQXhETU8sVztBQTBEU2hDLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BsYXkvdXRoZC5jZDU1YjIyZjI4NTk2ZDk4ODhjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgSW1wb3J0c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQnV0dG9uSGVscCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbkhlbHAnO1xyXG5pbXBvcnQgQnV0dG9uSHVydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbkh1cnQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IFN0cmVhbWVyU2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3N0cmVhbWVyU2lkZWJhcic7XHJcblxyXG4vL1VzZWZ1bCBTdHVmZiBJbXBvcnRzXHJcbmltcG9ydCB7IFR3aXRjaEVtYmVkLCBUd2l0Y2hDaGF0LCBUd2l0Y2hDbGlwLCBUd2l0Y2hQbGF5ZXIgfSBmcm9tICdyZWFjdC10d2l0Y2gtZW1iZWQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qIFNvY2tldC5pbyAqL1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5mdW5jdGlvbiBTdHJlYW1lckdhbWVDb250cm9sIChwcm9wcykge1xyXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS91c2Vyc2ApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc2V0VXNlckRhdGEocmVzLmRhdGEudXNlcik7XHJcbiAgICAgICAgICAgIGlmKHVzZXJEYXRhLmxvZ2dlZEluID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZUltZ1wiKS5zcmMgPSBgJHt1c2VyRGF0YS5wcm9maWxlSW1nfWA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVJbWdcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ktYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge2NvbnNvbGUubG9nKGVycil9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPFN0cmVhbWVyU2lkZWJhcj5cclxuXHJcbiAgICAgICAgICAgIDwvU3RyZWFtZXJTaWRlYmFyPlxyXG4gICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSb3dPbmVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUd2l0Y2hFbWJlZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw9XCJ1dGhkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXRoZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R3aXRjaD5cclxuICAgICAgICAgICAgICAgIDwvUm93T25lV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxSb3dUd29XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHYW1lQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJFbmNoYW50IEhlbGQgSXRlbVwiIGFjdGlvbj1cImVuY2hhbnRcIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiSGVhbCBQbGF5ZXJcIiBhY3Rpb249XCJoZWFsLXBsYXllclwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkhlbHAgdGl0bGU9XCJHaXZlIEl0ZW1cIiBhY3Rpb249XCJnaXZlLWl0ZW1cIj48L0J1dHRvbkhlbHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25IZWxwIHRpdGxlPVwiR2l2ZSBIZWxwZnVsIFBvdGlvbiBFZmZlY3RcIiBhY3Rpb249XCJnb29kLXBvdGlvblwiPjwvQnV0dG9uSGVscD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJHaXZlIEFubm95aW5nIFBvdGlvbiBFZmZlY3RcIiBhY3Rpb249XCJiYWQtcG90aW9uXCI+PC9CdXR0b25IdXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uSHVydCB0aXRsZT1cIkNsZWFyIEludmVudG9yeVwiIGFjdGlvbj1cImNsZWFyLWludlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJTdW1tb24gTW9iXCIgYWN0aW9uPVwic3VtbW9uLW1vYlwiPjwvQnV0dG9uSHVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkh1cnQgdGl0bGU9XCJldGMuXCI+PC9CdXR0b25IdXJ0PiBcclxuICAgICAgICAgICAgICAgICAgICA8L0dhbWVDb250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3dUd29XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFJvd1RocmVlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Vc2VyIEluZm88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+PHNwYW4+U2hhcmRzOjwvc3Bhbj4gICBMb2FkaW5nLi4uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0YXRzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMZWFkZXJib2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkxlYWRlcmJvYXJkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PjxzcGFuPlRvcCBQbGF5ZXI6IDwvc3Bhbj5Mb2FkaW5nLi4uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xlYWRlcmJvYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3dUaHJlZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNzJweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IFJvd09uZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbmA7IFxyXG5jb25zdCBSb3dUd29XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG5gO1xyXG5jb25zdCBSb3dUaHJlZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgVHdpdGNoID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiA3MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbmA7XHJcbmNvbnN0IEdhbWVDb250cm9sID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcclxuYDtcclxuY29uc3QgU3RhdHMgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjRjA1MjRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuYDtcclxuY29uc3QgTGVhZGVyYm9hcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjRjA1MjRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbiAgICBoMyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICAgIGg1IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuYDtcclxuXHJcbi8vUHJvcHMgZ2V0dGluZ1xyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbFBhZ2VTbHVncygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuICAgICAgICBwYXRoc1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IGdldFBhZ2VEYXRhRnJvbVNsdWcocGFyYW1zLnNsdWcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXZhbGlkYXRlOiA1LFxyXG4gICAgICAgIHByb3BzOiB7cGFnZURhdGF9XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFBhZ2VTbHVncyAoKSB7XHJcbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IGdldFBhZ2VzKCk7XHJcbiAgICByZXR1cm4gcGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogcGFnZS5zbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmVhbWVyR2FtZUNvbnRyb2w7Il0sInNvdXJjZVJvb3QiOiIifQ==