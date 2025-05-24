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
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Pierre-Antoine Caillaud',
      logo: {
        alt: 'Pierre-Antoine Caillaud Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          to: '/experience',
          label: 'Experience',
          position: 'left',
        },
        {
          to: '/skills',
          label: 'Skills',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/caillaudpa',
          label: 'GitHub',
          position: 'right',
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
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/pierre-antoine-caillaud',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/caillaudpa',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:pierre-antoine.caillaud@outlook.com',
            },
            {
              label: 'Phone',
              href: 'tel:+33645814157',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pierre-Antoine Caillaud. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
