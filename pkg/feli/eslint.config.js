// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
	{
		ignores: ['dist/', 'tmp/', 'build/', 'node_modules/', 'scr/']
	},
	eslint.configs.recommended,
	//...tseslint.configs.recommended,
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,
	prettier
);
