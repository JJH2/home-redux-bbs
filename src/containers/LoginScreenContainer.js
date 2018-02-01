import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as firebase from 'firebase';
import LoginScreen from '../components/LoginScreen';

export default class LoginScreenContainer extends Component {
  state = {
    login: false,
  }

  handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    this.setState({
      login: true,
    });
  }

  render() {
    if (this.state.login) {
      return <Redirect to="/list" />;
    }
    return <LoginScreen onGoogleLogin={this.handleGoogleLogin} />;
  }
}
