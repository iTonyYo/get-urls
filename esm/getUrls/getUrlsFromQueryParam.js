"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urlRegex = _interopRequireDefault(require("url-regex"));

var _forEach = _interopRequireDefault(require("lodash/forEach"));

var _getQueryParam = _interopRequireDefault(require("./getQueryParam"));

var _noInvalidLink = _interopRequireDefault(require("./noInvalidLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = url => {
  (0, _noInvalidLink.default)(url);
  const ret = new Set();
  const wholeParams = (0, _getQueryParam.default)(url);
  (0, _forEach.default)(wholeParams, param => {
    if ((0, _urlRegex.default)({
      exact: true
    }).test(param)) {
      ret.add(param);
    }
  });
  return ret;
};

exports.default = _default;
module.exports = exports.default;