import React from 'react';
import "./card.css";
import Image1 from "./images/consultantimg-1.jpg";
const Card = () => {
    return (
        <div className="container">
            <img src={Image1} alt="" />
            <div className="overlay">
                <div className="content">
                    <h3>hi..</h3>
                    <p>hello</p> 
                </div>
            </div>
        </div>

    );
}

export default Card;
