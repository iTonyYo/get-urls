"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isString = _interopRequireDefault(require("lodash/isString"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _oneOfType = _interopRequireDefault(require("../type/oneOfType"));

var _arrayType = _interopRequireDefault(require("../type/arrayType"));

var _stringType = _interopRequireDefault(require("../type/stringType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = exclude => {
  (0, _oneOfType.default)(exclude, [_stringType.default, _arrayType.default], '`exclude` 忽略规则仅支持字符串 / 数组');
  const onlyOneRule = !(0, _isEmpty.default)(exclude) && (0, _isString.default)(exclude);
  const hasMutipleRules = !(0, _isEmpty.default)(exclude) && (0, _isArray.default)(exclude);
  let outcome = []; // 若提供且仅提供了一个过滤规则，将其转换成数
  // 组的形式，参见 ./getUrls.js#l20

  if (onlyOneRule) {
    outcome = [exclude];
  }

  if (hasMutipleRules) {
    outcome = exclude;
  }

  return outcome;
};

exports.default = _default;
module.exports = exports.default;