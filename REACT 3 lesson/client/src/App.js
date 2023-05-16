import './App.css';
import Button from "./components/UI/button/Button";

function App() {
    // const btnColors={
    //     lime: "#A3CECE",
    //     orange: "#FFCC73",
    //     lightGrey: "#CDCDCD",
    //     white: "#FCFCFC"
    // }


  return (
    <div className="App">
        <Button type="round" style={{backgroundColor: "orange"}} disabled>Отправить</Button>
        <Button type="big" >Девочки</Button>
        <Button type="small" disabled>Далее</Button>
    </div>
  );
}

export default App;
