import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
      <div>
        <section>
          <Route path='/pokemon/:pokemonId' component={ PokemonDetailContainer } />
          <ol>
            {
              this.props.pokemon.map(p => <PokemonIndexItem key={ p.id } pokemon={ p } />)
            }
          </ol>
        </section>
      </div>
    )
  }
}

export default PokemonIndex;
