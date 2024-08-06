import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';
export default function Nav() {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const toggleBurger = () => {
        console.log(burgerOpen)
        setBurgerOpen(!burgerOpen)
    }
    return (
        <div className='navbar'>
            <nav className="nav">
                <div>
                    <h4 className="logo"><Link to = "/">Relia-Mate</Link></h4>
                </div>
                <ul className="nav-links">
                    
                    <Link to = "/"><li>Home</li></Link>
                    <Link to = "/search"><li>Search</li></Link>
                    
                </ul>
                <div className="burger" onClick={toggleBurger}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            {
                burgerOpen ? (
                    <div className='burger-menu'>
                        <div className="burger-link" onClick={toggleBurger}>
                        <Link to = "/"><li>Home</li></Link>
                        </div>
                        <div className="burger-link" onClick={toggleBurger}>
                    <Link to = "/search"><li>Search</li></Link>
                    </div>
                    <div className="burger-link" onClick={toggleBurger}>
                        <Link to = "/trending"><li>Trending</li></Link>
                    </div>
                    </div>
                ) : (<></>)
            }
        </div>
    )
}

