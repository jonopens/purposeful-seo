import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'

class Page extends React.Component {
  
  // handleClick = () => {
  //   this.props.removePage(this.props.id)
  // }

  render() {
    return(
      <Table.Row padded>
        <Table.Cell style={{ fontSize: '18px' }}>
          <Link to={`/sites/${this.props.siteId}/pages/${this.props.id}`}>
            <Icon name="search" size="large" />
          </Link>
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.title}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.h1[0]}
        </Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          <Button onClick={this.handleClick} color="red">
            <Icon inverted name="remove" size="large" />Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

export default Page