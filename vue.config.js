var path = require('path')

module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录，默认 dict
  outputDir: 'dict',
  // 静态资源输出目录，默认 static
  assetsDir: 'static',
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
    // 设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: false,
    // 向 CSS 相关的 loader 传递选项。
    loaderOptions: {
      // 给 sass-loader 传递选项     （你可以这样向所有 Sass/Less 样式传入共享的全局变量）
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        // prependData: '@import "~@/variables.scss";'
      }
    }
  },
  devServer: {
    // 内容的来源。仅在需要提供静态文件时才进行配置。
    contentBase: path.join(__dirname, 'dist'),
    // 为每个静态文件开启 gzip compression（压缩）
    compress: true,
    port: 9000,
    // 开发环境，模块热替换
    hot: true,
    hotOnly: true,
    // 开发服务器禁止显示诸如 Webpack 捆绑包信息之类的消息。 错误和警告仍将显示。
    noInfo: true,
    // 告诉 dev-server 在项目启动后打开默认浏览器。
    open: true,
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。
    overlay: {
      warnings: true,
      errors: true
    }
    // 在其他中间件之前执行自定义的中间件
    // before: require('./mock/mock-server.js')
  }
}
