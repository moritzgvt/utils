module.exports = {
  pwa: {
    name: 'moistgut',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/assets/js/service-worker.js",
      exclude: [/_redirects/]
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/index.scss";`
      },
    }
  },
  configureWebpack: {
    output: {
        crossOriginLoading: 'anonymous'
    }
  }
};