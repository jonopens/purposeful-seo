import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Divider, Header, Icon, Segment } from 'semantic-ui-react';
import InsightsTable from '../components/tables/InsightsTable.jsx';

export default function InsightsContainer() {
  const insights = useSelector((state) => state.insights);

  return (
    <Segment>
      <Grid padded relaxed style={{ marginTop: '7em' }}>
        <Divider hidden />
        <Header as="h1" style={{ marginTop: '2em' }}>
          <Icon name="idea" />
          Insights
        </Header>
        <Grid.Row>
          <InsightsTable insights={insights} />
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
