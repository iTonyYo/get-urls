"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _flattenDeep = _interopRequireDefault(require("lodash/flattenDeep"));

var _pMap = _interopRequireDefault(require("p-map"));

var _getUrlsFromOneFile = _interopRequireDefault(require("./getUrlsFromOneFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (files, {
  exclude,
  extractFromQueryString
}) => (0, _flattenDeep.default)((await (0, _pMap.default)(files, async source => Array.from((await (0, _getUrlsFromOneFile.default)(source, {
  exclude,
  extractFromQueryString
}))), {
  concurrency: 2
})));

exports.default = _default;
module.exports = exports.default;