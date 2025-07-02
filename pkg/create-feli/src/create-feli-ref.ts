#!/usr/bin/env node
// create-feli-ref.ts

import { setTimeout as sleep } from 'node:timers/promises';
import { generate_boirlerplate } from './create-feli-api';
//import type { tCfg1, tResp } from './create-feli-common';
import type { tCfg1 } from './create-feli-common';
//import { firstLetterCapital, prefixOutputPath } from './create-feli-common';

// get optional preDir from command-line
const preDir = process.argv[2] || 'tmp2';
//console.log(`dbg019: preDir: ${preDir}`);

const argN = process.argv.length - 2;
if (argN > 1) {
	console.log(`warn376: ${argN} arguments provided but only one supported!`);
}

const projName = 'webAppAbc-uis';
const cfg1: tCfg1 = {
	pkgName: `${pkgName}`
};
await generate_boirlerplate(cfg1, preDir);
await sleep(100); // for fun

// end of script
