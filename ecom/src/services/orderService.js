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

const updateKhaltiPaymentStatus = async(pidx, totalAmount, userId)=>{
    const order = await order.findOne({pidx});
    if(!order){
        throw new Error("No order found")
    }

    if(order.totalAmount !== totalAmount){
        throw new Error("Some error occured warning!!")
    }

    if(order.user !== userId){
        throw new Error("Invalid Operation")
    }

    const result = await order.findOneandUpdate({pidx}, {paymentStatus:"Completed"})
}

export default { createOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus, updateKhaltiPaymentStatus };