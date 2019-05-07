import isEqual from 'lodash/isEqual';
import indexOf from 'lodash/indexOf';
import map from 'lodash/map';

export default (target, rule, errorMessage) => {
  const result = map(rule, validate => validate(target));
  if (isEqual(indexOf(result, true), -1)) {
    throw Error(`参数错误: ${errorMessage}, 实际为 ${target}`);
  }
};
