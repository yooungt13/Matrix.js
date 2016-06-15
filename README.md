Start to code:

> npm run dev

OR

> node app.js & gulp


If you want to check logs, then run:

> pm2 logs



#file structure

    ├── bin
    │   ├── build.sh      deployment: build shell
    │   └── run.sh        deployment: run shell
    │
    ├── config
    │   ├── defalut.js    defalut config
    │   ├── dev.js        NODE_ENV: dev config
    │   └── prod.js       NODE_ENV: prod config
    │
    ├── controller
    │   └── index.js
    │
    ├── environment
    │   ├── helper        extension helper
    │   ├── middelware
    │   ├── recipe        framework startup flow
    │   │   ├── template.js
    │   │   ├── static.js
    │   │   ├── router.js
    │   │   └── middleware.js
    │   └── app.js        application script
    │
    ├── log
    │   ├── out.log
    │   └── error.log
    │
    ├── model
    │   ├── datasource    NODE_ENV: st/prod datasource
    │   └── mock          NODE_ENV: dev     mock datasource
    │
    ├── public
    │   ├── js
    │   │   ├── page
    │   │   └── lib
    │   ├── css
    │   │   └── index.css
    │   └── scss
    │
    ├── views
    │   ├── cmp
    │   │   ├── head.html
    │   │   ├── header.html
    │   │   └── footer.html
    │   ├── layout
    │   │   └── default.html
    │   └── page
    │       └── index.html
    │
    ├── index.js          entry point
    ├── gulpfile.js       workflow script
    ├── pm2.json
    └── package.json