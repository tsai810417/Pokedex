import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <Link to={`/pokemon/${ pokemon.id }`}>
      <img src={ pokemon.image_url } alt={pokemon.name} style={{width: '30px', height: '30px'}}/>
      <span>{ pokemon.name }</span>
    </Link>
  </li>
);
