import React from 'react';
import { Route } from 'react-router-dom';
import Item from '../items/item';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => this.props.requestSinglePokemon(this.props.match.params.pokemonId), 500);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    const poke = this.props.pokemon;

    if (!poke || !poke.moves) {
      return null;
    }

    return(
      <div>
        <img src={ poke.image_url } alt={ poke.name } />
        <h3>{ poke.name }</h3>
        <ul>
          <li>Type: { poke.poke_type }</li>
          <li>Attach: { poke.attack }</li>
          <li>Defense: { poke.defense }</li>
          <li>Moves: { poke.moves.join(', ')}</li>
        </ul>
        <ul>
          {this.props.items.map( i => <Item item={ i } key={ i.id }/>)}
        </ul>
        <Route path='/pokemon/:pokemonId/item/:itemId' component={ ItemDetailContainer } />
      </div>
    )
  }
}

export default PokemonDetail;
