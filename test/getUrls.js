import { assert } from 'chai';
import getUrls from '../src/getUrls';

const textChinese = '在全局系统环境下使用的话，需要先全局安装 [@oopsunome/get-urls]( https://github.com/iTonyYo/get-urls )。[`@oopsunome/get-urls`]( https://github.com/iTonyYo/get-urls ) 使用 [`Yarn`]( https://yarnpkg.com/zh-Hans/ ) 包管理器，执行 `yarn install` 安装依赖。//github.com/iTonyYo?tab=https://git.io/fh7df';

setTimeout(() => {
  describe('getUrls(test, extractFromQueryString)', () => {
    it('从一段文本中获取所有链接', async () => {
      const urls = await getUrls(textChinese);

      assert.deepEqual(
        urls,
        new Set([
          'https://github.com/iTonyYo/get-urls',
          'https://yarnpkg.com/zh-Hans',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
          'https://git.io/fh7df',
        ]),
      );
    });

    it('设置 `exclude` 选项过滤部分结果', async () => {
      const urls = await getUrls(textChinese, {
        exclude: ['(github)'],
      });

      assert.deepEqual(
        urls,
        new Set([
          'https://yarnpkg.com/zh-Hans',
          'https://git.io/fh7df',
        ]),
      );
    });

    it('忽略查询字符串中的链接', async () => {
      const urls = await getUrls(textChinese, {
        extractFromQueryString: false,
      });

      assert.deepEqual(
        urls,
        new Set([
          'https://github.com/iTonyYo/get-urls',
          'https://yarnpkg.com/zh-Hans',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
        ]),
      );
    });
  });

  run();
}, 0);
