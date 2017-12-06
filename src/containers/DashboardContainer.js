import React from 'react'
import SiteListDash from '../components/SiteListDash.js'
import PageLoader from '../components/PageLoader.js'
import { Grid, Image, Header, Divider, Icon, Container, Segment, Statistic } from 'semantic-ui-react'
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
		if(!!this.props.loggedIn) {
			return(
				<Segment>
				  <Grid padded relaxed style={{ marginTop: '7em' }}>
				  	<Divider hidden />
				  	<Header as="h1" style={{marginTop: '2em'}}>
				  		<Icon name="dashboard" />
				  			{!!this.props.user ? `${this.props.user.username}'s Dashboard` : "Loading"}
				  	</Header>
				    <Grid.Row>
				      <SiteListDash sites={this.props.sites}/>
				      <Grid.Column width={8}>
				        <Statistic size="huge">
				        	<Statistic.Value>{this.props.pages.length}</Statistic.Value>
				        	<Statistic.Label>Pages in Your Account</Statistic.Label>
				        </Statistic>
				      </Grid.Column>
				    </Grid.Row>

				    <Grid.Row>
				      <Grid.Column width={16}>
				        <Image src={placeholder} alt="placeholder paragraph" />
				      </Grid.Column>
				    </Grid.Row>
				  </Grid>
			  </Segment>
			)
		} else {
			return(
				<Container style={{ marginTop: '7em' }}>
					<PageLoader />
				</Container>
			)
		}
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