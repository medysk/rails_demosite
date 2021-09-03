import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Paths } from '../../Routes';
import { getCharacter, deleteCharacter } from '../../../api/Character';
import { IdParam } from '../../../types/URIParam';
import { Character } from '../../../types/Character';
import ShowTemlate from '../../templates/characters/Show';

const CharacterPage = (): JSX.Element => {
  const history = useHistory();
  const [character, setCharacter] = useState<Character>({ id: 0, name: '' });
  const param = useParams<IdParam>();

  const handleDelete = () => {
    deleteCharacter(character.id).then(() => {
      history.push(Paths.characterIndexPath);
    });
  };

  useEffect(() => {
    getCharacter(param.id).then((character) => {
      setCharacter(character);
    });
  }, [param]);

  return <ShowTemlate character={character} handleDelete={handleDelete} />;
};

export default CharacterPage;
