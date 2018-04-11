# slack-rf-doorbell

![npm](https://img.shields.io/npm/v/slack-rf-doorbell.svg) ![license](https://img.shields.io/npm/l/slack-rf-doorbell.svg) ![github-issues](https://img.shields.io/github/issues/weackd/slack-rf-doorbell.svg) ![Circle CI build status](https://circleci.com/gh/weackd/slack-rf-doorbell.svg?style=svg)

A Simple Slack RFX based doorbell

![nodei.co](https://nodei.co/npm/slack-rf-doorbell.png?downloads=true&downloadRank=true&stars=true)

## Features

 - [babel](http://babeljs.io) for ES6/ES7
 - compile to ES5 in `/dist`
 - [tape](https://github.com/substack/tape) unit testing with [zuul runner](https://github.com/defunctzombie/zuul)
 - use [node-readme](http://github.com/revolunet/node-readme)

## QuickStart

Create a new a folder then

```sh
curl -fsSL https://github.com/revolunet/node-babel-boilerplate/archive/master.tar.gz | tar -xz --strip-components=1 node-babel-boilerplate-master
npm i 
git init
```

## Wokflow

- edit your code and commit
- run `npm run build`
- apply semver with `npm version major|minor|patch`
- `npm run publish` to push to github and npm

## Scripts

 - **npm run tunnel** : `npx lt --port 8765 --subdomain slack-rfx-doorbell`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run zuul** : `./node_modules/.bin/zuul --local --open -- spec/**/*.spec.js`
 - **npm run build** : `npm run readme && npx babel -d ./dist ./src`
 - **npm run publish** : `git push && git push --tags && npm publish`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[bluebird](https://www.npmjs.com/package/bluebird) | ^3.5.1 | ✖
[body-parser](https://www.npmjs.com/package/body-parser) | ^1.18.2 | ✖
[express](https://www.npmjs.com/package/express) | ^4.16.3 | ✖
[localtunnel](https://www.npmjs.com/package/localtunnel) | ^1.9.0 | ✖
[rfxcom](https://www.npmjs.com/package/rfxcom) | ^1.0.3 | ✖
[slack](https://www.npmjs.com/package/slack) | ^11.0.0 | ✖
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.26.0 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | * | ✔
[babel-plugin-transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) | ^6.26.0 | ✔
[babel-polyfill](https://www.npmjs.com/package/babel-polyfill) | ^6.26.0 | ✔
[babel-preset-env](https://www.npmjs.com/package/babel-preset-env) | ^1.6.1 | ✔
[babel-tape-runner](https://www.npmjs.com/package/babel-tape-runner) | * | ✔
[babelify](https://www.npmjs.com/package/babelify) | 7.2.0 | ✔
[eslint](https://www.npmjs.com/package/eslint) | * | ✔
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) | * | ✔
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | ^2.10.0 | ✔
[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) | ^6.0.3 | ✔
[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) | ^7.7.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.8 | ✔
[tap-spec](https://www.npmjs.com/package/tap-spec) | ^4.0.2 | ✔
[tape](https://www.npmjs.com/package/tape) | ^4.0.0 | ✔
[zuul](https://www.npmjs.com/package/zuul) | ^3.8.0 | ✔


## Author

Hugo Morosini <hugo.morosini@gmail.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
