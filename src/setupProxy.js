const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
        '/api',
        proxy(
            {
                target: " https://m.228.cn",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        )
    )
        app.use(
            '/ajax',
            proxy(
                {
                    target: "http://localhost:9000/",
                    changeOrigin: true
                  
                   
                }
            )
        )
}