import React from 'react';

class Login extends React.Component {
  state = {
    gifs: [];
  }

  handleClick () {
    axios.get('https://media.giphy.com/media/5horatAufCWRzxShZy/giphy.gif')
      .then(response => console.log(response))
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>This is the Login page.</p>
        <a class="button Normal is-outlined" href=""/>
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
