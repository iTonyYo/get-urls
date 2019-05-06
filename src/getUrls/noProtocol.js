import isEmpty from 'lodash/isEmpty';
import parse from 'url-parse';

const noProtocol = (url) => {
  const foundProtocol = (parse(url, true)).protocol;
  return isEmpty(foundProtocol);
};

export default noProtocol;
