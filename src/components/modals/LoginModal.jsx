import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm.jsx';

export default function LoginModal({
  loginModalOpen,
  handleLoginModalOpen,
  handleLoginModalClose,
}) {
  return (
    <Modal
      trigger={
        <Button
          inverted
          color="grey"
          size="huge"
          onClick={handleLoginModalOpen}
        >
          Log In
        </Button>
      }
      size="small"
      open={loginModalOpen}
      onClose={handleLoginModalClose}
      closeIcon
    >
      <Header icon="plus" content="Log In to Purposeful SEO" />
      <Modal.Content>
        <LoginForm handleClose={handleLoginModalClose} />
      </Modal.Content>
    </Modal>
  );
}
