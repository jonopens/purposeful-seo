import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Button, Icon } from 'semantic-ui-react'
import { editInsight } from '../actions/insightActions.js'


class Insight extends React.Component {

	handleCompleteClick = () => {
		// assign new value to completion_status and send to update action in Rails
		console.log("clicked Complete")
	}

	handleIgnoreClick = () => {
		console.log("clicked Ignore")
	}

  renderActionButtons = () => {
    return(
			<Table.Cell collapsing style={{ fontSize: '18px' }}>
	      <Button onClick={this.handleCompleteClick} color="green">
	        <Icon inverted name="check" size="large"/>Complete
	      </Button>
				<Button onClick={this.handleIgnoreClick}>
					<Icon name="remove circle outline" size="large"/>Ignore
				</Button>
			</Table.Cell>
    )
  }

  getSiteId = (pageId) => {
    const p = this.props.pages.find((page) => {
      return page.id === pageId
    })
    return p.site_id
  }

  render() {
		console.log(this.props)
		let pageItemPath = `/sites/${this.getSiteId(this.props.page_id)}/pages/${this.props.page_id}`
    return(
      <Table.Row padded="true">
        <Table.Cell style={{ fontSize: '18px' }}>
          <Link to={pageItemPath}>
            <Icon name="search" size="large" />
          </Link>
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
        {this.renderActionButtons()}
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
    editInsight: (params) => {
			dispatch(editInsight(params))
		}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Insight)
