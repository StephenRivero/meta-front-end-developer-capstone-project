import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../images/restaurantfood.jpg'

const Banner = () => {
  return (
    <section className='Banner'>
      {/* Banner text */}
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button aria-label='On Click'>Reserve a table</button>
        </Link>
        <img src={bannerImg} alt="Banner Img" className='banner-img' />
      </div>

      {/* Banner Image */}
      {/* <div className='banner-img'>
        <img src={bannerImg} alt="Banner Img" />
      </div> */}
    </section>
  )
}

export default Banner
