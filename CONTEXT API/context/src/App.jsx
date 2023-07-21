
import './App.css'
import {createContext, useContext, useRef, useState} from "react";
import AuthContextProvider, {AuthContext} from "./providers/AuthContextProvider.jsx";
import PostContextProvider, {PostContext} from "./providers/PostContextProvider.jsx";

// function App() {
//     /*GLOBAL STATES*/
//     /*TEST, TEST TOOLKIT*/
//     /*React Context API*/
//     const [username, setUsername] = useState("Olzhas")
//
//     return (
//         <div className={"app"}>
//             <Child username={username} setUsername={setUsername} setPassword={setPassword}/>
//         </div>
//     )
// }
//
// export const Child = ({username, setUsername}) => {
//     return (
//         <div className={"child"}>
//             <h1>{username}</h1>
//             <GrandChild setUsername={setUsername}/>
//         </div>
//     )
// }
//
// export const GrandChild = ({setUsername}) => {
//     return (
//         <div>
//             <input type="text" placeholder={"Напишите ник"} onChange={(event) => setUsername(event.target.value)}/>
//         </div>
//     )
// }
//
//
// /*PROPS DRILLING*/
//
// export default App


/*React Context API*/
// const AppContext = createContext(null)
//
// function App() {
//     const [username, setUsername] = useState("Dina")
//
//     return (
//         <AppContext.Provider value={{username, setUsername}}>
//             <div className={"app"}>
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
//         <div className={"child"}>
//             <h1>{username}</h1>
//             <GrandChild />
//         </div>
//     )
// }
//
// export const GrandChild = () => {
//     const {setUsername} = useContext(AppContext)
//
//     return (
//         <div>
//             <input type="text" placeholder={"Напишите ник"} onChange={(event) => setUsername(event.target.value)}/>
//         </div>
//     )
// }
//
// export default App


/*Example 1*/
// const AppContext = createContext(null)
//
// function App() {
//     const [isClicked, setIsClicked] = useState(false)
//
//     return (
//         <AppContext.Provider value={{isClicked, setIsClicked}}>
//             <div className={"app"}>
//                 <h2>App: {isClicked.toString()}</h2>
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
//         <div className={"child"}>
//             <h2>Child1: {isClicked.toString()}</h2>
//             {isClicked ? <h1>Button is clicked!!!</h1> : <h1>Sorry, button is not clicked...</h1>}
//         </div>
//     )
// }
//
// export const Child2 = () => {
//     const {isClicked, setIsClicked} = useContext(AppContext)
//
//     return (
//         <div>
//             <h2>Child2: {isClicked.toString()}</h2>
//             <button onClick={() => setIsClicked(true)}>Click</button>
//         </div>
//     )
// }
//
// export default App


/*Example 2*/
// const AppContext = createContext(null)
//
// function App() {
//     const [isDarkTheme, setIsDarkTheme] = useState(false)
//
//     return (
//         <AppContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
//             <div className={"app"}>
//                <Page1/>
//             </div>
//         </AppContext.Provider>
//     )
// }
//
// export const Page1 = () => {
//     const {isDarkTheme} = useContext(AppContext)
//
//     const pageStyles = {
//         width: "100%",
//         height: "80vh",
//         backgroundColor: isDarkTheme ? "black" : "white",
//         color: isDarkTheme ? "white" : "black"
//     }
//
//     return (
//         <div className={"child"} style={pageStyles}>
//             <h1>{isDarkTheme.toString()}</h1>
//             <Button/>
//         </div>
//     )
// }
//
// export const Button = () => {
//     const {isDarkTheme, setIsDarkTheme} = useContext(AppContext)
//
//     // function changeTheme(){
//     //     if(isDarkTheme===false){
//     //         setIsDarkTheme(true)
//     //     }
//     //     else{
//     //         setIsDarkTheme(false)
//     //     }
//     // }
//
//     const buttonStyles = {
//         backgroundColor: isDarkTheme ? "white" : "black",
//         color: isDarkTheme ? "black" : "white"
//     }
//
//     return (
//         <div>
//             <button style={buttonStyles} className={isDarkTheme ? "blackTheme" : "whiteTheme"} onClick={() =>  setIsDarkTheme(!isDarkTheme)}>Change theme</button>
//            {/*if isDarkTheme===false, setIsDarkTheme(!false) = setIsDarkTheme(true)*/}
//            {/* else if isDarkTheme===true,  setIsDarkTheme(!true) = setIsDarkTheme(false)*/}
//         </div>
//     )
// }
//
// export default App


/*Example 3*/
function App() {
    return (
        <AuthContextProvider>
            <PostContextProvider>
                <div className={"app"}>
                    <UserInfo/>
                    <Post/>
                </div>
            </PostContextProvider>
        </AuthContextProvider>
    )
}

export const UserInfo = () => {
    const {loggedIn, userInfo} = useContext(AuthContext)

    return (
        <div>
            {loggedIn
                ? <div>
                    <h1>Имя: {userInfo.name}</h1>
                    <h2>Пароль: {userInfo.password}</h2>
                    <img width={120} src={userInfo.imageSrc}/>
                </div>
                :
                <h1>Вы не авторизованы</h1>
            }
            <SingInForm/>
        </div>
    )
}

export const SingInForm = () => {
    const {userInfo, setLoggedIn, loggedIn} = useContext(AuthContext)

    const nameRef = useRef(null)
    const passwordRef = useRef(null)

    function login(e){
        e.preventDefault()
        if(userInfo.name===nameRef.current.value && userInfo.password===passwordRef.current.value){
            alert("Вы авторизовались!")
            setLoggedIn(true)
        }
        else{
            alert("Неверные данные!")
        }
    }

    return (
        <div>
            {loggedIn
                ?
                <button onClick={() => setLoggedIn(false)}>Logout</button>
                :
                <form>
                    <input type="text" placeholder={"Введите имя"} ref={nameRef}/>
                    <input type="password" placeholder={"Введите пароль"} ref={passwordRef}/>
                    <button onClick={login}>SignIn</button>
                </form>
            }
        </div>
    )
}

export const Post = () => {
    const {post} = useContext(PostContext)
    const {loggedIn} = useContext(AuthContext)
    return (
        <div>
            {
                loggedIn
                    ?
                    <div className={"postCard"}>
                        <h2>{post.title}</h2>
                        <p>{post.desc}</p>
                        <a href="">{post.author}</a>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}

export default App
