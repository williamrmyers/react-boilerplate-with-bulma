import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

class Me extends React.Component {
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
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Me;
