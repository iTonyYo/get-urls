import flattenDeep from 'lodash/flattenDeep';
import pMap from 'p-map';

import getUrlsFromOneFile from './getUrlsFromOneFile';

export default async (
  files,
  {
    exclude,
    extractFromQueryString,
  },
) => flattenDeep(
  await pMap(
    files,
    async source => Array.from(
      await getUrlsFromOneFile(source, {
        exclude,
        extractFromQueryString,
      }),
    ),
    { concurrency: 2 },
  ),
);
