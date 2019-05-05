import React, { Component } from 'react';
import Downloads from '../../components/Downloads/Downloads';
import AnimatedGrid from '../../components/AnimatedGrid';
import './MakeMoney.css';

export default class MakeMoney extends Component {
  render() {
    return (
      <div>
        <article>
          <div className='make-money'>
            {/* <div className='top-mm-box'>
              <div className='inner-mm-box'>
                <div className='text-wrap-mm'>
                  <div className='form-container'>
                    <div className='mm-title-wrapper'>
                      <h6 className='the-six'>Hello Future Driver</h6>
                    </div>
                    <h1 className='the-one'>START MAKING MONEY AS A DRIVER</h1>
                    <form className='mm-form'>
                      <input className='mm-input' />
                      <div className='agree'>
                        <div className='apply-to-drive'>
                          <button className='the-button'>Drive</button>
                        </div>
                        <div className='label-wrapper'>
                          <label classname='mm-label' />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
            <img
              alt='driver'
              style={{ height: '250px' }}
              src={require('./automobile-automotive-car-1386649.jpg')}
            />
            <section className='mm-sec'>
              <div className=''>
                <h3>Earn on your terms!</h3>
                <div className='p-wrapper-top'>
                  <p>
                    Lyft drivers are earning to reach important goals, like
                    providing for their families or paying off school loans. To
                    make it easier for you to reach those goals, we’ll show you
                    when and where you’ll earn the most. You can even set weekly
                    earning goals in the app, and we’ll help you stay on track
                    to reach them.
                  </p>
                </div>
              </div>
            </section>
            <section className='mm-sec'>
              <div>
                <h1>Make Money As A Driver</h1>
              </div>
              <div className='top-icon-box'>
                <div className='icon'>
                  <img alt='icon' src={require('./Quickly_2x.png')} />
                  <div className='text-wrapper'>
                    <h3>Get Paid Quickly</h3>
                    <div className='p-wrapper'>
                      <p>
                        When you drive with Lyft, you can cash out your earnings
                        any day of the week. Our Express Pay feature lets you
                        get paid instantly — as long as you’ve earned at least
                        $5.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className='icon'>
                  <img alt='icon' src={require('./Bonuses_2x.png')} />
                  <div className='text-wrapper'>
                    <h3>Score Driver Bonuses!</h3>
                    <div className='p-wrapper'>
                      <p>
                        With Ride Challenges, Prime Time, Ride Streaks, Personal
                        Power Zones, and more, you’ll have plenty of
                        opportunities to earn extra cash when you drive. And
                        with referral bonuses, you can earn extra when you’re
                        off the road too.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className='icon'>
                  <img alt='icon' src={require('./Tips_2x.png')} />
                  <div className='text-wrapper'>
                    <h3>Make More in Tips!</h3>
                    <div className='p-wrapper'>
                      <p>
                        Since day one, Lyft passengers have thanked drivers with
                        over half a billion dollars in tips. We make it easy for
                        passengers to add tips after every ride — right from the
                        app.
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className='icon'>
                  <img alt='icon' src={require('./Rental_2x.png')} />
                  <div className='text-wrapper'>
                    <h3>Get an Affordable Rental</h3>
                    <div className='p-wrapper'>
                      <p>
                        You can still earn with Lyft if you don’t have a car.
                        Our Express Drive program lets you rent a set of wheels
                        at an affordable rate, and you can use the car for
                        driving with Lyft and personal use.
                      </p>
                    </div>
                  </div>
                </div>
                <br />

                <div className='icon'>2</div>
                <div className='icon'>3</div>
                <div className='icon'>4</div>
              </div>
            </section>
            <section className='mm-sec'>3</section>
            <section className='mm-sec'>4</section>
          </div>
          <footer>
            <Downloads />
          </footer>
        </article>
        <AnimatedGrid />
      </div>
    );
  }
}
