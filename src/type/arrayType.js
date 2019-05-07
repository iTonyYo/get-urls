import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';

export default (target, errorMessage = '') => {
  const errorDetectorActived = isString(errorMessage) && !isEmpty(errorMessage);

  if (errorDetectorActived && !isArray(target)) {
    throw Error(
      `参数错误: ${errorMessage}, 实际为 ${target}`,
    );
  }

  return isArray(target);
};
