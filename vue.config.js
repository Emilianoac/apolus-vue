module.exports = {
    pwa: {
      name: 'Apolus',
      themeColor: '#ff7033',
      msTileColor: '#ff7033',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        skipWaiting: true,
      }
    },
    chainWebpack: config => {
      config.plugin('html').tap(args => 
        { 
          args[0].title = "Apolus | Tu musica favorita siempre contigo"; 
          return args;
        })
    }
}
  