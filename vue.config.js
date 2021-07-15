module.exports = {
    pwa: {
      name: 'Apolus',
      themeColor: '#ff7033',
      msTileColor: '#ff7033',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
         swSrc: 'dev/sw.js',

      }
    },
    chainWebpack: config => {
      config.plugin('html').tap(args => 
        { 
          args[0].title = "Apolus"; 
          return args;
        })
    }
}
  