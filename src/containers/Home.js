import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm.js'
import HeadingBlock from '../components/HeadingBlock.js'
import placeholder from '../assets/paragraph.png'

class Home extends React.Component {

	render() {
		return(
			<Segment>
				<HeadingBlock />
			  <Grid padded relaxed>
			    <Grid.Row centered >
			      <Grid.Column width={8}>
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
		  </Segment>
		)
	}
}


export default connect()(Home)