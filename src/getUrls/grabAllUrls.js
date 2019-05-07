/**
 * 待办：
 * ‘normalizeUrl’ 的实现不该仅仅是针对
 * node.js 平台。#L32
 *
 * 待办：
 * 将所有不包含传输协议声明的链接自动设置上
 * 类型为 HTTP 的传输协议，这个策略没有考
 * 虑到有些特别的链接也许是别的传输协议，通
 * 过特征匹配的方式为目标链接设置特定的传输
 * 协议才是灵活的。即：具体指定哪些链接应该
 * 贴哪种传输协议。#L32
 */

import urlRegex from 'url-regex';
import normalizeUrl from 'normalize-url';
import trim from 'lodash/trim';
import replace from 'lodash/replace';

import booleanType from '../type/booleanType';

import noEmptyText from './noEmptyText';

import addOneUrl from '../SetGateway/addOneUrl';

import addAllUrlsFromQueryParamIfNeedAndExist
  from '../SetGateway/addAllUrlsFromQueryParamIfNeedAndExist';

export default (text = '', extractFromQueryString = true) => {
  noEmptyText(text);
  booleanType(
    extractFromQueryString,
    "'extractFromQueryString' 选项必须是布尔类型的值",
  );

  const ret = new Set();

  const wholeUrlsInText = text.match(urlRegex({
    strict: false,
  })) || [];

  for (const url of wholeUrlsInText) {
    const currentUrl = normalizeUrl(
      replace(trim(url), /\.+$/, ''),
    );

    addOneUrl(currentUrl, ret);
    addAllUrlsFromQueryParamIfNeedAndExist(
      currentUrl,
      ret,
      extractFromQueryString,
    );
  }

  return ret;
};
