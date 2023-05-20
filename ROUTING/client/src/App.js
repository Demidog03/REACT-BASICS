import logo from './logo.svg';
import './App.css';
import Posts from "./components/posts/Posts";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import PostPage from "./components/PostPage";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<PostPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
