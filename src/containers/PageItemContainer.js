import React from 'react'
import { Grid, Divider, Header, Icon, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PageLoader from '../components/PageLoader.js'

class PageItemContainer extends React.Component {



	render() {
		if(this.props.thisPage) {
			return(
			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
			  	<Header as="h1">
			  		<Icon name="file text outline" />
			  		{this.props.thisPage.title}
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
		} else {
			return(
				<Container>
					<PageLoader />
				</Container>
			)
		}
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