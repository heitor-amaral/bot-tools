import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
