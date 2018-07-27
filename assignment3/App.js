

import React, {Component} from 'react';
import {Provider} from 'react-redux'; 
import Navigator from './src/navigator/navigator';
//import FormHome from './src/components/FormHome';
import store from './src/store/assignment3_store';
export default class App extends Component{
  render() {
    return (
      <Provider store = {store}>
          <Navigator />
      </Provider>
    );
  }
}
