#Matrix.js

[![Travis](https://img.shields.io/travis/yooungt13/Matrix.js.svg?maxAge=2592000)](https://travis-ci.org/yooungt13/Matrix.js)
[![npm](https://img.shields.io/npm/dt/generator-werewolf.svg?maxAge=2592000)](https://www.npmjs.com/package/generator-matrix)
[![Version](https://img.shields.io/npm/v/generator-matrix.svg)](https://www.npmjs.com/package/generator-matrix)

> Nodejs scaffold based on Koa. You can transform it to be a matrix monster.

##Usage

Start to code:

> npm run dev

If you want to check logs, then run:

> pm2 logs

or the directory /log.



##File Structure

    ├── bin
    │   ├── build.sh            deployment: build shell
    │   └── run.sh              deployment: run shell
    │
    ├── config
    │   ├── defalut.js          default config
    │   ├── dev.js              NODE_ENV: dev config
    │   └── prod.js             NODE_ENV: prod config
    │
    ├── client
    │   ├── resource
    │   │   ├── src
    │   │   │   ├── js
    │   │   │   └── scss
    │   │   │       └── index.scss
    │   │   └── build
    │   │       ├── js
    │   │       │   ├── page
    │   │       │   └── lib
    │   │       └── css
    │   │           └── index.css
    │   └── view
    │       ├── cmp
    │       │   ├── head.html
    │       │   ├── header.html
    │       │   └── footer.html
    │       ├── layout
    │       │   └── default.html
    │       └── page
    │           └── index.html
    │
    ├── server
    │   ├── controller
    │   │   └── index.js
    │   │
    │   ├── middleware
    │   │
    │   ├── model
    │   │   ├── datasource      NODE_ENV: st/prod datasource
    │   │   └── mock            NODE_ENV: dev     mock datasource
    │   │
    │   ├── recipe              framework startup rule
    │   │   ├── template.js
    │   │   ├── resource.js
    │   │   ├── router.js
    │   │   └── middleware.js
    │   │
    │   ├── extension           extension tools
    │   │
    │   └── app.js              application script
    │
    ├── log
    │   ├── out.log
    │   └── error.log
    │
    ├── index.js                entry point
    ├── gulpfile.js             workflow script
    ├── pm2.json
    └── package.json
