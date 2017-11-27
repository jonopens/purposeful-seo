import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'

const Site = (props) => {
	return(
		<Table.Row>
			<Table.Cell collapsing style={{ fontSize: '18px' }}>
      	<Link to={`/sites/${props.id}`}>{props.base_url}</Link>
    	</Table.Cell>
    	<Table.Cell collapsing textAlign='right'>
      	<Button onClick={props.removeSite} color="red"><Icon inverted name="remove" size="large"/>Delete</Button>
    	</Table.Cell>
  	</Table.Row>
	)
}

export default Site