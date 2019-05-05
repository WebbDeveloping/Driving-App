import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RiderArticle.css';
// import '../../Media/IphonePlus.css';

export default class RiderArticle extends Component {
  render() {
    return (
      <div className='outer-article'>
        <div className='article-container'>
          <div className='article-box'>
            <h4>Rides on Tap</h4>
            <div className='the-paragraph'>
              <p>
                With 95% coverage across the US, you can be on your way in just
                a few minutes.
              </p>
            </div>
          </div>
          {/* // */}
          <div className='article-box'>
            <h4>Budget-Friendly</h4>
            <div className='the-paragraph'>
              <p>
                Whether you need a luxury ride or one to carry the whole family,
                easily compare ride types, pricing, and ETAs right up front.
              </p>
            </div>
          </div>
          {/* // */}
          <div className='article-box'>
            <h4>Safety First</h4>
            <div className='the-paragraph'>
              <p>
                Drivers undergo two types of background checks and give over 1
                million rides every single day — that's why the average Lyft
                ride is rated 4.8 out of 5 stars.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
