import React, { Component } from 'react';
import Dashboard from '../MainDashboard/Dashboard';
import ArticlePage from '../ArticlePage/ArticlePage';
import AnimatedGrid from '../AnimatedGrid';
import HowItWorks from '../HowItWorks/HowItWorks';
import Downloads from '../Downloads/Downloads';

class Main extends Component {
  render() {
    return (
      <div>
        <div className='main'>
          <div className='top-app-container'>
            <Dashboard />
          </div>
          <div className='none' style={{ marginTop: '2em' }}>
            <img
              className='how-img'
              alt='map and keys'
              src={require('../../map.jpg')}
            />
            <ArticlePage />
          </div>
        </div>
        <AnimatedGrid />
        <HowItWorks />
        <Downloads />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Main;
