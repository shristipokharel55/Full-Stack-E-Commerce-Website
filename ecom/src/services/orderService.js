import Order from "../models/Order.js";

const createOrder = async (order) => {
    const result = await Order.create(order);

    return result;
}

const getOrderById = async (id) => {
    const result = await Order.findById(id).populate('user', 'name email'); // Populate user details

    return result;
}


export default { createOrder, getOrderById };