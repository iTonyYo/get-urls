import { assert } from 'chai';

import getUrlsFromQueryParam from '../src/getUrls/getUrlsFromQueryParam';

setTimeout(() => {
  describe('getUrlsFromQueryParam(url)', () => {
    it('获取查询参数里的链接', () => {
      const url = 'https://github.com/iTonyYo?tab=https://git.io/fh7df';
      assert.deepEqual(
        getUrlsFromQueryParam(url),
        new Set(['https://git.io/fh7df']),
      );
    });

    it('`url` 参数不仅仅是链接，而且必须包含传输协议声明', () => {
      const url = '//github.com/iTonyYo?tab=https://git.io/fh7df';
      assert.throws(() => {
        getUrlsFromQueryParam(url);
      }, '必须提供有效链接');
    });
  });

  run();
}, 0);
