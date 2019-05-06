"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _isString = _interopRequireDefault(require("lodash/isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = text => {
  if (!(0, _isString.default)(text)) {
    throw Error('无法处理除文本之外的数据');
  }

  if ((0, _isString.default)(text) && (0, _isEmpty.default)(text)) {
    throw Error('无法处理空文本');
  }
};

exports.default = _default;
module.exports = exports.default;