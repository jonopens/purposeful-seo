import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm.js'
import placeholder from '../assets/paragraph.png'

class Home extends React.Component {

	render() {
		return(

			  <Grid padded relaxed>
			  	<h1>It's a friggin Homepage</h1>
			    <Grid.Row>
			      <Grid.Column width={16}>
			        <LoginForm />
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row>
			      <Grid.Column width={8}>
			        <Image src={placeholder} alt="placeholder paragraph" />
			      </Grid.Column>
			      <Grid.Column width={8}>
			        <Image src={placeholder} alt="placeholder paragraph" />
			      </Grid.Column>
			    </Grid.Row>
			  </Grid>

		)
	}
}


export default connect()(Home)