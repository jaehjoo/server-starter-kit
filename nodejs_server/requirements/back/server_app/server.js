const express = require('express');
const app = express();
const apiRouters = require('./routers/apiRoutes');
const port = 8000;

app.use(express.json());

app.use('/api', apiRouters);

app.listen(port, () => {
    console.log("app listening");
});