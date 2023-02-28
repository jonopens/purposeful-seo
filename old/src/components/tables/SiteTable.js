import React from 'react';
import { Table, Grid } from 'semantic-ui-react';
import Site from './Site.js';
import PageLoader from '../PageLoader.js';
import EmptyTableMessage from '../EmptyTableMessage.js';

const SiteTable = (props) => {
  const sites = props.sites.map((site, idx) => {
    let sitePages = props.pages.filter((page) => page.site_id === site.id);
    return <Site key={idx} {...site} pages={sitePages} />;
  });

  return (
    <Grid.Column>
      {sites.length > 0 ? (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Domain Name</Table.HeaderCell>
              <Table.HeaderCell>External Link</Table.HeaderCell>
              <Table.HeaderCell>Page Count</Table.HeaderCell>
              <Table.HeaderCell textAlign="right">Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{sites ? sites : <PageLoader />}</Table.Body>
        </Table>
      ) : (
        <EmptyTableMessage />
      )}
    </Grid.Column>
  );
};

export default SiteTable;
