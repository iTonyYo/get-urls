import { assert } from 'chai';

import arrayType from '../src/type/arrayType';

setTimeout(() => {
  describe('arrayType(target, errorMessage)', () => {
    it('未提供错误消息的情况下，返回判断结果', () => {
      assert.isTrue(arrayType([]));
    });

    it('`exclude` 不可以是对象字面量 #提供错误消息', () => {
      const exclusion = {};

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是函数 #提供错误消息', () => {
      const exclusion = () => ({});

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是数值 #提供错误消息', () => {
      const exclusion = 200;

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是字符串 #提供错误消息', () => {
      const exclusion = '(s|jpg)';

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });

    it('`exclude` 不可以是布尔 #提供错误消息', () => {
      const exclusion = true;

      assert.throws(() => {
        arrayType(exclusion, '`exclude` 选项必须是数组');
      }, '`exclude` 选项必须是数组');
    });
  });

  run();
}, 0);
