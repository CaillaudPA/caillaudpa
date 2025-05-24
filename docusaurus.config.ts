import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pierre-Antoine Caillaud',
  tagline: 'CTO & Co-founder at AI SmartTalk',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pierre-antoine-caillaud.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'caillaudpa', // Usually your GitHub org/user name.
  projectName: 'personal-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/social-card.jpg',
    navbar: {
      style: 'dark',
      hideOnScroll: true,
      title: 'Pierre-Antoine Caillaud',
      logo: {
        alt: 'Pierre-Antoine Caillaud Logo',
        src: 'img/favicon-512.png',
      },
      items: [
        {
          href: 'https://github.com/caillaudpa',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://linkedin.com/in/pierre-antoine-caillaud',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'LinkedIn Profile',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          className: 'header-language-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'CONNECT:SYS',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/pierre-antoine-caillaud',
              className: 'footer-link-item',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/caillaudpa',
              className: 'footer-link-item',
            },
          ],
        },
        {
          title: 'CONTACT:DATA',
          items: [
            {
              label: 'Email',
              href: 'mailto:pierre-antoine.caillaud@outlook.com',
              className: 'footer-link-item',
            },
            {
              label: 'Phone',
              href: 'tel:+33645814157',
              className: 'footer-link-item',
            },
          ],
        },
      ],
      copyright: `SYS:${new Date().getFullYear()} // Pierre-Antoine Caillaud // END:TRANSMISSION`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
