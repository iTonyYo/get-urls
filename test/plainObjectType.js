import { assert } from 'chai';

import plainObjectType from '../src/getUrls/plainObjectType';

setTimeout(() => {
  describe('plainObjectType(target, errorMessage)', () => {
    const errorMessage = '`target` 选项必须是对象字面量';

    it('`target` 不可以是函数', () => {
      const target = () => {};

      assert.throws(() => {
        plainObjectType(target, errorMessage);
      }, errorMessage);
    });

    it('`target` 不可以是数值', () => {
      const target = 200;

      assert.throws(() => {
        plainObjectType(target, errorMessage);
      }, errorMessage);
    });

    it('`target` 不可以是字符串', () => {
      const target = '(s|jpg)';

      assert.throws(() => {
        plainObjectType(target, errorMessage);
      }, errorMessage);
    });

    it('`target` 不可以是布尔', () => {
      const target = true;

      assert.throws(() => {
        plainObjectType(target, errorMessage);
      }, errorMessage);
    });
  });

  run();
}, 0);
