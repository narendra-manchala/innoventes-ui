import React from 'react';
import styles from './App.module.css';
import BookingHandler from './BookingHandler/BookingHandler';
import { FaUsers } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className={styles.title}><FaUsers /> Choose number of people</div>
      <BookingHandler />
    </div>
  );
}

export default App;
