import React from 'react'
import './cards.css'
import pic from './pic.jpeg'

const Card = ({ title, image, desc }) => {
  //   console.log(desc, image, title)
  return (
    <>
      <div className="card">
        <div className="card_content">
          <h2>Level of severity on a scale of 1-3 : {title}</h2>
        </div>
        <div className="card_content">
          <h2>{desc}</h2>
        </div>
        <div className="card_img">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  )
}

export default Card
