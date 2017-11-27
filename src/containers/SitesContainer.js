import React from 'react'
import { Grid, Table, Header, Divider, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import PagesContainer from '../containers/PagesContainer.js'
import { createSite, removeSite } from '../actions/siteActions.js'

class SitesContainer extends React.Component {

	render(){

		const sites = this.props.sites.map((site, idx) => {
			return(
				<Table.Row key={idx}>
					<Table.Cell collapsing style={{ fontSize: '18px' }}>
          	<Link to={`/sites/${site.id}`}>{site.base_url}</Link>
        	</Table.Cell>
        	<Table.Cell collapsing textAlign='right'>
          	<Button onClick={this.props.removeSite} color="red"><Icon inverted name="remove" size="large"/>Delete</Button>
        	</Table.Cell>
      	</Table.Row>
      )
		})
		console.log(this.props.sites)
		return(

			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
			  	<Header as="h1">Sites Container</Header>
			  	<Grid.Row>
			      <Table celled>
			      	<Table.Header> 
				      	<Table.Row>
	        				<Table.HeaderCell>Site</Table.HeaderCell>
	      					<Table.HeaderCell collapsing textAlign='right'>Actions</Table.HeaderCell>
	    					</Table.Row>
    					</Table.Header>
					    <Table.Body>
					  {sites}
					    </Table.Body>
					    <Route path="/sites/:id" render={(props) => { return <PagesContainer {...props} />}} />	
			      </Table>
			    </Grid.Row>
			  </Grid>

		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		sites: state.user.sites,
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createSite: (site) => {
			dispatch(createSite(site))
		},
		removeSite: (site) => {
			dispatch(removeSite(site.id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesContainer)