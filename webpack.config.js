const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        todo: "./src/todo.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "todo.bundle.js",
    },
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
    },
    devtool: "inline-source-map",
};
