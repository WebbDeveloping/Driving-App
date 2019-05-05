import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import appRoutes from './Routes/appRoutes';

import TopNav from './components/TopNav/TopNav';

import Footer from './components/Footer/Footer';
import RiderPage from './Pages/RiderPage/RiderPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopNav />
        {appRoutes}
        {/* <RiderPage / */}
        <Footer />
      </div>
    );
  }
}

export default App;
