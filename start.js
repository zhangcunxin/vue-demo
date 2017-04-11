require('babel-register')
require('babel-polyfill')
var rm = require('rimraf')
rm("./dist/*", err => {
    if (err){
        throw err
    }
})

// require("./webpack.config")