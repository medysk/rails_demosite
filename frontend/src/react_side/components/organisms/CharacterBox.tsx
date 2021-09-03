import React from 'react';
import { Character } from '../../types/Character';

const CharacterBoxOrganism = (character: Character): JSX.Element => {
  return (
    <div className="character-box">
      <div>id: {character.id}</div>
      <div>name: {character.name}</div>
    </div>
  );
};

export default CharacterBoxOrganism;
