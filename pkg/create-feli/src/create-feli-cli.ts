#!/usr/bin/env node
// create-feli-cli.ts

import * as prom from '@clack/prompts';
import chalk from 'chalk';
import packag from '../package.json';
import { setTimeout as sleep } from 'node:timers/promises';
import { generate_boirlerplate } from './create-feli-api';
//import type { tCfg1, tResp } from './create-feli-common';
import type { tCfg1 } from './create-feli-common';
import { prefixOutputPath } from './create-feli-common';

// first message
const firstMsg =
	`Create a new ${chalk.italic('feli-package')}` +
	` with ${chalk.italic(packag.name)} version ${chalk.italic(packag.version)}`;

console.log(firstMsg);

// get optional package-name from command-line
const pkgNameInit = process.argv[2] || 'webAppAbc-uis';
//console.log(`dbg016: pkgNameInit: ${pkgNameInit}`);

const argN = process.argv.length - 2;
if (argN > 1) {
	console.log(`warn376: ${argN} arguments provided but only one supported!`);
}

// questions
prom.intro(chalk.inverse(' Your new feli-package '));
const pCfg = await prom.group(
	{
		pkgName: () =>
			prom.text({
				message: 'Name of the package?',
				initialValue: `${pkgNameInit}`
				//placeholder: `${pkgNameInit}`
			})
	},
	{
		onCancel: () => {
			prom.cancel('Operation aborted!');
			process.exit(0);
		}
	}
);
prom.outro(`Your package ${pCfg.pkgName} will be boilerplated!`);

const cfg1: tCfg1 = {
	pkgName: pCfg.pkgName
};
const preDir = prefixOutputPath();
const resp = await generate_boirlerplate(cfg1, preDir);
await sleep(100);

// last message
function styl(str: string): string {
	const rStr = chalk.bold.cyan(str);
	return rStr;
}

const lastMsg = `
Next steps:
  1: ${styl(`# adapt the path of copy-from`)}
     ${resp.vim}
  2: ${styl(`# integrate ${pCfg.pkgName} in the mono-repo scripts`)}
     vim ../package.json
  3: ${styl(`# install the dependencies of ${pCfg.pkgName}`)}
     npm install
`;

console.log(lastMsg);

// end of script
