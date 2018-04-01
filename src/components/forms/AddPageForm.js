import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createPage } from '../../actions/pageActions.js'

class AddPageForm extends React.Component {
	state = {
		page_path: '',
		pathFails: false
	}

// need to error handle response from Rails better than I do

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createPage({
			page_path: this.state.page_path,
			site_id: this.props.site.id
		});
		this.props.handleClose();
		this.setState({
			page_path: ''
		})
	}

	handlePagePathChange = (e) => {
		this.setState({
			page_path: e.target.value
		})
	}

	// need to further test and determine if  should be done on the backend

	// testFullUrl = (e) => {
	// 	let testURL = `${this.props.site.full_url}${e.target.value}`

	// 	fetch(testURL).then(this.handleFetchResponse)
	// 		.then(res => console.log("ok"))
	// 		.catch(error => console.log(error))
	// }

	// handleFetchResponse = (res) => {
	// 	console.log('hit error handler')
	// 	if(!res.ok){
	// 		this.setState({
	// 			pathFails: true
	// 		})
	// 		// throw Error(res.statusText)
	// 	} else {
	// 		this.setState({
	// 			pathFails: false
	// 		})
	// 	}
	// 	return res
	// }

	render() {

		return(
			<Form onSubmit={ this.handleSubmit } error warning width={ 6 } >
		    <Form.Field>
		      <Form.Input
		      	onChange={ this.handlePagePathChange }
		      	label="Page Path"
		      	placeholder='e.g. /product/sweet-punk-band-hoodie.html'
		      	required
	      	/>
		    </Form.Field>
		    <Button type='submit' disabled={ this.state.pathFails } >Submit</Button>
		  </Form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createPage: (page) => {
			dispatch(createPage(page))
		}
	}
}

export default connect(null, mapDispatchToProps)(AddPageForm);
