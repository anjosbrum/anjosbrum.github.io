import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Sobre nós',
      href: getPermalink('/about'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: ' ',
      // links: [
      //   { text: 'Features', href: '#' },
      //   { text: 'Security', href: '#' },
      //   { text: 'Team', href: '#' },
      //   { text: 'Enterprise', href: '#' },
      //   { text: 'Customer stories', href: '#' },
      //   { text: 'Pricing', href: '#' },
      //   { text: 'Resources', href: '#' },
      // ],
    },
    {
      title: ' ',
      // links: [
      //   { text: 'Developer API', href: '#' },
      //   { text: 'Partners', href: '#' },
      //   { text: 'Atom', href: '#' },
      //   { text: 'Electron', href: '#' },
      //   { text: 'AstroWind Desktop', href: '#' },
      // ],
    },
    {
      title: ' ',
      // links: [
      //   { text: 'Docs', href: '#' },
      //   { text: 'Community Forum', href: '#' },
      //   { text: 'Professional Services', href: '#' },
      //   { text: 'Skills', href: '#' },
      //   { text: 'Status', href: '#' },
      // ],
    },
    {
      title: 'Empresa',
      links: [
        {
          text: 'Sobre nós',
          href: getPermalink('/about'),
        },
        {
          text: 'Contacto',
          href: getPermalink('/contact'),
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos', href: getPermalink('/terms') },
    { text: 'Política de Privacidade', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    2025 @ Anjos & Brum
  `,
};
