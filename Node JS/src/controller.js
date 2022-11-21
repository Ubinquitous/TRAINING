const express = require('express');
const router = express.Router();
const userRouter = require('./api/user/user.controller');
const commentRouter = require('./api/comment/comment.controller');
const User = require('./database/models/user');

router.use('/user', userRouter);
router.use('/comment', commentRouter);

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

router.use((req, res) => {
    res.status(404).render('404');
})

module.exports = router;