import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import Insight from './Insight.js'
import PageLoader from './PageLoader.js'
import EmptyTable from './EmptyTable.js'

const InsightsTable = (props) => {
		
	const insights = props.insights.map((insight, idx) => {
		return <Insight key={idx} {...insight} />
	})

	// add complete insight action back in
	// <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>

	return(
		<Grid.Column>
		{insights.length > 0 
			? (<Table celled>
		    	<Table.Header> 
		      	<Table.Row>
		      		<Table.HeaderCell>Page Link</Table.HeaderCell>
		  				<Table.HeaderCell>Optimization Type</Table.HeaderCell>
		  				<Table.HeaderCell>Insight</Table.HeaderCell>
		  				<Table.HeaderCell>Completion Status</Table.HeaderCell>
		  				<Table.HeaderCell	>Actions</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
			    <Table.Body>
			    	{ insights ? insights : <PageLoader /> }
	 				</Table.Body>
		    </Table>
		    ) 
  		: (<EmptyTable />)
  	}
		</Grid.Column>  
	)
}

export default InsightsTable