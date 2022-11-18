const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello, this is index. now your path : ${__dirname}`);
})

module.exports = router;