// 待办： 适配命令行与浏览器下两种实现
// 待办： 使用不可变数据结构

import pWaterfall from 'p-waterfall';
import merge from 'lodash/merge';

import noEmptyText from './noEmptyText';
import plainObjectType from './plainObjectType';
import arrayType from './arrayType';
import booleanType from './booleanType';

import grabAllUrls from './grabAllUrls';
import clearExcludedUrls from './clearExcludedUrls';

const validateOptions = (options) => {
  plainObjectType(options, '可配置项必须是对象字面量格式的');

  const defaultOptions = {
    exclude: [],
    extractFromQueryString: true,
  };

  const opts = merge(defaultOptions, options, {});

  arrayType(opts.exclude, '`exclude` 选项必须是数组');
  booleanType(
    opts.extractFromQueryString,
    "'extractFromQueryString' 选项必须是布尔类型的值",
  );

  return opts;
};

export default async (text, options = {}) => {
  noEmptyText(text);
  const opts = validateOptions(options);

  const urls = await pWaterfall([
    () => grabAllUrls(text, opts.extractFromQueryString),
    links => clearExcludedUrls(links, opts.exclude),
  ]);

  return urls;
};
