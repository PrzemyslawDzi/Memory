const path = require("path");
const entryFile = "App.js";

const pathToFolderAndFile = '/js/App.js';

module.exports = {
    // entry: `.${pathToFolderAndFile}`,
    entry: path.join(__dirname, pathToFolderAndFile),
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};