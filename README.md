# markdown-it-prettier

[![NPM version](https://img.shields.io/npm/v/markdown-it-prettier.svg?style=flat)](https://npmjs.com/package/markdown-it-prettier) [![NPM downloads](https://img.shields.io/npm/dm/markdown-it-prettier.svg?style=flat)](https://npmjs.com/package/markdown-it-prettier) [![CircleCI](https://circleci.com/gh/egoist/markdown-it-prettier/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/markdown-it-prettier/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add prettier markdown-it-prettier
```

## Usage

```js
const md = require('markdown-it')()
const prettier = require('markdown-it-prettier')

const options = { singleQuote: true }
md.use(prettier, options)
```

###

In:

````markdown
```js
hello ( "world"
)

class Foo{
log() {return "42"}
}
```
````

Out:

````html
<pre><code class="language-js">hello('world');

class Foo {
  log() {
    return '42';
  }
}
</code></pre>
```
````

### Options

[Prettier options](https://github.com/prettier/prettier#options).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**markdown-it-prettier** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/markdown-it-prettier/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
