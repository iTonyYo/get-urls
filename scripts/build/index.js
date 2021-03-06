import { resolve, join, dirname } from 'path';
import { realpathSync } from 'fs';
import pMap from 'p-map';
import fg from 'fast-glob';
import execa from 'execa';
import chalk from 'chalk';

const resolveRoot = relativePath => resolve(
  realpathSync(process.cwd()),
  relativePath,
);

(async () => {
  const src = await fg(['src/**/*.js']);

  await pMap(
    src,
    async (path) => {
      try {
        const outDir = dirname(
          join(
            resolveRoot('esm'),
            path.substring('src/'.length, path.length)
          )
        );

        return await execa(
          'npx',
          [
            'babel',
            '-d',
            outDir,
            resolveRoot(path),
            '--config-file',
            resolveRoot('scripts/build/config.js'),
          ]
        );
      } catch (err) {
        throw err;
      }
    },
    {concurrency: 8},
  );

  console.log(`
    ${chalk.greenBright('构建成功!')}
  `);
})();
