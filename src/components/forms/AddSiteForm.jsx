import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { createSite } from '../../store';

export default function AddSiteForm({ handleClose }) {
  const [value, setValue] = useState('http');
  const [domain_name, setDomainName] = useState('');
  const [full_url, setFullUrl] = useState('');
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSite({
      protocol: value,
      user_id: user?.id,
      full_url,
      domain_name,
    }));
    handleClose();
    setValue('http');
    setDomainName('');
    setFullUrl('');
  };

  const handleDomainChange = (e) => {
    const domain = e.target.value;
    setDomainName(domain);
    setFullUrl(`${value}://${domain}`);
  };

  return (
    <Form onSubmit={handleSubmit} error warning width={6}>
      <Form.Group>
        <label style={{ fontWeight: 'bold' }}>Protocol:</label>
        <Form.Radio
          onChange={(e, { value: v }) => setValue(v)}
          name="protocol"
          label="http"
          value="http"
          checked={value === 'http'}
        />
        <Form.Radio
          onChange={(e, { value: v }) => setValue(v)}
          name="protocol"
          label="https"
          value="https"
          checked={value === 'https'}
        />
      </Form.Group>
      <Form.Field required>
        <Form.Input
          onChange={handleDomainChange}
          label="Domain Name"
          placeholder="e.g. www.example.com"
          value={domain_name}
          required
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
