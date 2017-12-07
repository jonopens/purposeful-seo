import React from 'react'
import { Grid, Table, Container, Tab } from 'semantic-ui-react'
import TabInsightTableRow from './TabInsightTableRow.js'
import EmptyTable from './EmptyTable.js'

const TabPageInsightsTable = (props) => {

	const rows = props.insights.map((row, idx) => <TabInsightTableRow key={idx} {...row} />)
	return(
		<Tab.Pane>
			<Grid.Row>
				<Grid.Column>
					<Container>
						<Table celled>
				    	<Table.Header> 
				      	<Table.Row>
				      		<Table.HeaderCell>Optimization Type</Table.HeaderCell>
				  				<Table.HeaderCell>Content</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{!!rows ?  rows : <EmptyTable text="No insights gathered. Nice!" />}
							</Table.Body>
						</Table>
					</Container>
				</Grid.Column>
			</Grid.Row>
		</Tab.Pane>
	)
}

export default TabPageInsightsTable