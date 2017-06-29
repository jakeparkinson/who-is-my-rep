import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import Selectors from './components/selectors/selectors';
import Results from './components/results/results';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.store = configureStore();
  }
  
  render() {
    return (
      <Provider store={this.store}>
        <div className="rep-app">
          <h1 className="rep-app-header">
            Who's My Representative?
          </h1>
          <Selectors />
          <Results />
        </div>
      </Provider>
    );
  }
}

export default App;
