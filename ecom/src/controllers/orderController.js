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
        const orderId = req.params.id;
        if (!orderId) {
            return res.status(400).send({ message: "Order ID is required" });
        }

        const data = await orderServices.getOrderById(orderId);

        if (!data) {
            return res.status(404).send({ message: "Order not found" });
        }

        res.status(200).json({
            message: "Order fetched successfully",
            data
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send({error:error.message, message:"Error occurred while fetching order by ID"});
    }
}

export { createOrder, getOrderById };