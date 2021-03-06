const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    main: './src/portfolio.js'
  },
  output: {
    filename: 'portfolio.bundle.js',
    path: `${__dirname}/public`,
    publicPath: './public/'
  },
  watch: false,
  mode: 'development',
  target: 'web',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'portfolio.bundle.css'
    }),
    new OptimizeCSSAssetsPlugin({})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.svelte$/,
        use: [
          {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
              hotReload: true
            }
          },
        ]
      },
      {
        test: /\.(png|gif|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)?/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   limit: 100000
            // }
          },
        ]
      },
      /*{
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },*/
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'resolve-url-loader' },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ]
      }
    ]
  }
}
