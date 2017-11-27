import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'

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
		console.log('at least this part works', this.state.email, this.state.pass)

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