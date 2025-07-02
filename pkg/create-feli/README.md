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
```

