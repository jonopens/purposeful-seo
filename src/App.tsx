import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';

import LoggedInNavBar from './components/LoggedInNavBar.jsx';
import LoggedOutNavBar from './components/LoggedOutNavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './containers/Home.jsx';
import AboutPage from './containers/AboutPage.jsx';
import DashboardContainer from './containers/DashboardContainer.jsx';
import InsightsContainer from './containers/InsightsContainer.jsx';
import SitesContainer from './containers/SitesContainer.jsx';
import PagesContainer from './containers/PagesContainer.jsx';
import PageItemContainer from './containers/PageItemContainer.jsx';
import { getCurrentUser } from './store';

import './App.css';

export default function App() {
  const dispatch = useDispatch();

  const isLoggedIn = (): boolean => !!localStorage.getItem('jwt');

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(getCurrentUser(localStorage.getItem('jwt')));
    }
  }, [dispatch]);

  if (isLoggedIn()) {
    return (
      <div className="App">
        <LoggedInNavBar />
        <Switch>
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/sites" component={SitesContainer} />
          <Route exact path="/insights" component={InsightsContainer} />
          <Route
            path="/sites/:id/pages/:pageId"
            render={() => <PageItemContainer />}
          />
          <Route path="/sites/:id/pages" render={() => <PagesContainer />} />
          <Redirect to="/dashboard" />
        </Switch>
        <Footer />
      </div>
    );
  }

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
