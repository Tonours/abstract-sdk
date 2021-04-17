"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

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

var EXPORT_STATUS_CHECK_INTERVAL = 2000; // 2 seconds

var MAX_EXPORT_DURATION = 1000 * 60 * 5; // 5 minutes

var Files =
/*#__PURE__*/
function (_Endpoint) {
  _inherits(Files, _Endpoint);

  function Files() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Files);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Files)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "name", "files");

    return _this;
  }

  _createClass(Files, [{
    key: "info",
    value: function () {
      var _info = _asyncToGenerator(
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
                return _context3.abrupt("return", this.configureRequest("info", {
                  api: function () {
                    var _api = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                      var fileId, branchDescriptor, files, file;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              fileId = latestDescriptor.fileId, branchDescriptor = _objectWithoutProperties(latestDescriptor, ["fileId"]);
                              _context.next = 3;
                              return _this2.list(branchDescriptor);

                            case 3:
                              files = _context.sent;
                              file = files.find(function (file) {
                                return file.id === latestDescriptor.fileId;
                              });

                              if (file) {
                                _context.next = 7;
                                break;
                              }

                              throw new _errors.NotFoundError("fileId=".concat(latestDescriptor.fileId));

                            case 7:
                              return _context.abrupt("return", (0, _helpers.wrap)(file));

                            case 8:
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
                              return _this2.cliRequest(["files", "meta", latestDescriptor.fileId, "--project-id=".concat(latestDescriptor.projectId), "--sha=".concat(latestDescriptor.sha)]);

                            case 2:
                              response = _context2.sent;
                              return _context2.abrupt("return", (0, _helpers.wrap)(response.file, response));

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

      function info(_x) {
        return _info.apply(this, arguments);
      }

      return info;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(descriptor) {
        var _this3 = this;

        var requestOptions,
            latestDescriptor,
            _args6 = arguments;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                requestOptions = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
                _context6.next = 3;
                return this.client.descriptors.getLatestDescriptor(descriptor);

              case 3:
                latestDescriptor = _context6.sent;
                return _context6.abrupt("return", this.configureRequest("list", {
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
                              return _this3.apiRequest("projects/".concat(latestDescriptor.projectId, "/branches/").concat(latestDescriptor.branchId, "/commits/").concat(latestDescriptor.sha, "/files"));

                            case 2:
                              response = _context4.sent;
                              return _context4.abrupt("return", (0, _helpers.wrap)(response.files, response));

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
                              return _this3.cliRequest(["files", "list", "--project-id=".concat(latestDescriptor.projectId), "--sha=".concat(latestDescriptor.sha)]);

                            case 2:
                              response = _context5.sent;
                              return _context5.abrupt("return", (0, _helpers.wrap)(response.files, response));

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
                }));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function list(_x2) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "raw",
    value: function () {
      var _raw = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(descriptor) {
        var _this4 = this;

        var options,
            disableWrite,
            filename,
            onProgress,
            requestOptions,
            latestDescriptor,
            _args10 = arguments;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                options = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                disableWrite = options.disableWrite, filename = options.filename, onProgress = options.onProgress, requestOptions = _objectWithoutProperties(options, ["disableWrite", "filename", "onProgress"]);
                _context10.next = 4;
                return this.client.descriptors.getLatestDescriptor(descriptor);

              case 4:
                latestDescriptor = _context10.sent;
                return _context10.abrupt("return", this.configureRequest("raw", {
                  api: function () {
                    var _api3 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee8() {
                      var exportRequest, file, exportJob, checkStatus;
                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              exportRequest = function exportRequest(exportId) {
                                return _this4.apiRequest("projects/".concat(latestDescriptor.projectId, "/branches/").concat(latestDescriptor.branchId, "/files/").concat(latestDescriptor.fileId, "/export"), {
                                  method: "POST",
                                  body: _objectSpread({}, latestDescriptor, {
                                    export_id: exportId
                                  })
                                });
                              };

                              _context8.next = 3;
                              return _this4.info(latestDescriptor);

                            case 3:
                              file = _context8.sent;
                              _context8.next = 6;
                              return exportRequest();

                            case 6:
                              exportJob = _context8.sent;

                              checkStatus =
                              /*#__PURE__*/
                              function () {
                                var _ref = _asyncToGenerator(
                                /*#__PURE__*/
                                regeneratorRuntime.mark(function _callee7(count) {
                                  var fileUrl, filePath, arrayBuffer, diskLocation;
                                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                    while (1) {
                                      switch (_context7.prev = _context7.next) {
                                        case 0:
                                          _context7.next = 2;
                                          return exportRequest(exportJob.id);

                                        case 2:
                                          exportJob = _context7.sent;

                                          if (!(exportJob.status === "complete")) {
                                            _context7.next = 15;
                                            break;
                                          }

                                          _context7.next = 6;
                                          return _this4.options.objectUrl;

                                        case 6:
                                          fileUrl = _context7.sent;
                                          filePath = exportJob.downloadUrl.replace(/^\S+:\/\/objects.goabstract.com\//, "");
                                          _context7.next = 10;
                                          return _this4.apiRequest(filePath, {
                                            headers: {
                                              Accept: undefined,
                                              "Content-Type": undefined
                                            }
                                          }, {
                                            customHostname: fileUrl,
                                            raw: true,
                                            onProgress: onProgress
                                          });

                                        case 10:
                                          arrayBuffer = _context7.sent;

                                          /* istanbul ignore if */
                                          if ((0, _helpers.isNodeEnvironment)() && !disableWrite) {
                                            diskLocation = filename || "".concat(file.name, ".sketch");

                                            _fs.promises.writeFile(diskLocation, Buffer.from(arrayBuffer));
                                          }

                                          return _context7.abrupt("return", arrayBuffer);

                                        case 15:
                                          if (!(count * EXPORT_STATUS_CHECK_INTERVAL >= MAX_EXPORT_DURATION || exportJob.status === "failed")) {
                                            _context7.next = 19;
                                            break;
                                          }

                                          throw new _errors.FileExportError(file.id, exportJob.id);

                                        case 19:
                                          _context7.next = 21;
                                          return new Promise(function (resolve) {
                                            return setTimeout(resolve, EXPORT_STATUS_CHECK_INTERVAL);
                                          });

                                        case 21:
                                          return _context7.abrupt("return", checkStatus(count + 1));

                                        case 22:
                                        case "end":
                                          return _context7.stop();
                                      }
                                    }
                                  }, _callee7);
                                }));

                                return function checkStatus(_x4) {
                                  return _ref.apply(this, arguments);
                                };
                              }();

                              return _context8.abrupt("return", checkStatus(0));

                            case 9:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8);
                    }));

                    function api() {
                      return _api3.apply(this, arguments);
                    }

                    return api;
                  }(),
                  cli: function () {
                    var _cli3 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee9() {
                      return regeneratorRuntime.wrap(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              if (!(!(0, _helpers.isNodeEnvironment)() || disableWrite)) {
                                _context9.next = 2;
                                break;
                              }

                              return _context9.abrupt("return");

                            case 2:
                              _context9.next = 4;
                              return _this4.cliRequest(["files", "export", latestDescriptor.fileId, filename || process.cwd(), "--project-id=".concat(latestDescriptor.projectId), "--branch-id=".concat(latestDescriptor.branchId), "--sha=".concat(latestDescriptor.sha)]);

                            case 4:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      }, _callee9);
                    }));

                    function cli() {
                      return _cli3.apply(this, arguments);
                    }

                    return cli;
                  }(),
                  requestOptions: requestOptions
                }));

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function raw(_x3) {
        return _raw.apply(this, arguments);
      }

      return raw;
    }()
  }]);

  return Files;
}(_Endpoint2.default);

exports.default = Files;