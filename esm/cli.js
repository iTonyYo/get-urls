#!/usr/bin/env node
"use strict";

var _meow = _interopRequireDefault(require("meow"));

var _updateNotifier = _interopRequireDefault(require("update-notifier"));

var _join = _interopRequireDefault(require("lodash/join"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _size = _interopRequireDefault(require("lodash/size"));

var _saveFile = _interopRequireDefault(require("./saveFile"));

var _getUrlsInFiles = _interopRequireDefault(require("./getUrlsInFiles"));

var _getUrlsInFile = _interopRequireDefault(require("./getUrlsInFile"));

var _identifyExclusion = _interopRequireDefault(require("./identifyExclusion"));

var _identifyOutput = _interopRequireDefault(require("./identifyOutput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 待办： 支持直接在命令行界面中提供一段文本并从中获取所有链接
// 待办： 若未提供 `out` 参数，则直接在命令行界面中输出结果
(async () => {
  try {
    const cli = (0, _meow.default)(`
      使用方式
        $ get-urls <文件> <...> 选项 [...]

      选项
        --out, -o, 指定存储位置，默认：'process.cwd()'，包含文件名，将获取到的链接以文件的形式保存
        --exclude, -f, 指定一个或多个过滤规则
        --extractFromQueryString, 是否从找到的链接中提取作为查询参数内容链接

      示例
        $ get-urls ./playlist.m3u -o ./test.txt -f '(s|jpg)'
    `, {
      flags: {
        exclude: {
          type: 'string',
          alias: 'f'
        },
        out: {
          type: 'string',
          alias: 'o'
        },
        extractFromQueryString: {
          type: 'boolean'
        },
        help: {
          type: 'boolean',
          alias: 'h'
        }
      }
    });
    (0, _updateNotifier.default)({
      pkg: cli.pkg
    }).notify();
    const {
      input,
      flags
    } = cli;
    const {
      out,
      exclude,
      extractFromQueryString
    } = flags;

    if ((0, _isEqual.default)((0, _size.default)(input), 0)) {
      throw Error('必须提供源文件');
    } // 处理单个文件源


    if ((0, _isEqual.default)((0, _size.default)(input), 1)) {
      const urls = await (0, _getUrlsInFile.default)(input[0], {
        exclude: (0, _identifyExclusion.default)(exclude),
        extractFromQueryString
      });
      await (0, _saveFile.default)((0, _join.default)(Array.from(urls), '\n'), (0, _identifyOutput.default)(out));
    } // 处理多个文件源


    if ((0, _size.default)(input) > 1) {
      const urls = await (0, _getUrlsInFiles.default)(input, {
        exclude: (0, _identifyExclusion.default)(exclude),
        extractFromQueryString
      });
      await (0, _saveFile.default)((0, _join.default)(urls, '\n'), (0, _identifyOutput.default)(out));
    }
  } catch (err) {
    throw err;
  }
})();