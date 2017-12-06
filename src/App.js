import React, { Component } from 'react';
import './App.css';

import LoggedInNavBar from './components/LoggedInNavBar.js'
import LoggedOutNavBar from './components/LoggedOutNavBar.js'
import Footer from './components/Footer.js'
import Home from './containers/Home.js'
import AboutPage from './containers/AboutPage.js'
import DashboardContainer from './containers/DashboardContainer.js'
import InsightsContainer from './containers/InsightsContainer.js'
import SitesContainer from './containers/SitesContainer.js'
import PagesContainer from './containers/PagesContainer.js'
import PageItemContainer from './containers/PageItemContainer.js'
import { getCurrentUser } from './actions/userActions.js'

import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  isLoggedIn = () => {
    return !!localStorage.getItem("jwt")
  }

  componentDidMount() {
    if(this.isLoggedIn()) {
      this.props.getCurrentUser(localStorage.getItem("jwt"))
    }
  }

  render() {
    if(this.isLoggedIn()) {
      return (
        <div className="App">
          <LoggedInNavBar />
          <Switch>
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/sites" component={SitesContainer} />
            <Route exact path="/insights" component={InsightsContainer} />
            <Route path="/sites/:id/pages/:pageId" render={() => (<PageItemContainer />)}/>
            <Route path="/sites/:id/pages" render={() => (<PagesContainer />)}/>
            <Redirect to="/dashboard" />
          </Switch>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <LoggedOutNavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutPage} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    lastMessage: state.lastMessage,
    user: state.user,
    sites: state.sites,
    pages: state.pages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: (jwt) => {
      dispatch(getCurrentUser(jwt))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
