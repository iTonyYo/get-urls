import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';

export default (target, errorMessage = '') => {
  const errorDetectorActived = isString(errorMessage) && !isEmpty(errorMessage);

  if (errorDetectorActived && !isPlainObject(target)) {
    throw Error(
      `参数错误: ${errorMessage}, 实际为 ${target}`,
    );
  }

  return isPlainObject(target);
};
