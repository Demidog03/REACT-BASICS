import {put, takeEvery, call} from "redux-saga/effects";
import {FETCH_USERS, setUsersAction} from "../store/userReducer.js";

const fetchUserFromAPI = () => fetch("https://jsonplaceholder.typicode.com/users?_limit=10")

function* fetchUserWorker(){
    const response = yield call(fetchUserFromAPI)
    const data = yield call(() => new Promise(res => res(response.json())))
    yield put(setUsersAction(data))
}

export function* userWatcher(){
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}
