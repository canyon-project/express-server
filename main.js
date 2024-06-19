const express = require('express');
const app = express();

// 中间件函数：将所有请求重定向到 www.baidu.com，并带上路径和查询参数
app.use((req, res, next) => {
    const targetUrl = `https://www.canyoncov.com${req.originalUrl}`;
    res.redirect(targetUrl);
});

const port = 80;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
