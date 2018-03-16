import React from 'react'
import { Grid, Table, Container, Divider, Tab, Header } from 'semantic-ui-react'
import TabInsightTableRow from './TabInsightTableRow.js'

const TabPageInsightsTable = (props) => {

	const rows = props.insights.map((row, idx) => <TabInsightTableRow key={idx} {...row} />)
	if(rows.length > 0){
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
									{ rows.length > 0
										? rows
										: <Table.Row>
											<Table.Cell>No Insights available for the current page.
											</Table.Cell>
										</Table.Row>
									}
								</Table.Body>
							</Table>
						</Container>
					</Grid.Column>
				</Grid.Row>
			</Tab.Pane>
		)
	} else {
		return(
			<Tab.Pane>
		  	<Container style={{ margin: '7em 0em' }}>
					<Divider hidden />
					<Header as="h1">No Insights available for the current page.</Header>
				</Container>
			</Tab.Pane>
		)
	}
}

export default TabPageInsightsTable
