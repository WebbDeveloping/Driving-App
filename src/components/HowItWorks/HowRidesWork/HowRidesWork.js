import React, { Component } from 'react';
import '../HowItWorks.css';
import '../../ArticlePage/ArticlePage.css';

class HowRidesWork extends Component {
  state = {
    step1: true,
    step2: false,
    step3: false,
    step4: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setStateOne();
    }, 4000);
    setTimeout(() => {
      this.setStateTwo();
    }, 8000);
    setTimeout(() => {
      this.setStateThree();
    }, 12000);
    setTimeout(() => {
      this.setStateFour();
    }, 16000);
    setTimeout(() => {
      this.resetState();
    }, 20000);
  }
  setStateOne() {
    this.setState({
      step1: true,
      step2: false,
      step3: false,
      step4: false
    });
  }

  setStateTwo() {
    this.setState({
      step1: false,
      step2: true,
      step3: false,
      step4: false
    });
  }
  setStateThree() {
    this.setState({
      step1: false,
      step2: false,
      step3: true,
      step4: false
    });
  }
  setStateFour() {
    this.setState({
      step1: false,
      step2: false,
      step3: false,
      step4: true
    });
  }

  resetState() {
    this.setState({
      step1: true,
      step2: false,
      step3: false,
      step4: false
    });
    setTimeout(() => {
      this.setStateOne();
    }, 4000);
    setTimeout(() => {
      this.setStateTwo();
    }, 8000);
    setTimeout(() => {
      this.setStateThree();
    }, 12000);
    setTimeout(() => {
      this.setStateFour();
    }, 16000);
    setTimeout(() => {
      this.resetState();
    }, 20000);
  }
  render() {
    return (
      <div className='how-to'>
        <section className='how-to-section'>
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
              src={require('../Traffic - 6456.mp4')}
            />
          </video>
          <div className='scroll-article'>
            <div className='title-markers'>
              <h3>How Does Driving Work?</h3>
            </div>
            <div className='article-container'>
              <div className='scroll-box'>
                {this.state.step1 ? (
                  <div className='single-step-container'>
                    <div className='slide-item'>
                      <h3>Step 1</h3>
                      <div className='para-box'>
                        <div className='para-container'>
                          <p>Apply to Drive and get approved</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : this.state.step2 ? (
                  <div className='single-step-container'>
                    <div className='slide-item'>
                      <h3>Step 2</h3>
                      <div className='para-box'>
                        <div className='para-container'>
                          <p>
                            Download the App in the Apple App Store or
                            GooglePlay
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : this.state.step3 ? (
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
                ) : this.state.step4 ? (
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
                ) : (
                  <h1>idk whats wrong</h1>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className='happy'>
          <div className='happy-image-container' />
          <div className='happy-text-container'>
            <div className='happy-text'>
              <h3>Earning, Flexibility, and Support</h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default HowRidesWork;
