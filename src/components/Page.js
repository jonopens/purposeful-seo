import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { destroyPage } from '../actions/pageActions.js'

class Page extends React.Component {
  
  handleEditClick = () => {
    console.log("hello, I'm trying to handle click over here, ya jabroni")
  }  

  handleDeleteClick = () => {
    this.props.destroyPage(this.props.id)
  }

  handleCrawlClick = () => {
    console.log("hi crawlers")
  }

  render() {
    if(this.props.title) {
      return(
        <Table.Row padded="true">
          <Table.Cell style={{ fontSize: '18px' }}>
            <Link to={`/sites/${this.props.siteId}/pages/${this.props.id}`}>
              <Icon name="search" size="large" />
            </Link>
          </Table.Cell>
          <Table.Cell collapsing style={{ fontSize: '18px' }}>
            {this.props.page_path}
          </Table.Cell>
          <Table.Cell style={{ fontSize: '18px' }}>
            {this.props.title}
          </Table.Cell>
          <Table.Cell collapsing textAlign='right'>
            <Button onClick={this.handleEditClick} color="green">
              <Icon inverted name="pencil" size="large" />Edit Page
            </Button>
            <Button onClick={this.handleDeleteClick} color="red">
              <Icon inverted name="remove" size="large" />Delete
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    } else {
      return(
        <Table.Row padded="true">
          <Table.Cell collapsing negative style={{ fontSize: '18px' }}>
            <Icon name="exclamation triangle" size="large" />
          </Table.Cell>
          <Table.Cell negative style={{ fontSize: '18px' }}>
            {this.props.page_path}
          </Table.Cell>
          <Table.Cell collapsing negative style={{ fontSize: '18px' }}>
            Page has not been crawled. Start crawl? =>
          </Table.Cell>
          <Table.Cell collapsing negative textAlign='right'>
            <Button onClick={this.handleEditClick} color="green">
              <Icon inverted name="pencil" size="large" />Edit Page
            </Button>
            <Button onClick={this.handleCrawlClick} color="blue">
              <Icon inverted name="hourglass start" size="large" />Start Crawl
            </Button>
          </Table.Cell>
        </Table.Row>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    destroyPage: (id) => {
      dispatch(destroyPage(id));
    },
    updateSite: "ji"
  }
}

export default connect(null, mapDispatchToProps)(Page);