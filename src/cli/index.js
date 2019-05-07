#!/usr/bin/env node

import meow from 'meow';
import updateNotifier from 'update-notifier';
import join from 'lodash/join';
import isEqual from 'lodash/isEqual';
import size from 'lodash/size';

import saveFile from './saveFile';
import getUrlsFromMultipleFiles from './getUrlsFromMultipleFiles';
import getUrlsFromOneFile from './getUrlsFromOneFile';
import getExclusion from './getExclusion';
import getOutput from './getOutput';

// 待办： 支持直接在命令行界面中提供一段文本并从中获取所有链接
// 待办： 若未提供 `out` 参数，则直接在命令行界面中输出结果

const start = async () => {
  const cli = meow(`
    使用方式
      $ get-urls <文件> <...> 选项 [...]

    选项
      --out, -o, 指定存储位置，默认：'process.cwd()'，包含文件名，将获取到的链接以文件的形式保存
      --exclude, -f, 指定一个或多个过滤规则
      --extractFromQueryString, 是否从找到的链接中提取作为查询参数内容链接
      --version, -V, 查看版本号

    示例
      $ get-urls ./playlist.m3u -o ./test.txt -f '(s|jpg)'
  `, {
    flags: {
      exclude: {
        type: 'string',
        alias: 'f',
      },
      out: {
        type: 'string',
        alias: 'o',
      },
      extractFromQueryString: {
        type: 'boolean',
      },
      help: {
        type: 'boolean',
        alias: 'h',
      },
      version: {
        type: 'boolean',
        alias: 'V',
      },
    },
  });

  updateNotifier({ pkg: cli.pkg }).notify();

  const { input, flags } = cli;
  const { out, exclude, extractFromQueryString } = flags;

  const noInput = isEqual(size(input), 0);
  const onlyOneInput = isEqual(size(input), 1);
  const hasMutipleInput = size(input) > 1;

  if (noInput) {
    throw Error('必须提供源文件');
  }

  if (onlyOneInput) {
    const urls = await getUrlsFromOneFile(
      input[0],
      {
        exclude: getExclusion(exclude),
        extractFromQueryString,
      },
    );

    await saveFile(
      join(Array.from(urls), '\n'),
      getOutput(out),
    );
  }

  if (hasMutipleInput) {
    const urls = await getUrlsFromMultipleFiles(
      input,
      {
        exclude: getExclusion(exclude),
        extractFromQueryString,
      },
    );

    await saveFile(
      join(urls, '\n'),
      getOutput(out),
    );
  }
};

(async () => {
  try {
    await start();
  } catch (err) {
    throw err;
  }
})();
