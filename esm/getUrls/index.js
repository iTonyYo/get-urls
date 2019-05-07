"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pWaterfall = _interopRequireDefault(require("p-waterfall"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _plainObjectType = _interopRequireDefault(require("../type/plainObjectType"));

var _arrayType = _interopRequireDefault(require("../type/arrayType"));

var _booleanType = _interopRequireDefault(require("../type/booleanType"));

var _noEmptyText = _interopRequireDefault(require("./noEmptyText"));

var _grabAllUrls = _interopRequireDefault(require("./grabAllUrls"));

var _clearExcludedUrls = _interopRequireDefault(require("./clearExcludedUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 待办： 适配命令行与浏览器下两种实现
// 待办： 使用不可变数据结构而非 Set
const validateOptions = options => {
  (0, _plainObjectType.default)(options, '可配置项必须是对象字面量格式的');
  const defaultOptions = {
    exclude: [],
    extractFromQueryString: true
  };
  const opts = (0, _merge.default)(defaultOptions, options, {});
  (0, _arrayType.default)(opts.exclude, '`exclude` 选项必须是数组');
  (0, _booleanType.default)(opts.extractFromQueryString, "'extractFromQueryString' 选项必须是布尔类型的值");
  return opts;
};

var _default = async (text, options = {}) => {
  (0, _noEmptyText.default)(text);
  const opts = validateOptions(options);
  const urls = await (0, _pWaterfall.default)([() => (0, _grabAllUrls.default)(text, opts.extractFromQueryString), links => (0, _clearExcludedUrls.default)(links, opts.exclude)]);
  return urls;
};

exports.default = _default;
module.exports = exports.default;