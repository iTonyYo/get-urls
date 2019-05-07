"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _indexOf = _interopRequireDefault(require("lodash/indexOf"));

var _map = _interopRequireDefault(require("lodash/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (target, rule, errorMessage) => {
  const result = (0, _map.default)(rule, validate => validate(target));

  if ((0, _isEqual.default)((0, _indexOf.default)(result, true), -1)) {
    throw Error(`参数错误: ${errorMessage}, 实际为 ${target}`);
  }
};

exports.default = _default;
module.exports = exports.default;