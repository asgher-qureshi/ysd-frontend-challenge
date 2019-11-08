import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList.jsx';
import Details from './Details.jsx';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={UserList}/>
      <Route exact path='/details/:id' component={Details}/>
    </Switch>
  </main>
)

export default Routes
