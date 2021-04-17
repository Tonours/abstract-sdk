"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.map");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.reflect.construct");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwAPIError = throwAPIError;
exports.throwCLIError = throwCLIError;
exports.FileExportError = exports.ValidationError = exports.ServiceUnavailableError = exports.ForbiddenError = exports.UnauthorizedError = exports.RateLimitError = exports.NotFoundError = exports.InternalServerError = exports.EndpointUndefinedError = exports.BranchSearchCLIError = exports.FileAPIError = exports.MultiError = exports.BaseError = exports.logCLIError = exports.logAPIError = void 0;

require("regenerator-runtime/runtime");

var _debug = require("./util/debug");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var logAPIError = _debug.log.extend("AbstractAPI:error");

exports.logAPIError = logAPIError;

var logCLIError = _debug.log.extend("AbstractCLI:error");

exports.logCLIError = logCLIError;

var BaseError =
/*#__PURE__*/
function (_Error) {
  _inherits(BaseError, _Error);

  function BaseError(message) {
    var _this;

    _classCallCheck(this, BaseError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseError).call(this, message));
    _this.name = _this.constructor.name;
    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor); // This is a Node API that helps stack trace readability
    }

    return _this;
  }

  return BaseError;
}(_wrapNativeSuper(Error));

exports.BaseError = BaseError;

var MultiError =
/*#__PURE__*/
function (_BaseError) {
  _inherits(MultiError, _BaseError);

  function MultiError(errors) {
    var _this2;

    _classCallCheck(this, MultiError);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MultiError).call(this, "An error has occured"));

    _defineProperty(_assertThisInitialized(_this2), "errors", void 0);

    _this2.errors = errors;
    return _this2;
  }

  return MultiError;
}(BaseError);

exports.MultiError = MultiError;

var FileAPIError =
/*#__PURE__*/
function (_BaseError2) {
  _inherits(FileAPIError, _BaseError2);

  function FileAPIError() {
    _classCallCheck(this, FileAPIError);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileAPIError).call(this, "This method requires an environment that supports the File API. See https://www.w3.org/TR/FileAPI/ for more information."));
  }

  return FileAPIError;
}(BaseError);

exports.FileAPIError = FileAPIError;

var BranchSearchCLIError =
/*#__PURE__*/
function (_BaseError3) {
  _inherits(BranchSearchCLIError, _BaseError3);

  function BranchSearchCLIError() {
    _classCallCheck(this, BranchSearchCLIError);

    return _possibleConstructorReturn(this, _getPrototypeOf(BranchSearchCLIError).call(this, "This method requires a ProjectDescriptor when using the CLI transport."));
  }

  return BranchSearchCLIError;
}(BaseError);

exports.BranchSearchCLIError = BranchSearchCLIError;

var EndpointUndefinedError =
/*#__PURE__*/
function (_BaseError4) {
  _inherits(EndpointUndefinedError, _BaseError4);

  function EndpointUndefinedError(transport) {
    _classCallCheck(this, EndpointUndefinedError);

    return _possibleConstructorReturn(this, _getPrototypeOf(EndpointUndefinedError).call(this, "Endpoint not defined in ".concat(transport, " transport.")));
  }

  return EndpointUndefinedError;
}(BaseError);

exports.EndpointUndefinedError = EndpointUndefinedError;

var InternalServerError =
/*#__PURE__*/
function (_BaseError5) {
  _inherits(InternalServerError, _BaseError5);

  function InternalServerError(path, body) {
    var _this3;

    _classCallCheck(this, InternalServerError);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(InternalServerError).call(this, "Internal server error."));

    _defineProperty(_assertThisInitialized(_this3), "data", void 0);

    _this3.data = {
      path: path,
      body: body
    };
    return _this3;
  }

  return InternalServerError;
}(BaseError);

exports.InternalServerError = InternalServerError;

var NotFoundError =
/*#__PURE__*/
function (_BaseError6) {
  _inherits(NotFoundError, _BaseError6);

  function NotFoundError(path, body) {
    var _this4;

    _classCallCheck(this, NotFoundError);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(NotFoundError).call(this, "Not found."));

    _defineProperty(_assertThisInitialized(_this4), "data", void 0);

    _this4.data = {
      path: path,
      body: body
    };
    return _this4;
  }

  return NotFoundError;
}(BaseError);

exports.NotFoundError = NotFoundError;

var RateLimitError =
/*#__PURE__*/
function (_BaseError7) {
  _inherits(RateLimitError, _BaseError7);

  function RateLimitError(path, body, response) {
    var _this5;

    _classCallCheck(this, RateLimitError);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(RateLimitError).call(this, "Too many requests."));

    _defineProperty(_assertThisInitialized(_this5), "data", void 0);

    _this5.data = {
      path: path,
      body: body
    };

    if (response) {
      var resetSeconds = response.headers.get("ratelimit-reset");
      _this5.data.resetsAt = Number(resetSeconds) * 1000;
    }

    return _this5;
  }

  return RateLimitError;
}(BaseError);

