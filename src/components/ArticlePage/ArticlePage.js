import React, { Component } from 'react';
import './ArticlePage.css';
// import '../../Media/IphonePlus.css';

export default class ArticlePage extends Component {
  render() {
    return (
      <div className='outer-article'>
        <div className='article-container'>
          <div className='article-box'>
            <h4>Reliable Earnings</h4>
            <div className='the-paragraph'>
              <p>
                The Lyft Driver app and its features help you make money you can
                depend on. When you're ready, cash out instantly.
              </p>
              <p>
                <strong>MAKE MONEY</strong>
              </p>
            </div>
          </div>
          {/* // */}
          <div className='article-box'>
            <h4>A Few Necesseties</h4>
            <div className='the-paragraph'>
              <p>
                You'll need to be at least 21 and have a smartphone (bonus
                points for good music). Your city will also have a few
                requirements.
              </p>
              <p>
                <strong>FIND YOUR CITY</strong>
              </p>
            </div>
          </div>
          {/* // */}
          <div className='article-box'>
            <h4>Need a Car?</h4>
            <div className='the-paragraph'>
              <p>
                The Lyft Driver app and its features help you make money you can
                depend on. When you're ready, cash out instantly.
              </p>
              <p>
                <strong>GET YOURS</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
