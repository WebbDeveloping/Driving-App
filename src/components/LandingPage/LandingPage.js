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
        {/* <div className='hero-text'>
          <div className=''>
            <Link className='link-button' to='/DriverPage'>
              <h4>Apply</h4>
            </Link>
          </div>

          <div className='ride-container'>
            <button className='rider-button'>Sign Up To Ride</button>
          </div>
        </div> */}
        <div className='col '>
          <div className=' col icon-box a-box not'>
            <h1>Not a driver yet? Start earning today.</h1>
            <h4>You’ll get rewards along the way.</h4>
            {/* <Link to='/DriverPage' style={{ textDecoration: 'none' }}>
              <div className='driver-button'>
                <h4>Apply to Drive</h4>
              </div>
            </Link> */}
            <div className='download-button'>
              <a href='/LyftPage'>Apply Now!</a>
            </div>
          </div>
        </div>
      </div>
      <div className='why-drive'>
        {/* <div className='ride-container' id='white'>
          <Link to='/DriverPage' style={{ textDecoration: 'none' }}>
            <button className='rider-button-b'>Why Drive: Driver</button>
          </Link>
        </div>
        <div className='ride-container' id='white'>
          <button className='rider-button-b'>Why Ride: Rider</button>
        </div> */}
        <div className='why-button'>
          <a
            className='wd'
            // style={{ backgroundColor: '#ff00bf' }}
            href='/DriverPage'
          >
            Why Drive?
          </a>
        </div>
        <div className='why-button'>
          <a
            className='wr'
            // style={{ backgroundColor: '#11111f', color: '#ff00bf' }}
            href='/RiderPage'
          >
            Why Ride?
          </a>
        </div>
      </div>
      <Downloads />
      <AnimatedGrid />
    </div>
  );
}
