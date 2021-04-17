"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.async-iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginate = paginate;

require("regenerator-runtime/runtime");

var _types = require("./types");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function paginate(cursor) {
  var _ref2;

  // $FlowFixMe: Flow lacks Symbol support https://github.com/facebook/flow/issues/3258
  return _ref2 = {
    initial: true
  }, _defineProperty(_ref2, Symbol.asyncIterator, function () {
    return this;
  }), _defineProperty(_ref2, "next", function next() {
    var _this = this;

    return _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var value;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cursor = _this.initial ? cursor : cursor.next();
              _context.next = 3;
              return cursor;

            case 3:
              value = _context.sent;
              _this.initial = false;
              return _context.abrupt("return", {
                value: value,
                done: !value
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }), _ref2;
}