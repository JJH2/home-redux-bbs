import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


import 'semantic-ui-css/semantic.min.css';

import LoginScreenContainer from '../containers/LoginScreenContainer';
import ListScreen from './ListScreen';

const Home = (() => <Redirect to="/list" />);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginScreenContainer} />
          <Route path="/list" component={ListScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
