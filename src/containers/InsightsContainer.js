import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

export default class InsightsContainer extends React.Component {
	constructor(){
		super()

		this.state ={

		}
	}

	render(){
		return(
			<div>
				<NavBar />
					I'm the frigggin InsightsContainer
				<Footer />
			</div>
		)
	}
}