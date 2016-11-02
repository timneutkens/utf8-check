#!/usr/bin/env node
const glob = require('glob')
const pify = require('pify')
const shell = require('shelljs')

let directory = process.argv.slice(2).shift()

if(!directory) {
  directory = '.'
}

function checkEncoding(fileName) {
  return new Promise(resolve => {
    shell.exec(`iconv -f UTF-8 ${fileName} > /dev/null`, {silent: true}, (code, stdout, stderr) => {
      const error = stderr.trim()
      if(error.length > 0) {
        resolve(error)
      }

      resolve(false)
    })
  })
}

shell.cd(directory)

pify(glob)('*.txt').then(data => {
  const items = data.map(fileName => checkEncoding(fileName))
  Promise.all(items)
  .then(items => items.forEach(item => item !== false ? console.log(item) : ''))
})
