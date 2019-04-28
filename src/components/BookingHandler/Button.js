import React from 'react';
import { IconContext } from "react-icons";

import styles from "./Button.module.css"

function Button(props) {
  const { children, color, onClick, disabled} = props
  return (
    <div className={`${styles.button} ${disabled && styles.disabled}`} onClick={!disabled ? onClick : null}>
      <IconContext.Provider value={{ color: disabled ? "gray" : color, size: "1.5em", style: { display: "inline" } }}>
        <div>
          {children}
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Button