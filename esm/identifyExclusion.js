"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isString = _interopRequireDefault(require("lodash/isString"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = exclude => {
  let ex = []; // 若提供且仅提供了一个过滤规则，将其转换成数
  // 组的形式，参见 ./getUrls.js#l20

  if (!(0, _isEmpty.default)(exclude) && (0, _isString.default)(exclude)) {
    ex = [exclude];
  }

  if (!(0, _isEmpty.default)(exclude) && (0, _isArray.default)(exclude)) {
    ex = exclude;
  }

  return ex;
};

exports.default = _default;
module.exports = exports.default;