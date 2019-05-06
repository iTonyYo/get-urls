import { assert } from 'chai';
import noInvalidLink from '../src/getUrls/noInvalidLink';

setTimeout(() => {
  describe(
    'noInvalidLink(url)',
    () => {
      it('`http://github.com` 有效链接', () => {
        const url = 'http://github.com';

        assert.doesNotThrow(
          () => {
            noInvalidLink(url);
          },
          '必须提供有效链接',
        );
      });

      it('`https://github.c` 无效链接', () => {
        const url = 'https://github.c';

        assert.throws(
          () => {
            noInvalidLink(url);
          },
          '必须提供有效链接',
        );
      });

      it('`//github.com` 无效链接', () => {
        const url = '//github.com';

        assert.throws(
          () => {
            noInvalidLink(url);
          },
          '必须提供有效链接',
        );
      });

      it('`github.com` 无效链接', () => {
        const url = 'github.com';

        assert.throws(
          () => {
            noInvalidLink(url);
          },
          '必须提供有效链接',
        );
      });
    },
  );

  run();
}, 0);
