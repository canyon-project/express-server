const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

// 使用自签名证书
const options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.cert')
};

// 如果使用 Let’s Encrypt 获取的证书
// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/fullchain.pem')
// };

// 中间件函数：将所有请求重定向到 www.baidu.com，并带上路径和查询参数
app.use((req, res, next) => {
  const targetUrl = `https://www.canyoncov.com${req.originalUrl}`;
  res.redirect(targetUrl);
});

const port = 443;
https.createServer(options, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});
