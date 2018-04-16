import React from 'react'
import OneComment from './OneComment.js'
import AddCommentForm from './forms/AddCommentForm.js'
import { Comment, Header, Segment } from 'semantic-ui-react'

const CommentSection = (props) => {

  let comments = props.comments.map((c, idx) => <OneComment key={idx} {...c} />)

  return(
    <Segment style={{textAlign: 'left'}}>
      <Comment.Group>
        <Header as="h2">
          { props.comments.length === 0 ? 'Leave A Comment' : 'Comments' }
        </Header>
        { comments }
        <AddCommentForm page_id={ props.page_id }/>
      </Comment.Group>
    </Segment>
  )
}

export default CommentSection
