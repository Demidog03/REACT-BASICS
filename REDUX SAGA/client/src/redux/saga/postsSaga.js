import {call, put, takeLeading} from "redux-saga/effects"
import axios from "axios"
import {POST_ACTIONS} from "../reducers/postReducer.js";
//WORKERS
//Функция генератор в котором прописывается логика
//WATCHER
//Функция генератор который следит за worker-ами и за actions, watcher(type, worker)
//EFFECTS
//put, call, apply, race, takeEvery, takeLeading ...

// function iterator(){
//     for (let i = 0; i < 5; i++) {
//         console.log("Итерация - " + i)
//     }
// }
//
// iterator()

function getPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
    //возвращает promise
}

export function* fetchPostsWorker(){
    console.log("fetching posts")
    try{
        const response = yield call(getPosts)

        //dispatch аналогия
        yield put({type: POST_ACTIONS.FETCH_POSTS_SUCCESS, payload: response.data})
    }catch (err) {
        yield put({type: POST_ACTIONS.FETCH_POSTS_ERROR, payload: err.message})
    }
}

export function* fetchPostsWatcher(){
    //если в каком то месте мы попросим запустить этот экшн
    //То watcher увидит это и запустит воркер который отправляет запрос
    yield takeLeading(POST_ACTIONS.FETCH_POSTS_REQUEST, fetchPostsWorker)
}





// function* iterator(){
//     for (let i = 0; i < 5; i++) {
//         yield ("Итерация - " + i)
//     }
// }
//
// function* sayHi(){
//     yield "hi"
//     yield "hello"
// }
//
// const sayHiGen = sayHi()
//
// console.log(sayHiGen.next())
// console.log(sayHiGen.next())
//
// // const iteratorGen = iterator()
// // const iteratorGen2 = iterator()
// //
// // console.log(iteratorGen.next().value)
// // console.log("HELLO")
// // console.log(iteratorGen.next().value)
// // console.log(iteratorGen.next().value)
// // console.log(iteratorGen.next().value)
// // console.log(iteratorGen.next().value)
// // console.log(iteratorGen.next().value)
// //
// //
// // console.log(iteratorGen2.next().value)
// // console.log(iteratorGen.next().value)
