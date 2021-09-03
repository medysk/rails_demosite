import React from 'react';
import { Character } from '../../types/Character';

export type CharacterBoxOrganismProps = {
  formData: Character;
  handleUpdate: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharacterFormOrganism = (
  props: CharacterBoxOrganismProps,
): JSX.Element => {
  return (
    <form>
      <span>ID:</span>
      <input type="text" name="id" id="id" value={props.formData.id} readOnly />
      <span>Name:</span>
      <input
        type="text"
        name="name"
        id="name"
        value={props.formData.name}
        onChange={(e) => props.handleChange(e)}
      />
      <button onClick={props.handleUpdate}>編集</button>
    </form>
  );
};

export default CharacterFormOrganism;
