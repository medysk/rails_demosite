import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CharacterIndex from './pages/characters/Index';
import CharacterShow from './pages/characters/Show';
import CharacterEdit from './pages/characters/Edit';

export const Paths = {
  homePath: '/react',
  characterIndexPath: '/react/characters',
  characterShowPath: (id: string): string => `/react/characters/${id}`,
  characterEditPath: (id: string): string => `/react/characters/${id}/edit`,
};

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path={Paths.homePath} exact>
        <Home />
      </Route>
      <Route path={Paths.characterIndexPath} exact>
        <CharacterIndex />
      </Route>
      <Route path={Paths.characterShowPath(':id')} exact>
        <CharacterShow />
      </Route>
      <Route path={Paths.characterEditPath(':id')} exact>
        <CharacterEdit />
      </Route>
    </Switch>
  );
};

export default Routes;
