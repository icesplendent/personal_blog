module.exports = {
  publicPath: process.env.ENV_NODE === 'production' ? '/icesplendent/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
