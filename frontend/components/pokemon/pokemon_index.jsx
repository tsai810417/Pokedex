import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonItem = this.props.pokemon.map(p => (
      <li key={p.id} className="pokemon-index-item">
        <img src={p.image_url} alt={p.name} style={{width: '30px', height: '30px'}}/>
        <span>{ p.name }</span>
      </li>
    ))
    return(
      <ul>
        { pokemonItem }
      </ul>
    )
  }
}

export default PokemonIndex;
