import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer.js";
import {customerReducer} from "./customerReducer.js";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    cashReducer,  /*cashReducer:  cashReducer*/
    customerReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
