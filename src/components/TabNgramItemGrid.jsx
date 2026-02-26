import React from 'react';
import NgramList from './NgramList.jsx';
import { Grid, Tab } from 'semantic-ui-react';

const TabNgramItemGrid = (props) => {
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} />
          <NgramList ngrams={props.unigrams} text="Unigrams" />
          <NgramList ngrams={props.bigrams} text="Bigrams" />
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
};

export default TabNgramItemGrid;
