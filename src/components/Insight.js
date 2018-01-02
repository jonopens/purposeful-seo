import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Button, Icon } from 'semantic-ui-react'


class Insight extends React.Component {

	handleCompleteClick = () => {
		console.log("handled the click, sucka")
	}

  renderCompleteButton = () => {
    return(
      <Button onClick={this.handleCompleteClick} color="green">
        <Icon inverted name="check" size="large"/>Mark Completed
      </Button>
    )
  }

  getSiteId = (pageId) => {
    const p = this.props.pages.find((page) => {
      return page.id === pageId
    })

    return p.site_id
  }

  render() {
    // console.log("this insight", this.props)
    return(
      <Table.Row padded="true">
        <Table.Cell style={{ fontSize: '18px' }}>
          <Link to={`/sites/${this.getSiteId(this.props.page_id)}/pages/${this.props.page_id}`}>
            <Icon name="search" size="large" />
          </Link>
        </Table.Cell>

        <Table.Cell collapsing style={{ fontSize: '18px' }}>
          {this.props.optimization_type}
        </Table.Cell>
        <Table.Cell collapsing style={{ fontSize: '18px' }}>
          {this.props.optimization_type}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.content}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.props.completion_status}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {this.renderCompleteButton()}
        </Table.Cell>
      </Table.Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    pages: state.pages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    markComplete: ''
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Insight)