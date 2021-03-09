const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer();
const authorController = require('./../controllers/author.controller');

router.get('/', authorController.getAllAuthors);
router.post('/', upload.array("a_image", 10), authorController.addNewAuthor);
router.get('/:id', authorController.getAuthorById);

module.exports = router;
