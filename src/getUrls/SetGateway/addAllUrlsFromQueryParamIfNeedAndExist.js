import normalizeUrl from 'normalize-url';
import trim from 'lodash/trim';
import replace from 'lodash/replace';

import setType from '../../type/setType';
import booleanType from '../../type/booleanType';

import addOneUrl from './addOneUrl';
import getUrlsFromQueryParam from '../getUrlsFromQueryParam';
import noInvalidLink from '../noInvalidLink';

export default (urlWithQueryParam, box, extractFromQueryString = true) => {
  noInvalidLink(urlWithQueryParam);
  setType(box, '`box` 必须是 `Set` 对象');
  booleanType(
    extractFromQueryString,
    "'extractFromQueryString' 选项必须是布尔类型的值",
  );

  if (extractFromQueryString) {
    const qsUrls = getUrlsFromQueryParam(urlWithQueryParam);

    for (const qsUrl of qsUrls) {
      addOneUrl(
        normalizeUrl(replace(trim(qsUrl), /\.+$/, '')),
        box,
      );
    }
  }
};
