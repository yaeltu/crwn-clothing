import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = (props) =>{
    return(
        <div className = {`menu-item ${props.size}`}
            onClick = {() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
        <div style = {{backgroundImage: `url(${props.imageUrl})`}} className = "background-image" />
        <div className = "content">
            <h1 className = "title">{props.title.toUpperCase()}</h1>
            <span className = "subtitle">SHOP NOW</span>
        </div>  
    </div>
    )
}

export default withRouter(MenuItem);