import React from 'react'
import { Grid, Image, Divider, Header } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'
import { connect } from 'react-redux'

class PagesContainer extends React.Component {

	render(){
		return(

			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
		  		<Header as="h1">PagesContainer for Specific Site</Header>
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

export default connect()(PagesContainer);