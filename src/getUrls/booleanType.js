import isBoolean from 'lodash/isBoolean';

export default (target, errorMessage) => {
  if (!isBoolean(target)) {
    throw Error(errorMessage);
  }
};
