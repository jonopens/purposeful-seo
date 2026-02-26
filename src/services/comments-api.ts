import { jwt } from '../utilities/token';
import type { Comment } from '../types';

interface CommentParams {
  id: number;
  user_id?: number;
  page_id?: number;
  message?: string;
  visibility?: string;
}

export default class CommentsApi {
  static createComment(params: Partial<CommentParams>): Promise<Comment> {
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

  static updateComment(params: CommentParams): Promise<Comment> {
    const { id, user_id, page_id, message, visibility } = params;
    return fetch(`http://localhost:5000/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwt()}`,
      },
      body: JSON.stringify({
        user_id,
        page_id,
        message,
        visibility,
      }),
    }).then((res) => res.json());
  }
}
