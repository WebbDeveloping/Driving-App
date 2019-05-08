import React from 'react';
import './LandingPage.css';
import { Redirect, Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';
import Downloads from '../Downloads/Downloads';
import '../../Pages/MakeMoney/MakeMoney.css';
import AnimatedGrid from '../AnimatedGrid';
const backgroundImg = require('./alessio.jpg');

export default function LandingPage() {
  const goToLyft = () => {
    return <Link to='/LyftPage'>words</Link>;
  };
  return (
    <div style={{ height: '100%' }} className=''>
      <div className='hero-image'>
        <div className='hero-text'>
          <Link
            className='driver-button'
            to='/DriverPage'
            style={{ width: '70px', height: '30px', alignItems: 'center' }}
          >
            {/* <div className=''> */}
            <h4>Apply</h4>
            {/* </div> */}
          </Link>
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br /> */}

          <div className='ride-container'>
            <button className='rider-button'>Sign Up To Ride</button>
          </div>
        </div>
      </div>
      <div className='why-drive'>
        <div className='ride-container' id='white'>
          <Link to='/DriverPage'>
            <button className='rider-button-b'>Why Drive: Driver</button>
          </Link>
        </div>
        <div className='ride-container' id='white'>
          <button className='rider-button-b'>Why Ride: Rider</button>
        </div>
      </div>
      <Downloads />
      <AnimatedGrid />
    </div>
  );
}
