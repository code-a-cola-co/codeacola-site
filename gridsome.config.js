module.exports = {
  siteName: 'code@cola - Javascript Projects',
  siteDescription: 'Open source javascript projects for developers.',
  siteUrl: '//codeacola.com',
  icon: {
    favicon: {
      src: './src/assets/images/favicon.png',
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: './src/assets/images/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
  plugins: []
}
