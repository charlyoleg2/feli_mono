create-feli
===========


Presentation
------------

*create-feli* is the *initializer* used by *npm* for creating a *mini-server* package, usually within a mono-repo. It contains the *command line interface* application called by `npm create feli@latest`.
The *mini-server* package aims at installing locally *your* webUI. The *mini-server* package should be named according to your project-name (e.g. webAppAbc-uis).


Links
-----

- [sources](https://github.com/charlyoleg2/feli_mono)
- [pkg](https://www.npmjs.com/package/create-feli)
- [pages](https://charlyoleg2.github.io/feli_mono/)


Requirements
------------

- [node](https://nodejs.org) > 22.0.0
- [npm](https://docs.npmjs.com/cli) > 11.0.0


Getting started
---------------

```bash
cd XYZ_mono/pkg/
npm create feli@latest
# adjust the script copy_ui for the exact path of copy-from
vim webAppAbc-uis/package.json
# integrate the scripts of webAppAbc-uis into the mono-repo top-level scripts
vim ../package.json
# install the webAppAbc-uis dependencies
npm i
npm run ci
npm run publish
```


Usage
-----

*create-feli* is not intended to be installed directly but rather used via one of the following commands:

```bash
npm create feli@latest
npm create feli@latest webAppAbc-uis
npm init feli@latest webAppAbc-uis
npm exec create-feli@latest webAppAbc-uis
npx create-feli@latest webAppAbc-uis
```

Dev
---

```bash
git clone https://github.com/charlyoleg2/feli_mono
cd feli_mono
npm install
npm -w create-feli run ci
cd pkg/create-feli
npm run clean && npm i && npm run ci && npm run run
```

Rocket stages:
1. npm clean  # start from a clean environment
2. npm i  # install the dependencies of create-feli and in particular those inside feli\_mono/pkg/create-feli/node\_modules
3. npm run ci  # compile create-feli.ts into javascript and copy the directory template
4. npm run run  # execute the javascript create-feli.js that generates the directory tmp/webAppAbc-uis
5. cd tmp/webAppAbc-uis  # move to the generated package
6. npm i  # install the dependencies of the generated package
7. npm run ci  # compile the generated mini-server
8. npm run run  # run the mini-server

