const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development', // Modo de desarrollo
	entry: './src/index.js', // Archivo de entrada de JavaScript
	output: {
		filename: 'bundle.js', // Nombre del archivo JavaScript de salida
		path: path.resolve(__dirname, 'docs') // Directorio de salida
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'docs') // Directorio base para servir archivos estáticos
		},
		port: 8080, // Puerto del servidor de desarrollo
		hot: true, // Habilita la recarga en caliente (Hot Module Replacement - HMR)
		watchFiles: ['src/**/*.pug'] // Observa los cambios en los archivos Pug
	},
	module: {
		rules: [{
				test: /\.scss$/, // Patrón para identificar archivos Sass
				use: [
					MiniCssExtractPlugin.loader, // Extracción de CSS en un archivo separado
					'css-loader', // Interpretación de archivos CSS
					'sass-loader' // Compilación de archivos Sass a CSS
				]
			},
			{
				test: /\.pug$/,
				use: [
					'pug-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/styles_aa_site.css' // Ruta de salida para el archivo CSS
		}),
		new HtmlWebpackPlugin({
			template: './src/templates/pages/index.pug', // Ruta al archivo Pug de origen
			filename: 'index.html', // Nombre del archivo HTML resultante
			
		})
	]
};