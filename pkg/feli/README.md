feli
====


Presentation
------------

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


Usage of the created mini-server
--------------------------------

If you publish your mini-server, you can use it as following

```bash
npm i myMiniServer
npx myMiniServer
npx myMiniServer --help
```


Development
-----------

```bash
git clone https://github.com/charlyoleg2/feli_mono
cd feli_mono
npm install
npm -w feli run ci
npm -w feli run test-feli
```

