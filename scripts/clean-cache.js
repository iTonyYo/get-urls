import trash from 'trash';
import { resolveApp } from './paths';

trash([
  resolveApp('.eslintcache'),
  resolveApp('.cache'),
]);
