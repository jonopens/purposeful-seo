import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'

class Site extends React.Component {
  
  handleClick = () => {
    this.props.removeSite(this.props.id)
  }

  render() {
    return(
  		<Table.Row padded>
  			<Table.Cell style={{ fontSize: '18px' }}>
        	<Link to={`/sites/${this.props.id}`}>{this.props.domain_name}</Link>
      	</Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          <a href={`${this.props.full_url}`}>Click Here</a>
        </Table.Cell>
      	<Table.Cell collapsing textAlign='right'>
        	<Button onClick={this.handleClick} color="red">
            <Icon inverted name="remove" size="large"/>Delete
          </Button>
      	</Table.Cell>
    	</Table.Row>
	  )
  }
}

export default Site