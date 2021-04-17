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

var Memberships =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Memberships, _Endpoint);

  function Memberships() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Memberships);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Memberships)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "memberships");

    return _this;
  }

  _createClass(Memberships, [{
    key: "info",
    value: function info(descriptor) {
      var _this2 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("info", {
        api: function () {
          var _api = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var url, response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    url = "";

                    if (descriptor.organizationId) {
                      url = "organizations/".concat(descriptor.organizationId, "/memberships/").concat(descriptor.userId);
                    }

                    if (descriptor.projectId) {
                      url = "projects/".concat(descriptor.projectId, "/memberships/").concat(descriptor.userId);
                    }

                    _context.next = 5;
                    return _this2.apiRequest(url);

                  case 5:
                    response = _context.sent;
                    return _context.abrupt("return", (0, _helpers.wrap)(response.data.projectMembership || response.data, response));

                  case 7:
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
    key: "list",
    value: function list(descriptor) {
      var _this3 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("list", {
        api: function () {
          var _api2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var url, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    url = "";

                    if (descriptor.organizationId) {
                      url = "organizations/".concat(descriptor.organizationId, "/memberships");
                    }

                    if (descriptor.projectId) {
                      url = "projects/".concat(descriptor.projectId, "/memberships");
                    }

                    _context2.next = 5;
                    return _this3.apiRequest(url);

                  case 5:
                    response = _context2.sent;
                    return _context2.abrupt("return", (0, _helpers.wrap)(response.data, response));

                  case 7:
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
  }]);

  return Memberships;
}(_Endpoint2.default);

exports.default = Memberships;