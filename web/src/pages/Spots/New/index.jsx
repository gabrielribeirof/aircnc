import React, { useState, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../../contexts/auth';

import api from '../../../services/api';

import cameraIcon from '../../../assets/camera.svg';

import Card from '../../../components/Card';
import Button from '../../../components/Button';

import { ThumbnailPreview } from './styles';

const New = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [price, setPrice] = useState('');

  const { signOut } = useContext(AuthContext);
  const history = useHistory();

  const preview = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  async function handleSubmit(event) {
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
      signOut();
      history.push('/');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <ThumbnailPreview
          id="file"
          style={{ backgroundImage: `url(${preview})` }}
        >
          <input type="file" onChange={(event) => setFile(event.target.files[0])} />
          <img src={cameraIcon} alt="Selecione uma imagem" />
        </ThumbnailPreview>

        <label htmlFor="name">NOME *</label>
        <input
          id="name"
          placeholder="Um nome para o local"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="tags">
          TAGS *
          {' '}
          <span>(separadas por vírgula)</span>
        </label>
        <input
          id="tags"
          placeholder="O que define seu local?"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
        />

        <label htmlFor="price">
          VALOR POR DIA *
          {' '}
          <span>(em branco para GRATUITO)</span>
        </label>
        <input
          id="price"
          placeholder="Valor cobrado por dia"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <Button type="submit">CADASTRAR PONTO</Button>
      </form>
    </Card>
  );
};

export default New;
