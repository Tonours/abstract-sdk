"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Comments =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Comments, _Endpoint);

  function Comments() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Comments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Comments)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "comments");

    return _this;
  }

  _createClass(Comments, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(descriptor, comment) {
        var _this2 = this;

        var requestOptions,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                requestOptions = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};

                if (!descriptor.sha) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 4;
                return this.client.descriptors.getLatestDescriptor(descriptor);

              case 4:
                descriptor = _context2.sent;

              case 5:
                return _context2.abrupt("return", this.configureRequest("create", {
                  api: function () {
                    var _api = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                      var body, response;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              body = _objectSpread({}, comment, {}, descriptor, {
                                commitSha: descriptor.sha || undefined
                              });
                              _context.next = 3;
                              return _this2.apiRequest("comments", {
                                method: "POST",
                                body: body
                              });

                            case 3:
                              response = _context.sent;
                              return _context.abrupt("return", (0, _helpers.wrap)(response));

                            case 5:
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
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "info",
    value: function info(descriptor) {
      var _this3 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("info", {
        api: function () {
          var _api2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this3.apiRequest("comments/".concat(descriptor.commentId));

                  case 2:
                    response = _context3.sent;
                    return _context3.abrupt("return", (0, _helpers.wrap)(response));

                  case 4:
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
        requestOptions: requestOptions
      });
    }
  }, {
    key: "list",
    value: function () {
      var _list = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(descriptor) {
        var _this4 = this;

        var options,
            limit,
            offset,
            requestOptions,
            _args4 = arguments;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                limit = options.limit, offset = options.offset, requestOptions = _objectWithoutProperties(options, ["limit", "offset"]);

                if (!descriptor.sha) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 5;
                return this.client.descriptors.getLatestDescriptor(descriptor);

              case 5:
                descriptor = _context4.sent;

              case 6:
                return _context4.abrupt("return", this.createCursor("list", function () {
                  var nextOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : offset;
                  return {
                    api: function api() {
                      var query = _queryString.default.stringify(_objectSpread({}, descriptor, {
                        limit: limit,
                        offset: nextOffset
                      }));

                      return _this4.apiRequest("comments?".concat(query));
                    },
                    requestOptions: requestOptions
                  };
                }, function (response) {
                  return (0, _helpers.wrap)(response.data, response);
                }));

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function list(_x3) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }]);

  return Comments;
}(_Endpoint2.default);

exports.default = Comments;