import urlRegex from 'url-regex';
import noProtocol from './noProtocol';

export default (url) => {
  if (!(urlRegex({ strict: true }).test(url) && !noProtocol(url))) {
    throw Error('必须提供有效链接');
  }
};
