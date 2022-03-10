// API CONFIG
export const HACKMD_API_URL = 'https://api.hackmd.io/v1/';
export const HACKMD_API_TEAM = 'themes';
export const HACKMD_API_TOKEN = process.env.HACKMD_API_TOKEN;

// PATH CONFIG
export const stylePath = './dist';
export const themePath = './themes';

// THEMES CONFIG
export const themes = [
  {
    slug: 'dracula',
    noteId: 'WDQfWEcMTZC_4bfjqr8Kdg',
    styleFile: 'dracula.css',
    themeFile: 'dracula.md',
    metadata: {
      name: 'HackMD Theme - Dracula',
      description:
        'Use `{%hackmd @themes/dracula %}` syntax to include this theme.',
      tags: ['HackMD-Theme'],
    },
  },
  {
    slug: 'notion',
    noteId: 'miNJoYSqTJu0n41E-FjIRA',
    styleFile: 'notion.css',
    themeFile: 'notion.md',
    metadata: {
      name: 'HackMD Theme - Notion',
      description:
        'Use `{%hackmd @themes/notion %}` syntax to include this theme.',
      tags: ['HackMD-Theme'],
    },
  },
  {
    slug: 'theme-orangeheart',
    noteId: 'H_sjdnx5RvG8B7qaoTRwww',
    styleFile: 'orangeheart.css',
    themeFile: 'orangeheart.md',
    metadata: {
      name: 'HackMD Theme - OrangeHeart',
      description:
        'Use `{%hackmd @themes/orangeheart %}` syntax to include this theme.',
      tags: ['HackMD-Theme'],
    },
  },
];