exports.RateLimitError = RateLimitError;

var UnauthorizedError =
/*#__PURE__*/
function (_BaseError8) {
  _inherits(UnauthorizedError, _BaseError8);

  function UnauthorizedError(path, body) {
    var _this6;

    _classCallCheck(this, UnauthorizedError);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(UnauthorizedError).call(this, "Unauthorized."));

    _defineProperty(_assertThisInitialized(_this6), "data", void 0);

    _this6.data = {
      path: path,
      body: body
    };
    return _this6;
  }

  return UnauthorizedError;
}(BaseError);

exports.UnauthorizedError = UnauthorizedError;

var ForbiddenError =
/*#__PURE__*/
function (_BaseError9) {
  _inherits(ForbiddenError, _BaseError9);

  function ForbiddenError(path, body) {
    var _this7;

    _classCallCheck(this, ForbiddenError);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(ForbiddenError).call(this, "Forbidden."));

    _defineProperty(_assertThisInitialized(_this7), "data", void 0);

    _this7.data = {
      path: path,
      body: body
    };
    return _this7;
  }

  return ForbiddenError;
}(BaseError);

exports.ForbiddenError = ForbiddenError;

var ServiceUnavailableError =
/*#__PURE__*/
function (_BaseError10) {
  _inherits(ServiceUnavailableError, _BaseError10);

  function ServiceUnavailableError(path, body) {
    var _this8;

    _classCallCheck(this, ServiceUnavailableError);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(ServiceUnavailableError).call(this, "Service unavailable."));

    _defineProperty(_assertThisInitialized(_this8), "data", void 0);

    _this8.data = {
      path: path,
      body: body
    };
    return _this8;
  }

  return ServiceUnavailableError;
}(BaseError);

exports.ServiceUnavailableError = ServiceUnavailableError;

var ValidationError =
/*#__PURE__*/
function (_BaseError11) {
  _inherits(ValidationError, _BaseError11);

  function ValidationError(path, body) {
    var _this9;

    _classCallCheck(this, ValidationError);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(ValidationError).call(this, "Validation failed."));

    _defineProperty(_assertThisInitialized(_this9), "data", void 0);

    _this9.data = {
      path: path,
      body: body
    };
    return _this9;
  }

  return ValidationError;
}(BaseError);

exports.ValidationError = ValidationError;

var FileExportError =
/*#__PURE__*/
function (_BaseError12) {
  _inherits(FileExportError, _BaseError12);

  function FileExportError(fileId, exportId) {
    _classCallCheck(this, FileExportError);

    return _possibleConstructorReturn(this, _getPrototypeOf(FileExportError).call(this, "File export failed for fileId ".concat(fileId, " and export jobId ").concat(exportId, ".")));
  }

  return FileExportError;
}(BaseError);

exports.FileExportError = FileExportError;

function throwAPIError(_x, _x2, _x3) {
  return _throwAPIError.apply(this, arguments);
}

function _throwAPIError() {
  _throwAPIError = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(response, url, body) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = logAPIError.enabled;

            if (!_context.t0) {
              _context.next = 7;
              break;
            }

            _context.t1 = logAPIError;
            _context.next = 5;
            return response.clone().json();

          case 5:
            _context.t2 = _context.sent;
            (0, _context.t1)(_context.t2);

          case 7:
            _context.t3 = response.status;
            _context.next = _context.t3 === 401 ? 10 : _context.t3 === 403 ? 11 : _context.t3 === 404 ? 12 : _context.t3 === 422 ? 13 : _context.t3 === 429 ? 14 : _context.t3 === 500 ? 15 : _context.t3 === 503 ? 16 : 17;
            break;

          case 10:
            throw new UnauthorizedError(url, body);

          case 11:
            throw new ForbiddenError(url, body);

          case 12:
            throw new NotFoundError(url, body);

          case 13:
            throw new ValidationError(url, body);

          case 14:
            throw new RateLimitError(url, body, response);

          case 15:
            throw new InternalServerError(url, body);

          case 16:
            throw new ServiceUnavailableError(url, body);

          case 17:
            throw new Error("Received status \"".concat(response.status, "\", expected 2XX"));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _throwAPIError.apply(this, arguments);
}

function throwCLIError(response, cliPath, args) {
  /* istanbul ignore next */
  logCLIError.enabled && logCLIError(response);

  switch (response.code) {
    case "unauthorized":
      throw new UnauthorizedError(cliPath, args);

    case "forbidden":
      throw new ForbiddenError(cliPath, args);

    case "not_found":
      throw new NotFoundError(cliPath, args);

    case "too_many_requests":
      throw new RateLimitError(cliPath, args);

    case "service_unavailable":
      throw new ServiceUnavailableError(cliPath, args);

    case "validation_error":
      throw new ValidationError(cliPath, args);

    default:
      throw new Error(response.message);
  }
}