"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _stringType = _interopRequireDefault(require("../type/stringType"));

var _resolveRoot = _interopRequireDefault(require("./resolveRoot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 存储位置，默认：'process.cwd()'，包
// 含文件名
var _default = (out = process.cwd()) => {
  (0, _stringType.default)(out, '`out` 输出路径是字符串类型的');

  if ((0, _isEmpty.default)((0, _path.extname)(out))) {
    throw Error(`参数错误: \`out\` 输出路径须包含正确的文件名：文件名.后缀, 实际为 ${out}`);
  }

  return (0, _resolveRoot.default)(out);
};

exports.default = _default;
module.exports = exports.default;