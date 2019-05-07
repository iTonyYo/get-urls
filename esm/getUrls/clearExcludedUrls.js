"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arrayType = _interopRequireDefault(require("../type/arrayType"));

var _setType = _interopRequireDefault(require("../type/setType"));

var _removeOneUrl = _interopRequireDefault(require("./SetGateway/removeOneUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (urls, exclusions) => {
  (0, _setType.default)(urls, '`urls` 必须是 `Set` 对象');
  (0, _arrayType.default)(exclusions, '`exclusions` 必须是数组类型');

  for (const excludedItem of exclusions || []) {
    for (const item of urls) {
      const regex = new RegExp(excludedItem);

      if (regex.test(item)) {
        (0, _removeOneUrl.default)(item, urls);
      }
    }
  }

  return urls;
};

exports.default = _default;
module.exports = exports.default;