import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TestPage from "./pages/TestPage.jsx";
import MainPage from "./pages/MainPage.jsx";

function App() {
    return (
    <>
        <BrowserRouter>
          <Routes>
              <Route path="/main" element={<MainPage/>}/>
              <Route path="/test" element={<TestPage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
