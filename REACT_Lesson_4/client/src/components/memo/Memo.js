import { useState, useMemo, useEffect, useCallback } from "react";

function Memo() {
  const [number, setNumber] = useState(1);
  const [isDark, setIsDark] = useState(false);

  const doubledNumber = useMemo(() => {
    return extraSlowFunction(number);
  }, [number]);

  //одно и тоже
  //   useMemo(() => {
  //     return function(){}
  //   })

  //   useCallback(() => {
  //     function
  //   })

  const themeStyles = useMemo(() => {
    return {
      width: 400,
      backgroundColor: isDark ? "black" : "white",
      margin: "0 auto",
      color: isDark ? "white" : "black",

      // isDark ?
      // isDark===true ?

      // !isDark ?
      // isDark === false
    };
  }, [isDark]);

  useEffect(() => {
    console.log("Theme is changed");
  }, [themeStyles]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      ></input>
      <button onClick={() => setIsDark((prevState) => !prevState)}>
        Поменять тему
      </button>
      <button onClick={() => setNumber(5)}>Hello</button>
      <div style={themeStyles}>{number}</div>
    </div>
  );
}

function extraSlowFunction(num) {
  console.log("SLOW FUNCTION STARTS");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default Memo;
