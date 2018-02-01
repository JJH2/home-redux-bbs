import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


import 'semantic-ui-css/semantic.min.css';

import LoginScreenContainer from '../containers/LoginScreenContainer';

const Home = () => (<Redirect to="/login" />);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} />
          <Route path="/login" component={LoginScreenContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
