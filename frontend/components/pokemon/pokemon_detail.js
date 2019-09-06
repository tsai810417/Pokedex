import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    const poke = this.props.pokemon;

    if (!poke.poke_type) {
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
      </div>
    )
  }
}

export default PokemonDetail;
