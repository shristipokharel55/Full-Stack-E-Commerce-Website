import orderServices from "../services/orderService.js";


const createOrder = async(req, res)=>{
    try{

        const {userId} = req.user.id; // Assuming userId is available in req.user after authentication

        const order = req.body;
        order.user = userId; // Add userId to the order data

        const data = await orderServices.createOrder(order);

        console.log(data);

        res.status(200).json({data, message: "Order created successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(400).send({error:error.message, message:"Error occurred while creating order"});
    }
}

const getOrderById = async (req, res) => {
    try {
        const userId = req.user.id;
        const data = await orderServices.getOrderByUserId(userId);

        res.status(200).json({
            message: "User's Order fetched successfully",
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).send({error:error.message, message:"Error occurred while fetching order by ID"});
    }
}

export { createOrder, getOrderById };