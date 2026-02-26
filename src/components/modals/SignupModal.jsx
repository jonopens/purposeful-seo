import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import SignupForm from '../forms/SignupForm.jsx';

export default function SignupModal({
  signupModalOpen,
  handleSignupModalOpen,
  handleSignupModalClose,
}) {
  return (
    <Modal
      trigger={
        <Button onClick={handleSignupModalOpen} size="huge">
          Sign Up
        </Button>
      }
      size="small"
      open={signupModalOpen}
      onClose={handleSignupModalClose}
      closeIcon
    >
      <Header icon="plus" content="Sign Up for a New Account" />
      <Modal.Content>
        <SignupForm handleClose={handleSignupModalClose} />
      </Modal.Content>
    </Modal>
  );
}
