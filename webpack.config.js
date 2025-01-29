const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/js/index.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 出力先ディレクトリをクリーンアップ
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // 'dist'ディレクトリを使用
    },
    compress: true,
    port: 8080,
    liveReload: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.ejs$/,
        use: [
          'html-loader',
          'template-ejs-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 画像ファイルの拡張子を指定
        type: 'asset/resource', // Webpack 5 で推奨される画像処理
        generator: {
          filename: 'img/[name].[hash][ext]', // 出力先とファイル名
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.ejs',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),

  ],
};
