"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 指定存储位置，默认：'process.cwd()'，包
// 含文件名，将获取到的链接以文件的形式保存
var _default = out => {
  if ((0, _isEmpty.default)(_path.default.extname(out))) {
    throw Error('`out` 选项中必须包含正确的文件名：文件名.后缀');
  }

  return out;
};

exports.default = _default;
module.exports = exports.default;