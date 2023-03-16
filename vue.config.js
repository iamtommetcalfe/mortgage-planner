const { defineConfig } = require('@vue/cli-service')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080, // or any other port you prefer
    proxy: {
      '/api/bank-of-england-mortgage-rates': {
        target: 'https://www.bankofengland.co.uk/boeapps/iadb/fromshowcolumns.asp?csv.x=yes&DateFrom=01/Jan/2020&DateTo=15/Mar/2023&SeriesCodes=IUMZO28&CSVF=TN&UsingCodes=Y&VPD=Y&VFD=N',
        changeOrigin: true,
        pathRewrite: {
          '^/api/bank-of-england-mortgage-rates': ''
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/csv'
        },
        mode: 'no-cors'
      }
    }
  }
})
