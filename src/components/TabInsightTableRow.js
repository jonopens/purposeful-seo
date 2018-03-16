import React from 'react'
import { Table } from 'semantic-ui-react'

const TabInsightTableRow = (props) => {
	return(
  	<Table.Row>
  		<Table.Cell>{ props.optimization_type }</Table.Cell>
			<Table.Cell>{ props.content }</Table.Cell>
		</Table.Row>
	)
}

export default TabInsightTableRow
