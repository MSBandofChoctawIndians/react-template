import React from 'react'
import Chevron from '/chevron.svg'

function Card () {
  return (
    <div className="card">
      <img className="card-image" src={Chevron} height={150} width={150} alt="profile picture" />
      <h2 className="card-title">Sonny Mattera</h2>
      <p className='card-text'>I make websites and play video games</p>
    </div>
  )
}

export default Card
