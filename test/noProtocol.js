import { assert } from 'chai';

import noProtocol from '../src/getUrls/noProtocol';

setTimeout(() => {
  describe('noProtocol(url)', () => {
    it('检测时应该忽略查询参数中带传输协议声明的链接', () => {
      const url = 'github.com/iTonyYo?tab=https://git.io/fh7df';
      const rslt = noProtocol(url);
      assert.isTrue(rslt);
    });

    it('识别 \'github.com\' 不包含传输协议声明', () => {
      const url = 'github.com';
      const rslt = noProtocol(url);
      assert.isTrue(rslt);
    });

    it('识别 \'https://git.io/fh7df\' 包含传输协议声明', () => {
      const url = 'https://git.io/fh7df';
      const rslt = noProtocol(url);
      assert.isFalse(rslt);
    });

    it('识别 \'chrome://credits/\' 包含传输协议声明', () => {
      const url = 'chrome://credits/';
      const rslt = noProtocol(url);
      assert.isFalse(rslt);
    });
  });

  run();
}, 0);
