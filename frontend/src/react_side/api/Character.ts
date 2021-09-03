import client from './Client';
import { requestWrapper } from './APIHelper';
import { Character, Characters } from '../types/Character';

export const getCharacters = (): Promise<Characters> => {
  const url = '/characters';
  return requestWrapper<Characters>(() => client.get<Characters>(url));
};

export const getCharacter = (id: string): Promise<Character> => {
  const url = `/characters/${id}`;
  return requestWrapper<Character>(() => client.get<Character>(url));
};

export const createCharacter = (character: Character): Promise<Character> => {
  const url = 'characters';
  return requestWrapper<Character>(() => client.post(url, character));
};

export const updateCharacter = (character: Character): Promise<Character> => {
  const url = `/characters/${character.id}`;
  return requestWrapper<Character>(() => client.patch(url, character));
};

export const deleteCharacter = (id: number): Promise<Character> => {
  const url = `/characters/${id}`;
  return requestWrapper<Character>(() => client.delete<Character>(url));
};
