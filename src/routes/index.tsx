import React from "react";
import { Switch } from 'react-router-dom';

import Route from './route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate/>
    <Route path="/register" component={Register} isPrivate />
  </Switch>
);

export default Routes;
