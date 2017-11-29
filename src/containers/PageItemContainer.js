import React from 'react'
import { Grid, Divider, Header, Icon} from 'semantic-ui-react'
import { connect } from 'react-redux'

class PageItemContainer extends React.Component {

	render() {
		console.log('props in PageItemContainer',this.props)
		return(
		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">
		  		<Icon name="file text outline" />
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

function mapStateToProps(state) {
	const currPageId = +window.location.pathname.split("/")[4]
	console.log(currPageId, state)
	return {
		thisPage: state.pages.find(page => currPageId === page.id),
	}
}

function mapDispatchToProps(dispatch) {
	return {
		helloThere: 'nah'
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PageItemContainer)