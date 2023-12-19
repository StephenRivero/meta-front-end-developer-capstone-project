import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './Banner'
import Booking from './Booking'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </main>
  )
}

export default Main
