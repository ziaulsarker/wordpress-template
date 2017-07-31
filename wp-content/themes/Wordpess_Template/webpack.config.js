var webpack = require("webpack");
var path = require("path");
var webpack = require("webpack");


module.exports = function(env){
    return {
        entry: [
            'script-loader!jquery/dist/jquery.min.js',
            'script-loader!foundation-sites/dist/js/foundation.min.js',
            "./assets/js/app.js"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
        },

        resolve: {
            extensions: [".js", ".jsx", ".json", " "]
        },

        module: {
            loaders: [
                {test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/},
                {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
                {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader", exclude: /node_modules/},
                {test: /\.(eot|otf|svg|ttf|woff|woff2)$/, loader: 'url-loader'},
                {test: /\.jsx?$/, loader: "babel-loader", exclude: /(node_modules|bower_components)/, query: { presets: [ "es2015"] } }
            ]
        },

        
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
        externals: {
            jquery: 'jQuery',
            foundation: 'Foundation'
        }
    }
}
