import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import BannerAd from '../BannerAd/BannerAd';
// import photo1 from '../../../public/resources/Images';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='main_dash_container'>
        <div className='about_profile_pic'>
          <article className='article'>
            <div className='title'>
              <div className='title-word'>Turn Your</div>
              <div className='title-word ' id='word-two'>
                Car Into
              </div>
              <div className='title-word'>Your Office</div>
            </div>
            <br />
          </article>

          <div className='img_container'>
            <div className='profile_img' />
          </div>
        </div>

        <div className='banner-div'>
          <BannerAd />
        </div>

        <div className='referal_links'>
          <Link to='https://www.lyft.com/drive-with-lyft?utm_medium=d2di_iasms&ref=JOE432426'>
            <div id='div2' className='button large shine driver-button'>
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
