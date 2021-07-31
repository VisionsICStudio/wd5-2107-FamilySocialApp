# stylelint-rational-order-plugin

[![NPM version][version-img]][npm-url] [![Build status][ci-img]][ci-url] [![License][l-img]][l-url]

[npm-url]: https://www.npmjs.com/package/stylelint-rational-order-plugin
[version-img]: https://img.shields.io/npm/v/stylelint-rational-order-plugin.svg?style=flat-square
[ci-url]: https://travis-ci.org/AdreeUA/stylelint-rational-order-plugin
[ci-img]: https://img.shields.io/travis/AdreeUA/stylelint-rational-order-plugin.svg?style=flat-square
[l-url]: https://www.npmjs.com/package/stylelint-rational-order-plugin
[l-img]: https://img.shields.io/npm/l/stylelint-rational-order-plugin.svg?style=flat-square

Stylelint config that sorts related property declarations by grouping together following the order:

1.  Positioning
2.  Box Model
3.  Typography
4.  Visual
5.  Animation
6.  Misc

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Box Model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```

## Usage

1.  Add stylelint and this package to your project:

```bash
npm install --save-dev stylelint stylelint-rational-order-plugin
# or, if you prefer yarn over npm:
yarn add --dev stylelint stylelint-rational-order-plugin
```

2.  Add this package to the end of your extends array inside Stylelint
    configuration (.stylelintrc for example):

```javascript
{
  "plugins": [
    "stylelint-rational-order-plugin"
  ],
  "plugin/rational-order": true
}
```

## Options

Boolean, or an array of options, where the first element is `true`, and the second is an options object.

### Boolean option

`true`: Enables the plugin.

`false`: Disables the plugin.

### Optional secondary options

#### `"borderInBoxModel": Boolean`

Default border property belongs to the *visual section* `"borderInBoxModel": false`. If `true` border property belongs to the *box model section*.

#### `"emptyLineBeetweenGroup": Boolean`

This option adds an empty line between groups. Default `false`.


## Credits

* [Code Guide by @mdo](http://codeguide.co/)
* [Fork stylelint-config-rational-order by @constverum](https://github.com/constverum/stylelint-config-rational-order)
