import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyChvboLzjGsecwuAVpe1Q3nhbvh6AO_x8Q",
    authDomain: "react-admin-app.firebaseapp.com",
    databaseURL: "https://react-admin-app.firebaseio.com",
    projectId: "react-admin-app",
    storageBucket: "react-admin-app.appspot.com",
    messagingSenderId: "807654031162"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
