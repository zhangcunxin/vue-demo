//import webpack from "webpack"
var path = require("path")
var Webpack = require("webpack")

module.exports = {
    entry: "./src/index",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].js",
        publicPath: "./dist/"
    },
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: "style-loader!css"
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
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
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
            loader: 'style-loader!css-loader!sass-loader?sourceMap'
        }]
        // 开启source-map，webpack有多种source-map，在官网文档可以查到
        // devtool: 'eval-source-map'
    },
    plugins: [
        new Webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
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
    }
}