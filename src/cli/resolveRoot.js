import { resolve } from 'path';
import { realpathSync } from 'fs';

const resolveRoot = relativePath => resolve(
  realpathSync(process.cwd()),
  relativePath,
);

export default resolveRoot;
