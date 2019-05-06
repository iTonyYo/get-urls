// 待办： 区分不同格式持久化保存引擎

import { assert } from 'chai';

import arrayType from '../src/getUrls/arrayType';

setTimeout(() => {
  describe('arrayType(target, errorMessage)', () => {
    it('`exclude` 不可以是对象字面量', () => {
      const exclusion = {};

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是函数', () => {
      const exclusion = () => ({});

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是数值', () => {
      const exclusion = 200;

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是字符串', () => {
      const exclusion = '(s|jpg)';

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是布尔', () => {
      const exclusion = true;

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });
  });

  run();
}, 0);
