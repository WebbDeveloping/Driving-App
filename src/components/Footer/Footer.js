import React from 'react';
import './Footer.css';
// const fb = require('./facebook.svg');

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='social-links'>
          <ul className='social-fa'>
            <li>
              <a href='#' class='fa fa-twitter' />
            </li>
            <li>
              <a href='#' class='fa fa-facebook' />
            </li>
            <li>
              <a href='#' class='fa fa-instagram' />
            </li>
          </ul>
        </div>
        <hr />
        <ul className='privacy-stuff'>
          <li>
            <p>Terms</p>
          </li>
          <li>
            <p>Privacy</p>
          </li>
          <li>
            <p> © 2019 WebbDeveloping.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
