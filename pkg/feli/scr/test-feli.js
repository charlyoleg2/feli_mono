#!/usr/bin/env node
// test-feli.ts

import { feli_cli } from '../dist/index.js';
import process from 'node:process';
import path from 'node:path':

const scrDir = import.meta.dirname;
const defaultPublicDir = path.join(scrDir, 'public');

//console.log('test-feli.ts says Hello!');
try {
	await feli_cli(defaultPublicDir, process.argv);
} catch (err) {
	console.error(`CATCH ERROR: ${err}`);
}
//console.log('test-feli.ts says Bye!');
