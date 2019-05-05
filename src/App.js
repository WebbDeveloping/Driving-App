import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appRoutes from './Routes/appRoutes';
// import '../src/Media/IphonePlus.css';
import TopNav from './components/TopNav/TopNav';
// import Dashboard from './components/MainDashboard/Dashboard';
// import ArticlePage from './components/ArticlePage/ArticlePage';
// import AnimatedGrid from './components/AnimatedGrid';
// import HowItWorks from './components/HowItWorks/HowItWorks';
// import Downloads from './components/Downloads/Downloads';
import Footer from './components/Footer/Footer';
// import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopNav />
        {appRoutes}
        <Footer />
      </div>
    );
  }
}

export default App;
{
  /* <LandingPage />
  <div className='main'>
    <TopNav />
    <div className='top-app-container'>
      <Dashboard />
    </div>
    
  <Footer /> */
}
