import React from 'react';
import { Character } from '../../../types/Character';
import CharacterForm from '../../organisms/CharacterForm';

export type EditTemplateProps = {
  formData: Character;
  handleUpdate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EditTemplate = (props: EditTemplateProps): JSX.Element => {
  return (
    <div>
      <h1>キャラクター編集ページ</h1>
      <CharacterForm
        formData={props.formData}
        handleUpdate={props.handleUpdate}
        handleChange={props.handleChange}
      />
    </div>
  );
};

export default EditTemplate;
