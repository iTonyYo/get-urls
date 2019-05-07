import arrayType from '../type/arrayType';
import setType from '../type/setType';

import removeOneUrl from '../SetGateway/removeOneUrl';

export default (urls, exclusions) => {
  setType(urls, '`urls` 必须是 `Set` 对象');
  arrayType(exclusions, '`exclusions` 必须是数组类型');

  for (const excludedItem of exclusions || []) {
    for (const item of urls) {
      const regex = new RegExp(excludedItem);
      if (regex.test(item)) {
        removeOneUrl(item, urls);
      }
    }
  }

  return urls;
};
