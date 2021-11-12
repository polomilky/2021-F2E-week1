module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/2021-f2e-week1/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
