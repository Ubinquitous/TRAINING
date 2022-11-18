const express = require('express');
const router = express.Router();

const json = {
    name: 'Ubin',
    studentNo: 45,
    school: 'highSchool',
}

router.get('/', (req, res) => {
    res.send(`Hello, this is index. now your path : ${__dirname}`);
})

module.exports = router;