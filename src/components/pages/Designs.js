import React from 'react';
import './design.css';

function Designs(props) {
  const { title, image, desc, id } = props
  return (
    <div className="grid--item">
      <div 
        className='img' 
        style={{  
          backgroundImage: "url(" + `${process.env.PUBLIC_URL}` + "/images/" + `${props.image}` + ")",
        }}>
      </div>
      <div className='container'>
        <h2>{props.title}</h2>
        <div className='desc'>{props.desc}</div>
      </div>
    </div>
  );
}

export default Designs;
