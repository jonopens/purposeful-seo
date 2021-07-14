import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';

const EmptyTableMessage = (props) => {
  return (
    <Container style={{ margin: '7em 0em' }}>
      <Divider hidden />
      <Header as="h1">
        Add your first site to start generating insights. We dare you!
      </Header>
    </Container>
  );
};

export default EmptyTableMessage;
