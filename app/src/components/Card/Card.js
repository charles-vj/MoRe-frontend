import React from 'react'
import './cards.css';

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img  src={props.image} alt="" />
                </div>
                <div className="content">
                     <h2 className>{props.title}</h2>
                </div> 
            </div>
         </>

    )
}

export default Card
