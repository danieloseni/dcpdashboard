import React, { Component,Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Profile = lazy(() => import('./profile/Profile'));
const Rates = lazy(() => import('./rates/Rates'));

const Agents = lazy(() => import('./agents/Agents'));
const AgentForm = lazy(() => import('./agents/AgentForm'));

const Login = lazy(() => import('./user-pages/Login'));
const Register = lazy(() => import('./user-pages/Register'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/rates" component={Rates} />
          <PrivateRoute exact path="/agents" component={Agents} />
          <PrivateRoute exact path="/create-agent" component={AgentForm} />
          
          <PublicRoute exact path="/login" component={Login} restricted={true} />
          <PublicRoute exact path="/register" component={Register} restricted={true} />
          
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;