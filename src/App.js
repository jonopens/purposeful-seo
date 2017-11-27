import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Home from './containers/Home.js'
import DashboardContainer from './containers/DashboardContainer.js'
import InsightsContainer from './containers/InsightsContainer.js'
import SitesContainer from './containers/SitesContainer.js'
import PagesContainer from './containers/PagesContainer.js'
import { Route, withRouter } from 'react-router-dom'
import { getAUser } from './actions/userActions.js'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    const userObj = {
      email: "jon@jon.com",
      password: "woohoo"
    }
    this.props.getAUser(userObj)
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/sites" component={SitesContainer} />
        <Route exact path="/insights" component={InsightsContainer} />

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAUser: (userParams) => {
      dispatch(getAUser(userParams))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
