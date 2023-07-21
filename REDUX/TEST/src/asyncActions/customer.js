import {addManyCustomersAction} from "../store/customerReducer.js";

export const fetchCustomers = () => {
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispatch(addManyCustomersAction(data)))
    }
}
