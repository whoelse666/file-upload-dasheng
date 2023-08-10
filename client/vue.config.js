module.exports = {
  devServer: {
    proxy:{
      '/api/':{
        target:'http://localhost:7002',
        secure:false,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
