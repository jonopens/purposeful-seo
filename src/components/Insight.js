import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Button, Icon } from 'semantic-ui-react'
import { editInsight } from '../actions/insightActions.js'


class Insight extends React.Component {

	handleCompleteClick = () => {
		let thisInsight = {
			id: this.props.id,
			completion_status: "completed"
		}

		if(window.confirm('Mark insight as complete?')){
			this.props.editInsight(thisInsight)
		}
	}

	handleIgnoreClick = () => {
		let thisInsight = {
			id: this.props.id,
			completion_status: "ignored"
		}

		if(window.confirm('Mark insight as complete?')){
			this.props.editInsight(thisInsight)
		}
	}

	handleResetClick = () => {
		let thisInsight = {
			id: this.props.id,
			completion_status: "pending"
		}

		if(window.confirm('Mark insight as complete?')){
			this.props.editInsight(thisInsight)
		}
	}

  renderActionButtons = () => {
		if(this.props.completion_status === "pending") {
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
		} else {
			return(
				<Table.Cell collapsing style={{ fontSize: '18px' }}>
					<Button onClick={this.handleResetClick}>
						<Icon name="undo" size="large"/>Reset to Pending
					</Button>
				</Table.Cell>
			)
		}
  }

  getSiteId = (pageId) => {
    const p = this.props.pages.find((page) => {
      return page.id === pageId
    })
    return p.site_id
  }

  render() {
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
