import isArray from 'lodash/isArray';

export default (target, errorMessage) => {
  if (!isArray(target)) {
    throw Error(errorMessage);
  }
};
