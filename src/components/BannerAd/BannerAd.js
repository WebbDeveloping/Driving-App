import React from 'react';
import './BannerAd.css';

export default function BannerAd() {
  return (
    <div>
      <div className='banner-example'>
        <div id='banner'>
          <div className='active bannerItem'>
            <span className='banner-header display-1'>
              Earn Up To $1250 Guaranteed!
            </span>
            <div className='banner-text'>Become a Driver Today!</div>

            <div className='btn btn-outline btn-lg' />
          </div>
        </div>
      </div>
    </div>
  );
}
