import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'
import { Route, Link } from 'react-router-dom'
import PagesContainer from '../containers/PagesContainer.js'

export default class SitesContainer extends React.Component {
	constructor(){
		super()

		this.state ={

		}
	}

	render(){
		return(

			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			  	<h1>It's a friggin SitesContainer</h1>

			  	<Grid.Row>
			      <Grid.Column width={16}>
			        <Route path="sites/1/pages" component={PagesContainer} />
			        <Link to="sites/1/pages">A Specific Site</Link>
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

			    <Grid.Row>
			      <Grid.Column width={16}>
			        <Image src={placeholder} alt="placeholder paragraph" />
			      </Grid.Column>
			    </Grid.Row>
			  </Grid>

		)
	}
}