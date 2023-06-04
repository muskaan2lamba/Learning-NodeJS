const Product = require('../models/product')

exports.getAddProduct = (req,res,next)=>{
    console.log('The add product page');
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('admin/add-product', {pageTitle: 'Add Product', path: '/admin/add-product', activeProduct:true, productCSS:true, formCSS:true})
}

exports.postAddProduct = (req,res,next) =>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req,res,next)=>{
    // console.log('Welcome to express');
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: true});
    });
}