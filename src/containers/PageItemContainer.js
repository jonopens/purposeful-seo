import React from 'react'
import { Grid, Divider, Header, Icon} from 'semantic-ui-react'

class PageItemContainer extends React.Component {

	render() {
		return(
		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">
		  		<Icon name="sticky note outline" />
		  		This page
		  	</Header>
		  	<Grid.Row>
		  		<Grid.Column>
		  			Something to do
		  		</Grid.Column>
		  	</Grid.Row>
		  	<Grid.Row>
	      	This should be a report
		    </Grid.Row>
		  </Grid>
		)
	}
}

export default PageItemContainer