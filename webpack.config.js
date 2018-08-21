
const path = require('path');

module.exports ={
    entry: './public/src/app.js',
    output: {
        path: path.join(__dirname, 'public'), 
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader', 
                    options: {
                        name: './src/styles/jpg/[hash]-[name].[ext]'
                    }
                }
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};