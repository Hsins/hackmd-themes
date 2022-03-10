import log from 'log-beautify';
import axios from 'axios';
import { writeFile, readFileSync } from 'fs';
import { stylePath, themePath, HACKMD_API_URL, HACKMD_API_TEAM, HACKMD_API_TOKEN } from '../configs.js';

const getMetadata = (theme) => {
  return (
    '---\n' +
    `title: "${theme.metadata.name}"\n` +
    `description: "${theme.metadata.description}"\n` +
    `tags: ${theme.metadata.tags.join(', ')}\n` +
    'breaks: false\n' +
    '---\n'
  );
};

const getStyle = (theme) => {
  const filePath = `${stylePath}/${theme.styleFile}`;
  const minifiedCss = readFileSync(filePath, 'utf-8');

  return `<style>\n` + `${minifiedCss}\n` + `</style>\n`;
};

const updateTheme = (theme, content) => {
  const filePath = `${themePath}/${theme.themeFile}`;

  writeFile(filePath, content, (err) => {
    if (err) throw err;
    log.success(`Theme update: ${filePath} (${theme.slug}).`);
  });
};

const uploadTheme = (theme, content) => {
  const axiosConfig = {
    method: 'patch',
    url: `${HACKMD_API_URL}/teams/${HACKMD_API_TEAM}/notes/${theme.noteId}`,
    headers: {
      'Authorization': HACKMD_API_TOKEN,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ content }),
  };

  axios(axiosConfig)
    .then((response) => log.success(`Theme upload: ${theme.slug}.`))
    .catch((error) => log.error(error));
};

export { getMetadata, getStyle, updateTheme, uploadTheme };