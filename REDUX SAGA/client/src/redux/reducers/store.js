import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import postReducer from "./postReducer.js";
import createSagaMiddleware from "redux-saga"
import {fetchPostsWatcher} from "../saga/postsSaga.js";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(postReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(fetchPostsWatcher)
export default store
