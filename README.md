Feli\_mono
==========


Presentation
------------

The purpose of the project *Feli* is to *install locally* a pure front-end web-app.
*Feli* means **F**rnt **E**nd **L**ocally **I**nstalled.
*feli* is a javascript library for building a static web-server for installing and running locally your front-end web-app.


Requirements
------------

- [node](https://nodejs.org) > 22.0.0
- [npm](https://docs.npmjs.com/cli) > 11.0.0


Installation
------------

```bash
npm i -D feli
```


Usage
-----

Here the typical code for creating a mini-server:

```javascript
import { feli_cli } from '../dist/index.js';
import process from 'node:process';

const scrDir = import.meta.dirname;
const defaultPublicDir = path.join(scrDir, 'public');

try {
	await feli_cli(defaultPublicDir, process.argv);
} catch (err) {
	console.error(`CATCH ERROR: ${err}`);
}
```


Dev
---

In a terminal, run:

```shell
git clone https://github.com/charlyoleg2/feli_mono.git
cd feli_mono
npm install
npm run ci
node pkg/check-feli/dist/check-feli.js
npm run check-feli:run
```


Upgrade dependencies
--------------------

```bash
npm outdated
npm update --save
git commit -am 'npm update --save'
```
or
```bash
npx npm-check-updates
npx npm-check-updates --upgrade
npm install
git commit -am 'npx npm-check-updates --upgrade'
```


Publish a new release
---------------------

```bash
npm run versions
git commit -am 'increment sub-package versions'
npm version patch
git push
git push origin v0.5.3
```

