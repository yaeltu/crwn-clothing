import React from 'react';
import './menu-item.scss';

const MenuItem = (props) =>{
    return(
        <div className = {`menu-item ${props.size}`}>
        <div style = {{backgroundImage: `url(${props.img})`}} className = "background-image" />
        <div className = "content">
            <h1 className = "title">{props.title.toUpperCase()}</h1>
            <span className = "subtitle">SHOP NOW</span>
        </div>  
    </div>
    )
}

export default MenuItem;