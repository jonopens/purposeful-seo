import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import { Grid, Image } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'

export default class DashboardContainer extends React.Component {
	constructor(){
		super()

		this.state ={

		}
	}

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