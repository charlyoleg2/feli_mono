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
	`Create a new ${chalk.italic('feli-top-repo')}` +
	` with ${chalk.italic(packag.name)} version ${chalk.italic(packag.version)}`;

console.log(firstMsg);

// get optional project-name from command-line
const projName = process.argv[2] || 'blabla';
//console.log(`dbg016: projName: ${projName}`);

const argN = process.argv.length - 2;
if (argN > 1) {
	console.log(`warn376: ${argN} arguments provided but only one supported!`);
}

// questions
prom.intro(chalk.inverse(' Your new feli-top-repo '));
const pCfg = await prom.group(
	{
		projName: () =>
			prom.text({
				message: 'Name of the project?',
				initialValue: `${projName}`
				//placeholder: `${projName}`
			}),
		repoName: () =>
			prom.text({
				message: 'Name of the top-repository?',
				initialValue: `${projName}_uis`
				//placeholder: `${projName}_uis`
			})
	},
	{
		onCancel: () => {
			prom.cancel('Operation aborted!');
			process.exit(0);
		}
	}
);
prom.outro('Your new feli-top-repository will be boilerplated!');

const cfg1: tCfg1 = {
	projName: pCfg.projName,
	repoName: pCfg.repoName
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
  1: ${styl(`cd ${pCfg.repoName}`)}
  2: ${styl(`npm install`)}
  3: ${styl('git init && git add -A && git commit -m "Initial commit"')} (optional)
  4: ${styl(`${resp.vim}`)} (optional)
  5: ${styl(`npm run`)}
  6: ${styl(`npm run vag-list`)}
  7: ${styl(`npm run vag-clone`)}
  8: ${styl(`npm run vag-pull`)}
  9: ${styl(`npm run vag-status`)}
 10: ${styl(`npm run vag-diff`)}
`;

console.log(lastMsg);

// end of script
