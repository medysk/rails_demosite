import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../Routes';
import { Character, Characters } from '../../types/Character';

export type CharacterBoxOrganismProps = {
  characters: Characters;
  formData: Character;
  handleDelete: (id: number) => void;
  handleCreate: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharacterTableOrganism = (
  props: CharacterBoxOrganismProps,
): JSX.Element => {
  return (
    <table className="character-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.characters.map((character, idx) => (
          <tr key={idx}>
            <td>{character.id}</td>
            <td>{character.name}</td>
            <td>
              <Link to={Paths.characterShowPath(character.id.toString())}>
                詳細
              </Link>
            </td>
            <td>
              <button onClick={() => props.handleDelete(character.id)}>
                削除
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              name="name"
              id="name"
              value={props.formData.name}
              onChange={(e) => props.handleChange(e)}
            />
          </td>
          <td></td>
          <td>
            <button onClick={props.handleCreate}>追加</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CharacterTableOrganism;
