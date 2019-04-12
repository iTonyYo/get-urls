import fs from 'fs';
import util from 'util';

import flattenDeep from 'lodash/flattenDeep';
import pMap from 'p-map';

import getUrls from './getUrls';

export default async (
  files,
  {
    exclude,
    extractFromQueryString,
  },
) => {
  const pReadFile = util.promisify(fs.readFile);
  return flattenDeep(
    await pMap(
      files,
      async source => Array.from(
        getUrls(
          await pReadFile(source, 'utf8'),
          {
            exclude,
            extractFromQueryString,
          },
        ),
      ),
      { concurrency: 2 },
    ),
  );
};
