import React, { Component } from 'react';
import './TopNav.css';
import { Redirect, Link } from 'react-router-dom';
// import '../../Media/IphonePlus.css';

export default class TopNav extends Component {
  render() {
    return (
      // <div class='topnav' id='myTopnav'>
      //   <a href='#home' class='active'>
      //     Home
      //   </a>
      //   <a href='#news'>News</a>
      //   {/* <h2 className='center_word'>Joe</h2> */}
      //   <a href='#contact'>Contact</a>
      //   <a href='#about'>About</a>
      //   {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      //           <i class="fa fa-bars"></i>
      //       </a> */}
      // </div>
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
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
