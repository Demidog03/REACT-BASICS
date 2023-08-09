import {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types.ts";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate()
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        fetchUser()
    }, []);

    async function fetchUser(){
        try{
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(response.data)
        }catch (err){
            alert(err)
        }
    }


    return (
        <div>
            <button onClick={() => navigate("/users")}>Back</button>
            <h1>User name: {user?.name}</h1>
            <div>
                Email: {user?.email}
                Address: {user?.address.city}/{user?.address.street}
            </div>
        </div>
    );
};

export default UserItemPage;
