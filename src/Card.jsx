import React from 'react'
import Chevron from '/chevron.svg'

function Card () {
  return (
    <div className="card">
      <img src={Chevron} height={150} width={150} alt="profile picture" />
      <h2>Sonny Mattera</h2>
      <p>I make websites and play video games</p>
    </div>
  )
}

export default Card
