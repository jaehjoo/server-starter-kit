const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/hello', apiController.hello);

router.get('/hello/ai', apiController.helloAi);

module.exports = router;
