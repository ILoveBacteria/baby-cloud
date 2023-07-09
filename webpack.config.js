let mode = 'development';

module.exports = [
    {
        mode: mode,
        entry: './drive/static/drive/compiled/App.js',
        output: {
            filename: 'drive.js',
            path: __dirname + '/drive/static/drive/dist',
        }
    },
    {
        mode: mode,
        entry: './accounts/static/accounts/compiled/Login.js',
        output: {
            filename: 'login.js',
            path: __dirname + '/accounts/static/accounts/dist',
        }
    },
];
module.exports.parallelism = 2;