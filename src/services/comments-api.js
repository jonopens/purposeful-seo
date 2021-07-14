import { jwt } from '../utilities/token.js';

export default class CommentsApi {
  static createComment(params) {
    return fetch('http://localhost:5000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  }

  static updateComment(params) {
    let { id, user_id, page_id, message, visibility } = params;

    return fetch(`http://localhost::5000/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify({
        user_id: user_id,
        page_id: page_id,
        message: message,
        visibility: visibility,
      }),
    }).then((res) => res.json());
  }
}
