const express = require('express');
const router = express.Router();
const homeController = require('./../controllers/home.controller');

router.get('/all-categories', homeController.getAllCategories);
router.get('/new-books', homeController.getNewBooks);
router.get('/banners', homeController.getBanners);
router.get('/categories/:id', homeController.getCateById);
router.get('/get-book-by-cateid/:id', homeController.getBooksByCateId);
router.get('/get-book-by-id/:id', homeController.getBookById);
router.get('/get-book-with-author/:id', homeController.getBooksWithAuthor);
router.get('/get-book-with-price/:id', homeController.getBooksWithPrice);

module.exports = router;
