import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Divider } from 'semantic-ui-react'
import { createComment } from '../../actions/commentActions.js'

class AddCommentForm extends React.Component {

  state = {
    message: '',
    invalidComment: false
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createComment({
      user_id: this.props.user_id,
      page_id: this.props.page_id,
      message: this.state.message,
      visibility: "visible"
    });
    this.setState({
      message: ''
    });
  }

  render(){
    return(
      <Form onSubmit={ this.handleSubmit } error warning>
        <Form.Field>
          <Form.TextArea
            onChange={ this.handleMessageChange }
            placeholder='e.g. I think this needs more keywords in it'
            required
          />
        </Form.Field>
        <Button type="submit" disabled={ this.state.invalidComment } primary>
          Add Comment
        </Button>
        <Divider hidden />
      </Form>
    )
  }

}

function mapStateToProps(state){
  return {
    user_id: state.user.id
  }
}

function mapDispatchToProps(dispatch) {
	return {
		createComment: (comm) => {
			dispatch(createComment(comm))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentForm)
