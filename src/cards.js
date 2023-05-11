import React from 'react';
import { FaCamera, FaVideo } from 'react-icons/fa';

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />


      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="card-icons">
          <FaCamera />
          <FaVideo />
        </div>
      </div>
    </div>
  );

  
}

export default Card;
