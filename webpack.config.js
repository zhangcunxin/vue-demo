var path = require("path")
var Webpack = require("webpack")
var HtmlWebpackPlugin = require("webpack-html-plugin")

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].[hash].js",
        publicPath: ""
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        compress: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                loaders: {
                    scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                    sass: 'vue-style-loader!css-loader!sass-loader' // <style lang="sass">
                }
            }
        }, {
            test: /\.(png|jpg|jpeg)$/,
            loader: "url-loader?limit=8192"
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },
    plugins: [
        new Webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                },
                context: '/'
            }
        }),
        new HtmlWebpackPlugin({
            title: "My vue demo",
            template: "./src/index.html",
            inject: true
        }),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            },
            comments: false,
            sourceMap: true
        })

    ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js',
            filter: path.join(__dirname, "./src/filters"),
            components: path.join(__dirname, "./src/components")
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'source-map'

}
