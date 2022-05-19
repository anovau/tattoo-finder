const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/Businessprofile/',
        {
            target: 'https://maps.googleapis.com',
            changeOrigin: true
        })
    )
} 