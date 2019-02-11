const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src', 'index.js'),
    target: 'node',
    output: {
        filename: 'sourcetrail-ts-indexer.js',
        path: path.resolve(__dirname, '..', 'build'),
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, '..', 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            },
        }, ],
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
    ],
}
