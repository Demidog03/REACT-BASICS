const defaultState = {
    users: []
}

export const SET_USERS = "SET_USERS"
export const FETCH_USERS = "FETCH_USERS"

export default function userReducer(state = defaultState, action){
    switch (action.type){
        case SET_USERS:
            return {...state, users: action.payload}
    }
    return state
}

export function setUsersAction(payload){
    return {type: SET_USERS, payload}
}
export function fetchUsersAction(payload){
    return {type: FETCH_USERS, payload}
}
