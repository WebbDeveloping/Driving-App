import React, { Component } from 'react';
import './RiderPage.css';
import AnimatedGrid from '../../components/AnimatedGrid';
import RiderArticle from '../../components/ArticlePage/RiderArticle/RiderArticle';
import Downloads from '../../components/Downloads/Downloads';
import HowRidesWork from '../../components/HowItWorks/HowRidesWork/HowRidesWork';

export default class RiderPage extends Component {
  render() {
    return (
      <div>
        <section style={{ height: '100%' }} className='hello-rider-container'>
          <div className='hello-rider-box'>
            <div className='hello-rider'>
              <div className='rider-text-wrap shadow-box'>
                <div className='heading-text'>
                  <h6>Hello Future Rider!</h6>
                  <h1 className='make-bigger'>
                    Let’s go. Get a link to download the app.
                  </h1>
                </div>
                <div className='download-button'>
                  <a href='/DriverPage'>Download</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <img
          alt='driver'
          src={require('./auto-automotive-blur-1842623.jpg')}
          style={{ width: '100%' }}
        />
        <section>
          <RiderArticle />
        </section>
        <section>
          <HowRidesWork />
        </section>
        <Downloads />
        <AnimatedGrid />
      </div>
    );
  }
}
