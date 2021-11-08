import React from 'react'
import Button from '../Accessories/Button/Button'
import './Home.css'
import pic from './homepic2.svg'
function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <div className="content">
                    <h1 className="tagline">Deciding <span className="seco">what</span> to <span className="prim">watch next?</span></h1>
                    <p className="desc">You’re in the right place. Tell us what movies or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations, through our recommendation system</p>
                    <div className="joinus"><Button name="Join Us" /></div>
                </div>
            </div>
            <div className="vec">
                <img src={pic} alt="React Logo" />
            </div>
        </div>
    )
}

export default Home
