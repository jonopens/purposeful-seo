import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'semantic-ui-react';
import { editInsight } from '../../store';

function setInsightRowColor(status) {
  switch (status) {
    case 'completed':
      return 'green';
    case 'ignored':
      return '#b3b3b3';
    default:
      return undefined;
  }
}

export default function Insight({
  id,
  site_id,
  page_id,
  optimization_type,
  content,
  completion_status,
}) {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    if (window.confirm('Mark insight as complete?')) {
      dispatch(editInsight({ id, completion_status: 'completed' }));
    }
  };

  const handleIgnoreClick = () => {
    if (window.confirm('Mark insight as ignored?')) {
      dispatch(editInsight({ id, completion_status: 'ignored' }));
    }
  };

  const handleResetClick = () => {
    if (window.confirm('Reset insight to pending?')) {
      dispatch(editInsight({ id, completion_status: 'pending' }));
    }
  };

  const pageItemPath = `/sites/${site_id}/pages/${page_id}`;

  const renderActionButtons = () => {
    if (completion_status === 'pending') {
      return (
        <Table.Cell collapsing>
          <Button onClick={handleCompleteClick} color="green">
            <Icon inverted name="check" size="large" />
            Complete
          </Button>
          <Button onClick={handleIgnoreClick}>
            <Icon name="remove circle outline" size="large" />
            Ignore
          </Button>
        </Table.Cell>
      );
    }
    return (
      <Table.Cell collapsing>
        <Button onClick={handleResetClick}>
          <Icon name="undo" size="large" />
          Reset to Pending
        </Button>
      </Table.Cell>
    );
  };

  return (
    <Table.Row padded="true" style={{ fontSize: '18px' }}>
      <Table.Cell>
        <Link to={pageItemPath}>
          <Icon name="search" size="large" />
        </Link>
      </Table.Cell>
      <Table.Cell collapsing>{optimization_type}</Table.Cell>
      <Table.Cell>{content}</Table.Cell>
      <Table.Cell
        style={{
          color: setInsightRowColor(completion_status),
        }}
      >
        {completion_status}
      </Table.Cell>
      {renderActionButtons()}
    </Table.Row>
  );
}
