var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    entry: {
        main: './src/main',
    },
    output: {
        path: path.resolve(__dirname, '../development'),
        publicPath: '/',
        filename: 'static/[name].js',
        chunkFilename: 'static/[name].chunk.js'
    },
    devtool: 'source-map',
    devServer: {
        progress: true,
        compress: true,
        historyApiFallback: true,
        port: 8088
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: "babel"
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer'
        }, {
            test: /\.html$/,
            loader: 'html-withimg?min=false'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass!autoprefixer'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 1024,
                name: 'static/[name].[ext]'
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.png', '.jpg'],
        alias: {
            libs: path.join(__dirname, 'src/libs'),
            components: path.join(__dirname, 'src/components')
        }
    },
    plugins: [
        new ExtractTextPlugin("static/main.css", {
            allChunks: true
        }),

        new CommonsChunkPlugin({
            name: "vendors",
            minChunks: 2
        }),

        // 首页模板
        new HtmlWebpackPlugin({
            filename: './index.html',
            chunks: ['vendors', 'main', 'bosszone'],
            template: './src/template/index.html',
            inject: 'body'
        })
    ]
};