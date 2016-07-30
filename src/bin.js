#!/usr/bin/env node
'use strict'
var detect = require('feature-detect-es6')

if (detect.all('class', 'arrowFunction', 'let', 'const', 'destructuring')) {
  module.exports = require('./bin/cli')
} else {
  module.exports = require('../es5/bin/cli')
}
