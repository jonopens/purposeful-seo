import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import LoginForm from '../components/LoginForm.js'

export default class Home extends React.Component {
	constructor() {
		super()

		this.state ={
			
		}
	}

	render() {
		return(
			<div>
				<NavBar />
        <LoginForm handleSubmit={this.handleSubmit} />
        <Footer />
			</div>
		)
	}
}