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

app.get('/', (req, res) => {
  res.send('Hello, HTTPS!');
});

const port = 443;
https.createServer(options, app).listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});
