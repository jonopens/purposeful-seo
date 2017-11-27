import React from 'react'
import SiteListDash from '../components/SiteListDash.js'
import { Grid, Image, Header, Divider } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'


class DashboardContainer extends React.Component {

	render(){
		console.log("Dashboard props", this.props)
		return(

		  <Grid padded relaxed style={{ marginTop: '7em' }}>
		  	<Divider hidden />
		  	<Header as="h1">It's a friggin Dashboard</Header>
		    <Grid.Row>
		      <SiteListDash />
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


export default DashboardContainer