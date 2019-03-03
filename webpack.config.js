var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        "presets": [
                            ["@babel/env", {"loose":true}]
                        ],
                        "plugins": [
                            ["@babel/plugin-transform-react-jsx", {"pragma":"h"}],
                            ["@babel/plugin-proposal-function-bind"]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        publicPath: false
    },
    devtool: 'source-map'
};
