import React from 'react';
import Chart from '../assets/chart_graph.png';
import { Grid, Image, Segment, Header } from 'semantic-ui-react';

const HomeValueProp = () => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Make SEO Simpler and Help Small Sites Grow
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Learning SEO takes time. Our goal was to make SEO insights
              accessible to a newer webmaster. Mine data you already have - your
              site itself.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Discover powerful SEO data and track progress
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              It sounds trite, but a lack of accessibility can make valuable
              data into useless junk. Purposeful SEO is easy.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image src={Chart} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default HomeValueProp;
