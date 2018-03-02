import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { destroyPage } from '../actions/pageActions.js'
import { createAndStartCrawl } from '../actions/crawlActions.js'

class Page extends React.Component {

  // handleEditClick = () => {
  //   console.log("hello, I'm trying to handle an edit click over here, ya jabroni")
            // <Button onClick={this.handleEditClick} color="green">
            //   <Icon inverted name="pencil" size="large" />Edit Page
            // </Button>
  // }

  handleDeleteClick = () => {
    if(window.confirm("Are you sure you want to delete this page?")){
      this.props.destroyPage(this.props.id)
    }
  }

  handleCrawlClick = () => {
    if(window.confirm("Are you sure you want to start crawling this page?")){
      this.props.createAndStartCrawl(this.props.id)
    }
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
          <Table.Cell style={{ fontSize: '18px' }}>
            {this.props.word_count}
          </Table.Cell>
          <Table.Cell collapsing textAlign='right'>

            <Button onClick={this.handleDeleteClick} color="red">
              <Icon inverted name="remove" size="large" />Delete Page
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
          <Table.Cell collapsing negative style={{ fontSize: '18px' }}>
            0
          </Table.Cell>
          <Table.Cell collapsing negative textAlign='right'>
            <Button onClick={this.handleCrawlClick} color="blue">
              <Icon inverted name="bug" size="large" />Begin Crawl
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
    createAndStartCrawl: (id) => {
      dispatch(createAndStartCrawl(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Page);
