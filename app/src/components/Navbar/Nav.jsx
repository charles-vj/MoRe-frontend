import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom'
export default function Nav() {
    return (
        <div className="Nav">
            <nav>
                <div>
                    <h4 className="logo"><Link to = "/">MoRe</Link></h4>
                </div>
                <ul className="nav-links">
                    
                    <Link to = "/"><li>Home</li></Link>
                    <Link to = "/search"><li>Search</li></Link>
                    <Link to = "/trending"><li>Trending</li></Link>
                    
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

