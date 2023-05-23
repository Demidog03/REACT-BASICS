import {useContext, useRef} from 'react';
import Header from "./Header";
import { ThemeContext} from "../App";

function Login({changeTheme}) {
    const isAuth = useContext(ThemeContext)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    return (
        <div>
            <Header/>
            <h1>LOGIN PAGE</h1>
            {isAuth ? <h2>Authorized</h2> : <h2>Not Authorized</h2>}
            <input ref={usernameRef} type="text"/>
            <input ref={passwordRef} type="password"/>
            <button onClick={() => changeTheme(usernameRef.current.value, passwordRef.current.value)}>Login</button>
        </div>
    );
}

export default Login;
