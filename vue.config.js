module.export = {
  configureWebpack:{
    resolve:{
      alias:{
        // 默认有@别名，指向src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}