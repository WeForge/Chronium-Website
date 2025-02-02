import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  disableThemeSwitch: true,
  githubUrl: 'https://github.com/weforge/chronium',
  nav: {
    title: 'Chronium',
    transparentMode: 'always',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Support Server',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};