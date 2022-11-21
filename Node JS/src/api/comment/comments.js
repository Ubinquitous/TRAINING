const express = require('express');
const router = express.Router();
const { User, Comment } = require('../../database/models');

router.route('/:id')
    .patch(async (req, res, next) => {
        try {
            const result = await Comment.create({
                comment: req.body.comment,
            }, {
                where: { id: req.params.id },
            });
            res.json(result);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .delete(async (req, res, next) => {
        try {
            const result = await Comment.destroy({ where: { id: req.params.id } });
            res.json(result);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports = router;