import os from 'node:os';
import { defineConfig } from 'dumi';
import { SiteThemeConfig } from 'dumi-theme-antd-style';

// @ts-ignore
import { homepage, name, version } from './package.json';

const themeConfig: SiteThemeConfig = {
  name: 'CloneUI',
  logo: 'https://bmw.astra.co.id/wp-content/uploads/2023/07/BMW.svg_.png',
  github: homepage,
  apiHeader: {
    pkg: name,
    match: ['/api', '/components'],
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
  },

  hideNameOnHeader: false,
  footer: 'Made with Yuyuid Technologies',
  socialLinks: {},
  hideHomeNav: true,
  footerConfig: {
    columns: [],
  },
};
export default defineConfig({
  themeConfig,
  routePrefetch: {},
  manifest: {},
  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [/index\/components/],
  },
  hash: true,
  mfsu: false,
  mako: ['Darwin', 'Linux'].includes(os.type()) ? {} : false,
  crossorigin: {},
  runtimePublicPath: {},
  outputPath: '_site',
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
    { id: 'id-ID', name: 'Indonesia', suffix: '-id' },
  ],
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
  },
  define: {
    cloneUIReproduceVersion: version,
  },
});
