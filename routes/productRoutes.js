import express from 'express';
import formidable from 'express-formidable';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { braintreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controllers/productController.js';

const router = express.Router();

// routes

// Method-Post || create product
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)

// Method-GET || get all products
router.get('/get-product', getProductController)

// Method-GET || get single products
router.get('/get-product/:slug', getSingleProductController)

// Method-GET || get photo
router.get('/product-photo/:pid', productPhotoController)

// Method-Delete || delete product
router.delete('/product/:pid', deleteProductController)

// Method-PUT || update Product
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)

// filter product
router.post('/product-filters', productFiltersController)

// product count 
router.get('/product-count', productCountController)

// product per page
router.get('/product-list/:page', productListController)

// search products
router.get('/search/:keyword', searchProductController)

// similar products
router.get('/related-product/:pid/:cid', relatedProductController)

// Category Wise Products
router.get('/product-category/:slug', productCategoryController)

// Payment Routes
// Token
router.get('/braintree/token', braintreeTokenController)

// payments
router.post('/braintree/payment', requireSignIn, braintreePaymentController)

export default router;
