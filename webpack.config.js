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
        entry: {
            'login': './accounts/static/accounts/compiled/Login.js',
            'signup': './accounts/static/accounts/compiled/Signup.js'
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/accounts/static/accounts/dist',
        }
    },
];
module.exports.parallelism = 4;