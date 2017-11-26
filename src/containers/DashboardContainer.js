import React from 'react'
import SiteListDash from '../components/SiteListDash.js'
import { Grid, Image, Header, Divider } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'
import { connect } from 'react-redux'
import getAUser from '../actions/userActions.js'



class DashboardContainer extends React.Component {

	componentWillMount() {
		const userObj = {
			email: "jon@jon.com",
			password: "woohoo"
		}
		this.props.getAUser(userObj)
	}

	render(){
		console.log("Dashboard props", this.props)
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">It's a friggin Dashboard</Header>
		    <Grid.Row>
		      <SiteListDash sites={this.props.user.sites}/>
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
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getAUser: (userParams) => {
			dispatch(getAUser(userParams))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)