import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { destroySite } from '../../store';

export default function Site({ id, domain_name, full_url, pages = [] }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this site?')) {
      dispatch(destroySite(id));
    }
  };

  return (
    <Table.Row padded="true">
      <Table.Cell style={{ fontSize: '18px' }}>
        <Link to={`/sites/${id}/pages`}>
          {domain_name}
        </Link>
      </Table.Cell>
      <Table.Cell style={{ fontSize: '18px' }}>
        <a href={full_url} target="_blank" rel="noreferrer">
          View Site
        </a>
      </Table.Cell>
      <Table.Cell collapsing style={{ fontSize: '18px' }}>
        {pages.length}
      </Table.Cell>
      <Table.Cell collapsing textAlign="right">
        <Button onClick={handleDeleteClick} color="red">
          <Icon inverted name="remove" size="large" />
          Delete Site
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
