import React from 'react'

export default class LoginForm extends React.Component {
	constructor() {
		super()

		this.state = {
			email: '',
			pass: ''
		}
	}

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value
		})
	}

	handlePassChange = (e) => {
		this.setState({
			pass: e.target.value
		})
	}


	render() {
		return(
			<div className="login-form">
				<form onSubmit={this.props.handleSubmit} >
					<div className="input-field"><input type="email" value={this.state.email} onChange={this.handleEmailChange} /></div>
					<div className="input-field"><input type="password" value={this.state.pass} onChange={this.handlePassChange} /></div>
					<input type="submit" />
				</form>				
			</div>
		)
	}
}