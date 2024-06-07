const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  transpileDependencies: ['@arco-design/web-vue'],
  outputDir: 'docs',
  publicPath: './',
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  // 打包的时候，不将 arco-design 中的组件打包进去
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        externals: {
          '@arco-design/web-vue': {
            commonjs: '@arco-design/web-vue',
            commonjs2: '@arco-design/web-vue',
            amd: '@arco-design/web-vue',
            root: 'ArcoDesignVue', // 如果这个组件库是基于 UMD 构建的
          }
        }
      };
    }
  }
})
