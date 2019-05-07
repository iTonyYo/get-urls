import { assert } from 'chai';
import getExclusion from '../src/cli/getExclusion';

setTimeout(() => {
  describe('getExclusion(regEx)', () => {
    it('如果只有一个忽略规则，可以字符串的形式提供，但返回该规则的数组形式', () => {
      const rule = getExclusion('(s|jpg)');

      assert(
        rule,
        ['(s|jpg)'],
      );
    });

    it('可设置多个忽略规则，以数组的形式传入', () => {
      const rule = getExclusion([
        '(s|jpg)',
        '(github)',
      ]);

      assert(
        rule,
        ['(s|jpg)', '(github)'],
      );
    });

    it('传入 `null` 的话，直接报错', () => {
      assert.throws(
        () => {
          getExclusion(null);
        },
        '参数错误: `exclude` 忽略规则仅支持字符串 / 数组, 实际为 null',
      );
    });

    it('传入 `undefined` 的话，直接报错', () => {
      assert.throws(
        () => {
          getExclusion(undefined);
        },
        '参数错误: `exclude` 忽略规则仅支持字符串 / 数组, 实际为 undefined',
      );
    });

    it('传入 `{}` 的话，直接报错', () => {
      assert.throws(
        () => {
          getExclusion({});
        },
        '参数错误: `exclude` 忽略规则仅支持字符串 / 数组, 实际为 [object Object]',
      );
    });

    it('传入 `Set` 的话，直接报错', () => {
      assert.throws(
        () => {
          getExclusion(new Set());
        },
        '参数错误: `exclude` 忽略规则仅支持字符串 / 数组, 实际为 [object Set]',
      );
    });

    it('传入函数的话，直接报错', () => {
      assert.throws(
        () => {
          getExclusion(() => {});
        },
        '参数错误: `exclude` 忽略规则仅支持字符串 / 数组, 实际为 () => {}',
      );
    });

    it('传入 `WeakMap` 的话，直接报错', () => {
      assert.throws(
        () => {
          getExclusion(new WeakMap());
        },
        '参数错误: `exclude` 忽略规则仅支持字符串 / 数组, 实际为 [object WeakMap]',
      );
    });
  });

  run();
}, 0);
