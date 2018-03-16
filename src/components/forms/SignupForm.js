import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signUpUser } from '../../actions/userActions.js'

class SignupForm extends React.Component {
	state = {
		username: '',
		email: '',
		password: '',
		password_confirmation: '',
		pass_too_short: true
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signUpUser(this.state)
		this.props.handleClose();

	}

	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	handleEmailChange = (e) => {
		this.setState({
			email: e.target.value
		})
	}

	handlePassChange = (e) => {
		if(e.target.value.length >= 8){
			this.setState({
				password: e.target.value,
				pass_too_short: false
			})
		} else {
			this.setState({
				password: e.target.value
			})
		}
	}

	handlePassConfChange = (e) => {
		this.setState({
			password_confirmation: e.target.value
		})
	}

	passAndConfNotEqual = () => {
		if(this.state.password !== this.state.password_confirmation){
			return true
		}
		return false
	}

	render() {
		return(
			<Form onSubmit={ this.handleSubmit }
				error
				warning
				success
				width={6}
			>
		    <Form.Field>
		    	<Form.Input
		      	onChange={ this.handleUsernameChange }
		      	name="user[username]"
		      	label="Username"
		      	placeholder='Should be at least 6 characters long'
		      	required
	      	/>
		    </Form.Field>
		    <Form.Field>
		      <Form.Input
		      	onChange={ this.handleEmailChange }
		      	name="user[email]"
		      	label="Email"
		      	placeholder='yourname@example.com'
		      	required
	      	/>
		    </Form.Field>
		    <Form.Field>
		      <Form.Input
		      	type="password"
		      	name="user[password]"
		      	onChange={ this.handlePassChange }
		      	label="Password"
		      	placeholder='Must be at least 8 characters long'
		      	required
	      	/>
		    </Form.Field>
		    <Form.Field>
		      <Form.Input
		      	type="password"
		      	name="user[password_confirmation]"
		      	onChange={ this.handlePassConfChange }
		      	label="Confirm Password"
		      	placeholder='Must match password field'
		      	required
	      	/>
		    </Form.Field>
		    <Button
		    	type='submit'
		    	disabled={ this.state.pass_too_short || this.passAndConfNotEqual() }
		    	content="Sign Up"
	    	/>
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
		signUpUser: (user) => {
			dispatch(signUpUser(user))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
