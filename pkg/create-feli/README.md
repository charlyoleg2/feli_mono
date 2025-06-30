create-feli
===========


Presentation
------------

*create-feli* is the *initializer* used by *npm* for creating a new *feli* package, usually within a mono-repo. It contains the *command line interface* application called by `npm create feli@latest`.


Links
-----

- [sources](https://github.com/charlyoleg2/feli_mono)
- [pkg](https://www.npmjs.com/package/create-feli)
- [pages](https://charlyoleg2.github.io/feli_mono/)


Requirements
------------

- [node](https://nodejs.org) > 20.10.0
- [npm](https://docs.npmjs.com/cli) > 10.5.0


Usage
-----

*create-feli* is not intended to be installed directly but rather used via one of the following commands:

```bash
npm create feli@latest
npm create feli@latest projAbc
npm init feli@latest projAbc
npm exec create-feli@latest projAbc
npx create-feli@latest projAbc
```

Dev
---

```bash
git clone https://github.com/charlyoleg2/feli_mono
cd feli_mono
npm install
npm run ci
```

