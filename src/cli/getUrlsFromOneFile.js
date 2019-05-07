import fs from 'fs';
import util from 'util';
import merge from 'lodash/merge';

import getUrls from '../getUrls';

export default async (file, options) => {
  const defaultOptions = {
    exclude: [],
    extractFromQueryString: true,
  };

  const opts = merge(defaultOptions, options, {});

  const pReadFile = util.promisify(fs.readFile);
  const urls = await getUrls(
    await pReadFile(file, 'utf8'),
    {
      exclude: opts.exclude,
      extractFromQueryString: opts.extractFromQueryString,
    },
  );

  return urls;
};
