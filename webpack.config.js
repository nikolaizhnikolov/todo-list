const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        todo: './src/todo.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'todo.bundle.js'
    },
    devtool: 'inline-source-map',
  };