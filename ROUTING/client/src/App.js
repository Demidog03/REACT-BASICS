import {useState, createContext} from 'react'
import './App.css';
import Posts from "./components/posts/Posts";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import PostPage from "./components/PostPage/PostPage";

export const ThemeContext = createContext()

function App() {
  const [isAuth, setIsAuth] = useState(false)

    const user = {
        username: "Daurenbek",
        password:"1234"
    }

    function changeTheme(username, password){
        if(username === user.username && password===user.password){
            setIsAuth(true) //false=>!false - setIsDark(true)
        }
        else{
            console.log("Auth ERROR")
        }
    }

  return (
      <ThemeContext.Provider value={isAuth}>
          <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login changeTheme={changeTheme}/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/posts/:id" element={<PostPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
          </BrowserRouter>
      </ThemeContext.Provider>
  );
}



export default App;
