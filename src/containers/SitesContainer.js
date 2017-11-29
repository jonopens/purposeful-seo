import React from 'react'
import { Grid, Header, Divider, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { removeSite } from '../actions/siteActions.js'
import SiteTable from '../components/SiteTable.js'
import AddSiteModal from '../components/AddSiteModal.js'

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
		console.log("inside handleModalClose", this.state)
	}

	render(){
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">
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
	      	<SiteTable sites={this.props.sites} removeSite={this.props.removeSite}/>
		    </Grid.Row>
		  </Grid>

		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		sites: state.sites
	}
}

function mapDispatchToProps(dispatch) {
	return {
		removeSite: (id) => {
			dispatch(removeSite(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesContainer)