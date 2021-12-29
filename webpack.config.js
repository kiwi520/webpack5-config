const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let mode = "development"
let target = "web"

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,
    devtool: "source-map",
    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)/i,
                type: "asset",
                parser:{
                    dataUrlCondition:{
                        maxSize:30 * 1024
                    }
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        envName: mode
                    }
                }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: [".jsx", ".js"]
    },
    devServer: {
        static: './dist',
        hot: true
    }
}
