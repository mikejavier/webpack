const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                loader: 'css-loader?importLoaders=1!postcss-loader'
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
