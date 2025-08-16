import os from 'node:os';
import { defineConfig } from 'dumi';

// @ts-ignore
import { homepage, name, version } from './package.json';

const themeConfig = {
	name: 'K-UI',
	logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
	apiHeader: {
		pkg: name,
		sourceUrl: `{github}/tree/main/src/components`,
		docUrl: `{github}/tree/main/demo/components`,
	},
	footer: 'Made with Yuyuid Technologies',
	socialLinks: {},
};
export default defineConfig({
	themeConfig,
	plugins: ['dumi-plugin-color-chunk'],
	// For <Link prefetch />
	routePrefetch: {},
	manifest: {},

	conventionRoutes: {
		// to avoid generate routes for .dumi/pages/index/components/xx
		exclude: [],
	},

	hash: true,
	mfsu: false,
	mako: ['Darwin', 'Linux'].includes(os.type()) ? {} : false,
	crossorigin: {},
	runtimePublicPath: {},
	outputPath: '_site',
	resolve: {
		docDirs: [{ type: 'doc', dir: 'docs' }],
		atomDirs: [{ type: 'component', dir: 'components' }],
		codeBlockMode: 'passive',
	},
	define: {
		kuiReproduceVersion: version,
	},
});
