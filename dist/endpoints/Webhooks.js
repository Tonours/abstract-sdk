"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _jsSha = _interopRequireDefault(require("js-sha256"));

var _Endpoint2 = _interopRequireDefault(require("../endpoints/Endpoint"));

var _helpers = require("../util/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Users =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Users, _Endpoint);

  function Users() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Users)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "webhooks");

    return _this;
  }

  _createClass(Users, [{
    key: "list",
    value: function list(descriptor) {
      var _this2 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("list", {
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
                    return _this2.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks"));

                  case 2:
                    response = _context.sent;
                    return _context.abrupt("return", (0, _helpers.wrap)(response));

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

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("info", {
        api: function () {
          var _api2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this3.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/").concat(descriptor.webhookId));

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

          function api() {
            return _api2.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "events",
    value: function events(descriptor) {
      var _this4 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("events", {
        api: function () {
          var _api3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _this4.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/events"));

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
            return _api3.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "create",
    value: function create(descriptor, webhook) {
      var _this5 = this;

      var requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.configureRequest("create", {
        api: function () {
          var _api4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this5.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/subscribe"), {
                      method: "POST",
                      body: {
                        subscription: webhook
                      }
                    });

                  case 2:
                    response = _context4.sent;
                    return _context4.abrupt("return", (0, _helpers.wrap)(response));

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function api() {
            return _api4.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "update",
    value: function update(descriptor, webhook) {
      var _this6 = this;

      var requestOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.configureRequest("update", {
        api: function () {
          var _api5 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var response;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _this6.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/subscribe"), {
                      method: "POST",
                      body: {
                        subscription: webhook
                      }
                    });

                  case 2:
                    response = _context5.sent;
                    return _context5.abrupt("return", (0, _helpers.wrap)(response));

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));

          function api() {
            return _api5.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "delete",
    value: function _delete(descriptor) {
      var _this7 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("delete", {
        api: function api() {
          return _this7.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/").concat(descriptor.webhookId, "/unsubscribe"), {
            method: "DELETE"
          });
        },
        requestOptions: requestOptions
      });
    }
  }, {
    key: "ping",
    value: function ping(descriptor) {
      var _this8 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("ping", {
        api: function api() {
          return _this8.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/").concat(descriptor.webhookId, "/ping"), {
            method: "POST"
          });
        },
        requestOptions: requestOptions
      });
    }
  }, {
    key: "deliveries",
    value: function deliveries(descriptor) {
      var _this9 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("deliveries", {
        api: function () {
          var _api6 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var response;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return _this9.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/").concat(descriptor.webhookId, "/deliveries"));

                  case 2:
                    response = _context6.sent;
                    return _context6.abrupt("return", (0, _helpers.wrap)(response));

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          function api() {
            return _api6.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }, {
    key: "redeliver",
    value: function redeliver(descriptor) {
      var _this10 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("redeliver", {
        api: function api() {
          return _this10.apiRequest("organizations/".concat(descriptor.organizationId, "/webhooks/").concat(descriptor.webhookId, "/deliveries/").concat(descriptor.deliveryId, "/redeliver"), {
            method: "POST"
          });
        },
        requestOptions: requestOptions
      });
    }
  }, {
    key: "verify",
    value: function verify(payload, expectedSignature, signingKey) {
      var requestOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return this.configureRequest("verify", {
        api: function () {
          var _api7 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var signature;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    signature = _jsSha.default.hmac(signingKey, JSON.stringify(payload));
                    return _context7.abrupt("return", signature === expectedSignature);

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));

          function api() {
            return _api7.apply(this, arguments);
          }

          return api;
        }(),
        requestOptions: requestOptions
      });
    }
  }]);

  return Users;
}(_Endpoint2.default);

exports.default = Users;