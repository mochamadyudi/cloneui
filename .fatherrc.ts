import { defineConfig } from 'father';

export default defineConfig({
	esm: {
		input: 'components',
		output: 'es',
		platform: 'browser',
		transformer: 'babel',
		ignores: ['**/demo/**', '**/__tests__/**'],
	},
	cjs: {
		input: 'components',
		output: 'lib',
		platform: 'browser',
		transformer: 'babel',
		ignores: ['**/demo/**', '**/__tests__/**'],
	},
	extraBabelPlugins: [
		[
			'babel-plugin-import',
			{
				libraryName: 'cloneui',
				libraryDirectory: '',
				style: true,
			},
		],
	],
});
