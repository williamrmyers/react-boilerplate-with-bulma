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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handelSignup}>
          First Name <input type="text" name="firstName" /><br/>
          Last Name <input type="text" name="lastName" /><br/>
          Email <input type="text" name="email" /><br/>
          Password <input type="text" name="password" /><br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
