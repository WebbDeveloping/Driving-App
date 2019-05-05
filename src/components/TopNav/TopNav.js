import React, { Component } from 'react';
import './TopNav.css';
import { Redirect, Link } from 'react-router-dom';
// import '../../Media/IphonePlus.css';

export default class TopNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li class='home'>
            <Link to='/'>
              <i class='fa fa-home' />
            </Link>
          </li>
          <li>
            <Link to='/MakeMoney'>
              <a href='/MakeMoney'>Money</a>
            </Link>
          </li>
          <li>
            <Link to='/RiderPage'>
              <a href='/RiderPage'>Rider</a>
            </Link>
          </li>
          <li>
            <Link to='/DriverPage'>
              <a href='/DriverPage'>Driver</a>
            </Link>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
