import React from 'react'
import { Grid, Header, Divider, Icon, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SiteTable from '../components/tables/SiteTable.js'
import AddSiteModal from '../components/modals/AddSiteModal.js'

class SitesContainer extends React.Component {
	constructor(){
		super()

		this.state = {
			modalOpen: false
		}
	}

	handleModalOpen = () => {
		this.setState({
			modalOpen: true
		})
	}

	handleModalClose = () => {
		this.setState({
			modalOpen: false
		})
	}

	render() {
		return(
			<Segment>
			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
			  	<Header as="h1" style={{marginTop: '2em'}}>
			  		<Icon name="server" />
			  		Your Sites
			  	</Header>
			  	<Grid.Row>
			  		<Grid.Column>
				  		<AddSiteModal
				  			handleModalClose={this.handleModalClose}
				  			handleModalOpen={this.handleModalOpen}
				  			modalOpen={this.state.modalOpen}
				  		/>
			  		</Grid.Column>
			  	</Grid.Row>
			  	<Grid.Row>
		      	<SiteTable sites={this.props.sites} pages={this.props.pages} />
			    </Grid.Row>
			  </Grid>
		  </Segment>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		sites: state.sites,
		pages: state.pages,
		loggedIn: state.loggedIn,
		loading: state.loading
	}
}

export default connect(mapStateToProps)(SitesContainer)
