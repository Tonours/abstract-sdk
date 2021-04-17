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

require("core-js/modules/web.url");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _fs = require("fs");

var _errors = require("../errors");

var _helpers = require("../util/helpers");

var _Endpoint2 = _interopRequireDefault(require("../endpoints/Endpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Previews =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Previews, _Endpoint);

  function Previews() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Previews);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Previews)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "previews");

    return _this;
  }

  _createClass(Previews, [{
    key: "info",
    value: function () {
      var _info = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(descriptor) {
        var _this2 = this;

        var requestOptions,
            latestDescriptor,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                requestOptions = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                _context2.next = 3;
                return this.client.descriptors.getLatestDescriptor(descriptor);

              case 3:
                latestDescriptor = _context2.sent;
                return _context2.abrupt("return", this.configureRequest("info", {
                  api: function () {
                    var _api = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.t0 = "";
                              _context.next = 3;
                              return _this2.options.webUrl;

                            case 3:
                              _context.t1 = _context.sent;
                              _context.t2 = _context.t0.concat.call(_context.t0, _context.t1, "/projects/").concat(latestDescriptor.projectId, "/commits/").concat(latestDescriptor.sha, "/files/").concat(latestDescriptor.fileId, "/layers/").concat(latestDescriptor.layerId);
                              return _context.abrupt("return", {
                                webUrl: _context.t2
                              });

                            case 6:
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

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function info(_x) {
        return _info.apply(this, arguments);
      }

      return info;
    }()
  }, {
    key: "raw",
    value: function () {
      var _raw = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(descriptor) {
        var _this3 = this;

        var options,
            disableWrite,
            filename,
            requestOptions,
            latestDescriptor,
            _args4 = arguments;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                disableWrite = options.disableWrite, filename = options.filename, requestOptions = _objectWithoutProperties(options, ["disableWrite", "filename"]);
                _context4.next = 4;
                return this.client.descriptors.getLatestDescriptor(descriptor);

              case 4:
                latestDescriptor = _context4.sent;
                return _context4.abrupt("return", this.configureRequest("raw", {
                  api: function () {
                    var _api2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3() {
                      var previewUrl, arrayBuffer, diskLocation;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return _this3.options.previewUrl;

                            case 2:
                              previewUrl = _context3.sent;
                              _context3.next = 5;
                              return _this3.apiRequest("projects/".concat(latestDescriptor.projectId, "/commits/").concat(latestDescriptor.sha, "/files/").concat(latestDescriptor.fileId, "/layers/").concat(latestDescriptor.layerId), {
                                headers: {
                                  Accept: undefined,
                                  "Content-Type": undefined,
                                  "Abstract-Api-Version": undefined
                                }
                              }, {
                                customHostname: previewUrl,
                                raw: true
                              });

                            case 5:
                              arrayBuffer = _context3.sent;

                              /* istanbul ignore if */
                              if ((0, _helpers.isNodeEnvironment)() && !disableWrite) {
                                diskLocation = filename || "".concat(latestDescriptor.layerId, ".png");

                                _fs.promises.writeFile(diskLocation, Buffer.from(arrayBuffer));
                              }

                              return _context3.abrupt("return", arrayBuffer);

                            case 8:
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
                }));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function raw(_x2) {
        return _raw.apply(this, arguments);
      }

      return raw;
    }()
  }, {
    key: "url",
    value: function () {
      var _url = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(descriptor) {
        var requestOptions,
            buffer,
            _args5 = arguments;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                requestOptions = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};

                if (!(typeof Blob === "undefined")) {
                  _context5.next = 3;
                  break;
                }

                throw new _errors.FileAPIError();

              case 3:
                _context5.next = 5;
                return this.raw(descriptor, _objectSpread({}, requestOptions));

              case 5:
                buffer = _context5.sent;
                return _context5.abrupt("return", URL.createObjectURL(new Blob([new DataView(buffer)], {
                  type: "image/png"
                })));

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function url(_x3) {
        return _url.apply(this, arguments);
      }

      return url;
    }()
  }]);

  return Previews;
}(_Endpoint2.default);

exports.default = Previews;