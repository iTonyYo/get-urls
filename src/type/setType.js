import isSet from 'lodash/isSet';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

export default (target, errorMessage) => {
  const errorDetectorActived = isString(errorMessage) && !isEmpty(errorMessage);

  if (errorDetectorActived && !isSet(target)) {
    throw Error(
      `参数错误: ${errorMessage}, 实际为 ${target}`,
    );
  }

  return isSet(target);
};
