require('babel-register')({
	babelrc: false,
	presets: ['../../../node_modules/babel-preset-env'],
	plugins: ['transform-runtime']
});
