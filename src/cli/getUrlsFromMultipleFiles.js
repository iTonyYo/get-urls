import flattenDeep from 'lodash/flattenDeep';
import pMap from 'p-map';
import merge from 'lodash/merge';

import getUrlsFromOneFile from './getUrlsFromOneFile';

export default async (files, options) => {
  const defaultOptions = {
    exclude: [],
    extractFromQueryString: true,
  };

  const opts = merge(defaultOptions, options, {});

  return flattenDeep(
    await pMap(
      files,
      async source => Array.from(
        await getUrlsFromOneFile(source, {
          exclude: opts.exclude,
          extractFromQueryString: opts.extractFromQueryString,
        }),
      ),
      { concurrency: 2 },
    ),
  );
};
