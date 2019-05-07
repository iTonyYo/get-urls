"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _trim = _interopRequireDefault(require("lodash/trim"));

var _replace = _interopRequireDefault(require("lodash/replace"));

var _setType = _interopRequireDefault(require("../type/setType"));

var _booleanType = _interopRequireDefault(require("../type/booleanType"));

var _addOneUrl = _interopRequireDefault(require("./addOneUrl"));

var _getUrlsFromQueryParam = _interopRequireDefault(require("../getUrls/getUrlsFromQueryParam"));

var _noInvalidLink = _interopRequireDefault(require("../getUrls/noInvalidLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (urlWithQueryParam, box, extractFromQueryString = true) => {
  (0, _noInvalidLink.default)(urlWithQueryParam);
  (0, _setType.default)(box, '`box` 必须是 `Set` 对象');
  (0, _booleanType.default)(extractFromQueryString, "'extractFromQueryString' 选项必须是布尔类型的值");

  if (extractFromQueryString) {
    const qsUrls = (0, _getUrlsFromQueryParam.default)(urlWithQueryParam);

    for (const qsUrl of qsUrls) {
      (0, _addOneUrl.default)((0, _normalizeUrl.default)((0, _replace.default)((0, _trim.default)(qsUrl), /\.+$/, '')), box);
    }
  }
};

exports.default = _default;
module.exports = exports.default;