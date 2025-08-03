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



export default { createOrder, getOrderById, getOrderByUserId };