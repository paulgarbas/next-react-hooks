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
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useInterval */ "./src/useInterval.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/site.css */ "./static/site.css");
/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_site_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useEmailValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useEmailValidation */ "./src/useEmailValidation.js");
var _jsxFileName = "D:\\Programavimas\\Pluralsight\\next-using-hooks\\src\\EmailValidatingForm.js";






function EmailValidatingForm() {
  var _useEmailValidation = Object(_useEmailValidation__WEBPACK_IMPORTED_MODULE_4__["default"])(10),
      count = _useEmailValidation.count,
      email = _useEmailValidation.email,
      setEmail = _useEmailValidation.setEmail,
      emailValid = _useEmailValidation.emailValid;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
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
      lineNumber: 15
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
      lineNumber: 27
    },
    __self: this
  }, "PRESS ME!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, count > 0 ? "You Have ".concat(count, " Seconds To Enter Your Email") : "Times Up"))));
}

/* harmony default export */ __webpack_exports__["default"] = (EmailValidatingForm);

/***/ }),

/***/ "./src/useEmailValidation.js":
/*!***********************************!*\
  !*** ./src/useEmailValidation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");


var useEmailVaidation = function useEmailVaidation(secondsFormValidFor) {
  var validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      emailValid = _useState2[0],
      setEmailValid = _useState2[1];

  var reducer = function reducer(state, action) {
    state = action;
    setEmailValid(validateEmail(state));
    return action;
  };

  var _useReducer = useReducer(reducer, ""),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      email = _useReducer2[0],
      setEmail = _useReducer2[1];

  var _useState3 = useState(secondsFormValidFor),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      count = _useState4[0],
      setCount = _useState4[1];

  useInterval(function () {
    setCount(count - 1);
  }, count > 0 ? 1000 : null);
  return {
    count: count,
    email: email,
    setEmail: setEmail,
    emailValid: emailValid
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useEmailVaidation);

/***/ })

})
//# sourceMappingURL=emailvalidating.js.8575da87a8d7ae100484.hot-update.js.map