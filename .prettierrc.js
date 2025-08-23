module.exports = {
	pluginSearchDirs: false,
	plugins: [require.resolve('prettier-plugin-organize-imports'), require.resolve('prettier-plugin-packagejson'), require.resolve('@ianvs/prettier-plugin-sort-imports')],
	jsxSingleQuote: false,
	importOrder: ['^(react|react-dom)$', '^([a-z]|@[a-z])', '', '.*'],
	printWidth: 80,
	tabWidth: 2,
	indentWidth: 2,
	useTabs: false,
	semi: true,
	endOfLine: 'lf',
	singleQuote: true,
	trailingComma: 'es5',
	overrides: [{
		'files': '.prettierrc.js', 'options': {
			'parser': 'json',
		},
	}, {
		files: '*.md', options: {
			proseWrap: 'preserve',
		},
	}],
};
