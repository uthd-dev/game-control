exports.ids = [10];
exports.modules = {

/***/ "DSsK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TwitchStreamAndChat; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("U8mc");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_twitch_embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("l3Ms");
/* harmony import */ var react_twitch_embed__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_twitch_embed__WEBPACK_IMPORTED_MODULE_2__);



function TwitchStreamAndChat(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_twitch_embed__WEBPACK_IMPORTED_MODULE_2__["TwitchEmbed"], {
    channel: props.channel,
    id: props.id,
    muted: true,
    theme: "dark",
    height: "100%",
    width: "100%"
  });
}

/***/ })

};;