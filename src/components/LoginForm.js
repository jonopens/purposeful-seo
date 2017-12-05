import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux' 

export default class LoginForm extends React.Component {
	constructor() {
		super()

		this.state = {
			email: '',
			pass: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleClose();

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
			  <Form error warning width={6}>
			    <Form.Field>
			      <label>Email</label>
			      <input placeholder='Email' />
			    </Form.Field>
			    <Form.Field>
			      <input type="password" placeholder='Password' />
			    </Form.Field>
			    <Button type='submit'>Submit</Button>
			  </Form>
		)
	}
}