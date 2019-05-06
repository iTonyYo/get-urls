// 待办： 区分不同格式持久化保存引擎

import { assert } from 'chai';

import noEmptyText from '../src/getUrls/noEmptyText';

setTimeout(() => {
  describe('noEmptyText(text)', () => {
    it('无法处理空文本', () => {
      const text = '';
      assert.throws(() => {
        noEmptyText(text);
      }, '无法处理空文本');
    });

    it('无法处理除文本之外的数据: 对象字面量', () => {
      const text = {};
      assert.throws(() => {
        noEmptyText(text);
      }, '无法处理除文本之外的数据');
    });

    it('无法处理除文本之外的数据: 数组', () => {
      const text = [];
      assert.throws(() => {
        noEmptyText(text);
      }, '无法处理除文本之外的数据');
    });

    it('无法处理除文本之外的数据: 布尔', () => {
      const text = true;
      assert.throws(() => {
        noEmptyText(text);
      }, '无法处理除文本之外的数据');
    });

    it('无法处理除文本之外的数据: 数值', () => {
      const text = 123;
      assert.throws(() => {
        noEmptyText(text);
      }, '无法处理除文本之外的数据');
    });

    it('无法处理除文本之外的数据: 函数', () => {
      const text = () => {};
      assert.throws(() => {
        noEmptyText(text);
      }, '无法处理除文本之外的数据');
    });
  });

  run();
}, 0);
