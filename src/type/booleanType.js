import isBoolean from 'lodash/isBoolean';
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';

export default (target, errorMessage = '') => {
  const errorDetectorActived = isString(errorMessage) && !isEmpty(errorMessage);

  if (errorDetectorActived && !isBoolean(target)) {
    throw Error(
      `参数错误: ${errorMessage}, 实际为 ${target}`,
    );
  }


  return isBoolean(target);
};
