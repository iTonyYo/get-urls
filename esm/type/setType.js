"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSet = _interopRequireDefault(require("lodash/isSet"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _isString = _interopRequireDefault(require("lodash/isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (target, errorMessage) => {
  const errorDetectorActived = (0, _isString.default)(errorMessage) && !(0, _isEmpty.default)(errorMessage);

  if (errorDetectorActived && !(0, _isSet.default)(target)) {
    throw Error(`参数错误: ${errorMessage}, 实际为 ${target}`);
  }

  return (0, _isSet.default)(target);
};

exports.default = _default;
module.exports = exports.default;