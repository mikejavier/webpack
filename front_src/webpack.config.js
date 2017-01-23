const ExtractTextPlugin = require('extract-text-webpack-plugin');

var loaders = [
    {
        loader: 'css-loader',
        options: {
            modules: true
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: function () {
                return [
                    require('precss'),
                    require('autoprefixer')({browsers: ['last 2 versions']}),
                    require('pixrem')({rootValue:10, html:false}),
                    require('lost')
                ];
            }
        }
    }
];

module.exports = {
    entry: './src/main.js',
    output: {
        // path: './',
        filename: '../dist/js/script.bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                // loader: loaders
                loader: 'css-loader'
            })
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader'
                }
            ]
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin({ filename: '../dist/css/style.bundle.css', disable: false, allChunks: true })
    ]
 };
