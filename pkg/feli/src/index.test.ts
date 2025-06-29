//import { describe, it, expect } from 'vitest';
import { describe, it } from 'vitest';
import { feli_cli } from './index';

describe('feli suit', () => {
	it('feli execution', async ({ expect }) => {
		await expect(feli_cli('pubDir', ['--help'])).rejects.toThrowError();
	});
});
