const initialState = {
    posts: [],
    pending: false,
    error: null,
    success: false
}

export const POST_ACTIONS = {
    FETCH_POSTS_REQUEST: "FETCH_POSTS_REQUEST",
    FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR"
}

function postReducer(state = initialState, action){
    switch (action.type){
        case POST_ACTIONS.FETCH_POSTS_REQUEST:
            return {...state, pending: true}
        case POST_ACTIONS.FETCH_POSTS_SUCCESS:
            return {...state, pending: false, posts: action.payload, success: true}
        case POST_ACTIONS.FETCH_POSTS_ERROR:
            return {...state, pending: false, error: action.payload}
        default:
            return state
    }
}
export default postReducer
