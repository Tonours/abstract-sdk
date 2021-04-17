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

var headers = {
  "Abstract-Api-Version": "19"
};

var Changesets =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Changesets, _Endpoint);

  function Changesets() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Changesets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Changesets)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "changesets");

    return _this;
  }

  _createClass(Changesets, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(descriptor) {
        var _this2 = this;

        var requestOptions,
            latestDescriptor,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                requestOptions = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                _context3.next = 3;
                return this.client.descriptors.getLatestDescriptor(descriptor);

              case 3:
                latestDescriptor = _context3.sent;
                return _context3.abrupt("return", this.configureRequest("commit", {
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
                              return _this2.apiRequest("projects/".concat(latestDescriptor.projectId, "/branches/").concat(latestDescriptor.branchId, "/commits/").concat(latestDescriptor.sha, "/changeset"), {
                                headers: headers
                              });

                            case 2:
                              response = _context.sent;
                              return _context.abrupt("return", (0, _helpers.wrap)(response.changeset, response));

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
                              return _this2.cliRequest(["commits", "changeset", latestDescriptor.sha, "--project-id=".concat(latestDescriptor.projectId)]);

                            case 2:
                              response = _context2.sent;
                              return _context2.abrupt("return", (0, _helpers.wrap)(response.changeset, response));

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
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function commit(_x) {
        return _commit.apply(this, arguments);
      }

      return commit;
    }()
  }, {
    key: "branch",
    value: function branch(descriptor) {
      var _this3 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("branch", {
        api: function () {
          var _api2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this3.apiRequest("projects/".concat(descriptor.projectId, "/branches/").concat(descriptor.branchId, "/changeset"), {
                      headers: headers
                    });

                  case 2:
                    response = _context4.sent;
                    return _context4.abrupt("return", (0, _helpers.wrap)(response.changeset, response));

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          function api() {
            return _api2.apply(this, arguments);
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
                    return _this3.cliRequest(["branches", "changeset", descriptor.branchId, "--project-id=".concat(descriptor.projectId)]);

                  case 2:
                    response = _context5.sent;
                    return _context5.abrupt("return", (0, _helpers.wrap)(response.changeset, response));

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
    key: "project",
    value: function project(descriptor) {
      var _this4 = this;

      var requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.configureRequest("project", {
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
                    return _this4.cliRequest(["projects", "changeset", descriptor.projectId]);

                  case 2:
                    response = _context6.sent;
                    return _context6.abrupt("return", (0, _helpers.wrap)(response.changeset, response));

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
  }]);

  return Changesets;
}(_Endpoint2.default);

exports.default = Changesets;