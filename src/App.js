import React, { Component } from 'react';
import './App.css';

import Home from './containers/Home.js'
import DashboardContainer from './containers/DashboardContainer.js'
import InsightsContainer from './containers/InsightsContainer.js'
import SitesContainer from './containers/SitesContainer.js'
import PagesContainer from './containers/PagesContainer.js'
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
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/sites" component={SitesContainer} />
        <Route exact path="/insights" component={InsightsContainer} />
        <Route exact path="/pages" component={PagesContainer} />
      </div>
    );
  }
}

export default App;
