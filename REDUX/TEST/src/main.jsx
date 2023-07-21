/** PART 1 - REDUX BASICS **/
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {Provider} from "react-redux";
// import {createStore} from "redux";
//
//
// // const action = {type: "", payload: "?"}
// const defaultState = {
//     cash: 0,
// }
//
// /*STEP 2 - create reducer*/
// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         /*actions*/
//         /*ADD CASH TO ACCOUNT*/
//         case "ADD_CASH":
//             return {...state, cash: state.cash + action.payload}
//
//         /*WITHDRAW A CASH TO ACCOUNT*/
//         case "WITHDRAW_CASH":
//             return {...state, cash: state.cash - action.payload}
//
//         default:
//             return state
//     }
// }
//
// /*STEP 1 - Create a redux*/
// /*Object with methods: getState(), dispatch() (change state), */
// /*First parameter is reducer*/
// const redux = createStore(reducer); /*STEP 3 - add reducer*/
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <Provider redux={redux}>
//         <App />
//       </Provider>
//   </React.StrictMode>,
// )

/** PART 2 - COMBINE REDUCERS, TEST DEVTOOLS **/
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {Provider} from "react-redux";
// import {createStore} from "redux";
// import {store} from "./store/index.js";


// const defaultState = {
//     cash: 0,
// }
/*Change reducer name - several reducer could be created*/
/*Reducers moved to "/redux"*/
// const cashReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case "ADD_CASH":
//             return {...state, cash: state.cash + action.payload}
//
//         case "WITHDRAW_CASH":
//             return {...state, cash: state.cash - action.payload}
//
//         default:
//             return state
//     }
// }

// const customerReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case "ADD_CUSTOMER":
//             return {...state, cash: state.cash + action.payload}
//         case "REMOVE_CUSTOMER":
//             return {...state, cash: state.cash - action.payload}
//     }
// }

/*Store was moved to /redux/index.js*/
// const redux = createStore(cashReducer); /*STEP 3 - add reducer*/

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
// )

/** PART 3 - CUSTOMER, REFACTORING **/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/index.js";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
