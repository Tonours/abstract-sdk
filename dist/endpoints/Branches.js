"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

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

var _invariant = _interopRequireDefault(require("invariant"));

var _queryString = _interopRequireDefault(require("query-string"));

var _Endpoint2 = _interopRequireDefault(require("../endpoints/Endpoint"));

var _helpers = require("../util/helpers");

var _errors = require("../errors");

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

// Version 17 returns policies for branches
var headers = {
  "Abstract-Api-Version": "17"
};

var Branches =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Branches, _Endpoint);

  function Branches() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Branches);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Branches)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "branches");

    return _this;
  }

  _createClass(Branches, [{
    key: "info",
    value: function info(descriptor) {
      var _this2 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("info", {
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
                    return _this2.apiRequest("projects/".concat(descriptor.projectId, "/branches/").concat(descriptor.branchId), {
                      headers: headers
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
        cli: function () {
          var _cli = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.cliRequest(["branches", "get", descriptor.branchId, "--project-id=".concat(descriptor.projectId)]);

                  case 2:
                    response = _context2.sent;
                    return _context2.abrupt("return", (0, _helpers.wrap)(response));

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
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
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var limit = options.limit,
          offset = options.offset,
          filter = options.filter,
          search = options.search,
          requestOptions = _objectWithoutProperties(options, ["limit", "offset", "filter", "search"]);

      return this.configureRequest("list", {
        api: function () {
          var _api2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var queryOptions, response, query;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    queryOptions = {
                      limit: limit,
                      offset: offset,
                      filter: filter,
                      search: search
                    };
                    response = null;

                    if (descriptor && descriptor.userId) {
                      queryOptions = _objectSpread({}, queryOptions, {
                        userId: descriptor.userId
                      });
                    }

                    query = _queryString.default.stringify(queryOptions);

                    if (!(descriptor && descriptor.projectId)) {
                      _context3.next = 10;
                      break;
                    }

                    _context3.next = 7;
                    return _this3.apiRequest("projects/".concat(descriptor.projectId, "/branches/?").concat(query), {
                      headers: headers
                    });

                  case 7:
                    response = _context3.sent;
                    _context3.next = 13;
                    break;

                  case 10:
                    _context3.next = 12;
                    return _this3.apiRequest("branches/?".concat(query), {
                      headers: headers
                    });

                  case 12:
                    response = _context3.sent;

                  case 13:
                    return _context3.abrupt("return", (0, _helpers.wrap)(response.data.branches, response));

                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function api() {
            return _api2.apply(this, arguments);
          }

          return api;
        }(),
        cli: function () {
          var _cli2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var normalizedFilter, response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(!descriptor || descriptor && !descriptor.projectId)) {
                      _context4.next = 2;
                      break;
                    }

                    throw new _errors.BranchSearchCLIError();

                  case 2:
                    normalizedFilter = filter;

                    if (filter === "active") {
                      normalizedFilter = "workedOn";
                    }

                    _context4.next = 6;
                    return _this3.cliRequest(["branches", "list", "--project-id=".concat(descriptor.projectId)].concat(_toConsumableArray(normalizedFilter ? ["--filter", normalizedFilter] : [])));

                  case 6:
                    response = _context4.sent;
                    return _context4.abrupt("return", (0, _helpers.wrap)(response.branches, response));

                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
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
    key: "mergeState",
    value: function mergeState(descriptor) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var parentId = options.parentId,
          requestOptions = _objectWithoutProperties(options, ["parentId"]);

      return this.configureRequest("mergeState", {
        api: function () {
          var _api3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var requestUrl, query, response;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    requestUrl = "projects/".concat(descriptor.projectId, "/branches/").concat(descriptor.branchId, "/merge_state");

                    if (parentId) {
                      query = _queryString.default.stringify({
                        parentId: parentId
                      });
                      requestUrl = "".concat(requestUrl, "?").concat(query);
                    }

                    _context5.next = 4;
                    return _this4.apiRequest(requestUrl, {
                      headers: headers
                    });

                  case 4:
                    response = _context5.sent;
                    return _context5.abrupt("return", (0, _helpers.wrap)(response.data, response));

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function api() {
            return _api3.apply(this, arguments);
          }

          return api;
        }(),
        cli: function () {
          var _cli3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var response;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _this4.cliRequest(["branches", "merge-state", descriptor.branchId, "--project-id=".concat(descriptor.projectId)]);

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

          function cli() {
            return _cli3.apply(this, arguments);
          }

          return cli;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "update",
    value: function update(descriptor, branchInput) {
      var _this5 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var name = branchInput.name,
          description = branchInput.description,
          status = branchInput.status;

      var user = options.user,
          requestOptions = _objectWithoutProperties(options, ["user"]);

      return this.configureRequest("update", {
        api: function () {
          var _api4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var requestUrl, response;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    requestUrl = "projects/".concat(descriptor.projectId, "/branches/").concat(descriptor.branchId);
                    _context7.next = 3;
                    return _this5.apiRequest(requestUrl, {
                      headers: headers,
                      method: "PUT",
                      body: {
                        name: name,
                        description: description,
                        status: status
                      }
                    });

                  case 3:
                    response = _context7.sent;
                    return _context7.abrupt("return", (0, _helpers.wrap)(response.data, response));

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function api() {
            return _api4.apply(this, arguments);
          }

          return api;
        }(),
        cli: function () {
          var _cli4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var args, response;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    (0, _invariant.default)(user, "user option required for cli");
                    args = ["branches", "update", descriptor.branchId, "--project-id=".concat(descriptor.projectId), "--user-id=".concat(user.id), "--user-name=".concat(user.name)];

                    if (name) {
                      args.push("--name=".concat(name));
                    }

                    if (status) {
                      args.push("--status=".concat(status));
                    }

                    if (description) {
                      args.push("--description=".concat(description));
                    }

                    _context8.next = 7;
                    return _this5.cliRequest(args);

                  case 7:
                    response = _context8.sent;
                    return _context8.abrupt("return", (0, _helpers.wrap)(response.data, response));

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          function cli() {
            return _cli4.apply(this, arguments);
          }

          return cli;
        }(),
        requestOptions: requestOptions
      });
    }
  }]);

  return Branches;
}(_Endpoint2.default);

exports.default = Branches;