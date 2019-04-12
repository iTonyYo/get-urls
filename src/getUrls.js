// 待办： 适配命令行与浏览器下两种实现
// 待办： 使用不可变数据结构

import { URL } from 'url';
import urlRegex from 'url-regex';
import normalizeUrl from 'normalize-url';
import isUndefined from 'lodash/isUndefined';
import isArray from 'lodash/isArray';
import trim from 'lodash/trim';
import replace from 'lodash/replace';

const getUrlsFromQueryParams = (url) => {
  const ret = new Set();
  const { searchParams } = (new URL(url));

  for (const [, value] of searchParams) {
    if (urlRegex({ exact: true }).test(value)) {
      ret.add(value);
    }
  }

  return ret;
};

export default (text, options = {}) => {
  if (typeof !isUndefined(options.exclude) && !isArray(options.exclude)) {
    throw new TypeError('`exclude` 选项必须是数组');
  }

  const ret = new Set();

  const add = (url) => {
    try {
      ret.add(normalizeUrl(replace(trim(url), /\.+$/, ''), options));
    } catch (err) {
      throw err;
    }
  };

  const urls = text.match(urlRegex()) || [];
  for (const url of urls) {
    add(url);
    if (options.extractFromQueryString) {
      const qsUrls = getUrlsFromQueryParams(url);
      for (const qsUrl of qsUrls) {
        add(qsUrl);
      }
    }
  }

  for (const excludedItem of options.exclude || []) {
    for (const item of ret) {
      const regex = new RegExp(excludedItem);
      if (regex.test(item)) {
        ret.delete(item);
      }
    }
  }

  return ret;
};
