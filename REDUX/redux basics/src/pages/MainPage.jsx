import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import editIcon from '../assets/edit-icon.png'
import deleteIcon from '../assets/delete-icon.png'
import cl from './MainPage.module.css'
import {
    addCustomerAction,
    removeCustomerByIdAction,
    removeCustomerByNameAction,
    updateCustomerNameAction
} from "../redux/customerReducer.js";
import {fetchCustomers} from "../asyncActions/customer.js";

function MainPage(props) {
    const navigate = useNavigate()
    /*ЧТОБЫ РАБОТАТЬ С ACTIONS*/
    const dispatch = useDispatch()
    /*ПОЛУЧИТЬ ТЕКУЩЕЕ СОСТОЯНИЕ */
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.customerReducer.customers)

    /*ФУНКЦИИ*/
    function addCash(amount){
        dispatch({type: "ADD_CASH", payload: amount})
    }
    function removeCash(amount){
        dispatch({type: "REMOVE_CASH", payload: amount})
    }

    function addCustomer(name){
        const customer = {
            id: Date.now(),
            name: name
        }
        dispatch(addCustomerAction(customer))
    }

    function removeCustomerByName(name){
        dispatch(removeCustomerByNameAction(name))
    }
    function removeCustomerById(id){
        dispatch(removeCustomerByIdAction(id))
    }

    function updateCustomerName(customer){
        dispatch(updateCustomerNameAction(customer))
    }

    function getAllCustomersFromApi(){
        dispatch(fetchCustomers())
    }

    return (
        <div>
            <h2>MAIN PAGE</h2>
            <h1>{cash}$</h1>
            <div style={{display: "flex", gap: "40px", justifyContent: "center", marginBottom: "20px"}}>
                <button onClick={() => addCash(Number(prompt("Amount of cash to add:")))}>Add Cash</button>
                <button onClick={() => removeCash(Number(prompt("Amount of cash to remove:")))}>Remove Cash</button>
            </div>
            <div style={{display: "flex", gap: "40px", justifyContent: "center", marginBottom: "20px"}}>
                <button onClick={() => addCustomer(prompt("Name of the customer to add: "))}>Add Customer</button>
                <button onClick={() => removeCustomerByName(prompt("Name of the customer to remove: "))}>Remove Customer</button>
                <button onClick={() => getAllCustomersFromApi()}>Get All Customers</button>
            </div>
            <div>
                {customers.length===0
                    ?
                    <h2>No customers</h2>
                    :
                    customers.map(customer => <div className={cl.customerItem}>
                        <h2>{customer.name}</h2>
                        <img src={editIcon} alt="" onClick={() => updateCustomerName({id: customer.id, name: prompt("Новое имя")})}/>
                        <img src={deleteIcon} alt="" onClick={() => removeCustomerById(customer.id)}/>
                    </div>)
                }
            </div>
            <button onClick={() => navigate("/test")}>To 2 page</button>
        </div>
    );
}

export default MainPage;
