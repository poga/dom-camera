# dom-camera

[![NPM Version](https://img.shields.io/npm/v/dom-camera.svg)](https://www.npmjs.com/package/dom-camera) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Take a picture of a dom.

`npm i dom-camera`

## Usage

```js
const capture = require('dom-camera')

await capture('https://example.com', 'h1', 'test.png')
```

and the output:

![](test.png)

## API

####`capture(url, selector, outputPath)`

# License

The MIT License
