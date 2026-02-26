import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Icon, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { destroyPageAndCleanup, startPageScraper } from '../../store';

export default function Page({ id, siteId, title, page_path, word_count }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this page?')) {
      dispatch(destroyPageAndCleanup(id));
    }
  };

  const handleCrawlClick = () => {
    if (window.confirm('Are you sure you want to start crawling this page?')) {
      dispatch(startPageScraper(id));
    }
  };

  if (title) {
    return (
      <Table.Row padded="true">
        <Table.Cell style={{ fontSize: '18px' }}>
          <Link to={`/sites/${siteId}/pages/${id}`}>
            <Icon name="search" size="large" />
          </Link>
        </Table.Cell>
        <Table.Cell collapsing style={{ fontSize: '18px' }}>
          {page_path}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {title}
        </Table.Cell>
        <Table.Cell style={{ fontSize: '18px' }}>
          {word_count}
        </Table.Cell>
        <Table.Cell collapsing textAlign="right">
          <Button onClick={handleDeleteClick} color="red">
            <Icon inverted name="remove" size="large" />
            Delete Page
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Table.Row padded="true">
      <Table.Cell collapsing negative style={{ fontSize: '18px' }}>
        <Icon name="exclamation triangle" size="large" />
      </Table.Cell>
      <Table.Cell negative style={{ fontSize: '18px' }}>
        {page_path}
      </Table.Cell>
      <Table.Cell collapsing negative style={{ fontSize: '18px' }}>
        Page has not been crawled. Start crawl? {'=>'}
      </Table.Cell>
      <Table.Cell collapsing negative style={{ fontSize: '18px' }}>
        0
      </Table.Cell>
      <Table.Cell collapsing negative textAlign="right">
        <Button onClick={handleCrawlClick} color="blue">
          <Icon inverted name="bug" size="large" />
          Begin Crawl
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
