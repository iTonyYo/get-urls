import { assert } from 'chai';
import getOutput from '../src/cli/getOutput';
import resolveRoot from '../src/cli/resolveRoot';

setTimeout(() => {
  describe('getOutput(pathWithFile)', () => {
    it('支持传入相对路径', () => {
      const out = './test/result.txt';
      const outcome = getOutput('./test/result.txt');

      assert(outcome, resolveRoot(out));
    });

    it('支持传入绝对路劲', () => {
      const out = './test/result.txt';
      const outcome = getOutput(resolveRoot(out));

      assert(outcome, resolveRoot(out));
    });

    it('`.` 这样的路径是错误的，因为没有标明文件名与后缀', () => {
      assert.throws(
        () => {
          getOutput('.');
        },
        '参数错误: `out` 输出路径须包含正确的文件名：文件名.后缀, 实际为 .',
      );
    });

    it('`./report` 这样的路径同样是错误的，也没有标明文件名与后缀', () => {
      assert.throws(
        () => {
          getOutput('./report');
        },
        '参数错误: `out` 输出路径须包含正确的文件名：文件名.后缀, 实际为 ./report',
      );
    });

    it('传入 `null` 的话，直接报错', () => {
      assert.throws(
        () => {
          getOutput(null);
        },
        '参数错误: `out` 输出路径是字符串类型的, 实际为 null',
      );
    });

    it('传入 `{}` 的话，直接报错', () => {
      assert.throws(
        () => {
          getOutput({});
        },
        '参数错误: `out` 输出路径是字符串类型的, 实际为 [object Object]',
      );
    });
  });

  run();
}, 0);
