import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import styles from './TypeView.module.css'
import Button from "./Button"

const TypeView = (props) => {
  const { Img, type, updateBookings, count } = props

  const handleClick = (method) => () => {
    updateBookings({type, method})
  }


  return (
    <div className={styles.typeView}>
      <span className={styles.image}><Img /></span>
      <span className={styles.type}>{type}</span>
      <div className={styles.buttonContainer}>
        <Button color="red" onClick={handleClick("sub")} > <FaMinusCircle /> </Button>
        <span>{count}</span>
        <Button color="blue" onClick={handleClick("add")}><FaPlusCircle /></Button>
      </div>
    </div>
  )
}

export default TypeView