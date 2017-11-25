import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'
import { connect } from 'react-redux'
import fetchUser from '../adaptors/users-api.js'

class DashboardContainer extends React.Component {

	render(){
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<h1>It's a friggin Dashboard</h1>
		    <Grid.Row>
		      <Grid.Column width={8}>
		        <Image src={placeholder} alt="placeholder paragraph" />
		      </Grid.Column>
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
  console.log(state);
  return {
    user: state.user,
    sites: state.sites,
    pages: state.pages,
    insights: state.insights
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => {
      dispatch(fetchUser());
    }
  };
}

export default connect()(DashboardContainer)