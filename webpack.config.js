const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js",
    },
    devServer: {
        static: "./dist",
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] },
            { test: /\.png$/, type: "asset/resource" },
        ],
    },
    devtool: "inline-source-map",
};
