const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  transpileDependencies: true,
  //跨域
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    // plugins: [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()]
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()]
    //   }),
    //   require('unplugin-element-plus/webpack')({
    //     // options
    //   })
    // ]
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
