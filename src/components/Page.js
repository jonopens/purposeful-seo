import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'

class Page extends React.Component {
  
  // handleClick = () => {
  //   this.props.removePage(this.props.id)
  // }

  render() {
    if(this.props.title) {
      return(
        <Table.Row padded>
          <Table.Cell style={{ fontSize: '18px' }}>
            <Link to={`/sites/${this.props.siteId}/pages/${this.props.id}`}>
              <Icon name="search" size="large" />
            </Link>
          </Table.Cell>
          <Table.Cell style={{ fontSize: '18px' }}>
            {this.props.page_path}
          </Table.Cell>
          <Table.Cell style={{ fontSize: '18px' }}>
            {this.props.title}
          </Table.Cell>
          <Table.Cell collapsing textAlign='right'>
            <Button onClick={this.handleClick} color="red">
              <Icon inverted name="remove" size="large" />Delete
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    } else {
      return(
        <Table.Row padded>
          <Table.Cell negative style={{ fontSize: '18px' }}>
          </Table.Cell>
          <Table.Cell negative style={{ fontSize: '18px' }}>
          </Table.Cell>
          <Table.Cell collapsing negative style={{ fontSize: '18px' }}>
            This page has not yet crawled - would you like to crawl it now?
          </Table.Cell>
          <Table.Cell collapsing textAlign='right'>
            <Button onClick="" color="blue">
              <Icon inverted name="hourglass start" size="large" />Start Crawl
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    }
  }
}

export default Page