"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.function.name");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.object.values");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _stream = require("stream");

require("cross-fetch/polyfill");

var _child_process = require("child_process");

var _v = _interopRequireDefault(require("uuid/v4"));

var _package = require("../../package.json");

var _Client = _interopRequireDefault(require("../Client"));

var _helpers = require("../util/helpers");

var _debug = require("../util/debug");

var _errors = require("../errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cliPath = require("@elasticprojects/abstract-cli");

var logAPIRequest = _debug.log.extend("AbstractAPI:request");

var logAPIResponse = _debug.log.extend("AbstractAPI:response");

var logCLIRequest = _debug.log.extend("AbstractCLI:request");

var logCLIResponse = _debug.log.extend("AbstractCLI:response");

var minorVersion = _package.version.split(".", 2).join("."); // only attempt to use `performance` in a browser environment

/* istanbul ignore next */


var performance = typeof window === "undefined" ? undefined : window.performance;

var Endpoint =
/*#__PURE__*/
function () {
  function Endpoint(client, options) {
    _classCallCheck(this, Endpoint);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "client", void 0);

    _defineProperty(this, "options", void 0);

    this.client = client;
    this.options = options;
  }

  _createClass(Endpoint, [{
    key: "configureRequest",
    value: function configureRequest(requestName, config) {
      var _this = this;

      var makeRequest =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var response, errors, requestOptions, transportMode, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, mode, requestError, request, start, _analyticsCallback, operation, end, totalErrors;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  errors = {};
                  requestOptions = config.requestOptions || {};
                  transportMode = requestOptions.transportMode || _this.options.transportMode;

                  if (!(transportMode.length === 0)) {
                    _context.next = 5;
                    break;
                  }

                  throw new _errors.EndpointUndefinedError("any");

                case 5:
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 8;
                  _iterator = transportMode[Symbol.iterator]();

                case 10:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 38;
                    break;
                  }

                  mode = _step.value;
                  requestError = void 0;
                  _context.prev = 13;
                  request = config[mode];

                  if (request) {
                    _context.next = 17;
                    break;
                  }

                  throw new _errors.EndpointUndefinedError(mode);

                case 17:
                  start = void 0;
                  _analyticsCallback = _this.client._analyticsCallback;

                  if (performance && _analyticsCallback) {
                    start = performance.now();
                  }

                  operation = request.call(_this);
                  _context.next = 23;
                  return operation;

                case 23:
                  response = _context.sent;

                  if (start && performance && _analyticsCallback) {
                    end = performance.now();

                    _analyticsCallback({
                      duration: end - start,
                      endpoint: _this.name,
                      request: requestName,
                      transportMode: mode
                    });
                  }

                  _context.next = 30;
                  break;

                case 27:
                  _context.prev = 27;
                  _context.t0 = _context["catch"](13);
                  requestError = _context.t0;

                case 30:
                  if (!requestError) {
                    _context.next = 34;
                    break;
                  }

                  errors[mode] = requestError;
                  _context.next = 35;
                  break;

                case 34:
                  return _context.abrupt("break", 38);

                case 35:
                  _iteratorNormalCompletion = true;
                  _context.next = 10;
                  break;

                case 38:
                  _context.next = 44;
                  break;

                case 40:
                  _context.prev = 40;
                  _context.t1 = _context["catch"](8);
                  _didIteratorError = true;
                  _iteratorError = _context.t1;

                case 44:
                  _context.prev = 44;
                  _context.prev = 45;

                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }

                case 47:
                  _context.prev = 47;

                  if (!_didIteratorError) {
                    _context.next = 50;
                    break;
                  }

                  throw _iteratorError;

                case 50:
                  return _context.finish(47);

                case 51:
                  return _context.finish(44);

                case 52:
                  totalErrors = Object.keys(errors).length;

                  if (!(transportMode.length === totalErrors)) {
                    _context.next = 57;
                    break;
                  }

                  if (!(totalErrors === 1)) {
                    _context.next = 56;
                    break;
                  }

                  throw Object.values(errors)[0];

                case 56:
                  throw new _errors.MultiError(errors);

                case 57:
                  return _context.abrupt("return", response);

                case 58:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[8, 40, 44, 52], [13, 27], [45,, 47, 51]]);
        }));

        return function makeRequest() {
          return _ref.apply(this, arguments);
        };
      }();

      var response = makeRequest();
      return response;
    }
  }, {
    key: "apiRequest",
    value: function () {
      var _apiRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url) {
        var fetchOptions,
            apiOptions,
            customHostname,
            raw,
            onProgress,
            hostname,
            args,
            response,
            totalSize,
            receivedSize,
            body,
            reader,
            _ref2,
            done,
            value,
            apiValue,
            logValue,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fetchOptions = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                apiOptions = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
                customHostname = apiOptions.customHostname, raw = apiOptions.raw, onProgress = apiOptions.onProgress;
                _context2.t0 = customHostname;

                if (_context2.t0) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return this.options.apiUrl;

              case 7:
                _context2.t0 = _context2.sent;

              case 8:
                hostname = _context2.t0;
                fetchOptions.body = fetchOptions.body && JSON.stringify(fetchOptions.body);
                _context2.next = 12;
                return this._getFetchHeaders(fetchOptions.headers);

              case 12:
                fetchOptions.headers = _context2.sent;
                args = ["".concat(hostname, "/").concat(url), fetchOptions];
                /* istanbul ignore next */

                logAPIRequest.enabled && logAPIRequest(args);
                _context2.next = 17;
                return fetch.apply(void 0, args);

              case 17:
                response = _context2.sent;
                _context2.t1 = !response.ok;

                if (!_context2.t1) {
                  _context2.next = 22;
                  break;
                }

                _context2.next = 22;
                return (0, _errors.throwAPIError)(response, url, fetchOptions.body);

              case 22:
                if (!(response.status === 204)) {
                  _context2.next = 24;
                  break;
                }

                return _context2.abrupt("return", undefined);

              case 24:
                if (!onProgress) {
                  _context2.next = 47;
                  break;
                }

                totalSize = Number(response.headers.get("Content-Length"));
                receivedSize = 0;
                _context2.next = 29;
                return response.body;

              case 29:
                body = _context2.sent;

                if (!(body instanceof _stream.Readable)) {
                  _context2.next = 34;
                  break;
                }

                body.on("readable", function () {
                  var chunk;

                  while (chunk = body.read()) {
                    receivedSize += chunk.length;
                    onProgress(receivedSize, totalSize);
                  }
                }); // Browser environments using native fetch

                _context2.next = 47;
                break;

              case 34:
                if (!body) {
                  _context2.next = 47;
                  break;
                }

                reader = body.getReader();

              case 36:
                if (!true) {
                  _context2.next = 47;
                  break;
                }

                _context2.next = 39;
                return reader.read();

              case 39:
                _ref2 = _context2.sent;
                done = _ref2.done;
                value = _ref2.value;

                if (value) {
                  receivedSize += value.length;
                  onProgress(receivedSize, totalSize);
                }

                if (!done) {
                  _context2.next = 45;
                  break;
                }

                return _context2.abrupt("break", 47);

              case 45:
                _context2.next = 36;
                break;

              case 47:
                _context2.next = 49;
                return raw ? response.arrayBuffer() : response.json();

              case 49:
                apiValue = _context2.sent;
                logValue = raw ? apiValue.toString() : apiValue;
                /* istanbul ignore next */

                logAPIResponse.enabled && logAPIResponse(logValue);
                return _context2.abrupt("return", apiValue);

              case 53:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function apiRequest(_x) {
        return _apiRequest.apply(this, arguments);
      }

      return apiRequest;
    }()
  }, {
    key: "cliRequest",
    value: function () {
      var _cliRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(args) {
        var token, tokenArgs, spawnArgs;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._getAccessToken();

              case 2:
                token = _context3.sent;
                tokenArgs = typeof token === "string" ? ["--user-token", token] : [];
                _context3.t0 = cliPath;
                _context3.t1 = [];
                _context3.t2 = tokenArgs;
                _context3.next = 9;
                return this.options.apiUrl;

              case 9:
                _context3.t3 = _context3.sent;
                _context3.t4 = ["--api-url", _context3.t3, "--skip-network-read-ops"];
                _context3.t5 = _toConsumableArray(args);
                _context3.t6 = _context3.t1.concat.call(_context3.t1, _context3.t2, _context3.t4, _context3.t5);
                spawnArgs = [_context3.t0, _context3.t6];

                /* istanbul ignore next */
                logCLIRequest.enabled && logCLIRequest(spawnArgs);
                return _context3.abrupt("return", this._createStreamPromise(_child_process.spawn.apply(void 0, spawnArgs), spawnArgs));

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function cliRequest(_x2) {
        return _cliRequest.apply(this, arguments);
      }

      return cliRequest;
    }()
  }, {
    key: "createCursor",
    value: function createCursor(requestName, getConfig, getValue) {
      var _this2 = this;

      var createPromise = function createPromise(lastPromise) {
        lastPromise = lastPromise || Promise.resolve();
        var promise = lastPromise.then(function (response) {
          if (response && !response.meta.nextOffset) {
            return;
          }

          return _this2.configureRequest(requestName, getConfig(response && response.meta.nextOffset));
        });
        var newPromise = promise.then(function (response) {
          return response && getValue(response);
        });

        newPromise.next = function () {
          return createPromise(promise);
        };

        return newPromise;
      };

      return createPromise();
    }
  }, {
    key: "_createStreamPromise",
    value: function _createStreamPromise(response, spawnArgs) {
      return new Promise(function (resolve, reject) {
        var errBuffer = Buffer.from("");
        var outBuffer = Buffer.from("");
        response.stderr.on("data", function (chunk) {
          errBuffer = Buffer.concat([errBuffer, chunk]);
        });
        response.stdout.on("data", function (chunk) {
          outBuffer = Buffer.concat([outBuffer, chunk]);
        });
        response.on("error", reject);
        response.on("close", function (errCode) {
          if (errCode !== 0) {
            try {
              var _response = JSON.parse(errBuffer.toString());

              (0, _errors.throwCLIError)(_response, spawnArgs[0], _objectSpread({}, spawnArgs[1]));
            } catch (error) {
              reject(error);
            }

            return;
          }

          try {
            var cliResponse = JSON.parse(outBuffer.toString());
            /* istanbul ignore next */

            logCLIResponse.enabled && logCLIResponse(cliResponse);
            resolve(cliResponse);
          } catch (error) {
            /* istanbul ignore next */
            reject(error);
          }
        });
      });
    }
  }, {
    key: "_getAccessToken",
    value: function () {
      var _getAccessToken2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", typeof this.options.accessToken === "function" ? this.options.accessToken() : this.options.accessToken);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }

      return _getAccessToken;
    }()
  }, {
    key: "_getFetchHeaders",
    value: function () {
      var _getFetchHeaders2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(customHeaders) {
        var accessToken, authorizationHeader, shareId, shareIdHeader, headers;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._getAccessToken();

              case 2:
                accessToken = _context5.sent;
                authorizationHeader = accessToken ? {
                  Authorization: "Bearer ".concat(accessToken)
                } : undefined;

                if (!this.options.shareId) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 7;
                return this.options.shareId();

              case 7:
                _context5.t0 = _context5.sent;
                _context5.next = 11;
                break;

              case 10:
                _context5.t0 = undefined;

              case 11:
                shareId = _context5.t0;
                shareIdHeader = shareId ? {
                  "Abstract-Share-Id": typeof shareId === "string" ? shareId : (0, _helpers.inferShareId)(shareId)
                } : undefined;
                headers = _objectSpread({
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "User-Agent": "Abstract SDK ".concat(minorVersion),
                  "X-Amzn-Trace-Id": "Root=1-".concat(new Date().getTime(), "-").concat((0, _v.default)()),
                  "Abstract-Api-Version": "8"
                }, authorizationHeader, {}, shareIdHeader, {}, customHeaders);
                Object.keys(headers).forEach(function (key) {
                  headers[key] === undefined && delete headers[key];
                });
                return _context5.abrupt("return", headers);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _getFetchHeaders(_x3) {
        return _getFetchHeaders2.apply(this, arguments);
      }

      return _getFetchHeaders;
    }()
  }]);

  return Endpoint;
}();

exports.default = Endpoint;