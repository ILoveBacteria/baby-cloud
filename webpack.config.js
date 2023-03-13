const path = require('path');

module.exports = {
  mode: 'development',
  entry: './drive/static/drive/compiled/App.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './drive/static/drive/dist'),
  },
};