import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import Site from './Site.js'
import PageLoader from './PageLoader.js'

const SiteTable = (props) => {

	if(props.sites.length > 0) {

		const sites = props.sites.map((site, idx) => {
			let sitePages = props.pages.filter(page => page.site_id === site.id)
			return <Site key={idx} {...site} pages={sitePages} />
		})

		return(
			<Grid.Column>
				<Table celled>
		    	<Table.Header> 
		      	<Table.Row>
		  				<Table.HeaderCell>Domain Name</Table.HeaderCell>
		  				<Table.HeaderCell>External Link</Table.HeaderCell>
		  				<Table.HeaderCell>Page Count</Table.HeaderCell>
							<Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
			    <Table.Body>
			  		{sites}
			    </Table.Body>
		    </Table>
	    </Grid.Column>
		)
	} else {
		return(
			<Grid.Column>
				<PageLoader />
			</Grid.Column>
		)
	}
}

export default SiteTable