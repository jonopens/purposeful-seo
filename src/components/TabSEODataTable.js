import React from 'react'
import { Grid, Table, Container, Tab } from 'semantic-ui-react'
import { round } from '../utilities/maths.js'

const TabSEODataTable = (props) => {
	return(
		<Tab.Pane>
			<Grid.Row>
				<Grid.Column>
					<Container>
						<Table celled>
				    	<Table.Header>
				      	<Table.Row>
				      		<Table.HeaderCell>Element</Table.HeaderCell>
				  				<Table.HeaderCell>Value</Table.HeaderCell>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
				      		<Table.Cell collapsing>Full URL</Table.Cell>
				  				<Table.Cell>
					  				<a href={`${props.siteData.full_url}${props.pageData.page_path}`}>
					  					{`${props.siteData.full_url}${props.pageData.page_path}`}
					  				</a>
				  				</Table.Cell>
								</Table.Row>
								<Table.Row>
				      		<Table.Cell collapsing>H1</Table.Cell>
				  				<Table.Cell>
										{ props.pageData.h1.map(h => h) }
									</Table.Cell>
								</Table.Row>
								<Table.Row>
				      		<Table.Cell collapsing>H2</Table.Cell>
				  				<Table.Cell>
										{ props.pageData.h2.map(h => h) }
									</Table.Cell>
								</Table.Row>
								<Table.Row>
				      		<Table.Cell collapsing>Meta Description</Table.Cell>
				  				<Table.Cell>
										{ props.pageData.meta_desc }
									</Table.Cell>
								</Table.Row>
								<Table.Row>
				      		<Table.Cell collapsing>Text to HTML Ratio</Table.Cell>
				  				<Table.Cell>
										{`${round(props.pageData.text_to_html_ratio, 2)}%`}
									</Table.Cell>
								</Table.Row>
								<Table.Row>
				      		<Table.Cell collapsing>Purposeful SEO Last Crawl Timestamp</Table.Cell>
				  				<Table.Cell>
										{ props.pageData.last_crawled }
									</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
					</Container>
				</Grid.Column>
			</Grid.Row>
		</Tab.Pane>
	)
}

export default TabSEODataTable
