import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: "Olzhas",
        password: "123",
        imageSrc: "https://img.gazeta.ru/files3/501/12982501/upload-05-pic4_zoom-1500x1500-18539.jpg"
    })

    const values = {
        loggedIn,
        setLoggedIn,
        userInfo,
        setUserInfo,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
