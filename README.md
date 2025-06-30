Feli\_mono
==========


Presentation
------------

The purpose of the project *Feli* is to *install locally* a pure front-end web-app.

*Feli* means **F**rnt **E**nd **L**ocally **I**nstalled.


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


