import React from 'react'
import SiteListDash from '../components/SiteListDash.js'
import { Grid, Image, Header, Divider, Icon } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'
import { connect } from 'react-redux'

class DashboardContainer extends React.Component {

	render(){
		console.log("dashboard", this.props)
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">
		  		<Icon name="dashboard" />{this.props.user.name}'s Dashboard
		  	</Header>
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
    sites: state.sites
  }
}

export default connect(mapStateToProps)(DashboardContainer);