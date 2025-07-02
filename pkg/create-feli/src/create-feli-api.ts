// create-feli-api.ts

import { setTimeout as sleep } from 'node:timers/promises';
import { readFile, writeFile, access, mkdir } from 'node:fs/promises';
//import { Buffer } from 'node:buffer';
import { dirname, extname } from 'path';
import Handlebars from 'handlebars';
import type { tCfg1, tCfg2, tResp } from './create-feli-common';
import { firstLetterCapital, underline } from './create-feli-common';
import { template_file_list } from './create-feli-list';

async function createMissingDir(outPath: string): Promise<void> {
	// create missing output directory
	const outDir = dirname(outPath);
	try {
		await access(outDir);
	} catch (err) {
		//console.log(`create the directory ${outDir}`);
		//console.log(err);
		if (err) {
			await mkdir(outDir, { recursive: true });
		}
	}
}

function isFileBinary(fpath: URL): boolean {
	const binaryExts = new Set(['.png']);
	const infileExt = extname(fpath.toString());
	const rBool = binaryExts.has(infileExt);
	//if (rBool) {
	//	console.log(`dbg732: file ${fpath.toString()} is a binary file`);
	//}
	return rBool;
}

async function oneFile(onePath: string, cfg2: tCfg2, preDir: string): Promise<void> {
	try {
		// compute read and write path
		const onePathIn = Handlebars.compile(onePath)({
			pkgName: 'webAppXyz-uis'
		});
		const onePathOut = Handlebars.compile(onePath)(cfg2);
		// try to read the file.handlebars. If it doesn"t exist, just copy the file
		const fileIn1 = new URL(`./template/${onePathIn}.handlebars`, import.meta.url);
		const fileIn2 = new URL(`./template/${onePathIn}`, import.meta.url);
		let fileBin = false;
		let fileStr2 = '';
		//let fileBuffer2 = Buffer.alloc(0);
		const outPath = `${preDir}/${cfg2.pkgName}/${onePathOut}`;
		try {
			await access(fileIn1);
			try {
				const fileStr1 = await readFile(fileIn1, { encoding: 'utf8' });
				//console.log(fileStr1);
				// do the conversion
				const templateStr = Handlebars.compile(fileStr1);
				fileStr2 = templateStr(cfg2);
			} catch (err) {
				console.log(`err392: error while processing ${fileIn1.toString()}`);
				console.log(err);
			}
		} catch (err) {
			//console.log(err);
			if (err) {
				if (isFileBinary(fileIn2)) {
					fileBin = true;
					const fileBuffer2 = await readFile(fileIn2);
					await createMissingDir(outPath);
					await writeFile(outPath, fileBuffer2);
				} else {
					fileStr2 = await readFile(fileIn2, { encoding: 'utf8' });
				}
			}
		}
		//console.log(fileStr2);
		// write the output file\
		if (!fileBin) {
			await createMissingDir(outPath);
			await writeFile(outPath, fileStr2);
			//} else {
			//await writeFile(outPath, fileBuffer2);
		}
	} catch (err) {
		console.log(`err213: error while generating file ${onePath}`);
		console.error(err);
		throw `err214: error with path ${onePath}`;
	}
}

async function generate_boirlerplate(cfg1: tCfg1, preDir: string): Promise<tResp> {
	console.log(`Boilerplate with:
  package name     : ${cfg1.pkfName}`);
	const cfg2: tCfg2 = {
		pkgName: cfg1.pkgName,
		PkgName: firstLetterCapital(cfg1.pkgName),
		PkgNameUnderline: underline(cfg1.pkgName)
	};
	//console.log(`dbg102: PkgNameUnderline: ${cfg2.PkgNameUnderline}`);
	for (const fpath of template_file_list) {
		await oneFile(fpath, cfg2, preDir);
	}
	console.log(`generate ${template_file_list.length} files in ${preDir}/${cfg1.pkgName}/`);
	await sleep(100);
	const rResp: tResp = {
		vim: `vim ${cfg1.pkgName}/src/${cfg1.pkgName}.ts`
	};
	return rResp;
}

export { generate_boirlerplate };
