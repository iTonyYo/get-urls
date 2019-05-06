import { assert } from 'chai';

import setType from '../src/getUrls/setType';

setTimeout(() => {
  describe('setType(target, errorMessage)', () => {
    const errorMessage = '`target` 必须是 `Set` 对象';

    it('`target` 不可以是函数', () => {
      const target = () => {};

      assert.throws(() => {
        setType(target, errorMessage);
      }, errorMessage);
    });

    it('`target` 不可以是数值', () => {
      const target = 200;

      assert.throws(() => {
        setType(target, errorMessage);
      }, errorMessage);
    });

    it('`target` 不可以是字符串', () => {
      const target = '(s|jpg)';

      assert.throws(() => {
        setType(target, errorMessage);
      }, errorMessage);
    });

    it('`target` 不可以是布尔', () => {
      const target = true;

      assert.throws(() => {
        setType(target, errorMessage);
      }, errorMessage);
    });

    it('`target` 不可以是对象字面量', () => {
      const target = {};

      assert.throws(() => {
        setType(target, errorMessage);
      }, errorMessage);
    });
  });

  run();
}, 0);
