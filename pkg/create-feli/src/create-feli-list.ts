// create-feli-list.ts

const template_file_list = [
	'.gitignore',
	'.prettierignore',
	'README.md',
	'eslint.config.js',
	'package.json',
	'tsconfig.json',
	'src/{{pkgName}}.test.ts',
	'src/{{pkgName}}.ts'
];

export { template_file_list };
