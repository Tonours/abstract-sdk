"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _fs = require("fs");

var _queryString = _interopRequireDefault(require("query-string"));

var _helpers = require("../util/helpers");

var _Endpoint2 = _interopRequireDefault(require("../endpoints/Endpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Assets =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Assets, _Endpoint);

  function Assets() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Assets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Assets)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "assets");

    return _this;
  }

  _createClass(Assets, [{
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
                    return _this2.apiRequest("projects/".concat(descriptor.projectId, "/assets/").concat(descriptor.assetId));

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
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(descriptor) {
        var _this3 = this;

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
                    var _api2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2() {
                      var query, response;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              query = _queryString.default.stringify({
                                sha: latestDescriptor.sha
                              });
                              _context2.next = 3;
                              return _this3.apiRequest("projects/".concat(latestDescriptor.projectId, "/assets?").concat(query));

                            case 3:
                              response = _context2.sent;
                              return _context2.abrupt("return", (0, _helpers.wrap)(response.data.assets, response));

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
    key: "file",
    value: function file(descriptor) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var limit = options.limit,
          offset = options.offset,
          requestOptions = _objectWithoutProperties(options, ["limit", "offset"]);

      return this.createCursor("file", function () {
        var nextOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : offset;
        return {
          api: function api() {
            var query = _queryString.default.stringify({
              sha: descriptor.sha,
              limit: limit,
              offset: nextOffset
            });

            return _this4.apiRequest("projects/".concat(descriptor.projectId, "/branches/").concat(descriptor.branchId, "/files/").concat(descriptor.fileId, "/assets?").concat(query));
          },
          requestOptions: requestOptions
        };
      }, function (response) {
        return (0, _helpers.wrap)(response.data, response);
      });
    }
  }, {
    key: "raw",
    value: function raw(descriptor) {
      var _this5 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var disableWrite = options.disableWrite,
          filename = options.filename,
          requestOptions = _objectWithoutProperties(options, ["disableWrite", "filename"]);

      return this.configureRequest("raw", {
        api: function () {
          var _api3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var asset, assetUrl, assetPath, arrayBuffer, diskLocation;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this5.info(descriptor);

                  case 2:
                    asset = _context4.sent;
                    _context4.next = 5;
                    return _this5.options.objectUrl;

                  case 5:
                    assetUrl = _context4.sent;
                    assetPath = asset.url.replace(/^\S+:\/\/objects.goabstract.com\//, "");
                    _context4.next = 9;
                    return _this5.apiRequest(assetPath, {
                      headers: {
                        Accept: undefined,
                        "Content-Type": undefined,
                        "Abstract-Api-Version": undefined
                      }
                    }, {
                      customHostname: assetUrl,
                      raw: true
                    });

                  case 9:
                    arrayBuffer = _context4.sent;

                    /* istanbul ignore if */
                    if ((0, _helpers.isNodeEnvironment)() && !disableWrite) {
                      diskLocation = filename || "".concat(asset.layerName, ".").concat(asset.fileFormat);

                      _fs.promises.writeFile(diskLocation, Buffer.from(arrayBuffer));
                    }

                    return _context4.abrupt("return", arrayBuffer);

                  case 12:
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
        requestOptions: requestOptions
      });
    }
  }]);

  return Assets;
}(_Endpoint2.default);

exports.default = Assets;