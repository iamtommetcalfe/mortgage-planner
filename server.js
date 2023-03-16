const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

const targetAPI = 'https://www.bankofengland.co.uk';

// Enable CORS middleware
app.use(cors());

app.use(
    '/api',
    createProxyMiddleware({
        target: targetAPI,
        changeOrigin: true,
        secure: false,
        followRedirects: true, // Add this line to follow redirects
        pathRewrite: {
            '^/api': '',
        },
        onProxyRes: (proxyRes) => {
            // Remove the 'x-powered-by' header to avoid exposing server information
            proxyRes.headers['x-powered-by'] = '';

            // Add 'Access-Control-Allow-Origin' header to the proxy response
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        },
    })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
