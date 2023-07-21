const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER_BY_NAME = "REMOVE_CUSTOMER_BY_NAME"
const REMOVE_CUSTOMER_BY_ID = "REMOVE_CUSTOMER_BY_ID"
const UPDATE_CUSTOMER_NAME = "UPDATE_CUSTOMER_NAME"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"

export function customerReducer(state=defaultState, action){
    switch(action.type) {
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER_BY_NAME:
            return {...state, customers: state.customers.filter(customer => customer.name !== action.payload)} /*customer.name !== name (из параметров)*/
        case REMOVE_CUSTOMER_BY_ID:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        case UPDATE_CUSTOMER_NAME:
            return {...state, customers: [...updatedCustomers(state.customers, action.payload)]}
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        default:
            return {...state, customers: state.customers}
    }

    function updatedCustomers(customers, payload){
        // payload = {
        //     id: oldId,
        //     name: newName
        // }
        /*indexToUpdate - индекс кастомера которого нужно поменять*/
        const indexToUpdate = customers.findIndex((customer) => customer.id === payload.id) /*indexToUpdate=0*/
        /*customers[indexToUpdate] - кастомер(обьект)*/
        customers[indexToUpdate].name = payload.name /*customers[0].name = "новое имя который передал в payload"*/
        return customers
    }
}

export function addCustomerAction(payload) {
    return {type: ADD_CUSTOMER, payload} //payload ==> payload: payload
}

export function removeCustomerByNameAction(payload){
    return {type: REMOVE_CUSTOMER_BY_NAME, payload}
}

export function removeCustomerByIdAction(payload){
    return {type: REMOVE_CUSTOMER_BY_ID, payload}
}
export function updateCustomerNameAction(payload){
    return {type: UPDATE_CUSTOMER_NAME, payload}
}
export function addManyCustomersAction(payload){
    return {type: ADD_MANY_CUSTOMERS, payload}
}

// const numbers = ["Olzhas", "Bekzhan", "Louiza"]
// const filteredNumbers = numbers.filter(number => number !== "Olzhas")
// console.log(filteredNumbers) /* ["Bekzhan", "Louiza"] */
