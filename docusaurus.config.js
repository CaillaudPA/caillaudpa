// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pierre-Antoine Caillaud',
  tagline: 'CTO & Co-founder at AI SmartTalk',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'caillaudpa', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        style: 'dark',
        hideOnScroll: true,
        items: [
          {
            href: 'https://github.com/caillaudpa',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://www.linkedin.com/in/your-linkedin',
            position: 'right',
            className: 'header-linkedin-link',
            'aria-label': 'LinkedIn Profile',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/caillaudpa',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/your-linkedin',
              },
            ],
          },
        ],
        copyright: `SYS:${new Date().getFullYear()} // Pierre-Antoine Caillaud // END:TRANSMISSION`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config; 