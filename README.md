# `@oopsunome/get-urls`

获取文本中所有链接，支持过滤。

## 目录

- [目录](#目录)
- [`getUrls(text, options)`](#geturlstext-options)
    - [安装](#安装)
    - [示例](#示例)
- [命令行](#命令行)
    - [安装](#安装-1)
- [参与开发](#参与开发)
- [贡献指南](#贡献指南)
- [证书](#证书)
- [待办](#待办)

## `getUrls(text, options)`

- `text` {String} 包含链接的文本
- `options` {Object}
  - `exclude` {Array} 指定一个或多个过滤规则
  - `extractFromQueryString` {Boolean} 是否从找到的链接中提取作为查询参数表现的链接
- 返回: {Set} 找到的所有链接

> 暂时仅支持 Node 实现。

#### 安装
```shell
# 使用 NPM
$ npm i @oopsunome/get-urls

# 使用 Yarn
$ yarn add @oopsunome/get-urls
```

#### 示例
```javascript
import fs from 'fs';
import util from 'util';
import getUrls from '@oopsunome/get-urls';

export default async (
  file,
  {
    exclude,
    extractFromQueryString,
  },
) => {
  const pReadFile = util.promisify(fs.readFile);
  return getUrls(
    await pReadFile(file, 'utf8'),
    {
      exclude,
      extractFromQueryString,
    },
  );
};
```

## 命令行

```
$ 使用方式
    $ get-urls <文件> <...> 选项 [...]

  选项
    --out, -o, 指定存储位置，默认：'process.cwd()'，包含文件名，将获取到的链接以文件的形式保存
    --exclude, -f, 指定一个或多个过滤规则
    --extractFromQueryString, 是否从找到的链接中提取作为查询参数内容链接

  示例
    $ get-urls ./playlist.m3u -o ./result.txt -f '(s|jpg)'
```

#### 安装
在全局系统环境下使用的话，需要先全局安装 [@oopsunome/get-urls][@oopsunome/get-urls]，

```shell
# 使用 NPM
$ npm i -g @oopsunome/get-urls

# 使用 Yarn
$ yarn global add @oopsunome/get-urls
```

## 参与开发

**准备开发环境**

详细参见 [SETUP.md][SETUP.md]。

**安装依赖**

[`@oopsunome/get-urls`][@oopsunome/get-urls] 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

**运行**

```shell
yarn start
```

**生产构建**

```shell
yarn build
```

## 贡献指南

仔细查阅 [CONTRIBUTING.md][贡献指南] 以了解详情。

## 证书

[`@oopsunome/get-urls`][@oopsunome/get-urls] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。

## 待办

- [X] 开发的时候使用 `ES 6/7`，支持构建 `ES 5` 模式的模块；
- [ ] 功能测试；
- [ ] 捆绑 [Git 倒钩][Git倒钩]；
- [X] ESlint 检测；
- [X] 生成所有依赖的开源证书；
- [ ] 更新日志；
- [ ] 谁在使用 [`@oopsunome/get-urls`][@oopsunome/get-urls]?
- [ ] 编写 [发布流程指南][发布流程指南]；
- [ ] 编写 [Git 指南][Git指南]；
- [ ] 编写 [命名指南][命名指南]；
- [ ] 编写 [版本指南][版本指南]；
- [ ] 完善 [贡献指南][贡献指南]；
- [ ] 文档：[编码风格指南][编码风格指南]；
- [ ] 使用 [David DM][DavidDM] 实现 `依赖是否最新` 检测；
- [ ] 使用 [Travis CI][TravisCI] 实现持续集成；
- [ ] 使用 [Coveralls][Coveralls] 可视化测试用例覆盖率；
- [ ] 使用 [Codacy][Codacy] 实现代码质量检测；
- [ ] 编写 [开发环境指南][SETUP.md]；
- [ ] 在什么场景下使用 [`@oopsunome/get-urls`][@oopsunome/get-urls]?
- [ ] 文档：在哪里可以获得更多帮助？
- [ ] 文档：设计思想；
- [ ] 文档：维护策略；
- [ ] 性能测试；



[@oopsunome/get-urls]: https://github.com/iTonyYo/get-urls
[SETUP.md]: https://github.com/iTonyYo/get-urls/blob/master/SETUP.md
[贡献指南]: https://github.com/iTonyYo/get-urls/blob/master/CONTRIBUTING.md
[证书]: https://github.com/iTonyYo/get-urls/blob/master/LICENSE.md

[编码风格指南]: #
[版本指南]: #
[命名指南]: #
[Git指南]: #
[发布流程指南]: #
[Git倒钩]: https://github.com/typicode/husky
[DavidDM]: https://david-dm.org/
[TravisCI]: https://travis-ci.org/
[Coveralls]: https://coveralls.io/
[Codacy]: https://www.codacy.com/
[Node]: https://nodejs.org/
