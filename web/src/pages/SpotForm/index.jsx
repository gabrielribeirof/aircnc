import React, { useState, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import cameraIcon from '../../assets/camera.svg';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ThumbnailPreview } from './styles';

const SpotForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [price, setPrice] = useState('');

  const history = useHistory();

  const preview = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append('file', file);
    data.append('name', name);
    data.append('tags', tags);
    data.append('price', price);

    try {
      await api.post('spots', data);

      history.push('/spots');
    } catch (err) {
      alert(err);
    }
  }, [file, name, tags, price, history]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1 className="form-title">Spot</h1>

        <ThumbnailPreview
          style={{ backgroundImage: `url(${preview})` }}
        >
          <input type="file" onChange={(event) => setFile(event.target.files[0])} />
          <img src={cameraIcon} alt="Select" />
        </ThumbnailPreview>

        <Input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          placeholder="Tags (separeted by comma)"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
        />

        <Input
          placeholder="Value per day (blank for free)"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <Button type="submit">Enter</Button>
      </Form>
    </Container>
  );
};

export default SpotForm;
