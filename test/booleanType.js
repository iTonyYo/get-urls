import { assert } from 'chai';
import booleanType from '../src/type/booleanType';

setTimeout(() => {
  describe('booleanType(target, errorMessage)', () => {
    it('未提供错误消息的情况下，返回判断结果', () => {
      assert.isTrue(booleanType(true));
    });

    it('传入字符串供判断，提供错误消息，报错', () => {
      assert.throws(
        () => {
          booleanType('', '必须是布尔类型的值');
        },
        '参数错误: 必须是布尔类型的值, 实际为 ',
      );
    });

    it('传入数值供判断，提供错误消息，报错', () => {
      assert.throws(
        () => {
          booleanType(123, '必须是布尔类型的值');
        },
        '参数错误: 必须是布尔类型的值, 实际为 123',
      );
    });

    it('传入函数供判断，提供错误消息，报错', () => {
      assert.throws(
        () => {
          booleanType(() => {}, '必须是布尔类型的值');
        },
        '参数错误: 必须是布尔类型的值, 实际为 () => {}',
      );
    });

    it('传入对象字面量供判断，提供错误消息，报错', () => {
      assert.throws(
        () => {
          booleanType({}, '必须是布尔类型的值');
        },
        '参数错误: 必须是布尔类型的值, 实际为 [object Object]',
      );
    });

    it('传入数组供判断，提供错误消息，报错', () => {
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
