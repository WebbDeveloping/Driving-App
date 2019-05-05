import React, { Component } from 'react';
import './Dashboard.css';
import BannerAd from '../BannerAd/BannerAd';
// import photo1 from '../../../public/resources/Images';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='main_dash_container'>
        <div className='about_profile_pic'>
          <article className='article'>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, si
              semel tristior effectus est, hilara vita amissa est? Quod quidem
              iam fit etiam in Academia. Quo tandem modo? Nunc omni virtuti
              vitium contrario nomine opponitur. Et ille ridens: Video, inquit,
              quid agas; Duo Reges: constructio interrete. Hoc simile tandem
              est? Nam ista vestra: Si gravis, brevis; Restinguet citius, si
              ardentem acceperit. Summum ením bonum exposuit vacuitatem doloris;
              Sed quid attinet de rebus tam apertis plura requirere?
            </p> */}

            <div className='title'>
              <div className='title-word'>Turn Your</div>
              <div className='title-word ' id='word-two'>
                Car Into
              </div>
              <div className='title-word'>Your Office</div>
            </div>
            <br />
          </article>

          <div className='img_container'>
            <div
              className='profile_img'
              // alt='driver'
              // src={require('./photo1.jpg')}
            />
            {/* <h1 className='img_text'> Drive4Lyft</h1> */}
          </div>
        </div>
        {/* <div className='pink_box_dash' /> */}
        {/* <div className='ribbon-container'> */}
        <div className='banner-div'>
          <BannerAd />
        </div>
        {/* </div> */}
        <div className='referal_links'>
          {/* <div id='div2' class='button large'>
            Rider
          </div> */}
          <div id='div2' className='button large shine'>
            Sign Up
          </div>
        </div>
      </div>
    );
  }
}
