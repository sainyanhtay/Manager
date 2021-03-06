import React from 'react';
import { Provider } from 'react-redux';
import ReactNative from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducer';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router'

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCNwWD2Z_Q9oBAvfcycnmw05PSt7YBmW_Y',
      authDomain: 'manager-b506f.firebaseapp.com',
      databaseURL: 'https://manager-b506f.firebaseio.com',
      projectId: 'manager-b506f',
      storageBucket: 'manager-b506f.appspot.com',
      messagingSenderId: '153523414558'
    };

    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
