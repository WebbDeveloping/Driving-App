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
  return (
    <div style={{ height: '100%' }} className='shade'>
      <div className='hero-image'>
        <div className='hero-text'>
          <Link to='/DriverPage'>
            <div className='driver-button'>
              <h4>Apply</h4>
            </div>
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to='/RiderPage'>
            <div className='ride-container'>
              <button className='rider-button'>Sign Up To Ride</button>
            </div>
          </Link>
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
    </div>
  );
}
