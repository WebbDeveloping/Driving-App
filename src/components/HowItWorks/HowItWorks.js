import React from 'react';
import './HowItWorks.css';
import '../ArticlePage/ArticlePage.css';
// import { url } from 'inspector';
// const theImg = require('images.ctfassets.net / q8mvene1wzq4 / 3UsEjP8gZqlGqsPoe954mj / 6b305dc…/Bg_Illustration.jpg');
// const theImg = require(url(https://images.ctfassets.net/q8mvene1wzq4/3UsEjP8gZqlGqsPoe954mj/6b305dc4ab35430c50eddb69fa04788b/Bg_Illustration.jpg));

export default function HowItWorks() {
  return (
    <div className='how-to'>
      <section className='how-to-section'>
        {/* <video
          className='how-img'
          style={{
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'white'
          }}
        /> */}
        <video
          class='video-container video-container-overlay how-img'
          autoplay=''
          loop='yes'
          muted=''
          data-reactid='.0.1.0.0'
        >
          <source
            type='video/mp4'
            data-reactid='.0.1.0.0.0'
            src={require('./Traffic - 6456.mp4')}
          />
        </video>
        <div className='outer-article'>
          <div className='title-markers'>
            <h3>How Does Driving Work?</h3>
          </div>
          <div className='article-container'>
            <div className='article-box'>
              <div className='slide-item'>
                <h3>Step 1</h3>
                <div className='para-box'>
                  <div className='para-container'>
                    <p>Apply to Drive and get approved</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <br /> */}
            <div className='single-step-container'>
              <div className='slide-item'>
                <h3>Step 2</h3>
                <div className='para-box'>
                  <div className='para-container'>
                    <p>Download the App in the Apple App Store or GooglePlay</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <br /> */}
            <div className='single-step-container'>
              <div className='slide-item'>
                <h3>Step 3</h3>
                <div className='para-box'>
                  <div className='para-container'>
                    <p>Accept Rides and Earn Money!</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <br /> */}
            <div className='single-step-container'>
              <div className='slide-item'>
                <h3>Step 4</h3>
                <div className='para-box'>
                  <div className='para-container'>
                    <p>Cash out instantly with Express Pay*</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <br /> */}
          </div>
        </div>
      </section>
      <section className='happy'>
        <div className='happy-image-container' />
        <div className='happy-text-container'>
          <div className='happy-text'>
            <h3>Earning, Flexibility, and Support</h3>
            {/* <div className='p-stuff'>
              <p>
                See how Ivette, Bleejay, Lou, and Ariana use Lyft to drive
                toward their dreams.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
