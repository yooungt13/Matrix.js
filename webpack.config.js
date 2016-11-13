/**
 * @author youngtian13
 * @date 2016-11-13
 */

'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = {
    entry: {
        index: './client/src/index.js'
    },
    output: {
        path: path.join(__dirname, 'client/dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            // Process JS with Babel.
            {
                test: /\.jsx|js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // "postcss" loader applies autoprefixer to our CSS.
            // "css" loader resolves paths in CSS and adds assets as dependencies.
            // "style" loader turns CSS into JS modules that inject <style> tags.
            // In production, we use a plugin to extract that CSS to a file, but
            // in development "style" loader enables hot editing of CSS.
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            // JSON is not enabled by default in Webpack but both Node and Browserify
            // allow it implicitly so we also enable it.
            {
                test: /\.json$/,
                loader: 'json'
            },
            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // If you require a missing module and then `npm install` it, you still have
        // to restart the development server for Webpack to discover it. This plugin
        // makes the discovery automatic so you don't have to restart.
        // See https://github.com/facebookincubator/create-react-app/issues/186
        new WatchMissingNodeModulesPlugin('node_modules')
    ]
}
