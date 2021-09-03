import React, { useEffect, useState } from 'react';
import {
  getCharacters,
  createCharacter,
  deleteCharacter,
} from '../../../api/Character';
import { Character, Characters } from '../../../types/Character';
import IndexTemlate from '../../templates/characters/Index';

const EditPage = (): JSX.Element => {
  const [characters, setCharacters] = useState<Characters>([]);
  const [formData, setFormData] = useState<Character>({ id: 0, name: '' });

  const handleCreate = () => {
    createCharacter(formData).then((createCharacter) => {
      setCharacters(
        characters
          .concat(createCharacter)
          .sort((a, b) => (a.name > b.name ? 1 : -1)),
      );

      setFormData({ id: 0, name: '' });
    });
  };

  const handleDelete = (id: number) => {
    deleteCharacter(id).then((deleteCharacter) => {
      setCharacters(
        characters.filter((character) => character.id != deleteCharacter.id),
      );
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  return (
    <IndexTemlate
      characters={characters}
      formData={formData}
      handleCreate={handleCreate}
      handleDelete={handleDelete}
      handleChange={handleChange}
    />
  );
};

export default EditPage;
