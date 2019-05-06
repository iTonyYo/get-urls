import isPlainObject from 'lodash/isPlainObject';

export default (target, errorMessage) => {
  if (!isPlainObject(target)) {
    throw Error(errorMessage);
  }
};
