const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: path.resolve(__dirname, `./src/index.js`),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `[name]${
        env.development == true && argv.mode == "development"
          ? ""
          : `.[contenthash]`
      }.js`,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `[name]${
          env.development == true && argv.mode == "development"
            ? ""
            : `.[contenthash]`
        }.css`,
      }),
      new HtmlWebpackPlugin({
        title: "react-from-scratch",
        filename: "index.html",
        template: "public/index.html",
        favicon: "public/favicon.ico",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: `babel-loader`,
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            env.development == true && argv.mode == "development"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            `css-loader`,
            //TODO: add more loaders for css precompilers such as scss
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "[hash][ext][query]",
          },
        },
      ],
    },
  };
};
