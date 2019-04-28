import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import styles from './TypeView.module.css'
import Button from "./Button"

const TypeView = (props) => {
  const { Img, type, updateBookings, count, totalStrength, maxStrengthReached } = props

  const handleClick = (method) => () => {
    updateBookings({ type, method })
  }

  const addDisabled = (() => {
    if (type === "ROOMS" && count >= 5) {
      return true
    }
    if ((type === "ADULTS" || type === "CHILDREN") && totalStrength === 20) {
      return true
    }
  })()

  console.log(maxStrengthReached, addDisabled)

  return (
    <div className={styles.typeView}>
      <span className={styles.image}><Img /></span>
      <span className={styles.type}>{type}</span>
      <div className={styles.buttonContainer}>
        <Button 
          color="brown" 
          onClick={handleClick("sub")} 
          disabled={count === 0}
        > 
          <FaMinusCircle /> 
        </Button>
        <span style={{ fontSize: '20px', color: "black" }}>{count}</span>
        <Button 
          color="blue" 
          onClick={handleClick("add")} 
          disabled={addDisabled || maxStrengthReached}
          >
            <FaPlusCircle />
        </Button>
      </div>
    </div>
  )
}

export default TypeView