import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'

class Site extends React.Component {
  
  // handleClick = () => {
  //   this.props.removePage(this.props.id)
  // }

  render() {
    return(
      <Table.Row padded>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.title}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.h1[0]}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          <Link to={`/sites/${this.props.siteId}/pages/${this.props.id}`}>More About This Page</Link>
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