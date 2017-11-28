import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Table } from 'semantic-ui-react'

const SiteListDash = (props) => {

	const sites = props.sites.map((site, idx) => {
		return(
			<Table.Row key={idx}>
				<Table.Cell collapsing>
        	<Link to={`/sites/${site.id}`}>{site.domain_name}</Link>
      	</Table.Cell>
    	</Table.Row>
		)
	})

	return (
	<Grid.Column width={8}>
		<Table>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>My Sites</Table.HeaderCell>
				</Table.Row> 
			</Table.Header>
			<Table.Body>
				{sites}
			</Table.Body>
  	</Table>
	</Grid.Column>
	)
}

export default SiteListDash