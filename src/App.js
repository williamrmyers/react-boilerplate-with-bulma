import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './App.css'

import Home from './components/home';
import Header from './components/header';
import Me from './components/me';
import Signup from './components/signup';
import NotFound from './components/notFound';

// Currently App.js will contain the router.

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/me" component={Me} exact/>
          <Route path="/signup" component={Signup} exact/>
          <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;
