const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'delucca',
  tagline: 'Software Architect',
  url: 'https://delucca.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/delucca/www/tree/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/delucca/www/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'delucca',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Resources',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  customFields: {
    email: 'www@delucca.dev',
    companyName: 'Trilon',
    companyURL: 'https://trilon.io',
    githubURL: 'https://github.com/delucca',
    twitterURL: 'https://twitter.com/deluccadev',
    linkedinURL: 'https://linkedin.com/in/danieldelucca',
  },
};

module.exports = config;
