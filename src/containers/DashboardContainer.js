import React from 'react'
import SiteListDash from '../components/SiteListDash.js'
import { Grid, Image, Header, Divider } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'
import { connect } from 'react-redux'

class DashboardContainer extends React.Component {

	render(){
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">{this.props.user.name}'s Dashboard</Header>
		    <Grid.Row>
		      <SiteListDash sites={this.props.sites}/>
		      <Grid.Column width={8}>
		        <Image src={placeholder} alt="placeholder paragraph" />
		      </Grid.Column>
		    </Grid.Row>

		    <Grid.Row>
		      <Grid.Column width={16}>
		        <Image src={placeholder} alt="placeholder paragraph" />
		      </Grid.Column>
		    </Grid.Row>
		  </Grid>

		)
	}
}

function mapStateToProps(state) {
  return {
    user: state.user,
    sites: state.user.sites
  }
}

export default connect(mapStateToProps)(DashboardContainer);