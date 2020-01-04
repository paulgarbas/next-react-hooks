webpackHotUpdate("static\\development\\pages\\speakers.js",{

/***/ "./src/useAxiosFetch.js":
/*!******************************!*\
  !*** ./src/useAxiosFetch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







var dataFetchReducer = function dataFetchReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
        isLoading: true,
        isError: false
      });

    case "FETCH_SUCCESS":
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
        isLoading: false,
        hasErrored: false,
        errorMessage: "",
        data: action.payload
      });

    case "FETCH_FAILURE":
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
        isLoading: false,
        hasErrored: true,
        errorMessage: "Data Retrieve Failure"
      });

    case "REPLACE_DATA":
      // The record passed (state.data) must have the attribute "id"
      var newData = state.data.map(function (rec) {
        return rec.id === action.replacerecord.id ? action.replacerecord : rec;
      });
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
        isLoading: false,
        hasErrored: false,
        errorMessage: "",
        data: newData
      });

    default:
      throw new Error();
  }
};

var useAxiosFetch = function useAxiosFetch(initialUrl) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialUrl),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 1),
      url = _useState2[0];

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(dataFetchReducer, {
    isLoading: false,
    hasErrored: false,
    errorMessage: "",
    data: []
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var didCancel = false;

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: "FETCH_INIT"
                });
                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url);

              case 4:
                result = _context.sent;

                if (!didCancel) {
                  dispatch({
                    type: "FETCH_SUCCESS",
                    payload: result.data
                  });
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);

                if (!didCancel) {
                  dispatch({
                    type: "FETCH_FAILURE"
                  });
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
    return function () {
      didCancel = true;
    };
  }, [url]);

  var updateDataRecord = function updateDataRecord(record) {
    dispatch({
      type: "REPLACE_DATA",
      replacerecord: record
    });
  };

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
    updateDataRecord: updateDataRecord
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useAxiosFetch);

/***/ })

})
//# sourceMappingURL=speakers.js.6841919335f75aebc4c6.hot-update.js.map