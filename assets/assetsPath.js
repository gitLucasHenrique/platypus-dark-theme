const fs = require('fs')

const localFiles = fs.readdirSync(__dirname)
let files = {}

localFiles.forEach(file => {
    const fileName = file.split('.')[0]
    files[fileName] = __dirname + '/' + file
})

module.exports = files