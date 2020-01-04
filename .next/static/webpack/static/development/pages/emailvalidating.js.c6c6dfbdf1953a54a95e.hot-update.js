webpackHotUpdate("static\\development\\pages\\emailvalidating.js",{

/***/ "./src/EmailValidatingForm.js":
/*!************************************!*\
  !*** ./src/EmailValidatingForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/site.css */ "./static/site.css");
/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_site_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useEmailValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEmailValidation */ "./src/useEmailValidation.js");
var _jsxFileName = "D:\\Programavimas\\Pluralsight\\next-using-hooks\\src\\EmailValidatingForm.js";





function EmailValidatingForm() {
  var _useEmailValidation = Object(_useEmailValidation__WEBPACK_IMPORTED_MODULE_3__["default"])(10),
      count = _useEmailValidation.count,
      email = _useEmailValidation.email,
      setEmail = _useEmailValidation.setEmail,
      emailValid = _useEmailValidation.emailValid;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    disabled: count <= 0,
    value: email,
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    placeholder: "Enter Email",
    type: "email",
    name: "email",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), "\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !emailValid || count <= 0,
    onClick: function onClick() {
      return alert("button clicked with email ".concat(email));
    },
    className: "btn-lg",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "PRESS ME!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, count > 0 ? "You Have ".concat(count, " Seconds To Enter Your Email") : "Times Up"))));
}

/* harmony default export */ __webpack_exports__["default"] = (EmailValidatingForm);

/***/ }),

/***/ "./src/useInterval.js":
false

})
//# sourceMappingURL=emailvalidating.js.c6c6dfbdf1953a54a95e.hot-update.js.map