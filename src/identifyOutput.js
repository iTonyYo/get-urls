import path from 'path';
import isEmpty from 'lodash/isEmpty';

// 指定存储位置，默认：'process.cwd()'，包
// 含文件名，将获取到的链接以文件的形式保存
export default (out) => {
  if (isEmpty(path.extname(out))) {
    throw Error('`out` 选项中必须包含正确的文件名：文件名.后缀');
  }

  return out;
};
