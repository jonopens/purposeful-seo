import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashSiteList from '../components/DashSiteList.jsx';
import DashStatistics from '../components/DashStatistics.jsx';
import PageLoader from '../components/PageLoader.jsx';
import WelcomeMessage from '../components/WelcomeMessage.jsx';
import {
  Grid,
  Header,
  Divider,
  Icon,
  Container,
  Segment,
} from 'semantic-ui-react';
import { getCurrentUser } from '../store';

export default function DashboardContainer() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const loadedSites = useSelector((state) => state.auth.loadedSites);
  const user = useSelector((state) => state.auth.user);
  const sites = useSelector((state) => state.sites);
  const pages = useSelector((state) => state.pages);
  const insights = useSelector((state) => state.insights);

  useEffect(() => {
    if (loggedIn) {
      dispatch(getCurrentUser(localStorage.getItem('jwt')));
    }
  }, [dispatch, loggedIn]);

  if (!loadedSites || !sites) {
    return (
      <Container style={{ marginTop: '7em' }}>
        <PageLoader />
      </Container>
    );
  }

  return (
    <Segment>
      <Grid padded relaxed style={{ marginTop: '7em' }}>
        <Divider hidden />
        <Header as="h1" style={{ marginTop: '2em' }}>
          <Icon name="dashboard" />
          {user ? `${user.username}'s Dashboard` : 'Loading'}
        </Header>
        <Grid.Row>
          <DashSiteList sites={sites} />
          <DashStatistics pages={pages} insights={insights} />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            {sites.length === 0 ? <WelcomeMessage /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
