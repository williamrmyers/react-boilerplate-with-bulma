import React from 'react';

class Login extends React.Component {
  state = {
      error: undefined
  };

  render() {
    return (
      <div>
        <section className="section">
          <div className="container has-text-centered">
            <div className="box formBox">

            <h1 className="big-header">Login</h1>

            <form onSubmit={this.handelSignup}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" name="email"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                {this.state.error}
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

export default Login;





// class Login extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Login</h1>
//         <p>This is the Login page.</p>
//       </div>
//     );
//   }
// }
