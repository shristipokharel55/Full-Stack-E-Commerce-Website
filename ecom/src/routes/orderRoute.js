import express from 'express';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import {isAdmin} from '../middleware/isAdmin.js';
import { createOrder, getOrderById, getOrderByUserId, updateKhaltiPaymentStatus, updateOrderStatus, updatePaymentStatus } from '../controllers/orderController.js';


const router =  express.Router();

router.post('/createOrder', isLoggedIn, createOrder)
router.get('/getOrderById/:id', getOrderById);
router.post('/getOrderByUserId', getOrderByUserId)
router.post('/updateOrderStatus/:id', isLoggedIn, isAdmin, updateOrderStatus)
router.post('/updatePaymentStatus/:id', isLoggedIn, isAdmin, updatePaymentStatus)
router.post('/updateKhaltiPaymentStatus/:id', isLoggedIn, updateKhaltiPaymentStatus)




export default router;