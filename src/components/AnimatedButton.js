import React from 'react'
import './AnimatedButton.css'

function AnimatedButton() {
  return (
    <div>
<button className="btn">
      <span className="btn__inner">
        <Link to="/contact" className="btn__link">
        <span className="btn__text">Contact me</span>
        </Link>
      
      </span>
    </button>
    </div>
  )
}

export default AnimatedButton