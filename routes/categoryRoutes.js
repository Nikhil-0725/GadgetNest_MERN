import express from 'express';
import {isAdmin, requireSignIn} from './../middlewares/authMiddleware.js' 
import { createCategoryController, deleteCategoryController, getCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';
const router = express.Router();

// routes

// Method-POST || Create Category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

// Method-PUT || Update Category
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);

// Method-get || Get All Category
router.get('/get-category', getCategoryController);

// Method-GET || Get Single Category
router.get('/single-category/:slug', singleCategoryController);

// Method-Delete || Delete Single Category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)


export default router;