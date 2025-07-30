import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const orderSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderNumber:{
        type : String,
        default :()=>uuidv4()
    },
    cartItems:{
        type:[
            {
                product:{type: mongoose.Schema.Types.ObjectId, ref: "Product"},
                quantity:{type:Number, default:1},
                price:{},
            }
        ]
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    orderStatus:{
        type:String,
        enum:["pending", "processing", "delivered", "cancelled", "shipping"],
        default:"pending"
    },
    paymentStatus:{
        type:String,
        enum:["pending", "paid", "failed"],
        default:"pending"
    },
    paymentMethod:{
        type:String,
        enum:["cod", "khalti"],
        default:"cod"
    }
})

const Order = mongoose.model("Order", orderSchema);

// Export the Order model for use in other parts of the application
export default Order;
