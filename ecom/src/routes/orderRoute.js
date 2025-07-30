import express from 'express';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { createOrder, getOrderById } from '../controllers/orderController.js';


const router =  express.Router();

router.post('/createOrder', isLoggedIn, createOrder)
router.get('/:id', isLoggedIn, getOrderById);

export default router;