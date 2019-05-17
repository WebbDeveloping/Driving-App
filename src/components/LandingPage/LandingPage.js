import React from 'react';
import './LandingPage.css';
import { Redirect, Link } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';
import Downloads from '../Downloads/Downloads';
import '../../Pages/MakeMoney/MakeMoney.css';
import AnimatedGrid from '../AnimatedGrid';

export default function LandingPage() {
  const goToLyft = () => {
    return <Link to='/LyftPage'>words</Link>;
  };
  return (
    <div style={{ height: '100%' }} className=''>
      <div className='hero-image'>
        <div className='col '>
          <div className=' col icon-box a-box not shadow-box'>
            <h1 style={{ color: 'white' }}>
              The Average Ride Share Driver Earns $26 an Hour!
            </h1>
            <h4>Apply Today and Start Earning!!</h4>

            <div className='download-button'>
              <a href='/LyftPage'>Apply Now!</a>
            </div>
          </div>
        </div>
      </div>
      <div className='why-drive'>
        <div className='why-button'>
          <a className='wd' href='/DriverPage'>
            Why Drive?
          </a>
        </div>
        <div className='why-button'>
          <a className='wr' href='/RiderPage'>
            Why Ride?
          </a>
        </div>
      </div>
      <Downloads />
      <AnimatedGrid />
    </div>
  );
}
