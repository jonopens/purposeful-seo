import React from 'react'
import { Table } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import PagesContainer from '../containers/PagesContainer.js'
import Site from './Site.js'

const SiteTable = (props) => {
	const sites = props.sites.map((site, idx) => {
		return <Site key={idx} {...site} removeSite={props.removeSite}/>
	})
	
	return(
		<Table celled>
    	<Table.Header> 
      	<Table.Row>
  				<Table.HeaderCell>Site</Table.HeaderCell>
					<Table.HeaderCell collapsing textAlign='right'>Actions</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
	    <Table.Body>
	    	<Route path="/sites/:id" render={(props) => (<PagesContainer {...props} />)} />
	  		{sites}
	    </Table.Body>
    </Table>
	)
}

export default SiteTable