const express = require('express');
const productController = require('./../controllers/product.controller');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.addNewProduct);
router.get('/:id', productController.getByIdProduct);
router.put('/:id', productController.updateByIdProduct);
router.delete('/:id', productController.deleteByIdProduct);
module.exports = router;
