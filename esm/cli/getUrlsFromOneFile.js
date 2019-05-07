"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("util"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _getUrls = _interopRequireDefault(require("../getUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async (file, options) => {
  const defaultOptions = {
    exclude: [],
    extractFromQueryString: true
  };
  const opts = (0, _merge.default)(defaultOptions, options, {});

  const pReadFile = _util.default.promisify(_fs.default.readFile);

  const urls = await (0, _getUrls.default)((await pReadFile(file, 'utf8')), {
    exclude: opts.exclude,
    extractFromQueryString: opts.extractFromQueryString
  });
  return urls;
};

exports.default = _default;
module.exports = exports.default;