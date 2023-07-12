import React, {createContext, useContext, useState} from 'react';
import {AuthContext} from "./AuthContextProvider.jsx";

export const PostContext = createContext(null)

function PostContextProvider({children}) {
    const {userInfo} = useContext(AuthContext)

    const [post, setPost] = useState({
        title: "Some title",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            " when an unknown printer took a galley of type and scrambled it to make a type " +
            "specimen book. It has survived not only five centuries, but also the leap into ",
        author: userInfo.name
    })


    return (
        <PostContext.Provider value={{post, setPost}}>
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
