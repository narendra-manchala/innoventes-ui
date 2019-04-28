import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import styles from './TypeView.module.css'
import Button from "./Button"

const TypeView = (props) => {
  const { Img, type, getCounter } = props
  return (
    <div className={styles.typeView}>
      <span className={styles.image}><Img /></span>
      <span className={styles.type}>{type}</span>
      <div className={styles.buttonContainer}>
        <Button color="red"> <FaMinusCircle /> </Button>
        <span>1</span>
        <Button color="blue"><FaPlusCircle /></Button>
      </div>
    </div>
  )
}

export default TypeView