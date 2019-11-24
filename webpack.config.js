var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 使用 extract text webpack plugin
var extractPlugin = new ExtractTextPlugin({
    filename: 'bundle.css' // scss轉css後另存的目標檔名
});

module.exports = {
    entry: './src/js/main.js',
    output: { path: __dirname + '/build/', filename: 'bundle.js' },
    node: {
        fs: "empty",
        "child_process": "empty",
    },
    externals: {
        "nedb": 'commonjs nedb',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }

        ],

    }
};