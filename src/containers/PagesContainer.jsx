import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Grid,
  Divider,
  Header,
  Icon,
  Container,
  Segment,
} from 'semantic-ui-react';
import PageLoader from '../components/PageLoader.jsx';
import PageTable from '../components/tables/PageTable.jsx';
import AddPageModal from '../components/modals/AddPageModal.jsx';

export default function PagesContainer() {
  const [pageModalOpen, setPageModalOpen] = useState(false);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const currPath = +window.location.pathname.split('/')[2];
  const thisSitePages = useSelector((state) =>
    state.pages.filter((page) => page.site_id === currPath)
  );
  const thisSite = useSelector((state) =>
    state.sites.find((site) => site.id === currPath)
  );

  if (!loggedIn) {
    return (
      <Container>
        <PageLoader />
      </Container>
    );
  }

  return (
    <Segment>
      <Grid padded relaxed style={{ marginTop: '7em' }}>
        <Divider hidden />
        <Header as="h1" style={{ marginTop: '2em' }}>
          <Icon name="sitemap" />
          Pages: {thisSite?.domain_name}
        </Header>
        <Grid.Row>
          <Grid.Column>
            <AddPageModal
              handlePageAddModalClose={() => setPageModalOpen(false)}
              handlePageAddModalOpen={() => setPageModalOpen(true)}
              pageModalOpen={pageModalOpen}
              site={thisSite}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <PageTable
            pages={thisSitePages}
            siteId={window.location.pathname.split('/')[2]}
          />
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
