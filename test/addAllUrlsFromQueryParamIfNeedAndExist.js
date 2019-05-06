import { assert } from 'chai';

import addAllUrlsFromQueryParamIfNeedAndExist
  from '../src/SetGateway/addAllUrlsFromQueryParamIfNeedAndExist';

setTimeout(() => {
  describe(
    'addAllUrlsFromQueryParamIfNeedAndExist(url, box, options)',
    () => {
      it('未激活 `收集查询参数中的链接` 策略', () => {
        const box = new Set();
        const url = 'http://github.com/iTonyYo?tab=https://git.io/fh7df';

        addAllUrlsFromQueryParamIfNeedAndExist(url, box, false);

        assert.deepEqual(
          box,
          new Set(),
        );
      });

      it('激活 `收集查询参数中的链接` 策略', () => {
        const box = new Set();
        const url = 'http://github.com/iTonyYo?tab=https://git.io/fh7df';

        addAllUrlsFromQueryParamIfNeedAndExist(url, box);

        assert.deepEqual(
          box,
          new Set([
            'https://git.io/fh7df',
          ]),
        );
      });

      it('`url` 参数不仅仅是链接，而且必须包含传输协议声明', () => {
        const box = new Set();
        const url = '//github.com';

        assert.throws(() => {
          addAllUrlsFromQueryParamIfNeedAndExist(url, box);
        }, '必须提供有效链接');
      });
    },
  );

  run();
}, 0);
