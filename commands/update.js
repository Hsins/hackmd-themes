import { getMetadata, getStyle, updateTheme, uploadTheme } from './utils.js';
import { themes } from '../configs.js';

themes.forEach((theme) => {
  const metadata = getMetadata(theme);
  const style = getStyle(theme);

  const content = metadata + '\n' + style;
  updateTheme(theme, content);
  uploadTheme(theme, content);
});
