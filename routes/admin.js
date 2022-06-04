const express = require('express');
const path = require('path');

const router = express.Router();

const productsController = require('../controllers/products')

// const products = []

router.get('/add-product', productsController.getAddProduct)

router.post('/add-product', productsController.postAddProduct)


// exports.routes = router;
// exports.products = products;
module.exports = router;