import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

class Private extends React.Component {
  state = {
      error: undefined,
      text: undefined,
      token:undefined
  };

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

    axios.get('https://mighty-falls-96437.herokuapp.com/members', authHeaders)
      .then((response) => {
        console.log(response.data.text);
        this.setMessage(response.data.text)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
      <section className="section">
          <div className="hero">
            <div className="hero-body">
              <div className="container has-text-centered content">
                <h3>Boom</h3>
                <p>Your now logged in and requesting data from the server.</p>
                <p>{this.state.text}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Private;
