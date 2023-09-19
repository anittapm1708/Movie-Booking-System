// Page.js

import React from 'react';
import './Page.css';
import Rectangle from './Rectangle'; // Import the Rectangle component

function Page() {
  return (
    <div className="page">
      <div className="main_rectangle">
        <span className="arrow">&lt;</span>
        <div className="square1">
          <span className='md1'>19 SEP</span>
        </div>
        <div className="square2">
          <span className='md2'>20 SEP</span>
        </div>
        <div className="square3">
          <span className='md3'>21 SEP</span>
          {/* <span className="arrow">&gt;</span> */}
        </div>
        <span className="arrow">&gt;</span>
      </div>
      
      {/* Include the Rectangle component */}
      <Rectangle />
      
    </div>
  );
}

export default Page;
