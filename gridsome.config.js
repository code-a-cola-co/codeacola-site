const path = require('path');

function addStyleResource (rule) {
  rule.use(['style-loader', 'css-loader', 'stylus-loader'])
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/base.scss'),
      ],
    })
}

module.exports = {
  siteName: 'code@cola - Javascript Projects',
  siteDescription: 'Open source javascript resources for developers',
  siteUrl: '//codeacola.com',
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: './src/favicon.png',
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
  plugins: [],
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    });
  },
};
