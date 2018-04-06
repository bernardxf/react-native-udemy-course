import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD0HfUO3oktqgNWfPQBtLPqM3h_iAqQk0g",
      authDomain: "auth-6fe9f.firebaseapp.com",
      databaseURL: "https://auth-6fe9f.firebaseio.com",
      projectId: "auth-6fe9f",
      storageBucket: "auth-6fe9f.appspot.com",
      messagingSenderId: "267935929953"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;