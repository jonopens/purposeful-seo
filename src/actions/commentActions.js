import CommentsApi from '../comments-api.js'

export function createComment(comment) {
  return function(dispatch){
    return CommentsApi.createComment(comment)
      .then(c => addComment(c))
  }
}

export function addComment(comment) {
  return {
    type: 'ADD_COMMENT',
    payload: comment
  }
}

export function updateComment(comment) {
  return function(dispatch){
    return CommentsApi.updateComment(comment)
      .then(c => editComment(c))
  }
}

export function editComment(comment) {
  return {
    type: 'EDIT_COMMENT',
    payload: comment
  }
}
