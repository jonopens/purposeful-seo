import React from 'react'
import OneComment from './OneComment.js'
import { Divider, Grid, Header, Comment } from 'semantic-ui-react'

const CommentSection = (props) => {

  let comments = props.comments.map((c, idx) => <OneComment key={idx} {...c} />)

  return(
    <Grid>
      <Comment.Group>
        <Header as="h2" style={{ marginTop: '2em' }}>Comments</Header>
        { comments }
      </Comment.Group>
    </Grid>
  )
}

export default CommentSection
