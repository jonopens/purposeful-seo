import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import Insight from './Insight.js'
import PageLoader from '../PageLoader.js'
import EmptyTableMessage from '../EmptyTableMessage.js'

const InsightsTable = (props) => {

	const insights = props.insights.map((insight, idx) => {
		return <Insight key={ idx } { ...insight } />
	})

	return(
		<Grid.Column>
		{ insights.length > 0
			? (<Table celled>
		    	<Table.Header>
		      	<Table.Row>
		      		<Table.HeaderCell>Page Link</Table.HeaderCell>
		  				<Table.HeaderCell>Optimization Type</Table.HeaderCell>
		  				<Table.HeaderCell>Insight</Table.HeaderCell>
		  				<Table.HeaderCell>Status</Table.HeaderCell>
		  				<Table.HeaderCell>Actions</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
			    <Table.Body>
			    	{ insights ? insights : <PageLoader /> }
	 				</Table.Body>
		    </Table>
		    )
  		: (<EmptyTableMessage />)
  	}
		</Grid.Column>
	)
}

export default InsightsTable
