import React from 'react'
import './Button.css'
function Button(props) {
    return (
        <div>
            <a href="#" class="neon-button">{props.name}</a>
        </div>
    )
}

export default Button
