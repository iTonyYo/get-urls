"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("util"));

var _getUrls = _interopRequireDefault(require("./getUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (file, {
  exclude,
  extractFromQueryString
}) => {
  const pReadFile = _util.default.promisify(_fs.default.readFile);

  return (0, _getUrls.default)((await pReadFile(file, 'utf8')), {
    exclude,
    extractFromQueryString
  });
};

exports.default = _default;
module.exports = exports.default;