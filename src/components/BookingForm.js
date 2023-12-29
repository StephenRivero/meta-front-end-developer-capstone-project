import React, { useState } from 'react'

const BookingForm = (props) => {

  const [date, setDate] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  const handleDateChange = (e) => {
    setDate(e);
  }

  return (
    <section className='booking-form'>
      <form action="">
        <fieldset>
          {/* Book Date */}
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input id='book-date' type="date" value={date} onChange={(e) => handleDateChange(e.target.value)} required/>
          </div>
          {/* Book Time */}
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select name="" id="book-time">
              <option>Select a Time</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          {/* Number of Guests */}
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input type="number" id='book-guests' min={1} placeholder="1" required/>
          </div>
          {/* Occasion */}
          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select name="" id="book-occasion">
              <option value="">Birthday</option>
              <option value="">Anniversary</option>
            </select>
          </div>
          {/* Reservation Button */}
          <div className='reservation-button'>
            <button>Make Your Reservation</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default BookingForm
