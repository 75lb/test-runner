'use strict'
const TestRunner = require('../../')
const a = require('core-assert')
const path = require('path')

const runner = new TestRunner({ manualStart: true, log: () => {} })

runner.test("Promise which doesn't resolve", function () {
  return new Promise((resolve, reject) => {
    /* tumbleweeds */
  })
})

runner.test("Promise which resolves", function () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 50)
  })
})

runner.start()
  .then(results => console.error(require('util').inspect(results, { depth: 3, colors: true })))

process.on('beforeExit', () => {
  a.strictEqual(runner.passed.length, 1)
  a.strictEqual(runner.failed.length, 1)
})