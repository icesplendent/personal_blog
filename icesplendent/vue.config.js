module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/personal_blog/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
