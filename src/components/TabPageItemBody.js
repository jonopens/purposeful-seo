import React from 'react'
import { Grid, Container, Tab } from 'semantic-ui-react'

const TabPageItemBody = (props) => {
	return(
		<Tab.Pane attached={false}>
			<Grid.Row>
				<Grid.Column>
					<Container>
						<p>{props.bodyText}</p>
					</Container>
				</Grid.Column>
		  </Grid.Row>
    </Tab.Pane>
	)
}

export default TabPageItemBody