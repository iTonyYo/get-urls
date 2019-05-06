"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlRegex = _interopRequireDefault(require("url-regex"));

var _noProtocol = _interopRequireDefault(require("./noProtocol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = url => {
  if (!((0, _urlRegex.default)({
    strict: true
  }).test(url) && !(0, _noProtocol.default)(url))) {
    throw Error('必须提供有效链接');
  }
};

exports.default = _default;
module.exports = exports.default;