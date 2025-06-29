#!/usr/bin/env node
// check-feli.ts

import { feli_cli } from 'feli';
import process from 'node:process';

const scrDir = import.meta.dirname;
const defaultPublicDir = `${scrDir}/public`;

//console.log('check-feli.ts says Hello!');
await feli_cli(defaultPublicDir, process.argv);
//console.log('check-feli.ts says Bye!');
