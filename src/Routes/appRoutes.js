import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage';
import Main from '../components/Main/Main';
import MakeMoney from '../Pages/MakeMoney/MakeMoney';
import RiderPage from '../Pages/RiderPage/RiderPage';

export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/DriverPage' component={Main} />
    <Route path='/MakeMoney' component={MakeMoney} />
    <Route path='/RiderPage' component={RiderPage} />
  </Switch>
);
