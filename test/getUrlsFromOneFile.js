import { assert } from 'chai';

import getUrlsFromOneFile from '../src/cli/getUrlsFromOneFile';
import resolveRoot from '../src/cli/resolveRoot';

setTimeout(() => {
  describe('getUrlsFromOneFile(file, options)', () => {
    it('从一份文件中获取所有链接', async () => {
      const urls = await getUrlsFromOneFile(resolveRoot('test/playlist-1.m3u'));

      assert.deepEqual(
        urls,
        new Set([
          'http://haocai1688.com/pic/uploadimg/2019-3/PS/0604.jpg',
          'http://video.gujianzhixiang.com:8091/0604/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2019-3/PS/0606.jpg',
          'http://video.gujianzhixiang.com:8091/0606/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2019-3/PS/0615.jpg',
          'http://video.gujianzhixiang.com:8091/0615/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2019-3/PS/0477.jpg',
          'http://video.gujianzhixiang.com:8091/0477/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2019-3/PS/0541.jpg',
          'http://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'chrome://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
          'https://git.io/fh7df',
        ]),
      );
    });

    it('从一份文件中获取链接，但忽略包含指定文字的部分', async () => {
      const urls = await getUrlsFromOneFile(
        resolveRoot('test/playlist-1.m3u'),
        {
          exclude: ['(jpg)'],
        },
      );

      assert.deepEqual(
        urls,
        new Set([
          'http://video.gujianzhixiang.com:8091/0604/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0606/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0615/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0477/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'chrome://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
          'https://git.io/fh7df',
        ]),
      );
    });

    it('从一份文件中获取不包含指定文字的所有链接，并且忽视查询字符串中的链接', async () => {
      const urls = await getUrlsFromOneFile(
        resolveRoot('test/playlist-1.m3u'),
        {
          exclude: ['(jpg)'],
          extractFromQueryString: false,
        },
      );

      assert.deepEqual(
        urls,
        new Set([
          'http://video.gujianzhixiang.com:8091/0604/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0606/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0615/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0477/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'chrome://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
        ]),
      );
    });
  });

  run();
}, 0);
