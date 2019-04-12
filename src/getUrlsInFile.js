import fs from 'fs';
import util from 'util';

import getUrls from './getUrls';

export default async (
  file,
  {
    exclude,
    extractFromQueryString,
  },
) => {
  const pReadFile = util.promisify(fs.readFile);
  return getUrls(
    await pReadFile(file, 'utf8'),
    {
      exclude,
      extractFromQueryString,
    },
  );
};
