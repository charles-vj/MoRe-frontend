import React from 'react'
import './cards.css';
import pic from './pic.jpeg'

const Card = ({title, image}) => {
    return (
        <>
            <div className="card">
                <div className="card_img">
                    <img  src={image} alt="" />
                </div>
                <div className="card_content">
                    <h2>{title}</h2>
                </div> 
            </div>
        </>

    )
}

export default Card
