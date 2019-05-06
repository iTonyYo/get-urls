"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isArray = _interopRequireDefault(require("lodash/isArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (target, errorMessage) => {
  if (!(0, _isArray.default)(target)) {
    throw Error(errorMessage);
  }
};

exports.default = _default;
module.exports = exports.default;