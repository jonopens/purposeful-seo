import React from 'react';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';
import AddSiteForm from '../forms/AddSiteForm.jsx';

export default function AddSiteModal({
  modalOpen,
  handleModalOpen,
  handleModalClose,
}) {
  return (
    <Modal
      trigger={
        <Button color="blue" onClick={handleModalOpen}>
          <Icon name="plus" size="large" />
          Add a Site
        </Button>
      }
      size="small"
      open={modalOpen}
      onClose={handleModalClose}
      closeIcon
    >
      <Header icon="plus" content="Add a New Site" />
      <Modal.Content>
        <AddSiteForm handleClose={handleModalClose} />
      </Modal.Content>
    </Modal>
  );
}
