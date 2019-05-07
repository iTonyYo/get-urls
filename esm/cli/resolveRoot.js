"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _fs = require("fs");

const resolveRoot = relativePath => (0, _path.resolve)((0, _fs.realpathSync)(process.cwd()), relativePath);

var _default = resolveRoot;
exports.default = _default;
module.exports = exports.default;