import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './Banner'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Banner />} />
        
      </Routes>
      
    </main>
  )
}

export default Main
