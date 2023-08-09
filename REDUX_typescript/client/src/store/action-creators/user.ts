import axios from "axios";
import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export function fetchUsers(){
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        }catch (err) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: "User fetching error"})
        }
    }
}
