import { assert } from 'chai';
import grabAllUrls from '../src/getUrls/grabAllUrls';

const textEnglish = 'Symlink `pure.zsh` to somewhere in [`$fpath`]( https://www.refining-linux.org/archives/46-ZSH-Gem-12-Autoloading-functions.html ) with the name `prompt_pure_setup`.The [Tomorrow Night Eighties]( https://github.com/chriskempson/tomorrow-theme ) theme with the [Droid Sans Mono]( https://www.fontsquirrel.com/fonts/droid-sans-mono ) font (15pt) is also a [nice combination]( https://github.com/sindresorhus/pure/blob/95ee3e7618c6e2162a1e3cdac2a88a20ac3beb27/screenshot.png ).To have commands colorized as seen in the screenshot, install [zsh-syntax-highlighting]( //github.com/iTonyYo?tab=https://git.io/fh7df ).';

const textChinese = '在全局系统环境下使用的话，需要先全局安装 [@oopsunome/get-urls]( https://github.com/iTonyYo/get-urls )。[`@oopsunome/get-urls`]( https://github.com/iTonyYo/get-urls ) 使用 [`Yarn`]( https://yarnpkg.com/zh-Hans/ ) 包管理器，执行 `yarn install` 安装依赖。//github.com/iTonyYo?tab=https://git.io/fh7df';

setTimeout(() => {
  describe('grabAllUrls(test, extractFromQueryString)', () => {
    it('从一段中文文本中获取所有链接', () => {
      const urls = grabAllUrls(textChinese);
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

    it('忽视查询参数中的链接 #中文文本', () => {
      const urls = grabAllUrls(textChinese, false);
      assert.deepEqual(
        urls,
        new Set([
          'https://github.com/iTonyYo/get-urls',
          'https://yarnpkg.com/zh-Hans',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
        ]),
      );
    });

    it('从一段英文文本中获取所有链接', () => {
      const urls = grabAllUrls(textEnglish);
      assert.deepEqual(
        urls,
        new Set([
          'https://refining-linux.org/archives/46-ZSH-Gem-12-Autoloading-functions.html',
          'https://github.com/chriskempson/tomorrow-theme',
          'https://fontsquirrel.com/fonts/droid-sans-mono',
          'https://github.com/sindresorhus/pure/blob/95ee3e7618c6e2162a1e3cdac2a88a20ac3beb27/screenshot.png',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
          'https://git.io/fh7df',
        ]),
      );
    });

    it('忽视查询参数中的链接 #英文文本', () => {
      const urls = grabAllUrls(textEnglish, false);
      assert.deepEqual(
        urls,
        new Set([
          'https://refining-linux.org/archives/46-ZSH-Gem-12-Autoloading-functions.html',
          'https://github.com/chriskempson/tomorrow-theme',
          'https://fontsquirrel.com/fonts/droid-sans-mono',
          'https://github.com/sindresorhus/pure/blob/95ee3e7618c6e2162a1e3cdac2a88a20ac3beb27/screenshot.png',
          'http://github.com/iTonyYo?tab=https%3A%2F%2Fgit.io%2Ffh7df',
        ]),
      );
    });
  });

  run();
}, 0);
