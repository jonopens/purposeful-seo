import React from 'react'
import { Table } from 'semantic-ui-react'
import Site from './Site.js'

const SiteTable = (props) => {

	const sites = props.sites.map((site, idx) => {
		return <Site key={idx} {...site}/>
	})
	console.log("Site component", props)
	return(
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
    </Table>
	)
}

export default SiteTable