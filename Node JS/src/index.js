const express = require('express');
const User = require('../database/models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        console.log(users)
        res.send(users)
    } catch (err) {
        console.error(err);
        next(err);
    }
})

module.exports = router;