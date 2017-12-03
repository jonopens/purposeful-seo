import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux' 
import { createSite } from '../actions/siteActions.js'

class AddSiteForm extends React.Component {
	state = {
		value: 'http',
		domain_name: '',
		full_url: ''
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createSite({
			protocol: this.state.value, 
			user_id: this.props.user.id,
			full_url: this.state.full_url,
			domain_name: this.state.domain_name
		});
		this.props.handleClose();
		this.setState({
			value: 'http',
			domain_name: '',
			full_url: ''
		})
	}

	handleRadioChange = (e, { value }) => {
		this.setState({
			value
		})
	}

	handleDomainChange = (e) => {
		this.setState({
			domain_name: e.target.value,
			full_url: `${this.state.value}://${e.target.value}`
		})
	}

	render() {
		let { value } = this.state
		return(
			<Form onSubmit={this.handleSubmit} error warning width={6} >
		    <Form.Group>
		      <label style={{fontWeight: 'bold'}}>Protocol:</label>
		      <Form.Radio 
		      	onChange={this.handleRadioChange} 
      			name="protocol" 
      			label="http" 
      			value="http" 
      			checked={value === 'http'}
    			/>
		      <Form.Radio 
		      	onChange={this.handleRadioChange} 
		      	name="protocol" 
		      	label="https" 
		      	value="https" 
		      	checked={value === 'https'}
	      	/>
		    </Form.Group>
		    <Form.Field required>
		      <Form.Input 
		      	onChange={this.handleDomainChange} 
		      	label="Domain Name" 
		      	placeholder='e.g. www.example.com' 
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
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createSite: (site) => {
			dispatch(createSite(site))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSiteForm);