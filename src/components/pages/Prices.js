import React from 'react';
import data from '../../prices-data.json';
import { Link } from 'react-router-dom';
import './Prices.css';

function DesignList() {
  const prices = data.map(({ name, desc, price, time }, i) => {
    return (
      <div className='single-item-price'>
          <p className='price-name'>{name}</p>
          <p className='price-desc'>{desc}</p>
          <p className='price-price'>Prix: ${price}</p>
          <p className='price-time'>Duree: {time}</p>
          <Link to="/bookUs" className='booking-link' ><span className="fa-solid fa-calendar-day"></span> Prendre rendez-vous!</Link>
      </div>
    );
  });

  return (
    <div className="prices-container">
      <div className="prices">{prices}</div>
    </div>
  );
}

export default DesignList;