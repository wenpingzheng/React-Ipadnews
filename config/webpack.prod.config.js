var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main'
    },
    output: {
        path: path.resolve(__dirname, '../../web/production/ipad/'),
        publicPath: "",
        // publicPath: "http://mat1.gtimg.com/www/le/",
        filename: 'static/[hash:8].[name].js',
        chunkFilename: 'static/[hash:8].[name].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            exclude: /node_modules/,
            loader: "babel"
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!autoprefixer-loader")
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                // limit: 1024,
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
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['ipad'], {
            root: path.resolve(__dirname, '../../web/production/'),
            verbose: true,
            dry: false,
            exclude: []
        }),
        new ExtractTextPlugin("static/[hash:8].main.css", {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'static/[hash:8].vendors.js'),
        new webpack.DefinePlugin({
            'process.env': {
                NNODE_ENV: JSON.stringify("ipad")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),

        // 首页模板
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/template/index.html',
            inject: 'body'
        })
    ]
};