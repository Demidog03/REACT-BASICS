import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Images from "./components/images/Images";
import Memo from "./components/memo/Memo";

function App() {
  // const [number, setNumber] = useState(5)
  // const [color, setColor] = useState("black")
  //
  // useEffect(() => {
  //   console.log('Number increased')
  // }, [number, color])
  //
  // function increaseNumber(){
  //   setNumber(prevState => prevState + 1)
  // }
  //
  // function changeColor(){
  //   color === "black" ? setColor("white") : setColor("black");
  // }

  return (
    <div className="App">
      {/* <Images/> */}
      <Memo />

      {/*<h1>{number} {color}</h1>*/}
      {/*<button onClick={increaseNumber}>Change number</button>*/}
      {/*<button onClick={changeColor}>Change color</button>*/}
    </div>
  );
}

export default App;
