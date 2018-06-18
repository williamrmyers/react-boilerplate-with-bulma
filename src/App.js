import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import './App.css'
import Cookies from 'universal-cookie';

import Home from './components/home';
import Header from './components/header';
import Me from './components/me';
import Signup from './components/signup';
import Login from './components/login';
import Settings from './components/settings';
import NotFound from './components/notFound';

// Currently App.js will contain the router.

let isAuthenticated = false;


const auth = {
  isAuthenticated: false,
  authenticate(token ,cb) {
    this.isAuthenticated = true;
    this.token = token;
    const cookies = new Cookies();
    cookies.set('auth', token, { path: '/' });
  },
  signout(cb) {
    this.isAuthenticated = false
    // Delete Cookie
    // Make Request to Logout.
  }
}
// auth.authenticate('ugdushj',() => {
//   console.log(`auth triggered.`, auth );
// })

// This is a custom route privitisation method.
// https://tylermcginnis.com/react-router-protected-routes-authentication/
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

class AppRouter extends Component {
  state = {
    token: false,
    authenticated: false
  };
  componentWillMount() {
    // console.log({isAuthenticated});
    // // Check if auth Cookie exists
    // const cookies = new Cookies();
    // const auth = cookies.get('auth');
    // if (auth) {
    //   this.setState(() => ({
    //     authenticated: true,
    //     token: auth
    //   }))
    // }
  }

  handelSubmit = (response) => {
    // console.log('handelSubmission', response);

    auth.authenticate(response.data.token,() => {
      // console.log(`auth triggered.`, auth );
    });
    console.log(response.data.token);

    this.setState(() => ({
      authenticated: true,
      token: response.data.token
    }));
    console.log();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header isAuthenticated={this.state.authenticated}/>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/signup" exact render={(props) => <Signup {...props} handelSubmit={this.handelSubmit} />} />
              <Route path="/login" exact render={(props) => <Login {...props} handelSubmit={this.handelSubmit} />} />
              <PrivateRoute path="/me" component={Me} exact/>
              <PrivateRoute path="/settings" component={Settings} exact/>
              <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


// <Route exact path="/signup" render={(props) => <Signup {...props} handelSubmit={this.handelSubmit} />} render={() => ( this.state.authenticated ? ( <Redirect to="/me"/>) : ( <Signup /> ))}/>


// <Route path="/signup" exact render={(props) => <Signup {...props} handelSubmit={this.handelSubmit} />} />
// class App extends Component {
//   state = {
//     token: false,
//     authenticated: false
//   };
//
//   handelSubmission = (message) => {
//     console.log('handelSubmission', message);
//   }
//
//   render() {
//     return (
//       <div>
//         <Header />
//         <h1>This is the App Component.</h1>
//         <Signup handelSubmission={this.handelSubmission}/>
//         <Login handelSubmission={this.handelSubmission}/>
//       </div>
//     )
//   }
// }



export default AppRouter;
