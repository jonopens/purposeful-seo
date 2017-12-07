import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'


class Insight extends React.Component {

	handleCompleteClick = () => {
		console.log("handled the click, sucka")
	}

  render() {
    return(
      <Table.Row padded="true">
        <Table.Cell collapsing style={{ fontSize: '18px' }}>
          {this.props.optimization_type}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.content}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.completion_status}
        </Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          <Button onClick={this.handleCompleteClick} color="green">
            <Icon inverted name="check" size="large"/>Mark Completed
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Insight