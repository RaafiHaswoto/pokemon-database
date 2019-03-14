import React, { Component } from 'react';

import PokemonList from '../pokemon/PokemonList';
import SearchBar from '../search/SearchBar';

export default class Homepage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
        <SearchBar />
          <PokemonList />
        </div>
      </div>
    );
  }
}
