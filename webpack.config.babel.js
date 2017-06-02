import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

export default () => ({  
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './ui/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'), // Absolute path
        publicPath: 'public',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Check for all js files
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [ ['es2015', { modules: false }], 'react' ],
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
                test: /\.(sass|scss)$/, //Check for sass or scss file names
                loader: 'style!css!sass',
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/public',
        hot: true,
        inline: false,
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:5000'
            }
        }
    },
    plugins: [
        /*new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),*/
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
});