"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = void 0;

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug.default)("abstract");
exports.log = log;