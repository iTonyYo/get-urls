"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _urlParse = _interopRequireDefault(require("url-parse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const noProtocol = url => {
  const foundProtocol = (0, _urlParse.default)(url, true).protocol;
  return (0, _isEmpty.default)(foundProtocol);
};

var _default = noProtocol;
exports.default = _default;
module.exports = exports.default;