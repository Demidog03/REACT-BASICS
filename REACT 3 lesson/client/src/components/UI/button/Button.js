import React from 'react';
import cl from './Button.module.css'

function Button({children, type, ...props}) {
    // const propsStyles = {
    //     backgroundColor: color,
    //     color: color==="#FCFCFC" ? "black" : "white",
    //     border: border===true ? `${borderWidth} solid ${borderColor}` : "none"
    // }

    return (
        <button className={cl.button + " " + cl[type]} {...props}>{children}</button>

        // className="Button_button_fasfa Button_small_afafsa"
        // className={cl.button + " " + cl["round"]}
    );
}

export default Button;