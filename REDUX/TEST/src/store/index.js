import {combineReducers, createStore, applyMiddleware} from "redux";
import {cashReducer} from "./cashReducer.js";
import {customerReducer} from "./customerReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

/*It is needed to export redux to share it to Provider*/
/*REDUX THUNK 1*/
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); /*COMBINE REDUCERS BY combineReducers*/
/*As a second parameter middlewares could be assigned - for example: composeWithDevTools */
