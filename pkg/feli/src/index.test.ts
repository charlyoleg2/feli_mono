import { describe, it, expect } from 'vitest';
//import { describe, it } from 'vitest';
import { feli_cli } from './index';

describe('feli suit', () => {
	it('feli with wrong path', async ({ expect }) => {
		await expect(feli_cli('pubDir', ['node-path', 'script-path'])).rejects.toThrowError();
	});
	it('feli with existing path', async () => {
		expect(
			await feli_cli('scr/public', ['node-path', 'script-path', '--browser=0'])
		).toBeUndefined();
	});
});
