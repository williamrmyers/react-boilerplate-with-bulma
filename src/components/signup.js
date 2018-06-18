import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  state = {
      error: undefined
  };
  handelSignup = (e) => {
    e.preventDefault();

    const formElements = e.target.elements;
    const firstName = formElements.firstName.value.trim();
    const lastName = formElements.lastName.value.trim();
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    const error = '';

    this.setState(() => ({ error }));

    // Submit to server
    axios.post('https://mighty-falls-96437.herokuapp.com/users', {
      "email": email,
      "first_name": firstName,
      "last_name": lastName,
      "password": password
    })
      .then((response) => {
        console.log(response);
        this.setState(() => ({ user: response.data.email }));
      }).catch((e) => {
        console.log(`Error Logging in` + e);
      });

  }
  render() {
    return (
      <div>
        <section className="section">
          <div className="container has-text-centered">
            <div className="box formBox">

            <h1 className="big-header">Sign Up!</h1>

            <form onSubmit={this.handelSignup}>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="First Name" name="firstName"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="controlclassName">
                <input className="input" type="text" placeholder="Last Name" name="lastName"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" name="email"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                {this.passwordError}
              </div>
              <p className="help">{this.error}</p>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password" autoComplete="true" name="password"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
            </form>
          </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Signup;
