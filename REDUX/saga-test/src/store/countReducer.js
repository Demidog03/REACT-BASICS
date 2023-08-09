const defaultState = {
    count: 0
}

export const INCREMENT = "INCREMENT"
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"
export const DECREMENT = "DECREMENT"

export default function countReducer(state = defaultState, action){
    switch (action.type){
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
    }
    return state
}

export function incrementAction(){
    return {type: INCREMENT}
}
export function asyncIncrementAction(){
    return {type: ASYNC_INCREMENT}
}
export function asyncDecrementAction(){
    return {type: ASYNC_DECREMENT}
}
export function decrementAction(){
    return {type: DECREMENT}
}
