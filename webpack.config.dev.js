import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry:  [
        'babel-polyfill',
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
        ]
    }
};
