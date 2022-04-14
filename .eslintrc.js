module.exports = {
	root: true,
	parserOptions: {
		parser: "@babel/eslint-parser", // 解析器
		sourceType: "module",
		ecmaVersion: "latest"
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es2021: true
	},
	extends: [
		"eslint:recommended", // eslint
		"plugin:prettier/recommended" // plugin-prettier
	],

	rules: {
		"prettier/prettier": "error"
	}
};
