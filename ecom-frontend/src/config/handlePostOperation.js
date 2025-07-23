import axios from "axios";
import { BASE_URL } from "./constant.js";

const handlePostOperation = async(url, data) => {
        try {
            const result = await axios.post(`${BASE_URL}${url}`, data, {withCredentials: true});
            //return data
            console.log(result)
            return result;
        } catch (error) {
            //return error
            console.log(error)
            return error;
        }
    }


export default handlePostOperation;