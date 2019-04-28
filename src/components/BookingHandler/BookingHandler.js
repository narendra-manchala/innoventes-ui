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

  handleRooms = (method, rooms, adults, children) => {
    if (method === "add") {
      rooms++
      if (adults < rooms) {
        adults = rooms
      }
    } else {
      rooms--
      const maxStrength = rooms * 4
      const totalGuests = adults + children
      if (totalGuests > maxStrength) {
        let diff = totalGuests - maxStrength
        if (diff > children) {
          diff = diff - children
          children = 0
          adults = adults - diff
        } else {
          children = children - diff
        }
      }
    }
    this.setState({ rooms, adults, children })
  }

  handleAdults = (method, rooms, adults, children) => {
    let totalGuests = adults + children

    if (method === "add") {
      adults++
      totalGuests++
      if (totalGuests > rooms * 4) {
        console.log('hi')

        rooms++
      }
    } else {
      adults--
      totalGuests--
      let maxStrength = (rooms - 1) * 4
      if (totalGuests <= maxStrength) {
        rooms--
      }
      if (rooms > adults) {
        rooms = adults
        if (totalGuests > rooms * 4) {
          children = children - (totalGuests - (rooms * 4))
        }
      }
      if (adults === 0) {
        rooms = 0
        children = 0
      }
    }
    this.setState({ rooms, adults, children })
  }

  handleChildren = (method, rooms, adults, children) => {
    let totalGuests = adults + children
    let maxStrength = rooms * 4
    if (method === "add") {
      if (totalGuests < maxStrength) {
        children++
      }
    } else {
      children--
      let nextMaxStrength = (rooms - 1) * 4
      if (totalGuests <= nextMaxStrength) {
        rooms--
      }
    }
    this.setState({ children })
  }



  updateBookings = val => {
    console.log(val)
    let rooms = this.state.rooms
    let adults = this.state.adults
    let children = this.state.children
    if (val.type === "ROOMS") {
      this.handleRooms(val.method, rooms, adults, children)
    } else if (val.type === "ADULTS") {
      this.handleAdults(val.method, rooms, adults, children)
    } else {
      this.handleChildren(val.method, rooms, adults, children)
    }
  }

  render() {
    const { rooms, adults, children } = this.state

    return (
      <div className={styles.bookingHandler}>
        <TypeView 
          Img={data[0].img} 
          type={data[0].name} 
          updateBookings={this.updateBookings} 
          count={rooms} 
        />
        <hr />
        <TypeView 
          Img={data[1].img} 
          type={data[1].name} 
          updateBookings={this.updateBookings} 
          count={adults} 
          totalStrength={adults + children} 
        />
        <hr />
        <TypeView 
          Img={data[2].img} 
          type={data[2].name} 
          updateBookings={this.updateBookings} 
          count={children} 
          totalStrength={adults + children}
          maxStrengthReached={(adults+children) === rooms*4 }
        />
      </div>
    )
  }
}

export default BookingHandler