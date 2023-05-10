import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [number, setNumber] = useState(10);
  // const [user, setUser] = useState({
  //   id: 5,
  //   title: "fasfasfasfa",
  //   desc: "sfasfas",
  //   city: "fasfafsafas",
  //   email: "olzhas@mail.ru",
  //   password: "1234",
  // });

  // function changePassword() {
  //   setUser({ ...user, password: "5915161" });
  // }

  // function decrement() {
  //   setNumber((prevNumber) => prevNumber - 1); //setNumber(10-1)
  // }
  // function increment() {
  //   setNumber((prevNumber) => prevNumber + 1); //setNumber(10+1)
  // }

  // function changeDivsColor() {
  //   color = "red";
  // }

  // const [colors, setColors] = useState(["black", "red", "green"]);

  const [name, setName] = useState("username");
  const [email, setEmail] = useState("useremail");
  const [password, setPassword] = useState("userpassword");

  function saveData(e) {
    e.preventDefault();
    console.log(name, email, password);
  }
  return (
    <div className="App">
      <form onSubmit={saveData}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
        <input type="submit" />
      </form>

      <h1>{name}</h1>
      <h2>{email}</h2>
      <h2>{password}</h2>

      {/* <button onClick={decrement}>-</button>
      <div>{number}</div>
      <button onClick={increment}>+</button> */}

      {/* <button onClick={changeDivsColor}>Change Color</button>
      <div style={{ width: 400, height: 400, backgroundColor: color }}></div> */}

      {/* <button onClick={changePassword}>Change password</button>
      <h1>Email: {user.email}</h1>
      <h1>Password: {user.password}</h1> */}

      {/* <h1>{colors.join(", ")}</h1>
      <button onClick={() => setColors([...colors, "yellow", "brown"])}>
        Add color
      </button> */}
    </div>
  );
}

export default App;
