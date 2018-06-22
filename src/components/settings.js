import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Modal from 'react-modal';
import './../App.css';
import Confirmation from './reusableComponents/confirmation';

class NameChangeModal extends React.Component {

  state = {
      newFirstName: false,
      newLastName: false,
      confirmation: false,
  }

  confirmedChange = () => {
    const newName = {
      firstName: this.state.newFirstName,
      lastName: this.state.newLastName
    }
    this.props.getNewNameFromModal(newName);
  }
  hideConfirmation = () => {
    this.setState(() => ({
      confirmation:false
    }))
  }
  displayConfirmation = () => {
    this.setState(() => ({
      confirmation:true
    }))
  }

  changeNameSubmit = (e) => {
    e.preventDefault();

    const newName = {
      firstName: e.target.elements.firstName.value.trim(),
      lastName: e.target.elements.lastName.value.trim()
    }
    this.setState(() => ({
      newFirstName : newName.firstName,
      newLastName: newName.lastName
      })
    );
    // this.props.getNewNameFromModal(newName);
    this.displayConfirmation();

    e.target.elements.firstName.value = "";
    e.target.elements.lastName.value = "";
  }

  render () {
    return (
      <Modal
      isOpen = {this.props.isOpen}
      contentLabel = 'example model'
      onRequestClose={this.props.toggleNameModal}
      >
        <strong>Change Name</strong>
        {this.state.confirmation ?
          (<Confirmation
            yes = {this.confirmedChange}
            no = {this.hideConfirmation}
            confirmationMessage = 'Are you sure you want to change your name?'
            yesButtonStyle='is-danger'

            />)
          :
          (<form onSubmit={this.changeNameSubmit}>
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
            <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button onClick={this.props.toggleNameModal} className="button">Cancel</button>
            </div>
            </div>
            </form>)
          }
        </Modal>
      );
    }
}

class Settings extends React.Component {

  state = {
            firstName:null,
            lastName:null,
            email:null,
            NameChangeModalclosed: true
          }

  setMessage = (message) => {
    this.setState(() => ({ text: message }));
  }

  getMeData = () => {
    // get Headers from cookie
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
// Name Changing Methods
  toggleNameModal = (state) => {
    this.setState(() => ({ NameChangeModalclosed: this.state.NameChangeModalclosed ? false : true }))
  }
  getNewNameFromModal = (newName) => {
    console.log('Recieved name', newName);
    this.changeNameOnServer(newName);
  }
  componentWillMount() {
    this.getMeData();
  }

  changeNameOnServer = (newName) => {
    // get Headers from cookie
    const cookies = new Cookies();
    const token = cookies.get('auth');
    console.log(token);

    const authHeaders = {
      headers: {'x-auth': token }
    };
    // console.log(newName);

    axios.patch('https://mighty-falls-96437.herokuapp.com/users/me', newName, authHeaders)
    .then((response) => {
      console.log(response.data);
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
                        <a onClick={this.toggleNameModal} className="button">Change</a> <br/>
                        <strong>Email</strong>: {this.state.email} <br/>
                        <a className="button">Change</a> <br/>
                      </p>
                      <br/>
                      <a className="button">Delete Account</a>
                      </div>
                    </div>
                  </div>
                </section>
                <NameChangeModal
                  isOpen = {!this.state.NameChangeModalclosed}
                  getNewNameFromModal = {this.getNewNameFromModal}
                  toggleNameModal = {this.toggleNameModal}
                  ClassName = 'MyModal'
                  firstName = {this.state.firstName}
                  lastName = {this.state.lastName}
                  />
          </div>
        )}
      };
export default Settings;
