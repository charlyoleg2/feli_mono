import { describe, it, expect } from 'vitest';
import { feli_cli } from './feli';

describe('feli suit', () => {
	it('feli execution', () => {
		expect(await feli_cli('pubDir', ['--help'])).toBeUndefined();
	});
});
