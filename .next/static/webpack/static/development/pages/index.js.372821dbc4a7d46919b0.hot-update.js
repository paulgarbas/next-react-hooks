webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: ConfigContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigContext", function() { return ConfigContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speakers */ "./src/Speakers.js");
var _jsxFileName = "D:\\Programavimas\\Pluralsight\\next-using-hooks\\src\\App.js";



var ConfigContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var pageToShow = function pageToShow(pageName) {
  if (pageName === "Home") return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
  if (pageName === "Speakers") return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Speakers__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Not Found");
};

var configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
  loggedInUserEmail: null
};

var App = function App(_ref) {
  var pageName = _ref.pageName;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConfigContext.Provider, {
    value: configValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, pageToShow(pageName)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.372821dbc4a7d46919b0.hot-update.js.map