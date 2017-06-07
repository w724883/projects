var webpack = require('webpack');
var path = require('path');
// 分离css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 动态加载html文件
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  //页面入口文件配置
  entry: {
    index:'./src/components/index/app.js',
    detail:'./src/components/detail/app.js',
    setting:'./src/components/setting/app.js',
  },
  //入口文件输出配置
  output: {
    // 配置静态资源引入路径
    // publicPath : 'http://localhost:8080',
    path:path.join(__dirname, 'output'),
    filename: 'js/[name].js',
  },
  // 插件项
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename:"js/common.js",
      minChunks: 2
    }),

    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'output/index.html'),
      inject: 'body',
      chunks:['common','index'],
      template: 'src/components/index/index.html',
      chunksSortMode:'dependency',
      hash:true,
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'output/detail.html'),
      inject: 'body',
      chunks:['common','detail'],
      template: 'src/components/detail/index.html',
      chunksSortMode:'dependency',
      hash:true,
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'output/setting.html'),
      inject: 'body',
      chunks:['common','setting'],
      template: 'src/components/setting/index.html',
      chunksSortMode:'dependency',
      hash:true,
    }),

    new ExtractTextPlugin("css/[name].css"),

    
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      },
      output: {
        comments: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],
  module: {
      //加载器配置
      rules: [
          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
          },
          {
              test: /\.js[x]?$/,
              loaders: 'babel-loader',
              options: {
                presets: ['react','es2015']
              },
              exclude:/node_modules/,
              include:path.resolve(__dirname, "src"),
          },
          {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
          },
          {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
          }
      ]
  },
  resolve: {
      extensions: ['.js', '.css'],
      alias:{
          "zepto":path.join(__dirname, "src/libs/zepto/zepto.min.js"),
          "swiper":path.join(__dirname, "src/libs/swiper/swiper.jquery.min.js")
      }
  }
}

module.exports = config;
