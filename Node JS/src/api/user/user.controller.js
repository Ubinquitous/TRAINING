const express = require('express');
const router = express.Router();
const Comment = require('../../database/models/comment');

router.get('/:id/comments', async (req, res, next) => {
    try {
        const comments = await Comment.findAll({
            include: {
                model: User,
                where: { id: req.params.id },
            },
        });
        console.log(comments);
        res.json(comments);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;