import {FC} from 'react';
import {IUser} from "../types/types.ts";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.name} is a resident of {user.address.city}/{user.address.street}
        </div>
    );
};

export default UserItem;
