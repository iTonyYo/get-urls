import parse from 'url-parse';

export default url => (parse(url, true)).query;
