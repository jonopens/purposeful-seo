import React from 'react'
import { Comment } from 'semantic-ui-react'

const OneComment = (props) => {
  return(
    <Comment style={{textAlign: 'left'}}>
      <Comment.Avatar src='http://via.placeholder.com/50x50'/>
      <Comment.Content>
        <Comment.Author>Your Comment</Comment.Author>
        <Comment.Text>{ props.message }</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

export default OneComment
