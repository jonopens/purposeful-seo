import React from 'react'
import SiteListDash from '../components/SiteListDash.js'
import { Grid, Image, Header, Divider, Icon } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/userActions.js'

class DashboardContainer extends React.Component {

	componentDidMount() {
		if(this.props.loggedIn) {
			this.props.getCurrentUser(localStorage.getItem("jwt"))
		}
	}

	render(){
		console.log("dashboard", this.props)
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">
		  		<Icon name="dashboard" />
		  			{!!this.props.user.username ? `${this.props.user.username}'s Dashboard` : "Loading"}
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
  	loggedIn: state.loggedIn,
    user: state.user,
    sites: state.sites,
    pages: state.pages
  }
}

function mapDispatchToProps(dispatch) {
	return {
    getCurrentUser: (jwt) => {
      dispatch(getCurrentUser(jwt))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);