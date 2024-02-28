const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'docs')
        },
        port: 8080,
        hot: true,
        liveReload: true // Habilita la recarga automática del navegador
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles_aa_site.css' // Ruta de salida para el archivo CSS
        }),
        new HtmlWebpackPlugin({
            template: './docs/index.html' // Ruta al archivo HTML de origen
        })
    ]
};