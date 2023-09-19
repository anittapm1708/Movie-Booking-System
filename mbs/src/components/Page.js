// Page.js

import React from 'react';
import './Page.css';

function Page() {
  return (
    <div className="page">
         <div className="main_rectangle">
         <span className="arrow">&lt;</span>
        <div className="square">
          <span className='md'>19 SEP</span>
        </div>
        <div className="square">
          <span className='md'>20 SEP</span>
        </div>
        <div className="square">
          <span className='md'>21 SEP</span>
           {/* <span className="arrow">&gt;</span> */}
        </div>
        <span className="arrow">&gt;</span>
      </div>
      <div className="rectangle">
        <div className="text-left">Jawan(UA)</div>
        <div className="center-right-container">
          <div className="center-rectangle">
            <hp>10:00 am</hp>
          </div>
          <div className="center-rectangle">
          <hp>12:00 pm</hp>
          </div>
          <div className="center-rectangle">
          <hp>4:00 pm</hp>
          </div>
          <div className="center-rectangle">
          <hp>10:00 pm</hp>
          </div>
        </div>
        {/* <div className="text-right">Text Right 1</div> */}
      </div>
      <div className="rectangle">
        <div className="text-left">RDX(UA)</div>
        <div className="center-right-container">
          <div className="center-rectangle">
          <hp>10:00 am</hp>
          </div>
          <div className="center-rectangle">
          <hp>11:00 am</hp>
          </div>
          <div className="center-rectangle">
          <hp>1:00 pm</hp>
          </div>
          <div className="center-rectangle">
          <hp>10:00 pm</hp>
          </div>
        </div>
        {/* <div className="text-right"></div> */}
      </div>
      <div className="rectangle">
        <div className="text-left">Nun 2(UA)</div>
        <div className="center-right-container">
          <div className="center-rectangle">
          <hp>10:00 am</hp>
          </div>
          <div className="center-rectangle">
          <hp>12:00 pm</hp>
          </div>
          <div className="center-rectangle">
          <hp>5:00 pm</hp>
          </div>
          <div className="center-rectangle">
          <hp>10:00 pm</hp>
          </div>
        </div>
        {/* <div className="text-right">Text Right 3</div> */}
      </div>
    </div>
  );
}

export default Page;
