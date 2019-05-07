# `@oopsunome/get-urls`

获取文本中所有链接，支持过滤。

## 目录

- [`getUrls(text, options)`](#geturlstext-options)
    - [安装](#安装)
    - [示例](#示例)
- [命令行界面](#命令行界面)
    - [安装](#安装-1)
- [贡献指南](#贡献指南)
- [证书](#证书)

## `getUrls(text, options)`

- `text` {String} 包含链接的文本
- `options` {Object}
  - `exclude` {Array} 指定一个或多个过滤规则
  - `extractFromQueryString` {Boolean} 是否从找到的链接中提取作为查询参数表现的链接
- 返回: {Set} 找到的所有链接

> 暂时仅支持 [Node][Node] 实现。

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

## 命令行界面

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

## 贡献指南

仔细查阅 [CONTRIBUTING.md][贡献指南] 以了解详情。

## 证书

[`@oopsunome/get-urls`][@oopsunome/get-urls] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。



[@oopsunome/get-urls]: https://github.com/iTonyYo/get-urls
[SETUP.md]: https://github.com/iTonyYo/get-urls/blob/master/SETUP.md
[贡献指南]: https://github.com/iTonyYo/get-urls/blob/master/CONTRIBUTING.md
[证书]: https://github.com/iTonyYo/get-urls/blob/master/LICENSE.md

[Node]: https://nodejs.org/
