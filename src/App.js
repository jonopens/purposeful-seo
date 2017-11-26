import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Home from './containers/Home.js'
import DashboardContainer from './containers/DashboardContainer.js'
import InsightsContainer from './containers/InsightsContainer.js'
import SitesContainer from './containers/SitesContainer.js'
import PagesContainer from './containers/PagesContainer.js'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/sites" component={SitesContainer} />
        <Route exact path="/insights" component={InsightsContainer} />
        <Route path="/sites/1/pages" component={PagesContainer} />

        <Footer />
      </div>
    );
  }
}

export default App;
