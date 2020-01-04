webpackHotUpdate("static\\development\\pages\\emailvalidating.js",{

/***/ "./src/useEmailValidation.js":
/*!***********************************!*\
  !*** ./src/useEmailValidation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useEmailVaidation = function useEmailVaidation(secondsFormValidFor) {
  var validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      emailValid = _useState2[0],
      setEmailValid = _useState2[1];

  var reducer = function reducer(state, action) {
    state = action;
    setEmailValid(validateEmail(state));
    return action;
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, ""),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      email = _useReducer2[0],
      setEmail = _useReducer2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(secondsFormValidFor),
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
//# sourceMappingURL=emailvalidating.js.e43b5286e512f62162f8.hot-update.js.map