import React from 'react';
import './Footer.css';
// const fb = require('./facebook.svg');

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='social-links'>
          <ul>
            <li>
              <p>twitter</p>
            </li>
            <li>
              <img
                className='fb'
                alt='fb icon'
                src={require('./6604422511553238459-original.png')}
              />
            </li>
            <li>
              <p>instagram</p>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <p>Terms</p>
          </li>
          <li>
            <p>Privacy</p>
          </li>
          <li>
            <p>Joe Webb 2019</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
