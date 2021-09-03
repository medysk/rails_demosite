import React, { useEffect } from 'react';
import { Character, Characters } from '../../../types/Character';
import CharacterTableOrganism from '../../organisms/CharacterTable';

export type IndexTemplateProps = {
  characters: Characters;
  formData: Character;
  handleDelete: (id: number) => void;
  handleCreate: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const IndexTemplate = (props: IndexTemplateProps): JSX.Element => {
  useEffect(() => {
    document.title = 'RailsTest - Characters';
  }, []);

  return (
    <div>
      <h1>キャラクタートップページ</h1>
      <CharacterTableOrganism
        characters={props.characters}
        formData={props.formData}
        handleCreate={props.handleCreate}
        handleDelete={props.handleDelete}
        handleChange={props.handleChange}
      />
    </div>
  );
};

export default IndexTemplate;
