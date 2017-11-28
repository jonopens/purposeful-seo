import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'

const Site = (props) => {
	return(
		<Table.Row padded>
			<Table.Cell style={{ fontSize: '18px' }}>
      	<Link to={`/sites/${props.id}`}>{props.domain_name}</Link>
    	</Table.Cell>
      <Table.Cell style={{ fontSize: '18px' }}>
        <Link to={`${props.full_url}`}>Click Here</Link>
      </Table.Cell>
    	<Table.Cell collapsing textAlign='right'>
      	<Button onClick={props.removeSite(props.id)} color="red">
          <Icon inverted name="remove" size="large"/>Delete
        </Button>
    	</Table.Cell>
  	</Table.Row>
	)
}

export default Site