import { assert } from 'chai';
import booleanType from '../src/getUrls/booleanType';

setTimeout(() => {
  describe('booleanType(target, errorMessage)', () => {
    it('提供字符串，报错', () => {
      assert.throws(
        () => {
          booleanType('', '必须是布尔类型的值');
        },
        '必须是布尔类型的值',
      );
    });

    it('提供数值，报错', () => {
      assert.throws(
        () => {
          booleanType(123, '必须是布尔类型的值');
        },
        '必须是布尔类型的值',
      );
    });

    it('提供函数，报错', () => {
      assert.throws(
        () => {
          booleanType(() => {}, '必须是布尔类型的值');
        },
        '必须是布尔类型的值',
      );
    });

    it('提供对象字面量，报错', () => {
      assert.throws(
        () => {
          booleanType({}, '必须是布尔类型的值');
        },
        '必须是布尔类型的值',
      );
    });

    it('提供数组，报错', () => {
      assert.throws(
        () => {
          booleanType([], '必须是布尔类型的值');
        },
        '必须是布尔类型的值',
      );
    });
  });

  run();
}, 0);
