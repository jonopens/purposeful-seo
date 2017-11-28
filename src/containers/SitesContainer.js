import React from 'react'
import { Grid, Header, Divider, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { createSite, removeSite } from '../actions/siteActions.js'
import SiteTable from '../components/SiteTable.js'
import PagesContainer from '../containers/PagesContainer.js'
import AddSiteModal from '../components/AddSiteModal.js'

class SitesContainer extends React.Component {

	render(){
		console.log(this.props)
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">
		  		<Icon name="sitemap" />
		  		Your Sites
		  	</Header>
		  	<Grid.Row>
		  		<Grid.Column>
			  		<AddSiteModal />
		  		</Grid.Column>
		  	</Grid.Row>
		  	<Grid.Row>
		      <SiteTable sites={this.props.sites} removeSite={this.props.removeSite}/>
		      <Route path="/sites/:id" component={PagesContainer} />
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
		createSite: (site) => {
			dispatch(createSite(site))
		},
		removeSite: (id) => {
			dispatch(removeSite(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesContainer)