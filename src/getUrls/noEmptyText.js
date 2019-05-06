import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';

export default (text) => {
  if (!isString(text)) {
    throw Error('无法处理除文本之外的数据');
  }

  if (isString(text) && isEmpty(text)) {
    throw Error('无法处理空文本');
  }
};
