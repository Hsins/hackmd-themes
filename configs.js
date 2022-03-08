// API CONFIG
export const HACKMD_API_URL = 'https://api.hackmd.io/v1/';
export const HACKMD_API_TOKEN = process.env.HACKMD_API_TOKEN;

// PATH CONFIG
export const stylePath = './dist';
export const themePath = './themes';

// THEMES CONFIG
export const themes = [
  {
    slug: 'theme-test',
    noteId: 'ykqwOaKeTrqrG7LAAUxkzw',
    styleFile: 'test.css',
    themeFile: 'test.md',
    metadata: {
      name: 'HackMD Theme: TEST',
      description:
        'Use `{%hackmd @Hsins/theme-test %}` syntax to include this theme.',
      tags: ['HackMD-Theme'],
    },
  },
];
