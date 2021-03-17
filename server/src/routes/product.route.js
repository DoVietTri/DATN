const express = require('express');
const multer = require('multer');
const productController = require('./../controllers/product.controller');

const upload = multer();
const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', upload.single("p_image_detail"), productController.addNewProduct);
router.get('/:id', productController.getByIdProduct);
router.put('/:id', productController.updateByIdProduct);
router.delete('/:id', productController.deleteByIdProduct);

module.exports = router;
