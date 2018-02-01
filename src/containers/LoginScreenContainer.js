import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginScreen from '../components/LoginScreen';

export default class LoginScreenContainer extends Component {
  state = {
    login: false,
  }

  handleGoogleLogin = () => {
    console.log('a')
  }

  render() {
    if (this.state.login) {
      return <Redirect to="/list" />;
    }
    return <LoginScreen onGoogleLogin={this.handleGoogleLogin} />;
  }
}
