import {addManyCustomersAction} from "../redux/customerReducer.js";
import axios from "axios";

export function fetchCustomers(){
    return async function (dispatch){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch(addManyCustomersAction(response.data))
    }
}
