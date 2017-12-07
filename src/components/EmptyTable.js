import React from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

const EmptyTable = (props) => {
	return(
  	<Container style={{ margin: '7em 0em' }}>
  		<Divider hidden />
			<Header as="h1">{!!props ? props.text : "Add your first site to start generating insights. We dare you!"}</Header>
		</Container>
	)
}

export default EmptyTable