#!/usr/bin/env node
// feli.ts

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import fs from 'node:fs';
//import process from 'node:process';
//import path from 'node:path';
import express from 'express';
import open from 'open';
import getport from 'get-port';

import packag from '../package.json';

//const scrDir = import.meta.dirname;

// sub-routines
function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function mini_server(aDirectory: string, aBrowser: boolean, aPort: number) {
	//console.log(`dbg022: aDirectory: ${aDirectory}, aBrowser: ${aBrowser}, aPort: ${aPort}`);
	const chost = '127.0.0.1';

	// sanity checks for aDirectory
	if (aDirectory !== '') {
		if (!fs.existsSync(aDirectory)) {
			const eMsg = `ERR339: Error, the path ${aDirectory} doesn't exist!`;
			//console.error(eMsg);
			//process.exit(-1);
			throw eMsg;
		}
	}

	// port-number logic
	let portnumber = aPort;
	if (portnumber === 0) {
		portnumber = await getport();
	}

	// the main
	const app = express();

	// static content
	if (aDirectory !== '') {
		app.use(express.static(aDirectory));
	}

	// spin the http-server
	app.listen(portnumber, chost, () => {
		console.log(
			`${packag.name} serves on port ${portnumber} for host ${chost} the directory:\n ${aDirectory} ...`
		);
	});

	// open the browser
	await sleep(1000);
	const url = `http://localhost:${portnumber}`;
	if (aBrowser) {
		console.log(`Your browser should open automatically at ${url}`);
		await open(url);
	} else {
		console.log(`Please, open the browser at ${url}`);
	}

	// final message
	console.log('Press ctrl-c to stop this http-server ...');
}

// cli
async function feli_cli(defaultPublicDir: string, argv: string[]) {
	const args = await yargs(hideBin(argv))
		.version(packag.version)
		.usage('Usage: $0 --port <port> --directoy <directory-path>')
		.example([
			[
				'$0 -p 2022 -d MyPublic',
				'run the webserver on port 2022 and serve the content of the folder MyPublic'
			]
		])
		.option('directory', {
			alias: 'd',
			type: 'string',
			description: 'path to the directory to be served.',
			//default: `${__dirname}/webui`,
			//default: path.join(scrDir, 'public')
			default: defaultPublicDir
		})
		.option('browser', {
			alias: 'b',
			type: 'boolean',
			description: 'Open the browser at the corresponding URL.',
			default: true
		})
		.option('port', {
			alias: 'p',
			type: 'number',
			description:
				'port-number used by this web-server. If set to 0 an available port-number is automatically selected',
			default: 0
		})
		.strict()
		.parseAsync();

	await mini_server(args.directory, args.browser, args.port);
}

//console.log('test-feli says Hello!');
//await feli_cli(path.join(scrDir, 'public'), process.argv);
//console.log('test-feli says Bye!');

export { feli_cli };
