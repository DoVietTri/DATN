const express = require('express');
const filterController = require('./../controllers/filter.controller');
const router = express.Router();

router.post('/filter-price/:id', filterController.filterPrice);

module.exports = router;
