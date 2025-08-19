import {themes as prismThemes} from 'prism-react-renderer';

const darkCodeTheme = prismThemes.dracula;
const lightCodeTheme = prismThemes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Daniel De Lucca',
  tagline: 'Staff Software Engineer',
  url: 'https://delucca.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-CSNP98NHMX',
        anonymizeIP: true,
      },
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
    companyName: 'DoorDash',
    companyURL: 'https://doordash.com',
    githubURL: 'https://github.com/delucca',
    twitterURL: 'https://twitter.com/deluccadev',
    linkedinURL: 'https://linkedin.com/in/danieldelucca',
  },
};

module.exports = config;
