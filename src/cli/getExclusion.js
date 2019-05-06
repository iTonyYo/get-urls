import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';

export default (exclude) => {
  let ex = [];

  // 若提供且仅提供了一个过滤规则，将其转换成数
  // 组的形式，参见 ./getUrls.js#l20
  if (!isEmpty(exclude) && isString(exclude)) {
    ex = [exclude];
  }

  if (!isEmpty(exclude) && isArray(exclude)) {
    ex = exclude;
  }

  return ex;
};
