import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../page/Home';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/page1' component={ Page1 } />
      <Route path='/page2' component={ Page2 } />
      <Route path='/page3' component={ Page3 } />
    </Switch>
  </main>
);

export default Main;
