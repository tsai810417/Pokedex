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
    if (this.props.loading.allPokemon) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      )
    }

    return(
      <div id='pokedex'>
        <section id='pokemon-index'>
          <ol id='index-list'>
            {
              this.props.pokemon.map(p => <PokemonIndexItem key={ p.id } pokemon={ p } />)
            }
          </ol>
        </section>
        <Route path='/pokemon/:pokemonId' component={ PokemonDetailContainer } />
      </div>
    )
  }
}

export default PokemonIndex;
