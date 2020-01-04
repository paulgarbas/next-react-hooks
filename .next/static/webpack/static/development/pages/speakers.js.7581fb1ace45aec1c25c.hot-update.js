webpackHotUpdate("static\\development\\pages\\speakers.js",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/site.css */ "./static/site.css");
/* harmony import */ var _static_site_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_site_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _useAxiosFetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useAxiosFetch */ "./src/useAxiosFetch.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "D:\\Programavimas\\Pluralsight\\next-using-hooks\\src\\Speakers.js";










var Speakers = function Speakers(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref);

  var _useAxiosFetch = Object(_useAxiosFetch__WEBPACK_IMPORTED_MODULE_11__["default"])("http://localhost:4000/speakers"),
      data = _useAxiosFetch.data,
      isLoading = _useAxiosFetch.isLoading,
      hasErrored = _useAxiosFetch.hasErrored,
      errorMessage = _useAxiosFetch.errorMessage,
      updateDataRecord = _useAxiosFetch.updateDataRecord;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      speakingSaturday = _useState2[0],
      setSpeakingSaturday = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      speakingSunday = _useState4[0],
      setSpeakingSunday = _useState4[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_10__["ConfigContext"]);
  var newSpeakerList = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return data.filter(function (_ref2) {
      var sat = _ref2.sat,
          sun = _ref2.sun;
      return speakingSaturday && sat || speakingSunday && sun;
    }).sort(function (a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }

      if (a.firstName > b.firstName) {
        return 1;
      }

      return 0;
    });
  }, [speakingSaturday, speakingSunday, data]);
  var speakerListFiltered = isLoading ? [] : newSpeakerList;

  if (hasErrored) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, errorMessage, "\xA0");
  }

  var handleChangeSunday = function handleChangeSunday() {
    setSpeakingSunday(!speakingSunday);
  };

  var handleChangeSaturday = function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  };

  var heartFavoriteHandler = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e, speakerRec) {
    e.preventDefault();

    var toggledRec = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, speakerRec, {
      favorite: !speakerRec.favorite
    });

    axios.put("http://localhost:4000/speakers/".concat(speakerRec.id), toggledRec).then(function (response) {
      return updateDataRecord(toggledRec);
    }).catch(function (error) {
      return console.log(error);
    });

    var sessionId = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.attributes["data-sessionid"].value);

    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId: sessionId
    });
  }, []);
  if (isLoading) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Loading...");
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_Header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_Menu__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "btn-toolbar  margintopbottom5 checkbox-bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, context.showSpeakerSpeakingDays === false ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleChangeSaturday,
    checked: speakingSaturday,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), "Saturday Speakers")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleChangeSunday,
    checked: speakingSunday,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), "Sunday Speakers")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "card-deck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, speakerListFiltered.map(function (_ref3) {
    var id = _ref3.id,
        firstName = _ref3.firstName,
        lastName = _ref3.lastName,
        bio = _ref3.bio,
        favorite = _ref3.favorite;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: id,
      id: id,
      favorite: favorite,
      onHeartFavoriteHandler: heartFavoriteHandler,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      sat: sat,
      sun: sun,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ })

})
//# sourceMappingURL=speakers.js.7581fb1ace45aec1c25c.hot-update.js.map