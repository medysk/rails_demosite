import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../Routes';
import { Character } from '../../../types/Character';
import CharacterBoxOrganism from '../../organisms/CharacterBox';

export type CharacterTemplateProps = {
  character: Character;
  handleDelete: () => void;
};

const CharacterTemplate = (props: CharacterTemplateProps): JSX.Element => {
  return (
    <div>
      <h1>キャラクター詳細ページ</h1>
      <CharacterBoxOrganism {...props.character} />
      <Link to={Paths.characterEditPath(props.character.id.toString())}>
        編集ページ
      </Link>
      <button onClick={props.handleDelete}>削除</button>
    </div>
  );
};

export default CharacterTemplate;
