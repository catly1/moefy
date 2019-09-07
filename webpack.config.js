const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    entry: './frontend/moefy.jsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ["@babel/plugin-proposal-class-properties", ["@babel/transform-runtime"]]
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    },
    plugins: [
        new CaseSensitivePathsPlugin()
    ]
};
