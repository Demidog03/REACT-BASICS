import {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types.ts";
import axios from "axios";
import List from "./List.tsx";
import UserItem from "./UserItem.tsx";
import {useNavigate} from "react-router-dom";

const UsersPage: FC = () => {
        const navigate = useNavigate()
        const [users, setUsers] = useState<IUser[]>([])

        useEffect(() => {
            fetchUsers()
        }, []);

        async function fetchUsers(){
            try{
                const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
                setUsers(response.data)
            }catch (err){
                alert(err)
            }
        }


    return (
        <div>
            <List items={users} renderItem={(user) => <UserItem user={user} key={user.id} onClick={(user) => navigate("/users/" + user.id)}/>}/>
        </div>
    );
};

export default UsersPage;
