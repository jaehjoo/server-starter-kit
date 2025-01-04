const express = require('express');
const { swaggerUi, specs } = require('./swagger');
const port = 3000;

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup);

/**
 * @path {GET} http://localhost:3000
 * @description hello 통신
 */
app.get("/api/hello", (req, res) => {
    res.json({
        message: 'hello!',
    });
})


app.listen(port, () => {
    console.log("app listening");
});