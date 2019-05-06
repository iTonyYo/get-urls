import fs from 'fs';
import util from 'util';

import getUrls from '../getUrls';

export default async (
  file,
  {
    exclude,
    extractFromQueryString,
  },
) => {
  const pReadFile = util.promisify(fs.readFile);
  const urls = await getUrls(
    await pReadFile(file, 'utf8'),
    {
      exclude,
      extractFromQueryString,
    },
  );

  return urls;
};
