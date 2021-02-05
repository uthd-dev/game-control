exports.ids = [0];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout-components/layout */ "./components/layout-components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Dev\\GitHub\\game-control\\client\\src\\pages\\index.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Canvas, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
          children: "Play along with your favorite streamers"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonWrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: `/auth/twitch/?returnTo=/play?tour=true`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SignUpButton, {
              children: "Sign Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: `/how-it-works`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LearnMoreButton, {
                children: "Learn More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  font-size: 120px;
  text-align: center;
  margin-bottom: 100px;
  color: #ff5953;
  text-shadow: 4px 6px 3px #101824;
  @media only screen and (max-width: 1700px) {
    font-size: 96px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 70px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 55px;
  }
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  float: left;
  width: 75%;

  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;
const Canvas = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: url(/home/gaming-minecraft.webp);
  background-size: cover;

  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  margin-bottom: 100px;
`;
const SignUpButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  background-color: #9146ff;
  height: 60px;
  width: auto;
  padding: 0 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  margin: 0 40px;

  :hover {
    transform: translateY(-5px);
    transition: 300ms;
    box-shadow: 0px 10px 14px 11px rgba(192, 150, 255, 0.38);
  }
  transition: 300ms;

  @media only screen and (max-width: 1000px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 20px;
    margin: 0 15px;
  }
`;
const LearnMoreButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  height: 60px;
  width: auto;
  padding: 0 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px dotted #ff5953;
  border-radius: 5px;
  color: white;
  margin: 0 40px;

  :hover {
    transform: translateY(-5px);
    transition: 300ms;
    background-color: #ff5953;
    box-shadow: 0px 10px 14px 11px rgba(223, 142, 140, 0.3);
  }
  transition: 300ms;

  @media only screen and (max-width: 1000px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 700px) {
    padding: 0 15px;
    margin: 0 15px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiVGl0bGUiLCJzdHlsZWQiLCJoMSIsIldyYXBwZXIiLCJkaXYiLCJDYW52YXMiLCJCdXR0b25XcmFwcGVyIiwiU2lnblVwQnV0dG9uIiwiTGVhcm5Nb3JlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLHNCQUNFLHFFQUFDLDRFQUFEO0FBQUEsMkJBQ0UscUVBQUMsTUFBRDtBQUFBLDZCQUNFLHFFQUFDLE9BQUQ7QUFBQSxnQ0FDRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsYUFBRDtBQUFBLGtDQUNFO0FBQUcsZ0JBQUksRUFBRyx3Q0FBVjtBQUFBLG1DQUNFLHFFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFHLGVBQWI7QUFBQSxtQ0FDRTtBQUFBLHFDQUNFLHFFQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7QUFFRCxNQUFNQyxLQUFLLEdBQUdDLHdEQUFNLENBQUNDLEVBQUc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZkE7QUFpQkEsTUFBTUMsT0FBTyxHQUFHRix3REFBTSxDQUFDRyxHQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBYkE7QUFlQSxNQUFNQyxNQUFNLEdBQUdKLHdEQUFNLENBQUNHLEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJBO0FBVUEsTUFBTUUsYUFBYSxHQUFHTCx3REFBTSxDQUFDRyxHQUFJO0FBQ2pDO0FBQ0E7QUFDQSxDQUhBO0FBS0EsTUFBTUcsWUFBWSxHQUFHTix3REFBTSxDQUFDRyxHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0ExQkE7QUEyQkEsTUFBTUksZUFBZSxHQUFHUCx3REFBTSxDQUFDRyxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E3QkE7QUErQmVMLG1FQUFmLEUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC1jb21wb25lbnRzL2xheW91dFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDYW52YXM+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxUaXRsZT5QbGF5IGFsb25nIHdpdGggeW91ciBmYXZvcml0ZSBzdHJlYW1lcnM8L1RpdGxlPlxuICAgICAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICAgICAgPGEgaHJlZj17YC9hdXRoL3R3aXRjaC8/cmV0dXJuVG89L3BsYXk/dG91cj10cnVlYH0+XG4gICAgICAgICAgICAgIDxTaWduVXBCdXR0b24+U2lnbiBVcDwvU2lnblVwQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ob3ctaXQtd29ya3NgfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPExlYXJuTW9yZUJ1dHRvbj5MZWFybiBNb3JlPC9MZWFybk1vcmVCdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvQ2FudmFzPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAxMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNmZjU5NTM7XG4gIHRleHQtc2hhZG93OiA0cHggNnB4IDNweCAjMTAxODI0O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xuICAgIGZvbnQtc2l6ZTogOTZweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA3NSU7XG5cbiAgcGFkZGluZzogNTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQ2FudmFzID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICBiYWNrZ3JvdW5kOiB1cmwoL2hvbWUvZ2FtaW5nLW1pbmVjcmFmdC53ZWJwKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuYDtcblxuY29uc3QgU2lnblVwQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxNDZmZjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMCA3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMCA0MHB4O1xuXG4gIDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE0cHggMTFweCByZ2JhKDE5MiwgMTUwLCAyNTUsIDAuMzgpO1xuICB9XG4gIHRyYW5zaXRpb246IDMwMG1zO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cbmA7XG5jb25zdCBMZWFybk1vcmVCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAwIDc1cHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYm9yZGVyOiAycHggZG90dGVkICNmZjU5NTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDAgNDBweDtcblxuICA6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1OTUzO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDE0cHggMTFweCByZ2JhKDIyMywgMTQyLCAxNDAsIDAuMyk7XG4gIH1cbiAgdHJhbnNpdGlvbjogMzAwbXM7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=