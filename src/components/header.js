import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Modal from 'react-modal';

class Header extends React.Component {
  state = {
    hambergerToggle: ""
  };

  toggleBerger = (state) => {
        this.setState(() => ({ hambergerToggle: this.state.hambergerToggle ? "" : 'is-active' }))
}

  render() {
    const logginButton = 'Sign Up';

    return (
      <div>
        <section className="section">
        <nav className="navbar is-black is-fixed-top">
          <div className="navbar-brand">
            <div className="navbar-item">
              <NavLink to="/">
                <img src="acme.png" alt="A boilerplate App" width="112" height="28"/>
              </NavLink>
            </div>
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
                    <button className="button Normal is-outlined">
                      <span>{logginButton}</span>
                    </button>
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
