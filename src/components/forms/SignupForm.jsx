import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../store';

export default function SignupForm({ handleClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [pass_too_short, setPassTooShort] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser({ username, email, password, password_confirmation }));
    handleClose();
  };

  const handlePassChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    setPassTooShort(val.length < 8);
  };

  const passAndConfNotEqual = password !== password_confirmation;

  return (
    <Form onSubmit={handleSubmit} error warning success width={6}>
      <Form.Field>
        <Form.Input
          onChange={(e) => setUsername(e.target.value)}
          name="user[username]"
          label="Username"
          placeholder="Should be at least 6 characters long"
          value={username}
          required
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          onChange={(e) => setEmail(e.target.value)}
          name="user[email]"
          label="Email"
          placeholder="yourname@example.com"
          value={email}
          required
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          type="password"
          name="user[password]"
          onChange={handlePassChange}
          label="Password"
          placeholder="Must be at least 8 characters long"
          value={password}
          required
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          type="password"
          name="user[password_confirmation]"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          label="Confirm Password"
          placeholder="Must match password field"
          value={password_confirmation}
          required
        />
      </Form.Field>
      <Button
        type="submit"
        disabled={pass_too_short || passAndConfNotEqual}
        content="Sign Up"
      />
    </Form>
  );
}
