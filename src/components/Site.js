import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { destroySite } from '../actions/siteActions.js'

class Site extends React.Component {

  handleDeleteClick = () => {
    if(window.confirm("Are you sure you want to delete this site?")){
      this.props.destroySite(this.props.id)
    }
  }

  render() {
    return(
      <Table.Row padded="true">
        <Table.Cell style={{ fontSize: '18px' }}>
          <Link to={`/sites/${this.props.id}/pages`}>{this.props.domain_name}</Link>
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          <a href={`${this.props.full_url}`} target="_blank">View Site</a>
        </Table.Cell>
        <Table.Cell collapsing style={{ fontSize: '18px' }}>
          {this.props.pages.length}
        </Table.Cell>
        <Table.Cell collapsing textAlign='right'>
          <Button onClick={this.handleDeleteClick} color="red">
            <Icon inverted name="remove" size="large"/>Delete Site
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    destroySite: (id) => {
      dispatch(destroySite(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(Site);