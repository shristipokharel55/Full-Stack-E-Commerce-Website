import orderServices from "../services/orderService.js";
import axios from "axios"

const createOrder = async(req, res)=>{
    try{

        const userId = req.user.id; // Assuming userId is available in req.user after authentication

        const order = req.body;
        order.user = userId; // Add userId to the order data

        if(order.paymentMethod ==="KHALTI"){

            const totalAmount = order.totalAmount 


            console.log(order)

            const options={
                "return_url":"http://localhost:5173/dashboard",
                "website_url":"http://localhost:5173/",
                "amount":totalAmount*100, // Convert to paisa
                "purchase_order_id":Date.now(),
                "purchase_order_name":`order-${Date.now()}`
            }
            console.log(process.env.KHALTI_SECRET_KEY)
            const result =await axios.post("https://dev.khalti.com/api/v2/epayment/initiate/", options,{
                headers:{
                    "Authorization": `Key ${process.env.KHALTI_SECRET_KEY}`,
                    "Content-Type": "application/json"
                }
            })

            console.log(result.data)
            return res.status(200).send(result.data)
        }

        const data = await orderServices.createOrder(order);

        console.log(data);

        res.status(200).json({data, message: "Order created successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(400).send({error:error.message, message:"Error occurred while creating order"});
    }
}

const getOrderById = async(req, res)=>{
    try {
        const id = req.params.id
        const data = await orderServices.getOrderById(id)
        res.status(200).json({data})
        
    } catch (error) {
        res.status(400).json({
            message:"error to fetch the current order",
            error:error.message
        })
    }
}

const getOrderByUserId = async (req, res) => {
  try {
      const userId = req.user.id
      const data = await orderService.getOrderByUserId(userId)
      res.status(200).json({
        message : "User's Order Fetchec successfully",
        data
      })
  } catch (error) {
    console.log(error.message);
    res.status(400).json ({error:error.message,message: "Error to get Order"});

  }
}

const updateOrderStatus=async(req, res)=>{
    try {
        const orderId = req.params.id
        const status = req.body.updateOrderStatus
        const data = await orderServices.updateOrderStatus(orderId, status)
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
        
    }
}

const updatePaymentStatus= async(req, res)=>{
    try {
        const status = req.body.updatePaymentStatus 
        const id = req.params.id
        const data = await orderServices.updatePaymentStatus(id, status)
        res.status(200).json({data})
    } catch (error) {
        res.status(400).json({
            message:"failed to update payment status",
            error:error.message
        })
    }
}

export { createOrder, getOrderById, getOrderByUserId, updateOrderStatus, updatePaymentStatus };