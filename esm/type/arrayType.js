"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isString = _interopRequireDefault(require("lodash/isString"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (target, errorMessage = '') => {
  const errorDetectorActived = (0, _isString.default)(errorMessage) && !(0, _isEmpty.default)(errorMessage);

  if (errorDetectorActived && !(0, _isArray.default)(target)) {
    throw Error(`参数错误: ${errorMessage}, 实际为 ${target}`);
  }

  return (0, _isArray.default)(target);
};

exports.default = _default;
module.exports = exports.default;