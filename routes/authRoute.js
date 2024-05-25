import express from 'express';
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// Router object
const router = express.Router();

// Routing
// REGISTER || METHOD = POST
router.post('/register', registerController);

// LOGIN || METHOD = POST
router.post('/login', loginController);

// Forgot Password || METHOD = POST
router.post('/forgot-password', forgotPasswordController)

// test routes as protected routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

// update profile
router.put('/profile', requireSignIn, updateProfileController)

// Orders
router.get('/orders', requireSignIn, getOrdersController)

// All Orders
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

// Order Status Update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)

export default router;