import Default from '@/layouts/Default.vue';
import links from '@/links.js';
import metas from '@/metas.js';
import scripts from '@/scripts.js';

export default function (Vue, { router, head, isClient }) {

  Vue.component('Layout', Default);

  metas.forEach(tag => head.meta.push(tag));
  links.forEach(link => head.link.push(link));
  scripts.forEach(link => head.script.push(link));

  head.htmlAttrs = { lang: 'en' };

}
