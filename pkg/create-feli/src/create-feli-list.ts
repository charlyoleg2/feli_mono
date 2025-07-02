// create-feli-list.ts

const template_file_list = [
	'.eslint.config.js',
	'.gitignore',
	'package.json',
	'.prettierignore',
	'README.md',
	'tsconfig.json',
	'src/{{pkgName}}.test.ts',
	'src/{{pkgName}}.ts'
];

export { template_file_list };
