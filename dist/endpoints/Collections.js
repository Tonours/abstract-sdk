"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.search");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _queryString = _interopRequireDefault(require("query-string"));

var _Endpoint2 = _interopRequireDefault(require("../endpoints/Endpoint"));

var _helpers = require("../util/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Version 16 returns cached thumbnails
var API_VERSION = 16;

var Collections =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Collections, _Endpoint);

  function Collections() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collections);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collections)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "collections");

    return _this;
  }

  _createClass(Collections, [{
    key: "create",
    value: function create(descriptor, collection) {
      var _this2 = this;

      var requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.configureRequest("create", {
        api: function () {
          var _api = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this2.apiRequest("projects/".concat(descriptor.projectId, "/collections"), {
                      method: "POST",
                      body: collection
                    });

                  case 2:
                    response = _context.sent;
                    return _context.abrupt("return", (0, _helpers.wrap)(response.data, response));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function api() {
            return _api.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "info",
    value: function info(descriptor) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var layersPerCollection = options.layersPerCollection,
          requestOptions = _objectWithoutProperties(options, ["layersPerCollection"]);

      return this.configureRequest("info", {
        api: function () {
          var _api2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var query, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    query = _queryString.default.stringify({
                      layersPerCollection: layersPerCollection
                    });
                    _context2.next = 3;
                    return _this3.apiRequest("projects/".concat(descriptor.projectId, "/collections/").concat(descriptor.collectionId, "?").concat(query), {
                      headers: {
                        "Abstract-Api-Version": requestOptions._version || API_VERSION
                      }
                    });

                  case 3:
                    response = _context2.sent;
                    return _context2.abrupt("return", (0, _helpers.wrap)(response.data.collections[0], response));

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          function api() {
            return _api2.apply(this, arguments);
          }

          return api;
        }(),
        cli: function () {
          var _cli = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this3.cliRequest(["collections", "get", descriptor.collectionId, "--project-id=".concat(descriptor.projectId)]);

                  case 2:
                    response = _context3.sent;
                    return _context3.abrupt("return", (0, _helpers.wrap)(response.data.collections[0], response));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function cli() {
            return _cli.apply(this, arguments);
          }

          return cli;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "list",
    value: function list(descriptor) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var branchStatus = options.branchStatus,
          layersPerCollection = options.layersPerCollection,
          limit = options.limit,
          offset = options.offset,
          search = options.search,
          sortBy = options.sortBy,
          sortDir = options.sortDir,
          userId = options.userId,
          requestOptions = _objectWithoutProperties(options, ["branchStatus", "layersPerCollection", "limit", "offset", "search", "sortBy", "sortDir", "userId"]);

      return this.configureRequest("list", {
        api: function () {
          var _api3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var projectId, sanitizedDescriptor, query, response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    projectId = descriptor.projectId, sanitizedDescriptor = _objectWithoutProperties(descriptor, ["projectId"]);
                    query = _queryString.default.stringify(_objectSpread({}, sanitizedDescriptor, {
                      branchStatus: branchStatus,
                      layersPerCollection: layersPerCollection,
                      limit: limit,
                      offset: offset,
                      search: search,
                      sortBy: sortBy,
                      sortDir: sortDir,
                      userId: userId
                    }));
                    _context4.next = 4;
                    return _this4.apiRequest("projects/".concat(projectId, "/collections?").concat(query), {
                      headers: {
                        "Abstract-Api-Version": requestOptions._version || 26 // 26 includes `branches` as part of the response

                      }
                    });

                  case 4:
                    response = _context4.sent;
                    return _context4.abrupt("return", (0, _helpers.wrap)(response.data.collections, response));

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function api() {
            return _api3.apply(this, arguments);
          }

          return api;
        }(),
        cli: function () {
          var _cli2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var response;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _this4.cliRequest(["collections", "list", descriptor.projectId].concat(_toConsumableArray(descriptor.branchId ? ["--branch-id", descriptor.branchId] : []), _toConsumableArray(layersPerCollection ? ["--layersLimit", String(layersPerCollection)] : [])));

                  case 2:
                    response = _context5.sent;
                    return _context5.abrupt("return", (0, _helpers.wrap)(response.data.collections, response));

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function cli() {
            return _cli2.apply(this, arguments);
          }

          return cli;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "update",
    value: function update(descriptor, collection) {
      var _this5 = this;

      var requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.configureRequest("update", {
        api: function () {
          var _api4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var response;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _this5.apiRequest("projects/".concat(descriptor.projectId, "/collections/").concat(descriptor.collectionId), {
                      method: "PUT",
                      body: collection
                    });

                  case 2:
                    response = _context6.sent;
                    return _context6.abrupt("return", (0, _helpers.wrap)(response.data, response));

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          function api() {
            return _api4.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }]);

  return Collections;
}(_Endpoint2.default);

exports.default = Collections;