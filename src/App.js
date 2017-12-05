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
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { getAUser } from './actions/userActions.js'
import { connect } from 'react-redux'

class App extends Component {

  // componentDidMount() {
  //   const userObj = {
  //     email: "jon@jon.com",
  //     password: "woohoo"
  //   }
  //   this.props.getAUser(userObj)
  // }

  isLoggedIn = () => {
    return !!localStorage.getItem("jwt")
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
    user: state.user,
    sites: state.sites,
    pages: state.pages
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
