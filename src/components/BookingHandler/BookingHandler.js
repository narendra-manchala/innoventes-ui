import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaBed, FaUser, FaChild } from "react-icons/fa";

import styles from './BookingHandler.module.css'
import TypeView from "./TypeView"

const data = [
  {
    img: FaBed,
    name: 'ROOMS'
  },
  {
    img: FaUser,
    name: "ADULTS"
  },
  {
    img: FaChild,
    name: "CHILDREN"
  }
]

class BookingHandler extends Component {
  render() {

    let bookingFields = data.map((item, index) => (
      <>
      <TypeView Img={item.img} type={item.name} />
      {index < data.length - 1 && <hr />} 
      </>
    ))
    return (
      <div className={styles.bookingHandler}>
    
      {bookingFields}
        
      </div>
    )
  }
}

export default BookingHandler