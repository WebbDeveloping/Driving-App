import React from 'react';

export default function HowRidesWork() {
  return (
    <div className='how-to-rider'>
      <section className='how-to-section'>
        <div className='outer-article'>
          <div className='title-markers'>
            <h3>How Do Rides Work?</h3>
          </div>
          <div className='article-container'>
            <div className='article-box'>
              <div className='slide-item'>
                <h3>Step 1</h3>
                <div className='para-box'>
                  <div className='para-container'>
                    <p>Choose your destination</p>
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
                    <p>See your cost upfront</p>
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
                    <p>Get a Ride in Minutes!</p>
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
                    <p>Pay in the App</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <br /> */}
          </div>
        </div>
      </section>
      {/* <section className='happy'>
        <div className='happy-image-container' />
        <div className='happy-text-container'>
          <div className='happy-text'>
            <h3>Earning, Flexibility, and Support</h3>
          </div>
        </div>
      </section> */}
    </div>
  );
}
