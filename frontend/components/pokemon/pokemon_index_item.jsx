import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = ({ pokemon }) => (
  <Link to={`/pokemon/${ pokemon.id }`}>
    <li>
      <span>{ pokemon.id }. </span>
      <img src={ pokemon.image_url } alt={pokemon.name} style={{width: '30px', height: '30px'}}/>
      <span>{ pokemon.name }</span>
    </li>
  </Link>
);

export default PokemonIndexItem;
