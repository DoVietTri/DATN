const express = require('express');
const commentController = require('./../controllers/comment.controller');

const router = express.Router();

router.get('/', commentController.getAllComments);
router.post('/', commentController.addNewComment);

module.exports = router;
