import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: "Olzhas",
        password: "123",
        profileSrc: "https://www.nautiljon.com/images/manga_persos/00/32/thorfinn_2323.webp"
    })

    const values = {
        loggedIn,
        setLoggedIn,
        userInfo,
        setUserInfo
    }

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
}

export default AuthContextProvider;
