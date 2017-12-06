import React from 'react'
import { Grid, Image, Divider, Header, Icon, Segment } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'

export default class InsightsContainer extends React.Component {
	constructor(){
		super()

		this.state ={

		}
	}

	render(){
		return(
			<Segment>
			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<Divider hidden />
			  	<Header as="h1" style={{marginTop: '2em'}}>
			  		<Icon name="idea" />
			  		Insights
			  	</Header>
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
		  </Segment>
		)
	}
}