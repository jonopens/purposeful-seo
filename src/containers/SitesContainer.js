import React from 'react'
import { Grid, Table, Header, Divider, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import PagesContainer from '../containers/PagesContainer.js'
import { createSite } from '../actions/siteActions.js'

class SitesContainer extends React.Component {

	render(){

		const sites = this.props.sites.map(site => {
			return(
				<Table.Row>
					<Table.Cell collapsing>
          	{site.base_url}
        	</Table.Cell>
        	<Table.Cell collapsing textAlign='right'>
          	<Button color="red"><Icon inverted name="remove" size="large"/>Delete</Button>
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
			      <Table>
			      	<Table.Header> 
				      	<Table.Row>
	        				<Table.HeaderCell>Site</Table.HeaderCell>
	      					<Table.HeaderCell collapsing></Table.HeaderCell>
	    					</Table.Row>
    					</Table.Header>
					    <Table.Body>
					  {sites}
					    </Table.Body> 	
			      </Table>
			    </Grid.Row>
			  </Grid>

		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		sites: state.user.sites
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createSite: (site) => {
			dispatch(createSite(site))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SitesContainer)