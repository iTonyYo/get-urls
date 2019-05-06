import isSet from 'lodash/isSet';

export default (target, errorMessage) => {
  if (!isSet(target)) {
    throw Error(errorMessage);
  }
};
