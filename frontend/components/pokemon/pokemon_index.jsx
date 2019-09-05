import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonItem = this.props.pokemon.map(p => (
      <PokemonIndexItem key={p.id} pokemon={ p } />
    ))
    return(
      <section>
        <ul>
          { pokemonItem }
        </ul>
      </section>
    )
  }
}

export default PokemonIndex;
