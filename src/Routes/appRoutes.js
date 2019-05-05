import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage';
import Main from '../components/Main/Main';
import MakeMoney from '../Pages/MakeMoney/MakeMoney';

export default (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/DriverPage' component={Main} />
    <Route path='/MakeMoney' component={MakeMoney} />
    {/* <Main */}
  </Switch>
);
