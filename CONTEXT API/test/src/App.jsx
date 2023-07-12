import {createContext, useContext, useRef, useState} from 'react'
import './App.css'
import AuthContextProvider, {AuthContext} from "./providers/AuthContextProvider.jsx";

/*DEFINING A PROBLEM*/
// function App() {
//     const [username, setUsername] = useState("")
//
//     return (
//         <div>
//             {username}
//             <Child setUsername={setUsername}/>
//         </div>
//     )
// }
//
// export const Child = ({setUsername}) => {
//     return (
//         <div>
//             <GrandChild setUsername={setUsername}/>
//         </div>
//     );
// }
//
// export const GrandChild = ({setUsername}) => {
//     return (
//         <div>
//             <input type="text" onChange={(e) => setUsername(e.target.value)}/>
//         </div>
//     );
// }
//
//
// export default App


/*SOLUTION BY USING CONTEXT*/
// const AppContext = useContext({username: ""})
/*OR*/
// const AppContext = createContext(null)
//
// function App() {
//     const [username, setUsername] = useState("")
//
//     return (
//         <AppContext.Provider value={{username, setUsername}}>
//             <div>
//                 <Child/>
//             </div>
//         </AppContext.Provider>
//     )
// }
//
// export const Child = () => {
//     const {username} = useContext(AppContext)
//
//     return (
//         <div>
//             {username}
//             <GrandChild/>
//         </div>
//     );
// }
//
// export const GrandChild = () => {
//     const {setUsername} = useContext(AppContext)
//
//     return (
//         <div>
//             <input type="text" onChange={(e) => setUsername(e.target.value)}/>
//         </div>
//     );
// }
//
//
// export default App


/*EXAMPLE 1*/
// const AppContext = createContext(null)
//
// function App() {
//     const [isClicked, setIsClicked] = useState(false)
//
//     return (
//         <AppContext.Provider value={{isClicked, setIsClicked}}>
//             <div>
//                 <Child1/>
//                 <Child2/>
//             </div>
//         </AppContext.Provider>
//     )
// }
//
// export const Child1 = () => {
//     const {isClicked} = useContext(AppContext)
//
//     return (
//         <div>
//             {isClicked && <h1>Button is clicked!!!</h1>}
//         </div>
//     );
// }
//
// export const Child2 = () => {
//     const {setIsClicked} = useContext(AppContext)
//
//     return (
//         <div>
//             <button onClick={() => setIsClicked(true)}>Click me</button>
//         </div>
//     );
// }
//
//
// export default App


/*EXAMPLE 2*/
// const AppContext = createContext(null)
//
// function App() {
//     const [isDarkTheme, setIsDarkTheme] = useState(false)
//
//     return (
//         <AppContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
//             <div>
//                 <Page/>
//             </div>
//         </AppContext.Provider>
//     )
// }
//
// export const Page = () => {
//     const {isDarkTheme} = useContext(AppContext)
//
//     const pageStyles = {
//         width: "100%",
//         height: "80vh",
//         display: "grid",
//         placeItems: "center",
//         padding: "10px 40px",
//         backgroundColor: isDarkTheme ? "black" : "white",
//         color: isDarkTheme ? "white" : "black",
//     }
//
//
//     return (
//         <div style={pageStyles}>
//                 <h1>Я написан здесь чтобы была иллюзия что сайт имеет контент, но на деле
//                     же я просто играю роль моего брата lorem. Моя роль была прописана изначально,
//                     и я не имею смысла. Жаль...
//                 </h1>
//                 <Button/>
//         </div>
//     );
// }
//
// export const Button = () => {
//     const {isDarkTheme, setIsDarkTheme} = useContext(AppContext)
//
//     const buttonStyles = {
//         backgroundColor: isDarkTheme ? "white" : "black",
//         color: isDarkTheme ? "black" : "white",
//     }
//
//     return (
//         <div>
//             <button style={buttonStyles} onClick={() => setIsDarkTheme(!isDarkTheme)}>Поменять тему</button>
//         </div>
//     );
// }
//
//
// export default App


/*EXAMPLE 3*/
function App() {
    return (
        <AuthContextProvider>
            <div>
                <Child1/>
                <Child2/>
            </div>
        </AuthContextProvider>
    )
}

export const Child1 = () => {
    const {loggedIn, userInfo} = useContext(AuthContext)

    return (
        <div>
            {loggedIn && <h1>Your name: {userInfo.name}</h1>}
            {loggedIn && <h2>Password: {userInfo.password}</h2>}
            {loggedIn && <img style={{width: 150, height: 150, borderRadius: "50%"}} src={userInfo.profileSrc} alt=""/>}
        </div>
    );
}

export const Child2 = () => {
    const {loggedIn, setLoggedIn, userInfo} = useContext(AuthContext)
    const nameRef = useRef(null)
    const passwordRef = useRef(null)

    function login(e) {
        e.preventDefault()

        if(nameRef.current.value === userInfo.name && passwordRef.current.value === userInfo.password){
            alert("Successfully logged in!")
            setLoggedIn(true)
        }
        else{
            alert("Error")
        }
    }

    return (
        <div>
            {!loggedIn
                ? <form>
                    <br/>
                    <input type="text" placeholder={"Your name"} ref={nameRef}/>
                    <br/>
                    <input type="password" placeholder={"Password"} ref={passwordRef}/>
                    <br/>
                    <br/>
                    <button onClick={login}>SignIn</button>
                </form>
                : <button onClick={() => setLoggedIn(false)}>Logout</button>
            }
        </div>
    );
}


export default App

/*DRAWBACK OF CONTEXT*/

/*Rerender issues: when one context value changes all child elements inside a provider rerenders*/
/*for simple projects it is ok*/

/*PROP DRILLING is better sometimes*/

/*Another solution is to create multiple contexts*/
