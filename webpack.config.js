const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const root = path.resolve(__dirname, '../');

module.exports = {
  entry: './src/index.jsx',
  mode: "development",
  devtool: 'source-map',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      template: path.resolve(__dirname, './index.html'),
      inject: 'body',
    }),
    new MiniCssExtractPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       to: '.'
    //     }
    //   ],
    // }),
  ],

  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },

  devServer: {
    static: {
      directory: path.resolve(root, 'public'),
      publicPath: '/',
    },
    client: {
      overlay: false,
    },
    allowedHosts: 'all',
    historyApiFallback: true,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    liveReload: false,
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js')
          }
        }
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: {
        //         localIdentName: '[local]_[hash:base64:4]'
        //       }
        //     }
        //   }
        // ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[contenthash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[contenthash][ext]',
        },
      },
    ],
  },
};
