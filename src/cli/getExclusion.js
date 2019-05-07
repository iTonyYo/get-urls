import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';

import oneOfType from '../type/oneOfType';
import arrayType from '../type/arrayType';
import stringType from '../type/stringType';

export default (exclude) => {
  oneOfType(
    exclude,
    [
      stringType,
      arrayType,
    ],
    '`exclude` 忽略规则仅支持字符串 / 数组',
  );

  const onlyOneRule = !isEmpty(exclude) && isString(exclude);
  const hasMutipleRules = !isEmpty(exclude) && isArray(exclude);

  let outcome = [];

  // 若提供且仅提供了一个过滤规则，将其转换成数
  // 组的形式，参见 ./getUrls.js#l20
  if (onlyOneRule) {
    outcome = [exclude];
  }

  if (hasMutipleRules) {
    outcome = exclude;
  }

  return outcome;
};
