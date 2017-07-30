import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

export default () => ({  
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        //'./ui/common/theme/styles.scss',
        './ui/client/index.js'
    ],
    output: {
        publicPath: 'http://127.0.0.1:8081/public/',
        path: path.join(__dirname, 'public'),
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
                loader: 'style-loader!css-loader!sass-loader',
            }
        ],
    },
    devServer: {
        contentBase: __dirname + '/public',
        hot: true,
        inline: false,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" }
        /*proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:5000'
            }
        }*/
    },
    plugins: [
        /*new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),*/
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
});