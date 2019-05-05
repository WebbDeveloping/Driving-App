import React from 'react';
import './Downloads.css';
const apple = require('./icons/apple.png');
const microsoft = require('./icons/microsoft-lyft.svg');
// const google = require('./icons/google-play-badge.png');
// const google = require('./google-play-badge.png');
const amazon = require('./icons/amazon-appstore-badge-english-black.png');

export default function Downloads() {
  return (
    <div className='download-container'>
      <h3 className='the-three'>DOWNLOAD</h3>

      <div className='top-icons jc'>
        <div className='img-container'>
          <img
            className='img-d'
            alt='google'
            src={require('./icons/google-play-badge.png')}
          />
        </div>
        <div className='img-container'>
          <img
            className='img-d apple-badge'
            alt='apple'
            src={require('./icons/apple.png')}
          />
        </div>
      </div>
      <div className='bottom-icons jc'>
        <div className='img-container'>
          <img
            className='img-d'
            alt='amazon'
            src={require('./icons/amazon-appstore-badge-english-black.png')}
          />
        </div>
        <div className='img-container'>
          <img
            className='img-d'
            alt='microsoft'
            src={require('./icons/microsoft-lyft.svg')}
          />
        </div>
      </div>
    </div>
  );
}
