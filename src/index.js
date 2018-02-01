import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';


const config = {
  apiKey: 'AIzaSyC3oBz1bymfOf69hbx-QKOfqCJv1kgomsQ',
  authDomain: 'test-368e1.firebaseapp.com',
  databaseURL: 'https://test-368e1.firebaseio.com',
  projectId: 'test-368e1',
  storageBucket: 'test-368e1.appspot.com',
  messagingSenderId: '427107451605',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
