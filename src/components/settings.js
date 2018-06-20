import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

class Settings extends React.Component {

  state = {
            firstName:null,
            lastName:null,
            email:null
          }

  setMessage = (message) => {
    this.setState(() => ({ text: message }));
  }

  componentWillMount() {
    const cookies = new Cookies();
    const token = cookies.get('auth');
    console.log(token);

    const authHeaders = {
      headers: {'x-auth': token }
    };

    axios.get('https://mighty-falls-96437.herokuapp.com/users/me', authHeaders)
      .then((response) => {
        console.log(response.data);
        this.setMessage(response.data.text)
        this.setState({
          firstName:response.data.first_name,
          lastName:response.data.last_name,
          email:response.data.email
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


render () {
  return (
          <div>
            <section className="section">
                  <div className="hero">
                    <div className="hero-body">
                      <div className="container has-text-centered content">
                        <h3>Your Profile</h3>
                        <p>
                        <strong>First Name:</strong> {this.state.firstName} <br/>
                        <strong>Last Name:</strong> {this.state.lastName} <br/>
                        <a className="button">Change</a> <br/>
                        <strong>Email</strong>: {this.state.email} <br/>
                        <a className="button">Change</a> <br/>
                      </p>
                      <br/>
                      <a className="button">Delete Account</a>
                      </div>
                    </div>
                  </div>
                </section>
          </div>
)
}};

export default Settings;
