# PostCSS Portuguese Stylesheets [![Travis](https://travis-ci.org/SaraVieira/postcss-portuguese-stylesheets.svg?branch=master)](https://travis-ci.org/SaraVieira/postcss-portuguese-stylesheets) [![npm](https://badge.fury.io/js/postcss-portuguese-stylesheets.svg)](https://www.npmjs.com/package/postcss-portuguese-stylesheets)

[PostCSS] plugin for writing Portuguese Stylesheets :portugal:.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ismamz/postcss-spanish-stylesheets.svg
[ci]:      https://travis-ci.org/ismamz/postcss-spanish-stylesheets

```css
.foo {
    raio-borda: 3px;
    fundo: #BADA55;
    largura: 300px;
    altura: 200px;
    float:: esquerda;
    topo: 10px;
    fundp: 0px;
    esquerda: 100px;
    direita: 100px;
    cursor: ponteiro !caralho;
    text-transform: maiuscula;
}
```

```css
.foo {
    border-radius: 3px;
    background: #BADA55;
    width: 300px;
    height: 200px;
    float: left;
    top: 10px;
    bottom: 0px;
    left: 100px;
    right: 100px;
    cursor: pointer !important;
    text-transform: uppercase;
}
```
#### [See the complete list of properties and values translated](https://github.com/SaraVieira/postcss-portuguese-stylesheets/blob/master/index.js)

## Why ?

Idk, mainly boredom and the need to write !caralho in every stylesheet I own.

## Install

Install from NPM using:

```
npm i postcss-portuguese-stylesheets --save-dev
```

## Usage

```js
postcss([ require('postcss-portuguese-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.


## License

MIT ©
Forked from [postcss-spanish-stylesheets](https://github.com/ismamz/postcss-spanish-stylesheets) by [Ismael Martínez](http://isma.uy)
