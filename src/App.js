import React, { Component } from 'react';
import './App.css';

import Home from './containers/Home.js'

import { Route } from 'react-router-dom'

class App extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault()
    console.log("we made it here so far")
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/sites" component={Home} />
        <Route exact path="/insights" component={Home} />
      </div>
    );
  }
}

export default App;
