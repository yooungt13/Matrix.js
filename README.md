#Matrix.js

[![Travis](https://img.shields.io/travis/yooungt13/Matrix.js.svg)](https://travis-ci.org/yooungt13/Matrix.js)
[![npm](https://img.shields.io/npm/dt/generator-matrix.svg)](https://www.npmjs.com/package/generator-matrix)
[![Version](https://img.shields.io/npm/v/generator-matrix.svg)](https://www.npmjs.com/package/generator-matrix)
[![npm](https://img.shields.io/npm/l/generator-matrix.svg)]()

> Nodejs scaffold based on Koa. You can transform it to be a matrix monster.

[![MMS](http://static.hello13.net/img/mms.jpg)](http://weibo.com/MMS2015)


##Get Started

### Requirements

  * Mac OS X, Windows, or Linux
  * [Node.js](https://nodejs.org/) v4.2.1 or newer
  * [npm](https://www.npmjs.com/) v3.9.6 or newer
  * [PM2](http://pm2.keymetrics.io/docs/usage/quick-start/) v1.1.3 or newer


### Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
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
│   │   └── build
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
│   ├── recipe              framework startup rule
│   │   ├── template.js
│   │   ├── resource.js
│   │   ├── router.js
│   │   └── middleware.js
│   │
│   ├── model
│   │   ├── datasource      NODE_ENV: st/prod datasource
│   │   └── mock            NODE_ENV: dev     mock datasource
│   │
│   ├── controller
│   ├── middleware
│   ├── extension           extension tools
│   └── app.js              application script
│
├── log                     NODE_ENV: dev     logs
├── index.js                entry point
├── gulpfile.js             workflow script
├── pm2.json
└── package.json
```

### Quick Start

#### 1. Get the latest version

You can start by cloning the latest version of [Matrix.js](https://github.com/yooungt13/Matrix.js) on your
local machine by running:

```shell
$ git clone -o Matrix.js -b master --single-branch \
      https://github.com/yooungt13/Matrix.js.git MyApp
$ cd MyApp
```

Alternatively, you can start a new project based on [Matrix.js](https://github.com/yooungt13/Matrix.js) right from [Yeoman generator](https://www.npmjs.com/package/generator-matrix).

#### 2. Run `npm install`

This will install both run-time project dependencies and developer tools listed
in [package.json](./package.json) file.

#### 3. Run `npm run dev`

This command will start the Node.js server (`node index.js` with [pm2](http://pm2.keymetrics.io/docs/usage/quick-start/)) and gulp task for watching files change to reload.

> [http://localhost:3000/](http://localhost:3000/) — Node.js server <br>
> [http://localhost:3000/](http://localhost:3000/teapot) — Health check<br>
> [http://localhost:3000/](http://localhost:3000/api/data) — API Datasource<br>

Note that the `npm run dev` commond launches the app in `dev` mode, the compiled output files are not optimized and minimized in this case. You can use `prod` argument to launch it in release (production) mode:

```shell
$ npm run prod
```

#### 4. Run `pm2 logs`

This command will output the logs into terminal for checking, or you can check logs in the directory `MyApp/log`.

### How to Update

If you need to keep your project up to date with the recent changes made to Matrix.js,
you can always fetch and merge them from [this repo](https://github.com/yooungt13/Matrix.js)
back into your own project by running:

```shell
$ git checkout master
$ git fetch Matrix.js
$ git merge Matrix.js/master
$ npm install
```


