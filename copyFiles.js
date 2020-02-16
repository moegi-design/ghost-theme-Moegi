// Copy required handlebars and package.json file
'use strict'
const fs = require('fs')
const themeName = require('./package.json').name

const copyFile = (src, dist) => {
  fs.writeFileSync(dist, fs.readFileSync(src))
}

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

copyFile('./package.json', './dist/package.json')
copyFile('./src/ghost/default.hbs', './dist/default.hbs')
copyFile('./src/ghost/default.hbs', './dist/index.hbs')
copyFile('./src/ghost/default.hbs', './dist/post.hbs')