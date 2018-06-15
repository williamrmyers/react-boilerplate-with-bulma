import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/me">me</NavLink>
  </div>
);

export default Header;
