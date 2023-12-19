import React from 'react'

const BookingForm = () => {
  return (
    <section className='booking-form'>
      <form action="">
        <fieldset>
          {/* Book Date */}
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input type="date" id='book-date' required/>
          </div>
          {/* Book Time */}
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select name="" id="book-time">
              <option value="">Select a Time</option>
            </select>
          </div>
          {/* Number of Guests */}
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input type="number" min={1} required/>
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
