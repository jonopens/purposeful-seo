import React from 'react'
import { Grid, Header, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createSite, removeSite } from '../actions/siteActions.js'
import SiteTable from '../components/SiteTable.js'

class SitesContainer extends React.Component {

	render(){
		console.log(this.props)
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">Sites Container</Header>
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
		createSite: (site) => {
			dispatch(createSite(site))
		},
		removeSite: (id) => {
			dispatch(removeSite(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesContainer)