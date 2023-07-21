const defaultState = {
    cash: 0
}

export function cashReducer (state= defaultState, action) {
    /*ВСЕГДА МЕНЯЕТСЯ*/
    // state = {
    //     cash: 10
    // }
    switch(action.type) {
        case "ADD_CASH":
            return { ...state, cash: state.cash + action.payload }
        /*ВОЗВРАЩАЕМ НОВОЕ СОСТОЯНИЕ (объект)*/
        case "REMOVE_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return {...state, cash: state.cash}
    }
}
