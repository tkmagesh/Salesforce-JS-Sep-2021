var path = require('path');
var htmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname, 'build'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }, {
                test : /\.html$/,
                use : [
                    {
                        loader : "html-loader",
                        options : { minimize : true}
                    }
                ]
            }
        ]
    },
    plugins : [
        new htmlWebPackPlugin({
            template : "./src/index.html",
            filename : "./index.html"
        })
    ]
}