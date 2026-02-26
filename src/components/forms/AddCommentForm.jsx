import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Divider } from 'semantic-ui-react';
import { createComment } from '../../store';

export default function AddCommentForm({ page_id }) {
  const [commentText, setCommentText] = useState('');
  const user_id = useSelector((state) => state.auth.user?.id);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({
      user_id,
      page_id,
      message: commentText,
      visibility: 'visible',
    }));
    setCommentText('');
  };

  const invalidComment = commentText.length === 0;

  return (
    <Form onSubmit={handleSubmit} error warning>
      <Form.Input
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="e.g. I think this needs more keywords in it"
        value={commentText}
        required
      />
      <Button type="submit" disabled={invalidComment} primary>
        Add Comment
      </Button>
      <Divider hidden />
    </Form>
  );
}
