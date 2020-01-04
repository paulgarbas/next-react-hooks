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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");




var _jsxFileName = "D:\\Programavimas\\Pluralsight\\next-using-hooks\\src\\Speakers.js";










var Speakers = function Speakers(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      speakingSaturday = _useState2[0],
      setSpeakingSaturday = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      speakingSunday = _useState4[0],
      setSpeakingSunday = _useState4[1]; // const [speakerList, setSpeakerList] = useState([]);


  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(_speakersReducer__WEBPACK_IMPORTED_MODULE_12__["default"], []),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      speakerList = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_11__["ConfigContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setIsLoading(true);
    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(function () {
      setIsLoading(false);
      var speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_9__["default"].filter(function (_ref2) {
        var sat = _ref2.sat,
            sun = _ref2.sun;
        return speakingSaturday && sat || speakingSunday && sun;
      }); // setSpeakerList(speakerListServerFilter);

      dispatch({
        type: "setSpeakerList",
        data: speakerListServerFilter
      });
    });
    return function () {
      console.log("cleanup");
    };
  }, []); // [speakingSunday, speakingSaturday]);

  var handleChangeSaturday = function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  };

  var newSpeakerList = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return speakerList.filter(function (_ref3) {
      var sat = _ref3.sat,
          sun = _ref3.sun;
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
  }, [speakingSaturday, speakerList]);
  var speakerListFiltered = isLoading ? [] : newSpeakerList;

  var handleChangeSunday = function handleChangeSunday() {
    setSpeakingSunday(!speakingSunday);
  };

  var heartFavoriteHandler = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e, favoriteValue) {
    e.preventDefault();

    var sessionId = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.attributes["data-sessionid"].value);

    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId: sessionId
    }); // setSpeakerList(
    //   speakerList.map(item => {
    //     if (item.id === sessionId) {
    //       item.favorite = favoriteValue;
    //       return item;
    //     }
    //     return item;
    //   })
    // );
    //console.log("changing session favorte to " + favoriteValue);
  }, []);
  if (isLoading) return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Loading...");
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_Header__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_src_Menu__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "btn-toolbar  margintopbottom5 checkbox-bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, context.showSpeakerSpeakingDays === false ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleChangeSaturday,
    checked: speakingSaturday,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), "Saturday Speakers")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleChangeSunday,
    checked: speakingSunday,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), "Sunday Speakers")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "card-deck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, speakerListFiltered.map(function (_ref4) {
    var id = _ref4.id,
        firstName = _ref4.firstName,
        lastName = _ref4.lastName,
        bio = _ref4.bio,
        favorite = _ref4.favorite;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: id,
      id: id,
      favorite: favorite,
      onHeartFavoriteHandler: heartFavoriteHandler,
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ })

})
//# sourceMappingURL=speakers.js.236ed73fe576aafee4aa.hot-update.js.map