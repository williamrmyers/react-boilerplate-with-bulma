import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Modal from 'react-modal';

class Header extends React.Component {
  state = {
    hambergerToggle: ""
  };

  // handleLogin = () => {
  // console.log(`Login Button Pushed.`);
  // }

  toggleBerger = (state) => {
    console.log(`Hamberger clicked.`);
        if (this.state.hambergerToggle){
              this.setState(() => ({hambergerToggle: ""}))
            } else {
              this.setState(() => ({hambergerToggle: 'is-active' }))
        }
    }

  render() {
    const logginButton = 'Sign Up';

    return (
      <div>
        <section className="section">
        <nav className="navbar is-black is-fixed-top">
          <div className="navbar-brand">
            <NavLink to="/">
            <a className="navbar-item">
              <img src="acme.png" alt="A boilerplate App" width="112" height="28"/>
            </a></NavLink>
            <div className="navbar-burger burger" onClick={this.toggleBerger} data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navbarExampleTransparentExample" className={this.state.hambergerToggle + " navbar-menu"} >
            <div className="navbar-start"></div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <NavLink to="signup">
                    <a className="button Normal is-outlined">
                      <span>{logginButton}</span>
                    </a>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      </div>
    );
  }
}
export default Header;
