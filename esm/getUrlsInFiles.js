"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("util"));

var _flattenDeep = _interopRequireDefault(require("lodash/flattenDeep"));

var _pMap = _interopRequireDefault(require("p-map"));

var _getUrls = _interopRequireDefault(require("./getUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (files, {
  exclude,
  extractFromQueryString
}) => {
  const pReadFile = _util.default.promisify(_fs.default.readFile);

  return (0, _flattenDeep.default)((await (0, _pMap.default)(files, async source => Array.from((0, _getUrls.default)((await pReadFile(source, 'utf8')), {
    exclude,
    extractFromQueryString
  })), {
    concurrency: 2
  })));
};

exports.default = _default;
module.exports = exports.default;