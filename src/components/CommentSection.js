import React from 'react'
import Comment from './Comment.js'

const CommentSection = (props) => {

  let comments = props.comments.map(c => <Comment {...c} />)

  return(
    <div>{ comments }</div>
  )
}

export default CommentSection
