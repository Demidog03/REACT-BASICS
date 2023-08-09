import {all} from "redux-saga/effects"
import {userWatcher} from "./userSaga.js";
import {countWatcher} from "./countSaga.js";

export function* rootWatcher(){
    yield all([userWatcher(), countWatcher()])
}
