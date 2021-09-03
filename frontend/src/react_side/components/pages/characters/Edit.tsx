import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Paths } from '../../Routes';
import { getCharacter, updateCharacter } from '../../../api/Character';
import { IdParam } from '../../../types/URIParam';
import { Character } from '../../../types/Character';
import EditTemplate from '../../templates/characters/Edit';

const EditPage = (): JSX.Element => {
  const history = useHistory();
  const [formData, setFormData] = useState<Character>({ id: 0, name: '' });
  const param = useParams<IdParam>();

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    updateCharacter(formData).then(() => {
      history.push(Paths.characterShowPath(formData.id.toString()));
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getCharacter(param.id).then((character) => {
      setFormData(character);
    });
  }, [param]);

  return (
    <EditTemplate
      formData={formData}
      handleUpdate={handleUpdate}
      handleChange={handleChange}
    />
  );
};

export default EditPage;
