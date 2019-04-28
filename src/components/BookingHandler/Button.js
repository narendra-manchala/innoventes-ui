import React from 'react';
import { IconContext } from "react-icons";

import styles from "./Button.module.css"

function Button(props) {
  const { children, color, } = props
  const style = {
    padding: "0 10px",
    "&:hover": {
      cursor: "pointer"
    }
  }
  return (
    <div className={styles.button}>
      <IconContext.Provider value={{ color: color, size: "1.3em", style: { display: "inline" } }}>
        <div>
          {children}
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default Button