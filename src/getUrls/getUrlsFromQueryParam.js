import urlRegex from 'url-regex';
import forEach from 'lodash/forEach';

import getQueryParam from './getQueryParam';
import noInvalidLink from './noInvalidLink';

export default (url) => {
  noInvalidLink(url);

  const ret = new Set();
  const wholeParams = getQueryParam(url);

  forEach(wholeParams, (param) => {
    if (urlRegex({ exact: true }).test(param)) {
      ret.add(param);
    }
  });

  return ret;
};
