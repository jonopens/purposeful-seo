import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { createPage } from '../../store';

export default function AddPageForm({ handleClose, site }) {
  const [page_path, setPagePath] = useState('');
  const [pathFails, setPathFails] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPage({
      page_path,
      site_id: site?.id,
    }));
    handleClose();
    setPagePath('');
  };

  return (
    <Form onSubmit={handleSubmit} error warning width={6}>
      <Form.Field>
        <Form.Input
          onChange={(e) => setPagePath(e.target.value)}
          label="Page Path"
          placeholder="e.g. /product/sweet-punk-band-hoodie.html"
          value={page_path}
          required
        />
      </Form.Field>
      <Button type="submit" disabled={pathFails}>
        Submit
      </Button>
    </Form>
  );
}
