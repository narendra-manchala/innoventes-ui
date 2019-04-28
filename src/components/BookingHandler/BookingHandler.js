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
  state = {
    rooms: 0,
    adults: 0,
    children: 0
  }

  updateBookings = val => {
    console.log(val)
  }

  render() {
    const { rooms, adults, children } = this.state

    return (
      <div className={styles.bookingHandler}>
        <TypeView Img={data[0].img} type={data[0].name} updateBookings={this.updateBookings} count={rooms} />
        <hr />
        <TypeView Img={data[1].img} type={data[1].name} updateBookings={this.updateBookings} count={adults} />
        <hr />
        <TypeView Img={data[2].img} type={data[2].name} updateBookings={this.updateBookings} count={children} />
      </div>
    )
  }
}

export default BookingHandler