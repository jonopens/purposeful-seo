import React from 'react';
import { Modal, Header } from 'semantic-ui-react';

export default function StatusModal({
  statusModalOpen,
  isPositive,
  msg,
}) {
  return (
    <Modal
      size="small"
      open={statusModalOpen}
      positive={isPositive ? 'true' : 'false'}
      negative={isPositive ? 'false' : 'true'}
    >
      <Header icon="check" content={msg} />
      <Modal.Content>{msg}</Modal.Content>
    </Modal>
  );
}
