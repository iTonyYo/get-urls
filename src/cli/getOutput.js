import { extname } from 'path';

import isEmpty from 'lodash/isEmpty';

import stringType from '../type/stringType';
import resolveRoot from './resolveRoot';

// 存储位置，默认：'process.cwd()'，包
// 含文件名
export default (out = process.cwd()) => {
  stringType(out, '`out` 输出路径是字符串类型的');

  if (isEmpty(extname(out))) {
    throw Error(
      `参数错误: \`out\` 输出路径须包含正确的文件名：文件名.后缀, 实际为 ${out}`,
    );
  }

  return resolveRoot(out);
};
