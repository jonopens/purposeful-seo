import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store';

export default function LoginForm({ handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    handleClose();
  };

  return (
    <Form error warning width={6} onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="yourname@example.com"
          value={email}
          required
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="remember, must be 8 characters long!"
          value={password}
          required
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
