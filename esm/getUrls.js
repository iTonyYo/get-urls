"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _url = require("url");

var _urlRegex = _interopRequireDefault(require("url-regex"));

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _trim = _interopRequireDefault(require("lodash/trim"));

var _replace = _interopRequireDefault(require("lodash/replace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 待办： 适配命令行与浏览器下两种实现
// 待办： 使用不可变数据结构
const getUrlsFromQueryParams = url => {
  const ret = new Set();
  const {
    searchParams
  } = new _url.URL(url);

  for (const [, value] of searchParams) {
    if ((0, _urlRegex.default)({
      exact: true
    }).test(value)) {
      ret.add(value);
    }
  }

  return ret;
};

var _default = (text, options = {}) => {
  if (typeof !(0, _isUndefined.default)(options.exclude) && !(0, _isArray.default)(options.exclude)) {
    throw new TypeError('`exclude` 选项必须是数组');
  }

  const ret = new Set();

  const add = url => {
    try {
      ret.add((0, _normalizeUrl.default)((0, _replace.default)((0, _trim.default)(url), /\.+$/, ''), options));
    } catch (err) {
      throw err;
    }
  };

  const urls = text.match((0, _urlRegex.default)()) || [];

  for (const url of urls) {
    add(url);

    if (options.extractFromQueryString) {
      const qsUrls = getUrlsFromQueryParams(url);

      for (const qsUrl of qsUrls) {
        add(qsUrl);
      }
    }
  }

  for (const excludedItem of options.exclude || []) {
    for (const item of ret) {
      const regex = new RegExp(excludedItem);

      if (regex.test(item)) {
        ret.delete(item);
      }
    }
  }

  return ret;
};

exports.default = _default;
module.exports = exports.default;