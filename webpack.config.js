const WebpackUserscript = require("webpack-userscript");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/startup.ts",
    output: {
        filename: "script.user.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new ESLintPlugin(),
        new WebpackUserscript({
            metajs: false,
            renameExt: false,
            headers: {
                "name": "Pendoria Push Notifications",
                "namespace": "https://xpuls3.github.io/",
                "include": "/^https?:\\/\\/(?:.+\\.)?pendoria\\.net\\/?(?:.+)?$/",
                "version": "0.1.0-alpha.1",
                "author": "Puls3",
                "homepage": "https://github.com/xPuls3/Pendoria-Push-Notifications",
                "supportURL": "https://github.com/xPuls3/Pendoria-Push-Notifications/issues",
                "downloadURL": "https://github.com/xPuls3/Pendoria-Push-Notifications/releases/latest/download/script.user.js",
                "updateURL": "https://github.com/xPuls3/Pendoria-Push-Notifications/releases/latest/download/script.user.js",
                "icon": "https://raw.githubusercontent.com/xPuls3/Pendorian-Elite-UI/master/favicon.ico",
                "run-at": "document-start",
                "grant": "none",
                "noframes": "true"
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
