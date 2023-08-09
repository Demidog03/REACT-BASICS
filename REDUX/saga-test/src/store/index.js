import {applyMiddleware, combineReducers, createStore} from "redux";
import countReducer from "./countReducer.js";
import userReducer from "./userReducer.js";
import createSagaMiddleware from 'redux-saga'
import {countWatcher} from "../saga/countSaga.js";
import {rootWatcher} from "../saga/index..js";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
