"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlRegex = _interopRequireDefault(require("url-regex"));

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _trim = _interopRequireDefault(require("lodash/trim"));

var _replace = _interopRequireDefault(require("lodash/replace"));

var _booleanType = _interopRequireDefault(require("../type/booleanType"));

var _noEmptyText = _interopRequireDefault(require("./noEmptyText"));

var _addOneUrl = _interopRequireDefault(require("./SetGateway/addOneUrl"));

var _addAllUrlsFromQueryParamIfNeedAndExist = _interopRequireDefault(require("./SetGateway/addAllUrlsFromQueryParamIfNeedAndExist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 待办：
 * ‘normalizeUrl’ 的实现不该仅仅是针对
 * node.js 平台。#L32
 *
 * 待办：
 * 将所有不包含传输协议声明的链接自动设置上
 * 类型为 HTTP 的传输协议，这个策略没有考
 * 虑到有些特别的链接也许是别的传输协议，通
 * 过特征匹配的方式为目标链接设置特定的传输
 * 协议才是灵活的。即：具体指定哪些链接应该
 * 贴哪种传输协议。#L32
 */
var _default = (text = '', extractFromQueryString = true) => {
  (0, _noEmptyText.default)(text);
  (0, _booleanType.default)(extractFromQueryString, "'extractFromQueryString' 选项必须是布尔类型的值");
  const ret = new Set();
  const wholeUrlsInText = text.match((0, _urlRegex.default)({
    strict: false
  })) || [];

  for (const url of wholeUrlsInText) {
    const currentUrl = (0, _normalizeUrl.default)((0, _replace.default)((0, _trim.default)(url), /\.+$/, ''));
    (0, _addOneUrl.default)(currentUrl, ret);
    (0, _addAllUrlsFromQueryParamIfNeedAndExist.default)(currentUrl, ret, extractFromQueryString);
  }

  return ret;
};

exports.default = _default;
module.exports = exports.default;