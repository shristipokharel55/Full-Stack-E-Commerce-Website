import axios from "axios";
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
   let order = await Order.findOne({pidx}).lean();
    order.toObject
    if(!order){
        throw new Error("No order found")
    }
    console.log(order.totalAmount, totalAmount)

    if(order.totalAmount !== totalAmount){
        throw new Error("Some error occured warning!!")
    }
    const  storedUserId = order.user
    console.log(storedUserId, userId)
    // if(order.user !== userId){
    //     throw new Error("Invalid Operation")
    // }
    console.log(process.env.KHALTI_SECRET_KEY)

    const result = await axios.post('https://dev.khalti.com/api/v2/epayment/lookup/', {pidx},{
    headers:{
        Authorization:`Key ${process.env.KHALTI_SECRET_KEY}`,
        "Content-Type": "application/json"
        }
    })

    console.log(result.data)
    if(result.data.status !=='Completed'){throw new Error("Payment is not completed")}

    if(result.data.total_amount !== order.totalAmount *100){throw new Error("Amount didn't matched")}

    return await Order.findOneAndUpdate({pidx}, {paymentStatus:"COMPLETED"})
}

export default { createOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus, updateKhaltiPaymentStatus };