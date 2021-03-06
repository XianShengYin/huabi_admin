var path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

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
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    sourceMap: false,
    // 向 CSS 相关的 loader 传递选项。
    loaderOptions: {
      // 向所有的scss传入共享的全局变量。
      scss: {
        additionalData: '@import "~@/styles/variables.scss";'
      }
    }
  },
  devServer: {
    // 为每个静态文件开启 gzip compression（压缩）
    compress: true,
    // 启动端口号
    port: 9000,
    // 开发环境，模块热替换
    hot: true,
    hotOnly: true,
    // 开发服务器禁止显示诸如 Webpack 捆绑包信息之类的消息。 错误和警告仍将显示。
    noInfo: true,
    // 告诉 dev-server 在项目启动后打开默认浏览器。
    // open: true,
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。
    overlay: {
      warnings: true,
      errors: true
    },
    // 在其他中间件之前执行自定义的中间件
    before: app => {
      const mock = require('./mock')
      mock(app)
    }
  },
  // https://www.jianshu.com/p/714ce38b9fdc config.optimization.runtimeChunk
  // https://blog.csdn.net/weixin_34294049/article/details/97278751 config.optimization.splitChunks
  // 会通过 webpack-merge 合并到最终的配置中
  configureWebpack: {
    // 不需要webpack处理,直接外部引用,可以减少打包组件
    externals: {
      vue: 'Vue',
      'element-ui': 'ElementUI'
    }
  },
  chainWebpack(config) {
    // 配置svg文件处理
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
