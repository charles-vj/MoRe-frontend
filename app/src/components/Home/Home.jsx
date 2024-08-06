import React from 'react'
import Button from '../Accessories/Button/Button'
import './Home.css'
import pic from './homepic2.svg'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <div className="content">
                    <h1 className="tagline">Deciding <span className="seco">what</span> could be<span className="prim"> the issue?</span></h1>
                    <p className="desc">You’re in the right place. Tell us what problems you see and then we'll help you</p>
                    <div className="joinus"><Link to = "/search"><Button name="Search" /></Link></div>
                </div>
            </div>
            <div className="vec">
                <img src={pic} alt="React Logo" />
            </div>
        </div>
    )
}

export default Home
