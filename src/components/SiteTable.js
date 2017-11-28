import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import Site from './Site.js'

const SiteTable = (props) => {
	const sites = props.sites.map((site, idx) => {
		return <Site key={idx} {...site} removeSite={props.removeSite}/>
	})
	
	return(
		<Grid.Column>
			<Table celled>
	    	<Table.Header> 
	      	<Table.Row>
	  				<Table.HeaderCell>Domain Name</Table.HeaderCell>
	  				<Table.HeaderCell>Go To Site</Table.HeaderCell>
						<Table.HeaderCell collapsing textAlign='right'>Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
		    <Table.Body>
		  		{sites}
		    </Table.Body>
	    </Table>
    </Grid.Column>
	)
}

export default SiteTable