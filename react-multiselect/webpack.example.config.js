var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    entry: {
        'app': './example/app.js',
        'style': './src/style.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './example/dist')
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /(node_modules)/,
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass
    ],
    devServer: {
        contentBase: path.join(__dirname, "./example"),
        compress: true
    },
    devtool: "source-map",
    watch: true
}