// API CONFIG
export const HACKMD_API_URL = 'https://api.hackmd.io/v1/';
export const HACKMD_API_TOKEN = process.env.HACKMD_API_TOKEN;

// PATH CONFIG
export const stylePath = './dist';
export const themePath = './themes';

// THEMES CONFIG
export const themes = [
  {
    slug: 'theme-dracula',
    noteId: 'uQjC_6k6SMiVVfRmM8sT8Q',
    styleFile: 'dracula.css',
    themeFile: 'dracula.md',
    metadata: {
      name: 'HackMD Theme - Dracula',
      description:
        'Use `{%hackmd @Hsins/theme-dracula %}` syntax to include this theme.',
      tags: ['HackMD-Theme'],
    },
  },
  {
    slug: 'theme-notion',
    noteId: 'apDKTl3FRzG2MMi8U2L4Mw',
    styleFile: 'notion.css',
    themeFile: 'notion.md',
    metadata: {
      name: 'HackMD Theme - Notion',
      description:
        'Use `{%hackmd @Hsins/theme-notion %}` syntax to include this theme.',
      tags: ['HackMD-Theme'],
    },
  },
  {
    slug: 'theme-orangeheart',
    noteId: 'ofm1jotJToqD6zfwrSeKdA',
    styleFile: 'orangeheart.css',
    themeFile: 'orangeheart.md',
    metadata: {
      name: 'HackMD Theme - OrangeHeart',
      description:
        'Use `{%hackmd @Hsins/theme-orangeheart %}` syntax to include this theme.',
      tags: ['HackMD-Theme'],
    },
  },
];
