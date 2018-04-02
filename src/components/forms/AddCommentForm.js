import React from 'react'
import { connect } from 'react-redux'
import { Form, Button, Divider } from 'semantic-ui-react'
import { createComment } from '../../actions/commentActions.js'

class AddCommentForm extends React.Component {

  state = {
    commentText: ''
  }

  handleMessageChange = (e) => {
    this.setState({
      commentText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createComment({
      user_id: this.props.user_id,
      page_id: this.props.page_id,
      message: this.state.commentText,
      visibility: "visible"
    });
    this.setState({
      commentText: ""
    });
  }

  invalidComment = () => {
    if(this.state.commentText.length === 0){
      return true;
    }
    return false;
  }

  render(){
    return(
      <Form onSubmit={ this.handleSubmit } error warning>
        <Form.Input
          onChange={ this.handleMessageChange }
          placeholder='e.g. I think this needs more keywords in it'
          value={ this.state.commentText }
          required
        />
        <Button type="submit" disabled={ this.invalidComment() } primary>
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
