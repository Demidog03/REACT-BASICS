import React, {useEffect} from "react"
import type {} from "redux-thunk/extend-redux"
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()


    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Todos Loading...</h1>
    }
    if(error){
        return <h1>Error: {error}</h1>
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
}

export default UserList;
