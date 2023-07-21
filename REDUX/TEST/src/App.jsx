// /** PART 1 - TEST BASICS **/
// import './App.css'
// import {useDispatch, useSelector} from "react-redux";
//
// function App() {
//   /*STEP 4 - to change state initialize a dispatch*/
//   const dispatch = useDispatch()
//   /*STEP 5 - get current state of cash by useSelector*/
//   const cash = useSelector(state => state.cash)
//
//     /*STEP 6 - create functions*/
//     /*Dispatch parameter is action*/
//   function addCash(userCash){
//       dispatch({type: "ADD_CASH", payload: userCash})
//   }
//   function withdrawCash(userCash){
//       dispatch({type: "WITHDRAW_CASH", payload: userCash})
//   }
//   return (
//     <>
//       <div>
//           <h1>{cash}</h1>
//           <div style={{display: "flex", gap: '40px'}}>
//               <button onClick={() => addCash(Number(prompt("Amount of cash")))}>Add cash</button>
//               <button onClick={() => withdrawCash(Number(prompt("Amount of cash")))}>Withdraw cash</button>
//           </div>
//       </div>
//     </>
//   )
// }
//
// export default App
//
// /** PART 2 - COMBINE REDUCERS, TEST DEVTOOLS **/
// import './App.css'
// import {useDispatch, useSelector} from "react-redux";
//
// function App() {
//     const dispatch = useDispatch()
//     const cash = useSelector(state => state.cash.cash) /*Get reducer name first*/
//
//     function addCash(userCash){
//         dispatch({type: "ADD_CASH", payload: userCash})
//     }
//     function withdrawCash(userCash){
//         dispatch({type: "WITHDRAW_CASH", payload: userCash})
//     }
//     return (
//         <>
//             <div>
//                 <h1>{cash}</h1>
//                 <div style={{display: "flex", gap: '40px'}}>
//                     <button onClick={() => addCash(Number(prompt("Amount of cash")))}>Add cash</button>
//                     <button onClick={() => withdrawCash(Number(prompt("Amount of cash")))}>Withdraw cash</button>
//                 </div>
//             </div>
//         </>
//     )
// }
//
// export default App

/** PART 3 - CUSTOMER, REFACTORING **/
// import './App.css'
// import {useDispatch, useSelector} from "react-redux";
//
// function App() {
//     const dispatch = useDispatch()
//     const cash = useSelector(state => state.cash.cash) /*Get reducer name first*/
//     /*GET CUSTOMER state*/
//     const customers = useSelector(state => state.customers.customers) /*Get reducer name first*/
//
//     function addCash(userCash){
//         dispatch({type: "ADD_CASH", payload: userCash})
//     }
//     function withdrawCash(userCash){
//         dispatch({type: "WITHDRAW_CASH", payload: userCash})
//     }
//
//     /*ADD CUSTOMER FUNCTIONS*/
//     function addCustomer(name){
//         const customer = {
//             name,
//             id: Date.now(),
//         }
//         dispatch({type: "ADD_CUSTOMER", payload: customer})
//     }
//     function removeCustomer(name){
//         dispatch({type: "REMOVE_CUSTOMER", payload: name})
//     }
//     return (
//         <>
//             <div>
//                 <h1>{cash}</h1>
//                 <div style={{display: "flex", gap: '40px'}}>
//                     <button onClick={() => addCash(Number(prompt("Amount of cash")))}>Add cash</button>
//                     <button onClick={() => withdrawCash(Number(prompt("Amount of cash")))}>Withdraw cash</button>
//                     {/*CUSTOMER BUTTONS*/}
//                     <button onClick={() => addCustomer(prompt("Customer name"))}>Add customer</button>
//                     <button onClick={() => removeCustomer(prompt("Amount of cash"))}>Remove customer</button>
//                 </div>
//                 <div>
//                     {customers.length > 0
//                         ?
//                         <div>
//                             {customers.map(customer =>
//                             <h2>{customer.name}</h2>)}
//                         </div>
//                         :
//                         <h2>No customers</h2>
//                     }
//                 </div>
//             </div>
//         </>
//     )
// }
//
// export default App

/**PART 4 - REDUX THUNK **/
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer.js";
import {fetchCustomers} from "./asyncActions/customer.js";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash) /*Get reducer name first*/
    /*GET CUSTOMER state*/
    const customers = useSelector(state => state.customers.customers) /*Get reducer name first*/

    function addCash(userCash){
        dispatch({type: "ADD_CASH", payload: userCash})
    }
    function withdrawCash(userCash){
        dispatch({type: "WITHDRAW_CASH", payload: userCash})
    }

    /*ADD CUSTOMER FUNCTIONS*/
    function addCustomer(name){
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }
    function removeCustomer(name){
        dispatch(removeCustomerAction(name))
    }
    return (
        <>
            <div>
                <h1>{cash}</h1>
                <div style={{display: "flex", gap: '40px'}}>
                    <button onClick={() => addCash(Number(prompt("Amount of cash")))}>Add cash</button>
                    <button onClick={() => withdrawCash(Number(prompt("Amount of cash")))}>Withdraw cash</button>
                    {/*CUSTOMER BUTTONS*/}
                    <button onClick={() => addCustomer(prompt("Customer name"))}>Add customer</button>
                    <button onClick={() => removeCustomer(prompt("Amount of cash"))}>Remove customer</button>
                    <button onClick={() => dispatch(fetchCustomers())}>Get all customers</button>
                </div>
                <div>
                    {customers.length > 0
                        ?
                        <div>
                            {customers.map(customer =>
                                <h2>{customer.name}</h2>)}
                        </div>
                        :
                        <h2>No customers</h2>
                    }
                </div>
            </div>
        </>
    )
}

export default App
