import React from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

const EmptySiteTable = () => {
	return(
  	<Container style={{ margin: '7em 0em' }}>
  		<Divider hidden />
			<Header as="h1">Add your first site and start generating insights.</Header>
		</Container>
	)
}

export default EmptySiteTable