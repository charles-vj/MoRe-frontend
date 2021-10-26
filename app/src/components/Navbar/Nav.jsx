import React from 'react'
import './Nav.css';
export default function Nav() {
    return (
        <div className="Nav">
            <nav>
                <div>
                    <h4 className="logo"><a href="#">MoRe</a></h4>
                </div>
                <ul className="nav-links">
                    
                    <li>About</li>
                    <li>Team</li>
                    <li>Inventory</li>
                </ul>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    )
}

