import { assert } from 'chai';

import getUrlsFromMultipleFiles from '../src/cli/getUrlsFromMultipleFiles';
import resolveRoot from '../src/cli/resolveRoot';

setTimeout(() => {
  describe('getUrlsFromMultipleFiles(file, options)', () => {
    it('从多份文件中获取所有链接', async () => {
      const urls = await getUrlsFromMultipleFiles([
        resolveRoot('test/playlist-1.m3u'),
        resolveRoot('test/playlist-2.m3u'),
      ]);

      assert.deepEqual(
        urls,
        [
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
          'http://haocai1688.com/pic/uploadimg/2017-7/PS/MXGS-968.jpg',
          'http://video.fxsdp.com:8091/81820170725/MXGS-968/550kb/hls/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2017-7/PS/OKSN-208.jpg',
          'http://video.fxsdp.com:8091/81820170725/OKSN-208c/550kb/hls/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2017-7/PS/OBA-345.jpg',
          'http://video.fxsdp.com:8091/81820170725/OBA-345/550kb/hls/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2017-7/PS/OKSN-277.jpg',
          'http://video.fxsdp.com:8091/81820170725/OKSN-277/550kb/hls/index.m3u8',
          'http://haocai1688.com/pic/uploadimg/2017-7/PS/OKSN-227.jpg',
          'http://video.fxsdp.com:8091/81820170725/OKSN-227/550kb/hls/index.m3u8',
        ],
      );
    });

    it('从多份文件中获取链接，但忽略包含指定文字的部分', async () => {
      const urls = await getUrlsFromMultipleFiles(
        [
          resolveRoot('test/playlist-1.m3u'),
          resolveRoot('test/playlist-2.m3u'),
        ],
        {
          exclude: ['(jpg)'],
        },
      );

      assert.deepEqual(
        urls,
        [
          'http://video.gujianzhixiang.com:8091/0604/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0606/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0615/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0477/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'chrome://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
          'https://git.io/fh7df',
          'http://video.fxsdp.com:8091/81820170725/MXGS-968/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OKSN-208c/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OBA-345/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OKSN-277/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OKSN-227/550kb/hls/index.m3u8',
        ],
      );
    });

    it('从多份文件中获取不包含指定文字的所有链接，并且忽视查询字符串中的链接', async () => {
      const urls = await getUrlsFromMultipleFiles(
        [
          resolveRoot('test/playlist-1.m3u'),
          resolveRoot('test/playlist-2.m3u'),
        ],
        {
          exclude: ['(jpg)'],
          extractFromQueryString: false,
        },
      );

      assert.deepEqual(
        urls,
        [
          'http://video.gujianzhixiang.com:8091/0604/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0606/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0615/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0477/index.m3u8',
          'http://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'chrome://video.gujianzhixiang.com:8091/0541/index.m3u8',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
          'http://video.fxsdp.com:8091/81820170725/MXGS-968/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OKSN-208c/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OBA-345/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OKSN-277/550kb/hls/index.m3u8',
          'http://video.fxsdp.com:8091/81820170725/OKSN-227/550kb/hls/index.m3u8',
        ],
      );
    });
  });

  run();
}, 0);
