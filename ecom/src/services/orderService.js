import Order from "../models/Order.js";

const createOrder = async (order) => {
    const result = await Order.create(order);

    return result;
}

const getOrderById = async (id) => {
    const result = await Order.findById(id); 

    return result;
}

const getOrderByUserId = async (userId) => {
    const result = await Order.find({ user: userId });
    return result;
}

const updateOrderStatus = async(id, status) => {
    return await Order.findByIdAndUpdate(id, 
        { orderStatus: status }, { new: true });
}

const updatePaymentStatus = async(id, status)=>{
    return await Order.fundByIdAndUpdate(id, {
        paymentStatus: status}, { new: true });
    
}

export default { createOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus };