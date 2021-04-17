"use strict";

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Client", {
  enumerable: true,
  get: function get() {
    return _Client.default;
  }
});
Object.defineProperty(exports, "inferShareId", {
  enumerable: true,
  get: function get() {
    return _helpers.inferShareId;
  }
});
Object.defineProperty(exports, "paginate", {
  enumerable: true,
  get: function get() {
    return _paginate.paginate;
  }
});
Object.defineProperty(exports, "BaseError", {
  enumerable: true,
  get: function get() {
    return _errors.BaseError;
  }
});
Object.defineProperty(exports, "EndpointUndefinedError", {
  enumerable: true,
  get: function get() {
    return _errors.EndpointUndefinedError;
  }
});
Object.defineProperty(exports, "FileAPIError", {
  enumerable: true,
  get: function get() {
    return _errors.FileAPIError;
  }
});
Object.defineProperty(exports, "FileExportError", {
  enumerable: true,
  get: function get() {
    return _errors.FileExportError;
  }
});
Object.defineProperty(exports, "ForbiddenError", {
  enumerable: true,
  get: function get() {
    return _errors.ForbiddenError;
  }
});
Object.defineProperty(exports, "InternalServerError", {
  enumerable: true,
  get: function get() {
    return _errors.InternalServerError;
  }
});
Object.defineProperty(exports, "MultiError", {
  enumerable: true,
  get: function get() {
    return _errors.MultiError;
  }
});
Object.defineProperty(exports, "NotFoundError", {
  enumerable: true,
  get: function get() {
    return _errors.NotFoundError;
  }
});
Object.defineProperty(exports, "RateLimitError", {
  enumerable: true,
  get: function get() {
    return _errors.RateLimitError;
  }
});
Object.defineProperty(exports, "ServiceUnavailableError", {
  enumerable: true,
  get: function get() {
    return _errors.ServiceUnavailableError;
  }
});
Object.defineProperty(exports, "UnauthorizedError", {
  enumerable: true,
  get: function get() {
    return _errors.UnauthorizedError;
  }
});
Object.defineProperty(exports, "ValidationError", {
  enumerable: true,
  get: function get() {
    return _errors.ValidationError;
  }
});
exports.sketch = void 0;

var _Client = _interopRequireDefault(require("./Client"));

var _helpers = require("./util/helpers");

var _paginate = require("./paginate");

var sketch = _interopRequireWildcard(require("./sketch"));

exports.sketch = sketch;

var _errors = require("./errors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }