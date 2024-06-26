import React from 'react';
import './Banner.css';
import Arrow from '../../assets/Arrow'


function Banner () {
  return (
  <div className='bannerParentDiv'>
    <div className='bannerChildDiv'>
        <div className='menuBar'>
            <div className='categoryMenu'>
                <span>ALL CATEGORIES</span>
                <Arrow />
            </div>
            <div className='otherQuickOptions'>
                <span>Cars...</span>
                <span>Motorcycle....</span>
                <span>Mobile Phone...</span>
                <span>Commercial & other vehicle...</span>
                <span>For Sale:House and Apartments...</span>
            </div>
        </div>
        <div className='banner'>
        <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
    </div>
  </div>
  );
}

export default Banner;