import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/userActions.js'

class LoginForm extends React.Component {
	state = {
			email: '',
			password: ''
		}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.loginUser({auth: this.state})
		this.props.handleClose();
	}

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value
		})
	}

	handlePassChange = (e) => {
		this.setState({
			password: e.target.value
		})
	}


	render() {
		return(
		  <Form error warning width={6} onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <Form.Input
		      	onChange={this.handleEmailChange}
		      	label="Email"
		      	placeholder='yourname@example.com'
		      	required
	      	/>
		    </Form.Field>
		    <Form.Field>
		      <Form.Input
		      	type="password"
		      	onChange={this.handlePassChange}
		      	label="Password"
		      	placeholder='remember, must be 8 characters long!'
		      	required
	      	/>
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		sites: state.sites,
		pages: state.pages
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (userParams) => {
			dispatch(loginUser(userParams))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
