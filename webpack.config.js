const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: false,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
          sources: true,
        },
      },
      {
           test: /\.(sa|sc|c)ss$/i,
        exclude: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader"
        ],
      },

      {
        test: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
              publicPath: '/'
            },
          },

          'rtlcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./img/[name][ext]"
        }
      },
      

    ],

     
    
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "margarita.html",
      template: "./src/margarita.html"
    }),
    new HtmlWebpackPlugin({
      filename: "veggie.html",
      template: "./src/veggie.html"
    }),
    new HtmlWebpackPlugin({
      filename: "chicken.html",
      template: "./src/chicken.html"
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html"
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html"
    }),
    
   
    new CssMinimizerPlugin({
      exclude: /node_modules|\.css$/,
    }),
     new MiniCssExtractPlugin({
    filename: "css/style.css", 
  })
  ]
};
