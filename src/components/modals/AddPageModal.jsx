import React from 'react';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';
import AddPageForm from '../forms/AddPageForm.jsx';

export default function AddPageModal({
  pageModalOpen,
  handlePageAddModalOpen,
  handlePageAddModalClose,
  site,
}) {
  return (
    <Modal
      trigger={
        <Button color="blue" onClick={handlePageAddModalOpen}>
          <Icon name="plus" size="large" />
          Add a New Page
        </Button>
      }
      size="small"
      open={pageModalOpen}
      onClose={handlePageAddModalClose}
      closeIcon
    >
      <Header icon="plus" content="Add a New Page" />
      <Modal.Content>
        <AddPageForm
          handleClose={handlePageAddModalClose}
          site={site}
        />
      </Modal.Content>
    </Modal>
  );
}
