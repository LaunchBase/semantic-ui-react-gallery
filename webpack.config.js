const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        gallery: './example/gallery.js'
    },
    output: {
        path: path.resolve(__dirname, 'example'),
        filename: '[name].bundle.js'
    },
    devServer: {
        port: 9000,
        contentBase: path.resolve(__dirname, 'example')
    },
    devtool: 'source.maps',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_componets)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
                        plugins: [
                            '@babel/transform-runtime',
                            '@babel/syntax-dynamic-import',
                            '@babel/proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
}