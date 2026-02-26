import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Header, Divider, Icon, Segment } from 'semantic-ui-react';
import SiteTable from '../components/tables/SiteTable.jsx';
import AddSiteModal from '../components/modals/AddSiteModal.jsx';

export default function SitesContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const sites = useSelector((state) => state.sites);
  const pages = useSelector((state) => state.pages);

  return (
    <Segment>
      <Grid padded relaxed style={{ marginTop: '7em' }}>
        <Divider hidden />
        <Header as="h1" style={{ marginTop: '2em' }}>
          <Icon name="server" />
          Your Sites
        </Header>
        <Grid.Row>
          <Grid.Column>
            <AddSiteModal
              handleModalClose={() => setModalOpen(false)}
              handleModalOpen={() => setModalOpen(true)}
              modalOpen={modalOpen}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <SiteTable sites={sites} pages={pages} />
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
