import React from 'react';
import data from '../../designs-data.json';
import Designs from './Designs';
import './designList.css';

function DesignList() {
  const designs = data.map(({ title, image, desc }, i) => {
    return (
      <Designs id={i} key={title} title={title} image={image} desc={desc} />
    );
  });

  return (
    <div className="grid">
      {designs}
    </div>
  );
}

export default DesignList;
