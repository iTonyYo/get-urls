"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isBoolean = _interopRequireDefault(require("lodash/isBoolean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (target, errorMessage) => {
  if (!(0, _isBoolean.default)(target)) {
    throw Error(errorMessage);
  }
};

exports.default = _default;
module.exports = exports.default;