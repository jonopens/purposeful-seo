import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux' 
import { createPAge } from '../actions/pageActions.js'

class AddPageForm extends React.Component {
	state = {
		page_path: ''
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createPage({
			page_path: e.target.value,
			site_id: 
		});
		this.props.handleClose();
		this.setState({
			page_path: ''
		})
	}



	render() {
		let { value } = this.state
		return(
			<Form onSubmit={this.handleSubmit} error warning width={6} >
		    <Form.Field>
		      <Form.Input onChange={this.handlePagePathChange} label="Page Path" placeholder='e.g. /product/sweet-hoodie.html' />
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
		createPage: (site) => {
			dispatch(createPage(site))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPageForm);