const express = require('express');

const allRouter = require('./routers');

//创建一个服务器
let app = express();
const {PORT} = require('./config.json');

app.use(express.static('./'));

app.use(allRouter);

app.listen(PORT, () => {
    console.log(`server run is on localhost:${PORT}`);

});